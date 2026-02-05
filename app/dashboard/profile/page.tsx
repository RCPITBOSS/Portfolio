import type { Metadata } from 'next';
import { DashboardHeader, ProfileForm, AvatarUpload } from '@/components/dashboard';

export const metadata: Metadata = {
  title: 'Profile',
  description: 'Manage your profile information',
};

export const dynamic = 'force-dynamic';

export default function ProfilePage() {
  return (
    <>
      <DashboardHeader title="Profile" description="Manage your profile information" />
      <div className="flex-1 space-y-6 p-4 md:p-6">
        <AvatarUpload />
        <ProfileForm />
      </div>
    </>
  );
}
