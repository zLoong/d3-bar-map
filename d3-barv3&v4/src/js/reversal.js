import '../style/index.scss';


var width = 500, height = 300;
var padding = { top: 50, right: 50, bottom: 50, left: 50 };
var rectMargin = 10;
var main = d3.select("#container")
    .append("svg")
    .attr("width", width)
    .attr("height", height);
var dataset = {
    x: ["赵", "钱", "孙", "李", "周", "吴", "郑", "王"],
    y: [40, 30, 50, 70, 90, 20, 10, 40]
};
// 定义x轴的比例尺(序数比例尺)
var xScale = d3.scale.ordinal()
    .domain(dataset.x)
    .rangeRoundBands([0, width - padding.left - padding.right], 0);
// 定义y轴的比例尺(线性比例尺)
var yScale = d3.scale.linear()
    .domain([0, d3.max(dataset.y)])
    .range([height - padding.top - padding.bottom, padding.top]);

var xAxis = d3.svg.axis()
    .scale(xScale)
    .orient('bottom');
var yAxis = d3.svg.axis()
    .scale(yScale)
    .orient('left');

main.append('g')
    .attr('class', 'axis')
    .attr('transform', 'translate(' + padding.left + ',' + (height - padding.bottom - padding.top) + ')')
    .call(xAxis);
main.append('g')
    .attr('class', 'axis')
    .attr('transform', 'translate(' + padding.left + ',0)')
    .call(yAxis);

// 添加矩形
main.selectAll('.bar')
    .data(dataset.y)
    .enter()
    .append('rect')
    .attr('class', 'bar')
    .attr('x', function (d, i) {
        return xScale(dataset.x[i]) + rectMargin + padding.left;
    })
    .attr('y', function (d, i) {
        return yScale(d);
    })
    .attr('width', xScale.rangeBand() - 2 * rectMargin)
    .attr('height', function (d, i) {
        return height - padding.top - padding.bottom - yScale(d);
    })
    .attr('fill', 'green');
//添加文本
main.selectAll(".text")
    .data(dataset.y)
    .enter()
    .append("text")
    .attr("class", "text")
    .attr("transform", "translate(" + padding.left + "," + 0 + ")")
    .attr("x", function (d, i) {
        return xScale(dataset.x[i]) + rectMargin / 2;
    })
    .attr("y", function (d) {
        return yScale(d);
    })
    .attr("dx", function () {
        return (xScale.rangeBand() - rectMargin) / 2 - 10;
    })
    .attr("dy", function (d) {
        return -10;
    })
    .attr("fill", function () {
        return "blue"
    })
    .text(function (d) {
        return d;
    });

///////////#转过来
var width = 320, height = 184;
var dataset = {
    x: ["赵", "钱", "孙", "李", "周"],
    y: [40, 30, 50, 70, 90]
};
var padding = { top: 0, right: 0, bottom: 20, left: 25 };
var myapp = d3.select("#myapp")
    .append("svg")
    .attr("width", width)
    .attr("height", height);
var xScale2 = d3.scale.linear()
    .domain([0, d3.max(dataset.y)])
    .range([0, width - padding.left - padding.right]);
var yScale2 = d3.scale.ordinal()
    .domain(dataset.x)
    .rangeRoundBands([0, height - padding.top - padding.bottom], 0);

var xAxis2 = d3.svg.axis()
    .scale(xScale2)
    .orient('bottom');
var yAxis2 = d3.svg.axis()
    .scale(yScale2)
    .orient('left');
myapp.append('g')
    .attr('class', 'axis')
    .attr('transform', 'translate(' + padding.left + ',' + (height - padding.bottom - padding.top) + ')')
    .call(xAxis2);

myapp.append('g')
    .attr('class', 'axis')
    .attr('transform', 'translate(' + padding.left + ',0)')
    .call(yAxis2);

// 添加矩形
myapp.selectAll('.bar')
    .data(dataset.y)
    .enter()
    .append('rect')
    .attr('class', 'bar')
    .attr('fill', 'green')
    .attr('height', yScale2.rangeBand() - 2 * rectMargin)
    .attr('width', function (d, i) {       
        return xScale2(d);
    })
    .attr('x', function (d, i) {
        return padding.left;       
    })
    .attr('y', function (d, i) {       
        return yScale2(dataset.x[i]) + rectMargin;
    })

myapp.selectAll(".text")
    .data(dataset.y)
    .enter()
    .append("text")
    .attr("class", "text")
    .attr("transform", "translate(" + padding.left + "," + 0 + ")")
    .attr("x", function (d, i) {      
        return xScale2(d);
    })
    .attr("y", function (d, i) {      
        return yScale2(dataset.x[i]) + rectMargin / 2
    })
    .attr("dx", function () {
        return -20;
    })
    .attr("dy", function (d) {
        return 15;
    })

    .attr("fill", function () {
        return "blue"
    })
    .text(function (d) {
        return d;
    });
///////////#转过来

