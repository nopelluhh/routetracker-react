import React, { Component } from 'react'
import PT from 'prop-types'
import { connect } from 'react-redux'

import { Tabs, Tab } from 'react-bootstrap'
import { LoadBar, RtCard, LoadContainer } from 'components/common'
import BasicInfo from './components/basicInfo'
import TeamInfo from './components/teamInfo'

import { getUser } from 'data/actions/user'

class Account extends Component {
    state = {
        loaded: false,
        pending: false
    }

    static propTypes = {
        getUser: PT.func,
        user: PT.object
    }

    componentDidMount() {
        this.props.getUser()
            .then(() => {
                this.setState({
                    loaded: true
                })
            })
    }

    render() {
        return (
            <LoadContainer loaded={ this.state.loaded }>
              <LoadBar/>
              <RtCard title="Your Account">
                <Tabs id="account-tabs" animation={false} className="nav-justified">
                  <Tab title="Basic Info" eventKey={1}>
                    <BasicInfo user={this.props.user}/>
                  </Tab>
                  <Tab title="Team Info" eventKey={2}>
                      <TeamInfo/>
                  </Tab>
                </Tabs>
              </RtCard>
            </LoadContainer>
        )
    }

 
    values = {
        username: 'nopelluhh',
        email: 'napeller@gmail.com',
        nick: 'NP'
    }

    getCurrentState = (data) => {
        this.data = data
    }
}

function mapState(state) {
    return {
        user: state.user
    }
}

function mapDispatch(dispatch) {
    return {
        getUser: () => dispatch(getUser())
    }
}

export default connect(mapState, mapDispatch)(Account)