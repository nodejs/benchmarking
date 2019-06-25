#!/bin/bash
CURRENT_DIR=`pwd`
node gencharts.js $CURRENT_DIR/../../benchmarks $CURRENT_DIR/node_modules/.bin/phantomjs 
