import React, { Component } from 'react'
import * as d3 from 'd3'
import d3tip from 'd3-tip'
d3.tip = d3tip

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

    const width = 500
    const height = 288
    const barWidth = width / data.length

    const y = d3
        .scaleLinear()
        .domain([
            0, d3.max(data, (d) => d.count)
        ])
        .range([0, height])

    const rainbow = d3
        .scaleSequential(d3.interpolateRainbow)
        .domain([0, data.length])

    const fontScale = d3.scaleLinear()
        .domain([320, 500]) // expected limits of SVG width
        .range([30, 15]) // when SVG is 1/2 width, text will be 2/3 size
        .clamp(true)

    const chart = d3
        .select(this.el)
        .append('svg')
        .attr('viewBox', '0 -5 500 300')
        .attr('preserveAspectRatio', 'xMidYMin meet')
        .classed('w100', true)
        .classed('chart bs-1', true)

    const bar = chart
        .selectAll('g')
        .data(data)
        .enter()
        .append('g')
        .attr('transform', function(d, i) {
            return 'translate(' + i * barWidth + ', 0)'
        })

    var tip = d3.tip()
        .attr('class', 'd3-tip')
        .offset([-10, 0])
        .html(function(d) {
            return '<strong>Total:</strong> <span style=\'color:#ff0044\'>' + d.count + '</span>'
        })

    chart.call(tip)

    bar.append('rect')
        .classed('rt-bar', true)
        .attr('width', barWidth - 5)
        .attr('height', 0)
        .attr('opacity', (d) => +d.count ? 1 : 0.4)
        .attr('y', (d) =>  height - y(d.count) - 1)
        .attr('fill', function(d, i) {
            return rainbow(i)
        })
        .on('mouseover', tip.show)
        .on('mouseout', tip.hide)
        .transition()
        .duration(500)
        .attr('height', (d) => y(d.count) + 3)

    bar.append('text')
        .classed('rt-marker', true)
        .attr('y', height - 7)
        .attr('x', barWidth / 2 - 4)
        .attr('text-anchor', 'middle')
        .text(d => d.grade)
        .attr('font-size', '14px')
        .attr('opacity', 0)
        .transition()
        .duration(500)
        .attr('opacity', 1)


    window.onresize = resized

    function resized() {
        var scale = fontScale(chart.node().getBoundingClientRect().width)
        var text = d3.selectAll('text')
        text.attr('font-size', scale + 'px')
    }

}