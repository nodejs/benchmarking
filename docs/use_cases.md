# Node.js Use Cases

This doc is intended to capture the key uses cases for Node.js. These
use cases will then be used to guide what we develop/run as part of
the community benchmarking effort.

# Main Use Case Categories

The following categories have been identifed:

* Back-end API services
* Service oriented architectures (SOA)
* Microservice-based applications
* Generating/serving dynamic web page content
* SPA applications with bidirectional communication over WebSockets and/or HTTP/2
* Agents and Data Collectors
* Web Developer Tooling
* Small scripts

For these use cases one or more of the following are often imporant:

* consistent low latency
* ability to support high concurrency
* throughput
* fast startup/restart/shutdown
* low resource usage (memory/cpu)

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

## Agents and Data Collectors

Application running on a system in order monitor and or manage
the system or the applications running in it as directed by
an external monitoring/management system.  The ability to be updated
remotely is often a key requirement.

## Web Developer Tooling

Node.js is extensively used in all kinds of tools commonly used
to build modern web pages, including but not limited to projects like
[TypeScript](https://www.typescriptlang.org/), [webpack](http://webpack.js.org),
[Babel](http://babeljs.io), [ESLint](http://eslint.org), and the
[Chai Assertion Library](http://chaijs.com). All these tools are built on top
of Node.js and are crucial for the success of the modern web platform.

## Small scripts

Node.js is often used to script small tasks.  One common example is
build tooling, particularly for front-end engineering.  Key elements for this
use case are fast start/stop time as well as low resource(memory/cpu) usage as
many scripts may potentially be running at the same time.
