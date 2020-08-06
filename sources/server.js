var express = require("express");
const path = require("path");
var app = express();
var PORT = process.env.PORT || 8181;

require("./routes/htmlRoutes")(app);

//linking public folder to get data from it
app.use(express.static("public"))

// Starts our server.
app.listen(PORT, function() {
    console.log("App listening on PORT http://localhost:" + PORT);
  });