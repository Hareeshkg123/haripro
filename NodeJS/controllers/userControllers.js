const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { User } = require('../models/user');

router.get('/',(req,res) => {
    User.find((err,docs) => {
        if(!err) {res.send(docs); }
        else{ console.log('Error:' + JSON.stringify(err,undefined,2));}
    });
});

router.get('/:id',(req,res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record found with given id: ${req.params.id}' );
    User.findById(req.params.id, (err,doc) => {
        if(!err) {res.send(doc);}
        else{ console.log('Error :' + JSON.stringify(err,undefined,2));}
    });
});

router.post('/',(req,res) => {
    var usr = new User({
        name : req.body.name,
        place: req.body.place,
        age: req.body.age,
        email: req.body.email
    });
    usr.save((err, doc) => {
        if(!err) { res.send(doc); }
        else { console.log('Error in saving user details:' +JSON.stringify(err, undefined,2)); }
    });
});
router.put('/:id',(req,res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record found with given id: ${req.params.id}');
    
    var usr ={
        name:req.body.name,
        place:req.body.place,
        age:req.body.age,
        email:req.body.email,
    };
    User.findByIdAndUpdate(req.params.id,{$set: usr },{new: true},(err,doc)=>{
        if (!err) {res.send(doc);}
        else{console.log('Error Updating User:' + JSON.stringify(err,undefined, 2));}
    });
});

router.delete('/:id',(req,res) =>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record found with the given id : ${req.params.id}');
    
    User.findByIdAndRemove(req.params.id,(err,doc) => {
        if(!err) {res.send(doc); }
        else { console.log('Error Deleting User :' +JSON.stringify(err,undefined,2));}
    });
});

module.exports=router;