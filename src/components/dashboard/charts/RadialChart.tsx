"use client";
import { type ApexOptions } from "apexcharts";
import React from "react";
import ReactApexChart from "react-apexcharts";

const areachartOpts: ApexOptions = {
  chart: {
    type: "radialBar",
    toolbar: { show: false },
    zoom: { enabled: false },
    width: "100%",
    stacked: true,
    foreColor: "#999",
  },

  stroke: {
    curve: "smooth",
    width: 2,
  },

  plotOptions: {
    radialBar: {
      track: {
        background: "#F9FAFB",
      },
      dataLabels: {
        show: true,

        total: {
          show: true,
          label: "TOTAL",
          fontSize: "22px",
          color: "#5E81F4",
        },
        value: {
          color: "#C4BBAF",
          fontSize: "18px",
          formatter(value: number) {
            return `${Math.round(value)}%`;
          },
        },
      },
    },
  },
  tooltip: {
    x: {
      format: "dd MMM yyyy",
    },
  },
  legend: {
    show: true,
    fontSize: "14px",
    fontWeight: "500",
    itemMargin: {
      horizontal: 14,
      vertical: 8,
    },
    position: "bottom",
  },
  theme: {
    palette: "palette1",
    mode: "light",
  },
  dataLabels: {
    enabled: false,
  },
  colors: ["#35CB89", "#F1C047", "#DB12FA"],
  series: [95, 85, 75],
  labels: ["MEN", "WOMEN", "KIDS"],
};

const RadialChart = () => {
  return (
    <div className="flex h-3/4 w-full items-center justify-center">
      {typeof window !== "undefined" && (
        <ReactApexChart
          type="radialBar"
          options={areachartOpts}
          series={areachartOpts.series}
          height={350}
          className="h-full w-full"
        />
      )}
    </div>
  );
};

export default RadialChart;
