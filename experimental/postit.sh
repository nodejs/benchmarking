#!/bin/bash
CUR_TIME=`date +%s`
wget -O result --user=xxxx --password=xxxxx --no-check-certificate  "https://10.52.6.151:3000?streamid=$1&benchid=$2&time=$CUR_TIME&value=$3" >/dev/null 2>&1
cat result

