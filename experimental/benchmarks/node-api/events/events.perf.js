var EventEmitter = require('events');
var runner = require('./../runner');
var util = require('util');

// We are going to use a custom event listener.
var MyEmitter = function() {
    EventEmitter.call(this);
};
util.inherits(MyEmitter, EventEmitter);

// emitter with Infinite listeners
var emitter = new MyEmitter();
emitter.setMaxListeners(0);

// If the file being ran is this specific benchmark, then we will run the
// set of benchmarks.
if (module === require.main) {
    var count = process.argv[2] || 10;
    runBenchmarks(count);
}

// Each test will listen to cycle event and clear out the listeners from the
// previous run so that each run will have the same conditions as the previous
// run.
// TODO: Is there a risk of running out of memory?
function runBenchmarks(count) {

    runner.runBenchmarks('events.new-emitter', function addNewEmitter(suite) {
        runner.buildNTests( count, 'events.new-emitter', suite, newEmitter);
    });

    runner.runBenchmarks('events.emit', function addEmit(suite) {
        emitter.on('event', function() {});
        runner.buildNTests( count, 'events.emit', suite, emit);
    });

    runner.runBenchmarks('events.once', function addOnce(suite) {
        runner.buildNTests( count, 'events.once', suite, once);
    }, cleanEmitter);

    runner.runBenchmarks('events.on', function addOnSingleEvent(suite) {
        runner.buildNTests(count, 'events.on', suite, onSingleEvent);
    }, cleanEmitter);

    var name = 'events.on (multiple names)';
    runner.runBenchmarks(name, function addOnMultipleEvent(suite) {
        runner.buildNTests(
            count, 'events.on (multiple names)', suite, onMultipleEvent);
    }, cleanEmitter);
}

// Erases the 'possible events' from the event emitter.
function cleanEmitter() {
    emitter.removeAllListeners(['event']);
    for (var i = 0; i < randomCount; ++i) {
        emitter.removeAllListeners(['event' + i]);
    }

    // Resets random count so that any further tests will be the same.
    randomCount = -1;
}

// Repeats an addListener with a single event name.
function onSingleEvent() {
    emitter.on('event', function() { });
}

// Repeats an addListener with a random event name.
var randomCount = -1;
function onMultipleEvent() {
    emitter.on('event' + ++randomCount, function() { });
}

var data = {};
// Adds a once event, then emits the data.
function once() {
    emitter.once('event', function() {});
    emitter.emit('event', data);
}

function emit() {
    emitter.emit('event', data);
}

function newEmitter() {
    return new MyEmitter();
}

