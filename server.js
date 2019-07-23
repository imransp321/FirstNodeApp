var app = require("./app");
var http = require("http");
const PORTS = process.env.PORT || 3000;

var server = http.createServer(app);

server.listen(PORTS, function() {
  console.log("Port is running on " + PORTS);
});
