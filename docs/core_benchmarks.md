# How to: Running core benchmarks on Node.js CI

## Current function
The current jenkins job aims at allowing the impact of a PR on a particular branch to be compared. For example how does PR XXXX impact performance on master?

## How to configure the job
To start with visit https://ci.nodejs.org/job/benchmark-node-micro-benchmarks/build?delay=0sec
Here you have four values to enter:
### BRANCH
This is which branch or tag to compare to, defaults to master
### PULL_ID
Pull request to test
These two variables provide the two copies of Node.js to compare - we build BRANCH, then take a copy and apply the diff of PULL_ID, and build again. We now have two copies of Node to compare

### CATEGORY
This is a category of benchmarks in the node/benchmark folder from core
### FILTER
This reduces further the benchmarks in scope and is includes benchmark where FILTER exists in the filename.

On running, a minimum of 30 iterations of each benchmark/variation per build, once they have all finished Rscript will summarise the results, suggesting improvement / regression as well as confidence intervals.
