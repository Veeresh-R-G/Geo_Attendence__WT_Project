const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const mongoose = require('mongoose');

require('../db/conn');
//Schema requiring

const User = require('../model/userSchema');
const { log } = require('npmlog');
router.get('/', (req, res) => {
    const obj = {
        "code": 200,
        "project": "Success"
    }
    res.json(obj);
})

router.post('/register', (req, res) => {
    console.log(req.body);
    const { username, password, email, code } = req.body;
    if (!username || !password || !email || !code) {
        res.status(422).json({ "error": "Please Fill the Empty Fields \n" });
        // res.sendStatus(422);
    }
    bcrypt.hash(password, Number(10), function (err, hash) {
        if (err) {
            console.log(err);
        }
        else {
            //new document / record 
            console.log("Im in bcrypt here ");
            const newUser = new User({
                name: username,
                password: hash,
                email: email,
                hostelCode: code,
            })

            console.log("Im saving the document here");
            //saving the document in the projectDB
            newUser.save(function (err) {
                if (err) {
                    console.log(err);
                }
                else {
                    res.status(200).json({ "success": "Successfully Logged In \n" });
                    console.log("----------------------------------Saved Doc Here ! ");
                }
            })
        }
    })
});


router.post('/login', function (req, res) {
    let name = req.body.username
    let password = req.body.password
    console.log("Hello from the server the details received are : ", req.body);
    //find the record matching the name
    if (!name || !password) {
        res.json({ "Error": "Enter Credentials" });
        // res.redirect('/login');
    }
    else {
        const success_obj =
        {
            "code": 200,
            "project": "Success"
        }
        User.findOne({ name: name }, (err, doc) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log("Found The Document ! ! ! ! ");
                console.log(`The Document is ${doc}`)
                //password stored in the database
                let dbPassword = doc.password;

                bcrypt.compare(password, dbPassword, function (err, result) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log(result);
                        res.send("success");
                        //We have to redirect to /student page
                    }
                })
            }
        })
    }
})

module.exports = router;