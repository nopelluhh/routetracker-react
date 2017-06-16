import React, { Component } from 'react'
import PT from 'prop-types'
import { connect } from 'react-redux'

import { Tab } from 'react-bootstrap'
import { LoadBar, RtCard, LoadContainer, TabSwitcher } from 'components/common'
import BasicInfo from './components/BasicInfo'
import TeamInfo from './components/TeamInfo'
import { renderIf } from 'rtutil'

import { getUser } from 'data/actions/user'

const tabs = ['Basic Info', 'Team Info']

class Account extends Component {
	state = {
		loaded: false,
		pending: false,
		active: 'Basic Info'
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
            <LoadContainer loaded={this.state.loaded}>
              <LoadBar/>
              <RtCard title="My Account">
                <TabSwitcher tabs={tabs} toggle={this.toggle} />
                {renderIf(this.state.active == 'Basic Info')(
                     <Tab title="Basic Info" eventKey={1} tabClassName="nav-link">
                       <BasicInfo user={this.props.user} />
                     </Tab>
                 )}
                {renderIf(this.state.active === 'Team Info')(
                     <Tab title="Team Info" eventKey={2} tabClassName="nav-link">
                       <TeamInfo/>
                     </Tab>
                 )}
              </RtCard>
            </LoadContainer>
		)
	}

	toggle = (ind) => {
		this.setState({
			active: ind
		})
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