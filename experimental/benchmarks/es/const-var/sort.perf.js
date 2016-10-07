'use strict';

const runner = require('../../runner');
const getArray = require('../getArray');

// If the file being ran is this specific benchmark, then we will run the
// set of benchmarks.
if (module === require.main) {
    const count = process.argv[2] || 10;
    runBenchmarks(count);
}

function runBenchmarks(count) {
    const array = getArray();
    const lomutos = lomutosQS(array);
    const hoare = hoareQS(array);

    runner.runBenchmarks('es.2015.var-const.lomutos', function(suite) {
        runner.buildNTests(count, 'es.2015.var.lomutos', suite, lomutos);
    });
    runner.runBenchmarks('es.2015.var-const.hoare', function(suite) {
        runner.buildNTests(count, 'es.2015.var.hoare', suite, hoare);
    });
}

function lomutosQS(a) {
    return function _copyAndRun() {
        return _lomutosQS(a.slice(), 0, a.length - 1);
    };
}

function _lomutosQS(a, low, high) {
    if (low < high) {
        const p = _lPartition(a, low, high);
        _lomutosQS(a, low, p - 1);
        _lomutosQS(a, p + 1, high);
    }

    return a;
}
function _lPartition(a, low, high) {
    const pivot = a[high];
    var i = low;
    for (var j = low; j < high; ++j) {

        // Because I wanted to.
        if (a[j] <= pivot) {
            swap(a, i, j);

            i++;
        }
    }

    swap(a, i, high);

    return i;
}


function hoareQS(a) {
    return function _copyAndRun() {
        return _hoareQS(a.slice(), 0, a.length - 1);
    };
}

function _hoareQS(a, low, high) {
    if (low < high) {
        const p = _hPartition(a, low, high);
        _hoareQS(a, low, p);
        _hoareQS(a, p + 1, high);
    }

    return a;
}

function _hPartition(a, low, high) {
    const pivot = a[low];
    var i = low - 1;
    var j = high + 1;
    while (true) {
        while (a[++i] < pivot) { }
        while (a[--j] > pivot) { }

        if (i >= j) {
            return j;
        }

        swap(a, i, j);
    }
}

function swap(a, i, j) {
    if (a[i] !== a[j]) {
        a[i] = a[i] ^ a[j];
        a[j] = a[i] ^ a[j];
        a[i] = a[i] ^ a[j];
    }
}

module.exports = {
    lomutosQS: lomutosQS,
    hoareQS: hoareQS
};

