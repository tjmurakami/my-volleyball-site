import Image from "next/image";
import Link from "next/link";
import type { TeamStanding } from "@/lib/standings";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function formatWinPct(value: number) {
  return value.toFixed(3).replace(/^0/, "");
}

type StandingsWidgetProps = {
  standings: TeamStanding[];
};

export default function StandingsWidget({ standings }: StandingsWidgetProps) {
  return (
    <Card className="border-border/70 bg-card/35">
      <CardHeader>
        <CardTitle className="text-2xl">Top 4 Standings</CardTitle>
        <CardDescription>Quick league snapshot</CardDescription>
        <CardAction>
          <Link href="/standings" className="text-sm text-primary hover:underline">
            Full table
          </Link>
        </CardAction>
      </CardHeader>

      <CardContent className="space-y-2">
        {standings.slice(0, 4).map((team) => (
          <div
            key={team.teamSlug}
            className="flex items-center justify-between rounded-lg border border-border/60 bg-background/30 px-3 py-2"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-xs font-semibold">
                {team.rank}
              </span>
              <Image
                src={team.teamLogo}
                alt={`${team.teamName} logo`}
                width={24}
                height={24}
                className="h-6 w-6"
              />
              <Link
                href={`/teams/${team.teamSlug}`}
                className="text-sm font-semibold transition hover:text-primary"
              >
                {team.teamName}
              </Link>
            </div>

            <div className="text-right text-xs text-muted-foreground">
              <p>
                {team.wins}-{team.losses} ({formatWinPct(team.winPct)})
              </p>
              <p className={team.setDiff >= 0 ? "text-emerald-300" : "text-rose-300"}>
                SD {team.setDiff >= 0 ? `+${team.setDiff}` : team.setDiff}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
