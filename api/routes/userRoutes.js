const express = require('express');
const router = express.Router();
const { 
    registerUser,
    getUser,
    loginUser
} = require('../controllers/userController');

router.post('/', registerUser);

module.exports = router;