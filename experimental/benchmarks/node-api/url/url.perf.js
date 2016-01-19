var url = require('url');

var runner = require('./../runner');


// ------------------------------------------
// Parse strings
// ------------------------------------------
var DOMAIN_ONLY = 'http://localhost:8080/';
var DOMAIN_AND_PATH = 'http://localhost:8080/foo/bar/bazz';
var PATH_LONG = 'http://t.ly/a/b/c/d/e/f/g/h/i/j/l/m/n/o/p/q/r/s/t/u/v/w/x/y/z';
var QUERY = 'http://localhost:8080/foo/bar/bazz?a=42&b=72';
var HASH = 'http://localhost:8080/foo/bar/bazz#here_is_my_hash';
var HASH_LONG =
    'http://localhost:8080/foo/bar/bazz#here_is_my_hash_and_it_is_very_longaoe';
var QUERY_HASH = 'http://localhost:8080/foo/bar/bazz?a=42&b=72#here_is_my_hash';
var QUERY_LONG =
    'http://localhost:8080/foo/bar/bazz?a=4&b=5&c=6&d=7&e=8&f=9&g=1&h=2&i=3';

var URL_ENCODING = 'http://localhost:8080/?a=%5B%22a%22,%22b%22,%22c%22%5D';

var SUPER_LONG_URL =
    'http://localhost:8080/a/b/c/d/e/f/g/h/i/j/l/m/n/o/p/q/r/s/t/u/v/w/x/y/z' +
    '?a=41324&b=51234&c=61234&d=71234&e=81234&f=91234&g=1134&h=21234&i=31234' +
    '#here_is_my_hash_and_it_is_very_long_andlongerThanThePreviousOne.Fact....';

// Legacy style for my PHP peeps
var URL_ARRAYS = 'http://localhost:8080/?a[]=1&a[]=2&a[]=3';

// ------------------------------------------
// format URL objects
// ------------------------------------------
var fDOMAIN_ONLY = url.parse(DOMAIN_ONLY);
var fDOMAIN_AND_PATH = url.parse(DOMAIN_AND_PATH);
var fPATH_LONG = url.parse(PATH_LONG);
var fQUERY = url.parse(QUERY);
var fHASH = url.parse(HASH);
var fHASH_LONG = url.parse(HASH_LONG);
var fQUERY_HASH = url.parse(QUERY_HASH);
var fQUERY_LONG = url.parse(QUERY_LONG);
var fURL_ENCODING = url.parse(URL_ENCODING);
var fSUPER_LONG_URL = url.parse(SUPER_LONG_URL);
var fURL_ARRAYS = url.parse(URL_ARRAYS);

// ------------------------------------------
// resolve strings
// ------------------------------------------
var URL_FROM = '/a/ba/cba';
var URL_FROM_LONG = '/a/baoeuoeuoeuoeuoeuoeuoeuoeu/cbaoeuoeuoeuoeuoeuoeuoeuoeu';
var URL_TO = 'dcba';
var URL_TO_WITH_SLASH = '/dcba';
var URL_TO_WITH_BACK = '/../../test';

// If the file being ran is this specific benchmark, then we will run the
// set of benchmarks.
if (module === require.main) {
    var count = process.argv[2] || 10;
    runBenchmarks(count);
}

function runBenchmarks(count) {
    buildResolveTests(count);
    buildFormatTests(count);
    buildParseTests(count);
}

function buildResolveTests(count) {
    runner.runBenchmarks('resolve.from-to', function(suite) {
        var res = resolve(URL_FROM, URL_TO);
        runner.buildNTests(count, 'resolve.from-to', suite, res);
    });

    runner.runBenchmarks('resolve.from-long-to', function(suite) {
        var res = resolve(URL_FROM_LONG, URL_TO);
        runner.buildNTests(count, 'resolve.from-long-to', suite, res);
    });

    runner.runBenchmarks('resolve.from-to-slash', function(suite) {
        var res = resolve(URL_FROM, URL_TO_WITH_SLASH);
        runner.buildNTests(count, 'resolve.from-to-slash', suite, res);
    });

    runner.runBenchmarks('resolve.from-to-back', function(suite) {
        var res = resolve(URL_FROM, URL_TO_WITH_BACK);
        runner.buildNTests(count, 'resolve.from-to-back', suite, res);
    });

    runner.runBenchmarks('resolve.from-long-to-back', function(suite) {
        var res = resolve(URL_FROM_LONG, URL_TO_WITH_BACK);
        runner.buildNTests(count, 'resolve.from-long-to-back', suite, res);
    });
}

