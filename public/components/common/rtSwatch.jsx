import React, {Component} from 'react'
import PropTypes from 'prop-types'
import color from 'services/colorService'
import { connect } from 'react-redux'

class RtSwatch extends Component {
    render() {
        let c = this.props.color
        if (!this.props.color.color) {
            let t = this.props.colors.filter(color => color.value === this.props.color.toLowerCase())[0]
            c = {
                color: t? t.color : '#FFF',
                value: this.props.color.toLowerCase()
            }
        }
        const style = {
            backgroundColor: c.color || 'white',
            color: color.textColor(c.color),
            borderRadius: '3px',
            height: '30px'
        }

        return (<span className={this.props.className} style={ style }>{ c.value || '' }</span>)
    }

}

RtSwatch.propTypes = {
    color: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    colors: PropTypes.array
}

function mapState(state) {
    return {
        colors: state.team.colors
    }
}

export default connect(mapState)(RtSwatch)

export { RtSwatch }