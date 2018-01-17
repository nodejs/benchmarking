# Node.js Foundation Benchmarking WorkGroup Meeting 2018-01-15

## Links

* **Recording**: http://youtu.be/cksEYaYNGWU
* **GitHub Issue**: https://github.com/nodejs/benchmarking/issues/186
* **Minutes Google Doc**: https://docs.google.com/document/d/1Dykz58sWIU2aGbMt_TjEzDeeGjIwxIcD2J2YeVF1XNU/edit

## Present
* Michael Dawson (@mhdawson)
* Benedikt Meurer (@bmeurer)

## Agenda
## Announcements
No annoucements this week.

*Extracted from **benchmarking-agenda** labelled issues and pull requests from the **nodejs org** prior to the meeting.
### nodejs/benchmarking
* Discuss meeting time - https://github.com/nodejs/benchmarking/issues/187
* Add Ghost.js workload to the benchmarking [#159](https://github.com/nodejs/benchmarking/issues/159)
  * defer discussion until @sathvikl is at the meeting.
* Performance impact of async_hooks[181](https://github.com/nodejs/benchmarking/issues/181)
  * Currently design of async hooks, works against performance optimization
  * Discussion about affect of promise destroy hooks on perf -
    https://docs.google.com/document/d/17innbSepktbrDaNliTN1Wq-NJhXpPOkIvxUw_gIbuXw/edit#heading=h.8fp3ptjbh39n
  * Some discussion about promises and needing a benchmark.
  * Benedikt to open issue with some info about creating a
    benchmarking to measure promises. https://github.com/nodejs/benchmarking/issues/188
* Survey questions for end users to decide what to benchmark [#136](https://github.com/nodejs/benchmarking/issues/136)
  * Survey running until end of Jan
  * Will leave on agenda until then.
* Status of running node core benchmarks [#127](https://github.com/nodejs/benchmarking/issues/127)
  * asked in issue if there is anything more to discuss and removed from benchmarking-agenda

## Q&A, Other
* No questions this week

## Upcoming Meetings
* **Node.js Foundation Calendar**: https://nodejs.org/calendar
Click `+GoogleCalendar` at the bottom right to add to your own Google calendar.
