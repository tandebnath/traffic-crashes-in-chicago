import styles from "./ChrisViz.module.scss";
import { VegaLite } from "react-vega";

const ChrisViz = () => {
  const injury2019 = {
    data: {
      url: "https://raw.githubusercontent.com/chuzesta/chuzesta/main/crashes_2019.csv",
    },
    title: { text: "2019 Reported Injuries", fontSize: 25 },
    width: 400,
    height: 250,
    background: "#fcf0e1",
    mark: {
      type: "bar",
      tooltip: true,
    },
    transform: [{ filter: "datum.MOST_SEVERE_INJURY !== null" }],
    encoding: {
      x: {
        aggregate: "sum",
        field: "INJURIES_TOTAL",
        type: "quantitative",
        title: "Total Injuries",
        axis: { grid: true, labelFontSize: 14, titleFontSize: 20 },
      },
      y: {
        field: "CRASH_DAY_OF_WEEK",
        type: "ordinal",
        title: "Day of the Week",
        axis: { grid: true, labelFontSize: 14, titleFontSize: 20 },
      },
      color: { field: "MOST_SEVERE_INJURY", title: "Injury", legend: null },
      tooltip: [
        { field: "MOST_SEVERE_INJURY", title: "Injury Type" },
        {
          field: "INJURIES_TOTAL",
          aggregate: "sum",
          title: "Total Injuries",
          type: "quantitative",
        },
      ],
    },
    config: {
      view: { stroke: null },
      axis: { grid: false },
    },
  };

  const injury2022 = {
    data: {
      url: "https://raw.githubusercontent.com/chuzesta/chuzesta/main/crashes_2022.csv",
    },
    title: { text: "2022 Reported Injuries", fontSize: 25 },
    width: 400,
    height: 250,
    background: "#fcf0e1",
    mark: {
      type: "bar",
      tooltip: true,
    },
    transform: [{ filter: "datum.MOST_SEVERE_INJURY !== null" }],
    encoding: {
      x: {
        aggregate: "sum",
        field: "INJURIES_TOTAL",
        type: "quantitative",
        title: "Total Injuries",
        axis: { grid: true, labelFontSize: 14, titleFontSize: 20 },
      },
      y: {
        field: "CRASH_DAY_OF_WEEK",
        type: "ordinal",
        title: "Day of the Week",
        axis: { grid: true, labelFontSize: 14, titleFontSize: 20 },
      },
      color: {
        field: "MOST_SEVERE_INJURY",
        legend: "Injury Type",
        title: "Injury Type",
        labelFontSize: 15,
      },
      tooltip: [
        { field: "MOST_SEVERE_INJURY", title: "Injury Type" },
        {
          field: "INJURIES_TOTAL",
          aggregate: "sum",
          title: "Total Injuries",
          type: "quantitative",
        },
      ],
    },
    config: {
      view: { stroke: null },
      axis: { grid: false },
      legend: {
        orient: "left",
        title: "Injury Type",
        padding: 5,
        titlePadding: 5,
        labelFontSize: 10,
        symbolSize: 100,
      },
    },
  };

  const causes2019 = {
    data: {
      url: "https://raw.githubusercontent.com/chuzesta/chuzesta/main/crashes_2019.csv",
    },
    width: 750,
    height: 375,
    title: { text: "Damage impact 2019", fontSize: 25 },
    background: "#fcf0e1",
    transform: [{ calculate: "1", as: "Crashes" }],
    mark: {
      type: "circle",
      opacity: 0.8,
      stroke: "black",
      strokeWidth: 1,
    },
    encoding: {
      x: {
        field: "PRIM_CONTRIBUTORY_CAUSE",
        type: "ordinal",
        title: "Primary Cause",
        axis: { grid: true, labelFontSize: 11, titleFontSize: 20 },
      },
      y: {
        field: "DAMAGE",
        type: "nominal",
        axis: { title: "Damage Caused", labelFontSize: 14, titleFontSize: 20 },
      },
      size: {
        field: "Crashes",
        type: "quantitative",
        aggregate: "sum",
        title: "Crashes",
        legend: { clipHeight: 30 },
        scale: { rangeMax: 5000 },
      },
      color: { field: "DAMAGE", type: "nominal", legend: true },
      tooltip: [
        { field: "Crashes", aggregate: "sum", title: "Number of Crashes" },
        {
          field: "PRIM_CONTRIBUTORY_CAUSE",
          title: "Primary Contributory Cause",
        },
      ],
    },
  };

  const causes2022 = {
    data: {
      url: "https://raw.githubusercontent.com/chuzesta/chuzesta/main/crashes_2022.csv",
    },
    width: 750,
    height: 375,
    title: { text: "Damage impact 2022", fontSize: 25 },
    background: "#fcf0e1",
    transform: [{ calculate: "1", as: "Crashes" }],
    mark: {
      type: "circle",
      opacity: 0.8,
      stroke: "black",
      strokeWidth: 1,
    },
    encoding: {
      x: {
        field: "PRIM_CONTRIBUTORY_CAUSE",
        type: "ordinal",
        title: "Primary Cause",
        axis: { grid: true, labelFontSize: 11, titleFontSize: 20 },
      },
      y: {
        field: "DAMAGE",
        type: "nominal",
        axis: { title: " Damage Caused", labelFontSize: 14, titleFontSize: 20 },
      },
      size: {
        field: "Crashes",
        type: "quantitative",
        aggregate: "sum",
        title: "Crashes",
        legend: { clipHeight: 30 },
        scale: { rangeMax: 5000 },
      },
      color: { field: "DAMAGE", type: "nominal", legend: false },
      tooltip: [
        { field: "Crashes", aggregate: "sum", title: "Number of Crashes" },
        {
          field: "PRIM_CONTRIBUTORY_CAUSE",
          title: "Primary Contributory Cause",
        },
      ],
    },
  };

  return (
    <div className={styles.container}>
      <div className={styles.injuriesContainer}>
        <div>
          <span className={styles.text}>
            Types of Injuries and Their Distribution Across the Week
          </span>
          <p className={styles.subText}>
            We see how the injuries in the reported crashes are distributed
            across the different days of the week. We observed that in both
            years (2019 and 2022), most of the injuries were reported during the
            weekends (between Friday and Sunday) and lower during the weekdays.
            In addition, the data also showed that fewer crashes resulted to
            fatal injuries. The majority of crashes resulted to
            non-incapacitating, non-evident and a few incapacitating injuries.
          </p>
        </div>
        <div className={styles.viz}>
          <VegaLite spec={injury2019} />
          <VegaLite spec={injury2022} />
        </div>
      </div>
      <div className={styles.causesContainer}>
        <div>
          <span className={styles.text}>
            Comparing the Primary Causes of Crashes and their Respective Damages
          </span>
          <p className={styles.subText}>
            For both years, we wanted to compare the major causes of the
            reported crashes and evaluate the damage involved in these
            incidents. The damages were classified into 3 categories, (below
            500, 500-1500 and above 1500 dollars). In both years, the majority
            of the accidents involve damages that are over 1500 dollars.
            Interestingly, the primary cause of the majory of crashes in both
            years was not determined. However, other major causes of the
            accidents included failing to yield, following too closely, failing
            to reduce speed, improper lane usage, turning and overtaking.
          </p>
        </div>
        <VegaLite spec={causes2019} />
        <VegaLite spec={causes2022} />
      </div>
    </div>
  );
};

export default ChrisViz;
