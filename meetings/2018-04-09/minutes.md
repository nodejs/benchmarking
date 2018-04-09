# Node.js Foundation Benchmarking WorkGroup Meeting 2018-04-09

## Links

* **Recording**: https://www.youtube.com/watch?v=Lpkp-tk2mlM
* **GitHub Issue**: https://github.com/nodejs/benchmarking/issues/213

## Present

* Michael Dawson(@mhdawson)
* Benedikt Meurer (@bmeurer)
* Uttam Pawar (@uttampawar)

## Agenda

## Announcements

*Extracted from **benchmarking-agenda** labelled issues and pull requests from the **nodejs org** prior to the meeting.

### nodejs/benchmarking

* Submissions to NodeSummit, JS Interactive, NodeConfEU [#211](https://github.com/nodejs/benchmarking/issues/211)
  * Discussed, nothing interesting enough at this point.  Close but keep in mind
    in case we come up with a good idea.
* Footprint increase - acmeair after load last 2 weeks [#203](https://github.com/nodejs/benchmarking/issues/203)
   * Issue identified, waiting for fix to land
* Require cached pref much lower [#202](https://github.com/nodejs/benchmarking/issues/202)
  * Discussed, @uttampawar will bisect to find commit that caused regression
* Add Ghost.js workload to the benchmarking [#159](https://github.com/nodejs/benchmarking/issues/159)
   * Next on @uttampawar’s list
* Quick update on the Promise Performance side from Benedikt: As mentioned earlier, I'm planning to setup the
  promise-performance-tests that we use in V8 internally now to also run on the Node infrastructure
  They even cover async generators now, which are going to be in Node 10.

## Q&A, Other

## Upcoming Meetings

* **Node.js Foundation Calendar**: https://nodejs.org/calendar

Click `+GoogleCalendar` at the bottom right to add to your own Google calendar.
