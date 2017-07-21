#!/bin/bash

function getFootprint() {
if [ -z $1 ]; then
	PIDS=`ps -ef|grep /node|grep -v grep|grep -v tee|grep -v sh|awk {'print $2'}`
else
	PIDS=$1
fi
export PIDS
FP_LOG=$LOGDIR_TEMP/footprint_output.log
for SERVER_PID in $PIDS
do
				FOOTPRINT=`ps -p ${SERVER_PID} -o rss,vsz,comm,pid | tail -n 1 | awk '{ print $1 }'`
				HPTOTAL=`cat /proc/meminfo | grep ^HugePages | sed 's/HugePages.*: *//g' | head -n 1`
				HPFREE=` cat /proc/meminfo | grep ^HugePages | sed 's/HugePages.*: *//g' | head -n 2 | tail -n 1`
				HPRESVD=` cat /proc/meminfo | grep ^HugePages | sed 's/HugePages.*: *//g' | head -n 3 | tail -n 1`
				let HPINUSE=$HPTOTAL-$HPFREE-$HPPREINUSE
				echo "HPs in use by node: ${HPINUSE}">>$FP_LOG
				HPSIZE=`cat /proc/meminfo | grep ^Hugepagesize | sed 's/[a-zA-Z :]*//g'`
				let HPSIZE=$HPINUSE*$HPSIZE
				echo "HP size in kb "${HPSIZE}>>$FP_LOG
				FOOTPRINT_NOHP=$FOOTPRINT
				let FOOTPRINT=$FOOTPRINT+$HPSIZE
				echo "Displaying top output:">>$FP_LOG
				command="top -b -n 1 -p ${SERVER_PID}"
				echo "Command to run : ${command}">>$FP_LOG
				${command} >> $FP_LOG
				echo "RSS from smaps:">>$FP_LOG
				SMAPS_RSS=`grep Rss /proc/${SERVER_PID}/smaps | awk '{x+=$2} END {print x}'`
				echo "SMAPS_RSS ${SERVER_PID}: ${SMAPS_RSS}">>$FP_LOG
				SMAPS_PSS=`grep Pss /proc/${SERVER_PID}/smaps | awk '{x+=$2} END {print x}'`
				echo "SMAPS_PSS ${SERVER_PID}: ${SMAPS_PSS}" >>$FP_LOG
echo "${FOOTPRINT}" |tee -a footprint_output.log
done
}
