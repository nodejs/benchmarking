#!/bin/bash
#shopt -s -o nounset

start=`date +%s`
#set locations so we don't end up with lots of hard coded bits throughout script
RESOURCE_DIR=$1  ### This is where mongod binary is located
WORKLOAD_DIR=$2
REL_DIR=$(dirname $0)
ROOT_DIR=`cd "${REL_DIR}/.."; pwd`
echo "ROOT_DIR=${ROOT_DIR}"
SCRIPT_DIR=${ROOT_DIR}/node-dc-eis
NODEDCEIS_DIR=${WORKLOAD_DIR}/Node-DC-EIS-cluster
MONGO_DIR=${RESOURCE_DIR}/mongo3

EXIT_STATUS=0

#these may need changing when we find out more about the machine we're running on
NODE_AFFINITY="numactl --physcpubind=0,4"
MONGO_AFFINITY="numactl --physcpubind=1,5"
RUNSPEC_AFFINITY="numactl --physcpubind=2,6"

function usage() {
  echo "USAGE:"
  echo "Currently this script will run Node-DC-EIS-Cluster and mongodb, with the affinities as follows:"
  echo "Node : $(echo ${NODE_AFFINITY})"
  echo "Mongodb : $(echo ${MONGO_AFFINITY})"
  echo "Client : $(echo ${RUNSPEC_AFFINITY})"
}

function mandatory() {
  if [ -z "${!1}" ]; then
    echo "${1} not set"
    usage
    exit 1
  fi
}

function optional() {
  if [ -z "${!1}" ]; then
    echo -n "${1} not set (ok)"
    if [ -n "${2}" ]; then
      echo -n ", default is: ${2}"
      export ${1}="${2}"
    fi
    echo ""
  fi
}

function remove(){
  if [ -f $1 ]; then
    rm $1
  fi
}

function stop_node_process() {
    echo -e "\n## STOPPING NODE PROCESS ##"
    case ${PLATFORM} in
      Linux)
        bash ${SCRIPT_DIR}/kill_node_linux
        ;;
    esac
}

function stop_client() {
    echo -e "\n## STOPPING CLIENT PROCESS ##"
    pkill python
}

function stop_mongodb() {
  MONGODB_COMMAND="${MONGO_DIR}/mongodb.sh"
  echo -e "\n## STOPPING MONGODB ##"
  echo -e " $MONGODB_COMMAND stop"
  $MONGODB_COMMAND stop
}

function archive_files() {
  # archive files
  echo -e "\n##BEGIN $TEST_NAME Archiving $(date)\n"
  mkdir -p $ARCHIVE_DIR
  mv $LOGDIR_TEMP/* $ARCHIVE_DIR
  echo -e "Perf logs stored in $ARCHIVE_DIR"
  echo -e "\nCleaning up"
  rm -r $LOGDIR_TEMP
  echo -e "\n## END $TEST_NAME Archiving $(date)\n"
}

function on_exit()
{
    echo "Caught kill"
    stop_client
    stop_node_process
    stop_mongodb
    archive_files
    exit ${EXIT_STATUS}
}

function timestamp()
{
  date +"%Y%m%d-%H%M%S"
}

trap on_exit SIGINT SIGQUIT SIGTERM

# Utility functions
function hugepages_stats() {
  case ${PLATFORM} in
    Linux)
      HPPRETOTAL=`cat /proc/meminfo | grep HugePages_Total | sed 's/HugePages.*: *//g' | head -n 1`
      HPPREFREE=`cat /proc/meminfo | grep HugePages_Free | sed 's/HugePages.*: *//g' | head -n 2|tail -n 1`
      let HPPREINUSE=$HPPRETOTAL-$HPPREFREE
      echo "HP IN USE : " ${HPPREINUSE}
      ;;
  esac
}

# Check Node binary exists and it's version
function check_if_node_exists() {
  if [ -z $NODE ]; then
    NODE=`which node`
  else
    echo "ERROR: Could not find a 'node' executable. Please set the NODE environment variable or update the PATH."
    echo "node is not here: $NODE"
    exit 1
  fi
  echo -e "NODE VERSION:"
  $NODE --version
}

