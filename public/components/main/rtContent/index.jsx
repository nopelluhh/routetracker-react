import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import GymList from 'components/gymList'
import GymOverview from 'components/gymOverview'

import RtWizardContainer from 'components/rtWizard'

class RtContent extends Component {
    render() {
        return (
                <div className="rt-content">
                    <Route exact path='/' component={GymList}/>
                    <Route path='/gyms/:name' component={GymOverview}/>
                    <Route path='/add' component={RtWizardContainer}/>
                </div>
        )
    }
}

export default RtContent
