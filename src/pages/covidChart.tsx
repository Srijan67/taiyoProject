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
    <div className="overflow-x-hidden w-screen py-3 mx-auto min-h-screen flex flex-1 flex-col justify-center items-center">
      <div className=" w-10/12 my-3 mb-7">
        <h2 className="text-center font-bold text-2xl text-white underline">
          Covid Summary
        </h2>
        {results && results.length > 1 && <BarChart data={results[0]?.data} />}
      </div>
      <div className="text-center font-bold text-2xl text-white underline mt-5 w-10/12">
        <h2>Covid Timeline Report</h2>
        {results && results.length > 1 && <LineChart data={results[1]?.data} />}
      </div>
    </div>
  );
};

export default CovidChart;
