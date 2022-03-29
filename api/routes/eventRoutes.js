const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware')
const parser = require("../middleware/cloudinary.config");
const { 
    setEvent,
} = require('../controllers/eventController');

router.route('/create').post([parser.single("image"), protect], setEvent);

module.exports = router;