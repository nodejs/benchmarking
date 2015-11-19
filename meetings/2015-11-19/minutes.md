# Node Benchmarking meeting Nov 19 2015
## Present

+ Ali Sheikh
+ Michael Dawson 
+ Trevor Norris
+ Gareth Ellis 
+ Uttam Pawar (Intel) 
+ Surya
+ Chris Bailey 
+ Steve Dohrmann (Intel) 

## Agenda

+ Roundtable
+ Acme Air
+ Issue review

##Roundtable

+ Ali Sheikh
 
  + looked at ACME air seems to be resonable benchmark, had some questions.

+ Michael Dawson 

  + dedicated bare layer machine added to community CI

  + starting to add footprint benchmark to community CI as first one

+ Trevor Norris

+ Gareth Ellis 

  + working footprint tests for node, may contribute back later on

+ Uttam Pawar (Intel) 

  + starting to work on getting ACME air running to benchmark Node has some questions

+ Surya

+ Chris Bailey

  + doing some work on analysing performance for the event loop

+ Steve Dohrmann (Intel) 

## Acme Air discussion

+ Ali is actively maintained - Michael believe so
 
+ Ali want to submit pull request to update the dependencies
 
+ Ali - question about progress on AcmeAir for Node CI
 
  + not done yet, but still on radar, Surya and I will follow up
  
  + uttam, how to measure from the command line
  
  + Surya - use jmeter, run mix and end up with final TXn.s/sec

## Review actions from last meeting

+ Ali to extend invitation to these meeting to somebody on V8 perf side (DONE)

## Review of discussion in issues opened 

+ Nothing new on older issues

+ New issue opened related to Kraken - https://github.com/nodejs/benchmarking/issues/20 
  + focussed on exploiting javascript engine
  + regression between 0.12.X and 4.X
  + up to 60% on some specific micro benchmarks
  + 2 issues, what is going on in this case and whether these are good benchmarks for Node
  + Gareth will pursue what's going on in this case and report back in next meeting

## Actions for next meeting

 + Surya and Michael to touch base on next steps for getting ACME air into community CI
 + Gareth to investigate what was reported in issue 20 and report back
 + All - review issues and contribute to defining use cases and potential benchmarks
