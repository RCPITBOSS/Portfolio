import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui';
import { SignupForm } from '@/components/auth';

export const metadata: Metadata = {
  title: 'Sign Up',
  description: 'Create a new account',
};

export const dynamic = 'force-dynamic';

export default function SignupPage() {
  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Create an account</CardTitle>
        <CardDescription>Enter your details to create your account</CardDescription>
      </CardHeader>
      <CardContent>
        <SignupForm />
      </CardContent>
    </Card>
  );
}