# Start node.js application server
function check_node_app_status() {
  NODEAPP_START_THRESHOLD=120
  MIN_SLEEP=2
  TOTAL_SLEEP=0
  while true
  do
    x=`grep "Mongoose connected to the database" $RESULTSLOG`
    if [ "x${x}" != "x" ]; then
      break
    fi
    TOTAL_SLEEP=`expr $TOTAL_SLEEP + $MIN_SLEEP`
    if [ $TOTAL_SLEEP -ge $NODEAPP_START_THRESHOLD ]; then
      echo "Exceeded nodeapp start time. [default: $NODEAPP_START_THRESHOLD secs]. Exit the run"
      EXIT_STATUS=1
      on_exit
    fi
    sleep $MIN_SLEEP
  done
  echo "Server started ..."
}

# Collect CPU statistics for Node, mongodb, driver program (python in case of node-dc-eis, jmeter for acmeair)
function collect_cpu_stats() {
  client_program_name="python"
  db_program_name="mongod"
  node_program_name="node"

  PIDS="`ps -ef | grep ${client_program_name} | grep -v grep | awk {'print $2'}`"
  PIDS="$PIDS `ps -ef | grep ${db_program_name} | grep -v grep | awk {'print $2'}`"
  PIDS="$PIDS `ps -ef | grep ${node_program_name} | grep -v grep | awk {'print $2'}`"
  PIDS_COMMA=`echo $PIDS | sed 's/ /,/g'`
  echo "Getting CPU% for following processes: $PIDS_COMMA"

  SERVER_CPU_COMMAND="top -b -d 5 -n 47 -p $PIDS_COMMA"
  $SERVER_CPU_COMMAND >> $SERVER_CPU_STAT &
}

# Some supporting function may not need
function check_if_client_finished() {
  # Check if client has finished
  CLIENT_STATUS="success"
  while true
  do
    x=`grep "ImportError" $RESULTSLOG`
    if [ "x${x}" != "x" ]; then
      echo "Client has missing dependencies"
      CLIENT_STATUS="failed"
      EXIT_STATUS=1
      on_exit
    fi
    x=`grep "Drivers have finished running" $RESULTSLOG`
    if [ "x${x}" != "x" ]; then
      break
    else
      x=`grep "ERROR: driver failed or killed" $RESULTSLOG`
      if [ "x${x}" != "x" ]; then
        CLIENT_STATUS="failed"
        break
      fi
    fi
    sleep 2
  done
  echo "Client finished: (${CLIENT_STATUS})"
}

function start_mongodb_server() {
  MONGODB_COMMAND="${MONGO_DIR}/mongodb.sh"
  echo -e "\n## STARTING MONGODB ##" 2>&1 | tee -a $RESULTSLOG
  echo -e " $MONGODB_COMMAND start" | tee -a $RESULTSLOG
  $MONGO_AFFINITY $MONGODB_COMMAND start 2>&1 | tee -a $RESULTSLOG
}

# Start nodeapp server
function start_nodeapp_server() {
  echo -e "\n## SERVER COMMAND ##" 2>&1 | tee -a $LOGFILE
  echo -e " $CPUAFFINITY $NODE_APP_CMD" 2>&1 | tee -a $LOGFILE
  echo -e "## BEGIN TEST ##\n" 2>&1 | tee -a $LOGFILE

  (
    pushd ${NODEDCEIS_DIR}
    echo $CPUAFFINITY $NODE_APP_CMD
    $NODE_ROOT/deps/npm/bin/npm-cli.js install 2>&1 | tee -a $RESULTLOG
    #npm install 2>&1 | tee -a $RESULTSLOG
    $CPUAFFINITY $NODE_APP_CMD 2>&1 | tee -a $RESULTSLOG
    echo -e "\n## Node Server no longer running ##"
    popd
  ) &

  # Check if node application server is up
  check_node_app_status
}

function start_client() {
  echo -e "\n## DRIVER COMMAND ##" 2>&1 | tee -a $RESULTSLOG
  echo -e "$DRIVER_COMMAND" | tee -a $RESULTSLOG

  (
    if (exec $DRIVER_COMMAND 2>&1 | tee -a ${RESULTSLOG}) ; then
        echo "Drivers have finished running" | tee -a $RESULTSLOG
    else
        echo "ERROR: driver failed or killed" | tee -a $RESULTSLOG
        echo "fail" | tee -a $RESULTSLOG
    fi
  ) &
}

# VARIABLE SECTION

