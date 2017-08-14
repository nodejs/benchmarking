# Node Benchmarking meeting 1 Aug 2017

## Links
* Recording: https://www.youtube.com/watch?v=AuFtg1LIP1w&feature=youtu.be
* Github issue: https://github.com/nodejs/benchmarking/issues/1252

## Agenda
* Stand up
* Open issues review
* Other business

## Present
* Michael Dawson (@mhdawson)
* Kunal Pathak (@kunalspathak)
* Kyle Farnung (@kfarnung)
* Gareth Ellis (@gareth-ellis)

## Agenda items
### Stand up
* Michael Dawson
  * Benchmarking panel at Node Summit and prep
  * Quick look at DC-EIS PR
* Gareth Ellis
  * Looked into helping with the acmeair noise issue on chakra, but
    was not able to get an environment where I could get it running.
    Could be useful to try on the benchmarking machine, both to see if
    we see the same noise and to reproduce issue
  * Ready to get going on https://github.com/nodejs/benchmarking/pull/58
    on the new donated box

* Kunal Pathak (@kunalspathak)
  * Reviewed node-dc-eis PR
  * Fine tuning memory benchmarking on windows. Should be ready to port
    for linux.
  * asked question about softlayer bare metal machine, Michael
    created issue and pasted in info.
* Kyle Farnung (@kfarnung)
  * No update, haven.t had time to work on anything.

## Actions from last meeting

* Kunal to create PR to add mean (or something else) to Acme air runs.
  * Still working on this, roll over
* Kunal to follow up on clang issue that is blocking Chakra core Acme air runs.
  * Clang is installed locally as part of running the job, resolved.
* Uttam is going to submit PR with info/scripts for DC-EIS
  * PR is submitted we just need to work through getting it landed.
  * Some review comments to address
  * Next step is session with Michael to set up Job.
* Michael to suggest updated wording for participation guidelines
  * Still have not done this, rolling over

## New roll over actions

* Kunal to do Acme Air runs on community benchmarking machine and report
  if he sees the same variance of not.
* Kunal to create PR to add mean (or something else) to Acme air runs
* Michael to suggest updated wording for participation guidelines

## Open Issues review

* We went through and discussed open issues

* Of interest we talked about the new benchmarking machines from Intel
  and are going to push forward progress on the job to run
  micro-benchmarks on these machines.

## Next meeting
Next meeting with be at the regular time on August 14 (I was confused, in the meeting
I thought it was next week but it is not so we.ll just meet in 2 weeks based
on regular schedule).
