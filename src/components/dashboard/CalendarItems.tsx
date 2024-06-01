"use client";
import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";

const CalendarItems = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="flex flex-wrap items-center justify-end gap-2.5">
      <Popover>
        <PopoverTrigger asChild>
          <div className="cursor-pointer rounded-lg border p-2 text-xs shadow-none">
            <CalendarIcon size={18} className=" text-muted-foreground" />
          </div>
        </PopoverTrigger>
        <PopoverContent>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border-none shadow-none"
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default CalendarItems;
