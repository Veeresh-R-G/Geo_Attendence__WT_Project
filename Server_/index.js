/*
                    UE20CS204 ASSIGNMENT -- GEO lOCATION 
                    MARKS ATTENDANCE BASED ON YOUR GEOGRAPHICAL CO-ORDINATES
                    BEST USE : HOSTEL PUROSES
*/


require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const cors = require('cors');
const jwt = require('jsonwebtoken');
// const SALT_ROUNDS = 10


const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
//DataBase Connection Link
require('./db/conn');

app.use(express.json())

//link router file
app.use(require('./router/auth'))
//Schema requiring

const User = require('./model/userSchema')



/* Only Testing Purpose 

const testUser1 = new User({
    name: "test1",
    password: "test1",
    email: "test@gmail.com",
    hostelCode: "1001"
})

testUser1.save();
*/

console.log("Sucess Connection with database");


//MiddleWare

const middleWare = (req, res, next) => {
    console.log("hello this is me , the middleWare");
    next();
}
//Defining All required Routes
app.get('/', (req, res) => {
    const obj = {
        "code": 200,
        "project": "Success"
    }
    res.json(obj);
})

app.get('/about', (req, res) => {
    const obj = {
        "code": 200,
        "project": "Success",
        "Section": "About Page"
    }
    res.json(obj);
    //redirect to about page 
})
app.get('/contribute', (req, res) => {
    const obj = {
        "code": 200,
        "project": "Success",
        "Section": "Contribute Page"
    }

    res.json(obj);
    //redirect to about page 
})
app.get('/about', (req, res) => {
    const obj = {
        "code": 200,
        "project": "Success",
        "Section": "About Page"
    }

    res.json(obj);
    //redirect to about page 
})

app.get('/vision', (req, res) => {
    const obj = {
        "code": 200,
        "project": "Success",
        "Section": "Vision Page"
    }
    res.json(obj);
})

app.get('/help', () => {
    const obj = {
        "code": 200,
        "project": "Success",
        "Section": "help Page"
    }
    res.json(obj);
})

app.get('/auth', (req, res) => {
    res.send("hello");
})


app.post('/register', function (req, res) {

    console.log(req);
    const { username, password, email, code } = req.body;
    console.log(req.body);
    //Adding Date here


    //Encrypting Password;
    // if (!username || !password || !email || !code) {
    //     res.status(422).json({ "error": "Please Fill the Empty Fields \n" });
    //     // res.redirect('/register');
    // }
    // else if (User.findOne({ email: email })
    //     .then((userExists) => {
    //         if (userExists) {
    //             res.status(422).json({ "Message": "Email Already Exists" });
    //         }
    //     }));

    bcrypt.hash(password, Number(10), function (err, hash) {
        if (err) {
            console.log(err);
        }
        else {
            //new document / record 
            console.log("Im in bcrupt here ");
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
                    res.send("Successfully registered")
                }
            })
        }
    })
})


//updating the date info using patch request

// app.patch('/attendence', function (req, res) {
//     //Validate here the coordinates and then add the attendance in the db schema
//     res.send(a);

// })

app.post('/login', function (req, res) {
    let name = req.body.username
    let password = req.body.password
    //find the record matching the name
    if (!name || !password) {
        res.json({ "Error": "Enter Valid Credentials" });
        res.redirect('/login');
    }
    else {
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
                        res.send("Successfully Logged In !");
                        //We have to redirect to /student page
                    }
                })
            }
        })
    }
})

const createToken = async () => {
    const token = await jwt.sign({ _id: "61aaf3c928ee912dec1353f9" }, `eyJhbGciOiJIUzI1NiJ9.ey
    JSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJb
    lVzZSIsImV4cCI6MTYzODYwNDk5NywiaWF0IjoxNjM4NjA0OTk3fQ.s_TrHXOc5U8yR
    ZWuP80y8IamBn1mNhyLm-DxXBnDyFM`,
        {
            expiresIn: "10 seconds"
        });
    console.log(token);

    const userVerification = await jwt.verify(token, `eyJhbGciOiJIUzI1NiJ9.ey
    JSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJb
    lVzZSIsImV4cCI6MTYzODYwNDk5NywiaWF0IjoxNjM4NjA0OTk3fQ.s_TrHXOc5U8yR
    ZWuP80y8IamBn1mNhyLm-DxXBnDyFM`);
    console.log(userVerification);
}

createToken();

app.get('/rec', (req, res) => {
    const name = "test";
    User.find({ name: name }, (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(data[0])
        }
    })

})
app.listen(5000, () => {
    console.log(`Successfully Running at ${Number(5000)}`);
})
