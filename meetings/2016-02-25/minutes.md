# Node Benchmarking meeting Feb 25 2016

## Agenda

* Round table
* Progress on benchmark infrastructure
* Running Acme Air
* Issue Review

## Present

* Ali Sheik
* Michael Dawson
* Gareth Ellis
* Michael Paulson

## Round Table

* Ali Sheik - Back from vacation, looking a potential benchmarks for Node.
* Michael Dawson - working on benchmarking infra/getting initial tests running
* Gareth Ellis - more work on investigating regression in 4.X.  Narrowed down to code in V8/hydrogen.  As part of that a fair amount of time on investigating on how to track down these issues.  Provided scripts for Acme air.
* Michael Paulson - was pulled off on some non-node work, will get back to node specific work this week.

## Agenda items

### Actions from last meeting
We discussed the actions from last week

* Surya/Gareth/Michael to co-ordinate getting ACME air into community CI (carried over)
* Garth to continue investigation on issue 20
* Michael Paulson volunteered to do some work on benchmark for require and events
* Michael to push forward with content of issue 23 (covered under later items)

### Progress on benchmark infrastructure

initial acme air scripts (thanks Gareth).  Still need to complete addition to CI due to CI down time.
8 benchmarks running/publishing data, temporarily to http://nodejs.devrus.com:8080
backups being generated
Issue opened with build to to mirror benchmark data to website: https://github.com/nodejs/build/issues/281
Issue open with build team to mirror backups:https://github.com/nodejs/build/issues/303

### Open issues review

We reviewed and discussed the open issues.

## Actions for next meeting
* Ali to look at issue in hydrogen mentioned by Gareth

## Next meeting

Michael to set next meeting for 3-4 weeks from now.

