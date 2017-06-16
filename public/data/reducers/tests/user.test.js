import user from '../user'

describe('user reducer', () => {
	it('should return initial state', () => {
		expect(user(undefined, {}))
			.toEqual({})
	})

	it('should return users', () => {
		const action = {
			type: 'GET_USER'
		}
		expect(user('users', action))
			.toEqual('users')
	})

	it('should accept users', () => {
		const toReceive = {
			name: 'name'
		}
		const action = {
			type: 'RECEIVE_USER',
			payload: toReceive
		}
		expect(user(undefined, action))
			.toEqual(toReceive)
	})
})