import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui';
import { Shield, Zap, Database, Palette } from 'lucide-react';

const features = [
  {
    title: 'Authentication Ready',
    description:
      'Complete authentication system with email/password, email verification, and password reset. Built with Supabase Auth.',
    icon: Shield,
  },
  {
    title: 'Lightning Fast',
    description:
      'Built on Next.js 14 with the App Router for optimal performance. Server Components by default with streaming support.',
    icon: Zap,
  },
  {
    title: 'Database Included',
    description:
      'PostgreSQL database with Supabase. Includes Row Level Security, real-time subscriptions, and automatic backups.',
    icon: Database,
  },
  {
    title: 'Beautiful UI',
    description:
      'Modern, accessible components built with Tailwind CSS and shadcn/ui. Dark mode support out of the box.',
    icon: Palette,
  },
];

export function Features() {
  return (
    <section className="container py-20">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Everything you need to ship fast
        </h2>
        <p className="text-lg text-muted-foreground">
          Stop wasting time on boilerplate. Start with a solid foundation and focus on what makes
          your product unique.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <Card key={feature.title} className="border-2 transition-colors hover:border-primary/50">
            <CardHeader>
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
