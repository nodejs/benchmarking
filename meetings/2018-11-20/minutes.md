# Node.js Foundation Benchmarking WorkGroup Meeting 2018-11-20

## Links

* **Recording**:  https://www.youtube.com/watch?v=pF-9Fmt1mn8
* **GitHub Issue**: https://github.com/nodejs/benchmarking/issues/253

## Present

* Uttam Pawar (@uttampawar)
* Michael Dawson (@mhdawson)

## Agenda

## Announcements
 
*Extracted from **benchmarking-agenda** labelled issues and pull requests from the **nodejs org** prior to the meeting.

### nodejs/benchmarking

* Investigate the time taken, and number of benchmarks in core [#225](https://github.com/nodejs/benchmarking/issues/225)
  * Skipping as we don’t have Garett

* Require cached pref much lower [#202](https://github.com/nodejs/benchmarking/issues/202)
  * Running separately seems to give the expected behaviour
    * Seems like it is related to how the benchmark is run.
    * Reversing the order seems to get us the expected time
    * Uttam will look at the name to see if there is a problem on that front and framework is 
      combining the results together.

* Add Ghost.js workload to the benchmarking [#159](https://github.com/nodejs/benchmarking/issues/159)
  * Next on Uttam’s list
  * Jamie may also look at as part of his example work but don’t have an update

* Simplify multiple scripts, logs in nodejsbenchmarking infrastructure 
  [#155](https://github.com/nodejs/benchmarking/issues/155)
  * skip as we don’t have Jamie
* Candidate benchmarks [#6](https://github.com/nodejs/benchmarking/issues/6)
  * skip until we have Jamie


## Q&A, Other

* There was a question what the scope of Benchmarking was, Michael gave a quick answer.

## Upcoming Meetings

* **Node.js Foundation Calendar**: https://nodejs.org/calendar

Move next meeting from Dec 11 to Dec 18 as @mhdawson will be away on the 11th.

Click `+GoogleCalendar` at the bottom right to add to your own Google calendar.


