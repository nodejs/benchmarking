# Node Benchmarking meeting 12 Jan 2017

Unfortunately youtube live did not co-operate so we don't have a recording.

## Agenda
* Stand up
* Actions from last meeting
* Review https://github.com/nodejs/benchmarking/pull/55 and talk about how to fill in gaps
* Review https://github.com/nodejs/benchmarking/issues/86
* Review https://github.com/nodejs/benchmarking/issues/63
* https://github.com/nodejs/node/issues/1409
* Open issues review

## Present
* Michael Dawson (@mhdawson)
* Ian Halliday (@ianwjhalliday)
* Gareth Ellis (@gareth-ellis)
* Kunal Pathak (@kunalspathak)
* Ian Halliday (@ianwjhalliday)
* savthvik
* Anil Kumar (@kumarkan)
* Priyanak

## Round Table
* Michael Dawson - working with Wayne to fix up graph scales.
* Ian Halliday - starting to ramp up involved, nothing to report this week.
* Kunal Pathak - working on pgo see discussion under item 1409 .
* Gareth Ellis  - busy with other work, a bit of work for bench to
  track cpu use on idle.
* sathvik - looking at opportunities to optimize performance.
  of node.js ubuntu/intel using bgo as well.  Working on Node-CD-EIS, see
  discussion under issue 86.
* Anil - Working on Node-CD-EIS, see discussion under issue 86.

## Agenda items

### Actions from last meeting
* we moved this to the end and ran out of time, will review next time

### Review https://github.com/nodejs/benchmarking/pull/55 and talk about how to fill in gaps
* we moved this to the end and ran out of time, will review next time

### Review https://github.com/nodejs/benchmarking/issues/86

Intel has developed a new Node.js benchmark suite (Node-DC-EIS).
We should be able to use it to cover additional cases in
https://github.com/nodejs/benchmarking/pull/55 as a first step. Their existing
daily runs are here: http://languagesperformance.intel.com/.

After general discussion we agreed on the following next steps:

* Deep dive presentation at "special" meeting for this topic. Michael to
  schedule.
* Anil/sathvik to propose suggested run configurations to cover
  entries in https://github.com/nodejs/benchmarking/blob/master/docs/case_coverage.md
* Anil/sathvik to look at ACME air script as template, submit PR to add nightly
  runs for suggested run configurations. (worth mentioning that a docker
  file exists for acme air in benchmarking too)
* Every to try to review/comment on https://github.com/Node-DC/Node-DC-EIS
  in respect to being a good Node.js benchmark/framework

### Review https://github.com/nodejs/benchmarking/issues/63

* Need Michael Paulson to discuss further so rolling over to next
  regular meeting.

### https://github.com/nodejs/node/issues/1409
* Kunal has been working/experimenting with PGO on windows based on issue
  https://github.com/nodejs/node/issues/1409
* He had a lot of information to present so we agreed we need a separate
  "special" meeting dedicate to that topic. Michael to schedule.
* Some good results so looks interesting.
* Kunal will present background on PGO, and then results he has seen so far
* All to try and read up so we have more context to start with.
* Sathvik mentioned he has also looked at PGO for ubuntu/intel and will
  share some information on what he had done.

### Open issues/PR review

* we ran out of time so will review in next regular meeting


## Actions for next meeting
* Michael and Gareth to work on additional benchmarks as discussed above.
* Ali to open issue on ignition discussion.
* Michael to schedule 2 special meetings mentioned above.

## Next meeting

Michael to set special meetings for 2 weeks from now (he's away next week)
We will set next regular meeting after those two are completed.
