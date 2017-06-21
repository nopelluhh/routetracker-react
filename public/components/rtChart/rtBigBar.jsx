import React, { Component } from 'react'
import PropTypes from 'prop-types'

import * as d3 from 'd3'
import d3tip from 'd3-tip'
import { palatte } from 'rtconfig'
d3.tip = d3tip

class RtBigBar extends Component {
	static propTypes = {
		data: PropTypes.array,
		goal: PropTypes.array,
		type: PropTypes.string,
		color: PropTypes.string
	}

	componentDidMount() {
		this.chart = d3.select(this.el)
		this.makeChart()
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.type !== this.props.type) {
			this.chart.selectAll('*').remove()
			this.makeChart(nextProps.data)
		}
		if (nextProps.data) {
			this.updateChart(nextProps.data)
		}
		if (nextProps.color) {
			return
		}
	}

	render() {
		return (
			<div>
                <svg
                                                viewBox="-5 -5 500 300"
                                                preserveAspectRatio="xMidYMin meet"
                                                className="w100 chart"
                                                ref={el => this.el = el}>
                </svg>
            </div>
		)
	}

	updateChart = data => {
		var svg = d3.select(this.el)

		// calculate new height
		this.y = d3
			.scaleLinear()
			.domain([0, d3.max(data, d => d.count)])
			.range([0, this.height])

		// Make the changes
		svg.selectAll('.rt-bar')
			.data(data)
			.transition() // change the line
			.duration(750)
			.attr('y', d => this.height - this.y(d.count))
			.attr('height', d => this.y(d.count) + 6)

		svg.selectAll('.rt-marker')
			.data(data)
			.text(d => d.grade)
	}

	makeChart = data => {
		if (!this.props.data)
			return
		data = data || this.props.data

		this.width = 490
		this.height = 285

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

		const barWidth = this.width / data.length

		this.y = d3
			.scaleLinear()
			.domain([0, d3.max(data, d => d.count)])
			.range([0, this.height])

		const fontScale = d3.scaleLinear()
			.domain([320, 500]) // expected limits of SVG width
			.range([30, 15])
			.clamp(true)

		const bar = this.chart
			.selectAll('g')
			.data(data)
			.enter()
			.append('g')
			.attr('class', 'bar-group')
			.attr('transform', (d, i) => 'translate(' + i * barWidth + ', 0)')

		var tip = d3.tip()
			.attr('class', 'd3-tip')
			.offset([-10, 0])
			.html(d => `<strong>${d.grade}:</strong> <span style='color:#ff0044'>${d.count}</span>`)

		this.chart.call(tip)

		bar.append('rect')
			.classed('rt-bar', true)
			.attr('width', barWidth - 5)
			.attr('rx', 3)
			.attr('ry', 3)
			.attr('height', 6)
			.attr('opacity', d => +d.count ? 1 : 0.4)
			.attr('y', this.height)
			.attr('fill', (d, i) => colorScale(i))
			.on('mouseover', tip.show)
			.on('mouseout', tip.hide)
			.transition()
			.delay(() => 400 - Math.random() * 100)
			.duration(300)
			.ease(d3.easeExpIn)
			.attr('y', d => this.height - this.y(d.count))
			.attr('height', d => this.y(d.count) + 6)

		bar.append('text')
			.classed('rt-marker', true)
			.attr('y', barWidth / 2 + 3)
			.attr('x', -280)
			.attr('text-anchor', 'start')
			.text(d => d.grade)
			.attr('font-size', '14px')
			.attr('opacity', 0)
			.transition()
			.duration(500)
			.attr('opacity', 1)

		const resized = () => {
			var scale = fontScale(this.chart.node().getBoundingClientRect().width)
			var text = d3.selectAll('text')
			text.attr('font-size', scale + 'px')
			if (scale > 18) {
				text.attr('opacity', 0)
			} else {
				text.attr('opacity', 1)
			}
		}

		resized()
		window.onresize = resized

	}
}

export default RtBigBar

