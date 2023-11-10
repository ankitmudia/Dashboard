// SingleBar.js
import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const SingleBar = ({ data }) => {
  const chartRef = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateDimensions = () => {
      // Update the width based on the container size
      const containerWidth = chartRef.current.clientWidth;
      setWidth(containerWidth);
  
      // Update y position of x-axis labels
      const height = chartRef.current.clientHeight;
      const paddingBottom = 10;
      const svg = d3.select(chartRef.current).select("svg");
  
      svg
        .selectAll(".x-label")
        .attr("y", height + paddingBottom + 8); // Adjusted y position with extra offset
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
    const xScale = d3.scaleBand()
      .domain(data.map((_, i) => `Label ${i + 1}`)) // Use static labels like "Label 1," "Label 2," ...
      .range([0, width])
      .padding(0.8);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data) + 2])
      .range([height, 0]);

    // Create bars
    svg.selectAll(".bar")
      .data(data)
      .enter().append("rect")
      .attr("class", "bar")
      .attr("x", (_, i) => xScale(`Label ${i + 1}`))
      .attr("y", d => yScale(d))
      .attr("width", xScale.bandwidth())
      .attr("height", d => height - yScale(d))
      .attr("fill", "hsl(127.27deg 40.74% 52.35%)")
      .attr("rx", 5) // Rounded corners, adjust as needed
      .attr("ry", 5); // Rounded corners, adjust as needed

    // Create x-axis labels
    svg
      .selectAll(".x-label")
      .data(data)
      .enter()
      .append("text")
      .attr("class", "x-label")
      .attr("x", (_, i) => xScale(`Label ${i + 1}`) + xScale.bandwidth() / 2) // Centered position
      .attr("y", height+8) // Adjusted y position with extra offset
      .style("text-anchor", "middle")
      .style("font-size", "10px")
      .text((label, i) => {
        // Add your static labels (e.g., "January", "February", ...) here
        const monthLabels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return monthLabels[i];
      });

    // Add y-axis label
    svg
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - 50) // Adjusted y position
      .attr("x", 0 - height / 2)
      .attr("dy", "1em")
      .style("text-anchor", "middle")
    // .text("Y-Axis Label");

    // Remove x-axis line and ticks
    svg.select(".domain").remove();
    svg.selectAll(".tick line").remove();

  }, [width, data]);

  return <div ref={chartRef} style={{ height: "100%", width: "100%" }} />;
};

export default SingleBar;
