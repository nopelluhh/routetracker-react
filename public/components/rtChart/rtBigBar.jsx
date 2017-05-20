import React, { Component } from 'react'
import PropTypes from 'prop-types'

import * as d3 from 'd3'
import d3tip from 'd3-tip'
d3.tip = d3tip

class RtBar extends Component {
    static propTypes = {
        data: PropTypes.array,
        goal: PropTypes.array
    }

    componentDidMount() {
        this.makeChart.apply(this)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.data) {
            this.updateChart.call(this, nextProps.data)
        }
    }

    render() {
        return (
            <div ref={ (el) => this.el = el }></div>
        )
    }

    updateChart(data) {
        var svg = d3.select(this.el)

        this.y = d3
            .scaleLinear()
            .domain([
                0, d3.max(data, (d) => d.count)
            ])
            .range([0, this.height])

        svg.selectAll('.bar-group')

    // Make the changes
        svg.selectAll('.rt-bar')
            .data(data)
            .transition()   // change the line
            .duration(750)
            .attr('y', (d) => {
                return this.height - this.y(d.count)
            })
            .attr('height', (d) => this.y(d.count) + 3)
    }

    makeChart() {
        if (!this.props.data)
            return
        const data = this.props.data

        this.width = 490
        this.height = 288
        const barWidth = this.width / data.length

        this.y = d3
            .scaleLinear()
            .domain([
                0, d3.max(data, (d) => d.count)
            ])
            .range([0, this.height])

        const rainbow = d3
            .scaleSequential(d3.interpolateRainbow)
            .domain([0, data.length])

        const fontScale = d3.scaleLinear()
            .domain([320, 500]) // expected limits of SVG width
            .range([30, 15]) // when SVG is 1/2 width, text will be 2/3 size
            .clamp(true)

        this.chart = d3
            .select(this.el)
            .append('svg')
            .attr('viewBox', '-5 -5 500 300')
            .attr('preserveAspectRatio', 'xMidYMin meet')
            .classed('w100', true)
            .classed('chart bs-1', true)

        const bar = this.chart
            .selectAll('g')
            .data(data)
            .enter()
            .append('g')
            .attr('class', 'bar-group')
            .attr('transform', function(d, i) {
                return 'translate(' + i * barWidth + ', 0)'
            })

        var tip = d3.tip()
            .attr('class', 'd3-tip')
            .offset([-10, 0])
            .html(function(d) {
                return '<strong>Total:</strong> <span style=\'color:#ff0044\'>' + d.count + '</span>'
            })

        this.chart.call(tip)

        bar.append('rect')
            .classed('rt-bar', true)
            .attr('width', barWidth - 5)
            .attr('height', 0)
            .attr('opacity', (d) => +d.count ? 1 : 0.4)
            .attr('y', this.height + 1)
            .attr('fill', function(d, i) {
                return rainbow(i)
            })
            .on('mouseover', tip.show)
            .on('mouseout', tip.hide)
            .transition()
            .delay(() => 400 - Math.random() * 100)
            .duration(300)
            .ease(d3.easeExpIn)
            .attr('y', (d) => {
                return this.height - this.y(d.count)
            })
            .attr('height', (d) => this.y(d.count) + 3)

        bar.append('text')
            .classed('rt-marker', true)
            .attr('y', this.height - 7)
            .attr('x', barWidth / 2 - 4)
            .attr('text-anchor', 'middle')
            .text(d => d.grade)
            .attr('font-size', '14px')
            .attr('opacity', 0)
            .transition()
            .duration(500)
            .attr('opacity', 1)


        window.onresize = resized.bind(this)

        function resized() {
            var scale = fontScale(this.chart.node().getBoundingClientRect().width)
            var text = d3.selectAll('text')
            text.attr('font-size', scale + 'px')
        }

    }
}

export default RtBar

