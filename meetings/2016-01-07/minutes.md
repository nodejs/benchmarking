# Node Benchmarking meeting Jan 7 2016

## Agenda

* Round table
* Running Acme Air
* running/capturing data in community CI for benchmarks
* Issue Review

## Pressent
* Ali Sheik
* Michael Dawson
* Gareth Ellis
* Uttam Pawar
* Chris Baiely
* Michael Paulson
* Yunong Xiao

## Round Table

* Ali - 
* Chris - 
* Gareth - Looking at Kraken issue, ran V8 on its own, not seen that way.  Looking to see if related to how v8 is run or is Node regression. Running some startup related benchmarks   
* Uttam - setup Acme Air, running with jmeter
* Yunong - Working with Michael Paulson on falcor performance 
* Michael Paulson - Has spent 6-7 months improving performance for falcor, will bring some of the experiences from that to this group
* Michael Dawson - working on benchmarking infrastructure/jobs for initial benchmarks.  See
  https://github.com/nodejs/benchmarking/issues/23 for specific details 
  Some discussion with build team as well in respect to mecahnics of showing results on node web site

## Agenda items

### Standard practice for running Acme air (uttam)
Acme air  - standard way to run

Gareth, can use jmeter script pretty much out of the box

Typically uses 25 threads per instance of node, so if using cluster with 4 child instances, would use 100 threads on jmeter

Uttam saw lower perf with ~60 jmeter threads

Standard machine configuration ?

Uttam to open issue to provide context/start discussion with respect to defining a Standard configuration

### Running benchmarks/capturing data

Michael D, took the team through https://github.com/nodejs/benchmarking/issues/23.  There were a couple of suggestions for 
capturing the charts
* seperate benchmarking-data repo
* same place as where Node binaries for download go ? 

Otherwise there were no objections to pushing forward.  

There was some discussion around system versus "micro" benchmarks with general agreement we need both.  Existing open issues are a good place to carry on discusion along with specific suggestions for benchmarks.

### Open issues review

We walked through the issues to see the current state/status

## Actions for next meeting

* Surya/Gareth/Michael to co-ordinate getting ACME air into community CI (carried over)
* Garth to continue investigation on issue 20
* Michael Paulson volunteered to do some work on benchmark for require and events
* Michael to push forward with content of issue 23

## Next meeting

Michael to set next meeting for 3-4 weeks from now.
