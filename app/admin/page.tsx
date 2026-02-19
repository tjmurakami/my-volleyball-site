export default function AdminPage() {
  return (
    <main className="p-6 md:p-10">
      <h1 className="text-4xl font-bold">Admin</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Protected area. Basic Auth required in production.
      </p>
    </main>
  );
}
