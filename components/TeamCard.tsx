import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription
} from "@/components/ui/card";

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
      <Card className="hover:shadow-lg transition cursor-pointer">
        <CardHeader>
          <CardTitle>{team.name}</CardTitle>
          <CardDescription>{team.location}</CardDescription>
        </CardHeader>

        <CardContent>
          <p className="text-sm text-muted-foreground">
            View roster and schedule
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}


