import * as d3 from 'd3'

const colorRange = ['#fff', '#05c46b']
const color = d3.scaleLinear().range(colorRange).domain([0, 6])

const margin = {
  top: 15,
  right: 25,
  bottom: 15,
  left: 100,
}

let width = 0
let height = 0

export const sortData = (data) =>
  data.sort((a, b) => d3.ascending(a.value, b.value))

export const createSVG = (id, dataLength, parentWidth) => {
  height = (dataLength + 0.5) * 35
  width = parentWidth - margin.left - margin.right
  return d3
    .select(id)
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
}

export const setGradient = (parent) => {
  const gradient = parent
    .append('defs')
    .append('linearGradient')
    .attr('id', 'linear-gradient')

  gradient.append('stop').attr('offset', '0%').attr('stop-color', color(1))
  gradient.append('stop').attr('offset', '25%').attr('stop-color', color(2))
  gradient.append('stop').attr('offset', '50%').attr('stop-color', color(3))
  gradient.append('stop').attr('offset', '75%').attr('stop-color', color(4))
  gradient.append('stop').attr('offset', '100%').attr('stop-color', color(5))
}

export const appendBars = (parent, data) => {
  const x = d3
    .scaleLinear()
    .range([0, width])
    .domain([0, d3.max(data, (d) => d.value)])

  const y = d3
    .scaleBand()
    .rangeRound([height, 0])
    .padding(0.5)
    .domain(data.map((d) => d.name))

  const yAxis = d3.axisLeft(height).scale(y).tickSize(0)

  parent.append('g').attr('class', 'y axis').call(yAxis)

  const bars = parent.selectAll('.bar').data(data).enter().append('g')
  bars
    .append('rect')
    .attr('rx', 10)
    .attr('ry', 10)
    .attr('class', 'bar')
    .attr('y', (d) => y(d.name))
    .attr('height', y.bandwidth())
    .attr('x', 10)
    .attr('width', (d) => x(d.value))
    .style('fill', 'url(#linear-gradient)')
}
