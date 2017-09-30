import '../style/index.scss';

import React from 'react';
import ReactDOM from 'react-dom';


// import {select,selectAll} from 'd3-selection';
// import {geoMercator,geoPath} from 'd3-geo';
// import {json} from 'd3-request';


// class Page extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//             <div className="not-find">
//                 <div className="G-img-wrap">
//                     <img className="img" src="http://res.imtt.qq.com/tagapp/img/404.png" />
//                 </div>
//                 <p className="desc">网络端口，无法打开网页</p>
//                 <a className="redirect">重新加载</a>
//             </div>
//         );
//     }
// }






// var width = 1024;
// var height = 768;
// var width = 360;
// var height = 330;


// var svg = select("#container").append("svg")
//     .attr("width", width)
//     .attr("height", height)
//     .append("g")
//     .attr("transform", "translate(0,0)");

// var projection = geoMercator()
//     .center([107, 31])
//     .scale(700)
//     .translate([width / 2, height / 2]);

// var path = geoPath()
//     .projection(projection);


// json("https://gist.githubusercontent.com/zhulinpinyu/8e18d57b3b18fb74e776/raw/efbb74cfea53decb1fe7d6bf279fd351c28c4810/china_simplify.json", function (error, root) {
//     if (error) return console.error(error);

//     //添加提示
//     var tooltip = select("body")
//         .append("div")
//         .attr("class", "tooltip")
//         .style("opacity", 0);

//     //绘制地图
//     svg.selectAll("path")
//         .data(root.features)
//         .enter()
//         .append("path")
//         .attr("stroke", "#f00")
//         .attr("stroke-width", 1)
//         .attr("fill", function (d, i) {
//             return "green";
//         })
//         .attr("d", path)
//         .attr("id", function (d) {
//             console.log(d.properties.id, d.properties.name);
//         })
//         .on("mouseover", function (d, i) {
//             select(this).attr("fill", "#00f");

//         })
//         .on("mouseout", function (d, i) {
//             select(this).attr("fill", "#FF0");
//             tooltip.transition()
//                 .duration(500)
//                 .style("opacity", 0);
//         });

// });


// import * as d3 from "d3";

// //..柱状图
// //画布大小
// var width = 500;
// var height = 300;

// //在 body 里添加一个 SVG 画布   
// var svg = d3.select("#container")
//     .append("svg")
//     .attr("width", width)
//     .attr("height", height);

// //画布周边的空白
// var padding = { left: 30, right: 30, top: 30, bottom: 30 };
// //定义一个数组
// var dataset = [10, 20, 30, 40, 33, 24, 12, 5];

// //x轴的比例尺
// var xScale = d3.scale.ordinal()
//     .domain(d3.range(dataset.length))
//     .rangeRoundBands([0, width - padding.left - padding.right]);

// //y轴的比例尺
// var yScale = d3.scale.linear()
//     .domain([0, d3.max(dataset)])
//     .range([height - padding.top - padding.bottom, 0]);


// //定义x轴
// var xAxis = d3.svg.axis()
//     .scale(xScale)
//     .orient("bottom");

// //定义y轴
// var yAxis = d3.svg.axis()
//     .scale(yScale)
//     .orient("left");

// //矩形之间的空白
// var rectPadding = 4;

// //添加矩形元素
// var rects = svg.selectAll(".MyRect")
//     .data(dataset)
//     .enter()
//     .append("rect")
//     .attr("class", "MyRect")
//     .attr("transform", "translate(" + padding.left + "," + padding.top + ")")
//     .attr("x", function (d, i) {
//         return xScale(i) + rectPadding / 2;
//     })
//     .attr("y", function (d) {
//         return yScale(d);
//     })
//     .attr("fill", function () {
//         return "red"
//     })
//     .attr("width", xScale.rangeBand() - rectPadding)
//     .attr("height", function (d) {
//         return height - padding.top - padding.bottom - yScale(d);
//     });



// var testData = [10, 20, 30];
// var rects = svg.selectAll(".MyRect")
//     .data(testData)
//     .enter()
//     .append("rect")
//     .attr("class", "MyRect")
//     .attr("transform", "translate(" + padding.left + "," + padding.top + ")")
//     .attr("x", function (d, i) {
//         //return xScale(i) + rectPadding / 2;       
//         return 4;
//     })
//     .attr("y", function (d) {
//         //return yScale(d);
//         return yScale(d);
//     })
//     .attr("fill",function(){
//         return "red"
//     })
//     .attr("width", function(d){
//         //alert(xScale.rangeBand() - rectPadding);//38;        
//         return height - padding.top - padding.bottom - yScale(d)
//     })
//     .attr("height", function (d) {
//         //return height - padding.top - padding.bottom - yScale(d);
//         return xScale.rangeBand() - rectPadding;
//     });


// //添加文字元素
// var texts = svg.selectAll(".MyText")
//     .data(dataset)
//     .enter()
//     .append("text")
//     .attr("class", "MyText")
//     .attr("transform", "translate(" + padding.left + "," + padding.top + ")")
//     .attr("x", function (d, i) {
//         return xScale(i) + rectPadding / 2;
//     })
//     .attr("y", function (d) {
//         return yScale(d);
//     })
//     .attr("dx", function () {
//         return (xScale.rangeBand() - rectPadding) / 2;
//     })
//     .attr("dy", function (d) {
//         return 20;
//     })
//     .attr("fill", function () {
//         return "blue"
//     })
//     .text(function (d) {
//         return d;
//     });


