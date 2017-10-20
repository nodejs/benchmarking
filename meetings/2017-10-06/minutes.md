# Collaborator summit at Node Interactive

## Present
* Peter: V8, worked on fixing regressions on micro benchmarks
* Anil: Intel, works on standards for benchmarks (multiple languages)
* Emily: Colorado, interested in test driven development
* Michael Dawson: IBM
* Franzi (@fhinkel): V8, front-end benchmarks are easy to get (take popular websites), we
want to figure out, what are relevant benchmarks for Node
* Hitesh: Microsoft, same problem as Franzi
* Justin: On a different project, had runs every 15 minutes and posted them to PR
* Anna (@addaleax):
* Suresh: Intel, works on micro-architecture performance, software optimization for runtimes

Benchmarks should run in a reasonable time (not 24 hours).

Benchmarks to determine if PRs that claim perf improvements really add anything

Different scenarios of benchmarks:
VM, core,

[https://benchmarking.nodejs.org/](https://benchmarking.nodejs.org/) These graphs run nightly
They helped catch the problem with hash-seed vulnerability that it wasn’t backported correctly.

It would be a lot of work to constantly monitor and bisect regressions. Also, noisy data. Who would do that?
Java as enterprise has a dedicated team (just like in V8 that is a lot of work) to interpret the data.

Can we simplify or cluster our existing benchmarks? Find a top 10 benchmark?

Memory consumption: Yes, we measure that.

Set of Frameworks for different ecosystems (Rust, Go, Node),
[TechEmpower](https://benchmarking.nodejs.org/).

Competitiveness with other languages (not a VM concern) - this is almost a
marketing goal. Maybe eventually the foundation can pay somebody to focus on benchmarks

Benchmarks for tooling: little noise, that’s good.

Can we focus on categorizing the unit-benchmarks?

Justin will look into TechEmpower and what they do for other language.

Each working group should contribute benchmarks
* Http2
* Benchmark for server side rendering

We can run benchmarks on PRs now. 🎉
[https://github.com/nodejs/benchmarking/blob/master/docs/core_benchmarks.md](https://github.com/nodejs/benchmarking/blob/master/docs/core_benchmarks.md)
This should be in Node core (because we do the merging and CI); Action Item: Michael Dawson?
Shouldn’t be required for every commit (test or doc changes don’t need it).
Use the performance label?

Human side to benchmarking numbers:
Problem: over-optimizing with micro benchmarks - but are those really helpful/necessary contributions?
Stress/focus efforts on more comprehensive benchmarks
Identify areas where we think there’s room for perf improvements (Perf Backlog/”Focus Areas”)

Under Node-DC-EIS and Ghost.js Intel sees high ITLB and I-cache misses.
[Optimizing Function Placement](https://benchmarking.nodejs.org/), and large
pages can help reduce ITLB and I-Cache misses other language
runtimes (eg JVM, HHVM, PHP) have specific support for that.

[Ghost](https://ghost.org/) should be a benchmark
[Egg](https://github.com/eggjs/benchmark) (pointed out by Joyee)


## Action Items
* Peter: simplify microbenchmarks, probably by suggesting a lot are removed. Will
collaborate with Hitesh on this.
* Justin: TechEmpower
* Michael + Anna: Figure out if doc is ready for Node Core
* Anil: copy Ghost benchmark over to our Repo

Everybody: Come to meeting, see foundation calendar, usually Mondays
