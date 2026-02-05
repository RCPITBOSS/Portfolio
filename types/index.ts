export * from './database';

export interface User {
  id: string;
  email: string;
  fullName: string | null;
  avatarUrl: string | null;
}

export interface AuthError {
  message: string;
  status?: number;
}

export interface ApiResponse<T> {
  data: T | null;
  error: AuthError | null;
}
