// MySQL CONNECTION SET UP 
const mysql = require("mysql"); // DEPENDENCIES 

// CONNECTION SET UP 
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "pfw0ltdr46khxib3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        username: "slxvmka0x3466jqa",
        password: "Steph2845",
        port:"3306",
        user: "root",
        // password: "Steph2845",
        database: "	q44qv46dzdqhfv88"
    });
};

//CONNECTION 
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
});

// EXPORTS 
module.exports = connection;