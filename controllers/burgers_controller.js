// DEPENDENCIES testing something!
const express = require("express");
const router = express.Router();
const burger = require('../models/burger.js');

// ROUTER GET FUNCTION 
router.get('/burger', function (req, res) {
    burger.all((data)=> {
        let hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

// ROUTER POST FUNCTION 
router.post('/api/burger', (req, res) => {
    burger.create([req.params.name], (result) => {
        res.redirect('/burger')
    });
});

// ROUTER PUT FUNCTION 

router.put('/api/burger/:id', (req, res) => {
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