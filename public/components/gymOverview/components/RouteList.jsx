import React, { Component } from 'react'
import PropTypes from 'prop-types'

import RouteRow from './routeRow'
import RouteHeader from './routeHeader'

import pi from 'rtutil'

class RouteList extends Component {
	state = {
		range: new Set()
	}

	static propTypes = {
		routes: PropTypes.array,
		team: PropTypes.object,
		gym: PropTypes.object,
		updateRoute: PropTypes.func,
		removeRoutes: PropTypes.func,
		walls: PropTypes.array
	}

	componentWillMount() {
		this.setState({
			routes: sortOn([...this.props.routes], 'set_on')
		})
	}

	componentWillReceiveProps(next) {
		if (next.routes) {
			let routes = sortOn(next.routes, this.state.sort || 'set_on')
			this.setState({
				routes: this.state.dir === 'desc' ? routes.reverse() : routes
			})
		}
	}

	render() {
		return (
            <table className='table table-sm table-mobile table-fixed table__routelist'>
              <RouteHeader
                           handleSort={ this.handleSort }
                           sort={ this.state.sort }
                           dir={ this.state.dir }
                           deleteHandler={ this.deleteHandler }
                           selected={ this.state.range.size > 0 } />
              <tbody>
                  { this.state.routes.map((route, ind) => (
                        <RouteRow
                                  ind={ ind }
                                  key={ route._id + route.updated_at }
                                  route={ route }
                                  selectHandler={ this.selectHandler }
                                  selected={ this.state.range.has(ind) }
                                  team={ this.props.team }
                                  updateRoute={ this.updateRoute }
                                  walls={this.props.walls} />
                    )) }
              </tbody>
            </table>
		)
	}

	selectHandler = {
		mouseDown: e => {
			e.preventDefault()

			let modifier = e.ctrlKey || e.metaKey
			let shift = e.shiftKey
			let ind = Number(e.target.dataset.index)
			let range

			if (modifier && this.lastSelected !== undefined) {
				let l = Math.min(this.lastSelected, ind)
				let h = Math.max(this.lastSelected, ind)
				let selected = pi.range(l, h + 1)
				this.lastSelected = undefined
				range = new Set([...this.state.range, ...selected])
			} else if (modifier && !this.lastSelected) {
				this.lastSelected = ind
				range = this.state.range.add(ind)
			} else if (shift && this.state.range.size) {
				let l = Math.min(...this.state.range)
				let h = Math.max(...this.state.range)
				let selected = ind <= h ? pi.range(ind, h + 1) : pi.range(l, ind + 1)
				this.lastSelected = undefined
				range = new Set([...this.state.range, ...selected])
			} else if(document.body.clientWidth < 1000){
				let temp = new Set(this.state.range)
				this.state.range.has(ind)? temp.delete(ind) : temp.add(ind)
				range = temp  
			} else {
				this.lastSelected = ind
				range = this.state.range.has(ind) && this.state.range.size === 1 ? new Set() : new Set([ind])
			}

			this.setState({
				range
			})
		}
	}

	deleteHandler = event => {
		event.preventDefault()
		const inds = [...new Set(this.state.range)]
		const ids = inds.map(ind => this.state.routes[ind]._id)

		this.props.removeRoutes(ids)
		this.setState({
			range: new Set()
		})
	}

	handleSort = param => () => {
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
			routes: newRoutes
		})
	}

	updateRoute = newRoute => {
		this.setState({
			routes: this.state.routes.map(route => route._id === newRoute._id ? newRoute : route)
		})
		this.props.updateRoute(newRoute)
	}
}

function sortOn(arr, prop) {
	if (prop === 'grade') {
		return arr.sort((a, b) => a[prop] - b[prop])
	}

	if (prop === 'set_on') {
		return arr.sort((a, b) => Date.parse(a.set_on) - Date.parse(b.set_on))
	}
	return arr.sort(
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