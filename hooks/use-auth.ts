'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import type { LoginFormData, SignupFormData, ResetPasswordFormData } from '@/lib/validations';

export function useLogin() {
  const supabase = createClient();
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: LoginFormData) => {
      const { error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
      queryClient.invalidateQueries({ queryKey: ['profile'] });
      router.push('/dashboard');
      router.refresh();
    },
  });
}

export function useSignup() {
  const supabase = createClient();

  return useMutation({
    mutationFn: async (data: SignupFormData) => {
      const { error } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          data: {
            full_name: data.fullName,
          },
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });
      if (error) throw error;
    },
  });
}

export function useResetPassword() {
  const supabase = createClient();

  return useMutation({
    mutationFn: async (data: ResetPasswordFormData) => {
      const { error } = await supabase.auth.resetPasswordForEmail(data.email, {
        redirectTo: `${window.location.origin}/auth/callback?next=/reset-password/update`,
      });
      if (error) throw error;
    },
  });
}

export function useUpdatePassword() {
  const supabase = createClient();
  const router = useRouter();

  return useMutation({
    mutationFn: async (password: string) => {
      const { error } = await supabase.auth.updateUser({ password });
      if (error) throw error;
    },
    onSuccess: () => {
      router.push('/dashboard');
      router.refresh();
    },
  });
}

export function useLogout() {
  const supabase = createClient();
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.clear();
      router.push('/');
      router.refresh();
    },
  });
}

export function useChangePassword() {
  const supabase = createClient();

  return useMutation({
    mutationFn: async ({
      currentPassword,
      newPassword,
    }: {
      currentPassword: string;
      newPassword: string;
    }) => {
      // First verify current password by re-authenticating
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user?.email) throw new Error('No email found');

      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: user.email,
        password: currentPassword,
      });
      if (signInError) throw new Error('Current password is incorrect');

      // Update to new password
      const { error } = await supabase.auth.updateUser({ password: newPassword });
      if (error) throw error;
    },
  });
}

export function useDeleteAccount() {
  const supabase = createClient();
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) throw new Error('Not authenticated');

      // Delete profile first (cascade will handle other data)
      const { error: profileError } = await supabase.from('profiles').delete().eq('id', user.id);
      if (profileError) throw profileError;

      // Sign out the user
      await supabase.auth.signOut();
    },
    onSuccess: () => {
      queryClient.clear();
      router.push('/');
      router.refresh();
    },
  });
}
