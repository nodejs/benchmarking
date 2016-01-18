var Benchmark = require('benchmark');

module.exports = {
    /**
     * runs the benchmarks then updates the console after all the tests have
     * ran.
     */
    runBenchmarks: function runBenchmarks(nameOfTest, testLoader) {
        var suite = Benchmark.Suite(nameOfTest);
        var results = [];
        testLoader(suite);

        // Runs the benchmarks
        suite.
            on('cycle', function (event) {
                results.push(event.target.hz);
            }).
            on('error', function (e) {

                // Do we want some form of exit or logging?
                console.log(e);
                process.exit(1);
            }).
            on('complete', function() {

                // for CVS style output.
                console.log([nameOfTest].concat(results).join(','));
            }).
            run();
    },

    /**
     * silly convience function for adding the same tests a bunch.
     */
    buildNTests: function buildNTests(count, title, suite, fn) {
        for (var i = 0; i < count; ++i) {
            suite.add(title + ':' + i, fn);
        }
    }
};
