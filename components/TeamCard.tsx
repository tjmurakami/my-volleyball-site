import Link from "next/link";


interface Team {
  slug: string;
  name: string;
  location: string;
  roster: {
    name: string;
    position: string;
  }[];
  schedule: {
    opponent: string;
    date: string;
  }[];
}

export default function TeamCard({ team }: { team: Team }) {
  return (
    <Link href={`/teams/${team.slug}`}>
      <div className="border rounded-xl p-6 hover:shadow-lg transition">
        <h3 className="text-xl font-semibold">
          {team.name}
        </h3>

        <p className="text-gray-500">
          {team.location}
        </p>
      </div>
    </Link>
  );
}

