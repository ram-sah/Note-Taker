var express = require("express");
const path = require("path");
var app = express();
var PORT = process.env.PORT || 8181;

//linking public folder to get data from it
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);

// Starts our server.
app.listen(PORT, function() {
    console.log("App listening on PORT http://localhost:" + PORT);
  });