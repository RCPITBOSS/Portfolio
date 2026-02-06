import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui';
import { ProjectCard } from '@/components/projects/project-card';
import { PostCard } from '@/components/blog/post-card';
import { getAllPosts } from '@/lib/blog';

const featuredProject = {
  title: 'SaaS Starter Kit',
  description:
    'Full-stack SaaS template featuring complete auth system, user profiles, and protected routes. Modern stack with Next.js, TypeScript, and Supabase.',
  tech: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Tailwind CSS'],
  image: 'https://placehold.co/1200x800/f5f5f5/6B7280?text=SaaS+Starter+Kit',
  githubUrl: 'https://github.com/RCPITBOSS',
};

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="container py-20 md:py-32">
        <div className="flex flex-col items-center gap-12 md:flex-row md:justify-between">
          <div className="max-w-xl text-center md:text-left">
            <h1 className="text-5xl font-bold tracking-tight md:text-6xl">BRIAN GREENBAUM</h1>
            <p className="mt-4 text-xl font-medium text-muted-foreground">Full-Stack Developer</p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Building modern web applications with Next.js, TypeScript, and Supabase
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
              <Button asChild size="lg" className="bg-[#FAFF00] text-black hover:bg-[#FAFF00]/80">
                <Link href="/projects">View Projects</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-[#00FF85] text-foreground hover:bg-[#00FF85]/10"
              >
                <Link href="/blog">Read Blog</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-64 w-64 shrink-0 overflow-hidden rounded-full bg-muted md:h-80 md:w-80">
            <Image
              src="https://placehold.co/400x400/f5f5f5/6B7280?text=BG"
              alt="Brian Greenbaum"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="border-t bg-muted/30 py-20">
        <div className="container">
          <h2 className="mb-10 text-3xl font-bold tracking-tight">Featured Projects</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard {...featuredProject} />
          </div>
          <div className="mt-10 text-center">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-[#00FF85] text-foreground hover:bg-[#00FF85]/10"
            >
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      {posts.length > 0 && (
        <section className="py-20">
          <div className="container">
            <h2 className="mb-10 text-3xl font-bold tracking-tight">Latest Posts</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <PostCard key={post.slug} {...post} />
              ))}
            </div>
            <div className="mt-10 text-center">
              <Button
                asChild
                size="lg"
                className="bg-[#00FF85] text-black hover:bg-[#00FF85]/80"
              >
                <Link href="/blog">View All Posts</Link>
              </Button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
