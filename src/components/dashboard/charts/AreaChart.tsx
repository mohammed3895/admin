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
} from "recharts";
import dayjs from "dayjs";
import {
  type ValueType,
  type NameType,
} from "recharts/types/component/DefaultTooltipContent";

const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<ValueType, NameType>) => {
  if (active) {
    return (
      <div className="flex h-20 w-40 flex-col items-center justify-center gap-4 rounded-lg bg-background p-4 shadow-lg">
        <div className="flex flex-col items-start justify-center gap-2">
          <p className="texl-sm font-semibold text-gray-2">
            {dayjs(label as unknown as Date).format("MMMM DD")}
          </p>
          <p className="text-xl font-bold text-muted-foreground">
            ${payload![0]?.value}
          </p>
        </div>
      </div>
    );
  }

  return null;
};

const data = [
  {
    date: new Date().setMonth(8),
    sales: 2000,
  },
  {
    date: new Date().setMonth(9),
    sales: 2314,
  },
  {
    date: new Date().setMonth(10),
    sales: 1354,
  },
  {
    date: new Date().setMonth(11),
    sales: 2250,
  },
  {
    date: new Date().setMonth(12),
    sales: 1230,
  },
];

const AreaChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height={450} className="m-0 p-0">
      <AreaChart data={data} className="m-0 p-0">
        <defs>
          <linearGradient id="color" x1="0" x2="0" y1="0" y2="1">
            <stop offset="20%" stopColor="#35CB89" stopOpacity={0.8} />
            <stop offset="40%" stopColor="#35CB89" stopOpacity={0.6} />
            <stop offset="60%" stopColor="#35CB89" stopOpacity={0.4} />
            <stop offset="80%" stopColor="#35CB89" stopOpacity={0.001} />
          </linearGradient>
        </defs>
        <Area
          dataKey="sales"
          stroke="#35CB89"
          fill="url(#color)"
          className="m-0 p-0"
          strokeLinecap="round"
          strokeLinejoin="round"
          type="monotone"
        />
        <XAxis
          dataKey="date"
          tickFormatter={(date: Date) => dayjs(date).format("MMM DD")}
          className="mt-2.5 text-xs"
          tickLine={false}
          axisLine={false}
          tickMargin={14}
          padding={{ right: 4, left: 4 }}
        />
        {/* <YAxis /> */}
        <Tooltip content={<CustomTooltip />} />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartComponent;
