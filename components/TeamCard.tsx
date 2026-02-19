import Image from "next/image";
import Link from "next/link";
import type { Team } from "@/lib/types";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription
} from "@/components/ui/card";

export default function TeamCard({ team }: { team: Team }) {
  return (
    <Link href={`/teams/${team.slug}`}>
      <Card className="cursor-pointer border border-border/80 bg-card/90 backdrop-blur-sm transition hover:-translate-y-1 hover:border-primary/70 hover:shadow-xl hover:shadow-primary/20">
        <CardHeader className="flex flex-row items-center gap-4">
          <Image
            src={team.logo}
            alt={`${team.name} logo`}
            width={64}
            height={64}
            className="h-14 w-14"
          />
          <div>
            <CardTitle className="text-xl">{team.name}</CardTitle>
          </div>
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


