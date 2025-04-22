import React from 'react';
import { Calendar, CloudRain, CloudSun, Leaf } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AIModelSettings } from '@/components/ui/ai-model-settings';
import { AIAssistant } from '@/components/ui/ai-assistant';

const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <div className="oryza-card p-6">
            <h2 className="text-2xl font-bold text-oryza-brown-dark mb-4">Welcome, Farmer Kumar!</h2>
            <div className="bg-oryza-green/10 p-4 rounded-lg">
              <div className="flex items-center">
                <Leaf className="h-10 w-10 text-oryza-green mr-4" />
                <div>
                  <h3 className="font-medium text-oryza-brown-dark">Today's Farming Tip</h3>
                  <p className="text-gray-600">Consider intercropping your rice with azolla to improve nitrogen fixation and increase yield.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="font-semibold text-oryza-brown-dark mb-3">Your Active Crops</h3>
              <div className="space-y-4">
                <div className="bg-white border border-gray-100 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">Rice (Basmati 1121)</h4>
                    <span className="text-sm text-oryza-green">Day 45 of 120</span>
                  </div>
                  <Progress value={37} className="h-2 mb-2" />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Planted: June 15</span>
                    <span>Expected Harvest: October 12</span>
                  </div>
                </div>
                
                <div className="bg-white border border-gray-100 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">Wheat (HD 2967)</h4>
                    <span className="text-sm text-oryza-green">Day 20 of 145</span>
                  </div>
                  <Progress value={14} className="h-2 mb-2" />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Planted: July 5</span>
                    <span>Expected Harvest: November 27</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <AIAssistant />
          </div>
        </div>
        
        <div>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Weather</CardTitle>
              <CardDescription>Pusa, New Delhi</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <CloudSun className="h-12 w-12 text-oryza-yellow mr-4" />
                  <div>
                    <div className="text-3xl font-bold">32°C</div>
                    <div className="text-gray-500">Partly Cloudy</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">
                    Humidity: 65%
                  </div>
                  <div className="text-sm text-gray-500">
                    Wind: 8 km/h
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <h4 className="font-medium mb-2">3-Day Forecast</h4>
                <div className="flex justify-between">
                  <div className="text-center">
                    <div className="text-sm text-gray-500">Mon</div>
                    <CloudSun className="h-6 w-6 mx-auto my-1 text-oryza-yellow" />
                    <div className="text-sm font-medium">33°C</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-500">Tue</div>
                    <CloudRain className="h-6 w-6 mx-auto my-1 text-gray-400" />
                    <div className="text-sm font-medium">30°C</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-500">Wed</div>
                    <CloudRain className="h-6 w-6 mx-auto my-1 text-gray-400" />
                    <div className="text-sm font-medium">29°C</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="mt-6">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Upcoming Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-oryza-yellow/20 p-2 rounded-full">
                    <Calendar className="h-5 w-5 text-oryza-yellow-dark" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-oryza-brown-dark">Second Fertilizer Application</p>
                    <p className="text-xs text-gray-500">Tomorrow, 6:00 AM</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-oryza-green/20 p-2 rounded-full">
                    <Calendar className="h-5 w-5 text-oryza-green" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-oryza-brown-dark">Irrigation Schedule</p>
                    <p className="text-xs text-gray-500">July 28, 5:30 AM</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-oryza-brown/20 p-2 rounded-full">
                    <Calendar className="h-5 w-5 text-oryza-brown" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-oryza-brown-dark">Pest Monitoring</p>
                    <p className="text-xs text-gray-500">July 30, 8:00 AM</p>
                  </div>
                </div>
              </div>
              
              <button className="w-full mt-4 text-sm text-oryza-green hover:underline">
                View All Activities
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Soil Health</CardTitle>
            <CardDescription>Based on last soil test - July 10</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">pH Level</span>
                  <span className="text-sm text-gray-500">6.5 (Optimal)</span>
                </div>
                <Progress value={70} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Nitrogen</span>
                  <span className="text-sm text-gray-500">Low (120 kg/ha)</span>
                </div>
                <Progress value={35} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Phosphorus</span>
                  <span className="text-sm text-gray-500">Medium (25 kg/ha)</span>
                </div>
                <Progress value={55} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Potassium</span>
                  <span className="text-sm text-gray-500">High (280 kg/ha)</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Organic Matter</span>
                  <span className="text-sm text-gray-500">Medium (1.2%)</span>
                </div>
                <Progress value={60} className="h-2" />
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-100">
              <a href="#" className="text-sm text-oryza-green hover:underline">Schedule New Soil Test</a>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Crop Health</CardTitle>
            <CardDescription>Rice (Basmati 1121) - Field 1</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium">Overall Health</p>
                  <p className="text-xs text-gray-500">Based on latest assessment</p>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Good
                </span>
              </div>
              
              <div className="pt-2 border-t border-gray-100">
                <h4 className="text-sm font-medium mb-2">Recent Observations</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="inline-block h-2 w-2 rounded-full bg-green-500 mt-1.5 mr-2"></span>
                    <span>Healthy leaf color and development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-2 w-2 rounded-full bg-yellow-500 mt-1.5 mr-2"></span>
                    <span>Minor insect activity detected on north side</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-2 w-2 rounded-full bg-green-500 mt-1.5 mr-2"></span>
                    <span>Water levels optimal for current growth stage</span>
                  </li>
                </ul>
              </div>
              
              <div className="pt-2 border-t border-gray-100">
                <h4 className="text-sm font-medium mb-2">Recommendations</h4>
                <p className="text-sm text-gray-600">
                  Consider applying neem-based pest management in the north section of the field within 3 days.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="oryza-card p-6">
        <h3 className="text-lg font-medium text-oryza-brown-dark mb-4">Notifications</h3>
        <div className="space-y-4">
          <div className="flex items-start pb-4 border-b border-gray-100">
            <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full">
              <CloudRain className="h-5 w-5 text-blue-500" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-oryza-brown-dark">Weather Alert</p>
              <p className="text-sm text-gray-500">Heavy rainfall expected in your area in the next 48 hours.</p>
              <p className="text-xs text-gray-400 mt-1">Today, 9:32 AM</p>
            </div>
          </div>
          
          <div className="flex items-start pb-4 border-b border-gray-100">
            <div className="flex-shrink-0 bg-green-100 p-2 rounded-full">
              <Leaf className="h-5 w-5 text-green-500" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-oryza-brown-dark">Crop Alert</p>
              <p className="text-sm text-gray-500">Your rice crop is entering the flowering stage. Consider adjusting water levels.</p>
              <p className="text-xs text-gray-400 mt-1">Yesterday, 4:15 PM</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-purple-100 p-2 rounded-full">
              <Calendar className="h-5 w-5 text-purple-500" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-oryza-brown-dark">Expert Consultation Reminder</p>
              <p className="text-sm text-gray-500">Your appointment with Dr. Sharma is scheduled for tomorrow at 11:00 AM.</p>
              <p className="text-xs text-gray-400 mt-1">Yesterday, 10:00 AM</p>
            </div>
          </div>
        </div>
        
        <button className="w-full mt-4 text-sm text-oryza-green hover:underline">
          View All Notifications
        </button>
      </div>
      
      <div className="oryza-card p-6 mt-8">
        <h3 className="text-lg font-medium text-oryza-brown-dark mb-4">Settings</h3>
        <div className="max-w-md">
          <AIModelSettings />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
