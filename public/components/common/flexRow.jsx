import React from 'react'
import PropTypes from 'prop-types'

const styles = props => ({
	display: props.inline? 'inline-flex' : 'flex',
	justifyContent: props.around? 'space-around' : 'space-between',
	margin: 'auto',
	...props.style
})

const flexRow = props => (
    <div style={ styles(props) } className='flex-row'>
      { props.children }
    </div>
)

flexRow.propTypes = {
	children: PropTypes.node
}

export default flexRow
