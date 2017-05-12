import React from 'react'

const styles = {
    display: 'flex',
    justifyContent: 'spaceBetween'
}

const flexRow = (props) => (
    <div style={styles}>{props.children}</div>
)

export default flexRow