// DEPENDENCIES 
const connection = require("../config/connection.js");

// ORM CODE => = function
const orm = {
    selectAll: (tableInput, cb) => {
    let queryString = 'SELECT * FROM' + tableInput + ';';
    connection.query(queryString, (err,result) => {
        if (err) {
            throw err;
        }
        cb (result);
    })
    },
    
}