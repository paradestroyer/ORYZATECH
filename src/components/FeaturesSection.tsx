
import React from 'react';
import { Calendar, Search, ShoppingCart, Tractor } from 'lucide-react';

const features = [
  {
    name: 'Farmer Dashboard',
    description:
      'Access personalized insights about your crops, weather, and soil conditions all in one place.',
    icon: Tractor,
  },
  {
    name: 'OryzaMitra',
    description:
      'Connect with agricultural experts for consultations and advice through an easy booking system.',
    icon: Calendar,
  },
  {
    name: 'SenseSoil AI',
    description:
      'Get AI-powered recommendations for crops, fertilizers, and practices based on your soil conditions.',
    icon: Search,
  },
  {
    name: 'Marketplace',
    description:
      'Buy and sell agricultural products including seeds, tools, and fertilizers with secure transactions.',
    icon: ShoppingCart,
  },
];

const FeaturesSection = () => {
  return (
    <div id="features" className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-oryza-green font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-oryza-brown-dark sm:text-4xl">
            A better way to farm
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Oryza Tech brings cutting-edge technology to your farm, making agriculture more efficient,
            sustainable, and profitable.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="oryza-card h-full flex flex-col p-6 hover:border-oryza-green transition-colors">
                  <div>
                    <span className="p-3 rounded-md inline-flex items-center justify-center bg-oryza-green-light text-oryza-green">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-oryza-brown-dark">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500 flex-grow">{feature.description}</p>
                  <div className="mt-4">
                    <a href="#" className="text-sm font-medium text-oryza-green hover:text-oryza-green-dark">
                      Learn more <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
