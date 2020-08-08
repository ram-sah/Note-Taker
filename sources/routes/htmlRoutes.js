// these html routes help to controls, what page is delivered to the user. 
var path = require("path");
// module.exports allows this module to be used in other js files. 
module.exports = function (route) {
  //Page 2 - set notes.html file
  route.get("/notes", function (req, res) {
    console.log("route");
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });
   // GET "*" - Will return the "/index.html" file
  route.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

}
