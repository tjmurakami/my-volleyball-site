export type TeamPlayer = {
  name: string;
  position: string;
};

export type TeamGame = {
  opponent: string;
  date: string;
};

export type Team = {
  slug: string;
  name: string;
  logo: string;
  location: string;
  roster: TeamPlayer[];
  schedule: TeamGame[];
};
