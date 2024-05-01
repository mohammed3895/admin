"use client";
import { type ApexOptions } from "apexcharts";
import React from "react";
import ReactApexChart from "react-apexcharts";
import { renderToString } from "react-dom/server";

const areachartOpts: ApexOptions = {
  chart: {
    type: "area",
    toolbar: { show: false },
    zoom: { enabled: false },
    width: 450,
    stacked: true,
    foreColor: "#999",
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },

  plotOptions: {
    area: {
      fillTo: "origin",
    },
  },
  tooltip: {
    x: {
      show: false,
    },
  },
  colors: ["#A6F5C9"],
  theme: {
    palette: "palette1",
    mode: "light",
  },
  dataLabels: {
    enabled: false,
  },
  series: [
    {
      name: "Series 1",
      data: [45, 52, 29, 43, 32],
    },
  ],
  grid: {
    xaxis: {
      lines: {
        show: false,
      },
    },
    show: false,
    yaxis: {
      lines: {
        show: false,
      },
    },
  },

  fill: {
    type: "gradient",
    gradient: {
      colorStops: [
        {
          offset: 0,
          color: "#A6F5C9",
          opacity: 1,
        },
        {
          offset: 0.6,
          color: "#A6F5C99c",
          opacity: 50,
        },
        {
          offset: 100,
          color: "#A6F5C918",
          opacity: 1,
        },
      ],
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.1,
      stops: [0, 90, 100],
    },
  },
  xaxis: {
    categories: [
      "01 Jan",
      "02 Jan",
      "03 Jan",
      "04 Jan",
      "05 Jan",
      "06 Jan",
      "07 Jan",
    ],
  },
};

const AreaChart = () => {
  return (
    <div className="flex h-3/4 w-full items-center justify-center">
      {typeof window !== "undefined" && (
        <ReactApexChart
          type="area"
          options={areachartOpts}
          series={areachartOpts.series}
          height={300}
          className="h-full w-full px-0 text-sm font-normal text-gray-500"
        />
      )}
    </div>
  );
};

export default AreaChart;
