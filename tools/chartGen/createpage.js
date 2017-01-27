var async = require('async');
var path = require('path');
var fs = require('fs');
var mysql = require('mysql');

// read in the data required to connect to the database
var dbConfig = require('./dbconfig.json');


var createData = function(streamid, data) {
  var htmlDataArray = [];
  for (i = 0; i < data.length; i++) {
    htmlDataArray[i] =  '  data' + streamid + '.push({\n    x: new Date('+ data[i].time * 1000 + '),\n    y: ' + data[i].value + '\n  });\n';
  }
  return htmlDataArray.join("");
}

var generatePage = function(benchConfigFile, nowDone) {
  var datalist = new Array();
  var datasets = new Array();
  var dataElements = new Array();
  var datasetList = new Array();
  var legend = new Array();
  if (nowDone === undefined) {
    nowDone = function() {};
  }

  // read in the configuration for the chart to be created
  var chartConfig = require(benchConfigFile);

  var con = mysql.createConnection(dbConfig);

  // for each stream configured in the benchmark grap the
  // data from the database and push into the strings that will
  // be substituted into the base page content
  async.eachSeries(chartConfig.streams,
    function iterator(item, callbackDone) {
      // get the data from the database
      con.query('SELECT time,value FROM benchresults WHERE streamid=' + item.streamid +
                ' AND benchid=' + chartConfig.benchid , function(err, rows, fields) {
        if (err) {
          console.log('failed to run query db:' + err);
          nowDone(err);
          callbackDone(err);
          return;
        }
        datalist.push('  var data' + item.streamid + ' = new Array();\n');
        datasets.push('  var dataset' + item.streamid + ' = {\n    label: "' +
                      chartConfig.name + '(' + item.name + ')",\n    pointColor: "' +
                      item.color + '",\n    data: data' + item.streamid + '\n  }\n' );
        datasetList.push('dataset' + item.streamid);
        legend.push('    <tr><td><font color="' + item.color + '">' + chartConfig.name +
                    '(' + item.name + ')</td><td>&nbsp;</td><td><font color="' + item.color +
                    '">Latest result: ' + rows[rows.length-1].value + '</font></td></tr>\n');
        dataElements.push(createData(item.streamid, rows));
        callbackDone();
      });
    },
    function done(err) {
      if (err) {
        console.log(err);
        nowDone(err);
        return;
      }

      // put the data into the page template
      var mainPage = fs.readFileSync(path.join(path.dirname(benchConfigFile),chartConfig.template)).toString();
      mainPage = mainPage.replace('<DATA_ELEMENTS>', dataElements.join(''));
      mainPage = mainPage.replace('<DATALIST>', datalist.join(''));
      mainPage = mainPage.replace('<DATASETS>', datasets.join(''));
      mainPage = mainPage.replace('<DATASETS_LIST>', datasetList.join(','));
      mainPage = mainPage.replace('<LEGEND>', legend.join(''));
      mainPage = mainPage.replace('<UNITS>', chartConfig.units);
      try {
        fs.unlinkSync(chartConfig.outputBase + '.html');
      } catch (err) {}
      fs.writeFileSync(chartConfig.outputBase + '.html', mainPage);

      con.end(function(err) {
        if (err) {
          console.log('failed to cleanly close db connection:' + err);
        }
        nowDone();
      });
    }
  );
}

if (require.main === module) {
  generatePage(process.argv[2]);
}

module.exports = generatePage;
