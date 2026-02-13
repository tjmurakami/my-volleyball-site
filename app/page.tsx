import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TeamCard from "@/components/TeamCard";
import { teams } from "@/lib/data";

export default function Home() {
  return (
    <main>

      <Hero />

      <section className="px-10 pb-20">
        <h2 className="text-3xl font-bold mb-8">
          Featured Teams
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {teams.map(team => (
            <TeamCard key={team.slug} team={team} />
          ))}
        </div>
      </section>
    </main>
  );
}

