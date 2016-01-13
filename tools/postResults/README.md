# Posting Results

Currently we use a simple shell script to post results. It
is used within the jenkins jobs like this:

<PRE>
PUBLISH_RESULT=`/home/iojs/benchmarking/tools/postResults/postit.sh $STREAMID $BENCHID $RESULT`

if [ "$PUBLISH_RESULT" != "ok" ]; then
  # published ok
  exit -1
fi
</PRE>

where the parameters are as follows:

* $STREAMID   - the stream to which the result is associated
* $BENCHID    - the id for the benchmark
* $RESULT     - the value to be stored for the benchmark result


# Installation

To install on the machine where the benchmarks will be run by jenkins

* login in as the jenkins user 
* cd to /home/iojs
* git clone https://github.com/nodejs/benchmarking.git
* edit benchmarking/tools/postResults/postit.sh to set the appropriate 
  userid, password and ip for the benchmark data machine (this 
  will be replaced by using certificates at some point)
* make the script executable by doing
    chmod +x benchmarking/tools/postResults/postit.sh

The plan is to automate this through an ansible template for the
benchmark machine 
