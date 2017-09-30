queue()
    .defer(d3.json, "maps/zh-mainland-provinces.topo.json")
    .defer(d3.json, "maps/zh-chn-twn.topo.json")
    .await(drawMap);
var projection = d3.geo.mercator()
    .center([116, 39])
    .scale(600);
var width = 800,
    height = 550;
var svg = d3.select("#map").append("svg")
    .attr("width", width)
    .attr("height", height);
var path = d3.geo.path()
    .projection(projection);
function drawMap(error, mainland, taiwan, hkmacau) {
    drawProvinces(error, mainland);
    drawTaiwan(error, taiwan);
}
function drawProvinces(error, cn) {
    svg.append("g")
        .attr("class", "map")
        .append("g")
        .attr("class", "mainland")
        .selectAll("path")
        .data(topojson.feature(cn, cn.objects.provinces).features)
        .enter()
        .append("path")
        .attr("d", path)
        .attr("id", function (d) { return d.id; })
        .attr("class", "province")
        .attr("fill", "#7DB344")
        .attr("stroke", "#fafafa")
        .attr("stroke-width", "0.55");
}
function drawTaiwan(error, cn) {
    svg.select(".map")
        .append('g')
        .attr("class", "taiwan")
        .selectAll("path")
        .data(topojson.feature(cn, cn.objects.layer1).features.filter(function (d) { return d.properties.GU_A3 === 'TWN'; }))
        .enter()
        .append("path")
        .attr("d", path)
        .attr("id", function (d) { return d.id; })
        .attr("class", "province")
        .attr("fill", "#7DB344")
        .attr("stroke", "#fafafa")
        .attr("stroke-width", "0.55");
}



document.querySelector('body').addEventListener('mouseover', function (e) {
    var tips = document.querySelector('#tips');
    var target = e.target;
    if (target.classList.contains('province')) {
        target.setAttribute('fill', '#278E04');
        tips.style.display = 'block';
        tips.style.left = e.pageX + 'px';
        tips.style.top = e.pageY + 'px';
    } else {
        tips.style.display = 'none';
    }
}, false);
document.querySelector('body').addEventListener('mouseout', function (e) {
    var tips = document.querySelector('#tips');
    var target = e.target;
    tips.style.display = 'none';
    if (target.classList.contains('province')) {
        target.setAttribute('fill', '#7DB344');
    }
}, false);


