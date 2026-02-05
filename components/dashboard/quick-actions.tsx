import Link from 'next/link';
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui';
import { Plus, Settings, FileText, Users } from 'lucide-react';

const actions = [
  {
    label: 'New Project',
    icon: Plus,
    href: '/dashboard/projects/new',
  },
  {
    label: 'View Docs',
    icon: FileText,
    href: '/docs',
  },
  {
    label: 'Team Settings',
    icon: Users,
    href: '/dashboard/team',
  },
  {
    label: 'Settings',
    icon: Settings,
    href: '/dashboard/settings',
  },
];

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>Common tasks and shortcuts.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {actions.map((action) => (
            <Link key={action.href} href={action.href}>
              <Button variant="outline" className="h-auto w-full flex-col gap-2 py-4">
                <action.icon className="h-5 w-5" />
                <span className="text-xs">{action.label}</span>
              </Button>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
