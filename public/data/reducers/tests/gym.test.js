import gym from '../gym'

describe('gym reducer', () => {
	it('should return initial state', () => {
		expect(gym(undefined, {}))
			.toEqual([])
	})

	it('should return gyms', () => {
		const action = {
			type: 'GET_GYMS'
		}

		expect(gym('gyms', action))
			.toEqual('gyms')
	})

	it('should accept gyms and transform', () => {
		const toReceive = [{
			name: 'name'
		}]
		const action = {
			type: 'RECEIVE_GYMS',
			payload: toReceive
		}

		expect(gym(undefined, action))
			.toHaveProperty('0.value', 'name')
	})
})