import React, {Component} from 'react'

class SwipeContainer extends Component {
    render() {
        return (
            <div onTouchStart={this.touchStart} onTouchEnd={this.touchEnd}>
                { this.props.children }
            </div>
        )
    }

    touchStart = (e) => {
        if(e.changedTouches.length > 1) return
        this.startX = e.changedTouches[0].clientX
    }

    touchEnd = (e) => {
        let dist = e.changedTouches[0].clientX - this.startX
        if(dist < 100 && dist > -100) return

        if(!this.props.onLeft) return this.props.onSwipe(dist)

        dist > 0 ? this.props.onRight() : this.props.onLeft()
    }
}

export default SwipeContainer