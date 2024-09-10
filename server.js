const express = require('express');
const app = express();
require("dotenv").config();

const db = require('./config/db');
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is successfully running on port number ${port}`);
});
app.get('/',(req,res)=>{
    res.send("Hello everyone, you are on server 3000")
})

// Body parsing middleware
app.use(express.json());

// Todo routes
const todoroutes = require('./routes/todo');
// app.use('/api', todoroutes);
app.use(todoroutes);
