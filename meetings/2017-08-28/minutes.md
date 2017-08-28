# Benchmarking WG Meeting - Aug 28
## Links
* Recording: https://www.youtube.com/watch?v=78Vvc7OqhME
* Github issue: https://github.com/nodejs/benchmarking/issues/134

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

## Agenda items
### Stand up
* Michael Dawson (@mhdawson)
  * Session with Kunal/uttam to make progress on setting up DC-EIS.
  * Followed up with Myles on startup fix, as Node version 8 startup has not yet recovered
  * Some investigation as to why DC-EIS is not starting up.

* Kunal Pathak (@kunalspathak)
  * Helped a bit on running DC-EIS dry run
  * Not much other wise
* Gareth Ellis (@gareth-ellis)
  * Not too much - would be good to get more feedback from the micro benchmark job,
    previous issue with running appears to be the wrapper which was not able to get a reliable set
    of numbers, so gave up. Need to have perhaps a better way of dealing with those situations.
* Uttam Pawar (@uttampawar)
  * working on fixing up script for DC-EIS

## Actions from last meeting


* Kunal will open an issue in the repo to track adding mean or something like that to Acme air
  Runs.
  * https://github.com/nodejs/benchmarking/issues/132
  * Done

## New/Roll over actions

* Michael to suggest updated wording for participation guidelines

## Open Issues review
### Tagged

#### nodejs/benchmarking

* Status of running node core benchmarks [#127](https://github.com/nodejs/benchmarking/issues/127)
  * In progress, want feedback from group
  * Gareth is going to add drop-downs to job and put togher short usage guide
  * We should all try it out and discuss in next meeting
* New script to run Node-DC-EIS workload  [#123](https://github.com/nodejs/benchmarking/pull/123)
  * Progressins, Uttam has issues ironed out and will test it out later on today
* Meeting at NodeConf EU '17 to discuss Node.js performance [#124](https://github.com/nodejs/benchmarking/issues/124)
  * Benedikt outlined some work they have underway to pull together benchmarks that cover
     webpack, and other commonly used tools.
  * He will open an [issue](https://github.com/nodejs/benchmarking/issues/138)
    to doc what they are planning to do

### General

## Next meeting
Next meeting will be on September 11 at 3 EST, 7 UTC.
