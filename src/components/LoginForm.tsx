import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Location } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/hooks/use-auth';
import { toast } from '@/components/ui/use-toast';
import { PasswordStrengthIndicator } from '@/components/ui/password-strength';
import { validatePassword } from '@/lib/utils';

interface LocationState {
  from: {
    pathname: string;
  };
}

interface LoginFormProps {
  standalone?: boolean;
}

const LoginForm = ({ standalone = false }: LoginFormProps) => {
  const navigate = useNavigate();
  const location = useLocation() as Location & { state: LocationState | null };
  const { login, signup } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  // Form states
  const [loginForm, setLoginForm] = useState({ 
    username: '', 
    password: '', 
    remember: false 
  });
  
  const [signupForm, setSignupForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    terms: false
  });

  const [passwordValidation, setPasswordValidation] = useState({
    isValid: false,
    errors: [] as string[],
    strength: 0
  });

  useEffect(() => {
    if (signupForm.password) {
      const validation = validatePassword(signupForm.password);
      setPasswordValidation(validation);
    } else {
      setPasswordValidation({ isValid: false, errors: [], strength: 0 });
    }
  }, [signupForm.password]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginForm.username || !loginForm.password) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      await login({
        username: loginForm.username,
        password: loginForm.password,
        remember: loginForm.remember
      });
      const from = location.state?.from?.pathname || '/dashboard';
      navigate(from, { replace: true });
      toast({
        title: "Success",
        description: "You have been successfully logged in.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Invalid credentials. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!signupForm.fullName || !signupForm.phone || !signupForm.password) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Validate password strength
    if (!passwordValidation.isValid) {
      toast({
        title: "Error",
        description: "Please create a stronger password.",
        variant: "destructive",
      });
      return;
    }

    if (!signupForm.terms) {
      toast({
        title: "Error",
        description: "Please accept the terms and conditions.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    try {
      await signup({
        name: signupForm.fullName,
        phone: signupForm.phone,
        email: signupForm.email,
        password: signupForm.password,
      });
      navigate('/dashboard', { replace: true });
      toast({
        title: "Success",
        description: "Your account has been created successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create account. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={standalone ? "min-h-screen flex items-center justify-center bg-gray-50 px-4" : ""}>
      <div className={`${standalone ? "max-w-md w-full bg-white rounded-xl shadow-lg p-8" : ""} space-y-6`}>
        {standalone && (
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-oryza-brown-dark">Welcome to Oryza Tech</h2>
            <p className="text-gray-600 mt-2">Please sign in to continue</p>
          </div>
        )}
        
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login" className="space-y-4 mt-4">
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Phone or Email</label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Enter your phone or email"
                  className="mt-1"
                  required
                  value={loginForm.username}
                  onChange={(e) => setLoginForm(prev => ({ ...prev, username: e.target.value }))}
                />
              </div>
              
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                  <a href="#" className="text-xs text-oryza-green hover:underline">
                    Forgot password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="mt-1"
                  required
                  value={loginForm.password}
                  onChange={(e) => setLoginForm(prev => ({ ...prev, password: e.target.value }))}
                />
              </div>

              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="h-4 w-4 text-oryza-green focus:ring-oryza-green border-gray-300 rounded"
                  checked={loginForm.remember}
                  onChange={(e) => setLoginForm(prev => ({ ...prev, remember: e.target.checked }))}
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              
              <Button 
                className="w-full"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="w-4 h-4 border-t-2 border-b-2 border-white rounded-full animate-spin mr-2" />
                    Signing in...
                  </div>
                ) : "Sign In"}
              </Button>
            </form>
          </TabsContent>
          
          <TabsContent value="signup" className="space-y-4 mt-4">
            <form onSubmit={handleSignup} className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  className="mt-1"
                  required
                  value={signupForm.fullName}
                  onChange={(e) => setSignupForm(prev => ({ ...prev, fullName: e.target.value }))}
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="mt-1"
                  required
                  value={signupForm.phone}
                  onChange={(e) => setSignupForm(prev => ({ ...prev, phone: e.target.value }))}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email (Optional)</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="mt-1"
                  value={signupForm.email}
                  onChange={(e) => setSignupForm(prev => ({ ...prev, email: e.target.value }))}
                />
              </div>
              
              <div>
                <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">Password</label>
                <Input
                  id="newPassword"
                  type="password"
                  placeholder="Create a password"
                  className="mt-1"
                  required
                  value={signupForm.password}
                  onChange={(e) => setSignupForm(prev => ({ ...prev, password: e.target.value }))}
                />
                {signupForm.password && (
                  <div className="mt-2">
                    <PasswordStrengthIndicator 
                      strength={passwordValidation.strength} 
                      errors={passwordValidation.errors} 
                    />
                  </div>
                )}
              </div>
              
              <div className="flex items-center">
                <input
                  id="terms"
                  type="checkbox"
                  className="h-4 w-4 text-oryza-green focus:ring-oryza-green border-gray-300 rounded"
                  checked={signupForm.terms}
                  onChange={(e) => setSignupForm(prev => ({ ...prev, terms: e.target.checked }))}
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                  I agree to the{" "}
                  <a href="#" className="text-oryza-green hover:underline">
                    Terms and Conditions
                  </a>
                </label>
              </div>
              
              <Button 
                className="w-full"
                type="submit"
                disabled={isLoading || !passwordValidation.isValid}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="w-4 h-4 border-t-2 border-b-2 border-white rounded-full animate-spin mr-2" />
                    Creating account...
                  </div>
                ) : "Sign Up"}
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default LoginForm;
