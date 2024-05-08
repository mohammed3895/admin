"use client";
import dayjs from "dayjs";
import { type TooltipProps } from "recharts";
import {
  type ValueType,
  type NameType,
} from "recharts/types/component/DefaultTooltipContent";

export const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<ValueType, NameType>) => {
  if (active) {
    return (
      <div className="flex h-20 w-40 flex-col items-center justify-center gap-1 rounded-xl bg-background/60 p-4 shadow-lg backdrop-blur-lg">
        <div className="flex flex-col items-start justify-center gap-1">
          <p className="text-sm font-semibold text-gray-2">
            {dayjs(label as unknown as Date).format("MMMM DD")}
          </p>
          <p className="text-2xl font-bold text-black-1 dark:text-white">
            ${payload![0]?.value}
          </p>
        </div>
      </div>
    );
  }

  return null;
};
