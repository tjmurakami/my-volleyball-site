import Navbar from "@/components/Navbar";
import { teams } from "@/lib/data";

type TeamPageProps = {
  params: Promise<{
    team: string;
  }>;
};

export default async function TeamPage({ params }: TeamPageProps) {
  const { team: teamSlug } = await params;

  const team = teams.find(
    t => t.slug === teamSlug
  );

  if (!team) {
    return (
      <main>
        <Navbar />
        <div className="p-10">
          <h1>Team not found</h1>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Navbar />

      <section className="p-10">
        <h1 className="text-4xl font-bold">
          {team.name}
        </h1>

        <p className="text-gray-500 mb-10">
          {team.location}
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Roster
        </h2>

        <div className="mb-10 space-y-2">
          {team.roster.map(player => (
            <div
              key={player.name}
              className="border p-4 rounded-lg"
            >
              {player.name} – {player.position}
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mb-4">
          Schedule
        </h2>

        <div className="space-y-2">
          {team.schedule.map((game, index) => (
            <div
              key={index}
              className="border p-4 rounded-lg"
            >
              vs {game.opponent} – {game.date}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
