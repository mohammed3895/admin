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
      <div className="flex items-end justify-center gap-1 rounded-2xl bg-background/85 px-6 py-3 shadow-xl backdrop-blur-sm ">
        <div className="flex items-end justify-center gap-1">
          <p className="text-xs font-normal text-muted-foreground">
            {dayjs(label as unknown as Date).format("MMM DD")},
          </p>
          <p className="text-base font-semibold tracking-tight text-primary">
            ${payload![0]?.value}
          </p>
        </div>
      </div>
    );
  }

  return null;
};
