import React, { Component } from 'react'
import PropTypes from 'prop-types'

import RouteRow from './routeRow'
import RouteHeader from './routeHeader'

class RouteList extends Component {
    componentWillMount() {
        this.setState({
            routes: this.props.routes
        })
    }

    constructor() {
        super()
        this.handleSort = this.handleSort.bind(this)
    }

    render() {
        return (
      <table className='table table-mobile'>
        <RouteHeader handleSort={ this.handleSort } sort={this.state.sort} dir={this.state.dir}/>
        <tbody>
          { this.state.routes.map(route => (
              <RouteRow key={ route._id } route={ route } updateRoute={this.updateRoute} />
            )) }
        </tbody>
      </table>
        )
    }

    handleSort(param) {
        let that = this
        return function() {
            let newRoutes = [...that.state.routes], dir
            if(that.state.sort === param) {
                newRoutes.reverse()
                dir = that.state.dir === 'asc' ? 'desc' : 'asc'
            } else {
                sortOn(newRoutes, param)
                dir = 'asc'
            }
            
            that.setState({
                dir,
                sort: param,
                routes: newRoutes
            })
        }
    }

    updateRoute = (route) => {
        this.props.postUpdate(route)
    }
}

RouteList.propTypes = {
    routes: PropTypes.array
}

function sortOn (arr, prop) {
    if(prop === 'grade') {
        return arr.sort((a, b) => a[prop] - b[prop])
    }
    arr.sort(
        function (a, b) {
            if (a[prop] < b[prop]){
                return -1
            } else if (a[prop] > b[prop]){
                return 1
            } else {
                return 0   
            }
        }
    )
}

export default RouteList