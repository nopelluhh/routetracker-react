import React, { Component } from 'react'
import * as d3 from 'd3'

class RtBar extends Component {
    componentDidMount() {
        makeChart.apply(this)
    }

    render() {
        return (
            <div ref={ (el) => this.el = el }></div>
        )
    }
}

export default RtBar

function makeChart() {
    if (!this.props.data)
        return
    const data = this.props.data

    const width = 94
    const height = 94
    const barWidth = width / data.length

    const y = d3
        .scaleLinear()
        .domain([
            0, d3.max(data)
        ])
        .range([0, height])

    const rainbow = d3
        .scaleSequential(d3.interpolateRainbow)
        .domain([0, data.length])

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
        .attr('transform', function(d, i) {
            return 'translate(' + i * barWidth + ', 0)'
        })

    bar
        .append('rect')
        .classed('rt-bar', true)
        .attr('width', barWidth - 1)
        .attr('height', 0)
        .attr('opacity', (d) => +d
            ? 1
            : 0.4)
        .attr('y', height)
        .attr('fill', function(d, i) {
            return rainbow(i)
        })
        .transition()
        .delay(() => 400 - Math.random() * 100)
        .duration(300)
        .ease(d3.easeExpIn)
        .attr('y', (d) => {
            return height - y(d)
        })
        .attr('height', (d) => y(d))

}