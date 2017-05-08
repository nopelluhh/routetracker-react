import React from 'react'
import ReactCSSTransitionReplace from 'react-css-transition-replace'


class LoadContainer extends React.Component {
    render() {
        const content = React.Children.toArray(this.props.children)

        return (
            <ReactCSSTransitionReplace transitionName="load_container" transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
              { this.props.loaded ? content[1] : content[0] }
            </ReactCSSTransitionReplace>
        )
    }
}

export default LoadContainer