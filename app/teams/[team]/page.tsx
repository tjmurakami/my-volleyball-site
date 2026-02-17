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
        <div className="p-6 md:p-10">
          <h1>Team not found</h1>
        </div>
      </main>
    );
  }

  return (
    <main>

      <section className="p-10">
        <h1 className="text-4xl font-bold">
          {team.name}
        </h1>

        <p className="mb-10 text-muted-foreground">
          {team.location}
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Roster
        </h2>

        <div className="mb-10 space-y-2">
          {team.roster.map(player => (
            <div
              key={player.name}
              className="rounded-lg border border-border/70 bg-card/50 p-4"
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
              className="rounded-lg border border-border/70 bg-card/50 p-4"
            >
              vs {game.opponent} – {game.date}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
