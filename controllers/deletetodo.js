const todo = require('../models/todo');

const deletetodo = async(req,res)=>{
    try{
        const id = req.params.id;
        const response = await todo.findByIdAndDelete(id);
        if (!response) {
            return res.status(404).json({ message: "Todo not found" });
        }

        res.status(200).json({
            data: response,
            message: "Data deletion process is successful"
        });
        console.log("Data deletion process is successful");

    } catch (error) {
        res.status(500).json({ message: "Data deletion process is not successful", error: error.message });
        console.log("Error occurred", error);
    }
};
module.exports = deletetodo;