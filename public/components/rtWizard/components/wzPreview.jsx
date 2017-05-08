import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RtSwatch from 'components/common/rtSwatch'
import { connect } from 'react-redux'
import { postRoute } from 'data/actions/route'
import { Button } from 'react-bootstrap'


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
                  <Button bsStyle="primary" block onClick={this.postRoute}>Add Route</Button>
                </div>
            )
        }
        return null
    }

    postRoute = () => {
        this.props.postRoute(this.transformedRoute)
    }
}

WzPreview.propTypes = {
    route: PropTypes.object,
    grades: PropTypes.array
}

function transformRoute(obj) {
    if (obj.gym && obj.grade && obj.color && obj.tags.length && obj.location)
        return {
            type: obj.type,
            color: obj.color.value,
            grade: obj.grade.value.slice(1),
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