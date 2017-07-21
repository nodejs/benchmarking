#!/bin/bash
if ! [ -f $1 ]; then
  echo "Not a file"
  exit
fi
fileOrig=$1
file=$1
log=$2
sed '/done/q' $file >${file}.tmp
cat ${file}.tmp | grep -v "top"|grep -v procs > ${file}
idle_values=`cat $file|grep 'Cpu(s)' | sed 's/,/\r\n/g'|grep "id"|sed 's/[%id ]*//g'`
node_values=`cat $file|grep 'node' | awk {'print $9'}`
mongo_values=`cat $file|grep 'mongo' | awk {'print $9'}`
python_values=`cat $file|grep 'python' | awk {'print $9'}`
idle_time=`echo $idle_values|awk 'BEGIN { sum=0 ; count=0} {for(i = 3; i <= NF; i++) {sum=sum+$i; count=count+1 }} END {print sum/count}'`
node_percentage=`echo $node_values|awk  'BEGIN { sum=0 ; count=0} {for(i = 3; i <= NF; i++) {sum=sum+$i; count=count+1 }} END {print sum/count}'`
python_percentage=`echo $python_values|awk  'BEGIN { sum=0 ; count=0} {for(i = 3; i <= NF; i++) {sum=sum+$i; count=count+1 }} END {print sum/count}'`
mongo_percentage=`echo $mongo_values|awk  'BEGIN { sum=0 ; count=0} {for(i = 3; i <= NF; i++) {sum=sum+$i; count=count+1 }} END {print sum/count}'`

cpu_usage=`echo "100-$idle_time"|bc`
echo "$log utilization $cpu_usage %"
echo "node utilization $node_percentage %"
echo "mongo utilization $mongo_percentage %"
echo "python utilization $python_percentage %"
rm ${1}.tmp
