import { Line } from "react-chartjs-2";
import React from "react";

const LineChart = ({ data, options = {}, properties = {} }) => {
  return <Line {...properties} data={data} options={{ ...options }} />;
};

export default LineChart;
