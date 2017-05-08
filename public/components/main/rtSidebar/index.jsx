import React from 'react'
import MenuItem from './menuItem'
import {BrowserRouter as Router} from 'react-router-dom'

const menu = [
    {
        name: 'Bouldering',
        to: 'gyms',
        icon: 'glyphicon-sunglasses'
    }, {
        name: 'Sport',
        to: 'bouldering',
        icon: 'glyphicon-fire'
    }, {
        name: 'Toprope',
        to: 'bouldering',
        icon: 'glyphicon-baby-formula'
    }
]

const RtSidebar = () => (
    <div className="rt-sidebar p10">
        <Router>
            <ul className="list-unstyled">
                {menu.map(item => (<MenuItem key={item.name} item={item}/>))}
            </ul>
        </Router>
    </div>
)

export default RtSidebar
