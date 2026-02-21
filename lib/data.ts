import type { Team } from "@/lib/types";
export const teams: Team[] = [
  // Los Angeles Aces
  {
    slug: "los-angeles-aces",
    name: "Los Angeles Aces",
    logo: "/team-logos/los-angeles-aces.svg",
    location: "Los Angeles, CA",
    roster: [
      {
        slug: "adam-allison",
        name: "Adam Allison",
        position: "Outside Hitter",
        height: "6'4\"",
        age: 26,
        weight: "200 lb",
        wingspan: "78 in",
        hometown: "Long Beach, CA",
        bio: "Explosive outside hitter known for high-volume swings and steady serve receive.",
        image: "/players/adam-allison.png"
      },
      {
        slug: "brian-baker",
        name: "Brian Baker",
        position: "Outside Hitter",
        height: "6'3\"",
        age: 28,
        weight: "195 lb",
        wingspan: "77 in",
        hometown: "Santa Monica, CA",
        bio: "Crafty scorer who mixes sharp angles with a reliable jump float serve.",
        image: "/players/placeholder.svg"
      },
      {
        slug: "carl-campbell",
        name: "Carl Campbell",
        position: "Opposite Hitter",
        height: "6'6\"",
        age: 27,
        weight: "215 lb",
        wingspan: "81 in",
        hometown: "Anaheim, CA",
        bio: "Power opposite with a heavy arm and a knack for late-match points.",
        image: "/players/placeholder.svg"
      },
      {
        slug: "daniel-davis",
        name: "Daniel Davis",
        position: "Setter",
        height: "6'1\"",
        age: 25,
        weight: "185 lb",
        wingspan: "75 in",
        hometown: "Irvine, CA",
        bio: "Tempo setter who runs a fast offense and reads blocks well.",
        image: "/players/placeholder.svg"
      },
      {
        slug: "edward-evans",
        name: "Edward Evans",
        position: "Libero",
        height: "5'10\"",
        age: 29,
        weight: "175 lb",
        wingspan: "72 in",
        hometown: "Pasadena, CA",
        bio: "Defensive anchor with quick reads and clean first contact.",
        image: "/players/placeholder.svg"
      },
      {
        slug: "frank-ferguson",
        name: "Frank Ferguson",
        position: "Middle Blocker",
        height: "6'7\"",
        age: 30,
        weight: "225 lb",
        wingspan: "83 in",
        hometown: "Riverside, CA",
        bio: "Veteran middle who closes seams and scores off quicks.",
        image: "/players/placeholder.svg"
      },
      {
        slug: "gavin-gibson",
        name: "Gavin Gibson",
        position: "Middle Blocker",
        height: "6'8\"",
        age: 24,
        weight: "230 lb",
        wingspan: "84 in",
        hometown: "San Diego, CA",
        bio: "High-flying middle with a fast first step and strong serve.",
        image: "/players/placeholder.svg"
      }
    ],
    schedule: [
      { opponent: "Las Vegas Blaze", date: "2026-04-01", result: { setsFor: 3, setsAgainst: 1 } },
      { opponent: "New York City Cyclones", date: "2026-04-04", result: { setsFor: 0, setsAgainst: 3 } },
      { opponent: "Houston Dragons", date: "2026-04-07", result: { setsFor: 1, setsAgainst: 3 } },
      { opponent: "Las Vegas Blaze", date: "2026-04-10" },
      { opponent: "New York City Cyclones", date: "2026-04-13" },
      { opponent: "Houston Dragons", date: "2026-04-16" },
      { opponent: "Las Vegas Blaze", date: "2026-04-19" },
      { opponent: "New York City Cyclones", date: "2026-04-22" },
      { opponent: "Houston Dragons", date: "2026-04-25" }
    ]
  },
 // Las Vegas Blaze
  {
    slug: "las-vegas-blaze",
    name: "Las Vegas Blaze",
    logo: "/team-logos/las-vegas-blaze.svg",
    location: "Las Vegas, NV",
    roster: [
      {
        slug: "harry-harrison",
        name: "Harry Harrison",
        position: "Outside Hitter",
        height: "6'4\"",
        age: 27,
        weight: "202 lb",
        wingspan: "78 in",
        hometown: "Las Vegas, NV",
        bio: "High-motor outside hitter who scores in transition and defends well.",
        image: "/players/placeholder.svg"
      },
      {
        slug: "ian-irwin",
        name: "Ian Irwin",
        position: "Outside Hitter",
        height: "6'3\"",
        age: 25,
        weight: "194 lb",
        wingspan: "77 in",
        hometown: "Henderson, NV",
        bio: "Smooth passer with a consistent approach and smart shot selection.",
        image: "/players/placeholder.svg"
      },
      {
        slug: "jason-jones",
        name: "Jason Jones",
        position: "Opposite Hitter",
        height: "6'6\"",
        age: 29,
        weight: "218 lb",
        wingspan: "82 in",
        hometown: "North Las Vegas, NV",
        bio: "Physical opposite who thrives on high balls and big blocks.",
        image: "/players/placeholder.svg"
      },
      {
        slug: "liam-lewis",
        name: "Liam Lewis",
        position: "Setter",
        height: "6'2\"",
        age: 26,
        weight: "188 lb",
        wingspan: "76 in",
        hometown: "Reno, NV",
        bio: "Setter who mixes tempo and keeps attackers in rhythm.",
        image: "/players/placeholder.svg"
      },
      {
        slug: "michael-miller",
        name: "Michael Miller",
        position: "Libero",
        height: "5'9\"",
        age: 28,
        weight: "170 lb",
        wingspan: "71 in",
        hometown: "Sparks, NV",
        bio: "Quick-twitch defender with a strong platform and court leadership.",
        image: "/players/placeholder.svg"
      },
      {
        slug: "nathan-nelson",
        name: "Nathan Nelson",
        position: "Middle Blocker",
        height: "6'7\"",
        age: 30,
        weight: "224 lb",
        wingspan: "83 in",
        hometown: "Carson City, NV",
        bio: "Experienced middle with fast lateral movement and quick offense timing.",
        image: "/players/placeholder.svg"
      },
      {
        slug: "oliver-ogden",
        name: "Oliver Ogden",
        position: "Middle Blocker",
        height: "6'8\"",
        age: 24,
        weight: "232 lb",
        wingspan: "84 in",
        hometown: "Boulder City, NV",
        bio: "Long-armed middle who adds size at the net and a tough serve.",
        image: "/players/placeholder.svg"
      }
    ],
    schedule: [
      { opponent: "Los Angeles Aces", date: "2026-04-01", result: { setsFor: 1, setsAgainst: 3 } },
      { opponent: "Houston Dragons", date: "2026-04-04", result: { setsFor: 3, setsAgainst: 2 } },
      { opponent: "New York City Cyclones", date: "2026-04-07", result: { setsFor: 2, setsAgainst: 3 } },
      { opponent: "Los Angeles Aces", date: "2026-04-10" },
      { opponent: "Houston Dragons", date: "2026-04-13" },
      { opponent: "New York City Cyclones", date: "2026-04-16" },
      { opponent: "Los Angeles Aces", date: "2026-04-19" },
      { opponent: "Houston Dragons", date: "2026-04-22" },
      { opponent: "New York City Cyclones", date: "2026-04-25" }
    ]
  },
  // New York City Cyclones
  {
    slug: "new-york-city-cyclones",
    name: "New York City Cyclones",
    logo: "/team-logos/new-york-city-cyclones.svg",
    location: "New York City, NY",
    roster: [
      {
        slug: "paul-pearson",
        name: "Paul Pearson",
        position: "Outside Hitter",
        height: "6'4\"",
        age: 27,
        weight: "203 lb",
        wingspan: "79 in",
        hometown: "Brooklyn, NY",
        bio: "Aggressive outside hitter with a heavy cross-court swing.",
        image: "/players/placeholder.svg"
      },
      {
        slug: "ryan-rogers",
        name: "Ryan Rogers",
        position: "Outside Hitter",
        height: "6'3\"",
        age: 26,
        weight: "195 lb",
        wingspan: "77 in",
        hometown: "Queens, NY",
        bio: "Steady passer who scores off speed and smart tooling.",
        image: "/players/placeholder.svg"
      },
      {
        slug: "sam-stewart",
        name: "Sam Stewart",
        position: "Opposite Hitter",
        height: "6'6\"",
        age: 28,
        weight: "217 lb",
        wingspan: "82 in",
        hometown: "Newark, NJ",
        bio: "Left-side terminator who thrives in late-game situations.",
        image: "/players/placeholder.svg"
      },
      {
        slug: "thomas-thompson",
        name: "Thomas Thompson",
        position: "Setter",
        height: "6'1\"",
        age: 25,
        weight: "184 lb",
        wingspan: "75 in",
        hometown: "Bronx, NY",
        bio: "Quick-setting distributor who runs a balanced offense.",
        image: "/players/placeholder.svg"
      },
      {
        slug: "victor-vance",
        name: "Victor Vance",
        position: "Libero",
        height: "5'10\"",
        age: 29,
        weight: "173 lb",
        wingspan: "72 in",
        hometown: "Staten Island, NY",
        bio: "Floor general with clean digs and accurate out-of-system touches.",
        image: "/players/placeholder.svg"
      },
      {
        slug: "william-walsh",
        name: "William Walsh",
        position: "Middle Blocker",
        height: "6'7\"",
        age: 30,
        weight: "226 lb",
        wingspan: "83 in",
        hometown: "Hoboken, NJ",
        bio: "Big-body middle who seals the net and scores on slides.",
        image: "/players/placeholder.svg"
      },
      {
        slug: "andrew-anderson",
        name: "Andrew Anderson",
        position: "Middle Blocker",
        height: "6'8\"",
        age: 24,
        weight: "231 lb",
        wingspan: "84 in",
        hometown: "Jersey City, NJ",
        bio: "Rising middle with quick feet and a fast first tempo.",
        image: "/players/placeholder.svg"
      }
    ],
    schedule: [
      { opponent: "Houston Dragons", date: "2026-04-01", result: { setsFor: 2, setsAgainst: 3 } },
      { opponent: "Los Angeles Aces", date: "2026-04-04", result: { setsFor: 3, setsAgainst: 0 } },
      { opponent: "Las Vegas Blaze", date: "2026-04-07", result: { setsFor: 3, setsAgainst: 2 } },
      { opponent: "Houston Dragons", date: "2026-04-10" },
      { opponent: "Los Angeles Aces", date: "2026-04-13" },
      { opponent: "Las Vegas Blaze", date: "2026-04-16" },
      { opponent: "Houston Dragons", date: "2026-04-19" },
      { opponent: "Los Angeles Aces", date: "2026-04-22" },
      { opponent: "Las Vegas Blaze", date: "2026-04-25" }
    ]
  },
  // Houston Dragons
  {
    slug: "houston-dragons",
    name: "Houston Dragons",
    logo: "/team-logos/houston-dragons.svg",
    location: "Houston, TX",
    roster: [
      {
        slug: "blake-butler",
        name: "Blake Butler",
        position: "Outside Hitter",
        height: "6'4\"",
        age: 26,
        weight: "202 lb",
        wingspan: "79 in",
        hometown: "Houston, TX",
        bio: "Physical outside hitter with a heavy serve and fast transition.",
        image: "/players/placeholder.svg"
      },
      {
        slug: "colin-coleman",
        name: "Colin Coleman",
        position: "Outside Hitter",
        height: "6'3\"",
        age: 25,
        weight: "196 lb",
        wingspan: "77 in",
        hometown: "Sugar Land, TX",
        bio: "Smooth receiver who scores with range and smart shot selection.",
        image: "/players/placeholder.svg"
      },
      {
        slug: "dylan-davidson",
        name: "Dylan Davidson",
        position: "Opposite Hitter",
        height: "6'6\"",
        age: 28,
        weight: "218 lb",
        wingspan: "82 in",
        hometown: "Katy, TX",
        bio: "High-flying opposite with a big block and a fearless arm.",
        image: "/players/placeholder.svg"
      },
      {
        slug: "eric-ellison",
        name: "Eric Ellison",
        position: "Setter",
        height: "6'2\"",
        age: 27,
        weight: "188 lb",
        wingspan: "76 in",
        hometown: "The Woodlands, TX",
        bio: "Rhythm setter who keeps the tempo fast and hitters balanced.",
        image: "/players/placeholder.svg"
      },
      {
        slug: "gordon-graham",
        name: "Gordon Graham",
        position: "Libero",
        height: "5'10\"",
        age: 29,
        weight: "172 lb",
        wingspan: "72 in",
        hometown: "Pearland, TX",
        bio: "Defensive specialist with a quick first step and calm leadership.",
        image: "/players/placeholder.svg"
      },
      {
        slug: "justin-jackson",
        name: "Justin Jackson",
        position: "Middle Blocker",
        height: "6'7\"",
        age: 30,
        weight: "227 lb",
        wingspan: "83 in",
        hometown: "Pasadena, TX",
        bio: "Strong middle who closes blocks and scores off quicks.",
        image: "/players/placeholder.svg"
      },
      {
        slug: "kevin-kelly",
        name: "Kevin Kelly",
        position: "Middle Blocker",
        height: "6'8\"",
        age: 24,
        weight: "232 lb",
        wingspan: "84 in",
        hometown: "Galveston, TX",
        bio: "Lengthy middle with good foot speed and a tough jump serve.",
        image: "/players/placeholder.svg"
      }
    ],
    schedule: [
      { opponent: "New York City Cyclones", date: "2026-04-01", result: { setsFor: 3, setsAgainst: 2 } },
      { opponent: "Las Vegas Blaze", date: "2026-04-04", result: { setsFor: 2, setsAgainst: 3 } },
      { opponent: "Los Angeles Aces", date: "2026-04-07", result: { setsFor: 3, setsAgainst: 1 } },
      { opponent: "New York City Cyclones", date: "2026-04-10" },
      { opponent: "Las Vegas Blaze", date: "2026-04-13" },
      { opponent: "Los Angeles Aces", date: "2026-04-16" },
      { opponent: "New York City Cyclones", date: "2026-04-19" },
      { opponent: "Las Vegas Blaze", date: "2026-04-22" },
      { opponent: "Los Angeles Aces", date: "2026-04-25" }
    ]
  },
];
