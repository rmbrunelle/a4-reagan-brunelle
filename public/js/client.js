
console.log("in client script")

    d3.json('../uspopulation.json').then((data)=> { console.log(data)
    console.log("in json data")
    var canvasTest = d3.select("body").append("svg")
        .attr("width", 750)
        .attr("height", 3050)
        console.log("before rect")

    canvasTest.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("width", function(d) { return 749*(d.value / 331893745);})
        .attr("height", 50)
        .attr("y", function(d, i) { return i*50;})
        .attr("fill", "blue")
        console.log("before text")

    canvasTest.selectAll("text")
        .data(data)
        .enter()
        .append("text")
        .attr("fill", "orange")
        .attr("y", function(d, i) {return i * 50;})
        .text(function(d) {return d.date;})
        console.log("after text")
    })

console.log("end of script")