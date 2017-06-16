import SortableList from '../sortableList'

import React from 'react'
import renderer from 'react-test-renderer'




describe('SortableList tests', () => {
    const list = [{
        name: 'Noah'
    },
    {
        name: 'Greg'
    }]

    const Item = (props) => (
                <div>
                  {props.name }
                </div>
            )
        


    const options = [{
        name: 'Noah'
    }, {
        name: 'Greg'
    }, {
        name: 'Paul'
    }, {
        name: 'Smith'
    }, {
        name: 'Jeeves'
    },]


    it('should render a list', () => {
        const component = renderer.create(
            <SortableList list={ list } component={ Item } />
        )

        let tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('should render options when provided', () => {
        const component = renderer.create(
            <SortableList list={ list } options={options} component={ Item } />
        )

        let tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})
