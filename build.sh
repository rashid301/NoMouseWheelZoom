!#/bin/bash

deliverable="deliverable"
output="NoMouseWheelZoom.zip"

rm -Rf $deliverable;

mkdir $deliverable;

cp contentscript.js manifest.json NoMouseWheelZoom.min.js $deliverable

zip -r $output $deliverable/*
