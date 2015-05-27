# Node Benchmarking meeting 2015-05-27

## Present:
+ Bryan English - Yahoo
+ Ali Sheikh - Google 
+ Chris Bailey - IBM
+ Michael - Germany - Master.s student
+ Trevor Norris - Node source
+ Michael Dawson - IBM 
+ Yunong Xiao (Netflix)
+ Yosuke Furukawa - sent info ahead as could not make it


## Agenda

1. Governance - review boilerplates and agree/disagree to use for this project
  + https://github.com/nodejs/benchmarking/blob/master/CONTRIBUTING-draft.md
  + https://github.com/nodejs/benchmarking/blob/master/GOVERNANCE-draft.md

2. Discuss/Confirm scope we want to tackle

3. Identify initial next steps, starting ideas are:
  + develop list of candidate benchmarks
  + Having Yang take us through ACME air for Node

4. Suggestions from yosuke
Continuous benchmark: We should take a bench performance on every release continuously.

Graph: And we should draw some graphs to detect performance down easily. e.g.http://arewefastyet.com/ And Thlorenz benchmark graph is extremely good.https://github.com/thlorenz/benchgraph

Fix benchmark tests: I would like to fix benchmark tests on Node.js v0.10, v0.12, io.js v1.x, v2.x. In my understanding, v0.12 and v1.x full benchmark don't work.
Minutes

## Minutes

1. We started by each of us introducing ourselves and our interests in benchmarking
We discussed accepting boilerplate governance. No objections so agreed

2. General free-form discussion around the following:

Things we need do.:

+ Define use cases

+ Ways to measure

+ what to measure 

  throughput, 

  responsiveness, 
   
  memory/footprint etc.
  
  effect of monitoring probes
  
  cpu profiling/flame graphs
  
  out of the box versus optimized.
  
+ How to measure 
+ How to we communicate/display results
 
  for example .are we fast yet.com.

+ Build list of candidates

  Acme Air
  
  ghost blog + create a load driver
  
  Tech empower ?
  
  Existing micro benchmarks, good for native code (ex buffers, strings)
        make sure they print and display time for single iteration (how many us to complete),  process monotonic clock (hrtime) -> wall time, might be useful to have cycles used as well.
        
+ Profiling best practices

  some tools to help with flame graphs - https://gist.github.com/trevnorris/9616784

##Actions/next steps:

1. use cases
  + open gitub issue and work there
    + front end ui
    + back end services

2. benchmarks 
  + open up github issue to continue discussion
  + any companies on the call, extract real-life bechmark. Yunong from Netflix took action to bring something to the group based on internal work they have done
  + All to read up on ghost blog    
  + Michael to setup meeting to get overview of acme air
  
3. open github issue to discuss micro benchmarks.

## Next meeting
Michael Dawson to set for 2 weeks from now

Candidate agenda
+ Overview of Acme Air from Yang Lei (one of the authors)
+ Review of discussion in issues opened

