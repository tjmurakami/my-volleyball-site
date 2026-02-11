// lib/data.ts
export const teams = [
  // These are fictional teams and players
  // Los Angeles Aces
  {
    slug: "los-angeles-aces",
    name: "Los Angeles Aces",
    location: "Los Angeles, CA",
    roster: [
      { name: "Adam Allison", position: "Outside Hitter" },
      { name: "Brian Baker", position: "Outside Hitter" },
      { name: "Carl Campbell", position: "Opposite Hitter" },
      { name: "Daniel Davis", position: "Setter" },
      { name: "Edward Evans", position: "Libero" },
      { name: "Frank Ferguson", position: "Middle Blocker" },
      { name: "Gavin Gibson", position: "Middle Blocker" }
    ],
    schedule: [
      { opponent: "Las Vegas Blaze", date: "2026-04-12" },
      { opponent: "New York City Cyclones", date: "2026-04-15" },
      { opponent: "Houston Dragons", date: "2026-04-18" }
    ]
  },
 // Las Vegas Blaze
  {
    slug: "las-vegas-blaze",
    name: "Las Vegas Blaze",
    location: "Las Vegas, NV",
    roster: [
      { name: "Harry Harrison", position: "Outside Hitter" },
      { name: "Ian Irwin", position: "Outside Hitter" },
      { name: "Jason Jones", position: "Opposite Hitter" },
      { name: "Liam Lewis", position: "Setter" },
      { name: "Michael Miller", position: "Libero" },
      { name: "Nathan Nelson", position: "Middle Blocker" },
      { name: "Oliver Ogden", position: "Middle Blocker" }
    ],
    schedule: [
      { opponent: "Los Angeles Aces", date: "2026-04-12" },
      { opponent: "Houston Dragons", date: "2026-04-15" },
      { opponent: "New York City Cyclones", date: "2026-04-18" }
    ]
  },
  // New York City Cyclones
  {
    slug: "new-york-city-cyclones",
    name: "New York City Cyclones",
    location: "New York City, NY",
    roster: [
      { name: "Paul Pearson", position: "Outside Hitter" },
      { name: "Ryan Rogers", position: "Outside Hitter" },
      { name: "Sam Stewart", position: "Opposite Hitter" },
      { name: "Thomas Thompson", position: "Setter" },
      { name: "Victor Vance", position: "Libero" },
      { name: "William Walsh", position: "Middle Blocker" },
      { name: "Andrew Anderson", position: "Middle Blocker" }
    ],
    schedule: [
      { opponent: "Houston Dragons", date: "2026-04-12" },
      { opponent: "Los Angeles Aces", date: "2026-04-15" },
      { opponent: "Las Vegas Blaze", date: "2026-04-18" }
    ]
  },
  // Houston Dragons
  {
    slug: "houston-dragons",
    name: "Houston Dragons",
    location: "Houston, TX",
    roster: [
      { name: "Blake Butler", position: "Outside Hitter" },
      { name: "Colin Coleman", position: "Outside Hitter" },
      { name: "Dylan Davidson", position: "Opposite Hitter" },
      { name: "Eric Ellison", position: "Setter" },
      { name: "Gordon Graham", position: "Libero" },
      { name: "Justin Jackson", position: "Middle Blocker" },
      { name: "Kevin Kelly", position: "Middle Blocker" }
    ],
    schedule: [
      { opponent: "New York City Cyclones", date: "2026-04-12" },
      { opponent: "Las Vegas Blaze", date: "2026-04-15" },
      { opponent: "Los Angeles Aces", date: "2026-04-18" }
    ]
  },
];

