// MySQL CONNECTION SET UP 
const mysql = require("mysql"); // DEPENDENCIES 

const connection = mysql.createConnection({
    host:"localhost",
    port: 3306,
    user:"root", 
    password: "root",
    database: "burgers_db"
});

