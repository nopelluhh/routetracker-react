import React from 'react'
import PropTypes from 'prop-types'

import RtSwatch from 'components/common/rtSwatch'
import FlexRow from 'components/common/flexRow'

import {dateMath, renderIf} from 'rtutil'

class RouteRow extends React.Component {
    state = {
        edit: false
    }

    static propTypes = {
        route: PropTypes.object,
        edit: PropTypes.bool,
        team: PropTypes.object,
        updateRoute: PropTypes.func,
        deleteRoute: PropTypes.func,
        selected: PropTypes.bool,
        ind: PropTypes.number,
        selectHandler: PropTypes.func
    }

    render() {
        return this.state.edit ? (
      <tr className={'table-center ' + (this.props.selected? 'route-row__selected':'')}>
        <td className="gym-row__date">
          <input type="text" className="input-sm form-control" name="set_on" onChange={ this.updateField } defaultValue={ new Date(this.props.route.set_on).toLocaleDateString() } />
        </td>
        <td>
          <input type="text" className="input-sm form-control" name="grade" onChange={ this.updateField } defaultValue={ this.props.route.grade } />
        </td>
        <td>
          <input type="text" className="input-sm form-control" name="color" onChange={ this.updateField } defaultValue={ this.props.route.color } />
        </td>
        <td>
          <select className="input-sm form-control" name="setter" onBlur={ this.updateField } defaultValue={ this.props.route.setter }>
            { this.props.team.members.map(setter => (<option key={ setter._id } value={ setter.nickname }> { setter.nickname } </option>)) }
          </select>
        </td>
        <td className="gym-row__edit">
          <FlexRow inline style={ { width: '80%' } }>
            <span onClick={ this.cancelEdit } className="glyphicon glyphicon-remove"></span>
            <span onClick={ this.toggleEdit } className="glyphicon glyphicon-ok"></span>
            <span onClick={ this.deleteRoute } className="glyphicon glyphicon-trash"></span>
          </FlexRow>
        </td>
        <td className="hidden-sm">
          <input onMouseDown={this.props.selectHandler.mouseDown} type="checkbox" checked={this.props.selected} data-index={this.props.ind}/>
        </td>
      </tr>
      ) : (
      <tr className={'table-center ' + (this.props.selected? 'route-row__selected':'')}>
        <td className="gym-row__date">
          { new Date(this.props.route.set_on).toLocaleDateString() }
          <span>{' (' + dateMath.weeksOld(this.props.route.set_on) + ' weeks old)'}</span>
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
        <td onClick={ this.toggleEdit }>
          <span className="glyphicon glyphicon-pencil"></span>
        </td>
        <td className="hidden-sm">
          <input onMouseDown={this.props.selectHandler.mouseDown} type="checkbox" checked={this.props.selected} data-index={this.props.ind}/>
        </td>
      </tr>
      )
    }

    cancelEdit = () => {
        this.setState({
            edit: !this.state.edit
        })
    }

    toggleEdit = () => {
        if (this.state.edit) {
            this.props.updateRoute(this.route)
        } else {
            this.route = Object.assign({}, this.props.route)
        }
        

        this.setState({
            edit: !this.state.edit
        })
    }

    deleteRoute = () => {
    }

    updateField = (event) => {
        let field = event.target.name
        this.route[field] = event.target.value
    }
}



export default RouteRow