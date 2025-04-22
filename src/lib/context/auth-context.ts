import { createContext } from 'react';

export interface User {
  id: string;
  name: string;
  email?: string;
  phone?: string;
}

export interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (credentials: { username: string; password: string; remember?: boolean }) => Promise<void>;
  signup: (userData: { name: string; phone?: string; email?: string; password: string }) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);