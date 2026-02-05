'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { Button, Input, Label, Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui';
import { useResetPassword, useToast } from '@/hooks';
import { resetPasswordSchema, type ResetPasswordFormData } from '@/lib/validations';
import { Spinner } from '@/components/ui/spinner';
import { Mail } from 'lucide-react';

export function ResetPasswordForm() {
  const { toast } = useToast();
  const resetPassword = useResetPassword();
  const [emailSent, setEmailSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const onSubmit = async (data: ResetPasswordFormData) => {
    try {
      await resetPassword.mutateAsync(data);
      setEmailSent(true);
    } catch (error) {
      toast({
        title: 'Request failed',
        description:
          error instanceof Error ? error.message : 'An error occurred. Please try again.',
        variant: 'destructive',
      });
    }
  };

  if (emailSent) {
    return (
      <Card className="w-full">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
            <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>
          <CardTitle>Check your email</CardTitle>
          <CardDescription>
            We&apos;ve sent you a password reset link. Please check your email to reset your
            password.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <Link href="/login" className="text-primary hover:underline">
            Back to login
          </Link>
        </CardContent>
      </Card>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="name@example.com"
          autoComplete="email"
          {...register('email')}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p id="email-error" className="text-sm text-destructive">
            {errors.email.message}
          </p>
        )}
      </div>

      <Button type="submit" className="w-full" disabled={resetPassword.isPending}>
        {resetPassword.isPending ? (
          <>
            <Spinner size="sm" className="mr-2" />
            Sending...
          </>
        ) : (
          'Send reset link'
        )}
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        Remember your password?{' '}
        <Link href="/login" className="text-primary hover:underline">
          Sign in
        </Link>
      </p>
    </form>
  );
}
