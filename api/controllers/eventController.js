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
    //       Check image resolution

    const event = await Event.create({
        user: req.user.id,
        title: req.body.eventData.title,
        date: req.body.eventData.date,
        time: req.body.eventData.time,
        description: req.body.eventData.description,
        image: req.body.imageUrl
    })

    res.status(201).json(event);
});

module.exports = {
    setEvent,
}