import TeamCard from "@/components/TeamCard";
import { teams } from "@/lib/data";

export default function TeamsPage() {
  return (
    <main>

      <section className="p-6 md:p-10">
        <h1 className="text-4xl font-bold mb-8">
          NVA Teams
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          {teams.map(team => (
            <TeamCard key={team.slug} team={team} />
          ))}
        </div>
      </section>
    </main>
  );
}
