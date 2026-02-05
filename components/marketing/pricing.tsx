import Link from 'next/link';
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    description: 'Perfect for side projects and experimentation.',
    price: '$0',
    period: 'forever',
    features: [
      'Up to 3 projects',
      '1,000 API requests/month',
      'Community support',
      'Basic analytics',
    ],
    cta: 'Get Started',
    href: '/signup',
    highlighted: false,
  },
  {
    name: 'Pro',
    description: 'For growing teams and businesses.',
    price: '$29',
    period: 'per month',
    features: [
      'Unlimited projects',
      '100,000 API requests/month',
      'Priority email support',
      'Advanced analytics',
      'Custom domains',
      'Team collaboration',
    ],
    cta: 'Start Free Trial',
    href: '/signup?plan=pro',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    description: 'For large-scale applications.',
    price: 'Custom',
    period: 'contact us',
    features: [
      'Unlimited everything',
      'Dedicated support',
      'SLA guarantee',
      'Custom integrations',
      'On-premise deployment',
      'Advanced security',
    ],
    cta: 'Contact Sales',
    href: '/contact',
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section className="container py-20">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Simple, transparent pricing
        </h2>
        <p className="text-lg text-muted-foreground">
          Choose the plan that fits your needs. All plans include a 14-day free trial.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={`flex flex-col ${
              plan.highlighted
                ? 'border-primary shadow-lg ring-2 ring-primary'
                : 'border-2'
            }`}
          >
            <CardHeader>
              {plan.highlighted && (
                <div className="mb-2 w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Most Popular
                </div>
              )}
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground"> / {plan.period}</span>
              </div>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col">
              <ul className="mb-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href={plan.href}>
                <Button
                  className="w-full"
                  variant={plan.highlighted ? 'default' : 'outline'}
                >
                  {plan.cta}
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
