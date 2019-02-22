# Node.js Foundation Benchmarking WorkGroup Meeting 2019-01-22

## Links

* **Recording**: https://www.youtube.com/watch?v=8Tc2LF34oMg
* **GitHub Issue**: https://github.com/nodejs/benchmarking/issues/258

## Present

* Michael Dawson (@mhdawson)
* Uttam Pawar @uttampawar
 
## Agenda

## Announcements
 
*Extracted from **benchmarking-agenda** labelled issues and pull requests from the **nodejs org** prior to the meeting.

### nodejs/benchmarking

* Investigate the time taken, and number of benchmarks in core [#225](https://github.com/nodejs/benchmarking/issues/225)
  * No Gareth need to follow up with him.
* Require cached pref much lower [#202](https://github.com/nodejs/benchmarking/issues/202)
  * Landed PR in meeting, Uttam will validate resolved in nightly run and then we can close

* Add Ghost.js workload to the benchmarking [#159](https://github.com/nodejs/benchmarking/issues/159)
  * Uttam, most just serves static pages from a cache, does not work with dev or canary
    versions of node, don’t think it adds much coverage.
  * would rather focus on server side rendering benchmark.

* Simplify multiple scripts, logs in nodejsbenchmarking infrastructure [#155](https://github.com/nodejs/benchmarking/issues/155)
  * Uttam tried to connect to Jamie, but could not.  Michael will try as well

* Candidate benchmarks [#6](https://github.com/nodejs/benchmarking/issues/6)
  * Uttam tried to connect to Jamie, but could not.  Michael will try as well

* Last time talked about zlib library dependency. Last release was last Jan (over a year ago)
  * Uttam will open an issue in the main repo. 

* Discuss level of activity in the working group
  * Michael/Uttam to work on getting Uttam ongoing access to physical machine
  * Agreed to reduce meetings to 1/month.

## Q&A, Other

* No questions this week.

## Upcoming Meetings

* **Node.js Foundation Calendar**: https://nodejs.org/calendar

Click `+GoogleCalendar` at the bottom right to add to your own Google calendar.


