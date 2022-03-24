const asyncHandler = require('express-async-handler');
const Event = require('../models/eventModel');
const User = require('../models/userModel');

const setEvent = asyncHandler( async (req, res) => {

    // if(!req.body.text) {
    //     res.status(400)
    //     throw new Error('Please add a text field');
    // }

    // TODO: Check if event already exists
    //       Error handling
    //       Upload image

    const event = await Event.create({
        user: req.user.id,
        title: req.body.title,
        date: req.body.date,
        time: req.body.time,
        description: req.body.description,
        image: req.body.image
    })

    res.status(200).json(event);
});

module.exports = {
    setEvent,
}