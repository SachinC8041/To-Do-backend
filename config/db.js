const mongoose = require('mongoose');
require("dotenv").config();

const mongoURL_Local = process.env.dburl;
mongoose.connect(mongoURL_Local);

const db = mongoose.connection; 

//define the event listeners 
db.on('connected',()=>{
    console.log('connected to mongodb server')
})

db.on('disconncted',()=>{
    console.log('connection to mongodb is disconnected')
})

db.on('error',()=>{
    console.log('error occured');
})