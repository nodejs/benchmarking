FROM ubuntu:14.04
MAINTAINER Gareth Ellis <gareth.ellis@uk.ibm.com>
RUN mkdir /node /node/Jmeter /node/node_undertest /node/node_baseline
WORKDIR /node
RUN apt-get update \
&& apt-get install git openjdk-7-jdk unzip mongodb numactl bc wget -y \
&& rm -rf /var/lib/apt/lists/* \
&& git clone http://github.com/gareth-ellis/benchmarking \
&& bash /node/benchmarking/experimental/benchmarks/acmeair/setupJmeter.sh \
&& apt-get purge -y --auto-remove git unzip 
CMD [ "/node/benchmarking/experimental/benchmarks/acmeair/run_acmeair_docker.sh" ]
