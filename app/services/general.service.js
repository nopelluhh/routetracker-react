const fs = require('fs')
const path = require('path')

const modelDir = fs.readdirSync(path.resolve(__dirname, '../models'))

const models = modelDir.reduce((acc, cur) => {
    cur = cur.slice(0, -3)
    acc[cur] = require('../models/' + cur)
    return acc
}, {})

module.exports = general

function general() {
    return {
        getMany,
        getOne,
        create,
        update
    }

    function getMany(model, queryCondition = {}) {
        model = models[model]
        return model.find(queryCondition)
    }

    function getOne(model, queryCondition = {}, populate = '') {
        model = models[model]
        return model.findOne(queryCondition).populate(populate)
    }

    function create(model, req) {
        model = models[model]
        let temp = new model(req.body)
        return temp.save()
    }

    function update(model, req) {
        model = models[model]
        const id = req.params.id === 'current'? req.user._id : req.params.id
        delete req.body.created_at
        delete req.body.updated_at
        return model.findOneAndUpdate({_id: id}, {$set: req.body}, {new: true})
    }
}
