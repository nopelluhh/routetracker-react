import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'


import { Redirect } from 'react-router'
import RtBigBar from 'components/rtChart/rtBigBar'
import { LoadContainer, LoadBar, RtCard, RtPane } from 'components/common'
import StatsCard from './components/statsCard'
import RouteList from './components/routeList'
import TabSwitcher from './components/tabSwitcher'
import ReactCSSTransitionReplace from 'react-css-transition-replace'

import { getTeam } from 'data/actions/team'
import { getRoutesByGym, putRoute, removeRoutes } from 'data/actions/route'

import pi from 'rtutil'

class GymOverview extends Component {
    state = {
        loaded: false,
        active: 0
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
        getRoutes: PropTypes.func
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

        if (nextProps.routes) {
            this.setState({
                count: this.updateRoutes(nextProps.routes),
            })
        }
    }

    updateRoutes = (newRoutes, key) => {
        key = key === undefined ? this.state.active : key
        let type = this.props.gym && this.props.gym.type[key] 
        let grades = this.props.team.grades[type]
        let routes = newRoutes.filter(route => route.type === type)
        this.setState({
            routes: routes
        })
        return transformRoutes(routes, grades)
    }

    render() {
        if (this.state.error) return <Redirect to='/' />
        return (
            <LoadContainer loaded={ this.state.loaded }>
              <LoadBar/>
              <RtCard title={ this.props.gym && this.props.gym.name || '' } key={ this.props.gym && this.props.gym.name }>
                <div className="row align-items-stretch">
                  <div className="col-12">
                    <TabSwitcher tabs={ this.props.gym && this.props.gym.type } toggle={ this.toggle } active={ this.state.active } />
                  </div>
                  <div className="col-12">
                    <hr className="seperator" />
                  </div>
                  <div className="col-xs-12 col-sm-8">
                    <RtBigBar
                              data={ this.state.count }
                              width="500"
                              height="200"
                              type={ this.state.active }></RtBigBar>
                  </div>
                  <div className="col-sm-4 col-xs-12 col-np d-flex">
                    <StatsCard data={ this.state.routes } />
                  </div>
                </div>
                <hr className="seperator" />
                <div className="row">
                  <div className="col-xs-12">
                    <ReactCSSTransitionReplace transitionName="load_container" transitionEnterTimeout={ 500 } transitionLeaveTimeout={ 500 }>
                      <RouteList key={this.state.active}
                                 routes={ this.state.routes }
                                 updateRoute={ this.props.updateRoute }
                                 removeRoutes={ this.props.removeRoutes }
                                 team={ this.props.team }
                                 walls={ this.props.gym && this.props.gym.walls } />
                    </ReactCSSTransitionReplace>
                  </div>
                </div>
              </RtCard>
            </LoadContainer>

        )
    }

    toggle = (key) => {
        if (this.state.active === key) return
        let routes = this.updateRoutes(this.props.routes, key)
        this.setState({
            active: key,
            count: routes
        })
    }

    getDataForGym(name) {
        this.props.getTeam()
            .then(team => {
                let currentGym = team.gyms.filter(gym => name === gym.url)[0]
                if (!currentGym) {
                    this.setState({
                        error: true
                    })
                } else {
                    return this.props.getRoutes(currentGym._id)
                }

            })
            .then(() => {
                this.setState({
                    loaded: true
                })
            })
            .catch((err) => {
                console.log(err)
                this.setState({
                    error: true
                })
            })
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
        getRoutes: (id) => dispatch(getRoutesByGym(id)),
        updateRoute: (route) => dispatch(putRoute(route)),
        removeRoutes: (arr) => dispatch(removeRoutes(arr))
    }
}

export default connect(mapState, mapDispatch)(GymOverview)

function transformRoutes(routes, grades) {
    if (!grades || !routes) return []
    let sorted = pi.buckets(routes.map(route => route.grade), pi.range(grades.length))
    return Object.keys(sorted).map(key => {
        return {
            grade: grades[key] && grades[key].value,
            count: sorted[key]
        }
    })
}