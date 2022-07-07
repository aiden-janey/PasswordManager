const express = require('express');
const { ObjectId } = require('mongodb');
let router = express.Router();

let { User } = require('../models/user');

router.get('/', (req, res)=>{
    User.find((err, docs)=>{
        if(!err){ res.send(docs);}
        else{
            console.log(`Error in Retrieving Users: ${JSON.stringify(err, undefined, 2)}`);
        }
    });
});

router.post('/', (req, res)=>{
    let u = new User({
        username: req.body.username,
        password: req.body.password,
        passwordList: req.body.passwordList
    });
    u.save((err, doc)=>{
        if(!err){
            res.send(doc);
            //the properties in the req.body aren't present in doc
        }
        else{
            console.log(`Error in User Save: ${JSON.stringify(err, undefined, 2)}`);
        }
    });
});


module.exports = router;