# Installation

* clone the repo
* run npm install
* create the file dbconfig.json, filling in the info required to connect to the database
* install the Chart.js files as per the readme in the lib directory 

The information in dbconfig.json is as follows:

<PRE>
{
  "host": "xxxxx",
  "user": "xxxxx",
  "password": "xxxxx",
  "database": "xxxxx"
}
</PRE>

# Running

To run:

* add Node to the current path
* cd into the chartGen directory
* execute gencharts.sh

# Generation Process

* The scripts currently expect that the directory with the benchmark configuration files 
  are in ../../benchmarks from the chartGen directory
* For each subdirectory directory in ../../benchmarks that contains a .json file the scripts
  will check that the benchmark is enabled and if so generate a chart for that benchmark
  based on the configuration in the json file
* the charts are currently generated in the chartGen directory (we should impove this)

Chart generation will be configured to run using cron on the benchmarking data machine 
so adding a new chart should only require adding a new subdirectory in the benchmarks
directory.

The following is an example of the script that can be run from cron:

<PRE>
#!/bin/bash
export BASEDIR=/home/benchmark
export HOME=$BASEDIR
export PATH=$BASEDIR/node/bin:$PATH
cd $BASEDIR/benchmarking/tools/chartGen/
sh gencharts.sh
</PRE>

# Chart configuration
The json file for a benchmark configures the id in the database for the benchmark (benchid), 
the name to be used in the chart (name) as well as the streams(which is a column in the database) that should be included on the chart.  The streams are identified by the stream id and then the rest of the configuration defines the name and color for that stream on the chart.

As an example:
<PRE>
{
 "benchid": 1,
 "name": "Startup Footprint" ,
 "template": "footprint.html.base",
 "outputBase" : "footprint",
 "streams": [ {"streamid": 1, "name": "master", "color": "blue" },
              {"streamid": 2, "name": "4.x", "color": "red" },
              {"streamid": 3, "name": "0.12.x", "color": "green" }
            ],
 "enabled": true
}
</PRE>

The charts are generated based on the template set int the configuration file where the following
values are substituted into the page:

*  &lt;DATA_ELEMENTS&gt;
*  &lt;DATALIST&gt;
*  &lt;DATASETS&gt;
*  &lt;DATASETS_LIST&gt;
*  &lt;LEGEND&gt;

based on the data/streams configured for the chart.

To add a new benchmark it is probably easiest to simply copy over one of the templates for 
and existing bechmark and tweak.  Only minor changes like the units will likely need to 
be modified



