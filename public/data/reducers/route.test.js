import route from './route'
import { fromJS } from 'immutable'

describe('route reducer', () => {
    it('should return initial state', () => {
        expect(route(undefined, {}))
            .toEqual(fromJS({}))
    })

    it('should accept routes', () => {
        const toReceive = [{ _id: '1', grade: 1 }, { _id: '2', grade: 2 }]
        const action = {
            type: 'RECEIVE_ROUTES',
            payload: toReceive
        }
        const converted = {
            1: { _id: '1', grade: 1 },
            2: { _id: '2', grade: 2 }
        }
        expect(route(undefined, action).toObject())
            .toEqual(converted)
    })

    it('should update a route', () => {
        const initial = fromJS({
            1: { _id: '1', grade: 1 },
            2: { _id: '2', grade: 2 }
        })

        const action = {
            type: 'UPDATE_ROUTE',
            payload: { _id: '1', grade: 3 }
        }

        expect(route(initial, action).toObject())
            .toHaveProperty('1.grade', 3)

    })
})
