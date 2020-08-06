const fs = require("fs");
var dbData = "./db/db.json";
var parsedNotes = JSON.parse(fs.readFileSync(dbData, 'utf8'));

module.exports = function(app) {
    app.get("/api/notes", (req, res) => {
        return res.json(parsedNotes);
    });
};


  