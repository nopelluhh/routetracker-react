import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import GymList from 'components/gymList'
import GymOverview from 'components/gymOverview'
import Account from 'components/account'

import RtWizardContainer from 'components/rtWizard'

const routes = (
<div className="rt-content">
  <Route exact path='/' component={ GymList } />
  <Route path='/gyms/:name' component={ GymOverview } />
  <Route path='/add' component={ RtWizardContainer } />
  <Route path='/account' component={ Account } />
</div>)

class RtContent extends Component {
    render() {
        return routes
    }
}

export default RtContent
