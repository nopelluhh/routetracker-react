import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import GymList from 'components/gymList'
import GymOverview from 'components/gymOverview'
import Account from 'components/account'

import RtWizardContainer from 'components/rtWizard'

class RtContent extends Component {
    render() {
        return (
            <div className="rt-content">
              <Switch location={this.props.location}>
                <Route exact path='/' component={GymList} />
                <Route path='/gyms/:name' component={GymOverview} />
                <Route path='/add' component={RtWizardContainer} />
                <Route path='/account' component={Account} />
              </Switch>
            </div>)
    }
}

export default RtContent
