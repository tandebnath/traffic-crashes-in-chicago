import { VegaLite } from "react-vega";
import styles from "./SherryViz.module.scss";

const SherryViz = () => {
  const spec = {
    title: "2019",
    data: {
      url: "https://raw.githubusercontent.com/chuzesta/chuzesta/main/crashes_2019.csv",
    },
    mark: "rect",
    encoding: {
      x: {
        field: "CRASH_HOUR",
        type: "quantitative",
        axis: {
          title: "Hour of the Day",
          labelExpr: "datum.value + ':00'",
        },
      },
      y: {
        field: "CRASH_DAY_OF_WEEK",
        type: "ordinal",
        axis: { title: "Day of the Week" },
      },
      color: {
        aggregate: "count",
        type: "quantitative",
        scale: { scheme: "greenblue" },
        title: "Number of Crashes",
      },
      tooltip: [
        { field: "CRASH_HOUR", type: "quantitative", title: "Hour" },
        { field: "CRASH_DAY_OF_WEEK", type: "ordinal", title: "Day of Week" },
        { aggregate: "count", title: "Number of Crashes" },
      ],
    },
    width: 375,
    height: 300,
    config: { background: "#FCF0E1" },
  };

  const spec1 = {
    title: "Heatmap of 2019",
    data: {
      url: "https://raw.githubusercontent.com/chuzesta/chuzesta/main/crashes_2019.csv",
    },
    mark: "rect",
    encoding: {
      x: {
        field: "CRASH_HOUR",
        type: "ordinal",
        axis: { title: "Hour of the Day", labelExpr: "datum.value + ':00'" },
        sort: [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
        ],
      },
      y: {
        field: "CRASH_DAY_OF_WEEK",
        type: "ordinal",
        axis: { title: "Day of the Week" },
      },
      color: {
        aggregate: "count",
        type: "quantitative",
        scale: { scheme: "greenblue" },
        title: "Number of Crashes",
      },
      tooltip: [
        { field: "CRASH_HOUR", type: "ordinal", title: "Hour" },
        { field: "CRASH_DAY_OF_WEEK", type: "ordinal", title: "Day of Week" },
        { aggregate: "count", title: "Number of Crashes" },
      ],
    },
    config: { view: { stroke: "transparent" }, background: "#FCF0E1" },
    width: 400,
    height: 300,
  };

  const spec2 = {
    title: "Heatmap of 2022",
    data: {
      url: "https://raw.githubusercontent.com/chuzesta/chuzesta/main/crashes_2022.csv",
    },
    mark: "rect",
    encoding: {
      x: {
        field: "CRASH_HOUR",
        type: "ordinal",
        axis: { title: "Hour of the Day", labelExpr: "datum.value + ':00'" },
        sort: [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
        ],
      },
      y: {
        field: "CRASH_DAY_OF_WEEK",
        type: "ordinal",
        axis: { title: "Day of the Week" },
      },
      color: {
        aggregate: "count",
        type: "quantitative",
        scale: { scheme: "greenblue" },
        title: "Number of Crashes",
      },
      tooltip: [
        { field: "CRASH_HOUR", type: "ordinal", title: "Hour" },
        { field: "CRASH_DAY_OF_WEEK", type: "ordinal", title: "Day of Week" },
        { aggregate: "count", title: "Number of Crashes" },
      ],
    },
    config: { view: { stroke: "transparent" }, background: "#FCF0E1" },
    width: 400,
    height: 300,
  };

  return (
    <div className={styles.container}>
      <div className={styles.heatmapContainer}>
        <div>
          <span className={styles.text}>
            Heatmap of Crashes by Day of the Week and Hour of the Day
          </span>
          <p className={styles.subText}>
            A heatmap to analyze the frequency of crashes by day of the week and
            hour of the day, which can provide insights into when crashes are
            most likely to occur.
          </p>
        </div>
        <div className={styles.viz}>
          <VegaLite spec={spec1} />
          <VegaLite spec={spec2} />
        </div>
      </div>
    </div>
  );
};

export default SherryViz;
