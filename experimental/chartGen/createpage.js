var fs = require('fs');

var createData = function(data) {
  var htmlDataArray = [];

  for (i = 0; i < data.length; i++) {
    htmlDataArray[i] =  '  data.push({\n    x: new Date('+ data[i][0] + '),\n    y: ' + data[i][1] + '\n  });\n'; 
  }
  return htmlDataArray.join("");
}

// replace this by pulling data from database
var data = [[Date.parse("2015-04-27T04:00:00+03:00"),343],[Date.parse("2015-04-29T04:00:00+03:00"),12312]];

// put the data into the page template
var mainPage = fs.readFileSync('page.html.base').toString();
mainPage = mainPage.replace('<DATA_ELEMENTS>', createData(data));
fs.writeFileSync('page.html', mainPage);
