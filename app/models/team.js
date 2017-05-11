const mongoose = require('mongoose')
const Schema = mongoose.Schema

const team = new Schema({
    members: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }],
    grades: {
        boulder: [String],
        rope: [String]
    },
    gyms: [{
        type: Schema.Types.ObjectId,
        ref: 'gym'
    }],
    colors: [{
        name: String,
        color: String,
        _id: false
    }],
    tags: [String]

})

module.exports = mongoose.model('team', team)
