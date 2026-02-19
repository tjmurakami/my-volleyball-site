import Image from "next/image";
import Link from "next/link";
import { teams } from "@/lib/data";

type PlayerPageProps = {
  params: Promise<{
    team: string;
    player: string;
  }>;
};

export default async function PlayerPage({ params }: PlayerPageProps) {
  const { team: teamSlug, player: playerSlug } = await params;
  const team = teams.find((t) => t.slug === teamSlug);
  const player = team?.roster.find((p) => p.slug === playerSlug);

  if (!team || !player) {
    return (
      <main>
        <div className="p-6 md:p-10">
          <h1>Player not found</h1>
        </div>
      </main>
    );
  }

  return (
    <main>
      <section className="p-6 md:p-10">
        <Link
          href={`/teams/${team.slug}`}
          className="text-sm text-primary hover:underline"
        >
          Back to {team.name}
        </Link>

        <div className="mt-6 grid gap-6 lg:grid-cols-[260px,1fr]">
          <div className="space-y-4">
            <div>
              <h1 className="text-4xl font-bold md:text-5xl">{player.name}</h1>
              <p className="text-sm text-muted-foreground">{player.position}</p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-card/60 p-4">
              <Image
                src={player.image}
                alt={`${player.name} portrait`}
                width={256}
                height={256}
                className="h-60 w-60 rounded-xl object-cover"
                priority
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Hometown: {player.hometown}</p>
              <p className="text-sm text-muted-foreground">Height: {player.height}</p>
              <p className="text-sm text-muted-foreground">Age: {player.age}</p>
              <p className="text-sm text-muted-foreground">Weight: {player.weight}</p>
              <p className="text-sm text-muted-foreground">Wingspan: {player.wingspan}</p>
            </div>

            <div className="rounded-xl border border-border/60 bg-card/50 p-4">
              <p className="text-xs text-muted-foreground">Bio</p>
              <p className="mt-2 text-sm leading-relaxed">{player.bio}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
