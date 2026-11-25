import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <h1 className="text-4xl font-bold tracking-tight text-foreground">Branch QA: main</h1>
      <p className="mt-4 max-w-md text-center text-muted-foreground">SAVE-01 edit made on main.</p>
      <section className="mt-10 max-w-md text-center">
        <h2 className="text-lg font-semibold text-foreground">About</h2>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          <li>A minimal one-page site for verifying branch builds.</li>
          <li>Shows the current branch name in the page heading.</li>
          <li>Keeps edits small and easy to review.</li>
        </ul>
      </section>
    </div>
  );
}
