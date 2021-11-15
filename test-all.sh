#!/bin/bash
abi="source/*.json"
min="minify/*.json"

echo -e " Initial size: $(cat $abi | wc -c) bytes  ($abi) "
echo -e " Minified size: $(cat $min | wc -c) bytes  ($min) "
echo -e " Gzipped size: $(cat $min | gzip -c | wc -c) bytes "

#echo -e " Compare Webpack size: $(cat $webpack | wc -c) bytes  ($webpack) "
#echo -e " Compare Original size: $(cat $original | wc -c) bytes  ($original) "
