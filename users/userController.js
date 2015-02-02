//Global Variables
/*var databaseUrl = "localhost/magusxix";
var collections = [""];*/

//Required Modules
//var db = require("mongojs").connect(databaseUrl, collections);

var respond = function(request, response, write){
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(write);
  response.end();
}

var index = function (request, response) {
    respond(request, response, "<h1>Hey there, cowboy!</h1>");
}

exports.index = index;