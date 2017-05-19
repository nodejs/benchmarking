# Node Benchmarking meeting 18 May 2017

## Agenda

* Stand up
* Discuss adopting TSC participation guidelines
* Actions from last meeting
* Open issues review
* Other business

## Present

* Michael Dawson (@mhdawson)
* Kunal Pathak (@kunalspathak)
* Kyle Farnung (@kfarnung)
* Taylor Woll (@boingoing)
* Jiapeng Zhu (@JiapengZhu)
* Uttam Pawar (@uttampawar)
* Anil Kumar

## Agenda items
### Stand Up

* Michael Dawson
  * Charts Node version 8.  Some discussions on dedicated machine
    being donated by Intel
* Kunal
  * looking into Acme air and memory footprint
* Kyle
  * just starting to get up to speed
* Taylor
  * just sitting in to find out what we are talking about
* Jiapeng
  * first time joining, UNB student, ramping up research on Node.js scalability.
* Anil/Uttam
  * Working on DC-EIS, looking to see how it incorporates
    with communities nightly testing.

### Discuss adopting TSC participation guidelines

* some discussion on adopting the participation guidelines being
  adopted by the TSC which are:

TSC members are expected to regularly participate in TSC activities.
```
In the case where an individual TSC member -- within any three month period
-- attends fewer than 25% of the regularly scheduled meetings,
does not participate in TSC discussions, and does not participate in
TSC votes, the member shall be automatically removed from the TSC. The member
may be invited to continue attending TSC meetings as an observer.
```

* needs to be tweaked as we've not been meeting that often.  Michael to
  take a look at that.

### Actions from last meeting
* Michael and Gareth to work on additional benchmarks as discussed above
  * This is ongoing background work going to drop from actions
* Ali to open issue on ignition discussion
  * No longer really applicable, ignition is already coming in.

### Creating new jobs
* Some discussion on how to create new benchmark jobs
* Michael's been doing some work to enable the broader team to be able to manage
  jenkins jobs. Michael will setup meeting to kick this off.

### Node summit CFP
* There was discussion around the group submitting either a talk or Panel.
* Anil volunteered to setup a meeting with the interested parties to flesh that out.

### Questions on acme air numbers reported
* Kunal questions about acme air footprint, should we add in profile of memory
  usage as opposed to before/after.  Geometric mean ?  Kunal to take action to
  submit PR to capture or add additional metric.

### EIS benchmark
* How to get this in.  Uttam is going to submit PR with info/scripts.

### Tech empower
* Kunal - should we include this ?  Anil, they have looked at it, it is pretty much
  http request/response. Because that part is 100% execution path, when you tune for
  it, that might be good for other workloads.  Very sensitive to network card, etc.

### Open issues review
* We ran out of time so deferred to next time.

## Actions for next meeting
* Michael setup meeting for CI job configuration
* Anil setup a meeting to flesh out submission to Node Summit
* Kunal to create PR to add mean (or something else) to Acme air runs.
* Uttam is going to submit PR with info/scripts for DC-EIS
* Michael to suggest updated wording for participation guidelines

## Next meeting
* Michael to set next meeting for 2 weeks from now.
