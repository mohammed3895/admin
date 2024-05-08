import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import CalendarItems from "./CalendarItems";
import { cn } from "~/lib/utils";

interface AnalyticsCardProps {
  title: string;
  children: React.ReactNode;
  actions: "button" | "calendar";
  btnText?: string;
  className?: string;
  onClick?: () => void;
}

const AnalyticsCard = ({
  actions,
  children,
  title,
  btnText,
  className,
  onClick,
}: AnalyticsCardProps) => {
  return (
    <Card
      className={cn(
        " h-full rounded-md border border-accent bg-white pb-4 shadow-none outline-none ring-0 dark:border-none dark:bg-neutral-800",
        className,
      )}
    >
      <CardHeader className="">
        <div className="flex w-full items-center justify-between">
          <h2 className="text-nowrap text-base font-medium capitalize text-black-1 dark:text-white lg:text-lg">
            {title}
          </h2>
          <div>
            {actions === "button" ? (
              <Button
                variant="secondary"
                className="border-none text-xs shadow-none outline-none"
                onClick={onClick}
              >
                {btnText}
              </Button>
            ) : (
              <CalendarItems />
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="w-full p-0">
        <div className="flex h-full w-full items-center">{children}</div>
      </CardContent>
    </Card>
  );
};

export default AnalyticsCard;
