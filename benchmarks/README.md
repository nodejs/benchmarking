# Current Node.js benchmarking infrastructure

We currently have setup a bare metal benchmark machine
https://ci.nodejs.org/computer/iojs-softlayer-benchmark/ which can 
be used to get repeatable results.  The machine does not have anything
else running on it and is dedicated hardware opposed to a virtual
machine.

In addition we have a benchmarks results machine which is used to 
capture results and generate summary charts from the cumulative
results.  This machine has not been added to the jenkins CI as
it does not run jenkins jobs, instead jobs are triggered
at startup or through cron.

Both of these machines are in the same subnet within softlayer.

The general flow is:

**benchmark machine**

* (a) -> runs benchmark and publishes to benchmark data machine through simple post

**benchmark data machine** 

* (b) -> accepts post and stores data into database, currently using mysql 

* (c) -> once a day generate cumulative graphs

* (d) -> once a day www site pulls graphs so that current data is displayed

**benchmark data consumers**

* (e) go to the website link https://benchmarking.nodejs.org/ and can view the benchmark charts


## Capturing Benchmark Results

(b) is implemented with a simple node application as documented in the 
readme here:  https://github.com/nodejs/benchmarking/tree/master/tools/acceptResults
which runs on the benchmark data machine.  It accepts the connection from
the benchmark machine and stores the result in a mysql database.
It limits access to the internal ip of the benchmark machine,
along with a tls connection and a fixed password (this will be updated to use
certificate based authentication). At this point it accepts the following url
parameters which mirror the database schema (see 
https://github.com/nodejs/benchmarking/blob/master/benchmarkdata/dbmachine_setup.txt)

* streamid  - release stream (1 for master, 2, for 4.x, etc.)
* benchid   - id for the benchmark (1 for footprint, etc)
* time      - timestamp for the benchmark run
* value     - score for the benchmark

The shell script used to post the results for (a) is as decribed in the 
readme here https://github.com/nodejs/benchmarking/tree/master/tools/postResults.
The jobs which current run benchmarks and post results are the following:

* https://ci.nodejs.org/job/benchmark-footprint-experimental/
* https://ci.nodejs.org/job/benchmark-footprint-experimental-0.12.x/
* https://ci.nodejs.org/job/benchmark-footprint-experimental-4.x/

These jobs build the appropriate Node level from source and then 
run the benchmarks.


## Graph Generation

(c) is implemented using the scripts as described in the readme 
here: https://github.com/nodejs/benchmarking/tree/master/tools/chartGen which
uses node and phantom js to generate a chart based on a json configuration file
and html template.  See the later section on adding benchmarks for more detail.

## Benchmark Results Display

The website for (e) is built by mirroring the content of 
https://github.com/nodejs/benchmarking/tree/master/www and then adding
the latest charts by pulling them from /home/benchmark/charts the benchmark
data machine. These two steps are done by the www build infrastructure.


# Adding Benchmarks

To add a benchmark the following will be required:

* A job to run the benchmark and post the result.  In many cases the 
  run/post step can simply be added to an existing job.

* A json configuration file and page template for the chart.  The 
 infrastructure to generate the charts scans the contents of the
 following directory:
 https://github.com/nodejs/benchmarking/tree/master/benchmarks 
 and will generate a chart for any subdirectory which contains
 a json file where "enabled" is set to true. See the readme in
 https://github.com/nodejs/benchmarking/tree/master/tools/chartGen
 for more info on how to create these files

* Updates to the www pages in
  https://github.com/nodejs/benchmarking/tree/master/www
  to show the chart. Once the json file in the previous step
  is set to enabled the infrastructure will automatically
  generate the chart and it will be pulled to the www
  site, however you need to update the static pages to 
  include references to the new chart.

To add a new benchmark you should create a new subdirectory 
under https://github.com/nodejs/benchmarking/tree/master/benchmarks
and add the json and page template files to the subdirectory.
If the benchmark requires any files that will not be part
of the node distribution this is also the place to put those
files as the benchmarking repo will be checked out as part of
running the benchmarks so these files will be available.

## Benchmark IDs and Stream IDs

Each benchmark must be assigned a unique benchmark id which 
is used to store/identify the benchmark  in the database. The
list of these ids is stored in:

https://github.com/nodejs/benchmarking/tree/master/benchmarks/BenchmarkIDs.md

When you add a new benchmark you must take the next highest
benchmark id and define it in this file

Data can for the same benchmark will be captured for 
different versions of Node.  Each Node version is assigned a
stream id.  These are defined in:

https://github.com/nodejs/benchmarking/tree/master/benchmarks/StreamIDs.md

If you want to capture data for a new Node version you must
take the next highest stream id and define it in this file.

