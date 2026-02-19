export type TeamPlayer = {
  slug: string;
  name: string;
  position: string;
  height: string;
  age: number;
  weight: string;
  wingspan: string;
  hometown: string;
  bio: string;
  image: string;
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
