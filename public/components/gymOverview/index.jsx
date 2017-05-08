import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'


import { Redirect } from 'react-router'
import RtBigBar from 'components/rtChart/rtBigBar'
import LoadContainer from 'components/common/loadContainer'
import LoadBar from 'components/common/loadBar'
import StatsCard from './components/statsCard'
import RouteList from './components/routeList'

import { getTeam } from 'data/actions/team'
import { getRoutesByGym } from 'data/actions/route'

import π from 'util.js'

class GymOverview extends Component {
    state = {
        loaded: false
    }

    componentDidMount() {
        this.getDataForGym(this.props.match.params.name)
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.gym && nextProps.gym && this.props.gym.name !== nextProps.gym.name) {
            this.setState({loaded: false})
            setTimeout(() => this.getDataForGym(nextProps.gym.url), 300)
        }
    }

    render() {
        if (this.state.error) return <Redirect to='/' />
        return (
            <LoadContainer loaded={ this.state.loaded }>
              <LoadBar/>
              <section key={this.props.gym && this.props.gym.name}>
                <span className="content-title bs-1">{ this.props.gym && this.props.gym.name }</span>
                <div className="row">
                  <div className="col-xs-12 col-sm-8">
                    <RtBigBar data={ this.state.count } width="500" height="200"></RtBigBar>
                  </div>
                  <div className="col-sm-4 col-xs-12 col-np">
                    <StatsCard data={ this.state.data } />
                  </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <RouteList routes={this.state.data}/>
                    </div>
                </div>
              </section>
            </LoadContainer>
        )
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
            .then(data => {
                if (!data) return
                this.setState({
                    data: data,
                    count: transformRoutes(data),
                    loaded: true
                })
            })
    }
}

GymOverview.propTypes = {
    name: PropTypes.string,
    gym: PropTypes.object,
    getRoutes: PropTypes.func,
    getTeam: PropTypes.func
}

function mapState(state, ownProps) {
    return {
        gym: state.gyms.filter(gym => gym.url === ownProps.match.params.name)[0]
    }
}

function mapDispatch(dispatch) {
    return {
        getTeam: () => dispatch(getTeam()),
        getRoutes: (id) => dispatch(getRoutesByGym(id))
    }
}

export default connect(mapState, mapDispatch)(GymOverview)

function transformRoutes(boulders) {
    let sorted = π.buckets(boulders.map(boulder => boulder.grade), π.range(13))
    return Object.keys(sorted).map(key => {
        return {
            grade: key,
            count: sorted[key]
        }
    })
}