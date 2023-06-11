import React from "react";
import { Chart } from "react-google-charts";

const GeoChart: React.FC<any> = (props) => {
  let countryData = props?.data || [];

  const data = countryData.map((country: any) => [
    country.country,
    country.cases,
    country.deaths,
  ]);

  data.unshift(["Country", "Total Cases", "deaths"]);

  return (
    <Chart
      chartEvents={[
        {
          eventName: "select",
          callback: ({ chartWrapper }) => {
            const chart = chartWrapper.getChart();
            const selection = chart.getSelection();
            if (selection.length === 0) return;
            const region = data[selection[0].row + 1];
            console.log("Selected : " + region);
          },
        },
      ]}
      chartType="GeoChart"
      width="100%"
      height="400px"
      data={data}
      options={{
        backgroundColor: "darkgreen",
        colorAxis: {
          colors: ["pink", "red", "darkred"],
        },
      }}
    />
  );
};
export default GeoChart;
