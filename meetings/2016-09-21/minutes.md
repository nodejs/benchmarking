# Node Benchmarking meeting Septempber 21 2016

## Agenda

* Stand up
* Actions from last meeting
* Review https://github.com/nodejs/benchmarking/pull/55 and talk about how to fill in gaps
* Open issues review

## Present

* Michael Dawson @mhdawson
* Gareth Ellis @gareth-ellis

## Round Table

* Michael Dawson
  * helped fix issue with acme air benchmark runs due to module update.
  * landed table that shows our use cases and key runtime attributes
    verus the benchmarks we already have.


* Gareth Ellis
  * working on script to let us run more of the benchmarks in
    the node tree regularly
  * looking at PR 8576 which had request to run benchmarks.

## Agenda items

### Actions from last meeting

* Ali to look at issue in hydrogen mentioned by Gareth
  (It has been so long this is probably stale, so drop)
* Michael to submit initial version of PR for key runtime attributes (Done)
* Uttam to open issues for the activities he mentioned
  (also going to drop this one as its been a while)

### Review https://github.com/nodejs/benchmarking/pull/55
We discussed the gaps.  We'll address some of the low hanging fruit first.

Michael will look at:
  * install package size
  * size on disk once installed

Gareth will look at:
  * cpu usage when idle
  * getting gc metrics out

### Open issues review
We went through and reviewed what was new in the issues and closed a couple.

## Actions for next meeting

*  Michael and Gareth to work on additional benchmarks as discussed above

 ## Next meeting

Michael to set next meeting for 3-4 weeks from now.
