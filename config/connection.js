// MySQL CONNECTION SET UP 
const mysql = require("mysql"); // DEPENDENCIES 

const connection = mysql.createConnection({
    host:"localhost",
    port: 3306,
    user:"root", 
    password: "root",
    database: "burgers_db"
});

// CONNECTION CODE 
connection.connect (function (err) {
    if (err) {
        console.error("error connecting", + err.stack);
        return;
    }
    console.log("You are connected on" connection.threadId)
});

