const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-node')

const User = new Schema({
    username: {
        type: String,
        require: true
    },
    teams: [{
        type: Schema.Types.ObjectId,
        ref: 'team'        
    }],
    roles: [{
        type: String,
        enum: ['setter', 'head', 'admin']
    }],
    nickname: String,
    local: {
        fname: {
            type: String,
            require: true
        },
        lname: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        pw: {
            type: String,
            select: false,
            require: true
        }
    }
}, {
    timestamps: {
        createdAt: 'created_at'
    }
})

User.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

// checking if password is valid
User.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this._doc.pw)
}



module.exports = mongoose.model('user', User)
