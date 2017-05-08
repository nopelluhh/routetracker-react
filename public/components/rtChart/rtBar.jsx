import React, {Component} from 'react'
import d3 from 'services/d3'

class RtBar extends Component {
    componentDidMount() {
        makeChart.apply(this)
    }

    render() {
        return (
            <div ref={(el) => this.el = el}></div>
        )
    }
}

export default RtBar

function makeChart() {
    if (!this.props.data) 
        return
    const data = this.props.data

    const width = Number(this.props.width) || 500
    const height = Number(this.props.height) || 200
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
        .attr('width', width)
        .attr('height', height)

    const bar = chart
        .selectAll('g')
        .data(data)
        .enter()
        .append('g')
        .attr('transform', function (d, i) {
            return 'translate(' + i * barWidth + ', 0)'
        })

    bar
        .append('rect')
        .classed('rt-bar', true)
        .attr('width', barWidth - 1)
        .attr('height', 0)
        .attr('opacity', (d) => + d
            ? 1
            : 0.4)
        .attr('y', (d) => {
            return height - y(d) - 3
        })
        .attr('fill', function (d, i) {
            return rainbow(i)
        })
        .transition()
        .duration(500)
        .attr('height', (d) => y(d) + 3)

}