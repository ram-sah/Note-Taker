
var path = require("path");
module.exports = function (app) {
    //Page 1 - set index.html file
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    //Page 2 - set notes.html file
    app.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });
}