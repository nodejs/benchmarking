# Node.js Use Cases

This doc is intended to capture the key uses cases for Node.js. These
use cases will then be used to guide what we develop/run as part of
the community benchmarking effort.

# Main Use Case Categories

The following categories have been identifed:

## Node.js as a component in a web stack

* Back-end API services
* Service oriented architectures (SOA)
* Microservice-based applications
* Generating/serving dynamic web page content
* SPA applications with bidirectional communication over WebSockets and/or HTTP/2

## Node.js outside of the web stack

* Scripting and automation
* Agents and Data Collectors
* Developer tooling
    * Web
    * Node.js
* Desktop applications
* Systems software
* Embedded software

# Metrics

Here are metrics that should be considered for each use case.
Some metrics are more relevant in one context than another.

* consistent low latency
* ability to support high concurrency
* throughput
* fast startup/restart/shutdown
* low resource usage (memory/cpu)
* good performance with a mix of compute and I/O async work

# Description of the use cases

## Back-end API services

Applications that provide APIs including REST and REST-like interfaces
exposing data, computation or other resources which are usually
public facing.  The focus is largely on interface style and they
are usually both implemented using HTTP and public facing. They are
commonly the foundation for mobile back-ends with public network
latency and bandwidth concerns.

## Service oriented architectures (SOA)

Applications that primarily provide private APIs with  more extreme
latency concerns for private networks. They often involving layering
and overlapping of service segments and a need for management
and aggregation of heterogeneous dependency service calls.

## Microservice-based applications

These applications consist of a number of nimble, low resource,
quick startup mini-applications.  They often use novel networking
approaches including lightweight message protocols and UDP.
Key elements are how well multiple small services can be
run concurrently(low memory/cpu) and the speed/latency with
which requests can be exchanged between the main applicaitons
and APIs/microservices.

## Generating/serving dynamic web page content

These applications are often built with additional modules like
[express](http://expressjs.com), [hapi](http://hapijs.com), [koa](http://koajs.com/)
and [React](http://facebook.github.io/react/). Key elements are
building and returning dynamic web pages often using template engines.

## SPA applications with bidirectional communication over WebSockets and/or HTTP/2

Node.js make it easy to build
[SPA](https://en.wikipedia.org/wiki/Single-page_application)
applications where the GUI for an application is delivered
through an initial http request and then subsequent updates
are managed through bidirectional messages between the client
and the server using WebSockets or HTTP/2.  Key elements are the
speed and latency with which messages can be sent back and forth
between client and server.

SPAs differ from Desktop Applications.
An SPA relies heavily on network communication.
A Desktop Application does not.

## Scripting and automation

Node.js is often used to script small tasks.
A key element for this use case is fast start/stop time.
Another concern is low resource (memory/cpu) usage,
as many scripts may potentially be running at the same time.

This use case is differentiated from "Developer Tooling" because
of the relative size of the scripts.
Small scripts spend a lot of time starting and stopping,
while developing tooling spends more time doing I/O and computation.

## Agents and Data Collectors

Application running on a system in order monitor and or manage
the system or the applications running in it as directed by
an external monitoring/management system.  The ability to be updated
remotely is often a key requirement.

## Developer Tooling

Developers rely on Node.js-based tools to develop
pure JavaScript software ("Web") and Node.js software.

### Web

Node.js is extensively used in all kinds of tools commonly used
to build modern web pages, including but not limited to projects like
[TypeScript](https://www.typescriptlang.org/), [webpack](http://webpack.js.org),
[Babel](http://babeljs.io), [ESLint](http://eslint.org), and the
[Chai Assertion Library](http://chaijs.com). All these tools are built on top
of Node.js and are crucial for the success of the modern web platform.

### Node.js

Developers also rely on Node.js-based tools for
general Node.js software development.
The most prominent example of such a tool is
the [npm cli](https://github.com/npm/cli).
Accelerating tools like this would save a lot of resources in CI
and micro-service deployments.

## Desktop applications

Node.js is growing in popularity for building desktop applications
using the [electron framework](https://github.com/electron/electron).
The [Atom text editor](https://github.com/atom/atom) is a great example
of an electron (Node.js)-based application.

These applications differ from SPAs in that their
functionality is not heavily dependent on the network.
They share a similar stack with web app development
for portability reasons.

Like client-side web applications,
applications for this use case are concerned with responsiveness.
Applications in this space likely have long running times and
significant resource footprints (memory, I/O, CPU).

## Systems software

Node.js can be used to develop full-fledged systems software.
Examples include
*torrenting software*
(e.g. [webtorrent](https://github.com/webtorrent/webtorrent))
, *databases*
(e.g. [LokiJS](https://github.com/techfort/LokiJS),
[NeDB](https://github.com/louischatriot/nedb),
and [HarperDB](https://www.harperdb.io/our-story))
, other *storage systems*
(e.g. whatever [scality](https://www.scality.com/) is building)
, and other *systems software*
(e.g. [NodeOS](https://github.com/NodeOS/NodeOS)).

This use case is concerned with maximizing throughput and
minimizing latency.
Applications in this space likely have long running times and
significant resource footprints (memory, I/O, CPU).

## Embedded software

Node.js can be used to develop robotics and IoT solutions.
For example, look at the
[Johnny-Five](https://github.com/rwaldron/johnny-five)
robotics and IoT platform.

Minimizing latency is key for this use case.
Minimal memory and CPU overhead from Node.js are
important properties for this use case.

# References

1. The [Node.js Foundation's Application Showcase](https://foundation.nodejs.org/resources/app-showcase)
plus [analysis by davisjam](https://docs.google.com/spreadsheets/d/1T1AS7V-ixiqqlU6z00N7lI3gqpXtPLYaCabKzPboxhE/edit#gid=0) performed in September 2018.
2. RisingStack performed a survey of 539 developers who use Node.js in production.
    - [Survey](https://blog.risingstack.com/why-developers-love-node-js-2018-survey/)
		- [Archive link](https://web.archive.org/web/20180219130150/https://blog.risingstack.com/why-developers-love-node-js-2018-survey/)
3. Table 1 from the Micro'15 paper [Microarchitectural Implications of Event-driven Server-side Web Applications](http://www.yuhaozhu.com/pubs/micro15.pdf), by Zhu et al.
