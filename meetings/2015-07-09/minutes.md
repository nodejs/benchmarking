# Node Benchmarking meeting 2015-07-09

## Present

+ Corbin Uselton 
+ Michael Dawson 
+ Ali Sheikh
+ Yosuke Furukawa
+ Yunong Xiao 
+ Trevor Norris 

## Agenda

+ Review of discussion in issues opened (carried over)
+ Yunong to cover restify/react
+ Coverage for modules
+ Discussion of investigation by Trevor
+ Discussion of investigation by Michael
+ Getting the first benchmarks running

## Review of discussion in issues opened (carried over)

reviewed open issues, discussed comments so far

From discussion on issue asking for tests to be added to V8 

Ali to extend invitation to these meeting to somebody on V8 perf side

General agreement we should just add v8 test to Node builds as well

Generally we just need to keep getting input/working on this to document/refine.  Any time people can put into this would be helpful

## Yunong covered interest in restify/react

has done some benchmarking on restify

react, ui framework, rendering takes longer than expected

would be useful to have benchmarks for ui frameworks

Yunong to ensure these are coverd under the usecases in: https://github.com/nodejs/benchmarking/issues/5 and add some detail as to what should be covered based on netflix's experience

Corbin mentioned he is working on a framework where you could swap in different components by swapping a docker with the same api but a different container. discussion on different aspects, including io between containers

Link to what he is working on is here: https://github.com/corbinu/docker-demos

Will add to next meeting agenda to have Corbin give team a deep dive 


## Coverage for key modules (Yunong)

interest in modules that cover transport

HTTP2/Websockets

Server side events
 
Foundational for services
 
Reach out to highly used modules, ask them to provide benchmarks Node could run (covered in next topic)

Yunong to ensure these are coverd under the usecases in: https://github.com/nodejs/benchmarking/issues/5 

## Discussion of investigation by Trevor

Reached out to 4 modules
+ hapi: hapijs/hapi#2614 
+ kraken-js: krakenjs/kraken-js#393 
+ grunt: gruntjs/grunt#1350 
+ gulp: gulpjs/gulp#1118 

Asked for benchmarks Node could run in builds

Got a large test set from Gulp

Kraken good response but no benchmark yet

HAPI - Corbin responded (not part of HAPI team), talked about framework 

Good response so we should put together list of modules to go talk to.

Michael to send email including google docs spreadsheet link, all to fill in with modules that should be included, will review in next meeting.

## Discussion of investigation by Michael
Planning to look at minimal install/setup for ACME air that we could add to Node builds, did not have time yet, rolled over to next week

## Getting the first benchmarks running
when we would run minimal/minimal sets

how to use same H/W across runs

Michael to add issue to github to track h/w issue, add to next build workgroup meeting agenda (may be the one after next as Michael.s travelling next week and won.t be attended the next one) 

## Next meeting

next meeting to be set for 2 -3 weeks
