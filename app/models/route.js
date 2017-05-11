const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Route = new Schema({
    name: {
        type: String
    },
    type: {
        type: String,
        enum: ['boulder', 'rope'],
        required: true
    },
    set_on: {
        type: Date
    },
    grade: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    gym: {
        type: Schema.Types.ObjectId,
        required: true
    }, 
    wall: {
        type: String,
        required: true
    },
    tags: [String],
    setter: {
        type: String
        // type: Schema.Types.ObjectId,
        // ref: 'user'
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})

module.exports = mongoose.model('route', Route)