# define variables
declare -rx SCRIPT=${0##*/}
TEST_NAME=node-dc-eis
echo -e "\n## TEST: $TEST_NAME ##\n"

echo -e "## OPTIONS ##\n"
optional RESULTSDIR ${ROOT_DIR}/results
export LOGDIR_TEMP=$RESULTSDIR/temp
mkdir -p $LOGDIR_TEMP

optional TIMEOUT 100
CUR_DATE=$(timestamp)
RESULTSLOG=$LOGDIR_TEMP/$TEST_NAME.log
SUMLOG=$LOGDIR_TEMP/score_summary.txt
SERVER_CPU_STAT=$LOGDIR_TEMP/server_cpu.txt
ARCHIVE_DIR=$RESULTSDIR/$CUR_DATE

optional DRIVERHOST
optional NODE_FILE server-cluster
optional CLUSTER_MODE false
optional PORT 9000
optional DRIVERCMD ${WORKLOAD_DIR}/Node-DC-EIS-client/runspec.py
optional DRIVERCMD_OPTIONS "--nograph"
optional DRIVERNO 25

NODEDC_DRIVER_PATH=${SCRIPT_DIR}/Node-DC-EIS-client

NODE_SERVER=$(hostname -s)
echo -e "RESULTSDIR: $RESULTSDIR"
echo -e "RESULTSLOG: $RESULTSLOG"
echo -e "TIMEOUT: $TIMEOUT"
echo -e "NODE_SERVER: $NODE_SERVER"
echo -e "PORT: $PORT"
echo -e "NETWORKTYPE: $NETWORKTYPE"
echo -e "DRIVERCMD: $DRIVERCMD"
echo -e "DRIVERNO: $DRIVERNO\n"
echo -e "MONGODB_URL: $DB_URL\n"

DRIVER_COMMAND="$RUNSPEC_AFFINITY python $DRIVERCMD -f ${WORKLOAD_DIR}/Node-DC-EIS-client/config.json -dir ${RESULTSDIR} ${DRIVERCMD_OPTIONS}"
# END VARIABLE SECTION

# Date stamp for result files generated by this run
CUR_DATE=$(timestamp)

PLATFORM=`/bin/uname | cut -f1 -d_`
echo -e "Platform identified as: ${PLATFORM}\n"

# Stop existing node processes if still running
stop_node_process

# Check if node executable exists
check_if_node_exists

# build command
NODE_APP_CMD="$NODE_AFFINITY ${NODE} ${NODE_FILE}"

# Get hugepage information
hugepages_stats

# Source footprint collection/calculation script
. ${SCRIPT_DIR}/fp.sh

# Start a mongodb instance
start_mongodb_server

# Start nodeapp server
start_nodeapp_server

# Get the memory footprint just before the run
pre=`getFootprint`
echo -n "Pre run Footprint in kb : $pre"

# Start the client driver command
# Start client
start_client

# Collect CPU statistics
collect_cpu_stats

# Check if client finished
check_if_client_finished

# Get the memory footprint just after the run
post=`getFootprint`
echo -n "Post run Footprint in kb : $post"
echo
let footprint_diff=$post-$pre
echo
echo "Footprint diff: $footprint_diff"

# Start the timeout
(
    sleep $TIMEOUT
    echo "TIMEOUT (${TIMEOUT})"
)

echo "Timeout occurred"

# Process/Show CPU stats

bash ${SCRIPT_DIR}/cpuParse.sh ${SERVER_CPU_STAT} "server"

# Print output

echo "SUMFILE is: ${SUMLOG}"

echo -e "\n##BEGIN $TEST_NAME OUPTUT $(date)\n" 2>&1 | tee -a $SUMLOG
echo metric throughput $(cat $RESULTSLOG | grep ^Throughput| uniq | cut -d'=' -f2) 2>&1 | tee -a $SUMLOG
echo metric latency $(cat $RESULTSLOG | grep "Response time 99 percentile" | cut -d'=' -f2) 2>&1 | tee -a $SUMLOG
echo mv $RESULTSLOG $LOGDIR_TEMP/$LOGDIR_PREFIX

echo "metric pre footprint $pre"
echo "metric post footprint $post"
echo "metric footprint increase $difference"
echo -e "\n## TEST COMPLETE ##\n" 2>&1 | tee -a $SUMLOG
echo -e "\n## END $TEST_NAME OUTPUT $(date)\n\n" 2>&1 | tee -a $SUMLOG

end=`date +%s`
echo
echo "Start: $start"
echo "End  : $end"
echo

let elapsed=$end-$start
echo "Elapsed time : $elapsed"

echo "Done."
EXIT_STATUS=0

# Clean up on_exit() function
on_exit

