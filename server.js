// DEPENDENCIES 
const express = require("express"); // express 
const PORT = process.env.PORT || 8080; // port
const app = express();

// STATIC CONTENT FROM THE PUBLIC DIRECTORY 
app.use(express.static("public"));


