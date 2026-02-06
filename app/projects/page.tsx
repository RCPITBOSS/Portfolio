import type { Metadata } from 'next';
import { ProjectCard, type Project } from '@/components/projects/project-card';

export const metadata: Metadata = {
  title: 'Projects',
  description: "Things I've built — projects by Brian Greenbaum.",
};

const projects: Project[] = [
  {
    title: 'SaaS Starter Kit',
    description:
      'Full-stack SaaS template featuring complete auth system, user profiles, and protected routes. Modern stack with Next.js, TypeScript, and Supabase.',
    tech: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    image: 'https://placehold.co/1200x800/f5f5f5/6B7280?text=SaaS+Starter+Kit',
    githubUrl: 'https://github.com/RCPITBOSS',
  },
];

export default function ProjectsPage() {
  return (
    <>
      <section className="container py-20">
        <h1 className="text-5xl font-bold tracking-tight">Projects</h1>
        <p className="mt-4 text-lg text-muted-foreground">Things I&apos;ve built</p>
      </section>

      <section className="container pb-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>
    </>
  );
}
