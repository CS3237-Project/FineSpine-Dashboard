import { Doughnut } from "react-chartjs-2";
import React from "react";

const DoughnutChart = ({ data, options = {}, properties = {} }) => {
  return <Doughnut {...properties} data={data} options={{ ...options }} />;
};

export default DoughnutChart;
