var system = require('system');
var page = require('webpage').create();

// use phatomjs to generate a png for the chart
page.open('file://' + system.args[1], function(status) {
  console.log("Status: " + status);
  if(status === "success") {
    setTimeout(function() {
      page.render(system.args[2])
      phantom.exit();
    }, 3000);
  }
});

