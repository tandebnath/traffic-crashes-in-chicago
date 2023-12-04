import { VegaLite } from "react-vega";
const CustomPieChart = ({ data }: { data: any }) => {
  const spec = {
    description: "A simple pie chart with embedded data.",
    data: {
      values: data,
    },
    layer: [
      {
        mark: { type: "arc", outerRadius: 100 },
        encoding: {
          order: { field: "id", type: "quantitative", sort: "descending" },
          theta: {
            field: "value",
            type: "quantitative",
            sort: { field: "id", order: "ascending" },
          },
          color: {
            field: "label",
            type: "nominal",
            legend: null,
            sort: { field: "id", order: "ascending" },
          },
          tooltip: [
            { field: "label", title: "Category" },
            { field: "value", title: "Value" },
          ],
        },
      },
      {
        mark: {
          type: "text",
          radius: 120,
          baseline: "middle",
          align: "center",
        },
        encoding: {
          text: { field: "label" },
          theta: { field: "value", type: "quantitative", stack: true },
        },
      },
    ],
    config: { background: "#FCF0E1" },
  };

  return (
    <div>
      <VegaLite spec={spec} />
    </div>
  );
};

export default CustomPieChart;
