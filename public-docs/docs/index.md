<p>
  <a href="https://github.com/pallavbakshi/datainpane">
    <img src="static/datainpane-icon.svg" width="64px" alt="Data In Pane" />
  </a>
</p>

!!! info
    Data In Pane is a modernized fork of the original [Datapane](https://github.com/datapane/datapane) project (created by the Datapane team, 2019-2023). Updated for Python 3.12+, pandas 3.x, Bokeh 3.x, and modern dependencies. Focuses on free, local report generation — no cloud service required.

## Overview

Data In Pane makes it simple to build interactive reports in seconds using Python.

Import Data In Pane's Python library into your script or notebook and build reports programmatically by wrapping components such as:

- Pandas DataFrames
- Plots from Python visualization libraries such as Bokeh, Altair, Plotly, Matplotlib, and Folium
- Markdown, code blocks, and LaTeX formulas
- Files, images, and HTML embeds

Reports can contain pages, tabs, groups, selects, toggles, and more. Export as self-contained HTML or high-quality PDF.

## Key Features

- **`dip` CLI** — `dip serve report.py` gives you a live-reload dev server. Edit your script, the browser refreshes automatically. `dip build` for one-shot builds.
- **PDF Export** — `dip.save_pdf(view, "report.pdf")` renders reports to crisp, print-ready PDFs with properly sized charts and styled tables.
- **8 Built-in Themes** — Default, Dark, Midnight, Ocean, Forest, Coral, Monochrome, and Navy Apricot. Apply with `Formatting.from_theme(Theme.DARK)`. Custom CSS also supported.
- **6 Plot Libraries** — Altair, Plotly, Matplotlib, Bokeh, Folium, and pandas DataFrames all work out of the box.
- **Convenience Blocks** — `Callout`, `Progress`, `BarChart`, `LineChart`, `AreaChart`, `ScatterChart`, and `Diff` for common patterns without boilerplate.
- **Offline Mode** — `save_report(view, path, offline=True)` bundles all JS/CSS inline for fully self-contained HTML.
- **Dark Mode Toggle** — Add a floating toggle button with `Formatting(dark_mode_toggle=True)`.
- **Table of Contents** — `save_report(view, path, toc=True)` generates a sidebar from Page titles and Group labels.
- **Header/Footer Branding** — `Formatting(header="...", footer="...")` for logos and branding.
- **Multi-Page Export** — `save_report_pages(view, dest="output/")` saves each Page as a separate HTML file.
- **Report Templates** — `dip.templates.dashboard()`, `titled_pages()`, `descriptive_pages()` for instant layouts.
- **Jupyter Magic** — `%%dip` cell magic renders reports inline in notebooks.
- **Accessibility** — ARIA roles on all generated HTML components.
- **Polars & great_tables** — Auto-convert Polars DataFrames and great_tables GT objects.

## Quick Example

```python
import datainpane as dip
import pandas as pd

df = pd.DataFrame({"x": [1, 2, 3], "y": [10, 20, 30]})

view = dip.Blocks(
    dip.Text("## My Report"),
    dip.DataTable(df),
    dip.BigNumber(heading="Total", value="60"),
)

dip.save_report(view, path="report.html")
dip.save_pdf(view, path="report.pdf")  # pip install datainpane[pdf]
```

## Get started

Get up and running with our [Quickstart](./quickstart.ipynb), or dig deeper into the rest of the docs.
