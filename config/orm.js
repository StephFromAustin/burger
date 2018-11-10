// DEPENDENCIES 
const connection = require("../config/connection.js");

// ORM CODE => = function
    // selectALL = SELECTS ALL DATA FROM TABLE 
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
    // insertOne = INSERT NEW ITEM INTO TABLE 
    insertOne: (table, columnName, values, cb) => {
        let queryString = 'INSERT INTO' + table;
        queryString += ' (' +columnName + ') ';
        queryString += 'VALUES ( '; 
        queryString +=  ') '
        console.log(queryString);
        connection.query(queryString, values, (err, result) => {
            if (err) {
                throw err;
            }
            console.log(values)
            cb(result);
        });
    },
    
}