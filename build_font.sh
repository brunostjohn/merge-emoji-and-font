#!/bin/bash
node ./convert_to_svg.js
mv ./build/svg ./nanoemoji
cd nanoemoji
python3 -m venv ./
source bin/activate
python3 -m pip install -e .
nanoemoji --ignore_reuse_error -v 0 --color_format=glyf_colr_0 $(find ./svg -name '*.svg')