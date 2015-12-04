var https = require('https')
var http = require('http')
var path = require('path')
var url = require('url')
var fs = require('fs')
var mysql = require('mysql')
var auth = require('basic-auth')

ssl_options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem'),
}

// authenticate requests to the alarm console
function authenticate(request,response) {
   var authInfo = auth(request)
   if (!authInfo || authInfo.name !== 'yyyyyyyyy' || authInfo.pass !== 'yyyyyyyyy' ) {
      if (response !== undefined) {
         response.writeHead(401, {'WWW-Authenticate': 'Basic realm="alarm"'});
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

var server = https.createServer(ssl_options, function(request,response) {
  if (!authenticate(request, response)) { 
     return
  } 

  // get and validate we have appropriate data
  var queryData = url.parse(request.url, true).query

  var con = mysql.createConnection({
   host: 'localhost',
   user: 'XXXXXX',
   password: 'XXXXXXXXXX',
   database: 'benchdb'
  })

  con.connect(function(err) {
    if (err) {
      errorFunction(request, response, 'failed to connect to db:' + err)
      return
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
})

server.listen(3000,'10.52.6.151')
