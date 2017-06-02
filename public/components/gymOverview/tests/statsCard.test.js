import StatsCard from '../components/statsCard'

import React from 'react'
import renderer from 'react-test-renderer'

describe('statsCard tests', () => {
    const testData = [
        {setOn: new Date()}
    ]

    it('should adjust style based on props', () => {

        const component = renderer.create(
            <StatsCard data={testData}> Facebook </StatsCard>
        )

        let tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})
