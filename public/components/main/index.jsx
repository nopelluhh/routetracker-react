import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getTeam } from 'data/actions/team'
import { getGyms } from 'data/actions/gym'

import RtHeader from './RtHeader'
import RtContent from './RtContent'

class Main extends Component {
	componentDidMount() { 
		this.props.getTeam()
	}

	render() {
		return (
              <div>
                <RtHeader location={this.props.location}/>
                <RtContent location={this.props.location}/>
              </div>
		)
	}
}

Main.propTypes = {
	getTeam: PropTypes.func.isRequired,
	getGyms: PropTypes.func.isRequired,
	location: PropTypes.object
}

function mapState(state) {
	return {
		team: state.team,
		gyms: state.gyms,
		location: state.router.location
	}
}

function mapDispatch(dispatch) {
	return {
		getTeam: () => dispatch(getTeam()),
		getGyms: team => dispatch(getGyms(team))
	}
}

const mainContainer = connect(mapState, mapDispatch)(Main)
export default mainContainer




