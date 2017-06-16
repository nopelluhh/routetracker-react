import React from 'react'
import PropTypes from 'prop-types'

import { RtSwatch, FlexRow, Icon } from 'components/common'

import {dateMath} from 'rtutil'
import {dissoc, omit} from 'ramda'

const TdInput = (props) => <td className={props.className}><input {...dissoc('className', props)} className="input-sm form-control"/></td>

const TdSelect = (props) => (
  <td className={props.className}>
    <select className="input-sm form-control" {...omit(['className', 'children'], props)}>
      {props.children}
      </select>
  </td>
)


class RouteRow extends React.Component {
    state = {
        edit: false
    }

    static propTypes = {
        ind: PropTypes.number,
        route: PropTypes.object,
        selectHandler: PropTypes.object,
        selected: PropTypes.bool,
        team: PropTypes.object,
        updateRoute: PropTypes.func,
        walls: PropTypes.array
    }

    render() {
        return this.state.edit ? (
      <tr className={'table-center ' + (this.props.selected ? 'route-row__selected' : '')}>
        <TdInput
                 type="text"
                 className="gym-row__date"
                 name="set_on"
                 onChange={this.updateField}
                 defaultValue={new Date(this.props.route.set_on).toLocaleDateString()} />
        <TdInput
                 type="text"
                 name="grade"
                 onChange={this.updateField}
                 defaultValue={this.props.route.grade} />
        <TdInput
                 type="text"
                 name="color"
                 onChange={this.updateField}
                 defaultValue={this.props.route.color} />
        <TdSelect
                  name="wall"
                  onBlur={this.updateField}
                  defaultValue={this.props.route.wall}>
          {this.props.walls.map(wall => 
            <option key={wall} value={wall}>
                    {wall}
            </option>
          )}
        </TdSelect>
        <TdSelect
                  name="setter"
                  onBlur={this.updateField}
                  defaultValue={this.props.route.setter}>
            {this.props.team.members.map(setter => (
               <option key={setter._id} value={setter.nickname}>
                 {setter.nickname}
               </option>))}
        </TdSelect>
        <td className="gym-row__edit hidden-sm-down">
          <FlexRow inline around style={{ width: '80%' }}>
            <Icon onClick={this.cancelEdit} icon="x" />
            <Icon onClick={this.toggleEdit} icon="check" />
          </FlexRow>
        </td>
        <td>
          <input className="hidden-sm"
                 onMouseDown={this.props.selectHandler.mouseDown}
                 type="checkbox"
                 checked={this.props.selected}
                 data-index={this.props.ind} />
        </td>
      </tr>
      ) : (
      <tr className={'table-center ' + (this.props.selected ? 'route-row__selected' : '')} onDoubleClick={this.toggleEdit}>
        <td className="gym-row__date" alt={' (' + dateMath.weeksOld(this.props.route.set_on) + ' weeks old)'}>
          {new Date(this.props.route.set_on).toLocaleDateString()}
        </td>
        <td>
          {this.props.route.grade}
        </td>
        <td>
          {<RtSwatch className="list__swatch" color={this.props.route.color} />}
        </td>
        <td>
          {this.props.route.wall}
        </td>
        <td>
          {this.props.route.setter}
        </td>
        <td className='hidden-sm-down'>
          <Icon onClick={this.toggleEdit} icon="pencil" />
        </td>
        <td className="hidden-sm">
          <input
                 onMouseDown={this.props.selectHandler.mouseDown}
                 type="checkbox"
                 checked={this.props.selected}
                 data-index={this.props.ind} />
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