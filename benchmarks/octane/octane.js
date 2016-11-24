'use strict';
const fs = require('fs');
const vm = require('vm');

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
