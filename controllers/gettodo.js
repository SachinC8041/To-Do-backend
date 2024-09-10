const todo = require('../models/todo');

const gettodo = async (req,res)=>{
    try{
        const response = await todo.find();
        console.log("data fetched successfully");
        res.status(200).json(response);
    }catch(error){
        console.log("error in fetching data");
        res.status(500).json(error);
    }
};


 const gettodobyId = async (req,res)=>{
    try{
        const taskid = req.params.id;
        const response = await todo.findById(taskid);
        if (response){
            res.status(200).json(response);
            console.log("data fetched successfully");
        }
        else{
            console.log("error in fetching data");
            res.status(500).json(error);
        }
    }catch(error){
        console.log("error in fetching data");
        res.status(500).json(error);
    }
};


module.exports = {
    gettodo,
    gettodobyId
};