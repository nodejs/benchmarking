'use strict';
var fs = require('fs');
var vm = require('vm');

global.load = load;
global.read = read;
global.print = console.log;

process.chdir(__dirname+'/octane')
load('run.js');

function load(filename) {
  vm.runInThisContext(read(filename));
}

function read(filename) {
  return fs.readFileSync(filename, 'utf8');
}
