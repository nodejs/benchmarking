#!/bin/bash
host=$1
port=$2
if [ -z $port ]; then
echo "usage: loaddb.sh host port"
exit 1
fi
wget -qO- http://${host}:${port}/rest/api/loader/load?numCustomers=10000
