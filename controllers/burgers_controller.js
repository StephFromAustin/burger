// DEPENDENCIES 
const express = require("express");
const router = express.Router();
const burger = require('../models/burger.js');

// ROUTER GET FUNCTION 
router.get('/', function (req, res) {
    burger.all((data)=> {
        let hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});
// ROUTER POST FUNCTION 
router.post('/api/burgers', (req, res) => {
    burger.create([req.params.name], (result) => {
        res.redirect('/')
    });
});

// ROUTER PUT FUNCTION 

