const { default: mongoose } = require('mongoose');

const eventSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    title: {
        type: String,
        required: [true, 'Please add a title']
    },
    date: {
        type: Date,
        required: [true, 'Please add a date']
    },
    time: {
        type: String,
        required: [true, 'Please add a time']
    },
    description: {
        type: String,
        required: [true, 'Please add a description']
    },
    // image: {
    //     name: String,
    //     desc: String,
    //     img:
    //     {
    //         data: Buffer,
    //         contentType: String
    //     },
    //     required: [true, 'Please add a image']
    // }
},
{
    timestamps: true
})

module.exports = mongoose.model('Event', eventSchema)