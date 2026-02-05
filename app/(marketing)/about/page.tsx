import type { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about SaaS Starter Kit and our mission.',
};

const team = [
  {
    name: 'Alex Johnson',
    role: 'Founder & CEO',
    bio: 'Former engineer at a major tech company with 10+ years of experience building scalable applications.',
  },
  {
    name: 'Sarah Chen',
    role: 'CTO',
    bio: 'Full-stack developer passionate about developer experience and open-source software.',
  },
  {
    name: 'Michael Park',
    role: 'Head of Design',
    bio: 'Designer focused on creating beautiful, accessible, and user-friendly interfaces.',
  },
];

export default function AboutPage() {
  return (
    <div className="container py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-6 text-4xl font-bold tracking-tight">About Us</h1>
        <p className="mb-8 text-lg text-muted-foreground">
          We believe that building great software should be accessible to everyone. That&apos;s why
          we created SaaS Starter Kit - a production-ready foundation for your next project.
        </p>

        <section className="mb-16">
          <h2 className="mb-4 text-2xl font-bold">Our Mission</h2>
          <p className="text-muted-foreground">
            Our mission is to help developers and businesses launch their products faster by
            providing a solid, well-tested foundation. We handle the boring stuff so you can focus
            on what makes your product unique.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="mb-4 text-2xl font-bold">Why SaaS Starter Kit?</h2>
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex gap-3">
              <span className="font-semibold text-foreground">Production Ready:</span>
              Every feature is tested and optimized for real-world usage.
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-foreground">Best Practices:</span>
              Built following industry standards for security, performance, and accessibility.
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-foreground">Modern Stack:</span>
              Uses the latest technologies like Next.js 14, TypeScript, and Supabase.
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-foreground">Fully Customizable:</span>
              Own your code. Modify anything to fit your needs.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-8 text-2xl font-bold">Our Team</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <Card key={member.name}>
                <CardContent className="pt-6">
                  <div className="mb-4 h-16 w-16 rounded-full bg-muted" />
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-sm text-primary">{member.role}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
