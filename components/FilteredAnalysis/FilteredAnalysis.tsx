"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./FilteredAnalysis.module.scss";
import { data } from "@/modules/RadarData";
import { dailyData } from "@/modules/DailyData";
import CustomRadarChart from "../CustomRadarChart/CustomRadarChart";
import CustomPieChart from "../CustomPieChart/CustomPieChart";
import Select from "react-select";

const options = [
  { value: "2019", label: "Year 2019" },
  { value: "2022", label: "Year 2022" },
];

const FilteredAnalysis = () => {
  const chartRef = useRef(null);
  const [selectedYear, setSelectedYear] = useState<string>("2019");
  const [chartData, setChartData] = useState<any[]>(data[0].data);
  const [pieChartData, setPieChartData] = useState<any[]>(dailyData[0].data);

  useEffect(() => {
    let temp = data.filter((el: any) => el.year === selectedYear)[0].data;
    setChartData(temp);
    let temp2 = dailyData.filter((el: any) => el.year === selectedYear)[0].data;
    setPieChartData(temp2);
  }, [selectedYear]);


  return (
    <div className={styles.container}>
      {/* <h1>A visualization-based explanation</h1> */}
      <div className={styles.select}>
        <Select
          options={options}
          placeholder="Select Year"
          defaultValue={{ value: "2019", label: "Year 2019" }}
          onChange={(value)=> setSelectedYear(value.value)}
        />
      </div>
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
            In{" "}
            <span className={styles.emphasizedText}>{selectedYear}</span>,
            {" "}there were a total of
            <span className={styles.emphasizedText}>
              {selectedYear === "2019" ? "117,760" : "108,399"}
            </span>{" "}
            traffic-related crashes in the city of Chicago.
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
      <div className={styles.radarContainer}>
        <p className={styles.text}>Well, who's behind the wheels?</p>
        <span className={styles.subText}>
          An age-wise distribution reveals the majority of crashes occur when an
          18-39 year old is driving.{" "}
        </span>
        <span className={styles.subText}>
          Additionally, fun (?) fact: a 90+ year old driver was involved in{" "}
          <b>{selectedYear === "2019" ? "229" : "129"}</b> crashes.
        </span>
        <CustomRadarChart data={chartData} />
      </div>
      {/* <div className={styles.dailyContainer}>
        <p className={styles.text}>On which days of the week did these crashes usually occur?</p>
        <span className={styles.subText}>
          Seems pretty even, right?
        </span>
        <CustomPieChart data={pieChartData} />
      </div> */}
    </div>
  );
};

export default FilteredAnalysis;
