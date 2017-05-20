import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class TeamInfo extends Component {
    state = {  }

    static propTypes = {
        team: PropTypes.object
    }
    render() {
        return (
            <div>
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