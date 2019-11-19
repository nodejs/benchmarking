var https = require('https')
var url = require('url')
var fs = require('fs')
var mysql = require('mysql')
var auth = require('basic-auth')

var listenIP = process.argv[2];

// read in the data required to connect to the database
var dbConfig = require('./dbconfig.json');

// read in the authentication info
var authConfig = require('./authconfig.json');

// read in the key and certificate for the server
ssl_options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem'),
}


// authenticate requests to the bridge
function authenticate(request, response) {
   var authInfo = auth(request)
   if (!authInfo || authInfo.name !== authConfig.name || authInfo.pass !== authConfig.pass ) {
      if (response !== undefined) {
         response.writeHead(401, {'WWW-Authenticate': 'Basic realm="' + authConfig.realm + '"'});
         response.end()
      }
      return false
   }
   return true
}


var errorFunction = function(request, response, error) {
  response.writeHead(404, {'Content-Type': 'text/html'})
  response.end(error)
}

var server = https.createServer(ssl_options, function(request, response) {
  if (!authenticate(request, response)) {
     return
  }

  function connect2db() {
    // get and validate we have appropriate data
    var queryData = url.parse(request.url, true).query

    var con = mysql.createConnection(dbConfig);

    con.connect(function(err) {
      if (err) {
        errorFunction(request, response, 'failed to connect to db:' + err)
        setTimeout(connect2db,2000);
      }

      // extract data and add to database
      con.query('INSERT INTO benchresults SET ?', queryData, function(err, res) {
        if (err) {
          errorFunction(request, response, 'failed to run query:' + err)
          return
        }

        con.end(function(err) {
          if (err) {
            errorFunction(request, response, 'failed to cleanly close db connection:' + err)
            return
          }

          response.writeHead(200, {'Content-Type': 'text/html'})
          response.end('ok')
        })
      })
    })
    con.on('error', function(err) {
      console.log('db error', err);
      if(err.code === 'PROTOCOL_CONNECTION_LOST') {
        connect2db();
      } else {
        throw err;
      }
    });
  }
  connect2db();
})

server.listen(3000, listenIP)
