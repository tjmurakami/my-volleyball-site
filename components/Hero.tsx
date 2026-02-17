export default function Hero() {
  return (
    <section className="rounded-2xl border border-border/70 bg-card/40 px-6 py-16 text-center shadow-lg shadow-black/10 backdrop-blur-sm">
      <div className="mx-auto mb-5 inline-flex items-center gap-3 rounded-full border border-primary/50 bg-primary/15 px-4 py-2 text-sm font-semibold text-primary-foreground">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-black text-primary-foreground">
          NVA
        </span>
        Official League Hub
      </div>

      <h1 className="text-4xl font-bold tracking-tight md:text-6xl">National Volleyball Association</h1>

      <p className="mt-5 text-lg text-muted-foreground">Teams, players, and schedules all in one place.</p>
    </section>
  );
}