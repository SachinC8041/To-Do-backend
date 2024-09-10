const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
    title:{
        type : String,
        required : true,
        maxLength: 1000
    },
    description:{
        type:String,
        required: true,
        maxLength: 1000
    },
    createdAt:{
        type:String,
        required: true,
        default: Date.now()
    },
    updatedat:{
        type:String,
        required:true,
        default:Date.now()
    }
});

const todo = mongoose.model('todo',todoSchema);

module.exports = todo;
