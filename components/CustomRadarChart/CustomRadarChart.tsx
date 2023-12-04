// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/radar
"use client";
import { ResponsiveRadar, Radar } from "@nivo/radar";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const CustomRadarChart = ({ data }: { data: any }) => (
  <Radar
    data={data}
    height={500}
    width={500}
    keys={["Male", "Female", "Unknown"]}
    indexBy="category"
    margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
    borderColor={{ from: "color" }}
    gridLabelOffset={36}
    dotSize={10}
    dotColor={{ theme: "background" }}
    dotBorderWidth={2}
    colors={{ scheme: "set1" }}
    blendMode="multiply"
    motionConfig="wobbly"
    legends={[
      {
        anchor: "top-left",
        direction: "column",
        translateX: -50,
        translateY: -40,
        itemWidth: 80,
        itemHeight: 20,
        itemTextColor: "#15425f",
        symbolSize: 12,
        symbolShape: "circle",
        effects: [
          {
            on: "hover",
            style: {
              itemTextColor: "#15425f",
            },
          },
        ],
      },
    ]}
  />
);

export default CustomRadarChart;
