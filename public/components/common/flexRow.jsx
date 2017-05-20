import React from 'react'

const styles = (props) => {
    return {
        display: props.inline? 'inline-flex' : 'flex',
        justifyContent: 'space-between',
        margin: 'auto',
        ...props.style
    }
}

const flexRow = (props) => (
    <div style={ styles(props) } className='flex-row'>
      { props.children }
    </div>
)

export default flexRow