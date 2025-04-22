
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import LoginForm from '@/components/LoginForm';

const Index = () => {
  return (
    <div>
      <Navbar />
      
      <main>
        <HeroSection />
        
        <section className="py-16 bg-oryza-soil">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-oryza-brown-dark mb-6">
                  Welcome to Oryza Tech
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Oryza Tech is a next-generation agri-tech platform designed to empower farmers through 
                  digital innovation and AI-based farming solutions.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Our mission is to bridge the gap between traditional farming knowledge and modern technology, 
                  making agriculture more productive, sustainable, and profitable.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="oryza-button-primary">
                    Get Started
                  </button>
                  <button className="oryza-button-secondary">
                    Learn More
                  </button>
                </div>
              </div>
              
              <div className="flex justify-center">
                <LoginForm />
              </div>
            </div>
          </div>
        </section>
        
        <FeaturesSection />
        
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center mb-12">
              <h2 className="text-base text-oryza-green font-semibold tracking-wide uppercase">Testimonials</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-oryza-brown-dark sm:text-4xl">
                Trusted by Farmers Across India
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="oryza-card p-6">
                <div className="flex items-center mb-4">
                  <img 
                    className="h-12 w-12 rounded-full object-cover mr-4" 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
                    alt="Farmer Testimonial" 
                  />
                  <div>
                    <h3 className="text-lg font-medium text-oryza-brown-dark">Rajesh Kumar</h3>
                    <p className="text-sm text-gray-500">Rice Farmer, Bihar</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Oryza Tech's crop recommendation system helped me increase my rice yield by 30%. 
                  The soil analysis and expert advice changed my approach to farming completely."
                </p>
              </div>
              
              <div className="oryza-card p-6">
                <div className="flex items-center mb-4">
                  <img 
                    className="h-12 w-12 rounded-full object-cover mr-4" 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
                    alt="Farmer Testimonial" 
                  />
                  <div>
                    <h3 className="text-lg font-medium text-oryza-brown-dark">Sunita Devi</h3>
                    <p className="text-sm text-gray-500">Wheat Farmer, Punjab</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "The expert booking system on Oryza Tech saved my crops from a pest outbreak. 
                  I got timely advice from specialists without having to travel to the agricultural center."
                </p>
              </div>
              
              <div className="oryza-card p-6">
                <div className="flex items-center mb-4">
                  <img 
                    className="h-12 w-12 rounded-full object-cover mr-4" 
                    src="https://images.unsplash.com/photo-1580518324671-c2f0833a3af3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
                    alt="Farmer Testimonial" 
                  />
                  <div>
                    <h3 className="text-lg font-medium text-oryza-brown-dark">Vikram Singh</h3>
                    <p className="text-sm text-gray-500">Mixed Crop Farmer, Gujarat</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "The marketplace helped me find quality seeds at better prices than local markets. 
                  I also appreciate the weather alerts that help me plan my farming activities."
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gradient-farm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-oryza-brown-dark mb-6">
              Ready to Transform Your Farming?
            </h2>
            <p className="text-xl text-oryza-brown mb-8 max-w-3xl mx-auto">
              Join thousands of farmers who are already using Oryza Tech to improve yields, 
              reduce costs, and make farming more sustainable.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="oryza-button-primary px-8 py-3 text-lg">
                Sign Up Now
              </button>
              <button className="oryza-button-secondary px-8 py-3 text-lg">
                Request a Demo
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
