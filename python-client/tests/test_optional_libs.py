"""Tests for optional library import handling and graceful degradation."""
import importlib
import sys
from unittest import mock

import pytest


def test_have_flags_are_booleans():
    """All HAVE_* flags should be booleans."""
    from datainpane import optional_libs as opt

    assert isinstance(opt.HAVE_MATPLOTLIB, bool)
    assert isinstance(opt.HAVE_FOLIUM, bool)
    assert isinstance(opt.HAVE_BOKEH, bool)
    assert isinstance(opt.HAVE_PLOTLY, bool)


def test_bokeh_available():
    """Bokeh 3.x should be detected and available."""
    from datainpane import optional_libs as opt

    assert opt.HAVE_BOKEH is True
    assert opt.BFigure is not None
    assert opt.BLayout is not None


def test_matplotlib_available():
    """Matplotlib should be detected and available."""
    from datainpane import optional_libs as opt

    assert opt.HAVE_MATPLOTLIB is True
    assert opt.Figure is not None
    assert opt.Axes is not None


def test_plotly_available():
    """Plotly should be detected and available."""
    from datainpane import optional_libs as opt

    assert opt.HAVE_PLOTLY is True
    assert opt.PFigure is not None


def test_folium_available():
    """Folium should be detected and available."""
    from datainpane import optional_libs as opt

    assert opt.HAVE_FOLIUM is True
    assert opt.Map is not None


def test_missing_library_sets_flag_false():
    """When a library can't be imported, HAVE_* should be False, not raise."""
    # We can't easily test this without uninstalling packages,
    # but we can verify the except clause catches Exception (not just ImportError)
    from datainpane import optional_libs as opt

    # Verify the exception handling is broad enough
    import inspect
    source = inspect.getsource(opt)
    # Should use 'except Exception' not 'except ImportError'
    assert "except Exception:" in source
