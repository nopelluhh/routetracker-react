import wizard from './wizard'

describe('wizard reducer', () => {
    it('should return initial state', () => {
        expect(wizard(undefined, '')).toEqual({ tags: [] })
    })

    it('should update a route', () => {
        const action = {
            type: 'UPDATE_NEW_ROUTE',
            payload: {
                field: 'grade',
                value: 'V1'
            }
        }

        expect(wizard(undefined, action)).toEqual({ grade: 'V1', tags: []})
    })

    it('should update a tag', () => {
        const action = {
            type: 'UPDATE_TAGS',
            payload: 'tag'
        }
        
        const state = {
            tags: ['tag']
        }

        expect(wizard(state, action))
            .toEqual({tags: []})
    })

    it('should reset the wizard', () => {
        const action = {
            type: 'RESET_WIZARD'
        }

        const state = {
            someState: 'whatevs',
            gym: 'gym'
        }

        expect(wizard(state, action))
            .toEqual({ gym: 'gym', tags: [] })
    })
})
