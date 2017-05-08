import React from 'react'
import PropTypes from 'prop-types'

import RtSwatch from 'components/common/rtSwatch'

class RouteRow extends React.Component {
    state = {
        edit: false
    }
  
    render() {
        return this.state.edit ? (
        <tr className="table-center">
          <td className="gym-row__date">
            <input type="text" className="input-sm" name="created_at" onChange={this.updateField} defaultValue={ new Date(this.props.route.created_at).toLocaleDateString() } />
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
            {'\u270E'}
          </td>
        </tr>
        ) : (
        <tr className="table-center">
          <td className="gym-row__date">
            { new Date(this.props.route.created_at).toLocaleDateString() }
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
            {'\u270E'}
          </td>
        </tr>
        )
    }

    toggleEdit = () => {
        this.setState({
            edit: !this.state.edit
        })
    }

    updateField = (event) => {
        this.props.updateRoute(event.target.name, event.target.value)
    }
}

RouteRow.propTypes = {
    route: PropTypes.object,
    edit: PropTypes.bool
}

export default RouteRow