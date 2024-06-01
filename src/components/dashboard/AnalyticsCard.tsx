import React from "react";
import { CardContent, CardHeader } from "../ui/card";
import CalendarItems from "./CalendarItems";
import { cn } from "~/lib/utils";
import Link from "next/link";

interface AnalyticsCardProps {
  title: string;
  children: React.ReactNode;
  actions?: "link" | "calendar";
  btnText?: string;
  className?: string;
  loading: boolean;
  onClick?: () => void;
}

const AnalyticsCard = ({
  actions,
  children,
  title,
  btnText,
  loading,
  className,
  onClick,
}: AnalyticsCardProps) => {
  return (
    <div
      className={cn(
        "invisible h-full w-full rounded-2xl border bg-background pb-4 shadow-xl shadow-gray-1 outline-none ring-0 animate-in  fade-in-0 dark:border-none dark:shadow-zinc-900",
        { visible: loading },
        className,
      )}
    >
      <CardHeader className="p-0">
        <div className="mb-2 flex w-full items-center justify-between">
          <h2 className="text-nowrap text-base font-medium capitalize text-black-1 dark:text-white lg:text-lg">
            {title}
          </h2>
          <div>
            {actions === "link" && (
              <Link
                href="/"
                className="border-none text-sm font-normal shadow-none outline-none"
                onClick={onClick}
              >
                {btnText}
              </Link>
            )}
            {actions === "calendar" && <CalendarItems />}
          </div>
        </div>
      </CardHeader>
      <CardContent className="w-full p-0">
        <div className="flex h-full w-full items-center">{children}</div>
      </CardContent>
    </div>
  );
};

export default AnalyticsCard;
