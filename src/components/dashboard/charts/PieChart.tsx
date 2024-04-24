"use client";
import { type ApexOptions } from "apexcharts";
import React from "react";
import ReactApexChart from "react-apexcharts";

const areachartOpts: ApexOptions = {
  chart: {
    type: "bar",
    toolbar: { show: false },
    zoom: { enabled: false },
    width: "100%",
    stacked: true,
  },
  plotOptions: {
    bar: {
      rangeBarOverlap: false,
      horizontal: true,
      distributed: true,
      dataLabels: {
        position: "left",
        total: {
          enabled: false,
        },
      },
      borderRadius: 2,
      borderRadiusApplication: "around",
    },
  },
  tooltip: {
    x: {
      format: "dd MMM yyyy",
    },
  },
  colors: ["#52D199", "#5E81F4", "#DF34F9", "#F2C861"],
  theme: {
    palette: "palette1",
    mode: "light",
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    strokeColors: ["#52D199", "#5E81F4", "#DF34F9"],
    radius: 50,
    shape: "circle",
  },
  labels: ["a", "b", "c", "d", "e"],
  grid: {
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
    show: false,
  },
  series: [
    {
      name: "Series 1",
      data: [45, 52, 39, 23, 42],
    },
    {
      name: "Series 1",
      data: [51, 52, 24, 43, 39],
    },
    {
      name: "Series 1",
      data: [55, 42, 49, 33, 32],
    },
  ],
};

const PieChart = () => {
  return (
    <div className="flex h-3/4 w-full items-center justify-center">
      {typeof window !== "undefined" && (
        <ReactApexChart
          type="bar"
          options={areachartOpts}
          series={areachartOpts.series}
          height={350}
          className="h-full w-full"
        />
      )}
    </div>
  );
};

export default PieChart;
