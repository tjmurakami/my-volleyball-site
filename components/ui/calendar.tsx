"use client";

import { cn } from "@/lib/utils";

type CalendarProps = {
  highlightedDates: Date[];
  selected?: Date;
  onSelect: (date: Date) => void;
  className?: string;
};

const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export function Calendar({ highlightedDates, selected, onSelect, className }: CalendarProps) {
  const uniqueDates = [...new Set(highlightedDates.map((date) => date.toISOString().slice(0, 10)))].sort();
  const monthDate = uniqueDates[0] ? new Date(`${uniqueDates[0]}T00:00:00`) : new Date();

  const month = monthDate.getMonth();
  const year = monthDate.getFullYear();
  const firstDayOffset = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const dayCells = Array.from({ length: firstDayOffset + daysInMonth }, (_, idx) => {
    if (idx < firstDayOffset) return null;
    return new Date(year, month, idx - firstDayOffset + 1);
  });

  return (
    <div className={cn("rounded-xl border border-border/60 bg-card/60 p-4", className)}>
      <p className="mb-4 text-center text-sm font-semibold">
        {monthDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
      </p>

      <div className="mb-2 grid grid-cols-7 gap-1 text-center text-xs text-muted-foreground">
        {weekDays.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {dayCells.map((date, idx) => {
          if (!date) return <div key={`empty-${idx}`} className="h-9" />;

          const key = date.toISOString().slice(0, 10);
          const isHighlighted = uniqueDates.includes(key);
          const isSelected = selected?.toISOString().slice(0, 10) === key;

          return (
            <button
              key={key}
              type="button"
              onClick={() => onSelect(date)}
              className={cn(
                "h-9 rounded-md text-sm transition",
                isHighlighted ? "bg-primary/20 font-semibold text-foreground" : "text-muted-foreground",
                isSelected && "bg-primary text-primary-foreground"
              )}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}