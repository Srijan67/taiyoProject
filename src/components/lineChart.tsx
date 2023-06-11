import React from "react";
import { Line } from "@ant-design/plots";

const LineChart: React.FC<any> = (props) => {
  const data: any = {
    cases: props.data.cases,
    deaths: props.data.deaths,
    recovered: props.data.recovered,
  };

  const chartData = Object.keys(data).reduce((result: any[], key: string) => {
    const entries = Object.entries(data[key]);
    entries.forEach(([date, value]) => {
      result.push({
        date: date,
        value,
        name: key,
      });
    });
    return result;
  }, []);
  console.log(chartData, " chart dsata");

  const config: any = {
    data: chartData,
    xField: "date",
    yField: "value",
    seriesField: "name",
    xAxis: {
      type: "time",
      nice: true,
    },
    yAxis: {
      title: {
        text: "Count",
      },
    },
    legend: {
      position: "top",
    },
  };

  return <Line {...config} />;
};

export default LineChart;
