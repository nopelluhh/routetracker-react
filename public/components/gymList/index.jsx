import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import GymItem from './gymItem'
import LoadBar from 'components/common/loadBar'
import LoadContainer from 'components/common/loadContainer'

class GymList extends Component {

    static propTypes = {
        gyms: PropTypes.array.isRequired
    }
    render() {
        return (
            <div>
              <span className="content-title">Gyms:</span>
              <LoadContainer loaded={ !!this.props.gyms.length }>
                <div key="0" className="gym-list">
                    <LoadBar/>
                </div>
                <div key="1" className="gym-list">
                  { this.props.gyms.map(gym => (<GymItem key={ gym._id } gym={ gym } className="gym-item" />)) }
                </div>
              </LoadContainer>
            </div>
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
