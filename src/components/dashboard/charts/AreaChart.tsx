"use client";
import { type ApexOptions } from "apexcharts";
import React from "react";
import ReactApexChart from "react-apexcharts";
import { renderToString } from "react-dom/server";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  YAxis,
  XAxis,
  Tooltip,
  type TooltipProps,
  LineChart,
  Line,
  CartesianGrid,
} from "recharts";
import dayjs from "dayjs";
import { CustomTooltip } from "./CustomToolTip";

const data = [
  {
    date: new Date().setMonth(8),
    sales: 2000,
    income: 2500,
  },
  {
    date: new Date().setMonth(9),
    sales: 2314,
    income: 2014,
  },
  {
    date: new Date().setMonth(10),
    sales: 1354,
    income: 2354,
  },
  {
    date: new Date().setMonth(11),
    sales: 2250,
    income: 1250,
  },
  {
    date: new Date().setMonth(12),
    sales: 1230,
    income: 3230,
  },
];

const AreaChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height={320} className="p-2">
      <LineChart data={data} className="m-0 p-0">
        <defs>
          <linearGradient id="colorIn" x1="0" x2="0" y1="0" y2="1">
            <stop offset="10%" stopColor="#35CB89" stopOpacity={0.8} />
            <stop offset="40%" stopColor="#35CB89" stopOpacity={0.6} />
            <stop offset="60%" stopColor="#35CB89" stopOpacity={0.4} />
            <stop offset="80%" stopColor="#35CB89" stopOpacity={0.01} />
          </linearGradient>
        </defs>
        <Line
          dataKey="sales"
          stroke="#35CB89"
          strokeWidth={3}
          fill="url(#colorIn)"
          className="m-0 p-0"
          type="monotone"
        />
        {/* <Line
          dataKey="income"
          stroke="#FF808A"
          strokeWidth={3}
          fill="url(#color)"
          className="m-0 p-0"
          strokeLinecap="round"
          strokeLinejoin="round"
          type="monotone"
        /> */}
        <XAxis tickLine={false} className="text-sm" strokeOpacity={0.25} />
        <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.05} />
        <Tooltip content={<CustomTooltip />} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default AreaChartComponent;
