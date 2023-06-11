import React from "react";
import { Bar } from "@ant-design/charts";
interface PropsChild {
  name: string;
  value: number;
}
interface PropsData {
  cases?: number;
  deaths?: number;
  recovered?: number;
}

const BarChart: React.FC<any> = (props) => {
  console.log(props);
  let { cases, deaths, recovered } = props.data;
  let data: PropsChild[] = [
    {
      name: "cases",
      value: cases,
    },
    { name: "recovered", value: recovered },
    {
      name: "deaths",
      value: deaths,
    },
  ];
  const config: any = {
    data,
    xField: "value",
    yField: "name",
    seriesField: "name",
    legend: { position: "top" },
    height: 300,
    width: 500,
  };

  return <Bar {...config} />;
};

export default BarChart;
