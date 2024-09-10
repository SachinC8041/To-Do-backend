const todo = require('../models/todo');
const createtodo = async (req, res) => {
    try {
        const { title, description } = req.body;
        const response = await todo.create({ title, description });
        console.log('complete till here')
        res.status(200).json({
            data: response,
            message: "Entry created successfully"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};
module.exports = createtodo;



