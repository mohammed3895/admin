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
    <Card className="rounded-xl border-none bg-white shadow-none outline-none ring-0">
      <CardHeader>
        <div className="flex w-full items-center justify-between px-2 py-3 lg:px-6">
          <h2 className="text-nowrap text-sm font-semibold capitalize text-black-1 lg:text-base">
            {title}
          </h2>
          <div>
            {actions === "button" ? (
              <Button variant="outline" onClick={onClick}>
                {btnText}
              </Button>
            ) : (
              <CalendarItems />
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex w-full items-center py-3">{children}</div>
      </CardContent>
    </Card>
  );
};

export default AnalyticsCard;
