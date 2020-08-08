var express = require("express");
const path = require("path");
var app = express();
var PORT = process.env.PORT || 8081;

//setting up application parsing for my JSON files
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//linking public folder to get data from it
app.use(express.static("public"));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Starts our server.
app.listen(PORT, function() {
    console.log("App listening on PORT http://localhost:" + PORT);
  });