var express = require("express");
const path = require("path");
var app = express();
var PORT = process.env.PORT || 8181;


//Page 1 - set index.html file
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(PORT, function() {
    console.log("App listening on PORT http://localhost:" + PORT);
  });