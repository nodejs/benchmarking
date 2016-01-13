# Accepting Results

Results are posted from the server on which the benchmark runs to the 
benchmark data machine using the script in 
<PRE>
https://github.com/nodejs/benchmarking/tree/master/tools/postResults
</PRE>

The bridge.js script in this directory accepts the posted data
and adds it to the local database.

# Installation

To install on the benchmark data machine you must:

* login as the benchmark user
* cd to /home/benchmarking (default user directory)
* git clone https://github.com/nodejs/benchmarking.git
* add the dbconfig.json, authconfig.json and cert.pem and key.pem files to 
  the benchmarking/tools/acceptResults directory
* run npm install to install the dependencies

The dbconfig.json file must contain the information needed to connect
to the local database as follows:

<PRE>
{
  "host": "xxxxx",
  "user": "xxxxx",
  "password": "xxxxx",
  "database": "xxxxx"
}
</PRE>

where xxxx are the appropriate values.

The authconfig.json file must contain the authentication information
that will be configured in postit.sh (see
https://github.com/nodejs/benchmarking/blob/master/tools/postResults/README.md)
as follows:

<PRE>
{
  "name": "xxxxxx",
  "pass": "xxxxxx",
  "realm": "xxxxx"
}
</PRE>

where xxxx are the appropriate values. The plan is to replace this with 
certificate based authentication.

cert.pem and key.pem must be the certificate and key for the 
server.  These can be created using openssl. For example:

<PRE>
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout key.pem -out cert.pem
</PRE>

The plan is to automate much of this install through an Ansible template.

# Running

To run cd into the benchmarking/tools/acceptResults directory and then run
<PRE>
node bridge.js LISTEN_IP
</PRE>

where LISTEN_IP is the ip of the address for the server to listen on.  Currently
we make this the internal ip within softlayer as the benchmark and benchmark
data machines are on the same internal network.

As an example:

<PRE>
#!/bin/bash
export BASEDIR=/home/benchmark
export HOME=$BASEDIR
export PATH=$BASEDIR/node-v4.2.2-linux-x64/bin:$PATH
cd $BASEDIR/benchmarking/tools/acceptResults
node bridge.js "10.52.6.151" &
</PRE>

