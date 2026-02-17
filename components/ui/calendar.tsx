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
    <div className={cn("rounded-xl border border-border/60 bg-card/60 p-5", className)}>
      <p className="mb-5 text-center text-base font-semibold">
        {monthDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
      </p>

      <div className="mb-3 grid grid-cols-7 gap-2 text-center text-sm text-muted-foreground">
        {weekDays.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {dayCells.map((date, idx) => {
          if (!date) return <div key={`empty-${idx}`} className="h-14" />;

          const key = date.toISOString().slice(0, 10);
          const isHighlighted = uniqueDates.includes(key);
          const isSelected = selected?.toISOString().slice(0, 10) === key;

          return (
            <button
              key={key}
              type="button"
              onClick={() => onSelect(date)}
              className={cn(
                "relative h-14 rounded-lg border text-base transition",
                isHighlighted
                  ? "border-green-300 bg-green-600 font-bold text-white shadow-md shadow-green-900/40"
                  : "border-border/60 bg-background/20 text-muted-foreground",
                isSelected && "ring-2 ring-primary ring-offset-2 ring-offset-background"
              )}
            >
              {date.getDate()}
              {isHighlighted && <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-white/90" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}