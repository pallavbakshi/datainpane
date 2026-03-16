"""dip — Data In Pane CLI."""
from __future__ import annotations

import argparse
import sys
from pathlib import Path


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(
        prog="dip",
        description="Data In Pane — build interactive reports from Python",
    )
    parser.add_argument("--version", action="store_true", help="Show version and exit")
    subparsers = parser.add_subparsers(dest="command")

    # dip build
    build_p = subparsers.add_parser("build", help="Run a script and build its HTML report")
    build_p.add_argument("script", help="Path to the Python script")
    build_p.add_argument("-o", "--output", help="Output HTML path (default: {script}.html)")

    # dip serve
    serve_p = subparsers.add_parser("serve", help="Serve a report with live reload")
    serve_p.add_argument("script", help="Path to the Python script")
    serve_p.add_argument("-o", "--output", help="Output HTML path (default: {script}.html)")
    serve_p.add_argument("-p", "--port", type=int, default=8000, help="Port (default: 8000)")
    serve_p.add_argument("--no-open", action="store_true", help="Don't open browser automatically")

    args = parser.parse_args(argv)

    if args.version:
        from datainpane import __version__
        print(f"dip (datainpane) {__version__}")
        return 0

    if not args.command:
        parser.print_help()
        return 0

    if args.command == "build":
        return cmd_build(args)
    elif args.command == "serve":
        return cmd_serve(args)
    return 1


def _validate_script(script: str) -> Path | None:
    path = Path(script).resolve()
    if not path.exists():
        print(f"Error: file not found: {script}", file=sys.stderr)
        return None
    if not path.suffix == ".py":
        print(f"Error: expected a .py file, got: {script}", file=sys.stderr)
        return None
    return path


def cmd_build(args) -> int:
    from .runner import resolve_output_path, run_script

    script_path = _validate_script(args.script)
    if not script_path:
        return 1

    output_path = resolve_output_path(script_path, args.output)
    print(f"Building {script_path.name} -> {output_path.name}")

    result = run_script(script_path)
    if result.returncode != 0:
        print(f"Script failed (exit {result.returncode})", file=sys.stderr)
        return result.returncode

    if output_path.exists():
        size_kb = output_path.stat().st_size / 1024
        print(f"Done! {output_path} ({size_kb:.0f} KB)")
    else:
        print(f"Warning: script exited successfully but {output_path.name} was not created.")
        print(f"Make sure your script calls dip.save_report(view, path=\"{output_path.name}\")")
    return 0


def cmd_serve(args) -> int:
    from .runner import resolve_output_path, run_script
    from .server import start_server

    script_path = _validate_script(args.script)
    if not script_path:
        return 1

    output_path = resolve_output_path(script_path, args.output)

    # Initial build
    print(f"Building {script_path.name}...")
    result = run_script(script_path)
    if result.returncode != 0:
        print(f"Initial build failed (exit {result.returncode})", file=sys.stderr)
        return result.returncode

    if not output_path.exists():
        print(f"Error: {output_path.name} was not created by the script.", file=sys.stderr)
        print(f"Make sure your script calls dip.save_report(view, path=\"{output_path.name}\")")
        return 1

    try:
        start_server(
            script_path=script_path,
            html_path=output_path,
            port=args.port,
            open_browser=not args.no_open,
        )
    except OSError as e:
        if "Address already in use" in str(e) or "10048" in str(e):
            print(f"Error: port {args.port} is already in use. Try --port {args.port + 1}", file=sys.stderr)
        else:
            print(f"Error: {e}", file=sys.stderr)
        return 1
    return 0


def cli():
    sys.exit(main())


if __name__ == "__main__":
    cli()
