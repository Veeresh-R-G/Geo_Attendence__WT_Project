const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
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
    // console.log(req.body);

    /* ------  Date Requirements -----------  */

    let today = new Date();

    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + " ";
    console.log(date);



    const { username, password, email, code } = req.body;
    if (!username || !password || !email || !code) {
        res.json({ "error": "Please Fill the Empty Fields \n" });
        // res.sendStatus(422);
    }


    else {
        bcrypt.hash(password, Number(10), function (err, hash) {
            if (err) {
                console.log(err);
            }
            else {
                //new document in my user collections
                console.log("Im in bcrypt here ");

                User.findOne({ email: email }, (err, doc) => {


                    if (err) {
                        console.log(err);
                    }

                    // if there is a doc
                    if (doc) {
                        let dbDate = (doc.date);
                        let currentDateString = dbDate + date;
                        let filter = { name: doc.name };
                        let update = { date: currentDateString };

                        User.findOneAndUpdate(filter, { $set: update }, { new: true }, (err, doc) => {
                            if (err) {
                                console.log(err);
                            }
                            else {
                                console.log(doc);
                            }
                        });
                        return res.json({ Message: " User Already Exists " });
                    }

                    //if the doc is not there
                    if (doc == null) {
                        const newUser = new User({
                            name: username,
                            password: hash,
                            email: email,
                            hostelCode: code,
                            date: date
                        })

                        console.log("Im saving the document here");
                        //saving the document in the projectDB
                        newUser.save(function (err) {
                            if (err) {
                                console.log(err);
                            }
                            else {
                                return res.json({ success: "Successfully Registered \n" });
                                console.log("----------------------------------Saved Doc Here ! ");
                            }
                        })
                    }
                })
            }
        })
    }
});


router.post('/login', async (req, res) => {
    let name = req.body.username
    let password = req.body.password
    console.log("Hello from the server the details received are : ", name, password);

    const userCredentials = await User.findOne({ name: name });

    console.log(userCredentials);
    if (!name || !password) {
        return res.json({ "error": "Empty Fields ! ! ! \n" });
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

                if (doc == null) return res.status(401).json({ error: "Invalid Credentials" });
                console.log("Found The Document ! ! ! ! ");
                console.log(`The Document is ${doc}`)
                //password stored in the database
                let dbPassword = doc.password;

                bcrypt.compare(password, dbPassword, function (err, result) {

                    if (err) {
                        return res.json({ error: "Forbidden Access\n" });;
                    }

                    if (result) {
                        console.log(result);
                        // return res.json({ success: "Successfully Logged In \n" });
                        res.json(doc.name);
                    }

                    else {
                        return res.json({ error: "Invalid Credentials" });
                    }
                })
            }
        })
    }
})

module.exports = router;