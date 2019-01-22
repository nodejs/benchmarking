var runner = require('./../runner');

// If the file being ran is this specific benchmark, then we will run the
// set of benchmarks.
if (module === require.main) {
    var count = process.argv[2] || 10;
    runBenchmarks(count);
}

function runBenchmarks(count) {
    runner.runBenchmarks('require.cached', function(suite) {
        runner.buildNTests(count, 'require.cached', suite, cachedRequire);
    });
    runner.runBenchmarks('require.new', function(suite) {
        runner.buildNTests(count, 'require.new', suite, newRequire);
    });
}

module.exports = runBenchmarks;

// Requires in a new file.  This functions running time is affected by the speed
// of a delete.  One can assume that the cost of requiring a function is much
// greater than (>>) the cost of deleting one key so the speed should not be
// affected noticably.
function newRequire() {
    require('./a');

    // Deletes the cached function. I wonder if this test will work on windows,
    // may have to alter this statement to consider windows delimiters.
    module.constructor._cache[__dirname + '/a.js'] = undefined;
}

// The cached require will be insignificantly affected by the first invocation
// of this function.  Since the first invocation may require caching.  After
// that the module will already be cached.
function cachedRequire() {
    require('./a');
}
