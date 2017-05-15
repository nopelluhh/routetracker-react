import React from 'react'

const LoadBar = (props) => {
    console.log(props, 'load')
    return (
    <div className={props.inline? 'load-bar load-bar-inline' : 'load-bar'}>
        <div className="load-bar__bar"></div>
        <div className="load-bar__bar"></div>
        <div className="load-bar__bar"></div>
    </div>
    )
}

export default LoadBar