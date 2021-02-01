// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
const bodyParser = require('body-parser')

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
// The Express app instance should be pointed to the project folder with .html, .css, and .js files.
app.use(express.static('website'));


// Setup Server
const port = 8000;
const server = app.listen(port,()=>{
    console.log(`running on local host: ${port}`)
});

// GET Routes set up with 2 arguments (partucular URL, callback dunction to return the endpoint)
app.get("/all", function(req,res) {
    res.send(projectData);
    console.log('Response sent');
});

// POST Routes / An entry to the project endpoint
app.post("/a;;", function(req,res) {
    newEntry = {
        date: req.body.date,
        temp: req.body.temp,
        content: req.body.content
      };
    projectData = newEntry;
    res.send(projectData);
    console.log(projectData);
});
