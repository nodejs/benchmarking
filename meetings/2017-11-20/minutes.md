# Node.js Foundation Benchmarking WorkGroup Meeting 2017-11-20

## Links

* **Recording**:  https://www.youtube.com/watch?v=dcO7umja0C8
* **GitHub Issue**: https://github.com/nodejs/benchmarking/issues/171
* **Minutes Google Doc**: https://docs.google.com/document/d/1tq_K1nOdcx-Bxczh04GKzJCi4zIJH1nOY1W2CRbmk-8/edit

## Present

* Michael Dawson @mhdawson
* Gareth Ellis @gareth-ellis
* Uttam Pawar @uttampawar
* Anil Kumar @anilkumarrajput
* Hitesh Kanwathirtha @digitalinfinity
* Jimmy Thomson @MSLaguana
* Sathvik Laxminarayan @sathvikl

## Agenda

### Announcements

* Web tooling benchmark is now running nightly and results are in
  benchmarking.nodejs.org.  Still a few issues to iron out.

### nodejs/benchmarking

* Add Ghost.js workload to the benchmarking [#159](https://github.com/nodejs/benchmarking/issues/159)
  * We discussed a few notes on how to run, including mySql.  @Sathivik will do some
    Move investigation and when you have a suggested approach will submit a PR.

* Survey questions for end users to decide what to benchmark [#136](https://github.com/nodejs/benchmarking/issues/136)
  * Has been passed over to Community Committee, just waiting to hear back on status.

* Status of running node core benchmarks [#127](https://github.com/nodejs/benchmarking/issues/127)
  * Added an extra property so that you can specify how many runs you want to do.
  * Need to make sure people don't go crazy
  * Gareth will update documentation to reflect that
  * A bunch of runs have been done, no complaints or issues.
  * Gareth will issue in Node.js repo explaining what it is, links to docs and
    @nodejs/colloborators

* General
  * Uttam asked about http2 versions of Acme air and Node-DC-EIS.  We agreed
    that would be useful.
  * Sathvik asked about NodeConfEU/performance.  Michael reported that nothing
    noteworthy on the perf/benchmarking side was discussed.
  * bmeurer: @psmarshall has started to review the Node core benchmarks (investigation doc).
  * bmeurer: @tebbi has added the web tooling benchmark to the core benchmark suite.
    Will follow up on the suggestions by @mhdawson.

## Q&A, Other

* missed checking for questions, sorry will try to make sure we do next time.

## Upcoming Meetings

* **Node.js Foundation Calendar**: https://nodejs.org/calendar

Click `+GoogleCalendar` at the bottom right to add to your own Google calendar.
