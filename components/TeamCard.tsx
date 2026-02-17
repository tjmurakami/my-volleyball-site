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
      <Card className="cursor-pointer border border-border/80 bg-card/90 backdrop-blur-sm transition hover:-translate-y-1 hover:border-primary/70 hover:shadow-xl hover:shadow-primary/20">
        <CardHeader>
          <CardTitle className="text-xl">{team.name}</CardTitle>
          <CardDescription>{team.location}</CardDescription>
        </CardHeader>

        <CardContent>
          <p className="text-sm text-muted-foreground/90">
            View roster and schedule
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}


