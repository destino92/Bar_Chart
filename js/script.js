var data = [4, 8, 15, 16, 23, 42];

var x = d3.scale.linear()
    .domain([0, d3.max(data)])
    .range([0, 420]);

// Select the chart container using a class selector
d3.select(".chart")
  // Initiate the data join by defining the selection
  // to wich we will join data.
  .selectAll("div")
    // Join data to the selection
    .data(data)
  .enter().append("div")
    .style("width", function(d) { return x(d) + "px"; })
    .text(function(d) { return d; });
