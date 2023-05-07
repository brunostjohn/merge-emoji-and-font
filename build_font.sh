#!/bin/bash
node ./convert_to_svg.js

for f in ./build/svg*
do
    temp=${f#"./build/"}
    mkdir ./nanoemoji-$temp
    cd ./nanoemoji-$temp
    https://github.com/googlefonts/nanoemoji.git
    mv ../build/$temp ./nanoemoji/svg
    cd nanoemoji
    python3 -m venv .
    source bin/activate
    python3 -m pip install -e .
    deactivate
    cd ../..
done

for f in ./build/svg*
do
    (cd ./nanoemoji-$temp/nanoemoji && source bin/activate && nanoemoji --ignore_reuse_error -v 0 --color_format=glyf_colr_0 $(find ./svg -name '*.svg') && deactivate && cd ..) &
done

wait