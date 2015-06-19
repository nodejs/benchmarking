# Node Benchmarking meeting 2015-06-16

## Present:
+ Ali Sheikh - Google 
+ Trevor Norris - Node source
+ Michael Dawson - IBM 
+ Yosuke Furukawa - DeNA
+ Yang Lei - IBM 

## Agenda

*  Overview of Acme Air from Yang Lei (one of the authors)
*  Oveview of discussion in issues opened:  
    *  https://github.com/nodejs/benchmarking/issues/5, 
    *  https://github.com/nodejs/benchmarking/issues/6, 
    *  https://github.com/nodejs/benchmarking/issues/7
   
## Minutes

Yang gave a good presentation on [AcmeAir](https://github.com/acmeair/acmeair-nodejs)
Unfortunately I messed up the recording so we don't have one.  Instead slides are available here:

[slides from presentation](Acmeair_NodeJS_v0.1.pdf)

[mongo demo](Acmeair Mongo on Mesos.mov)

It looks like it is a reasonable fit for one of the Node usecases which is serving rest based apis

Trevor asked if we should optimize or leave as a typical application might be.  General agreement
was that we should ensure there are no common gotchas which would affect results.

The benchmark could be run in a number of different scenarios.  Michael suggested we start
with tyring to use it as a regression test between builds as a simpler case to start with.

There was also discussion about looking at whether the server stack (express, etc.) could
be swapped out so that we could also use to compare against other modules like Hapi.

We ran out of time before we could discuss the github issues

##Actions/next steps:
*   Trevor indicated he was going to look at AcmeAir to see where time is being spent so that we can understand if the time is in the Node runtime or the modules used (ex express)
*   Trevor volunteered to start a conversation with Netflix to see if they are interested in trying to swap in Hapi, will include Yang in the discussions
*   Michael to look at minimal setup to run as potential basis for version to version regression test. 
## Next meeting
Michael Dawson to set for 2 weeks from now

Candidate agenda
*  Review of discussion in issues opened (carried over)
*  Discussion of investigation by Trevor
*  Discussion of investigation by Michael
