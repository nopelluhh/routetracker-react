import React from 'react'
import PropTypes from 'prop-types'

class Block extends React.Component {
    render = () => (
    <div className="block" style={this.props.style}>
        {this.props.children}
    </div>
    )
}

Block.propTypes = {
    children: PropTypes.node,
    style: PropTypes.object
}

export default Block