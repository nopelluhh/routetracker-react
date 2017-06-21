import React, { Component } from 'react'
import * as d3 from 'd3'
import { palatte } from 'rtconfig'

class RtBar extends Component {
	componentDidMount() {
		makeChart.apply(this)
	}

	render() {
		return (
			<div ref={el => this.el = el}></div>
		)
	}
}

export default RtBar

function makeChart() {
	if (!this.props.data) return

	const {data} = this.props
	const width = 94
	const height = 94
	const barWidth = width / data.length

	const y = d3
		.scaleLinear()
		.domain([0, d3.max(data)])
		.range([0, height])

	const color = palatte[this.props.color] || {
		primary: 'black',
		secondary: 'black'
	}

	const colorScale = this.props.color ?
		(
		d3.scaleLinear(d3.interpolateHcl)
			.domain([0, data.length])
			.range([color.primary, color.secondary])
		) : (
		d3.scaleSequential(d3.interpolateRainbow)
			.domain([0, data.length])
		)

	const chart = d3
		.select(this.el)
		.append('svg')
		.attr('viewBox', '-3 -3 100 100')
		.attr('preserveAspectRatio', 'xMidYMin meet')
		.classed('w100', true)

	const bar = chart
		.selectAll('g')
		.data(data)
		.enter()
		.append('g')
		.attr('transform', (d, i) => 'translate(' + i * barWidth + ', 0)')

	bar.append('rect')
		.classed('rt-bar', true)
		.attr('width', barWidth - 1)
		.attr('rx', 1)
		.attr('ry', 1)
		.attr('height', 0)
		.attr('opacity', d => +d ? 1 : 0.4)
		.attr('y', height)
		.attr('fill', (d, i) => colorScale(i))
		.transition()
		.delay(() => 400 - Math.random() * 100)
		.duration(300)
		.ease(d3.easeExpIn)
		.attr('y', d => height - y(d))
		.attr('height', d => y(d))

}