function buildFormatTests(count) {
    runner.runBenchmarks('format.domain-only', function(suite) {
        formatBenchmark('format.domain-only', fDOMAIN_ONLY, suite, count);
    });

    runner.runBenchmarks('format.domain-and-path', function(suite) {
        formatBenchmark('format.domain-and-path', fDOMAIN_AND_PATH, suite, count);
    });

    runner.runBenchmarks('format.path-long', function(suite) {
        formatBenchmark('format.path-long', fPATH_LONG, suite, count);
    });

    runner.runBenchmarks('format.query', function(suite) {
        formatBenchmark('format.query', fQUERY, suite, count);
    });

    runner.runBenchmarks('format.query-long', function(suite) {
        formatBenchmark('format.query-long', fQUERY_LONG, suite, count);
    });

    runner.runBenchmarks('format.hash', function(suite) {
        formatBenchmark('format.hash', fHASH, suite, count);
    });

    runner.runBenchmarks('format.hash-long', function(suite) {
        formatBenchmark('format.hash-long', fHASH_LONG, suite, count);
    });

    runner.runBenchmarks('format.query-hash', function(suite) {
        formatBenchmark('format.query-hash', fQUERY_HASH, suite, count);
    });

    runner.runBenchmarks('format.url-encoding', function(suite) {
        formatBenchmark('format.url-encoding', fURL_ENCODING, suite, count);
    });

    runner.runBenchmarks('format.super-long-url', function(suite) {
        formatBenchmark('format.super-long-url', fSUPER_LONG_URL, suite, count);
    });
}

function buildParseTests(count) {
    runner.runBenchmarks('parse.domain-only', function(suite) {
        parseBenchmark('parse.domain-only', DOMAIN_ONLY, suite, count);
    });

    runner.runBenchmarks('parse.domain-and-path', function(suite) {
        parseBenchmark('parse.domain-and-path', DOMAIN_AND_PATH, suite, count);
    });

    runner.runBenchmarks('parse.path-long', function(suite) {
        parseBenchmark('parse.path-long', PATH_LONG, suite, count);
    });

    runner.runBenchmarks('parse.query', function(suite) {
        parseBenchmark('parse.query', QUERY, suite, count);
    });

    runner.runBenchmarks('parse.query-long', function(suite) {
        parseBenchmark('parse.query-long', QUERY_LONG, suite, count);
    });

    runner.runBenchmarks('parse.hash', function(suite) {
        parseBenchmark('parse.hash', HASH, suite, count);
    });

    runner.runBenchmarks('parse.hash-long', function(suite) {
        parseBenchmark('parse.hash-long', HASH_LONG, suite, count);
    });

    runner.runBenchmarks('parse.query-hash', function(suite) {
        parseBenchmark('parse.query-hash', QUERY_HASH, suite, count);
    });

    runner.runBenchmarks('parse.url-encoding', function(suite) {
        parseBenchmark('parse.url-encoding', URL_ENCODING, suite, count);
    });

    runner.runBenchmarks('parse.super-long-url', function(suite) {
        parseBenchmark('parse.super-long-url', SUPER_LONG_URL, suite, count);
    });
}

function parseBenchmark(name, urlToParse, suite, count) {
    var parseFn = parse(urlToParse);
    runner.buildNTests(count, name, suite, parseFn);
}

function formatBenchmark(name, urlObj, suite, count) {
    var formatFn = format(urlObj);
    runner.buildNTests(count, name, suite, formatFn);
}

module.exports = runBenchmarks;

// Takes in a URL object and creates the strig for it.
function format(urlObj) {
    return function innerFormat() {
        url.format(urlObj);
    };
}

// There should be very little variance between the different tests.  The parser
// does not parse query strings so it should be rather quick.
function parse(string) {
    return function innerParse() {
        url.parse(string);
    };
}

// Same as the above to, takes in two arguments and uses them to call a URL
// function over and over again.
function resolve(urlFrom, urlTo) {
    return function innerResolve() {
        url.resolve(urlFrom, urlTo);
    };
}
