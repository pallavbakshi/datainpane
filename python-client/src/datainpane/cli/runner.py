"""Run user scripts and resolve output paths."""
from __future__ import annotations

import subprocess
import sys
from pathlib import Path


def resolve_output_path(script_path: Path, output: str | None) -> Path:
    """Determine the HTML output path for a script."""
    if output:
        return Path(output).resolve()
    return script_path.with_suffix(".html")


def run_script(script_path: Path) -> subprocess.CompletedProcess:
    """Run a user Python script in a subprocess."""
    return subprocess.run(
        [sys.executable, str(script_path)],
        cwd=str(script_path.parent),
    )
