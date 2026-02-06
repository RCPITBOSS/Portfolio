import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'About Brian Greenbaum — full-stack developer.',
};

export default function AboutPage() {
  return (
    <section className="container max-w-2xl py-20">
      <h1 className="text-5xl font-bold tracking-tight">About</h1>

      <div className="mt-10 space-y-6 text-lg leading-relaxed text-muted-foreground">
        <p>
          Full-stack developer building modern web applications with Next.js, TypeScript, and
          Supabase.
        </p>
        <p>
          I focus on clean architecture, type safety, and delivering polished user experiences. I
          enjoy working across the entire stack — from database design and API architecture to
          responsive UI and developer tooling.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="mb-4 text-xl font-bold">Tech Stack</h2>
        <p className="text-lg text-muted-foreground">
          Next.js &bull; React &bull; TypeScript &bull; Supabase &bull; Tailwind CSS
        </p>
      </div>
    </section>
  );
}
