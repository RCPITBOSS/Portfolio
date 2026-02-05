'use client';

import { useState } from 'react';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label,
} from '@/components/ui';
import { Spinner } from '@/components/ui/spinner';
import { useDeleteAccount, useToast } from '@/hooks';
import { AlertTriangle } from 'lucide-react';

export function DeleteAccount() {
  const { toast } = useToast();
  const deleteAccount = useDeleteAccount();
  const [open, setOpen] = useState(false);
  const [confirmation, setConfirmation] = useState('');

  const handleDelete = async () => {
    if (confirmation !== 'DELETE') return;

    try {
      await deleteAccount.mutateAsync();
      toast({
        title: 'Account deleted',
        description: 'Your account has been permanently deleted.',
      });
    } catch (error) {
      toast({
        title: 'Deletion failed',
        description: error instanceof Error ? error.message : 'Failed to delete account.',
        variant: 'destructive',
      });
    }
  };

  return (
    <Card className="border-destructive">
      <CardHeader>
        <CardTitle className="text-destructive">Delete Account</CardTitle>
        <CardDescription>
          Permanently delete your account and all associated data. This action cannot be undone.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="destructive">Delete Account</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-destructive" />
                Delete Account
              </DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your account and remove
                all your data from our servers.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="confirmation">
                  Type <span className="font-mono font-bold">DELETE</span> to confirm
                </Label>
                <Input
                  id="confirmation"
                  value={confirmation}
                  onChange={(e) => setConfirmation(e.target.value)}
                  placeholder="DELETE"
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button
                variant="destructive"
                onClick={handleDelete}
                disabled={confirmation !== 'DELETE' || deleteAccount.isPending}
              >
                {deleteAccount.isPending ? (
                  <>
                    <Spinner size="sm" className="mr-2" />
                    Deleting...
                  </>
                ) : (
                  'Delete Account'
                )}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}
