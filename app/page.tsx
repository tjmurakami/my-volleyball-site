import Link from "next/link";
import Hero from "@/components/Hero";
import ScheduleCalendar from "@/components/ScheduleCalendar";
import { teams } from "@/lib/data";

export default function Home() {
  return (
    <main className="space-y-10 pb-20">
      <Hero />

      <section className="rounded-2xl border border-border/70 bg-card/30 p-6 md:p-8">
        <div className="mb-6 flex items-end justify-between gap-3">
          <h2 className="text-3xl font-bold">Teams</h2>
          <Link href="/teams" className="text-sm text-primary hover:underline">
            View all team pages
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 m:grid-cols-2">
          {teams.map((team) => (
            <Link
              key={team.slug}
              href={`/teams/${team.slug}`}
              className="rounded-xl border border-border/70 bg-background/30 p-8 text-center text-2xl font-bold transition hover:-translate-y-1 hover:border-primary/60 hover:bg-primary/10"
            >
              {team.name}
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-3xl font-bold">League Calendar</h2>
        <ScheduleCalendar />
      </section>
    </main>
  );
}