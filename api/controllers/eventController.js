const asyncHandler = require('express-async-handler');
const Event = require('../models/eventModel');
const User = require('../models/userModel');

const getEvents = asyncHandler(async (req, res) => {
    if (req.body.quantity) {
        const events = await Event.aggregate([{ $sample: { size: req.body.quantity } }])
        res.status(200).json(events)
    } else {
        const events = await Event.find()
        res.status(200).json(events)
    }
})

const setEvent = asyncHandler(async (req, res) => {

    // TODO: Check if event already exists
    // Most of the error handling is done in ".\middleware\cloudinary.config.js"

    if (!req.file) {
        res.status(400)
        throw new Error('Please add a image field');
    }
    
    const event = await Event.create({
        user: req.user.id,
        title: req.body.title,
        date: req.body.date,
        time: req.body.time,
        description: req.body.description,
        image: req.file.path
    })

    res.status(201).json(event);
});

module.exports = {
    setEvent,
    getEvents
}