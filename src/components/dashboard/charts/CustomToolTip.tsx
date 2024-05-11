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
      <div className="flex h-16 w-fit items-center justify-center gap-1 rounded-xl bg-background/65 px-4 shadow-lg backdrop-blur-lg">
        <div className="flex items-end justify-center gap-3">
          <p className="text-sm font-normal text-muted-foreground">
            {dayjs(label as unknown as Date).format("MMMM DD")}
          </p>
          <p className="text-xl font-medium text-black-1 dark:text-white">
            ${payload![0]?.value}
          </p>
        </div>
      </div>
    );
  }

  return null;
};
