// MySQL CONNECTION SET UP 
const mysql = require("mysql"); //
const connection;
//DEPENDENCIES 

// CONNECTION SET UP 
if (process.env.JWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL)
;} else {
    connection = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'Steph2845',
        database:'burgers_db',
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