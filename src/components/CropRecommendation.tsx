
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Upload, Search, Leaf, CheckCircle } from 'lucide-react';

const CropRecommendation = () => {
  const [isResultsVisible, setIsResultsVisible] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsResultsVisible(true);
  };
  
  const handleFileUpload = () => {
    setIsUploading(true);
    
    // Simulate file upload progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      
      if (progress >= 100) {
        clearInterval(interval);
        setIsUploading(false);
        setIsResultsVisible(true);
      }
    }, 300);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-oryza-brown-dark mb-6">SenseSoil AI - Crop Recommendation</h1>
        <p className="text-gray-600 mb-8">
          Our AI-powered system analyzes your soil conditions and local climate data to recommend the best crops, 
          fertilizers, and farming practices for optimal yield.
        </p>
        
        <Tabs defaultValue="manual" className="mb-8">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="manual">Enter Soil Data Manually</TabsTrigger>
            <TabsTrigger value="upload">Upload Soil Test Report</TabsTrigger>
          </TabsList>
          
          <TabsContent value="manual">
            <div className="oryza-card p-6">
              <form onSubmit={handleFormSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="oryza-label">Soil Type</label>
                    <select className="oryza-select w-full">
                      <option value="">Select Soil Type</option>
                      <option value="loamy">Loamy</option>
                      <option value="clayey">Clayey</option>
                      <option value="sandy">Sandy</option>
                      <option value="silty">Silty</option>
                      <option value="peaty">Peaty</option>
                      <option value="chalky">Chalky</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="oryza-label">Soil pH</label>
                    <Input type="number" step="0.1" placeholder="Enter soil pH (e.g. 6.5)" className="oryza-input" />
                  </div>
                  
                  <div>
                    <label className="oryza-label">Nitrogen (kg/ha)</label>
                    <Input type="number" placeholder="Enter nitrogen content" className="oryza-input" />
                  </div>
                  
                  <div>
                    <label className="oryza-label">Phosphorus (kg/ha)</label>
                    <Input type="number" placeholder="Enter phosphorus content" className="oryza-input" />
                  </div>
                  
                  <div>
                    <label className="oryza-label">Potassium (kg/ha)</label>
                    <Input type="number" placeholder="Enter potassium content" className="oryza-input" />
                  </div>
                  
                  <div>
                    <label className="oryza-label">Organic Matter (%)</label>
                    <Input type="number" step="0.1" placeholder="Enter organic matter %" className="oryza-input" />
                  </div>
                  
                  <div>
                    <label className="oryza-label">Temperature (°C)</label>
                    <Input type="number" step="0.1" placeholder="Average temperature" className="oryza-input" />
                  </div>
                  
                  <div>
                    <label className="oryza-label">Humidity (%)</label>
                    <Input type="number" placeholder="Average humidity" className="oryza-input" />
                  </div>
                  
                  <div>
                    <label className="oryza-label">Rainfall (mm)</label>
                    <Input type="number" placeholder="Annual rainfall" className="oryza-input" />
                  </div>
                  
                  <div>
                    <label className="oryza-label">Region</label>
                    <Input type="text" placeholder="Your agricultural region" className="oryza-input" />
                  </div>
                </div>
                
                <Button className="oryza-button-primary" type="submit">
                  <Search className="mr-2 h-4 w-4" />
                  Get Recommendations
                </Button>
              </form>
            </div>
          </TabsContent>
          
          <TabsContent value="upload">
            <div className="oryza-card p-6">
              <div className="text-center py-10">
                {isUploading ? (
                  <div className="max-w-md mx-auto">
                    <p className="text-oryza-brown-dark mb-2">Uploading and analyzing report...</p>
                    <Progress value={uploadProgress} className="h-2 mb-2" />
                    <p className="text-sm text-gray-500">{uploadProgress}% Complete</p>
                  </div>
                ) : (
                  <>
                    <div className="mb-6">
                      <div className="w-20 h-20 bg-oryza-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Upload className="h-10 w-10 text-oryza-green" />
                      </div>
                      <h3 className="text-lg font-medium text-oryza-brown-dark">Upload Your Soil Test Report</h3>
                      <p className="text-gray-500 mt-2 mb-4">
                        Supported formats: PDF, JPG, PNG (Max size: 10MB)
                      </p>
                    </div>
                    
                    <div className="max-w-md mx-auto">
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer hover:border-oryza-green transition-colors">
                        <input type="file" className="hidden" id="soil-report" />
                        <label htmlFor="soil-report" className="cursor-pointer block text-center">
                          <span className="text-oryza-green font-medium">Click to upload</span>
                          <span className="text-gray-500"> or drag and drop</span>
                        </label>
                      </div>
                      
                      <Button className="oryza-button-primary w-full mt-4" onClick={handleFileUpload}>
                        Upload and Analyze
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        {isResultsVisible && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold text-oryza-brown-dark mb-6">SenseSoil AI Recommendations</h2>
            
            <div className="oryza-card p-6 mb-8">
              <h3 className="text-xl font-semibold text-oryza-brown-dark mb-4">Recommended Crops</h3>
              <p className="text-gray-600 mb-6">Based on your soil analysis and local conditions, we recommend the following crops:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
                  <div className="bg-oryza-green/10 rounded-full p-2 w-12 h-12 flex items-center justify-center mb-4">
                    <Leaf className="h-6 w-6 text-oryza-green" />
                  </div>
                  <h4 className="font-medium text-oryza-brown-dark">Rice (Basmati 1121)</h4>
                  <div className="flex items-center mt-1 mb-2">
                    <span className="text-sm text-gray-500 mr-2">Suitability:</span>
                    <div className="flex-1">
                      <Progress value={95} className="h-2" />
                    </div>
                    <span className="text-sm font-medium text-oryza-green ml-2">95%</span>
                  </div>
                  <p className="text-sm text-gray-600">Excellent choice for your soil conditions with high yield potential.</p>
                </div>
                
                <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
                  <div className="bg-oryza-green/10 rounded-full p-2 w-12 h-12 flex items-center justify-center mb-4">
                    <Leaf className="h-6 w-6 text-oryza-green" />
                  </div>
                  <h4 className="font-medium text-oryza-brown-dark">Wheat (HD 2967)</h4>
                  <div className="flex items-center mt-1 mb-2">
                    <span className="text-sm text-gray-500 mr-2">Suitability:</span>
                    <div className="flex-1">
                      <Progress value={85} className="h-2" />
                    </div>
                    <span className="text-sm font-medium text-oryza-green ml-2">85%</span>
                  </div>
                  <p className="text-sm text-gray-600">Well-suited as a rotation crop, particularly in the winter season.</p>
                </div>
                
                <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
                  <div className="bg-oryza-green/10 rounded-full p-2 w-12 h-12 flex items-center justify-center mb-4">
                    <Leaf className="h-6 w-6 text-oryza-green" />
                  </div>
                  <h4 className="font-medium text-oryza-brown-dark">Mustard (Pusa Bold)</h4>
                  <div className="flex items-center mt-1 mb-2">
                    <span className="text-sm text-gray-500 mr-2">Suitability:</span>
                    <div className="flex-1">
                      <Progress value={78} className="h-2" />
                    </div>
                    <span className="text-sm font-medium text-oryza-green ml-2">78%</span>
                  </div>
                  <p className="text-sm text-gray-600">Good option as an inter-crop or for crop diversification.</p>
                </div>
              </div>
              
              <Button className="oryza-button-secondary">
                View All Compatible Crops
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="oryza-card p-6">
                <h3 className="text-xl font-semibold text-oryza-brown-dark mb-4">Fertilizer Recommendations</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-oryza-green mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-oryza-brown-dark">Base Application</p>
                      <p className="text-sm text-gray-600">
                        Apply 120 kg/ha of NPK (10-26-26) before sowing/planting
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-oryza-green mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-oryza-brown-dark">First Top Dressing</p>
                      <p className="text-sm text-gray-600">
                        Apply 60 kg/ha of urea at tillering stage (approx. 20-25 days after sowing)
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-oryza-green mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-oryza-brown-dark">Second Top Dressing</p>
                      <p className="text-sm text-gray-600">
                        Apply 40 kg/ha of urea at panicle initiation stage
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-oryza-green mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-oryza-brown-dark">Micronutrients</p>
                      <p className="text-sm text-gray-600">
                        Apply zinc sulfate (25 kg/ha) to address detected zinc deficiency
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="oryza-card p-6">
                <h3 className="text-xl font-semibold text-oryza-brown-dark mb-4">Farming Practices</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-oryza-green mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-oryza-brown-dark">Water Management</p>
                      <p className="text-sm text-gray-600">
                        Maintain 5cm water level during critical growth stages; implement alternate wetting and drying for water conservation
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-oryza-green mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-oryza-brown-dark">Pest Management</p>
                      <p className="text-sm text-gray-600">
                        Monitor for stem borer and leaf folder; use pheromone traps and neem-based pesticides
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-oryza-green mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-oryza-brown-dark">Soil Health Management</p>
                      <p className="text-sm text-gray-600">
                        Incorporate rice straw after harvest; consider green manuring with Sesbania during fallow period
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-oryza-green mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-oryza-brown-dark">Harvest Timing</p>
                      <p className="text-sm text-gray-600">
                        Harvest when 80-85% of grains turn golden yellow for optimal yield and quality
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="oryza-card p-6 mb-8">
              <h3 className="text-xl font-semibold text-oryza-brown-dark mb-4">Soil Health Assessment</h3>
              <p className="text-gray-600 mb-6">Based on your soil test results, here's an analysis of your soil health:</p>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Overall Soil Health</span>
                    <span className="text-sm text-oryza-green">Good</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">pH Level (6.5)</span>
                      <span className="text-sm text-oryza-green">Optimal</span>
                    </div>
                    <Progress value={90} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Nitrogen (120 kg/ha)</span>
                      <span className="text-sm text-yellow-600">Low</span>
                    </div>
                    <Progress value={35} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Phosphorus (25 kg/ha)</span>
                      <span className="text-sm text-yellow-600">Medium</span>
                    </div>
                    <Progress value={55} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Potassium (280 kg/ha)</span>
                      <span className="text-sm text-oryza-green">High</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Organic Matter (1.2%)</span>
                      <span className="text-sm text-yellow-600">Medium</span>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Microbial Activity</span>
                      <span className="text-sm text-oryza-green">Good</span>
                    </div>
                    <Progress value={70} className="h-2" />
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-oryza-green/10 rounded-lg">
                <h4 className="font-medium text-oryza-brown-dark mb-2">Soil Health Improvement Suggestions</h4>
                <p className="text-sm text-gray-600">
                  Consider adding organic compost to improve nitrogen content and overall soil structure. 
                  Your soil has good potassium levels but could benefit from increased phosphorus. 
                  Green manuring is recommended to improve organic matter content.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <Button className="oryza-button-primary mx-2">
                Download Detailed Report
              </Button>
              <Button variant="outline" className="mx-2">
                Share Results
              </Button>
            </div>
          </div>
        )}
        
        <div className="bg-oryza-green/10 rounded-lg p-6 mt-8">
          <h2 className="text-xl font-semibold text-oryza-brown-dark mb-4">How SenseSoil AI Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-white rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center text-oryza-green font-bold text-lg shadow-sm">1</div>
              <h3 className="font-medium text-oryza-brown-dark mb-2">Input Soil Data</h3>
              <p className="text-sm text-gray-600">Enter soil test results manually or upload your soil test report</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center text-oryza-green font-bold text-lg shadow-sm">2</div>
              <h3 className="font-medium text-oryza-brown-dark mb-2">AI Analysis</h3>
              <p className="text-sm text-gray-600">Our AI analyzes your soil data, local climate, and farming conditions</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center text-oryza-green font-bold text-lg shadow-sm">3</div>
              <h3 className="font-medium text-oryza-brown-dark mb-2">Get Recommendations</h3>
              <p className="text-sm text-gray-600">Receive personalized crop, fertilizer, and farming practice recommendations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CropRecommendation;
