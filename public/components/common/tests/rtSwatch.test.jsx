import { RtSwatch } from '../RtSwatch'

import React from 'react'
import renderer from 'react-test-renderer'

describe('rtSwatch tests', () => {
	it('should adjust style based on props', () => {
		const component = renderer.create(
            <RtSwatch color={'black'} colors={[{value: 'white', color: '#FFF'}, {value: 'black', color: '#000'}]}> Facebook </RtSwatch>
        )

		let tree = component.toJSON()
		expect(tree).toMatchSnapshot()
	})
})
