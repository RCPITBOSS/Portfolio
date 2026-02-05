import type { Metadata } from 'next';
import { DashboardHeader, StatsCard, RecentActivity, QuickActions } from '@/components/dashboard';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui';
import { Users, CreditCard, Activity, TrendingUp } from 'lucide-react';
import { createClient } from '@/lib/supabase/server';
import type { Profile } from '@/types';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Welcome to your dashboard',
};

export const dynamic = 'force-dynamic';

async function getProfile(): Promise<Profile | null> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  return profile as Profile | null;
}

export default async function DashboardPage() {
  const profile = await getProfile();

  return (
    <>
      <DashboardHeader title="Dashboard" description="Welcome back!" />
      <div className="flex-1 space-y-6 p-4 md:p-6">
        {/* Welcome Section */}
        <Card>
          <CardHeader>
            <CardTitle>Welcome back, {profile?.full_name || 'User'}!</CardTitle>
            <CardDescription>
              Here&apos;s what&apos;s happening with your account today.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Stats Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            title="Total Users"
            value="1,234"
            description="+12% from last month"
            icon={Users}
          />
          <StatsCard
            title="Revenue"
            value="$45,231"
            description="+20.1% from last month"
            icon={CreditCard}
          />
          <StatsCard
            title="Active Sessions"
            value="573"
            description="+201 since last hour"
            icon={Activity}
          />
          <StatsCard
            title="Growth Rate"
            value="+12.5%"
            description="+2.4% from last month"
            icon={TrendingUp}
          />
        </div>

        {/* Activity and Quick Actions */}
        <div className="grid gap-6 lg:grid-cols-2">
          <RecentActivity />
          <QuickActions />
        </div>
      </div>
    </>
  );
}
