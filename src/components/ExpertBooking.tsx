
import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, Search, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';

const ExpertBooking = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedExpert, setSelectedExpert] = useState<number | null>(null);
  const [selectedIssueType, setSelectedIssueType] = useState('all');
  
  const experts = [
    {
      id: 1,
      name: "Dr. Anjali Sharma",
      specialization: "Crop Disease Specialist",
      rating: 4.8,
      reviewCount: 124,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      expertise: ["pest", "disease"],
      availability: "Available Today",
      languages: ["English", "Hindi"]
    },
    {
      id: 2,
      name: "Dr. Rajiv Patel",
      specialization: "Soil Health Expert",
      rating: 4.9,
      reviewCount: 87,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      expertise: ["soil", "fertilizer"],
      availability: "Available Tomorrow",
      languages: ["English", "Gujarati"]
    },
    {
      id: 3,
      name: "Dr. Sanjay Kumar",
      specialization: "Rice Cultivation Expert",
      rating: 4.7,
      reviewCount: 56,
      image: "https://images.unsplash.com/photo-1580518324671-c2f0833a3af3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      expertise: ["irrigation", "crop selection"],
      availability: "Available Today",
      languages: ["English", "Hindi", "Punjabi"]
    },
    {
      id: 4,
      name: "Dr. Meena Reddy",
      specialization: "Agricultural Economics",
      rating: 4.6,
      reviewCount: 92,
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      expertise: ["market", "economics"],
      availability: "Available in 2 Days",
      languages: ["English", "Telugu", "Tamil"]
    }
  ];

  const filteredExperts = selectedIssueType === 'all' 
    ? experts 
    : experts.filter(expert => expert.expertise.includes(selectedIssueType));

  const issueTypes = [
    { value: 'all', label: 'All Types' },
    { value: 'pest', label: 'Pest Control' },
    { value: 'disease', label: 'Disease Management' },
    { value: 'soil', label: 'Soil Health' },
    { value: 'irrigation', label: 'Irrigation' },
    { value: 'crop selection', label: 'Crop Selection' },
    { value: 'fertilizer', label: 'Fertilizers' },
    { value: 'market', label: 'Market & Pricing' },
    { value: 'economics', label: 'Farm Economics' }
  ];

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", 
    "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-oryza-brown-dark mb-6">OryzaMitra Expert Booking</h1>
        <p className="text-gray-600 mb-8">Connect with agricultural experts for live or scheduled consultations to get personalized advice for your farm.</p>
        
        <Tabs defaultValue="byExpert" className="mb-8">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="byExpert">Find by Expert</TabsTrigger>
            <TabsTrigger value="byDate">Find by Date</TabsTrigger>
          </TabsList>
          
          <TabsContent value="byExpert">
            <div className="mb-6 flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input 
                  placeholder="Search experts by name or specialty" 
                  className="pl-10" 
                />
              </div>
              <select 
                className="oryza-select flex-1"
                value={selectedIssueType}
                onChange={(e) => setSelectedIssueType(e.target.value)}
              >
                {issueTypes.map(type => (
                  <option key={type.value} value={type.value}>{type.label}</option>
                ))}
              </select>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {filteredExperts.map(expert => (
                <Card 
                  key={expert.id} 
                  className={`cursor-pointer transition-all duration-300 ${selectedExpert === expert.id ? 'ring-2 ring-oryza-green' : ''}`}
                  onClick={() => setSelectedExpert(expert.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row items-start gap-4">
                      <div className="sm:w-20 w-full flex justify-center">
                        <img 
                          src={expert.image} 
                          alt={expert.name} 
                          className="w-16 h-16 rounded-full object-cover" 
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-oryza-brown-dark">{expert.name}</h3>
                        <p className="text-sm text-gray-600">{expert.specialization}</p>
                        <div className="flex items-center mt-1">
                          <Star className="w-4 h-4 text-oryza-yellow fill-current" />
                          <span className="ml-1 text-sm font-medium">{expert.rating}</span>
                          <span className="ml-1 text-sm text-gray-500">({expert.reviewCount} reviews)</span>
                        </div>
                        <div className="mt-2 text-sm text-gray-600">
                          <span className="text-oryza-green font-medium">{expert.availability}</span>
                          <span className="mx-2">•</span>
                          Speaks: {expert.languages.join(", ")}
                        </div>
                      </div>
                      <div className="mt-4 sm:mt-0">
                        <Button 
                          className="oryza-button-primary"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedExpert(expert.id);
                            setIsCalendarOpen(true);
                          }}
                        >
                          Book Appointment
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="byDate">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="md:col-span-1">
                <CardContent className="p-6">
                  <h3 className="font-medium text-oryza-brown-dark mb-4">Select Date & Issue</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="oryza-label">Appointment Date</label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal border border-gray-200"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    
                    <div>
                      <label className="oryza-label">Issue Type</label>
                      <select className="oryza-select w-full">
                        {issueTypes.slice(1).map(type => (
                          <option key={type.value} value={type.value}>{type.label}</option>
                        ))}
                      </select>
                    </div>
                    
                    <Button className="oryza-button-primary w-full mt-2">
                      Find Available Experts
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="md:col-span-2">
                <CardContent className="p-6">
                  <h3 className="font-medium text-oryza-brown-dark mb-4">Available Time Slots</h3>
                  {date ? (
                    <div>
                      <p className="text-gray-600 mb-4">Select a time slot for {format(date, "MMMM d, yyyy")}</p>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {timeSlots.map((slot, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            className="flex items-center justify-center"
                          >
                            <Clock className="mr-2 h-4 w-4" />
                            {slot}
                          </Button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <CalendarIcon className="mx-auto h-12 w-12 text-gray-400 mb-2" />
                      <p>Please select a date to view available time slots</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="bg-oryza-green/10 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-oryza-brown-dark mb-4">How OryzaMitra Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-white rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center text-oryza-green font-bold text-lg shadow-sm">1</div>
              <h3 className="font-medium text-oryza-brown-dark mb-2">Select an Expert</h3>
              <p className="text-sm text-gray-600">Choose from our verified agricultural experts based on your needs.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center text-oryza-green font-bold text-lg shadow-sm">2</div>
              <h3 className="font-medium text-oryza-brown-dark mb-2">Book Appointment</h3>
              <p className="text-sm text-gray-600">Select a convenient date and time for your consultation.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center text-oryza-green font-bold text-lg shadow-sm">3</div>
              <h3 className="font-medium text-oryza-brown-dark mb-2">Get Expert Advice</h3>
              <p className="text-sm text-gray-600">Connect via chat, voice, or video call to discuss your farming issues.</p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <h3 className="text-xl font-semibold text-oryza-brown-dark mb-4">Need Immediate Assistance?</h3>
          <p className="text-gray-600 mb-4">Our experts are available for urgent consultations</p>
          <Button className="oryza-button-secondary">
            Request Emergency Consultation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ExpertBooking;
