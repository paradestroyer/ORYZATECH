import React, { useState, useEffect } from 'react';
import { AuthContext, AuthContextType, User } from './auth-context';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored auth token and validate it
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('auth_token') || sessionStorage.getItem('auth_token');
        if (token) {
          // In a real app, validate the token with your backend
          const storedUser = localStorage.getItem('user') || sessionStorage.getItem('user');
          if (storedUser) {
            setUser(JSON.parse(storedUser));
          }
        }
      } catch (error) {
        console.error('Auth check failed:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (credentials: { username: string; password: string; remember?: boolean }) => {
    try {
      // In a real app, make an API call to your backend
      // This is a mock implementation
      const mockUser = {
        id: '1',
        name: 'Farmer Kumar',
        email: credentials.username,
      };
      
      const storage = credentials.remember ? localStorage : sessionStorage;
      storage.setItem('auth_token', 'mock_token');
      storage.setItem('user', JSON.stringify(mockUser));
      setUser(mockUser);
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const signup = async (userData: { name: string; phone?: string; email?: string; password: string }) => {
    try {
      // In a real app, make an API call to your backend
      // This is a mock implementation
      const mockUser = {
        id: '1',
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
      };
      
      sessionStorage.setItem('auth_token', 'mock_token');
      sessionStorage.setItem('user', JSON.stringify(mockUser));
      setUser(mockUser);
    } catch (error) {
      console.error('Signup failed:', error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user');
    sessionStorage.removeItem('auth_token');
    sessionStorage.removeItem('user');
    setUser(null);
  };

  const value: AuthContextType = {
    user,
    isLoading,
    login,
    signup,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}