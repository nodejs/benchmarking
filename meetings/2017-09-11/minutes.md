# Benchmarking WG Meeting - Sep 11

## Links
* Recording: https://www.youtube.com/watch?v=eBFGGPSVVD4
* Github issue: https://github.com/nodejs/benchmarking/issues/141

## Agenda
* Stand up
* Actions from last meeting
* Open issues review
* Other business

## Present
* Michael Dawson (@mhdawson)
* Kunal Pathak (@kunalspathak)
* Gareth Ellis (@gareth-ellis)
* Uttam Pawar (@uttampawar)
* Benedikt Meurer (@bmeurer)
* Anil Kumar
* Ruben Bridgewater (@BridgeAR) (delayed)

## Agenda items
### Stand up
* Michael Dawson (@mhdawson)
  * Working with Uttam to get DC-EIS working
  * Ramped up Uttam on Ansible to start work on Ansible script for
    benchmarking machines.

* Kunal Pathak (@kunalspathak)
  * Reviewed PR for DC-EIS working
  * Was working on #132 based on feedback

* Gareth Ellis (@gareth-ellis)
  * Not very much - will turn doc on using benchmark job in #127 into a PR.
  * However people can still try out the job

* Uttam Pawar (@uttampawar)
  * Integration DC-EIS of into the benchmarking environment
  * Seems to be running ok, working on the templates of the charts
  * Ramping up on the ansible infrastructure and will then work on the
    updates for DC-EIS

* Anil

* Benedict
  * working on issue #138, uploaded version 1 today, missing some parts that he wanted

## Actions from last meeting

* Michael to suggest updated wording for participation guidelines
  * Still need to do this, roll over.

## New/Roll over actions

## Open Issues review
### Tagged

### nodejs/benchmarking

* Survey questions for end users to decide what to benchmark [#136](https://github.com/nodejs/benchmarking/issues/136)
  * We walked through the questions
  * Michael mentioned we should look at the questions from the latest
    foundation survey to see what overlap there might have been
  * We agreed to take discussion back to github, hoping to get
    additional questions that are Node.js versus language specific to round
    out the overall set of questions

* Status of running node core benchmarks [#127](https://github.com/nodejs/benchmarking/issues/127)
  * Gareth is going to do PR so we can land doc with usage info
  * Gareth is going to reach out to a few of the people most active in
    the core benchmarks to have then try it out
  * Once we have docs in place we will broadcast out to overall collaborators to get them using it


### General

#### Web
* Benedikt took us through progress so far on:
  https://github.com/nodejs/benchmarking/issues/138

#### Integration of DC-EIS
* Anil suggested we should review how hard/easy it was to integrate DE-EIS
  into the community environment
* Uttam to open issue to provide feedback and make suggestions as to
  what we might improve

#### Collaboration summit in Vancouver

* Anil suggest we get some time onto the agenda for benchmarking
* Michael posted a request on the community issue here:
  https://github.com/nodejs/summit/issues/44#issuecomment-328638628

## Next meeting
Next meeting will be on September 25 at 3 EST, 7 UTC.
