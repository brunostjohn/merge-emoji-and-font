#!/bin/bash
node ./convert_to_svg.js

for f in ./build
do
    mkdir ./nanoemoji-$f
    cp -R ./nanoemoji/* ./nanoemoji-$f/
    mv ./build/$f ./nanoemoji-$f/svg
    python3 -m venv ./nanoemoji-$f/
    cd ./nanoemoji-$f
    source bin/activate
    python3 -m pip install -e .
    deactivate
done

for f in ./build
do
    (cd ./nanoemoji-$f/ && source bin/activate && nanoemoji --ignore_reuse_error -v 0 --color_format=glyf_colr_0 $(find ./svg -name '*.svg') && deactivate) &
done

wait