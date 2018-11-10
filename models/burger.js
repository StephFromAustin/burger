// IMPORT THE ORM TO CREATE FUCNTIONS THAT WILL INTERACT WITH THE DB
const orm = require('../config/orm.js') // DEPENDENCIES

// CONSTRUCTOR THAT WILL CALL ORM FUNCTIONS USING BURGER SPECIFIC INPUT FROM THE ORM
let burger = {
    all: (cb) => {
        orm.selectAll("burgers", (res) => {
            cb(res);          
        });
    },
    create: (values, cb) => {
        orm.insertOne("burgers", condition, (res) => {
            cb(res);
        });
    },
    update: (condition, cb) => {
        orm.updateOne("burgers", condition, (res) => {
            cb(res);
        });
    }
}

// EXPORT ROUTER 
module.exports = burger;