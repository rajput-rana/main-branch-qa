import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <h1 className="text-4xl font-bold tracking-tight text-foreground">Branch QA: main</h1>
      <p className="mt-4 max-w-md text-center text-muted-foreground">Edit on qa-new-1546.</p>
    </div>
  );
}
