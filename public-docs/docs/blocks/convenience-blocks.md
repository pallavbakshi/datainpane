---
description: Quick charts, callouts, progress bars, and diffs
---

# Convenience Blocks

Convenience blocks provide quick, opinionated wrappers for common patterns so you don't need to write boilerplate.

## Charts

Thin wrappers around Altair that create charts from a DataFrame in one line:

```python
import datainpane as dip
import pandas as pd

df = pd.DataFrame({"month": ["Jan", "Feb", "Mar"], "revenue": [100, 150, 200]})

dip.BarChart(df, x="month", y="revenue")
dip.LineChart(df, x="date", y="temperature")
dip.AreaChart(df, x="month", y="revenue")
dip.ScatterChart(df, x="height", y="weight", color="species")
```

All chart functions accept:

| Parameter | Description |
|-----------|-------------|
| `df` | DataFrame with the data |
| `x` | Column name for x-axis (default: first column) |
| `y` | Column name for y-axis (default: second column) |
| `color` | Column name for color encoding (optional) |
| `title` | Chart title (optional) |
| `name` | Block name (optional) |
| `label` | Block label (optional) |

Each chart type also has a color parameter (`bar_color`, `line_color`, `area_color`, `point_color`) with sensible defaults.

## Callout

Styled alert boxes for drawing attention to important information:

```python
dip.Callout("Remember to validate your data!", type="warning")
dip.Callout("Pipeline complete.", type="success", title="Done")
```

Available types: `note`, `tip`, `warning`, `error`, `info`, `success`.

Callouts use CSS variables for colors, so they work correctly with the dark mode toggle.

## Progress

Visual progress bars:

```python
dip.Progress(0.75, label="Training")
dip.Progress(0.42, label="Upload", color="#22c55e")
```

| Parameter | Description |
|-----------|-------------|
| `value` | Progress value between 0.0 and 1.0 |
| `label` | Optional label text |
| `color` | Bar color (default: apricot `#FB923C`) |

## Diff

Compare two DataFrames with color-highlighted changes:

```python
df_old = pd.DataFrame({"name": ["Alice", "Bob"], "score": [85, 92]})
df_new = pd.DataFrame({"name": ["Alice", "Bob", "Carol"], "score": [90, 92, 78]})

dip.Diff(df_old, df_new)
```

Highlights:

- **Green** — added rows/values
- **Yellow** — changed values (shows `old → new`)
- **Red** — removed rows/values

Works best when both DataFrames share the same columns. Rows are aligned by index.

## SVG Support

Include SVG images directly without saving to disk:

```python
svg = '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><circle cx="50" cy="50" r="40" fill="#FB923C"/></svg>'
dip.Media(data=svg)
```

`Media` accepts either `file=` (path) or `data=` (string/bytes content).
