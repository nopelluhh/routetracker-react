import React, { Component } from 'react'
import * as d3 from 'd3'

class RtPie extends Component {
    componentDidMount() {
        makeChart.apply(this)
    }

    render() {
        return (
            <div style={{width: '100px', height: '100px'}} ref={ (el) => this.el = el }></div>
        )
    }
}

export default RtPie

function makeChart() {
    if (!this.props.data)
        return
    const data = this.props.data

    const width = 94
    const height = 94
    const barWidth = width / data.length

    const chart = d3
        .select(this.el)
        .append('svg')
        .attr('viewBox', '-3 -3 100 100')
        .attr('preserveAspectRatio', 'xMidYMin meet')
        .classed('w100', true)


    var radius = Math.min(width, height) / 2,
        g = chart.append('g').attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')')

    var color = d3.scaleOrdinal(['#98abc5', '#8a89a6', '#7b6888', '#6b486b', '#a05d56', '#d0743c', '#ff8c00'])

    var pie = d3.pie()
    .sort(null)
    .value(function(d) {
        return d
    })
    const rainbow = d3
        .scaleSequential(d3.interpolateRainbow)
        .domain([0, data.length])

    var path = d3.arc()
    .outerRadius(radius - 10)
    .innerRadius(0)

    var label = d3.arc()
    .outerRadius(radius - 40)
    .innerRadius(radius - 40)


    var arc = g.selectAll('.arc')
    .data(pie(data))
    .enter().append('g')
    .attr('class', 'arc')

    arc.append('path')
    .attr('d', path)
    .attr('fill', d => rainbow(d.data))

    arc.append('text')
    .attr('transform', function(d) {
        return 'translate(' + label.centroid(d) + ')'
    })
    .attr('dy', '0.35em')
    .text(function(d) {
        return d.data.age
    })

}
