const generalService = require('../services/general.service')()


module.exports = generalController

function generalController() {
    return {
        getAll,
        getOne,
        create,
        middleware,
        update
    }

    function getAll(model) {
        return function(req, res) {
            generalService.getMany(model)
                .then(docs => res.json(docs))
                .catch(err => res.json(err))
        }
    }

    function getOne(model) {
        return function(req, res) {
            const queryCondition = {
                _id: req.params.id
            }
            generalService.getOne(model, queryCondition)
                .then(docs => res.json(docs))
                .catch(err => res.json(err))
        }
    }

    function create(model) {
        return function(req, res) {
            generalService.create(model, req)
                .then(docs => res.json(docs))
                .catch(err => res.json(err))
        }
    }

    function update(model) {
        return function(req, res) {
            generalService.update(model, req)
                .then(docs => res.json(docs))
                .catch(err => res.json(err))
        }

    }

    function middleware(model) {
        const router = require('express').Router()


        const isDev = process.env.NODE_ENV === 'development'

        router.param('id', (req, res, next, id) => {
            if (isDev && id === 'current') {
                req.user = {
                    _id: '590a5b0853cee977f172b207'
                }
            }

            next()
        })
        
        router.get('/', getAll(model))
        router.get('/:id', getOne(model))
        router.post('/', create(model))
        router.put('/:id', update(model))
        return router
    }
}
