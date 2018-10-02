# Coverage of use cases and key attributes

Coverage of each of the uses cases and key atributes
defined in:
 * [use cases](https://github.com/nodejs/benchmarking/blob/master/docs/use_cases.md)
 * [key attributes](https://github.com/nodejs/benchmarking/blob/master/docs/runtime_attributes.md)

# Use Cases

## Node.js a component in a web stack

Use case                                    |Benchmark with coverage| Notes
--------------------------------------------|-----------------------|-------
Back-end API services                       |                       |
Service oriented architectures (SOA)        |                       |
Microservice-based applications             |                       |
Generating/serving dynamic web page content | Acme Air Ops/s <BR>Acme Air Latency |
Single page applications (SPA) with bidirectional communication over WebSockets and/or HTTP/2 |

## Node.js outside of the web stack

Use case                                   |Benchmark with coverage| Notes
-------------------------------------------|-----------------------|-------
Scripting and automation                   | Require New Ops<BR> Require Cached Ops<BR> Start + stop Time | Needs more attributes tested |
Agents and Data Collectors                 |                       |
Developer tooling: web                     | [Web Tooling Benchmark](https://github.com/v8/web-tooling-benchmark) |
Developer tooling: Node.js                 |                       |
Desktop applications                       |                       |
Systems software                           |                       |
Embedded software                          |                       |

# Key Attributes

Key attribute                              |Benchmark with coverage| Notes
-------------------------------------------|-----------------------|-------
memory footprint at startup                | Startup footprint     |
memory footprint after load metrics are collected (timing will depend on the specific benchmark) | Acme Air footprint after load |
Node.js process cpu usage when idle        |                       |
max throughput as measured through<BR> max http requests served/s  | Acme Air Ops/sec |
gc cpu use under load                      |                       |
gc allocation throughput under load        |                       |
gc max pause times under load              |                       |
install package size                       |                       |
size on disk once installed                |                       |
