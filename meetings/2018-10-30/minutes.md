# Node.js Foundation Benchmarking WorkGroup Meeting 2018-10-30

## Links

* **Recording**: https://www.youtube.com/watch?v=XD_yOrPD7-E
* **GitHub Issue**: https://github.com/nodejs/benchmarking/issues/250

## Present

* Michael Dawson (@mhdawson)
* Jamie Davis (@davisjam)
* Uttam Pawar (@uttampawar)1

## Agenda

## Announcements
 
*Extracted from **benchmarking-agenda** labelled issues and pull requests from the **nodejs org** prior to the meeting.

* Jamie, on calls with folks at Oracle and other academic institutions. They seem interested in 
  benchmark development and analysis validation. Potential of a coalition forming out there. 
  Early stages but some have additional benchmarks (some use ACME air) that they would 
  be willing to contribute them back.  Also interest in contributing data formats, configurations,
  etc.  Michael any reason they would not want to drive it as part of this work. Jamie Not sure.
  They’re definitely interested in using benchmarks, and an easy way to feed them in.
* Jamie has undergrad who is studying metrics used by N|Solid and Node Clinic to see
  if there are any other metrics that we should be collecting. For example event loop blocking 
  time and gc metrics. Data for diagnostics vs. data for workload fingerprinting.

### nodejs/benchmarking

* Investigate the time taken, and number of benchmarks in core [#225](https://github.com/nodejs/benchmarking/issues/225)
  * We don’t have Gareth so we’ll skip.

* Require cached pref much lower [#202](https://github.com/nodejs/benchmarking/issues/202)
  * Narrowed down to specific commit
  * Unclear whether we’re measuring the right thing?
  * Unclear what the benchmarking framework is doing?
  * Uttam will continue to investigate.  

* Add Ghost.js workload to the benchmarking [#159](https://github.com/nodejs/benchmarking/issues/159)
  * Next on Uttam’s list.   

* Simplify multiple scripts, logs in nodejsbenchmarking infrastructure [#155](https://github.com/nodejs/benchmarking/issues/155)
  * Have been attending meeting to see if we can re-use code from somewhere else
  * Does not sound like there is something else that would run our set of benchmarks in a
    consistent manner
  * Jamie or undergrad will start working on this soon.

* Candidate benchmarks [#6](https://github.com/nodejs/benchmarking/issues/6)
  * Related to announcement above, none of the people Jamie has talked to have
    concrete additions to make.
  * Oracle folks may have something benchmark that we might be able to use.  Also
    possibly one from the BBC (??).

## Q&A, Other

*  No questions this week.

## Upcoming Meetings

* **Node.js Foundation Calendar**: https://nodejs.org/calendar

Click `+GoogleCalendar` at the bottom right to add to your own Google calendar.


