"use client";
import React, { useState } from "react";
import { Control, Controller } from "react-hook-form";
import { format } from "date-fns";
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface DatePickerProps {
  name: string;
  control?: Control<any>;
  label?: string;
  defaultValue?: string;
  onChange?: (date: Date | undefined) => void;
}

export function DatePicker({
  name,
  control,
  label,
  defaultValue,
  onChange,
}: DatePickerProps) {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

  const handleYearChange = (year: string) => {
    setSelectedYear(parseInt(year));
  };

  const handleMonthChange = (month: string) => {
    setSelectedMonth(months.indexOf(month));
  };

  const handlePrevYear = () => {
    setSelectedYear((prev) => Math.max(prev - 1, currentYear - 99));
  };

  const handleNextYear = () => {
    setSelectedYear((prev) => Math.min(prev + 1, currentYear));
  };

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    if (date) {
      setSelectedYear(date.getFullYear());
      setSelectedMonth(date.getMonth());
    }
    if (onChange) {
      onChange(date);
    }
  };

  const renderDatePicker = (field: any) => (
    <Popover>
      <PopoverTrigger
        asChild
        className="bg-primary-light-gray py-6 bg-gray-100"
      >
        <Button
          id={name}
          variant="outline"
          className={`w-full justify-start text-left font-normal ${
            !field.value ? "text-muted-foreground" : ""
          }`}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {field?.value
            ? format(field?.value, "PPP")
            : defaultValue ?? "Pick a date"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <div className="flex justify-between items-center p-3">
          <Button variant="outline" size="icon" onClick={handlePrevYear}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Select
            value={selectedYear.toString()}
            onValueChange={handleYearChange}
          >
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder={selectedYear.toString()} />
            </SelectTrigger>
            <SelectContent>
              {years.map((year) => (
                <SelectItem key={year} value={year.toString()}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon" onClick={handleNextYear}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="p-3 border-t">
          <Select
            value={months[selectedMonth]}
            onValueChange={handleMonthChange}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={months[selectedMonth]} />
            </SelectTrigger>
            <SelectContent>
              {months.map((month) => (
                <SelectItem key={month} value={month}>
                  {month}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Calendar
          mode="single"
          selected={field.value}
          onSelect={(date) => {
            field.onChange(date);
            handleDateSelect(date);
          }}
          month={new Date(selectedYear, selectedMonth)}
          onMonthChange={(newMonth) => {
            setSelectedMonth(newMonth.getMonth());
            setSelectedYear(newMonth.getFullYear());
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );

  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      {control ? (
        <Controller
          name={name}
          control={control}
          render={({ field }) =>
            renderDatePicker({
              ...field,
              onChange: (date: Date | undefined) => {
                field.onChange(date);
                handleDateSelect(date);
              },
            })
          }
        />
      ) : (
        renderDatePicker({ value: selectedDate, onChange: handleDateSelect })
      )}
    </div>
  );
}
