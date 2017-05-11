import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RtSwatch from 'components/common/rtSwatch'
import { connect } from 'react-redux'
import { postRoute } from 'data/actions/route'
import { Button, ButtonToolbar } from 'react-bootstrap'


class WzPreview extends Component {
    render() {
        this.transformedRoute = transformRoute(this.props.route)
        if (this.transformedRoute) {
            return (
                <div>
                    {this.transformedRoute? (
                  <ul className="wz_list p10">
                    <li className="wz_list__item">
                      Type: {this.props.route.type}
                    </li>
                    <li className="wz_list__item">
                      Color: 
                      <RtSwatch color={ this.props.route.color || false } />
                    </li>
                    <li className="wz_list__item">
                      Grade: {this.props.route.grade.value}
                    </li>
                    <li className="wz_list__item">
                      Gym: {this.props.route.gym.name}
                    </li>
                    <li className="wz_list__item">
                      Wall: {this.props.route.location}
                    </li>
                    <li className="wz_list__item">
                      Tags: {this.props.route.tags.join(', ')}
                    </li>

                  </ul>
                  ) : null}
                  <div className="text-center">
                    <Button bsStyle="info" onClick={this.edit}>Edit</Button>
                    <Button bsStyle="primary" onClick={this.postRoute}>Add Route</Button>
                  </div>
                </div>
            )
        }
        return null
    }

    postRoute = () => {
        this.props.postRoute(this.transformedRoute)
            .then(() => {
                this.props.reset()
                this.setState({
                    added: true
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
            tags: obj.tags.join(', ')
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