//Global Variables
/*var databaseUrl = "localhost/magusxix";
var collections = [""];*/

//Required Modules
//var db = require("mongojs").connect(databaseUrl, collections);
var fs = require("fs");

var respond = function(request, response, write){
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(write);
  response.end();
}

var index = function (request, response) {
  fs.readFile("./view.html", function (err, data) {
  	if (err) {
      console.log("YO! WE HAVE AN ERROR OVER HERE!");
      console.log(err);
  	}
    respond(request, response, data);
  });
}

exports.index = index;