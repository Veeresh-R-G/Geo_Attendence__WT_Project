const mongoose = require('mongoose');

//DataBase Connection Link
const DB_Connection = 'mongodb://localhost:27017/projectDB'
mongoose.connect(DB_Connection, { useNewUrlParser: true })