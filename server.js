// DEPENDENCIES 
const express = require("express"); // express 
const PORT = process.env.PORT || 8080; // port
const app = express();

// STATIC CONTENT FROM THE PUBLIC DIRECTORY 
app.use(express.static("public"));

// SET UP JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// SET UP HANDLEBARS 
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set ("view engine", "handlebars");

// IMPORT ROUTER || ALLOW SERVER ACCESS 
const routes = require("./controllders/burgers_controller.js")
app.use(routes);

// START SERVER || LISTEN TO CLIENT REQUEST || NOTIFY IF LISTENING
app.listen(PORT, () => {
    console.log("Server is listening on: http//localhost:" + PORT);
});å