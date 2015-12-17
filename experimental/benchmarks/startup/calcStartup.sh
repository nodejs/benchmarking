#/bin/bash
ITERATIONS=500

# extract path for script we assume startNode.sh is in the
# same directory as this script
SCRIPT_PATH=`readlink -f $0`
SCRIPT_DIR=`dirname $SCRIPT_PATH`

time -o total_time -f "%e" sh $SCRIPT_DIR/startNode.sh $ITERATIONS
TOTAL=`cat total_time`
cat total_time | awk 'BEGIN{print ('$TOTAL'*1000000)/'$ITERATIONS'}'
