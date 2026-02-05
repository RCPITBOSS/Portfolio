'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui';
import { Spinner } from '@/components/ui/spinner';
import { useProfile, useUploadAvatar, useToast } from '@/hooks';
import { Camera } from 'lucide-react';

export function AvatarUpload() {
  const { toast } = useToast();
  const { data: profile, isLoading } = useProfile();
  const uploadAvatar = useUploadAvatar();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const initials = profile?.full_name
    ?.split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2) || 'U';

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      toast({
        title: 'Invalid file type',
        description: 'Please upload a JPG, PNG, or WebP image.',
        variant: 'destructive',
      });
      return;
    }

    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: 'File too large',
        description: 'Please upload an image smaller than 5MB.',
        variant: 'destructive',
      });
      return;
    }

    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);

    try {
      await uploadAvatar.mutateAsync(file);
      toast({
        title: 'Avatar updated',
        description: 'Your avatar has been successfully updated.',
        variant: 'success',
      });
      setPreview(null);
    } catch (error) {
      toast({
        title: 'Upload failed',
        description: error instanceof Error ? error.message : 'Failed to upload avatar.',
        variant: 'destructive',
      });
      setPreview(null);
    }

    // Reset input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  if (isLoading) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center py-10">
          <Spinner size="lg" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile Picture</CardTitle>
        <CardDescription>Click on the avatar to upload a new picture.</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center gap-6">
        <div className="relative">
          <Avatar className="h-24 w-24">
            {preview ? (
              <Image
                src={preview}
                alt="Avatar preview"
                fill
                className="object-cover"
              />
            ) : (
              <>
                <AvatarImage src={profile?.avatar_url || undefined} alt={profile?.full_name || ''} />
                <AvatarFallback className="text-2xl">{initials}</AvatarFallback>
              </>
            )}
          </Avatar>
          {uploadAvatar.isPending && (
            <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/50">
              <Spinner size="md" className="text-white" />
            </div>
          )}
        </div>
        <div className="space-y-2">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/jpg,image/png,image/webp"
            className="hidden"
            onChange={handleFileChange}
            disabled={uploadAvatar.isPending}
          />
          <Button
            type="button"
            variant="outline"
            onClick={() => fileInputRef.current?.click()}
            disabled={uploadAvatar.isPending}
          >
            <Camera className="mr-2 h-4 w-4" />
            {uploadAvatar.isPending ? 'Uploading...' : 'Change Avatar'}
          </Button>
          <p className="text-xs text-muted-foreground">
            JPG, PNG or WebP. Max size 5MB.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
