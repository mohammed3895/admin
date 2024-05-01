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
    <Card className="h-full rounded-xl border-none bg-gray-50 py-2 shadow-none outline-none ring-0 md:bg-white">
      <CardHeader className="p-0">
        <div className="flex w-full items-center justify-between  px-2 py-3 md:px-4 md:py-5">
          <h2 className="text-nowrap text-sm font-semibold capitalize text-black-1 lg:text-base">
            {title}
          </h2>
          <div>
            {actions === "button" ? (
              <Button
                variant="outline"
                className="text-xs shadow-none"
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
