
//defining the user Schema
const mongoose = require('mongoose');
const userSchema = {
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

    // logHistory:
    // {
    //     type: [String]
    // },

    // atten_array:
    // {
    //     type: [Number]
    // }

    //date mathe array if atten / or not atten 
    //idea : 2 arrays 
}
//collections definition and we are trying to refer the model of the DB through this
const User = mongoose.model('User', userSchema);

module.exports = User;