const express = require('express');
const router = express.Router(); 

const createtodo = require('../controllers/createtodo');
const { gettodo, gettodobyId } = require('../controllers/gettodo');
const updatetodo = require('../controllers/updatetodo');
const deletetodo = require('../controllers/deletetodo');

// Routes for different operations
router.post('/createtodo', createtodo);
router.get('/gettodo', gettodo);
router.get('/gettodobyId/:id', gettodobyId); // Corrected to use gettodobyId
router.put('/updatetodo/:id', updatetodo); // Corrected route with dynamic :id
router.delete('/deletetodobyid/:id',deletetodo);



module.exports = router;
