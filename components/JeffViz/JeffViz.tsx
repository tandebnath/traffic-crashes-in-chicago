import { VegaLite } from "react-vega";
import styles from "./JeffViz.module.scss";

const JeffViz = () => {
  const spec1 = {
    background: "#fcf0e1",
    hconcat: [
      {
        data: {
          name: "A",
          url: "https://raw.githubusercontent.com/chuzesta/chuzesta/main/crashes_2019.csv",
        },
        width: 400,
        height: 400,
        params: [
          {
            name: "Month_Select",
            value: "1",
            select: { type: "point", fields: ["Month"] },
            bind: {
              input: "select",
              options: [
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
              ],
            },
          },
        ],
        mark: "circle",
        encoding: {
          x: {
            field: "CRASH_HOUR",
            type: "quantitative",
            axis: { title: "Hour of the Day 2019" },
          },
          y: {
            field: "INJURIES_TOTAL",
            type: "quantitative",
            scale: { domain: [0, 15] },
            axis: { tickCount: 13, title: "Total Injuries" },
          },
          size: { value: 300 },
          color: {
            condition: {
              param: "Month_Select",
              value: "rgba(20, 160, 130, 0.12)",
            },
            value: "transparent",
          },
        },
      },
      {
        data: {
          name: "B",
          url: "https://raw.githubusercontent.com/chuzesta/chuzesta/main/crashes_2022.csv",
        },
        width: 400,
        height: 400,
        params: [
          {
            name: "Month_Select",
            value: "1",
            select: { type: "point", fields: ["Month"] },
            bind: {
              input: "select",
              options: [
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
              ],
            },
          },
        ],
        mark: "circle",
        encoding: {
          x: {
            field: "CRASH_HOUR",
            type: "quantitative",
            axis: { title: "Hour of the Day 2022" },
          },
          y: {
            field: "INJURIES_TOTAL",
            type: "quantitative",
            scale: { domain: [0, 15] },
            axis: { tickCount: 13, title: "Total Injuries" },
          },
          size: { value: 300 },
          color: {
            condition: {
              param: "Month_Select",
              value: "rgba(20, 160, 130, 0.12)",
            },
            value: "transparent",
          },
        },
      },
    ],
    config: {},
  };

  const spec2 = {
    background: "#fcf0e1",
    hconcat: [
      {
        data: {
          name: "A",
          url: "https://raw.githubusercontent.com/chuzesta/chuzesta/main/crashes_2019.csv",
        },
        width: 400,
        height: 400,
        params: [
          {
            name: "Weather Conditions",
            value: "CLEAR",
            select: { type: "point", fields: ["WEATHER_CONDITION"] },
            bind: {
              input: "select",
              options: [
                "UNKNOWN",
                "CLEAR",
                "RAIN",
                "CLOUDY/OVERCAST",
                "BLOWING SAND, SOIL, DIRT",
                "BLOWING SNOW",
                "FOG/SMOKE/HAZE",
                "FREEZING RAIN/DRIZZLE",
                "OTHER",
                "SLEET/HAIL",
                "SNOW",
              ],
            },
          },
        ],
        mark: "circle",
        encoding: {
          x: {
            field: "Month",
            type: "quantitative",
            axis: { title: "Months of 2019" },
          },
          y: {
            field: "INJURIES_TOTAL",
            type: "quantitative",
            scale: { domain: [0, 15] },
            axis: { tickCount: 13, title: "Total Injuries" },
          },
          size: { value: 300 },
          color: {
            condition: {
              param: "Weather Conditions",
              value: "rgba(220, 0, 0, 0.18)",
            },
            value: "transparent",
          },
        },
      },
      {
        data: {
          url: "https://raw.githubusercontent.com/chuzesta/chuzesta/main/crashes_2022.csv",
        },
        width: 400,
        height: 400,
        params: [
          {
            name: "Weather Conditions",
            value: "CLEAR",
            select: { type: "point", fields: ["WEATHER_CONDITION"] },
            bind: {
              input: "select",
              options: [
                "UNKNOWN",
                "CLEAR",
                "RAIN",
                "CLOUDY/OVERCAST",
                "BLOWING SAND, SOIL, DIRT",
                "BLOWING SNOW",
                "FOG/SMOKE/HAZE",
                "FREEZING RAIN/DRIZZLE",
                "OTHER",
                "SLEET/HAIL",
                "SNOW",
              ],
            },
          },
        ],
        mark: "circle",
        encoding: {
          x: {
            field: "Month",
            type: "quantitative",
            axis: { title: "Months of 2022" },
          },
          y: {
            field: "INJURIES_TOTAL",
            type: "quantitative",
            scale: { domain: [0, 15] },
            axis: { tickCount: 13, title: "Total Injuries" },
          },
          size: { value: 300 },
          color: {
            condition: {
              param: "Weather Conditions",
              value: "rgba(220, 0, 0, 0.18)",
            },
            value: "transparent",
          },
        },
      },
    ],
    config: {},
  };

  return (
    <div className={styles.container}>
      <div className={styles.hourContainer}>
        <div>
          <span className={styles.text}>Car Crash Injury VS Time of Day</span>
          <p className={styles.subText}>
            This graph allows you to see the relationship between Car Crash
            Injury and the time of day that the car crash happens. With the
            selection you can browse through the month. Generally crashes occur
            most readily throughout the daytime, with both from before 2019 and
            2022 having a relatively uniform distribution of car crashes
            throughout the year.
          </p>
        </div>
        <VegaLite spec={spec1} />
      </div>
      <div className={styles.monthContainer}>
        <div>
          <span className={styles.text}>
            Weather conditions and how they affect car crash injuries throughout
            the year
          </span>
          <p className={styles.subText}>
            This graph allows you to select through the weather conditions of
            car crashes, and then seeing the distribution of these weather
            conditions through the months of the year. The y axis denotes how
            many injuries took place in each car crash, the darker the point,
            the more that it has occured.
          </p>
        </div>
        <VegaLite spec={spec2} />
      </div>
    </div>
  );
};

export default JeffViz;
