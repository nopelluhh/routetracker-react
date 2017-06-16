import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { RtSwatch, SortableList } from 'components/common'

import RtPie from 'components/rtChart/rtPie'
import RtStack from 'components/rtChart/RtStack'


import { colors } from 'rtconfig'


const ListItemColor = props => <li {...props}><RtSwatch color={ props.color } /></li>


const ListItem = props => (<li {...props}>{props.value}</li>)                           

const available = colors.map(color => {
	return {
		color
	}
})


class TeamInfo extends Component {
	state = {  }

	static propTypes = {
		team: PropTypes.object
	}
	render() {
		return (
            <div className="row">
              <div className="col-sm">
                <SortableList
                              className="list-unstyled"
                              list={ this.props.team.colors.slice(0, 5).map(color => { return { color} }) }
                              options={ available }
                              component={ ListItemColor }
                              comparator={(a, b) =>  a.color._id === b.color._id}/>
              </div>
              <div className="col-sm">
                <SortableList
                   className='list-unstyled'
                   list={this.props.team.grades.boulder.slice(0, 2)}
                   options={this.props.team.grades.boulder}
                   component={ListItem}
                   comparator={(a, b) => a.value === b.value}
                />
              </div>
              <div className="col-sm"></div>
              <RtPie data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}/>
              <RtStack data={[
	{
		value: 15
	}, {
		value: 10
	}, {
		value: 50
	}]}
              width='100px'/>
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