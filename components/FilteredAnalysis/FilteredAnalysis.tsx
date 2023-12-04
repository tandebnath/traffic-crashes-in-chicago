"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./FilteredAnalysis.module.scss";
import { data } from "@/modules/RadarData";
import * as d3 from "d3";

const FilteredAnalysis = () => {
  const chartRef = useRef(null);
  const [selectedYear, setSelectedYear] = useState<string>("2019");
  const [chartData, setChartData] = useState<any[]>([]);

  useEffect(() => {
    const temp = data.filter((i: any) => i.year === selectedYear)[0].data;
    console.log(temp);
    setChartData(temp);
  }, [selectedYear]);

  useEffect(() => {
    const svg = d3
      .select(chartRef.current)
      .append("svg")
      .attr("width", 400)
      .attr("height", 400);

    const categories = ["male", "female", "unknown"];
    // Set up scales
    const radius = 150;
    const angleSlice = (Math.PI * 2) / categories.length;

    const scale = d3
      .scaleLinear()
      .domain([0, 40]) // Adjust the domain based on your data
      .range([0, radius]);

    // Draw axes
    categories.forEach((category, index) => {
      const angle = index * angleSlice;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);

      svg
        .append("line")
        .attr("x1", 0)
        .attr("y1", 0)
        .attr("x2", x)
        .attr("y2", y)
        .attr("stroke", "gray");

      svg
        .append("text")
        .attr("x", x)
        .attr("y", y)
        .attr("dy", "0.35em")
        .text(category)
        .attr("text-anchor", "middle");
    });

    // Draw radar chart
    chartData.forEach((d: any, i) => {
      const path = categories
        .map((category, index) => {
          const angle = index * angleSlice;
          const value = +d[category];
          const x = scale(value) * Math.cos(angle);
          const y = scale(value) * Math.sin(angle);
          return `${x},${y}`;
        })
        .join(" ");

      svg
        .append("polygon")
        .attr("points", path)
        .attr("stroke", "steelblue")
        .attr("fill", "none")
        .attr("stroke-width", 2)
        .attr("transform", `translate(${radius},${radius})`)
        .classed("radar-chart-path", true);
    });
  }, [chartData]);

  return (
    <div className={styles.container}>
      <h1>A visualization-based explanation</h1>
      <div className={styles.mapContainer}>
        {selectedYear === "2019" ? (
          <iframe
            width="640px"
            style={{ minWidth: "640px" }}
            height="640px"
            src="https://clausa.app.carto.com/map/205aa376-0dec-42b4-8588-54ffa2eac93d"
          />
        ) : (
          <iframe
            width="640px"
            style={{ minWidth: "640px" }}
            height="640px"
            src="https://clausa.app.carto.com/map/c0de751b-4436-4e80-8cad-b6ef33e3de59"
          />
        )}
        <div className={styles.content}>
          <span className={styles.text}>
            In the year{" "}
            <span className={styles.emphasizedText}>{selectedYear}</span>, the
            city of Chicago had{" "}
            <span className={styles.emphasizedText}>
              {selectedYear === "2019" ? "117,760" : "108,399"}
            </span>{" "}
            traffic crashes.
          </span>
          <p className={styles.subText}>
            As per Illinois statute, only crashes with a property damage value
            of $1,500 or more or involving bodily injury to any person(s) and
            that happen on a public roadway and that involve at least one moving
            vehicle, except bike dooring, are considered reportable crashes.
            However, the Chicago Police Department records every reported
            traffic crash event, regardless of the statute of limitations.
          </p>
        </div>
      </div>
      <p className={`${styles.text} ${styles.hitAndRunText}`}>
        Of these,{" "}
        <span className={styles.emphasizedText}>
          {selectedYear === "2019" ? "31,953" : "35,556"}
        </span>{" "}
        were Hit and Run cases.
      </p>
      <p>So who's behind the wheels?</p>
      <div ref={chartRef}></div>
    </div>
  );
};

export default FilteredAnalysis;
