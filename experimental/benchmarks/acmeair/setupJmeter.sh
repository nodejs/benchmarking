#!/bin/bash
JMETER_VERSION=apache-jmeter-3.0
DIR=`dirname $0`
CURRENT_DIR=`cd $DIR;pwd`

mkdir /node/Jmeter_setup
pushd /node/Jmeter_setup
wget https://archive.apache.org/dist/jmeter/binaries/${JMETER_VERSION}.zip
unzip ${JMETER_VERSION}.zip
git clone https://github.com/acmeair/acmeair-driver
pushd acmeair-driver
	git checkout f4ee2b451cc381b7539601d1b741d8b01684fe2b
popd

wget https://storage.googleapis.com/google-code-archive-downloads/v2/code.google.com/json-simple/json-simple-1.1.1.jar
pushd /node/Jmeter_setup/acmeair-driver
	./gradlew build
	cp acmeair-jmeter/build/libs/acmeair-jmeter-*-SNAPSHOT.jar  /node/Jmeter_setup/${JMETER_VERSION}/lib/ext/
popd
cp json-simple-1.1.1.jar /node/Jmeter_setup/${JMETER_VERSION}/lib/ext/
git clone https://github.com/acmeair/acmeair-nodejs
pushd acmeair-nodejs
git checkout 009bd063700089a2680b696336d87bd97e412f0e
sed -i 's/9080/4000/g' settings.json

popd

mv acmeair-nodejs ../
mv ${JMETER_VERSION}/*  ../Jmeter
popd
mkdir /node/mongo3
cp ${CURRENT_DIR}/mongodb.sh /node/mongo3/

