# Node.js Foundation Benchmarking WorkGroup Meeting 2018-06-05

## Links

* **Recording**:  https://www.youtube.com/watch?v=CWAOkMHtOQ0
* **GitHub Issue**: https://github.com/nodejs/benchmarking/issues/224

## Present

* Michael Dawson (@mhdawson)
* Gareth Ellis (@gareth-ellis)
* A.J. Roberts (@detrohutt)
* Uttam Pawar (@uttampawar)

## Agenda

## Announcements

*Extracted from **benchmarking-agenda** labelled issues and pull requests from the **nodejs org** prior to the meeting.

### nodejs/benchmarking


* Footprint increase - acmeair after load last 2 weeks [#203](https://github.com/nodejs/benchmarking/issues/203)
  * fix incomming

* Require cached pref much lower [#202](https://github.com/nodejs/benchmarking/issues/202)
  * Uttam cannot reproduce on his machine
  * Michael/Uttam to co-ordinate getting Uttam access.

* Add Ghost.js workload to the benchmarking [#159](https://github.com/nodejs/benchmarking/issues/159)
  * next on Uttam’s list.
  * Ghost runs in 2 modes, one in dev one in production
  * Perf of production mode is almost 2x dev mode, we should run in production mode
  * Now ready try it out.
  * Will need to install docker

* Brainstorm capturing/documenting areas people can contribute [#222](https://github.com/nodejs/benchmarking/issues/222)

  * Look at use case/ benchmark matrix and help to fill in missing coverage.
  * Help to build ansible templates for build machines.
  * Update benchmark infra to add notifications.
    * detect when there is a regression
    * Identify list of commits (with authors) between builds with a regression
    * send notification (email, issue or whatever)
  * Benchmark to cover promise/async usage: https://github.com/nodejs/benchmarking/issues/188
  * Raise awareness of how to raise an issue: https://github.com/nodejs/benchmarking/issues/196
  * Simplify scripts - https://github.com/nodejs/benchmarking/issues/155 (Uttam)
  * add release dates to charts https://github.com/nodejs/benchmarking/issues/35
  * capture commit hash https://github.com/nodejs/benchmarking/issues/34
  * Complete “regression hunt” tool, document and add to repo. (Uttam).  Automating
    run of the workload possibly through Jenkins.
  * Documentation review
    * Read through existing doc find gaps
    * Write up doc for missing parts.
  * Core benchmarks - identify subset of buffer tests that make sense to run in 30 mins or so,
    work to generate number from those runs, and then publish run/nightly

* Gareth will spend some time looking through old minutes to see if there are some
  additional things we can add as well.
* Gareth will open issue to start to capture additional info on core benchmarks as starting
  point.https://github.com/nodejs/benchmarking/issues/225

## Q&A, Other

## Upcoming Meetings

* **Node.js Foundation Calendar**: https://nodejs.org/calendar

Click `+GoogleCalendar` at the bottom right to add to your own Google calendar.
