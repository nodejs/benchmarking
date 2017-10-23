# Benchmarking WG Meeting - Oct 23 2017

## Links
* Recording: https://www.youtube.com/watch?v=ZXt_oE60X8U
* Github issue: https://github.com/nodejs/benchmarking/issues/1644

## Agenda
* Stand up
* Actions from last meeting
* Open issues review
* Other business

## Present
* Michael Dawson (@mhdawson)
* Benedikt Meurer (@bmeurer)
* Peter Marshall (@psmarshall)
* Hitesh Kanwathirtha (@digitalinfinity)
* Jimmy Thomson (@MSLaguana)
* Uttam Pawar (@uttampawar)
* Anil Kumar (@AnilKumarRajput)

## Agenda items

### Stand up

* mhdawson
  * Some work on finising up DC-EIS addition
  * Resolved problem causing benchmarking data machine slowdowns
    (was rsync problem due to coverage data)
* Benedikt
  * first version of web benchmark, part of v8 project, will run us
    through it later in the meeting.
* Peter
  * Planning to look through core microbenchmarks to see how we might use.
* Hitesh
  * Planning to look through core microbenchmarks to see how we might use.
Jimmy
  * Planning to look through core microbenchmarks to see how we might use.
* Uttam
  * Looked a bit at commit that needs squash
  * Started to look at creating script to add ghost (or with a team member)
* Anil
  * Covered by Uttam

## Actions from last meeting

## New/Roll over actions

## Open Issues review

### Tagged

#### nodejs/benchmarking

* Add Ghost.js workload to the benchmarking [#159](https://github.com/nodejs/benchmarking/issues/159)

* Status of running node core benchmarks [#127](https://github.com/nodejs/benchmarking/issues/127)
  * Are we ready to let the rest of the collaborators  ?
  * Michael will follow up on this
  * Also some discussion, Uttam will talk to James about a possible http2 test case.
  * Can we also ask James for a smaller set of the micro-benchmarks that would be good for
    streams  (Uttam).
 * Michael/Hitesh will talk with N-API team on potential benchmarks.

* Web Tooling Benchmark [#138](https://github.com/nodejs/benchmarking/issues/138)
  * Benedikt took us through the current state of the benchmark.
  * Something like 2-4 weeks before we should start running it regularly

* Survey questions for end users to decide what to benchmark [#136](https://github.com/nodejs/benchmarking/issues/136)
  * We had a working session and finalized the questions ending up with submitting issue
    to get help from community committee to send out the survey:
    https://github.com/nodejs/community-committee/issues/153

#### Web

Time was up and I forgot to ask for questions

## Next meeting
2 weeks from now conflicts with NodeConfEU so we agreed to push out to Nov 20.

Next meeting will be on Nov 20  at 3 EST, 7 UTC.
