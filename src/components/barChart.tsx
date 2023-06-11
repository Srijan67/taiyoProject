import React from "react";
import { Bar } from "@ant-design/charts";
interface PropsChild {
  name: string;
  value: number;
}
interface PropsData {
  cases?: number;
  active?: number;
  recovered?: number;
  deaths?: number;
}

const BarChart: React.FC<any> = (props) => {
  console.log(props);
  // let { cases, deaths, recovered } = props?.data;
  let cases = props?.data?.cases;
  let deaths = props?.data?.deaths;
  let recovered = props?.data?.recovered;
  let active = props?.data?.active;

  let data: PropsChild[] = [
    {
      name: "Cases",
      value: cases,
    },
    { name: "Recovered", value: recovered },
    {
      name: "Deaths",
      value: deaths,
    },
    {
      name: "Active",
      value: active,
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
