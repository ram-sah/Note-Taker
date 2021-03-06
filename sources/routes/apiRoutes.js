const fs = require("fs");
var dbData = "./db/db.json";
// Read dbData file and store in parsedData
var parsedData = JSON.parse(fs.readFileSync(dbData, 'utf8'));

// GET "/api/notes"
// module.exports allows this module to be used in other js files  
module.exports = function (route) {
    route.get("/api/notes", (req, res) => {
        // Converting to JSON 
        res.json(parsedData);
    });
    // POST "/api/notes"  
    route.post("/api/notes", (req, res) => {
        var newNote = req.body;
        // create new id, make it 1 more than last id in array
        newNote.id = (parsedData.length) + 1;
        // push newNote to array parseData
        parsedData.push(newNote);
        // update file
        fs.writeFileSync(dbData, JSON.stringify(parsedData));
        res.json(parsedData)
    });
    // DELETE "/api/notes"
    route.delete("/api/notes/:id", function (req, res) {
        let dlNote = req.params.id;
        parsedData = parsedData.filter(newValue => {
            return newValue.id != dlNote;
        });
        fs.writeFileSync(dbData, JSON.stringify(parsedData));
        res.json(parsedData);
    });
};

