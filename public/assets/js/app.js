const express = require("express");
const fs = require("fs");
const path = require("path");
const jsonNotes = require('../../../db/db.json');
const app = express();
const PORT = process.env.PORT || 3008;
console.log(jsonNotes);
app.use(express.static("public"));    

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../../notes.html"));
});

app.get("/api/notes", (req, res) => {
  res.json(jsonNotes);
 
});

app.post("/api/notes", (req, res) => {
  // Handle POST request for /api/notes
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../index.html"));
});


app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});
