var fs = require('fs');
var readline = require('readline');

var r1 = readline.createInterface({
  input: fs.createReadStream('test.data')
});

var data = new Object();
data['total'] = 0.0;

r1.on('close', function() {
  console.log(data);
});

r1.on('line', function(line) {
   if ((line.indexOf('.js') !== -1) && (line.indexOf(':') !== -1)) {
     var key = line.slice(0, line.indexOf(' '));
     var value = parseFloat(line.slice(line.indexOf(':') + 2));
     if (data[key] === undefined) {
       data[key] = 0.0;
     }
     data[key] = data[key] + value;
     data['total'] = data['total'] + value;
     console.log(key);
     console.log(value);
   }
});

