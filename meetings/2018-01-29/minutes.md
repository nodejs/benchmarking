# Node.js Foundation Benchmarking WorkGroup Meeting 2018-01-29

## Links

* **Recording**:  http://youtu.be/Cg1jWTPAIDU
* **GitHub Issue**: https://github.com/nodejs/benchmarking/issues/192
* **Minutes Google Doc**: https://docs.google.com/document/d/1R7h4pAJ_Hr8OJccsFssbP6LKSfo0e3Szh9luvRZwoWM

## Present

* Michael Dawson (@mhdawson)
* Uttam Pawar (@uttampawar)
* Benedikt Meurer (@bmeurer)
* Dan Shaw (@dshaw)
* Seth Brenith (@sethbrenith)
* Jimmy Thomson (@MSLaguana)
* Gareth Ellis (@gareth-ellis)

## Agenda

## Announcements

*Extracted from **benchmarking-agenda** labelled issues and pull requests from the **nodejs org** prior to the meeting.

### nodejs/benchmarking

* Initial summary of benchmarking survey results [#189](https://github.com/nodejs/benchmarking/issues/189)
  * @dshaw attending to represent the user feedback team, with summary of results from
    the benchmarking WG survey.
  * Tracking issue is here https://github.com/nodejs/user-feedback/issues/22.
  * 273 responses so far.
  * Results will be finalized on Wednesday.
  * Show aggressive adoption of 8.X !
  * 50% of those not on 8.X are planning to upgrade soon.
  * Walked through summary of results.

* Add Ghost.js workload to the benchmarking [#159](https://github.com/nodejs/benchmarking/issues/159)
  * sathvik has been working on creating scripts, working in his own branch
  * uses docker, need to figure out how to start/stop docker before/after script without
    giving too much privilege to the iojs user.
  * Ghost now uses yarn, so we need to download yarn binary and added to path
  * Now with existing scripts all starts in background.  Want to add a timeout. But when
    timeout expires all the other scripts in background still keeps running.  Sathvik will look
    at adding logic that gets PIDs and kills as part of the timeout.
  * Michael will help setup new job for testing.
  * Uttam, 2 versions, newer one has much better performance, issue was that latest
    only supports Node.js 6.X and later.  Michael probably ok to just enable for 6.X and
    later. Gareth will go back and remind himself of what the issue was, but agrees most
    likely new version is way to go.   Latest version uses more ES6 features.

* Survey questions for end users to decide what to benchmark [#136](https://github.com/nodejs/benchmarking/issues/136)
  * covered under discussion of [#189](https://github.com/nodejs/benchmarking/issues/189).

* Other business
  * people working on Node.js and modules, write ideomatic code and complain about
    performance, as opposed ugly strange code that is performant on current version of the
    engine.
* Expect blog post to come out soon (https://twitter.com/nodejs/status/958045027325956097),
   PR's to node to address crankshaft code in core.

## Q&A, Other
No questions this week.

## Upcoming Meetings

* **Node.js Foundation Calendar**: https://nodejs.org/calendar

Click `+GoogleCalendar` at the bottom right to add to your own Google calendar.
