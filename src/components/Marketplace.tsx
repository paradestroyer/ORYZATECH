
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Star, ShoppingCart, Tag } from 'lucide-react';

const Marketplace = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'seeds', name: 'Seeds' },
    { id: 'fertilizers', name: 'Fertilizers' },
    { id: 'pesticides', name: 'Pesticides' },
    { id: 'tools', name: 'Tools & Equipment' },
    { id: 'irrigation', name: 'Irrigation' },
  ];
  
  const products = [
    {
      id: 1,
      name: 'Basmati 1121 Rice Seeds',
      price: 120,
      unit: 'kg',
      rating: 4.8,
      reviews: 245,
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
      seller: 'AgriSeeds Ltd.',
      sellerRating: 4.7,
      category: 'seeds',
      discount: 10,
      inStock: true,
    },
    {
      id: 2,
      name: 'Premium NPK 10-26-26 Fertilizer',
      price: 850,
      unit: '50kg bag',
      rating: 4.6,
      reviews: 189,
      image: 'https://images.unsplash.com/photo-1542223616-9de9adb5e3b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
      seller: 'Green Earth Fertilizers',
      sellerRating: 4.5,
      category: 'fertilizers',
      discount: 0,
      inStock: true,
    },
    {
      id: 3,
      name: 'Garden Sprayer 5L',
      price: 450,
      unit: 'piece',
      rating: 4.4,
      reviews: 76,
      image: 'https://images.unsplash.com/photo-1586088252134-91a0a337bd3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
      seller: 'AgriTools',
      sellerRating: 4.3,
      category: 'tools',
      discount: 15,
      inStock: true,
    },
    {
      id: 4,
      name: 'Organic Vermicompost',
      price: 320,
      unit: '10kg bag',
      rating: 4.9,
      reviews: 213,
      image: 'https://images.unsplash.com/photo-1526673945462-9fe0a2006799?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
      seller: 'Organic Agro Solutions',
      sellerRating: 4.8,
      category: 'fertilizers',
      discount: 0,
      inStock: true,
    },
    {
      id: 5,
      name: 'HD 2967 Wheat Seeds',
      price: 95,
      unit: 'kg',
      rating: 4.7,
      reviews: 158,
      image: 'https://images.unsplash.com/photo-1535901402227-83f675e8f552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
      seller: 'Premium Seeds',
      sellerRating: 4.6,
      category: 'seeds',
      discount: 5,
      inStock: true,
    },
    {
      id: 6,
      name: 'Drip Irrigation Kit (0.5 Acre)',
      price: 4500,
      unit: 'set',
      rating: 4.5,
      reviews: 92,
      image: 'https://images.unsplash.com/photo-1622383563204-ef5c18668d88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
      seller: 'Water Systems Inc.',
      sellerRating: 4.4,
      category: 'irrigation',
      discount: 0,
      inStock: false,
    },
  ];
  
  const filteredProducts = products.filter(product => {
    // Apply category filter
    if (selectedCategory !== 'all' && product.category !== selectedCategory) {
      return false;
    }
    
    // Apply search filter
    if (searchQuery.trim() !== '') {
      return product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
             product.seller.toLowerCase().includes(searchQuery.toLowerCase());
    }
    
    return true;
  });
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-oryza-brown-dark mb-6">Agricultural Marketplace</h1>
        <p className="text-gray-600 mb-8">
          Browse and purchase quality agricultural products directly from verified sellers. 
          From seeds and fertilizers to tools and equipment, find everything you need for your farm.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="md:w-1/4">
            <div className="oryza-card p-6 sticky top-20">
              <h2 className="text-lg font-semibold text-oryza-brown-dark mb-4">Filters</h2>
              
              <div className="mb-6">
                <h3 className="text-sm font-medium text-oryza-brown mb-2">Categories</h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <div key={category.id} className="flex items-center">
                      <input
                        type="radio"
                        id={category.id}
                        name="category"
                        className="h-4 w-4 text-oryza-green focus:ring-oryza-green"
                        checked={selectedCategory === category.id}
                        onChange={() => setSelectedCategory(category.id)}
                      />
                      <label htmlFor={category.id} className="ml-2 text-sm text-gray-600">
                        {category.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-sm font-medium text-oryza-brown mb-2">Price Range</h3>
                <div className="flex items-center space-x-2">
                  <Input
                    type="number"
                    placeholder="Min"
                    className="w-full text-sm"
                  />
                  <span>-</span>
                  <Input
                    type="number"
                    placeholder="Max"
                    className="w-full text-sm"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-sm font-medium text-oryza-brown mb-2">Ratings</h3>
                <div className="space-y-2">
                  {[4, 3, 2, 1].map(rating => (
                    <div key={rating} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`rating-${rating}`}
                        className="h-4 w-4 text-oryza-green focus:ring-oryza-green rounded"
                      />
                      <label htmlFor={`rating-${rating}`} className="ml-2 text-sm text-gray-600 flex items-center">
                        {rating}+ <Star className="h-3 w-3 fill-current text-oryza-yellow ml-1" />
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-sm font-medium text-oryza-brown mb-2">Availability</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="in-stock"
                      className="h-4 w-4 text-oryza-green focus:ring-oryza-green rounded"
                    />
                    <label htmlFor="in-stock" className="ml-2 text-sm text-gray-600">
                      In Stock Only
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="discount"
                      className="h-4 w-4 text-oryza-green focus:ring-oryza-green rounded"
                    />
                    <label htmlFor="discount" className="ml-2 text-sm text-gray-600">
                      Discounted Items
                    </label>
                  </div>
                </div>
              </div>
              
              <Button className="w-full" variant="outline">
                Reset Filters
              </Button>
            </div>
          </div>
          
          <div className="md:w-3/4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input 
                  placeholder="Search products, brands, sellers..." 
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="flex items-center">
                <label htmlFor="sort" className="text-sm text-gray-600 mr-2">Sort by:</label>
                <select
                  id="sort"
                  className="oryza-select text-sm"
                  defaultValue="popularity"
                >
                  <option value="popularity">Popularity</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest First</option>
                </select>
              </div>
            </div>
            
            <Tabs defaultValue="grid" className="mb-6">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  {filteredProducts.length} products found
                </span>
                <TabsList>
                  <TabsTrigger value="grid">Grid</TabsTrigger>
                  <TabsTrigger value="list">List</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="grid" className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map(product => (
                    <Card key={product.id} className="overflow-hidden transition-all duration-300 hover:shadow-md">
                      <div className="relative">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="h-48 w-full object-cover" 
                        />
                        {product.discount > 0 && (
                          <div className="absolute top-2 right-2 bg-oryza-yellow text-oryza-brown-dark text-xs font-bold px-2 py-1 rounded">
                            {product.discount}% OFF
                          </div>
                        )}
                        {!product.inStock && (
                          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <span className="text-white font-medium">Out of Stock</span>
                          </div>
                        )}
                      </div>
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-1">
                          <h3 className="font-medium text-oryza-brown-dark line-clamp-2">{product.name}</h3>
                        </div>
                        <div className="flex items-center mb-2">
                          <div className="flex">
                            <Star className="h-4 w-4 fill-current text-oryza-yellow" />
                            <span className="text-sm font-medium ml-1">{product.rating}</span>
                          </div>
                          <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                          <span className="text-xs text-gray-500 mx-2">•</span>
                          <span className="text-xs text-gray-500">Sold by {product.seller}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div>
                            <span className="font-bold text-oryza-green">₹{product.price}</span>
                            <span className="text-xs text-gray-500 ml-1">per {product.unit}</span>
                          </div>
                          <Button 
                            size="sm" 
                            className="bg-oryza-green text-white rounded-full p-2 h-8 w-8"
                            disabled={!product.inStock}
                          >
                            <ShoppingCart className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="list" className="mt-6">
                <div className="space-y-4">
                  {filteredProducts.map(product => (
                    <Card key={product.id} className="overflow-hidden transition-all duration-300 hover:shadow-md">
                      <CardContent className="p-0">
                        <div className="flex flex-col sm:flex-row">
                          <div className="relative sm:w-48 h-48">
                            <img 
                              src={product.image} 
                              alt={product.name} 
                              className="h-full w-full object-cover" 
                            />
                            {product.discount > 0 && (
                              <div className="absolute top-2 right-2 bg-oryza-yellow text-oryza-brown-dark text-xs font-bold px-2 py-1 rounded">
                                {product.discount}% OFF
                              </div>
                            )}
                            {!product.inStock && (
                              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                <span className="text-white font-medium">Out of Stock</span>
                              </div>
                            )}
                          </div>
                          <div className="p-4 flex-1 flex flex-col">
                            <div className="mb-2">
                              <h3 className="font-medium text-oryza-brown-dark text-lg">{product.name}</h3>
                              <div className="flex items-center mt-1">
                                <div className="flex">
                                  <Star className="h-4 w-4 fill-current text-oryza-yellow" />
                                  <span className="text-sm font-medium ml-1">{product.rating}</span>
                                </div>
                                <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                                <span className="text-xs text-gray-500 mx-2">•</span>
                                <span className="text-xs text-gray-500">Sold by {product.seller}</span>
                              </div>
                            </div>
                            
                            <p className="text-sm text-gray-600 flex-grow mb-4">
                              Premium quality {product.name.toLowerCase()} that ensures high yield and robust growth for your crops.
                            </p>
                            
                            <div className="flex items-center justify-between mt-auto">
                              <div>
                                <span className="font-bold text-oryza-green text-lg">₹{product.price}</span>
                                <span className="text-sm text-gray-500 ml-1">per {product.unit}</span>
                              </div>
                              <Button 
                                className="oryza-button-primary"
                                disabled={!product.inStock}
                              >
                                <ShoppingCart className="h-4 w-4 mr-2" />
                                Add to Cart
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="flex justify-center mt-8">
              <Button variant="outline" className="mx-1">Previous</Button>
              <Button variant="outline" className="mx-1 bg-oryza-green text-white">1</Button>
              <Button variant="outline" className="mx-1">2</Button>
              <Button variant="outline" className="mx-1">3</Button>
              <Button variant="outline" className="mx-1">Next</Button>
            </div>
          </div>
        </div>
        
        <div className="oryza-card p-6 mb-8">
          <h2 className="text-2xl font-semibold text-oryza-brown-dark mb-4">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {products.slice(0, 4).map(product => (
              <div key={product.id} className="flex flex-col">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="h-40 w-full object-cover rounded-lg" 
                  />
                  {product.discount > 0 && (
                    <div className="absolute top-2 right-2 bg-oryza-yellow text-oryza-brown-dark text-xs font-bold px-2 py-1 rounded">
                      {product.discount}% OFF
                    </div>
                  )}
                </div>
                <div className="mt-2">
                  <h3 className="font-medium text-oryza-brown-dark line-clamp-1">{product.name}</h3>
                  <div className="flex items-center">
                    <div className="flex">
                      <Star className="h-3 w-3 fill-current text-oryza-yellow" />
                      <span className="text-xs font-medium ml-1">{product.rating}</span>
                    </div>
                    <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                  </div>
                  <div className="mt-1">
                    <span className="font-bold text-oryza-green">₹{product.price}</span>
                    <span className="text-xs text-gray-500 ml-1">per {product.unit}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="oryza-card p-6">
          <h2 className="text-2xl font-semibold text-oryza-brown-dark mb-4">Top Sellers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
                  alt="AgriSeeds Ltd." 
                  className="h-14 w-14 rounded-full object-cover mr-4" 
                />
                <div>
                  <h3 className="font-medium text-oryza-brown-dark">AgriSeeds Ltd.</h3>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-current text-oryza-yellow" />
                    <span className="text-sm font-medium ml-1">4.7</span>
                    <span className="text-xs text-gray-500 ml-1">(450+ reviews)</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Specializes in high-quality seeds for various crops, with focus on rice and wheat varieties.
              </p>
              <Button variant="outline" className="w-full">
                View Products
              </Button>
            </div>
            
            <div className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
                  alt="Green Earth Fertilizers" 
                  className="h-14 w-14 rounded-full object-cover mr-4" 
                />
                <div>
                  <h3 className="font-medium text-oryza-brown-dark">Green Earth Fertilizers</h3>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-current text-oryza-yellow" />
                    <span className="text-sm font-medium ml-1">4.5</span>
                    <span className="text-xs text-gray-500 ml-1">(320+ reviews)</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Leading provider of chemical and organic fertilizers with expert guidance on application.
              </p>
              <Button variant="outline" className="w-full">
                View Products
              </Button>
            </div>
            
            <div className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
                  alt="AgriTools" 
                  className="h-14 w-14 rounded-full object-cover mr-4" 
                />
                <div>
                  <h3 className="font-medium text-oryza-brown-dark">AgriTools</h3>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-current text-oryza-yellow" />
                    <span className="text-sm font-medium ml-1">4.3</span>
                    <span className="text-xs text-gray-500 ml-1">(280+ reviews)</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                One-stop shop for all farming equipment, from hand tools to advanced sprayers and machinery.
              </p>
              <Button variant="outline" className="w-full">
                View Products
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
