
var path = require("path");
module.exports = function (route) {
  //Page 2 - set notes.html file
  route.get("/notes", function (req, res) {
    console.log("route");
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });
  //Page 1 - set index.html file
  route.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

}
