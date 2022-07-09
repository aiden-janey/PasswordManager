const express = require('express');
const { ObjectId } = require('mongodb');
let router = express.Router();

let { User } = require('../models/user.js');

//Retrieve Data
router.get('/', (req, res)=>{
    User.find((err, docs)=>{
        if(!err){ 
            res.send(docs);
        }else{
            console.log(`Error in Retrieving Users: ${JSON.stringify(err, undefined, 2)}`);
        }
    });
});

//Submits Data
router.post('/', (req, res)=>{
    let u = new User({
        username: req.body['username'],
        password: req.body['password'],
        passwordList: req.body['passwordList']
    });
    u.save((err, doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            console.log(`Error in User Save: ${JSON.stringify(err, undefined, 2)}`);
        }
    });
});

//Update Data
router.put('/:id', (req, res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No Record w/ Given ID: ${req.params.id}`);

    let u = {
        username: req.body['username'],
        password: req.body['password'],
        passwordList: req.body['passwordList']
    };

    User.findByIdAndUpdate(req.params.id, {$set: u}, {new: true}, (err, doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            console.log(`Error in User Update: ${JSON.stringify(err, undefined, 2)}`);
        }
    });
});

//Delete Data
router.delete('/:id', (req, res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No Record w/ Given Id: ${req.params.id}`);

    User.findByIdAndRemove(req.params.id, (err, doc) =>{
        if(!err){
            res.send(doc);
        }else{ 
            console.log('Error in User Delete: ' + JSON.stringify(err, undefined, 2)); 
        }
    });
});


module.exports = router;