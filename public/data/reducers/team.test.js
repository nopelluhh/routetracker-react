import team from './team'

describe('team reducer', () => {
    it('should return initial state', () => {
        const initialState = {
            colors: [],
            tags: [],
            grades: {
                boulder: [],
                rope: []
            }
        }
        expect(team(undefined, {}))
            .toMatchObject(initialState)
    })

    it('should return teams', () => {
        const action = {
            type: 'GET_TEAM'
        }
        expect(team('teams', action))
            .toEqual('teams')
    })

    it('should accept team and transform', () => {
        const toReceive = {
            'tags': ['Techy'],
            'colors': [
                { 'name': 'red', 'color': '#fe2e2e' }
            ],
            'grades': {
                'rope': ['5.6'],
                'boulder': ['V0']
            }
        }

        const transformed = {
            'tags': [{ _id: 'Techy', value: 'Techy' }],
            'colors': [
                { _id: 'red', value: 'red', color: '#fe2e2e' }
            ],
            'grades': {
                'rope': [{ _id: 0, value: '5.6' }],
                'boulder': [{ _id: 0, value: 'V0' }]
            }
        }

        const action = {
            type: 'RECEIVE_TEAM',
            payload: toReceive
        }
        expect(team(undefined, action))
            .toMatchObject(transformed)
    })
})
