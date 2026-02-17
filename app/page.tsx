import Hero from "@/components/Hero";
import TeamCard from "@/components/TeamCard";
import { teams } from "@/lib/data";

export default function Home() {
  return (
    <main>

      <Hero />

      <section className="px-6 pb-20 pt-12 md:px-10">
        <h2 className="text-3xl font-bold mb-8">
          Featured Teams
        </h2>

        <div className="mb-8 text-3xl font-bold tracking-tight">
          {teams.map(team => (
            <TeamCard key={team.slug} team={team} />
          ))}
        </div>
      </section>
    </main>
  );
}

