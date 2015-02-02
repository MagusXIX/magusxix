//GLOBAL VARIABLES
/*var databaseUrl = "localhost/magusxix";
var collections = [""];*/

//REQUIRED MODULES
var router = require("./router.js");
//var db = require("mongojs").connect(databaseUrl, collections);

var startServer = function () {

  //Turn on the controllers.

  //Start the router.
  router.router();

}

startServer();

exports.startServer = startServer;