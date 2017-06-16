import React from 'react'
import PropTypes from 'prop-types'

import cx from 'classnames'

const Block = (props) => (
    <div className={cx('block', props.className)} style={props.style}>
        {props.children}
    </div>
    )


Block.propTypes = {
    children: PropTypes.node,
    style: PropTypes.object
}

export default Block