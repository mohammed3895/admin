"use client";
import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { CalendarDays, CalendarIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { cn } from "~/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const CalendarItems = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [isActive, setIsActive] = React.useState<number>(0);

  return (
    <div className="flex flex-wrap items-center justify-end gap-2.5">
      <Select>
        <SelectTrigger className="w-[80px]">
          <SelectValue placeholder="Day" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Day</SelectItem>
          <SelectItem value="dark">Week</SelectItem>
          <SelectItem value="system">Month</SelectItem>
        </SelectContent>
      </Select>

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
