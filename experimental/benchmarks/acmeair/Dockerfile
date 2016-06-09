FROM ubuntu:14.04
MAINTAINER Gareth Ellis <gareth.ellis@uk.ibm.com>
RUN apt-get update && apt-get install git openjdk-7-jdk mongodb zip unzip numactl bc wget -y
RUN mkdir /node 
RUN date
WORKDIR /node
RUN mkdir Jmeter node_undertest node_baseline
RUN git clone http://github.com/gareth-ellis/benchmarking 
RUN bash /node/benchmarking/experimental/benchmarks/acmeair/setupJmeter.sh
RUN numactl --hardware
COPY node_undertest /node/node_undertest
COPY node_baseline /node/node_baseline
RUN /node/benchmarking/experimental/benchmarks/acmeair/run_acmeair_docker.sh
