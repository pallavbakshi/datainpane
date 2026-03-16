"""Dev server with SSE-based live reload."""
from __future__ import annotations

import sys
import threading
import time
from http.server import HTTPServer, SimpleHTTPRequestHandler
from pathlib import Path

from .runner import run_script

RELOAD_SNIPPET = b"""<script>
(function() {
  var es = new EventSource("/_reload");
  es.onmessage = function() { location.reload(); };
  es.onerror = function() { setTimeout(function() { location.reload(); }, 2000); };
})();
</script>
"""


class LiveReloadHandler(SimpleHTTPRequestHandler):
    """HTTP handler that injects live-reload and exposes an SSE endpoint."""

    html_path: Path
    reload_event: threading.Event

    def do_GET(self):
        if self.path == "/_reload":
            self._handle_sse()
        elif self.path == "/" or self.path == "/index.html":
            self._serve_html_with_livereload()
        else:
            super().do_GET()

    def _handle_sse(self):
        self.send_response(200)
        self.send_header("Content-Type", "text/event-stream")
        self.send_header("Cache-Control", "no-cache")
        self.send_header("Connection", "keep-alive")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()
        try:
            while True:
                self.reload_event.wait()
                self.reload_event.clear()
                self.wfile.write(b"data: reload\n\n")
                self.wfile.flush()
        except (BrokenPipeError, ConnectionResetError):
            pass

    def _serve_html_with_livereload(self):
        try:
            html = self.html_path.read_bytes()
        except FileNotFoundError:
            self.send_error(404, "Report not found — has the script run successfully?")
            return

        # Inject live-reload snippet before </body>
        injection_point = html.rfind(b"</body>")
        if injection_point != -1:
            html = html[:injection_point] + RELOAD_SNIPPET + html[injection_point:]

        self.send_response(200)
        self.send_header("Content-Type", "text/html; charset=utf-8")
        self.send_header("Content-Length", str(len(html)))
        self.send_header("Cache-Control", "no-cache")
        self.end_headers()
        self.wfile.write(html)

    def log_message(self, format, *args):
        # Suppress noisy request logs, only show errors
        if args and isinstance(args[0], str) and args[0].startswith("GET /_reload"):
            return
        super().log_message(format, *args)


def watch_and_rebuild(
    script_path: Path,
    reload_event: threading.Event,
    poll_interval: float = 1.0,
):
    """Poll the script file for changes and rebuild on modification."""
    last_mtime = script_path.stat().st_mtime
    while True:
        time.sleep(poll_interval)
        try:
            current_mtime = script_path.stat().st_mtime
        except OSError:
            continue
        if current_mtime != last_mtime:
            last_mtime = current_mtime
            print(f"\n--- File changed, rebuilding... ---", file=sys.stderr)
            result = run_script(script_path)
            if result.returncode == 0:
                print(f"--- Rebuild complete ---", file=sys.stderr)
                reload_event.set()
            else:
                print(f"--- Script error (exit {result.returncode}) ---", file=sys.stderr)


def start_server(
    script_path: Path,
    html_path: Path,
    port: int = 8000,
    open_browser: bool = True,
):
    """Start the dev server with live reload."""
    reload_event = threading.Event()

    # Configure the handler class
    handler = type("Handler", (LiveReloadHandler,), {
        "html_path": html_path,
        "reload_event": reload_event,
    })
    # Serve from the directory containing the HTML file
    handler.directory = str(html_path.parent)  # type: ignore[attr-defined]

    server = HTTPServer(("127.0.0.1", port), handler)

    # Start the file watcher in a daemon thread
    watcher = threading.Thread(
        target=watch_and_rebuild,
        args=(script_path, reload_event),
        daemon=True,
    )
    watcher.start()

    url = f"http://127.0.0.1:{port}"
    print(f"\n  dip serve\n")
    print(f"  Serving:  {html_path.name}")
    print(f"  Watching: {script_path.name}")
    print(f"  URL:      {url}")
    print(f"\n  Press Ctrl+C to stop.\n")

    if open_browser:
        import webbrowser
        webbrowser.open(url)

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down.")
        server.shutdown()
