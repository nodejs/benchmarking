# Node.js Foundation Benchmarking WorkGroup Meeting 2018-07-31

## Links

* **Recording**: https://www.youtube.com/watch?v=PNuGQHMiwpo
* **GitHub Issue**: https://github.com/nodejs/benchmarking/issues/232

## Present
* Gareth Ellis (@gareth-ellis)
* Michael Dawson (@mhdawson)
* Uttam Pawar

## Agenda

## Announcements

No announcement this week.
 
*Extracted from **benchmarking-agenda** labelled issues and pull requests from the **nodejs org** prior to the meeting.

### nodejs/benchmarking

* Membership review [#230](https://github.com/nodejs/benchmarking/issues/230)
  * agreed will go forward

* Require cached pref much lower [#202](https://github.com/nodejs/benchmarking/issues/202)
  * Michael opened issue in build wg as FYI and will give Uttam access to machine to be able
    to investigate.

* Add Ghost.js workload to the benchmarking [#159](https://github.com/nodejs/benchmarking/issues/159)
  * Uttam has cloned and setup to run as it should on the benchmarking machine
  * Only works on 6.x and 8.x not master, (at least not in production mode)
  * It is really just reading database and creating a static web page
  * Michael, would catch I/O issue but both Acme Air/DC-EIS already does a fair amount of I/O
  * Normally ghost is behing nginx and web pages would be cached so 99% won’t hit web server
  * Based on investigation by @uttampawar may not be different enough from Acme 
    Air/DC-EIS.
  * Next step.  Uttam will post details of investigation into issue, then we’ll validate with 
    those who had suggested it to see if there is some other rational for running it. 


* Meeting interval?
  * Gareth, make it less frequent and then adjust if too much time goes between meetings?
  * Uttam let’s switch to every 3 weeks. 

* At Node Summit
  * Many people did not know about the benchmarking.nodejs.org
  * Uttam can we get better integrated into the website.
  * Uttam to open issue about promotion of benchmarking.nodejs.org and of the work of the WG 
    in general.

## Q&A, Other

No questions this week.

## Upcoming Meetings

* **Node.js Foundation Calendar**: https://nodejs.org/calendar

Click `+GoogleCalendar` at the bottom right to add to your own Google calendar.


