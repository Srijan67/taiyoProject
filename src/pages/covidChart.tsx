import { useQueries, useQuery } from "@tanstack/react-query";
import React from "react";
import { getAllCovidAction, getAllDateWiseCovidAction } from "../utils/actions";
import ChoroplethMapChart from "../components/geoChart";
import BarChart from "../components/barChart";
import LineChart from "../components/lineChart";

const CovidChart: React.FC = () => {
  const results: any = useQueries({
    queries: [
      {
        queryKey: ["covid", 1],
        queryFn: getAllCovidAction,
        staleTime: Infinity,
      },
      {
        queryKey: ["line", 2],
        queryFn: getAllDateWiseCovidAction,
        staleTime: Infinity,
      },
    ],
  });
  console.log(results, " this is results");

  // const query = useQueries([{
  //   queryKey: 'covid',
  //   queryFn: getAllCovidAction
  // }]);
  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: Failed To Fetch Data</div>;
  // }

  return (
    <div className="">
      {/* Render the chart using the 'data' */}
      {/* For example: */}
      {/* <p>Total cases: {data?.cases}</p>
      <p>Total deaths: {data?.deaths}</p>
      <p>Total recovered: {data?.recovered}</p> */}
      {/* <ChoroplethMapChart /> */}
      {/* <BarChart data={results[0]?.data} /> */}
      <LineChart data={results[1]?.data} />
    </div>
  );
};

export default CovidChart;
