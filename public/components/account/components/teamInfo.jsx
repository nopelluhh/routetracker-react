import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { RtSwatch, FlexRow, SortableList } from 'components/common'


import { colors } from 'rtconfig'


const ListItem = (props) => (<li {...props}> <RtSwatch color={props.color}/></li>)

const available = colors.map(color => {return {color}})


class TeamInfo extends Component {
    state = {  }

    static propTypes = {
        team: PropTypes.object
    }
    render() {
        return (
            <div className="row">
              <div className="col-sm">
                <SortableList className="list-unstyled" list={this.props.team.colors.slice(0, 5).map(color => {return {color}})} options={available} component={ListItem}/>
              </div>
              <div className="col-sm">
                <ul className="list-unstyled">
                  { this.props.team.grades.boulder.map(grade => (
                        <li key={ grade._id }>
                          { grade.value }
                        </li>)
                    ) }
                </ul>
              </div>
              <div className="col-sm"></div>
              { JSON.stringify(this.props.team) }
            </div>
        )
    }
}

function mapState(state) {
    return {
        team: state.team
    }
}

export default connect(mapState)(TeamInfo)