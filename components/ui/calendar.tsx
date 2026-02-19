"use client";

import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

type CalendarProps = {
  highlightedDates: Date[];
  selected?: Date;
  onSelect: (date: Date) => void;
  className?: string;
};

const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const monthLabels = [
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

function dateKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function keyToDate(key: string) {
  const [year, month, day] = key.split("-").map(Number);
  return new Date(year, month - 1, day);
}

export function Calendar({ highlightedDates, selected, onSelect, className }: CalendarProps) {
  const uniqueDates = useMemo(
    () => [...new Set(highlightedDates.map((date) => dateKey(date)))].sort(),
    [highlightedDates]
  );
  const highlightedSet = useMemo(() => new Set(uniqueDates), [uniqueDates]);
  const baseYears = useMemo(() => {
    const years = new Set<number>();
    for (const date of highlightedDates) {
      years.add(date.getFullYear());
    }
    if (years.size === 0) {
      years.add(new Date().getFullYear());
    }
    return Array.from(years).sort((a, b) => a - b);
  }, [highlightedDates]);
  const initialDate = selected ?? (uniqueDates[0] ? keyToDate(uniqueDates[0]) : new Date());
  const [viewDate, setViewDate] = useState(
    new Date(initialDate.getFullYear(), initialDate.getMonth(), 1)
  );

  useEffect(() => {
    if (!selected) return;
    setViewDate(new Date(selected.getFullYear(), selected.getMonth(), 1));
  }, [selected]);

  const month = viewDate.getMonth();
  const year = viewDate.getFullYear();
  const firstDayOffset = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const availableYears = useMemo(() => {
    const years = new Set<number>(baseYears);
    years.add(year);
    return Array.from(years).sort((a, b) => a - b);
  }, [baseYears, year]);

  const dayCells = Array.from({ length: firstDayOffset + daysInMonth }, (_, idx) => {
    if (idx < firstDayOffset) return null;
    return new Date(year, month, idx - firstDayOffset + 1);
  });

  return (
    <div className={cn("rounded-xl border border-border/60 bg-card/60 p-5", className)}>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setViewDate(new Date(year, month - 1, 1))}
            className="rounded-md border border-border/60 px-2 py-1 text-sm transition hover:border-primary/70 hover:text-primary"
            aria-label="Previous month"
          >
            Prev
          </button>
          <button
            type="button"
            onClick={() => setViewDate(new Date(year, month + 1, 1))}
            className="rounded-md border border-border/60 px-2 py-1 text-sm transition hover:border-primary/70 hover:text-primary"
            aria-label="Next month"
          >
            Next
          </button>
        </div>

        <div className="flex items-center gap-2">
          <label className="sr-only" htmlFor="calendar-month">
            Month
          </label>
          <select
            id="calendar-month"
            value={month}
            onChange={(event) => setViewDate(new Date(year, Number(event.target.value), 1))}
            className="rounded-md border border-border/60 bg-background/40 px-2 py-1 text-sm"
          >
            {monthLabels.map((label, index) => (
              <option key={label} value={index}>
                {label}
              </option>
            ))}
          </select>

          <label className="sr-only" htmlFor="calendar-year">
            Year
          </label>
          <select
            id="calendar-year"
            value={year}
            onChange={(event) => setViewDate(new Date(Number(event.target.value), month, 1))}
            className="rounded-md border border-border/60 bg-background/40 px-2 py-1 text-sm"
          >
            {availableYears.map((availableYear) => (
              <option key={availableYear} value={availableYear}>
                {availableYear}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p className="mb-3 text-center text-base font-semibold">
        {monthLabels[month]} {year}
      </p>

      <div className="mb-3 grid grid-cols-7 gap-2 text-center text-sm text-muted-foreground">
        {weekDays.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {dayCells.map((date, idx) => {
          if (!date) return <div key={`empty-${idx}`} className="h-14" />;

          const key = dateKey(date);
          const isHighlighted = highlightedSet.has(key);
          const isSelected = selected ? dateKey(selected) === key : false;
          const highlightStyle = isHighlighted
            ? {
                backgroundColor: "#34d399",
                borderColor: "#10b981",
                color: "#052e16",
              }
            : undefined;

          return (
            <button
              key={key}
              type="button"
              onClick={() => onSelect(date)}
              data-highlighted={isHighlighted ? "true" : "false"}
              style={highlightStyle}
              className={cn(
                "calendar-day relative h-14 rounded-lg border text-base transition",
                isHighlighted
                  ? "font-bold shadow-md shadow-emerald-900/35"
                  : "border-border/60 bg-background/20 text-muted-foreground",
                isSelected && "ring-2 ring-primary ring-offset-2 ring-offset-background"
              )}
            >
              {date.getDate()}
              {isHighlighted && <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-emerald-950" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}
