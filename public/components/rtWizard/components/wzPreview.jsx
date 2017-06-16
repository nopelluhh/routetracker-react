import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {FlexRow, RtSwatch} from 'components/common'
import { connect } from 'react-redux'
import { postRoute } from 'data/actions/route'

import {sleep, renderIf} from 'rtutil'


class WzPreview extends Component {
    state = {}

    render() {
        this.transformedRoute = transformRoute(this.props.route)
        if (this.transformedRoute) {
            return (
                <div>
                    {this.transformedRoute? (
                  <ul className="wz-list p10">
                    <li className="wz-list__item">
                      Type: {this.props.route.type}
                    </li>
                    <li className="wz-list__item">
                      Color: 
                      <RtSwatch color={ this.props.route.color || false } />
                    </li>
                    <li className="wz-list__item">
                      Grade: {this.props.route.grade.value}
                    </li>
                    <li className="wz-list__item">
                      Gym: {this.props.route.gym.name}
                    </li>
                    <li className="wz-list__item">
                      Wall: {this.props.route.location}
                    </li>
                    <li className="wz-list__item">
                      Tags: {this.props.route.tags.join(', ')}
                    </li>

                  </ul>
                  ) : null}
                  <FlexRow>
                    <button className="btn btn-outline-secondary" onClick={this.edit}>Edit</button>
                    <button className={'btn btn-outline-primary' + renderIf(this.state.pending)(' btn-outline-pending')} onClick={this.postRoute}>Add Route</button>
                  </FlexRow>
                </div>
            )
        }
        return null
    }

    postRoute = () => {
        this.setState({pending: true})
        this.props.postRoute(this.transformedRoute)
            .then(sleep(1000))
            .then(() => {
                this.props.reset()
                this.setState({
                    added: true,
                    pending: false
                })
            })
    }

    edit = () => {
        this.props.move(-1)
    }
}

WzPreview.propTypes = {
    route: PropTypes.object,
    grades: PropTypes.object,
    reset: PropTypes.func,
    move: PropTypes.func,
    postRoute: PropTypes.func
}

function transformRoute(obj) {
    if (obj.gym && obj.grade && obj.color && obj.tags && obj.location)
        return {
            type: obj.type,
            color: obj.color.value,
            grade: obj.grade._id,
            gym: obj.gym._id,
            wall: obj.location,
            tags: obj.tags.join(', '),
            set_on: Date.now()
        }
    return false
}

function mapState(state) {
    return {
        route: state.route,
        grades: state.team.grades
    }
}

function mapDispatch(dispatch) {
    return {
        postRoute: (route) => dispatch(postRoute(route))
    }
}

export default connect(mapState, mapDispatch)(WzPreview)