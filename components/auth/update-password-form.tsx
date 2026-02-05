'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input, Label } from '@/components/ui';
import { useUpdatePassword, useToast } from '@/hooks';
import { updatePasswordSchema, type UpdatePasswordFormData } from '@/lib/validations';
import { Spinner } from '@/components/ui/spinner';

export function UpdatePasswordForm() {
  const { toast } = useToast();
  const updatePassword = useUpdatePassword();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdatePasswordFormData>({
    resolver: zodResolver(updatePasswordSchema),
  });

  const onSubmit = async (data: UpdatePasswordFormData) => {
    try {
      await updatePassword.mutateAsync(data.password);
      toast({
        title: 'Password updated',
        description: 'Your password has been successfully updated.',
        variant: 'success',
      });
    } catch (error) {
      toast({
        title: 'Update failed',
        description:
          error instanceof Error ? error.message : 'An error occurred. Please try again.',
        variant: 'destructive',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="password">New Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="Enter your new password"
          autoComplete="new-password"
          {...register('password')}
          aria-describedby={errors.password ? 'password-error' : undefined}
        />
        {errors.password && (
          <p id="password-error" className="text-sm text-destructive">
            {errors.password.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <Input
          id="confirmPassword"
          type="password"
          placeholder="Confirm your new password"
          autoComplete="new-password"
          {...register('confirmPassword')}
          aria-describedby={errors.confirmPassword ? 'confirmPassword-error' : undefined}
        />
        {errors.confirmPassword && (
          <p id="confirmPassword-error" className="text-sm text-destructive">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <Button type="submit" className="w-full" disabled={updatePassword.isPending}>
        {updatePassword.isPending ? (
          <>
            <Spinner size="sm" className="mr-2" />
            Updating...
          </>
        ) : (
          'Update password'
        )}
      </Button>
    </form>
  );
}
