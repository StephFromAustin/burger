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

router.put('/api/burgers/:id', (req, res) => {
    const condition = 'id =' + req.params.id
    console.log('condition', condition);
    burger.update(condition, (result) => {
        if (result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
})

// EXPORT ROUTER 
module.exports = router;