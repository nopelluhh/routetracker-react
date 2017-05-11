import React from 'react'
import PropTypes from 'prop-types'

import RtSwatch from 'components/common/rtSwatch'

class RouteRow extends React.Component {
    state = {
        edit: false
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.route.updated_at !== this.props.route.updated_at || this.state.edit !== nextState.edit
    }
  
    render() {
        return this.state.edit ? (
        <tr className="table-center">
          <td className="gym-row__date">
            <input type="text" className="input-sm" name="set_on" onChange={this.updateField} defaultValue={ new Date(this.props.route.set_on).toLocaleDateString() } />
          </td>
          <td>
            { this.props.route.grade }
          </td>
          <td>
            { <RtSwatch className="list__swatch" color={ this.props.route.color } /> }
          </td>
          <td>
            { this.props.route.setter }
          </td>
          <td className="gym-row__edit">
            <span onClick={this.cancelEdit} className="glyphicon glyphicon-remove"></span>
            <span onClick={this.toggleEdit} className="glyphicon glyphicon-ok"></span>
            <span onClick={this.toggleEdit} className="glyphicon glyphicon-trash"></span>
          </td>
        </tr>
        ) : (
        <tr className="table-center">
          <td className="gym-row__date">
            { new Date(this.props.route.set_on).toLocaleDateString() }
          </td>
          <td>
            { this.props.route.grade }
          </td>
          <td>
            { <RtSwatch className="list__swatch" color={ this.props.route.color } /> }
          </td>
          <td>
            { this.props.route.setter }
          </td>
          <td onClick={this.toggleEdit}>
            <span className="glyphicon glyphicon-pencil"></span>
          </td>
        </tr>
        )
    }

    toggleEdit = () => {
        if(this.state.edit) {
            this.props.updateRoute(this.route)
        } else {
            this.route = Object.assign({}, this.props.route)
        }

        this.setState({
            edit: !this.state.edit
        })
    }

    updateField = (event) => {
        let field = event.target.name
        this.route[field] = event.target.value
    }
}

RouteRow.propTypes = {
    route: PropTypes.object,
    edit: PropTypes.bool
}

export default RouteRow