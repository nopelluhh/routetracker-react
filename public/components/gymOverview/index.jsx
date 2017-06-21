import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Redirect } from 'react-router'
import ReactCSSTransitionReplace from 'react-css-transition-replace'

import RtBigBar from 'components/rtChart/rtBigBar'
import { LoadContainer, LoadBar, RtCard, TabSwitcher } from 'components/common'
import {Row, Col} from 'reactstrap'

import StatsCard from './components/StatsCard'
import RouteList from './components/RouteList'

import { getTeam } from 'data/actions/team'
import { getRoutesByGym, putRoute, removeRoutes } from 'data/actions/route'

import pi from 'rtutil'

class GymOverview extends Component {
	state = {
		loaded: false,
		active: 'rope'
	}

	defaultProps = {
		types: []
	}

	static propTypes = {
		name: PropTypes.string,
		gym: PropTypes.object,
		match: PropTypes.object,
		team: PropTypes.object,
		routes: PropTypes.array,
		getTeam: PropTypes.func,
		getRoutes: PropTypes.func,
		updateRoute: PropTypes.func,
		removeRoutes: PropTypes.func
	}

	componentDidMount() {
		this.getDataForGym(this.props.match.params.name)
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.gym && nextProps.gym && this.props.gym.name !== nextProps.gym.name) {
			this.setState({
				loaded: false
			})
			setTimeout(() => this.getDataForGym(nextProps.gym.url), 300)
		}

		if (nextProps.routes && this.props.gym) {
			this.setState({
				count: this.updateRoutes(nextProps.routes),
			})
		}
	}

	updateRoutes = (newRoutes, type) => {
		type = type? type.toLowerCase() : this.props.gym.type[0]
		let grades = this.props.team.grades[type]
		let routes = newRoutes.filter(route => route.type === type)
		this.setState({
			routes: routes
		})
		return transformRoutes(routes, grades)
	}

	render() {
		if (this.state.error) return <Redirect to='/' />
		if (!this.props.gym) return (<RtCard style={{ minHeight: 'calc(100vh - 100px)' }}> <LoadBar/></RtCard>)
		return (
            <RtCard title={this.state.loaded? this.props.gym.name : ''} key={this.props.gym.name} style={{ minHeight: 'calc(100vh - 100px)' }}>
              <LoadContainer loaded={this.state.loaded}>
                <LoadBar/>
                <section>
                  <Row className="align-items-stretch">
                    <Col xs="12">
                      <TabSwitcher tabs={this.props.gym.type} toggle={this.toggle} active={this.state.active} />
                    </Col>
                    <Col xs="12">
                      <hr className="seperator" />
                    </Col>
                    <Col xs="12" sm="8">
                      <RtBigBar
                                data={this.state.count}
                                width="500"
                                height="200"
                                type={this.state.active}
                                color={this.props.gym.color}></RtBigBar>
                    </Col>
                    <Col xs="12" sm="4" className="col-np d-flex">
                      <StatsCard data={this.state.routes} />
                    </Col>
                  </Row>
                  <hr className="seperator" />
                  <Row>
                    <Col>
                      <ReactCSSTransitionReplace transitionName="load_container" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
                        <RouteList
                                   key={this.state.active}
                                   routes={this.state.routes}
                                   updateRoute={this.props.updateRoute}
                                   removeRoutes={this.props.removeRoutes}
                                   team={this.props.team}
                                   walls={this.props.gym.walls[this.state.active]} />
                      </ReactCSSTransitionReplace>
                    </Col>
                  </Row>
                </section>
              </LoadContainer>
            </RtCard>

		)
	}

	toggle = key => {
		if (this.state.active === key) return
		let routes = this.updateRoutes(this.props.routes, key)
		this.setState({
			active: key,
			count: routes
		})
	}

	getDataForGym(name) {
		this.props.getTeam()
            .then(this.onTeam(name))
            .then(this.setLoaded)
            .catch(this.setError)
	}

	onTeam = name => team => {
		let currentGym = team.gyms.filter(gym => name === gym.url)[0]
		if (!currentGym) {
			this.setState({
				error: true
			})
		} else {
			return this.props.getRoutes(currentGym._id)
		}
	}

	setLoaded = () => {
		this.setState({loaded: true})
	}

	setError = () => {
		this.setState({error: true})
	}
}

function mapState(state, ownProps) {
	let gym = state.gyms.filter(gym => gym.url === ownProps.match.params.name)[0]
	let routes = state.routes.filter(route => route.gym === gym._id)
	let arr = routes.toArray()
	arr.forEach((route, ind) => route.ind = ind)
	return {
		gym: gym,
		routes: arr,
		team: state.team
	}
}

function mapDispatch(dispatch) {
	return {
		getTeam: () => dispatch(getTeam()),
		getRoutes: id => dispatch(getRoutesByGym(id)),
		updateRoute: route => dispatch(putRoute(route)),
		removeRoutes: arr => dispatch(removeRoutes(arr))
	}
}

export default connect(mapState, mapDispatch)(GymOverview)

function transformRoutes(routes, grades) {
	if (!grades || !routes) return []
	let sorted = pi.buckets(routes.map(route => route.grade), pi.range(grades.length))
	return Object.keys(sorted).map(key => ({
			grade: grades[key] && grades[key].value,
			count: sorted[key]
		}))
}