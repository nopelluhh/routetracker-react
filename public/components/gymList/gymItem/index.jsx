import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'
import RtBar from 'components/common/rtBar'

import { getRoutesByGym } from 'data/actions/route'

import π from 'util.js'

class GymItem extends Component {
    state = {
        data: undefined
    }

    componentDidMount() {
        this.props.getRoutes(this.props.gym._id)
    }

    render() {
        console.log('rendered', this.props.data)
        return (
            <div className="gym-item">
              <div className="gym-title text-brand text-uppercase text-thin">
                <Link to={ '/gyms/' + this.props.gym.url } className="link-plain">
                { this.props.gym.name }
                </Link>
              </div>
              <div className="gym-preview">
                { this.props.data
                  ? <RtBar data={ this.props.data } width={ 200 } height={ 200 } />
                  : null }
              </div>
            </div>
        )
    }
}

GymItem.propTypes = {
    gym: PropTypes.object
}

function mapState(state, ownProps) {
    let gymRoutes = state.routes.toArray().filter(route => route.gym === ownProps.gym._id)

    return {
        data: transformRoutes(gymRoutes)
    }
}

function mapDispatch(dispatch) {
    return {
        getRoutes: (id) => dispatch(getRoutesByGym(id))
    }
}

export default connect(mapState, mapDispatch)(GymItem)

function transformRoutes(routes) {
    if(!routes.length) return null
    let sorted = π.buckets(routes.map(boulder => boulder.grade), π.range(13))
    return Object.keys(sorted).map(key => sorted[key])
}