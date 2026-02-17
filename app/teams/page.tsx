import TeamCard from "@/components/TeamCard";
import { teams } from "@/lib/data";

export default function TeamsPage() {
  return (
    <main>
      <section className="pb-12 pt-4 md:pt-6">
        <h1 className="mb-8 text-4xl font-bold">NVA Teams</h1>

        <div className="grid gap-6 sm:grid-cols-2">
          {teams.map((team) => (
            <TeamCard key={team.slug} team={team} />
          ))}
        </div>
      </section>
    </main>
  );
}