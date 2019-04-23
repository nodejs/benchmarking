# Node.js Foundation Benchmarking WorkGroup Meeting 2019-03-05

## Links

* **Recording**: https://www.youtube.com/watch?v=ENd5uGJtjaw
* **GitHub Issue**: $GITHUB_ISSUE$

## Present

* Michael Dawson (@mhdawson)
* Uttam Pawar (@uttampawar)
* Jamie Davis (@davisjam)
* Jonathan Alexander (@Jonathan-Alexander)

## Agenda

## Announcements
 
*Extracted from **benchmarking-agenda** labelled issues and pull requests from the **nodejs org** prior to the meeting.

### nodejs/benchmarking

* Investigate the time taken, and number of benchmarks in core [#225](https://github.com/nodejs/benchmarking/issues/225)
  * Uttam, takes a very long time. Took 3 days
  * Maybe we can pick some.
  * Uttam will ask one of his team members can do this.

* Add Ghost.js workload to the benchmarking [#159](https://github.com/nodejs/benchmarking/issues/159)
  - discussed in today meeting, because does not build on master and
    looking at it the belief it’s not necessarily a good candidate since it
    Mostly serves static content after starting.
  - Jamie: Possibly select some others from [here](https://github.com/sqreen/awesome-nodejs-projects)?

* Simplify multiple scripts, logs in nodejsbenchmarking infrastructure [#155](https://github.com/nodejs/benchmarking/issues/155)  
  * Jamie have not made progress. 

* Candidate benchmarks [#6](https://github.com/nodejs/benchmarking/issues/6)
  * No progress

* Node-DC-EIS micro-services fix [#81](https://github.com/Node-DC/Node-DC-EIS/pull/81)
  * Jamie: Jonathan has been trying to run Node.js benchmarking suite locally. A while back
    opened issue about running in micro-services mode (cf. 
    https://github.com/Node-DC/Node-DC-EIS/issues/78)
  * Have identified cause and opened pull request, Jonathan gave quick overview of
    problem.  Uttam will review.
  * Uttam, was it easy to use other than the error, have not tested it as much as with monolithic
    versions.  As long as run on same machine, should not be weird network issues.
  * Jamie, we should probably add this since it exercises 
    new code paths (DNS, inter-app messages, requests, etc.)
  * For benchmarking, need to think about core pinning. Probably just round-robin across the
    cores in the way we currently pin for a single app. "One app, 8 processes". Could cluster-ize 
    each service if we had a bigger machine.
  * Jonathan will open an issue to track adding Node-DC-EIS-uservice into the regular
    benchmark suite.

## Q&A, Other

## Upcoming Meetings

* **Node.js Foundation Calendar**: https://nodejs.org/calendar

Click `+GoogleCalendar` at the bottom right to add to your own Google calendar.