// //添加x轴
// svg.append("g")
//     .attr("class", "axis")
//     .attr("transform", "translate(" + padding.left + "," + (height - padding.bottom) + ")")
//     .attr("fill", function () {
//         return "green"
//     })
//     .call(xAxis);

// //添加y轴
// svg.append("g")
//     .attr("class", "axis")
//     .attr("transform", "translate(" + padding.left + "," + padding.top + ")")
//     .attr("fill", function () {
//         return "orange"
//     })
//     .call(yAxis);




////////////#研究
var width = 500, height = 300;
// SVG画布边缘与图表内容的距离
var padding = { top: 50, right: 50, bottom: 50, left: 50 };
// // 创建一个分组用来组合要画的图表元素
// var main = d3.select('#container').append('g')
//  // 给这个分组加上main类
//  .classed('main')
//  // 设置该分组的transform属性
//  .attr('transform', "translate(" + padding.top + ',' + padding.left + ')');


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
// 定义x轴和y轴
var xAxis = d3.svg.axis()
    .scale(xScale)
    .orient('bottom');
var yAxis = d3.svg.axis()
    .scale(yScale)
    .orient('left');
// 添加坐标轴元素
main.append('g')
    .attr('class', 'axis')
    .attr('transform', 'translate(' + padding.left + ',' + (height - padding.bottom - padding.top) + ')')
    .call(xAxis);

main.append('g')
    .attr('class', 'axis')
    .attr('transform', 'translate(' + padding.left + ',0)')
    .call(yAxis);
// 矩形之间的间距
var rectMargin = 10;
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
//添加文字元素
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
// ////////////#研究
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
// var xScale2 = d3.scale.ordinal()
//     .domain(dataset.x)
//     .rangeRoundBands([0, width - padding.left - padding.right], 0);
// var yScale2 = d3.scale.linear()
//     .domain([0, d3.max(dataset.y)])
//     .range([height - padding.top - padding.bottom, padding.top]);
var xScale2 = d3.scale.linear()
    .domain([0, d3.max(dataset.y)])
    .range([0, width - padding.left - padding.right]);
var yScale2 = d3.scale.ordinal()
    .domain(dataset.x)
    .rangeRoundBands([0, height - padding.top - padding.bottom], 0);
// 定义x轴和y轴
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

    // .attr('x', function (d, i) {
    //     return xScale(dataset.x[i]) + rectMargin + padding.left;
    // })
    // .attr('y', function (d, i) {
    //     return yScale(d);
    // })
    // .attr('width', xScale.rangeBand() - 2 * rectMargin)
    // .attr('height', function (d, i) {
    //     return height - padding.top - padding.bottom - yScale(d);
    // })
    .attr('fill', 'green')
    .attr('height', yScale2.rangeBand() - 2 * rectMargin)
    .attr('width', function (d, i) {
        //return width - padding.left - padding.right - xScale2(d);
        return xScale2(d);
    })
    .attr('x', function (d, i) {
        return padding.left;
        // return xScale2(d);
    })
    .attr('y', function (d, i) {
        //return yScale2(dataset.x[i]) + rectMargin + padding.left;
        return yScale2(dataset.x[i]) + rectMargin;
    })

myapp.selectAll(".text")
    .data(dataset.y)
    .enter()
    .append("text")
    .attr("class", "text")
    .attr("transform", "translate(" + padding.left + "," + 0 + ")")
    .attr("x", function (d, i) {
        // return xScale(dataset.x[i]) + rectMargin / 2;
        //return yScale2(dataset.x[i]) + rectMargin / 2;
        return xScale2(d);
    })
    .attr("y", function (d, i) {
        //return yScale(d);
        //return 100;    
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



// var svg = d3.select("#container").append("svg")
//     .attr("width", width)
//     .attr("height", height)
//     .append("g")
//     .attr("transform", "translate(0,0)");

// var projection = d3.geo.mercator()
//     // .center([107, 31])
//     .center([104, 38])
//     .scale(320)
//     .translate([width / 2, height / 2]);

// var path = d3.geo.path()
//     .projection(projection);

// d3.json("https://gist.githubusercontent.com/zhulinpinyu/8e18d57b3b18fb74e776/raw/efbb74cfea53decb1fe7d6bf279fd351c28c4810/china_simplify.json", function (error, root) {
//     if (error) return console.error(error);

//     //添加提示
//     var tooltip = d3.select("body")
//         .append("div")
//         .attr("class", "tooltip")
//         .style("opacity", 0);

//     //绘制地图
//     svg.selectAll("path")
//         .data(root.features)
//         .enter()
//         .append("path")
//         .attr("stroke", "#f00")
//         .attr("stroke-width", 1)
//         .attr("fill", function (d, i) {
//             return "green";
//         })
//         .attr("d", path)
//         .attr("id", function (d) {
//             console.log(d.properties.id, d.properties.name);
//         })
//         .on("mouseover", function (d, i) {
//             d3.select(this).attr("fill", "#00f");

//         })
//         .on("mouseout", function (d, i) {
//             d3.select(this).attr("fill", "#FF0");
//             tooltip.transition()
//                 .duration(500)
//                 .style("opacity", 0);
//         });

// });












// ReactDOM.render(
//     <Page />,
//     document.getElementById('container')
// );