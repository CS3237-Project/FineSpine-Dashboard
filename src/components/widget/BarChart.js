import { Bar } from "react-chartjs-2";
import React from "react";

const BarChart = ({ data, options = {}, properties = {} }) => {
  return <Bar {...properties} data={data} options={{ ...options }} />;
};

export default BarChart;
