import Image from "next/image";
import Link from "next/link";
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
        <div className="mb-8 flex items-center gap-6 md:gap-8">
          <Image src={team.logo} alt={`${team.name} logo`} width={96} height={96} className="h-20 w-20" />
          <h1 className="text-5xl font-extrabold md:text-6xl">
            {team.name}
          </h1>
        </div>

        <h2 className="mb-4 text-2xl font-semibold">
          Roster
        </h2>

        <div className="mb-10 grid gap-3 sm:grid-cols-2">
          {team.roster.map((player) => (
            <Link
              key={player.slug}
              href={`/teams/${team.slug}/players/${player.slug}`}
              className="rounded-lg border border-border/70 bg-card/50 p-4 transition hover:-translate-y-0.5 hover:border-primary/70 hover:bg-primary/10"
            >
              <p className="text-base font-semibold">{player.name}</p>
              <p className="text-sm text-muted-foreground">{player.position}</p>
            </Link>
          ))}
        </div>

        <h2 className="mb-4 text-2xl font-semibold">
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
