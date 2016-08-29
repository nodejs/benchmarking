# Key Runtime Attributes

This doc is intended to capture the key runtime attributes for Node.js.
These attributes will be used along with the use-cases in order to
guide what we develop/run as part of the community benchmarking
efforts.

# Attributes

The following attributes have been identified so far:

* startup/stop time
* memory footprint at startup
* memory footprint after load metrics are collected (timing will depend
  on the specific benchmark)
* Node.js process cpu usage when idle
* max throughput as measured through max http requests served/s
* gc cpu use under load
* gc allocation throughput under load
* gc max pause times under load
* install package size
* size on disk once installed

