import type { Metadata } from 'next';
import { DashboardHeader, ChangePasswordForm, DeleteAccount } from '@/components/dashboard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Settings',
  description: 'Manage your account settings',
};

export const dynamic = 'force-dynamic';

export default function SettingsPage() {
  return (
    <>
      <DashboardHeader title="Settings" description="Manage your account settings" />
      <div className="flex-1 p-4 md:p-6">
        <Tabs defaultValue="security" className="space-y-6">
          <TabsList>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="danger">Danger Zone</TabsTrigger>
          </TabsList>

          <TabsContent value="security" className="space-y-6">
            <ChangePasswordForm />
          </TabsContent>

          <TabsContent value="danger" className="space-y-6">
            <DeleteAccount />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
