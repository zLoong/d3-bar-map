import '../style/index.scss';

import React from 'react';
import ReactDOM from 'react-dom';


import * as d3 from "d3";

//..柱状图
var width = 500;
var height = 300;
var svg = d3.select("#container")
    .append("svg")
    .attr("width", width)
    .attr("height", height);
var padding = { left: 30, right: 30, top: 30, bottom: 30 };
var rectPadding = 4;
var dataset = [10, 20, 30, 40, 33, 24, 12, 5];
//x轴的比例尺
//var xScale = d3.scale.ordinal()
var xScale = d3.scaleBand()
    .domain(d3.range(dataset.length))
    //.rangeRoundBands([0, width - padding.left - padding.right]);
    .rangeRound([0, width - padding.left - padding.right]);
//y轴的比例尺
//var yScale = d3.scale.linear()
var yScale = d3.scaleLinear()
    .domain([0, d3.max(dataset)])
    .range([height - padding.top - padding.bottom, 0]);

// var xAxis = d3.svg.axis()
//     .scale(xScale)
//     .orient("bottom");
// var yAxis = d3.svg.axis()
//     .scale(yScale)
//     .orient("left");
var xAxis = d3.axisBottom(xScale);
var yAxis = d3.axisLeft(yScale);

//添加矩形元素
var rects = svg.selectAll(".MyRect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("class", "MyRect")
    .attr("transform", "translate(" + padding.left + "," + padding.top + ")")
    .attr("x", function (d, i) {
        return xScale(i) + rectPadding / 2;
    })
    .attr("y", function (d) {
        return yScale(d);
    })
    .attr("fill", function () {
        return "red"
    })
    //.attr("width", xScale.rangeBand() - rectPadding)
    .attr("width", xScale.bandwidth() - rectPadding)
    .attr("height", function (d) {
        return height - padding.top - padding.bottom - yScale(d);
    });
//添加文字元素
var texts = svg.selectAll(".MyText")
    .data(dataset)
    .enter()
    .append("text")
    .attr("class", "MyText")
    .attr("transform", "translate(" + padding.left + "," + padding.top + ")")
    .attr("x", function (d, i) {
        return xScale(i) + rectPadding / 2;
    })
    .attr("y", function (d) {
        return yScale(d);
    })
    .attr("dx", function () {
        // return (xScale.rangeBand() - rectPadding) / 2;
        return (xScale.bandwidth() - rectPadding) / 2;
    })
    .attr("dy", function (d) {
        return 20;
    })
    .attr("fill", function () {
        return "blue"
    })
    .text(function (d) {
        return d;
    });    