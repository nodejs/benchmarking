#!/bin/bash
export BASEDIR=/home/benchmark
export HOME=$BASEDIR
export PATH=$BASEDIR/node/bin:$PATH
cd $BASEDIR/benchmarking/tools/acceptResults
node bridge.js "10.52.6.151" &
