import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui';
import { LoginForm } from '@/components/auth';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Sign in to your account',
};

export const dynamic = 'force-dynamic';

export default function LoginPage() {
  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Welcome back</CardTitle>
        <CardDescription>Enter your credentials to sign in to your account</CardDescription>
      </CardHeader>
      <CardContent>
        <LoginForm />
      </CardContent>
    </Card>
  );
}
