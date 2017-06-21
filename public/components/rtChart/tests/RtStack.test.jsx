import RtStack from '../RtStack'

import React from 'react'
import renderer from 'react-test-renderer'

describe('RtStacked tests', () => {

	const data = [{
		value: 15
	}, {
		value: 10
	}, {
		value: 50
	}]

	it('should adjust style based on props', () => {
		const component = renderer.create(
			<RtStack data={data}></RtStack>
		)

		let tree = component.toJSON()
		expect(tree).toMatchSnapshot()
	})
})
