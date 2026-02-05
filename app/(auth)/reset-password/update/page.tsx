import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui';
import { UpdatePasswordForm } from '@/components/auth';

export const metadata: Metadata = {
  title: 'Update Password',
  description: 'Set your new password',
};

export const dynamic = 'force-dynamic';

export default function UpdatePasswordPage() {
  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Set new password</CardTitle>
        <CardDescription>Enter your new password below</CardDescription>
      </CardHeader>
      <CardContent>
        <UpdatePasswordForm />
      </CardContent>
    </Card>
  );
}
