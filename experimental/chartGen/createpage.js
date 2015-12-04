var fs = require('fs');
var mysql = require('mysql');

var createData = function(data) {
  var htmlDataArray = [];

  for (i = 0; i < data.length; i++) {
    htmlDataArray[i] =  '  data.push({\n    x: new Date('+ data[i].time * 1000 + '),\n    y: ' + data[i].value + '\n  });\n'; 
  }
  return htmlDataArray.join("");
}

var con = mysql.createConnection({
  host: 'localhost',
  user: 'XXXXXX',
  password: 'XXXXXXXXXX',
  database: 'benchdb'
})


con.connect(function(err) {
  if (err) {
    console.log('failed to connect to db:' + err);
    return;
  }
  
  con.query('SELECT time,value FROM benchresults WHERE streamid=1 AND benchid=1', function(err, rows, fields) {
    if (err) {
      console.log('failed to run query db:' + err);
      return;
    }

   // put the data into the page template
   var mainPage = fs.readFileSync('page.html.base').toString();
   mainPage = mainPage.replace('<DATA_ELEMENTS>', createData(rows));
   fs.writeFileSync('page.html', mainPage);
 
    con.end(function(err) {
      if (err) {
        console.log('failed to cleanly close db connection:' + err);
        return;
      }
    });
  });
});


