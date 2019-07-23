var http = require("http");

const PORT = 3001;

var server = http.createServer(PORT, function(req, res) {
  res.end("Hello word");
});

server.listen(PORT, function() {
  console.log("Http Server on port " + PORT);
});
