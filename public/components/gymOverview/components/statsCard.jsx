import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RtCard from 'components/common/rtCard'

class StatsCard extends Component {
    componentDidMount() {
        this.setState({data: this.makeOverview(this.props.data)})
    }
    render() {
        if(!this.state) return null
        return (
            <RtCard title="Hey!">
                <ul className="list-unstyled">
                    <li>Count: {this.state.data.count}</li>
                    <li>Routes Needed: N/A</li>
                    <li>Oldest Route: {this.state.data.oldest}</li>
                </ul>
            </RtCard>
        )
    }

    makeOverview(data) {

        let min = Infinity

        data.forEach(route => {
            if(min > Date.parse(route.created_at)) min = route.created_at
        })
        return {
            count: data.length,
            oldest: new Date(min).toLocaleDateString()
        }
    }
}

StatsCard.propTypes = {
    data: PropTypes.array
}


export default StatsCard

