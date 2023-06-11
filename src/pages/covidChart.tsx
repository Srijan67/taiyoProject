import { useQueries, useQuery } from "@tanstack/react-query";
import React from "react";
import {
  getAllCovidAction,
  getAllDateWiseCovidAction,
  getCountryWiseCovidAction,
} from "../utils/actions";
import BarChart from "../components/barChart";
import LineChart from "../components/lineChart";
import GeoChart from "../components/geoChart";

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
      {
        queryKey: ["map", 3],
        queryFn: getCountryWiseCovidAction,
        staleTime: Infinity,
      },
    ],
  });
  console.log(results, " this is results");

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
      <div className="text-center font-bold text-2xl text-white underline mt-5 w-10/12">
        <h2>Covid Map</h2>
        {results && results.length > 1 && <GeoChart data={results[2]?.data} />}
      </div>
    </div>
  );
};

export default CovidChart;
