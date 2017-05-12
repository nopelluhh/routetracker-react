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

    componentWillReceiveProps(next) {
        if(next.routes) {
            this.setState({routes: next.routes})
        }
    }

    constructor() {
        super()
        this.handleSort = this.handleSort.bind(this)
    }

    render() {
        return (
      <table className='table table-mobile table-fixed'>
        <RouteHeader handleSort={ this.handleSort } sort={this.state.sort} dir={this.state.dir}/>
        <tbody>
          { this.state.routes.map(route => (
              <RouteRow key={ route._id + route.updated_at } route={ route } updateRoute={this.updateRoute} team={this.props.team}/>
            )) }
        </tbody>
      </table>
        )
    }

    handleSort = (param) => {
        return () => {
            let newRoutes = [...this.state.routes], dir
            if(this.state.sort === param) {
                newRoutes.reverse()
                dir = this.state.dir === 'asc' ? 'desc' : 'asc'
            } else {
                sortOn(newRoutes, param)
                dir = 'asc'
            }
            
            this.setState({
                dir,
                sort: param,
                routes: newRoutes
            })
        }
    }

    updateRoute = (newRoute) => {
        this.setState({
            routes: this.state.routes.map(route => {
                return route._id === newRoute._id? newRoute : route
            })
        })
        this.props.updateRoute(newRoute)
    }
}

RouteList.propTypes = {
    routes: PropTypes.array,
    team: PropTypes.object,
    updateRoute: PropTypes.func
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