var Benchmark = require('benchmark');

module.exports = {
    /**
     * runs the benchmarks then updates the console after all the tests have
     * ran.
     */
    runBenchmarks: function runBenchmarks(nameOfTest, testLoader, onCycle) {
        var suite = Benchmark.Suite(nameOfTest);
        var results = [];
        testLoader(suite);

        // Runs the benchmarks
        var suiteRunner = suite.
            on('cycle', function (event) {
                results.push(event);
            }).
            on('error', function (e) {

                // Do we want some form of exit or logging?
                console.log(e);
                process.exit(1);
            }).
            on('complete', function() {

                // for CSV style output.
                // TODO: We could include a lot more information.
                // Perhaps something we should consider is a range instead of
                // a single number being returned.
                var sum = results.reduce(function(s, event) {
                    return s + event.target.hz;
                }, 0);
                var average = sum / results.length;
                console.log([nameOfTest].concat(average).join(','));
            });

        // If there is a onCycle function provided, then we will attach the
        // extra listener.
        if (onCycle) {
            suite.on('cycle', onCycle);
        }

        suiteRunner.run();
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
