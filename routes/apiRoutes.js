const fs = require("fs");
const router = require("express").Router();
const db = require("../db/db.json")
const { uuid } = require("uuidv4");

router.get("/notes", (req, res) => {

    res.json(db);
    
  });
  
  router.post("/notes", (req, res) => {
    // Get the data from the request body
    // With the req body we are deconstructing our object that we recieve and entering it into a new object named "newNote"
    const { title, text } = req.body;
    const newNote = {
        title,
        text,
        //The title and text will be the same information as recieved in the req.body 
        //but since we added a new key and value the object now has a new property "id" which is set to the uuid()
        id: uuid()
    }
    console.log(newNote, "<----- After a post request This shows the value of the newNote variable aka the value of req.body ")
    // Generate a unique ID for the new note
  
  
    // Add the new note to the array
    db.push(newNote);
  
    // Save the updated array to the db.json file
    fs.writeFileSync("db/db.json", JSON.stringify(db));
     
    
    res.json(newNote);
  });

  module.exports = router;