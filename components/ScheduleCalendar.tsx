"use client";

import { useMemo, useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { teams } from "@/lib/data";

const games = teams.flatMap((team) =>
  team.schedule.map((game) => {
    const [year, month, day] = game.date.split("-").map(Number);

    return {
      ...game,
      team: team.name,
      dateKey: game.date,
      dateObj: new Date(year, month - 1, day),
    };
  })
);

function dateKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export default function ScheduleCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(games[0]?.dateObj);

  const scheduleByDate = useMemo(() => {
    const map = new Map<string, typeof games>();

    for (const game of games) {
      const existing = map.get(game.dateKey) ?? [];
      existing.push(game);
      map.set(game.dateKey, existing);
    }

    return map;
  }, []);

  const selectedKey = selectedDate ? dateKey(selectedDate) : undefined;
  const gamesForSelectedDate = selectedKey ? scheduleByDate.get(selectedKey) ?? [] : [];

  return (
    <div className="grid gap-6 rounded-2xl border border-border/70 bg-card/50 p-5shadow-lg shadow-black/15 md:grid-cols-[280px,1fr]">
    <Calendar
        highlightedDates={games.map((game) => game.dateObj)}
        selected={selectedDate}
        onSelect={setSelectedDate}
      />

      <div className="rounded-lg border border-border/60 bg-background/30 p-4">
        <h3 className="text-xl font-semibold">Game Schedule</h3>
        <p className="mt-1 text-sm text-muted-foreground">Select a highlighted date to view matchups.</p>
        <p className="mt-2 text-xs text-emerald-300">Green boxes indicate game days.</p>

        <div className="mt-4 space-y-3">
          {gamesForSelectedDate.length > 0 ? (
            gamesForSelectedDate.map((game, idx) => (
              <div key={`${game.team}-${game.opponent}-${idx}`} className="rounded-lg border border-border/50 bg-card/70 p-3">
                <p className="text-sm font-semibold">{game.team}</p>
                <p className="text-sm text-muted-foreground">vs {game.opponent}</p>
              </div>
            ))
          ) : (
            <p className="text-sm text-muted-foreground">No games scheduled for this date.</p>
          )}
        </div>
      </div>
    </div>
  );
}