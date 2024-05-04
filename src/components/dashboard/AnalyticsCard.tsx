import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import CalendarItems from "./CalendarItems";

interface AnalyticsCardProps {
  title: string;
  children: React.ReactNode;
  actions: "button" | "calendar";
  btnText?: string;
  onClick?: () => void;
}

const AnalyticsCard = ({
  actions,
  children,
  title,
  btnText,
  onClick,
}: AnalyticsCardProps) => {
  return (
    <Card className=" h-full rounded-xl  border-none bg-white py-2 shadow-none outline-none ring-0 dark:bg-accent">
      <CardHeader className="">
        <div className="flex w-full items-center justify-between">
          <h2 className="text-nowrap text-sm font-semibold capitalize text-black-1 dark:text-muted-foreground lg:text-base">
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
        <div className="flex w-full items-center px-2 md:px-4 lg:px-6">
          {children}
        </div>
      </CardContent>
    </Card>
  );
};

export default AnalyticsCard;
