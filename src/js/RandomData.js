import d3 from 'd3';

export default d3.range(10).map(num=>d3.range(10).map(num=>({val:Math.floor(Math.random()*10)})));