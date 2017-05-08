import React, { Component } from 'react'
import PropTypes from 'prop-types'

class WzPage extends Component {
    constructor() {
        super()
        this.next = this.next.bind(this)
        this.prev = this.prev.bind(this)
    }
    render() {
        return (
            <div className="row p10b hidden-xs">
              <div className="col-xs-6">
                <button className="btn btn-link" onClick={this.prev}>Previous</button>
              </div>
              <div className="col-xs-6 text-right">
                <button className="btn btn-link" onClick={this.next }>Next</button>
              </div>
            </div>
        )
    }

    next() {
        this.props.next(1)
    }

    prev() {
        this.props.prev(-1)
    }
}

WzPage.propTypes = {
    prev: PropTypes.func,
    next: PropTypes.func
}

export default WzPage