const todo = require('../models/todo');

const updatetodo = async(req,res)=>{
    try{
        const id = req.params.id;
        const updatedata = req.body;
        const response = await todo.findByIdAndUpdate(id,updatedata,{
            new:true,
            runValidators:true
        });
        if (!response) {
            return res.status(404).json({ message: "Todo not found" });
        }

        res.status(200).json({
            data: response,
            message: "Data updation process is successful"
        });
        console.log("Data updation process is successful");

    } catch (error) {
        res.status(500).json({ message: "Data updation is not successful", error: error.message });
        console.log("Error occurred", error);
    }
};
module.exports = updatetodo;

