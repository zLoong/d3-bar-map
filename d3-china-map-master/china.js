
var width = 1024;
var height = 768;
var svg = d3.select("#china-map").append("svg")
  .attr("width", width)
  .attr("height", height)
  .append("g")
  .attr("transform", "translate(0,0)");
var projection = d3.geo.mercator()
  .center([107, 31])
  .scale(700)
  .translate([width / 2, height / 2]);
var path = d3.geo.path()
  .projection(projection);

d3.json("https://gist.githubusercontent.com/zhulinpinyu/8e18d57b3b18fb74e776/raw/efbb74cfea53decb1fe7d6bf279fd351c28c4810/china_simplify.json", function (error, root) {
  if (error) return console.error(error);
  var tooltip = d3.select("body")
    .append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);
  svg.selectAll("path")
    .data(root.features)
    .enter()
    .append("path")
    .attr("stroke", "#f00")
    .attr("stroke-width", 1)
    .attr("fill", function (d, i) {
      return "green";
    })
    .attr("d", path)
    .on("mouseover", function (d, i) {
      d3.select(this).attr("fill", "#00f");
      tooltip.transition()
        .text(d.properties.name)
        .duration(200)
        .style("opacity", .9);
    })
    .on("mouseout", function (d, i) {
      d3.select(this).attr("fill", "#FF0");
      tooltip.transition()
        .duration(500)
        .style("opacity", 0);
    });
  svg.selectAll("text")
    .data(root.features)
    .enter()
    .append("text")
    .text(function (d) { return d.properties.name })
    .attr({
      transform: function (d) { return "translate(" + path.centroid(d) + ")"; },
      "text-anchor": "middle",
      "font-size": "10px"
    });
});
