const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware')
const { 
    setEvent,
} = require('../controllers/eventController');

// router.post('/create', setEvent);
router.route('/create').post(protect, setEvent)

module.exports = router;