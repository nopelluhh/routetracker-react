import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { RtPane } from 'components/common'

class StatsCard extends Component {
    componentDidMount() {
        this.setState({
            data: this.makeOverview(this.props.data)
        })
    }
    render() {
        if (!this.state) return null
        return (
            <RtPane>
              <span className="rt-pane__header">Overview</span>
              <table className="table">
                <tbody>
                  <tr>
                    <td className="text-right">
                      Count:
                    </td>
                    <td className="text-left">
                      { this.state.data.count }
                    </td>
                  </tr>
                  <tr>
                    <td className="text-right">
                      Routes Needed:
                    </td>
                    <td className="text-left">
                      N/A
                    </td>
                  </tr>
                  <tr>
                    <td className="text-right">
                      Oldest Route:
                    </td>
                    <td className="text-left">
                      { this.state.data.oldest }
                    </td>
                  </tr>
                </tbody>
              </table>
            </RtPane>
        )
    }

    makeOverview(data) {
        let min = Infinity

        data.forEach(route => {
            if (min > Date.parse(route.set_on))
                min = route.set_on
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

