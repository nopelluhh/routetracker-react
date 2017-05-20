import React, { Component } from 'react'
import PropTypes from 'prop-types'

import RouteRow from './routeRow'
import RouteHeader from './routeHeader'

import pi from 'rtutil'

class RouteList extends Component {
    componentWillMount() {
        this.setState({
            routes: this.props.routes,
            range: []
        })
    }

    componentWillReceiveProps(next) {
        if (next.routes) {
            this.setState({
                routes: next.routes
            })
        }
    }

    render() {
        return (
            <table className='table table-mobile table-fixed'>
              <RouteHeader handleSort={ this.handleSort } sort={ this.state.sort } dir={ this.state.dir } />
              <tbody>
                { this.state.routes.map((route, ind) => (
                      <RouteRow
                                key={ route._id + route.updated_at }
                                route={ route }
                                updateRoute={ this.updateRoute }
                                team={ this.props.team }
                                selectHandler={ this.selectHandler }
                                ind={ ind }
                                selected={ this.state.range.includes(ind) } />
                  )) }
              </tbody>
            </table>
        )
    }

    selectHandler = {
        mouseDown: (e) => {
            e.preventDefault()

            let modifier = e.ctrlKey || e.metaKey
            let ind = Number(e.target.dataset.index)
            let range

            if (modifier && this.lastSelected !== undefined) {
                let l = Math.min(this.lastSelected, ind)
                let h = Math.max(this.lastSelected, ind)
                let selected = pi.range(l, h + 1)
                
                this.lastSelected = undefined
                range = this.state.range.concat(selected)
            } else if (modifier && !this.lastSelected) {
                this.lastSelected = ind
                range = this.state.range.concat(ind)
            } else {
                this.lastSelected = ind
                range = this.state.range.includes(ind) && this.state.range.length === 1 ? [] : [ind]
            }

            this.setState({
                range
            })
        }
    }

    handleSort = (param) => {
        return () => {
            let newRoutes = [...this.state.routes],
                dir
            if (this.state.sort === param) {
                newRoutes.reverse()
                dir = this.state.dir === 'asc' ? 'desc' : 'asc'
            } else {
                sortOn(newRoutes, param)
                dir = 'asc'
            }

            this.setState({
                dir,
                sort: param,
                routes: newRoutes,
                range: []
            })
        }
    }

    updateRoute = (newRoute) => {
        this.setState({
            routes: this.state.routes.map(route => {
                return route._id === newRoute._id ? newRoute : route
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

function sortOn(arr, prop) {
    if (prop === 'grade') {
        return arr.sort((a, b) => a[prop] - b[prop])
    }

    if (prop === 'set_on') {
        return arr.sort((a, b) => Date.parse(a.set_on) - Date.parse(b.set_on))
    }
    arr.sort(
        function(a, b) {
            if (a[prop] < b[prop]) {
                return -1
            } else if (a[prop] > b[prop]) {
                return 1
            } else {
                return 0
            }
        }
    )
}

export default RouteList