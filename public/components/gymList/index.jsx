import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import GymItem from './gymItem'
import { LoadBar, LoadContainer, RtCard }from 'components/common'

class GymList extends Component {

    static propTypes = {
        gyms: PropTypes.array.isRequired
    }
    render() {
        return (
            <RtCard title="Gyms">
              <LoadContainer loaded={ !!this.props.gyms.length }>
                <div key="0" className="gym-list">
                    <LoadBar/>
                </div>
                <div key="1" className="gym-list">
                  { this.props.gyms.map(gym => (<GymItem key={ gym._id } gym={ gym } className="gym-item" />)) }
                </div>
              </LoadContainer>
            </RtCard>
        )
    }
}

function mapProps(state) {
    return {
        gyms: state.gyms,
        fetching: state.fetching
    }
}

export default connect(mapProps)(GymList)
