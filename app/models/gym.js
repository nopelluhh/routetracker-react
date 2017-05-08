const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Gym = new Schema({
    name: {
        type: String,
        require: true
    },
    // teams: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'team'
    // }],
    url: {
        type: String,
        require: true
    },
    walls: {
        rope: [String],
        boulder: [String]
    }
})

Gym.pre('save', function(next) {
    this.url = this._doc.name.replace(/[^a-zA-Z]/g, '').toLowerCase()
    next()
})

module.exports = mongoose.model('gym', Gym)
