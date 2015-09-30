# Node Benchmarking meeting Sep 30 2015

## Present

+ Ali Sheikh 
+ Chris Bailey 
+ Michael Dawson 
+ Yunong Xiao  
+ Bryan English 
+ david.c.stewart (Intel) 
+ Uttam Pawar (Intel) 
+ Steve Dohrmann (Intel) 

## Agenda

+ Review actions from last meeting

  + Michael to add contact info using github ids - DONE, some I could not find so if yours is missing let me know what your github id is

  + Michael had action to write up description of what we want the machines for that we can use for broader ask if necessary - DONE
  + Michael to add issue to github to track h/w issue as next step to getting benchmarks running - https://github.com/nodejs/benchmarking/issues/13 - DONE
  + Ali to extend invitation to these meeting to somebody on V8 perf side (carry over)
  + Corbin to give deep dive on - https://github.com/corbinu/docker-demos (have not been able to contact Corbin, drop for now)

+ Discuss specs for bare metal machine: issue #18

Generaly feeling was that to start proposed machine seems sufficient.  For acme air likely pin driver to 1 core, db to 1 core and Node to the 2 remaining cores.

As we move forward we should define what our ask will for each platform to be able to run benchmark effectively.  For example, we may want multiple machines so we can run drivers and or databases on different machines.

+ Review proposal of what we want to do requesting hardware 

Document was reviewed and agreed.
We will not go to foundation members yet, instead we'll wait to look for hardware on other platforms until we get a reasonable set running on xLinux

Some discussion around mac and SunOS being on the list

Doc added to github here for future reference: https://github.com/nodejs/benchmarking/blob/master/docs/HardwareAsk.md
 
+ Review of modules we believe should have benchmarks for and potentially run in builds: -

https://docs.google.com/spreadsheets/d/1GlY7kP_1gOCi-uEVmwxoOeL5MjF5okgEN1nX1J74fUo/edit

Doc was reviewed and agreed. Some discussion about adding cluster, but it was felt that cluster is not heavily used in practice so does not belong on the list for now.  We should however, have a use case capture as part of issue https://github.com/nodejs/benchmarking/issues/5 to cover the case where there are multiple instances of Node running to support an application.

+ Review of discussion in issues opened 

We went through the open list: 


https://github.com/nodejs/benchmarking/issues/17 - we should likely add running built in benchmarks to initial target - Agreement that his makes sense.  Will add to initial target to make it getting Acme Air and benchmarks shipped as part of Node running

https://github.com/nodejs/benchmarking/issues/14 - waiting for progress from originator

https://github.com/nodejs/benchmarking/issues/13 - have resouces from softlayer, next step is to add bare metal machine.  Some work within IBM to get acme are running under Jenkins, hoping to leverage that to get it running in community CI one machine is in place.

https://github.com/nodejs/benchmarking/issues/12 - benchmarks into v8 - too early defer on this one

https://github.com/nodejs/benchmarking/issues/11 - should we add v8 benchmarks as one of our early targets  - missed discussing this, bring up again in next meeting

https://github.com/nodejs/benchmarking/issues/7 - microbenchmarks - nothing new 

https://github.com/nodejs/benchmarking/issues/6 - candidate benchmarks  - nothing new

https://github.com/nodejs/benchmarking/issues/5 - benchmarking use cases - nothing new

General call to contribute/comment on issues 5 and 6 in particular


## Actions for next meeting

+ Ali to extend invitation to these meeting to somebody on V8 perf side

