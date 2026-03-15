"""Tests for end-to-end report saving with various block combinations."""
import os

import pandas as pd
import pytest

import datainpane as dip


def test_save_minimal_report(tmp_path):
    """Save a report with a single text block."""
    path = tmp_path / "minimal.html"
    view = dip.Blocks(dip.Text("Hello"))
    dip.save_report(view, path=str(path))
    assert path.exists()
    assert path.stat().st_size > 0


def test_save_report_with_dataframe(tmp_path):
    """Save a report containing a DataTable."""
    path = tmp_path / "df.html"
    df = pd.DataFrame({"a": range(50), "b": [f"row_{i}" for i in range(50)]})
    view = dip.Blocks(dip.DataTable(df))
    dip.save_report(view, path=str(path))
    assert path.exists()


def test_save_report_with_all_text_blocks(tmp_path):
    """Save a report with every text-based block type."""
    path = tmp_path / "text_blocks.html"
    view = dip.Blocks(
        dip.Text("# Markdown heading"),
        dip.Code("x = 1 + 2", language="python"),
        dip.Formula(r"E = mc^2"),
        dip.HTML("<p>Raw HTML</p>"),
        dip.BigNumber(heading="Value", value="42"),
    )
    dip.save_report(view, path=str(path))
    assert path.exists()


def test_save_report_with_layout(tmp_path):
    """Save a report with nested layout blocks."""
    path = tmp_path / "layout.html"
    view = dip.Blocks(
        dip.Page(
            dip.Group(
                dip.BigNumber(heading="A", value="1"),
                dip.BigNumber(heading="B", value="2"),
                columns=2,
            ),
            dip.Select(
                dip.Text("First tab", label="Tab 1"),
                dip.Text("Second tab", label="Tab 2"),
            ),
            title="Main",
        ),
        dip.Page(
            dip.Toggle(
                dip.Text("Open content"),
                dip.Text("More content"),
                label="Details",
            ),
            title="Extra",
        ),
    )
    dip.save_report(view, path=str(path))
    assert path.exists()


def test_save_report_with_bokeh(tmp_path):
    """Save a report containing a Bokeh 3 plot."""
    from bokeh.plotting import figure

    path = tmp_path / "bokeh.html"
    p = figure(title="Test", width=400, height=300)
    p.line([1, 2, 3], [4, 5, 6])

    view = dip.Blocks(dip.Plot(p))
    dip.save_report(view, path=str(path))
    assert path.exists()
    assert path.stat().st_size > 100


def test_save_report_with_altair(tmp_path):
    """Save a report containing an Altair chart."""
    import altair as alt

    path = tmp_path / "altair.html"
    df = pd.DataFrame({"x": [1, 2, 3], "y": [4, 5, 6]})
    chart = alt.Chart(df).mark_point().encode(x="x", y="y")

    view = dip.Blocks(dip.Plot(chart))
    dip.save_report(view, path=str(path))
    assert path.exists()


def test_save_report_custom_name(tmp_path):
    """The name parameter should be accepted."""
    path = tmp_path / "named.html"
    view = dip.Blocks(dip.Text("Test"))
    dip.save_report(view, path=str(path), name="My Custom Report")
    assert path.exists()


def test_save_report_overwrites(tmp_path):
    """Saving to the same path should overwrite."""
    path = tmp_path / "overwrite.html"
    view1 = dip.Blocks(dip.Text("Version 1"))
    dip.save_report(view1, path=str(path))
    size1 = path.stat().st_size

    view2 = dip.Blocks(dip.Text("Version 2 with more content"))
    dip.save_report(view2, path=str(path))
    assert path.exists()
