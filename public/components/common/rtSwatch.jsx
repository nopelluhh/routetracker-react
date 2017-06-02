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
        const localStyle = {
            backgroundColor: c.color || 'white',
            color: color.textColor(c.color),
            borderRadius: '3px',
            height: '30px'
        }

        const style = Object.assign({}, localStyle, this.props.style? this.props.style : {})

        

        return (<span className={this.props.className} style={ style }><span className="hidden-sm-down">{ c.value || '' }</span></span>)
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