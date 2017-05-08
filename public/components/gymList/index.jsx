import React, { Component } from 'react'
import GymItem from './gymItem'
import LoadBar from 'components/common/loadBar'
import LoadContainer from 'components/common/loadContainer'
import { connect } from 'react-redux'


function listGyms(gyms) {
    return gyms.map(gym => (<GymItem key={ gym._id } gym={ gym } className="gym-item" />))
}

class GymList extends Component {
    render() {
        return (
            <div>
              <span className="content-title">Gyms:</span>
              <LoadContainer loaded={ !!this.props.gyms.length }>
                <div key="0" className="gym-list">
                    <LoadBar/>
                </div>
                <div key="1" className="gym-list">
                  { listGyms(this.props.gyms) }
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
