#!/bin/bash

# extract path for script we assume nodeStartup.js is in
# the same directory as this script
SCRIPT_PATH=`readlink -f $0`
SCRIPT_DIR=`dirname $SCRIPT_PATH`

for i in `seq 1 $1`
do
  node $SCRIPT_DIR/nodeStartup.js
done

