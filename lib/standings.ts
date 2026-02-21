import type { Team } from "@/lib/types";

type UpcomingGame = {
  opponent: string;
  date: string;
};

type CompletedGame = {
  date: string;
  won: boolean;
};

type TeamBadge = {
  slug: string;
  name: string;
  logo: string;
};

export type TeamStanding = {
  rank: number;
  teamSlug: string;
  teamName: string;
  teamLogo: string;
  wins: number;
  losses: number;
  gamesPlayed: number;
  winPct: number;
  setsWon: number;
  setsLost: number;
  setDiff: number;
  streak: string;
  nextGame: UpcomingGame | null;
};

export type LeagueGame = {
  id: string;
  date: string;
  dateObj: Date;
  teamA: TeamBadge;
  teamB: TeamBadge;
  result?: {
    winnerSlug: string;
    winnerName: string;
    loserSlug: string;
    loserName: string;
    setsWinner: number;
    setsLoser: number;
  };
};

const leagueDateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

function parseDate(date: string) {
  const [year, month, day] = date.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function getStreakLabel(completedGames: CompletedGame[]) {
  if (completedGames.length === 0) return "-";

  const latestFirst = [...completedGames].sort((a, b) => b.date.localeCompare(a.date));
  const currentRunWon = latestFirst[0].won;
  let streakLength = 0;

  for (const game of latestFirst) {
    if (game.won !== currentRunWon) break;
    streakLength += 1;
  }

  return `${currentRunWon ? "W" : "L"}${streakLength}`;
}

export function formatLeagueDate(date: string) {
  return leagueDateFormatter.format(parseDate(date));
}

export function getTeamStandings(teams: Team[]): TeamStanding[] {
  const standings = teams.map((team) => {
    const orderedSchedule = [...team.schedule].sort((a, b) => a.date.localeCompare(b.date));
    const completedGames: CompletedGame[] = [];
    let wins = 0;
    let losses = 0;
    let setsWon = 0;
    let setsLost = 0;
    let nextGame: UpcomingGame | null = null;

    for (const game of orderedSchedule) {
      if (game.result) {
        const won = game.result.setsFor > game.result.setsAgainst;
        wins += won ? 1 : 0;
        losses += won ? 0 : 1;
        setsWon += game.result.setsFor;
        setsLost += game.result.setsAgainst;
        completedGames.push({ date: game.date, won });
        continue;
      }

      if (!nextGame) {
        nextGame = {
          opponent: game.opponent,
          date: game.date,
        };
      }
    }

    const gamesPlayed = wins + losses;
    const winPct = gamesPlayed > 0 ? wins / gamesPlayed : 0;

    return {
      rank: 0,
      teamSlug: team.slug,
      teamName: team.name,
      teamLogo: team.logo,
      wins,
      losses,
      gamesPlayed,
      winPct,
      setsWon,
      setsLost,
      setDiff: setsWon - setsLost,
      streak: getStreakLabel(completedGames),
      nextGame,
    };
  });

  return standings
    .sort((a, b) => {
      return (
        b.wins - a.wins ||
        b.winPct - a.winPct ||
        b.setDiff - a.setDiff ||
        b.setsWon - a.setsWon ||
        a.teamName.localeCompare(b.teamName)
      );
    })
    .map((standing, index) => ({
      ...standing,
      rank: index + 1,
    }));
}

function normalizeResult(team: Team, opponent: Team, setsFor: number, setsAgainst: number) {
  if (setsFor === setsAgainst) return undefined;

  if (setsFor > setsAgainst) {
    return {
      winnerSlug: team.slug,
      winnerName: team.name,
      loserSlug: opponent.slug,
      loserName: opponent.name,
      setsWinner: setsFor,
      setsLoser: setsAgainst,
    };
  }

  return {
    winnerSlug: opponent.slug,
    winnerName: opponent.name,
    loserSlug: team.slug,
    loserName: team.name,
    setsWinner: setsAgainst,
    setsLoser: setsFor,
  };
}

export function getLeagueGames(teams: Team[]): LeagueGame[] {
  const teamsByName = new Map(teams.map((team) => [team.name, team]));
  const teamsBySlug = new Map(teams.map((team) => [team.slug, team]));
  const gameMap = new Map<string, LeagueGame>();

  for (const team of teams) {
    for (const game of team.schedule) {
      const opponent = teamsByName.get(game.opponent);
      if (!opponent) continue;

      const [slugA, slugB] = [team.slug, opponent.slug].sort((a, b) => a.localeCompare(b));
      const teamA = teamsBySlug.get(slugA);
      const teamB = teamsBySlug.get(slugB);
      if (!teamA || !teamB) continue;

      const id = `${game.date}-${slugA}-${slugB}`;
      const existing = gameMap.get(id);

      if (!existing) {
        gameMap.set(id, {
          id,
          date: game.date,
          dateObj: parseDate(game.date),
          teamA: {
            slug: teamA.slug,
            name: teamA.name,
            logo: teamA.logo,
          },
          teamB: {
            slug: teamB.slug,
            name: teamB.name,
            logo: teamB.logo,
          },
          result: game.result
            ? normalizeResult(team, opponent, game.result.setsFor, game.result.setsAgainst)
            : undefined,
        });
        continue;
      }

      if (!existing.result && game.result) {
        existing.result = normalizeResult(team, opponent, game.result.setsFor, game.result.setsAgainst);
      }
    }
  }

  return Array.from(gameMap.values()).sort((a, b) => {
    return a.date.localeCompare(b.date) || a.teamA.name.localeCompare(b.teamA.name);
  });
}
