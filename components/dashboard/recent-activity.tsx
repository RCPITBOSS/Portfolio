import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui';
import { Activity } from 'lucide-react';

const activities = [
  {
    id: 1,
    action: 'Logged in',
    timestamp: '2 hours ago',
  },
  {
    id: 2,
    action: 'Updated profile',
    timestamp: '1 day ago',
  },
  {
    id: 3,
    action: 'Changed password',
    timestamp: '3 days ago',
  },
  {
    id: 4,
    action: 'Created new project',
    timestamp: '1 week ago',
  },
];

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="h-5 w-5" />
          Recent Activity
        </CardTitle>
        <CardDescription>Your recent actions and events.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
            >
              <span className="text-sm">{activity.action}</span>
              <span className="text-xs text-muted-foreground">{activity.timestamp}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
