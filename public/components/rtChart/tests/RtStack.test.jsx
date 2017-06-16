import RtStacked from '../RtStacked'

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
            <RtStacked data={data}></RtStacked>
        )

        let tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})
