import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AIConfigProvider } from "@/lib/context/AIConfigContext";
import { AuthProvider } from "@/lib/context/AuthContext";
import { APICache } from "@/lib/utils/api-cache";
import { useEffect } from "react";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import ExpertBooking from "./pages/ExpertBooking";
import CropRecommendation from "./pages/CropRecommendation";
import Marketplace from "./pages/Marketplace";
import NotFound from "./pages/NotFound";
import LoginForm from "./components/LoginForm";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    APICache.startMaintenance();
    return () => {
      APICache.stopMaintenance();
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AIConfigProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/login" element={<LoginForm standalone />} />
                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/expert-booking"
                  element={
                    <ProtectedRoute>
                      <ExpertBooking />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/crop-recommendation"
                  element={
                    <ProtectedRoute>
                      <CropRecommendation />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/marketplace"
                  element={
                    <ProtectedRoute>
                      <Marketplace />
                    </ProtectedRoute>
                  }
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </AIConfigProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
