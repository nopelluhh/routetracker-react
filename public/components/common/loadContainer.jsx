import React from 'react'
import PropTypes from 'prop-types'

import ReactCSSTransitionReplace from 'react-css-transition-replace'


class LoadContainer extends React.Component {
	static propTypes = {
		loaded: PropTypes.bool
	}

	render() {
		const content = React.Children.toArray(this.props.children)

		return (
			<ReactCSSTransitionReplace transitionName="load_container" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
                {this.props.loaded ? content[1] : content[0]}
            </ReactCSSTransitionReplace>
		)
	}
}



export default LoadContainer