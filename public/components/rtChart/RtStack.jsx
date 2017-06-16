import React, { Component } from 'react'
import * as d3 from 'd3'

class RtStack extends Component {
    componentDidMount() {
        makeChart.apply(this)
    }

    render() {
        return (
            <div style={{width: '100px', height: '100px'}} ref={ (el) => this.el = el }></div>
        )
    }

    
}

function makeChart() {
    if (!this.props.data) return
    
    const { data, width, height = '100'} = this.props

    const total = data.reduce((acc, cur) => acc + cur.value, 0)

    const chart = d3
        .select(this.el)
        .append('svg')
        .attr('viewBox', '0 0 100 100')
        .attr('width', width)
        .attr('height', height)

    const x = d3.scaleLinear()
        .domain([0, total])
        .range([0, 100])

    const segments = chart.selectAll('g')
        .data(data)
        .enter()
        .append('g')
        .attr('transform', function(d) {
            return 'translate(' + x(d) + ', 0)'
        })
    
    segments.append('rect')
        .attr('width', (d) => x(d.value))
        .attr('height', height)
        .attr('x', (d) => x(d.value))
        .attr('fill', 'black')

}

export default RtStack