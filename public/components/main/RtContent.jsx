import React from 'react'
import PropTypes from 'prop-types'

import { Route, Switch } from 'react-router-dom'

import GymList from 'components/gymList'
import GymOverview from 'components/gymOverview'
import Account from 'components/account'

import RtWizardContainer from 'components/rtWizard'

const RtContent = props => (
	<div className="rt-content">
        <Switch location={props.location}>
            <Route exact path='/' component={GymList} />
            <Route path='/gyms/:name' component={GymOverview} />
            <Route path='/add' component={RtWizardContainer} />
            <Route path='/account' component={Account} />
        </Switch>
    </div>)

RtContent.propTypes = {
	location: PropTypes.object
}

export default RtContent
