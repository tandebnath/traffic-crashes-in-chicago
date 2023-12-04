import { VegaLite } from "react-vega";
import styles from "./DivyaViz.module.scss";

const DivyaViz = () => {
  const spec1 = {
    data: {
      url: "https://raw.githubusercontent.com//chuzesta//chuzesta//main//crashes_2019.csv",
      format: { type: "csv" },
    },
    hconcat: [
      {
        width: 350,
        height: 200,
        mark: "bar",
        selection: {
          weatherSelect: {
            type: "single",
            fields: ["WEATHER_CONDITION"],
            bind: {
              input: "select",
              options: [
                null,
                "CLEAR",
                "RAIN",
                "SNOW",
                "FOG/SMOKE/HAZE",
                "SLEET/HAIL",
                "FREEZING RAIN/DRIZZLE",
                "BLOWING SNOW",
                "SEVERE CROSSWINDS",
                "BLOWING SAND, SOIL, DIRT",
              ],
              name: "Select Weather: ",
            },
          },
        },
        encoding: {
          x: {
            field: "WEATHER_CONDITION",
            type: "nominal",
            axis: { title: "Weather Type" },
          },
          y: {
            aggregate: "count",
            type: "quantitative",
            axis: { title: "Total Crashes" },
          },
        },
      },
      {
        width: 350,
        height: 200,
        transform: [{ filter: { selection: "weatherSelect" } }],
        mark: "line",
        encoding: {
          x: {
            field: "CRASH_MONTH",
            type: "ordinal",
            axis: { title: "Month of the Year" },
          },
          y: {
            aggregate: "count",
            type: "quantitative",
            axis: { title: "Crashes Count" },
          },
          color: {
            field: "WEATHER_CONDITION",
            type: "nominal",
            legend: { title: "Weather Conditions" },
          },
        },
      },
    ],
    config: { background: "#FCF0E1" },
  };

  const spec2 = {
    data: {
      url: "https://raw.githubusercontent.com//chuzesta//chuzesta//main//crashes_2019.csv",
      format: { type: "csv" },
    },
    hconcat: [
      {
        width: 350,
        height: 200,
        mark: "point",
        selection: { brush: { type: "interval", encodings: ["x"] } },
        encoding: {
          x: {
            field: "POSTED_SPEED_LIMIT",
            type: "quantitative",
            axis: { title: "Posted Speed Limit (mph)" },
          },
          y: {
            field: "INJURIES_TOTAL",
            type: "quantitative",
            axis: { title: "Total Injuries" },
          },
        },
      },
      {
        width: 350,
        height: 200,
        mark: "bar",
        encoding: {
          x: {
            field: "POSTED_SPEED_LIMIT",
            type: "quantitative",
            scale: { domain: { selection: "brush" } },
            axis: { title: "Posted Speed Limit (mph)" },
          },
          y: {
            aggregate: "count",
            type: "quantitative",
            axis: { title: "Number of Crashes" },
          },
        },
      },
    ],
    config: { background: "#FCF0E1" },
  };

  return (
    <div className={styles.container}>
      <div className={styles.weatherContainer}>
        <div>
          <span className={styles.text}>Crash Trends by Weather and Time</span>
          <p className={styles.subText}>
            The first chart is a bar graph indicating the total number of
            crashes associated with various weather conditions. The second chart
            is a line graph that shows the monthly distribution of crashes,
            filtered by the selected weather condition from the bar graph above.
          </p>
        </div>
        <VegaLite spec={spec1} />
      </div>
      <div className={styles.speedLimitContainer}>
        <div>
          <span className={styles.text}>Speed Limits vs. Crashes Analysis</span>
          <p className={styles.subText}>
            The visualization consists of two horizontally aligned charts: the
            top scatter plot displays total injuries against posted speed
            limits, revealing a distribution of accidents and associated
            injuries at various speeds. The right bar chart shows the frequency
            of crashes at different posted speed limits, with a notable spike in
            the number of crashes at the lower speed limit range
          </p>
        </div>
        <VegaLite spec={spec2} />
      </div>
    </div>
  );
};

export default DivyaViz;
