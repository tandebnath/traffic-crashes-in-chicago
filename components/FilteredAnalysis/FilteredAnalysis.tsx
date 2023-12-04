"use client";
import React from "react";
import styles from "./FilteredAnalysis.module.scss";

const FilteredAnalysis = () => {
  const [selectedYear, setSelectedYear] = React.useState<string>("2019");

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
        Of these, <span className={styles.emphasizedText}>{selectedYear === "2019" ? "31,953" : "35,556"}</span>{" "}
        were Hit and Run cases.
      </p>
      <p>
        So who's behind the wheels?
      </p>
    </div>
  );
};

export default FilteredAnalysis;
