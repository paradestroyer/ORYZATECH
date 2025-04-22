import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, LogIn, LogOut, User } from 'lucide-react';
import { Button } from './ui/button';
import { useAuth } from '@/hooks/use-auth';
import { AuthContextType } from '@/lib/context/auth-context';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center space-x-3">
                <img className="h-12 w-12 rounded-md shadow-md" src="/lovable-uploads/ef363717-c27c-4be5-a371-775ab5760a65.png" alt="Oryza Tech Logo" />
                <span className="text-oryza-green-default select-none tracking-wide text-base mx-px text-left font-medium py-0 px-[10px]">
                  ORYZA<br />TECH
                </span>
              </Link>
            </div>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
            <Link to="/" className="text-oryza-brown-dark hover:text-oryza-green px-3 py-2 text-sm font-medium">
              Home
            </Link>
            {user && (
              <>
                <Link to="/dashboard" className="text-oryza-brown-dark hover:text-oryza-green px-3 py-2 text-sm font-medium">
                  Dashboard
                </Link>
                <Link to="/expert-booking" className="text-oryza-brown-dark hover:text-oryza-green px-3 py-2 text-sm font-medium">
                  OryzaMitra
                </Link>
                <Link to="/crop-recommendation" className="text-oryza-brown-dark hover:text-oryza-green px-3 py-2 text-sm font-medium">
                  SenseSoil AI
                </Link>
                <Link to="/marketplace" className="text-oryza-brown-dark hover:text-oryza-green px-3 py-2 text-sm font-medium">
                  Marketplace
                </Link>
              </>
            )}
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Hi, {user.name}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate('/dashboard')}>
                    Dashboard
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button 
                variant="default" 
                size="sm" 
                className="ml-3 flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-oryza-green hover:text-white transition-all font-semibold shadow-md"
                onClick={() => navigate('/login')}
              >
                <LogIn size={18} />
                Login / Signup
              </Button>
            )}
          </div>
          
          <div className="flex items-center sm:hidden">
            <button 
              onClick={toggleMenu} 
              className="inline-flex items-center justify-center p-2 rounded-md text-oryza-brown-dark hover:text-oryza-green focus:outline-none" 
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden animate-fade-in">
          <div className="pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-base font-medium text-oryza-brown-dark hover:text-oryza-green" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            {user && (
              <>
                <Link to="/dashboard" className="block px-3 py-2 text-base font-medium text-oryza-brown-dark hover:text-oryza-green" onClick={() => setIsMenuOpen(false)}>
                  Dashboard
                </Link>
                <Link to="/expert-booking" className="block px-3 py-2 text-base font-medium text-oryza-brown-dark hover:text-oryza-green" onClick={() => setIsMenuOpen(false)}>
                  OryzaMitra
                </Link>
                <Link to="/crop-recommendation" className="block px-3 py-2 text-base font-medium text-oryza-brown-dark hover:text-oryza-green" onClick={() => setIsMenuOpen(false)}>
                  SenseSoil AI
                </Link>
                <Link to="/marketplace" className="block px-3 py-2 text-base font-medium text-oryza-brown-dark hover:text-oryza-green" onClick={() => setIsMenuOpen(false)}>
                  Marketplace
                </Link>
              </>
            )}
            <div className="px-3 py-2">
              {user ? (
                <Button 
                  variant="default" 
                  size="default" 
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg hover:bg-oryza-green hover:text-white transition-all font-semibold shadow-md"
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                >
                  <LogOut size={18} />
                  Log out
                </Button>
              ) : (
                <Button 
                  variant="default" 
                  size="default" 
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg hover:bg-oryza-green hover:text-white transition-all font-semibold shadow-md"
                  onClick={() => {
                    navigate('/login');
                    setIsMenuOpen(false);
                  }}
                >
                  <LogIn size={18} />
                  Login / Signup
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;