"""Tests for individual block types and layout combinations."""
import pandas as pd
import pytest

import datainpane as dip
from datainpane.client.exceptions import DPClientError
from datainpane.processors import ConvertXML, Pipeline, PreProcessView, ViewState
from datainpane.processors.file_store import B64FileEntry
from datainpane.common.viewxml_utils import validate_view_doc


def _to_xml(view: dip.Blocks) -> str:
    s = ViewState(blocks=view, file_entry_klass=B64FileEntry)
    state = Pipeline(s).pipe(PreProcessView()).pipe(ConvertXML()).state
    return state.view_xml


# Text blocks
def test_text_from_string():
    view = dip.Blocks(dip.Text("# Hello\n\nWorld"))
    xml = _to_xml(view)
    assert validate_view_doc(xml_str=xml)
    assert "Hello" in xml


def test_text_multiline():
    view = dip.Blocks(dip.Text("""
        # Heading

        Paragraph with **bold** and *italic*.

        - Item 1
        - Item 2
    """))
    xml = _to_xml(view)
    assert validate_view_doc(xml_str=xml)


def test_text_empty_raises():
    with pytest.raises(ValueError):
        dip.Text("")

    with pytest.raises(ValueError):
        dip.Text("   ")


# Code block
def test_code_block():
    view = dip.Blocks(dip.Code("print('hello')", language="python"))
    xml = _to_xml(view)
    assert validate_view_doc(xml_str=xml)
    assert "print" in xml


# Formula block
def test_formula_block():
    view = dip.Blocks(dip.Formula(r"\frac{1}{\sqrt{x^2 + 1}}"))
    xml = _to_xml(view)
    assert validate_view_doc(xml_str=xml)


# HTML block
def test_html_block():
    view = dip.Blocks(dip.HTML("<h1>Hello</h1><p>World</p>"))
    xml = _to_xml(view)
    assert validate_view_doc(xml_str=xml)


# BigNumber block
def test_big_number():
    view = dip.Blocks(dip.BigNumber(heading="Revenue", value="$1.2M"))
    xml = _to_xml(view)
    assert validate_view_doc(xml_str=xml)
    assert "Revenue" in xml


def test_big_number_with_change():
    view = dip.Blocks(
        dip.BigNumber(heading="Users", value="10,000", change="500", is_upward_change=True)
    )
    xml = _to_xml(view)
    assert validate_view_doc(xml_str=xml)


# Embed block
def test_embed_block():
    view = dip.Blocks(dip.Embed(url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"))
    xml = _to_xml(view)
    assert validate_view_doc(xml_str=xml)


# Empty block
def test_empty_block():
    view = dip.Blocks(dip.Empty(name="placeholder"))
    xml = _to_xml(view)
    assert validate_view_doc(xml_str=xml)


# Table blocks
def test_table_block():
    df = pd.DataFrame({"a": [1, 2, 3], "b": ["x", "y", "z"]})
    view = dip.Blocks(dip.Table(df))
    xml = _to_xml(view)
    assert validate_view_doc(xml_str=xml)


def test_datatable_block():
    df = pd.DataFrame({"a": range(100), "b": [f"val_{i}" for i in range(100)]})
    view = dip.Blocks(dip.DataTable(df))
    xml = _to_xml(view)
    assert validate_view_doc(xml_str=xml)


def test_datatable_empty_raises():
    with pytest.raises(DPClientError):
        view = dip.Blocks(dip.DataTable(pd.DataFrame()))
        _to_xml(view)


# Attachment block
def test_attachment_dict():
    view = dip.Blocks(dip.Attachment(data={"key": "value"}))
    xml = _to_xml(view)
    assert validate_view_doc(xml_str=xml)


def test_attachment_list():
    view = dip.Blocks(dip.Attachment(data=[1, 2, 3]))
    xml = _to_xml(view)
    assert validate_view_doc(xml_str=xml)


# Layout blocks
def test_group_columns():
    view = dip.Blocks(
        dip.Group(
            dip.Text("Left"),
            dip.Text("Right"),
            columns=2,
        )
    )
    xml = _to_xml(view)
    assert validate_view_doc(xml_str=xml)


def test_select_tabs():
    view = dip.Blocks(
        dip.Select(
            dip.Text("Tab 1", label="First"),
            dip.Text("Tab 2", label="Second"),
            type=dip.SelectType.TABS,
        )
    )
    xml = _to_xml(view)
    assert validate_view_doc(xml_str=xml)


def test_select_dropdown():
    view = dip.Blocks(
        dip.Select(
            dip.Text("Option A", label="A"),
            dip.Text("Option B", label="B"),
            type=dip.SelectType.DROPDOWN,
        )
    )
    xml = _to_xml(view)
    assert validate_view_doc(xml_str=xml)


def test_select_too_few_raises():
    with pytest.raises(DPClientError):
        view = dip.Blocks(dip.Select(dip.Text("Only one")))
        _to_xml(view)


def test_toggle():
    view = dip.Blocks(
        dip.Toggle(
            dip.Text("Content A"),
            dip.Text("Content B"),
            label="Toggle Me",
        )
    )
    xml = _to_xml(view)
    assert validate_view_doc(xml_str=xml)


def test_page_multipage():
    view = dip.Blocks(
        dip.Page(dip.Text("Page 1 content"), title="Page 1"),
        dip.Page(dip.Text("Page 2 content"), title="Page 2"),
        dip.Page(dip.Text("Page 3 content"), title="Page 3"),
    )
    xml = _to_xml(view)
    assert validate_view_doc(xml_str=xml)


# Complex nested layout
def test_complex_nested_layout():
    df = pd.DataFrame({"x": range(10), "y": range(10)})

    view = dip.Blocks(
        dip.Page(
            dip.Group(
                dip.BigNumber(heading="A", value="100"),
                dip.BigNumber(heading="B", value="200"),
                columns=2,
            ),
            dip.Select(
                dip.Table(df, label="Table"),
                dip.Text("## Summary\n\nAll good.", label="Summary"),
                type=dip.SelectType.TABS,
            ),
            title="Dashboard",
        ),
        dip.Page(
            dip.Text("# Details\n\nMore info here."),
            dip.Code("SELECT * FROM table", language="sql"),
            title="Details",
        ),
    )
    xml = _to_xml(view)
    assert validate_view_doc(xml_str=xml)
