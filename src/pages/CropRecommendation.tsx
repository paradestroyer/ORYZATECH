
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CropRecommendation from '@/components/CropRecommendation';

const CropRecommendationPage = () => {
  return (
    <div>
      <Navbar />
      <CropRecommendation />
      <Footer />
    </div>
  );
};

export default CropRecommendationPage;
