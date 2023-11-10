// Charts.js
import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const Chart = ({ data }) => {
  const chartRef = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateDimensions = () => {
      // Update the width based on the container size
      const containerWidth = chartRef.current.clientWidth;
      setWidth(containerWidth);
    };

    // Initial dimensions setup
    updateDimensions();

    // Update dimensions on window resize
    window.addEventListener("resize", updateDimensions);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  useEffect(() => {
    // Remove any existing SVG content
    d3.select(chartRef.current).selectAll("*").remove();

    // Use the dynamically calculated width
    const height = chartRef.current.clientHeight;
    const paddingBottom = 10; // Padding at the bottom

    // Create a new SVG element
    const svg = d3.select(chartRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height + paddingBottom) // Adjusted height with padding
      .append("g");

    // Create scales for x and y axes
    const xScale = d3.scaleLinear().domain([0, data.length - 1]).range([0, width]);
    const yScale = d3.scaleLinear().domain([0, d3.max(data)+2]).range([height, 0]);

    // Manually create x-axis labels
    svg
  .selectAll(".x-label")
  .data(data)
  .enter()
  .append("text")
  .attr("class", "x-label")
  .attr("x", (d, i) => i === data.length - 1 ? xScale(i) - 5 : xScale(i)) // Adjusted x position for the last label
  .attr("y", height + paddingBottom)
  .style("text-anchor", (d, i) => i === data.length - 1 ? "end" : "start") // Adjusted text-anchor for the last label
  .style("font-size", "10px")
  .text((d, i) => i + 1);

    // Create a line generator with a curved line
    const line = d3.line()
      .x((d, i) => xScale(i))
      .y((d) => yScale(d))
      .curve(d3.curveMonotoneX);

    // Append the curved line to the chart
    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "hsl(127.27deg 40.74% 52.35%)")
      .attr("stroke-width", 1.5)
      .attr("d", line);

    // Add x-axis label
    svg
      .append("text")
      .attr("transform", `translate(${width / 2}, ${height + 35 + paddingBottom})`) // Adjusted y position
      .style("text-anchor", "middle")
    // .text("X-Axis Label");

    // Add y-axis label
    svg
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - 50) // Adjusted y position
      .attr("x", 0 - height / 2)
      .attr("dy", "1em")
      .style("text-anchor", "middle")
    // .text("Y-Axis Label");
  }, [width, data]);

  return <div ref={chartRef} style={{ height: "100%", width: "100%" }} />;
};

export default Chart;
