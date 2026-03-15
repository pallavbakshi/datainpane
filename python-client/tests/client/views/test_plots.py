"""Tests for plot serialization across all supported plotting libraries."""
import json
from pathlib import Path

import pandas as pd
import pytest

import datainpane as dip
from datainpane.builtins import gen_df
from datainpane.processors import ConvertXML, Pipeline, PreProcessView, ViewState
from datainpane.processors.file_store import B64FileEntry


def _view_to_state(view: dip.Blocks) -> ViewState:
    s = ViewState(blocks=view, file_entry_klass=B64FileEntry)
    return Pipeline(s).pipe(PreProcessView()).pipe(ConvertXML()).state


# Bokeh 3.x
def test_bokeh_plot():
    from bokeh.plotting import figure

    p = figure(title="Test Bokeh", width=400, height=300)
    p.line([1, 2, 3], [4, 5, 6], legend_label="Line")

    view = dip.Blocks(dip.Plot(p))
    state = _view_to_state(view)
    assert len(state.store.file_list) == 1

    # Verify the Bokeh JSON was serialized correctly
    from bokeh.embed import json_item
    item = json_item(p)
    assert "doc" in item
    assert "root_id" in item
    # Bokeh 3.x: roots is a list of inline objects, not {root_ids, references}
    assert isinstance(item["doc"]["roots"], list)
    assert len(item["doc"]["roots"]) > 0


def test_bokeh_layout():
    from bokeh.layouts import column
    from bokeh.plotting import figure

    p1 = figure(title="Plot 1", width=300, height=200)
    p1.scatter([1, 2], [3, 4])
    p2 = figure(title="Plot 2", width=300, height=200)
    p2.line([1, 2], [3, 4])
    layout = column(p1, p2)

    view = dip.Blocks(dip.Plot(layout))
    state = _view_to_state(view)
    assert len(state.store.file_list) == 1


# Altair (always installed)
def test_altair_plot():
    import altair as alt

    df = gen_df(20)
    chart = alt.Chart(df).mark_point().encode(x=df.columns[0], y=df.columns[1])

    view = dip.Blocks(dip.Plot(chart))
    state = _view_to_state(view)
    assert len(state.store.file_list) == 1

    # Verify altair produces vega-lite JSON
    chart_dict = chart.to_dict()
    assert "$schema" in chart_dict


# Plotly
def test_plotly_plot():
    plotly = pytest.importorskip("plotly")
    import plotly.graph_objects as go

    fig = go.Figure(data=go.Scatter(x=[1, 2, 3], y=[4, 5, 6]))

    view = dip.Blocks(dip.Plot(fig))
    state = _view_to_state(view)
    assert len(state.store.file_list) == 1


# Matplotlib
def test_matplotlib_plot():
    matplotlib = pytest.importorskip("matplotlib")
    import matplotlib.pyplot as plt

    fig, ax = plt.subplots()
    ax.plot([1, 2, 3], [4, 5, 6])

    view = dip.Blocks(dip.Plot(fig))
    state = _view_to_state(view)
    assert len(state.store.file_list) == 1

    # Also test passing Axes directly
    view2 = dip.Blocks(dip.Plot(ax))
    state2 = _view_to_state(view2)
    assert len(state2.store.file_list) == 1
    plt.close("all")


# Folium
def test_folium_map():
    folium = pytest.importorskip("folium")

    m = folium.Map(location=[45.5236, -122.6750], tiles="OpenStreetMap")

    view = dip.Blocks(dip.Plot(m))
    state = _view_to_state(view)
    assert len(state.store.file_list) == 1
