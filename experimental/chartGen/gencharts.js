var fs = require('fs');
var path = require('path');
var child_process = require('child_process');
var createPage = require('./createpage.js');

var scanDir = process.argv[2];
var phantomCommand = process.argv[3];

const GENERATION_TIMEOUT_MS = 20000;

// for each benchmark in the benchmarks directory
// find the configuartion file and if the benchmark
// is enabled generate the charts
var handleIfBenchmark = function(candidatePath) {
  fs.readdir(candidatePath, function(err, benchFiles) {
    // look for json file
    for(j=0; j< benchFiles.length; j++) {
      if (benchFiles[j].endsWith('.json')) {
        var benchFile = path.join(candidatePath, benchFiles[j]);
        var benchConfig = require(benchFile);
        if (benchConfig.enabled) {
          console.log('Processing:' + benchFile);
          createPage(benchFile, function() {
            var result = child_process.spawnSync(phantomCommand,
                           [path.join(process.cwd(), './createpng.js'),
                           path.join(process.cwd(), benchConfig.outputBase) + '.html',
                            path.join(process.cwd(), benchConfig.outputBase) + '.png'],
                           {"timeout": GENERATION_TIMEOUT_MS});
            console.log(benchFile + ": " + result.stdout.toString());
          });
        }
        break;
      }
    }
  });
}


// loop through the directory provided looking for
// subdirectories that contain benchmarks
fs.readdir(scanDir, function(err, files) {
  if (err) {
    console.log(err);
    return;
  }

  for(i=0; i< files.length; i++) {
    var candidatePath = path.join(scanDir, files[i]);
    var stats = fs.statSync(candidatePath);
    if (stats.isDirectory()) {
       handleIfBenchmark(candidatePath);
    }
  }
});

