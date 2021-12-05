
//defining the user Schema
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Valid Name"]
    },
    password: {
        type: String,
        required: [true, "Please Enter Valid Password"]
    },
    email: {
        type: String,
        required: [true, "Please Enter Valid Email"]
    },
    hostelCode:
    {
        type: Number,
        required: [true, "Please Enter Valid Hostel Code"]
    },

    tokens:
        [
            {
                token:
                {
                    type: String,
                }
            }
        ]
    ,

    date:
    {
        type: String,
        required: [true, " Please Insert the Date  "]
    }

})

//generating token
userSchema.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({ _id: this._id }, process.env.SECRETKEY)
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    } catch (err) {
        console.log(err);
    }
}

//collections definition and we are trying to refer the model of the DB through this
const User = mongoose.model('User', userSchema);

module.exports = User;