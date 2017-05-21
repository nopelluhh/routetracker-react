import route from './route'
import { fromJS, Map } from 'immutable'

describe('route reducer', () => {
    it('should return initial state', () => {
        expect(route(undefined, {}))
            .toEqual(fromJS({}))
    })

    it('should accept routes', () => {
        const toReceive = [{
            _id: '1',
            grade: 1
        }, {
            _id: '2',
            grade: 2
        }]
        const action = {
            type: 'RECEIVE_ROUTES',
            payload: toReceive
        }
        const converted = {
            1: {
                _id: '1',
                grade: 1
            },
            2: {
                _id: '2',
                grade: 2
            }
        }
        expect(route(undefined, action).toObject())
            .toEqual(converted)
    })

    it('should remove routes from an array of ids', () => {
        const routes = [{ _id: '1', grade: 1 }, { _id: '2', grade: 2 }, { _id: '3', grade: 3 }]

        const state = new Map(routes.map(route => [route._id, route]))

        const action = {
            type: 'REMOVE_ROUTES',
            payload: ['1', '3']
        }

        expect(route(state, action).toArray())
            .toEqual([{
                _id: '2',
                grade: 2
            }])

    })

    it('should update a route', () => {
        const initial = fromJS({
            1: {
                _id: '1',
                grade: 1
            },
            2: {
                _id: '2',
                grade: 2
            }
        })

        const action = {
            type: 'UPDATE_ROUTE',
            payload: {
                _id: '1',
                grade: 3
            }
        }

        expect(route(initial, action).toObject())
            .toHaveProperty('1.grade', 3)

    })
})
