# Node.js Foundation Benchmarking WorkGroup Meeting 2018-10-16

## Links

* **Recording**:  https://www.youtube.com/watch?v=L-2tuDizBMI
* **GitHub Issue**: https://github.com/nodejs/benchmarking/issues/245

## Present

- Jamie Davis (@davisjam)
- Michael Dawson (@mhdawson)
- Uttam Pawar (@uttampawar)
- Gareth Ellis (@gareth-ellis)

## Agenda

## Announcements
 
*Extracted from **benchmarking-agenda** labelled issues and pull requests from the **nodejs org** prior to the meeting.
  * No announcements

### nodejs/benchmarking

* Simplify multiple scripts, logs in nodejsbenchmarking infrastructure [#155]
  * Discussed with Jamie, makes sense
  * Jamie was looking at adding his own job, not consistent way so makes it harder to add a new
    one.
  * All agreed that standardizing them would be good.
  * Jamie may have time or an undergrad to help.
  * Some discussion around Ansible and our need to add configurations
  * Copy versus non-copy, agreed should not copy existing repos but ok to put new benchmarks 
    in the benchmarking repo.

* Investigate the time taken, and number of benchmarks in core [#225](https://github.com/nodejs/benchmarking/issues/225)
  * No progress to report.

* Require cached pref much lower [#202](https://github.com/nodejs/benchmarking/issues/202)
  * Uttam managed to re-create, needs ~ another week to figure out specific commit.

* Add Ghost.js workload to the benchmarking [#159](https://github.com/nodejs/benchmarking/issues/159)
   * can now install mysql  in docker, just now need to build scripts to run in benchmarking
     machine.
   * use to flesh out proposed structure for #155.
   * One problem is that it does not work on master.  Only works on LTS.  
     * Michael -> how about open issue that explains what we are doing, and asking how we
       get around the check

* Candidate benchmarks [#6](https://github.com/nodejs/benchmarking/issues/6)
  * discussed at summit
  * general point is that we have use cases that we don’t have covered
  * @jorangreef commented specifically about system type software
    * Jamie, this might not be all that common but some guidance.
    * We talked at the session in terms of priorities and agreed some of the other uses
      cases will be tackled first.
  * @davisjam will be doing some work to fill out the matrix..

## Q&A, Other

* No questions this week.

## Upcoming Meetings

* **Node.js Foundation Calendar**: https://nodejs.org/calendar

Click `+GoogleCalendar` at the bottom right to add to your own Google calendar.


