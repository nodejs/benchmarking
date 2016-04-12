# Node Benchmarking meeting Apr 12 2016

## Agenda

* Stand up
* Actions from last meeting
* Review use cases - https://github.com/nodejs/benchmarking/pull/36
* Open issues review

## Present

* Michael Dawson @mhdawson
* Gareth Ellis gareth-ellis
* Uttam Pawar (uttam.c.pawar@intel.com)
* Alexandru Oancea (alexandru.oancea@intel.com)

## Round Table
* Michael - work to get benchmarking.nodejs.org live, Pull request for core Node.js use cases, on             todo list: additions to capture 6.x data, table for coverage of benchmarks against use cases, ansible to for benchmark machine config.

* Gareth - Acme air scripts as part of benchmarking.nodejs.org.  Other benchmarking which exposed one buffer regression, speaking at Node.js live in paris on benchmarking

* Uttam - downloaded and running Acme air.  I.ll update my status. We have developed a method with few modifications in ApacheBench program to measure very accurately requests/sec metrics. We have developed .SPEC. like methodology to capture the environment and performance data.Will be presenting first to this group very soon and then for the rest of the community.   

* Alexandru - run Acme air along with some other micro-benchmarks from  benchmarking repo.  Currently trying to make it very stable. Seeing a standard deviation and working to make minimize it.  Also looking at other benchmarks that have been used in the past to analyze Node.js  

## Agenda items

### Actions from last meeting


We discussed the actions from last time. One action on Ali was rolled over since he was not available this time.

### Review use cases - https://github.com/nodejs/benchmarking/pull/36
Discussion around things like stressing gc, native memory etc.  Agreed those are also important and should go into another document titled something like .key runtime attributes. .  Michael took action to submit PR for initial version of that doc.

We walked through the PR with the uses cases and there were no suggested changes so will plan to go ahead and land the PR.

### Open issues review

We reviewed and discussed the open issues.  Uttam mentioned a few things they are working on and will be raising new issues to cover that work.

## Actions for next meeting
* Ali to look at issue in hydrogen mentioned by Gareth
* Michael to submit initial version of PR for key runtime attributes
* Uttam to open issues for the activities he mentioned 

## Next meeting

Michael to set next meeting for 3-4 weeks from now.
