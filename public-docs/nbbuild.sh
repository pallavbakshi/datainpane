#!/bin/bash
set -euo pipefail

# We build against the datainpane source, so reference the assets in /dev
# which are continuously released
export DIP_CDN_BASE="${DIP_CDN_BASE:-https://datainpane-cdn.com/dev}"
export PYTHONWARNINGS="ignore"

echo "Building against CDN: ${DIP_CDN_BASE}"

# Prevent a real browser from being discovered for Apps that request `open=True`.
# We never want it during the docs build
# we use `true`, as it should always be available, and always give a '0' exit code
export BROWSER='true'


# remove artifacts before building
find docs -type f \( -name '*.html' -o -name '*-preview.png' \) -delete

find docs -type f -name '*.ipynb' -not -path '*.ipynb_checkpoints*' -print0 | while IFS= read -r -d '' f; do
    cd "${f%/*}"
    uv run jupyter nbconvert --to notebook --inplace --ExecutePreprocessor.timeout=-1 --ClearMetadataPreprocessor.enabled=True --ClearMetadataPreprocessor.preserve_cell_metadata_mask tags --execute "${f##*/}"
    cd -
done
