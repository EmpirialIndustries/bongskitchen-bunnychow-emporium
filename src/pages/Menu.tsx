import { useState } from "react";
import { ProductCard } from "@/components/ui/product-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { products, extras, chips } from "@/lib/products";
import { ShoppingCart, Phone, MapPin, Search, Home, User, Heart, Menu as MenuIcon } from "lucide-react";
import bongLogo from "@/assets/bongs-kitchen-logo.png";
import kotaHero from "@/assets/kota-hero.jpg";

const categories = [
  { id: 'all', name: 'All Items', count: products.length },
  { id: 'kota', name: 'Kota Menu', count: products.filter(p => p.category === 'kota').length },
  { id: 'rib-kota', name: 'Rib Kota', count: products.filter(p => p.category === 'rib-kota').length },
  { id: 'combo', name: 'Combos', count: products.filter(p => p.category === 'combo').length }
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile-First Header */}
      <header className="sticky top-0 z-50 w-full bg-background border-b border-border">
        <div className="px-4 h-16 flex items-center justify-between">
          {/* Left: Menu/Logo */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="md:hidden">
              <MenuIcon size={20} />
            </Button>
            <img src={bongLogo} alt="Bong's Kitchen" className="h-8 w-auto" />
            <div className="hidden md:block">
              <span className="text-lg font-bold">Bong's Kitchen</span>
            </div>
          </div>
          
          {/* Right: Location & Cart */}
          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-2 text-muted-foreground">
              <MapPin size={16} />
              <span className="text-sm">Johannesburg, SA</span>
            </div>
            <Button variant="ghost" size="sm">
              <ShoppingCart size={20} />
              <span className="ml-1 text-sm">0</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Location Bar - Mobile */}
      <div className="md:hidden px-4 py-3 bg-secondary/50 border-b">
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin size={16} className="text-orange" />
          <span className="text-sm font-medium">Deliver to Johannesburg, SA</span>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-4 py-4 bg-background">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
          <Input 
            placeholder="Search for kotas..." 
            className="pl-10 h-12 bg-secondary border-0 rounded-xl"
          />
        </div>
      </div>

      {/* Featured Promo Banner */}
      <div className="px-4 pb-6">
        <div 
          className="relative h-32 md:h-40 rounded-2xl overflow-hidden bg-gradient-to-r from-orange to-orange/80"
          style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${kotaHero})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="absolute inset-0 p-6 flex flex-col justify-center">
            <h2 className="text-white text-xl md:text-2xl font-bold mb-2">
              Free delivery on orders over R100
            </h2>
            <p className="text-white/90 text-sm mb-3">
              Authentic South African kotas delivered fresh
            </p>
            <Button size="sm" className="bg-white text-orange hover:bg-white/90 w-fit">
              Order Now
            </Button>
          </div>
        </div>
      </div>

      {/* Category Selection */}
      <div className="px-4 pb-6">
        <h3 className="text-lg font-semibold mb-4">Select by Category</h3>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={`flex-shrink-0 rounded-full px-6 ${
                activeCategory === category.id 
                ? "bg-orange text-white hover:bg-orange/90" 
                : "border-border hover:bg-secondary"
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Products Section */}
      <div className="px-4 pb-20">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold">
            {activeCategory === 'all' ? 'All Items' : categories.find(c => c.id === activeCategory)?.name}
          </h3>
          <Button variant="ghost" size="sm" className="text-orange">
            See All
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="aspect-video bg-secondary relative overflow-hidden">
                <img 
                  src={kotaHero} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3">
                  <Button size="sm" variant="ghost" className="bg-white/80 hover:bg-white w-8 h-8 p-0 rounded-full">
                    <Heart size={16} />
                  </Button>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-base">{product.name}</h4>
                  <span className="text-lg font-bold">R{product.price}</span>
                </div>
                
                <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      ⭐ 4.5
                    </span>
                    <span>•</span>
                    <span>20-25 mins</span>
                  </div>
                  
                  <Button size="sm" className="bg-orange hover:bg-orange/90 text-white rounded-full px-4">
                    Add
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation - Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t border-border">
        <div className="flex items-center justify-around py-2">
          <Button variant="ghost" className="flex flex-col items-center py-2 px-3">
            <Home size={20} className="text-orange" />
            <span className="text-xs mt-1 text-orange">Home</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center py-2 px-3">
            <Search size={20} className="text-muted-foreground" />
            <span className="text-xs mt-1 text-muted-foreground">Search</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center py-2 px-3">
            <ShoppingCart size={20} className="text-muted-foreground" />
            <span className="text-xs mt-1 text-muted-foreground">Cart</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center py-2 px-3">
            <User size={20} className="text-muted-foreground" />
            <span className="text-xs mt-1 text-muted-foreground">Account</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Menu;