import Image from "next/image";
import Link from "next/link";
import { teams } from "@/lib/data";
import { formatLeagueDate, getLeagueGames, getTeamStandings } from "@/lib/standings";

function formatWinPct(value: number) {
  return value.toFixed(3).replace(/^0/, "");
}

export default function StandingsPage() {
  const standings = getTeamStandings(teams);
  const leagueGames = getLeagueGames(teams);
  const completedGames = leagueGames
    .filter((game) => Boolean(game.result))
    .sort((a, b) => b.date.localeCompare(a.date));
  const upcomingGames = leagueGames.filter((game) => !game.result);
  const latestCompletedDate = completedGames[0]?.date;

  return (
    <main>
      <section className="pb-12 pt-4 md:pt-6">
        <h1 className="text-4xl font-bold">League Standings</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Ranked by wins, then set differential.
          {latestCompletedDate
            ? ` Through ${formatLeagueDate(latestCompletedDate)}.`
            : " No completed matches yet."}
        </p>

        <div className="mt-6 overflow-x-auto rounded-2xl border border-border/70 bg-card/40">
          <table className="w-full min-w-[780px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-border/70 text-left text-xs uppercase tracking-wide text-muted-foreground">
                <th className="px-4 py-3">Rank</th>
                <th className="px-4 py-3">Team</th>
                <th className="px-4 py-3 text-right">W</th>
                <th className="px-4 py-3 text-right">L</th>
                <th className="px-4 py-3 text-right">PCT</th>
                <th className="px-4 py-3 text-right">Sets</th>
                <th className="px-4 py-3 text-right">SD</th>
                <th className="px-4 py-3 text-right">Streak</th>
                <th className="px-4 py-3">Next</th>
              </tr>
            </thead>
            <tbody>
              {standings.map((entry) => (
                <tr key={entry.teamSlug} className="border-b border-border/40 last:border-0">
                  <td className="px-4 py-3 font-semibold">{entry.rank}</td>
                  <td className="px-4 py-3">
                    <Link
                      href={`/teams/${entry.teamSlug}`}
                      className="inline-flex items-center gap-3 rounded-md px-1 py-0.5 transition hover:bg-primary/10"
                    >
                      <Image
                        src={entry.teamLogo}
                        alt={`${entry.teamName} logo`}
                        width={28}
                        height={28}
                        className="h-7 w-7"
                      />
                      <span className="font-semibold">{entry.teamName}</span>
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-right font-semibold">{entry.wins}</td>
                  <td className="px-4 py-3 text-right">{entry.losses}</td>
                  <td className="px-4 py-3 text-right text-muted-foreground">
                    {formatWinPct(entry.winPct)}
                  </td>
                  <td className="px-4 py-3 text-right text-muted-foreground">
                    {entry.setsWon}-{entry.setsLost}
                  </td>
                  <td
                    className={`px-4 py-3 text-right font-medium ${
                      entry.setDiff >= 0 ? "text-emerald-300" : "text-rose-300"
                    }`}
                  >
                    {entry.setDiff >= 0 ? `+${entry.setDiff}` : entry.setDiff}
                  </td>
                  <td className="px-4 py-3 text-right">{entry.streak}</td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {entry.nextGame
                      ? `vs ${entry.nextGame.opponent} (${formatLeagueDate(entry.nextGame.date)})`
                      : "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-border/70 bg-card/40 p-4">
            <h2 className="text-xl font-semibold">Recent Results</h2>
            <div className="mt-4 space-y-3">
              {completedGames.slice(0, 6).map((game) => (
                <div key={game.id} className="rounded-lg border border-border/50 bg-card/60 p-3">
                  <p className="text-xs text-muted-foreground">{formatLeagueDate(game.date)}</p>
                  {game.result ? (
                    <p className="text-sm font-semibold">
                      {game.result.winnerName} def. {game.result.loserName}{" "}
                      <span className="text-muted-foreground">
                        ({game.result.setsWinner}-{game.result.setsLoser})
                      </span>
                    </p>
                  ) : null}
                </div>
              ))}
              {completedGames.length === 0 ? (
                <p className="text-sm text-muted-foreground">No final scores yet.</p>
              ) : null}
            </div>
          </div>

          <div className="rounded-2xl border border-border/70 bg-card/40 p-4">
            <h2 className="text-xl font-semibold">Upcoming Matches</h2>
            <div className="mt-4 space-y-3">
              {upcomingGames.slice(0, 6).map((game) => (
                <div key={game.id} className="rounded-lg border border-border/50 bg-card/60 p-3">
                  <p className="text-xs text-muted-foreground">{formatLeagueDate(game.date)}</p>
                  <p className="text-sm font-semibold">
                    {game.teamA.name} vs {game.teamB.name}
                  </p>
                </div>
              ))}
              {upcomingGames.length === 0 ? (
                <p className="text-sm text-muted-foreground">No remaining scheduled matches.</p>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
