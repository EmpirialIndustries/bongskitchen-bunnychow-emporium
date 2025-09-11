import { useState } from "react";
import { ProductCard } from "@/components/ui/product-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { products, extras, chips } from "@/lib/products";
import { ShoppingCart, Phone } from "lucide-react";
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
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-background border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={bongLogo} alt="Bong's Kitchen" className="h-10 w-auto" />
            <span className="text-xl font-bold text-foreground">Bong's Kitchen</span>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="tel:+27123456789" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <Phone size={18} className="ios-icon" />
              <span className="hidden md:inline">011 123 4567</span>
            </a>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <ShoppingCart size={18} className="ios-icon" />
              <span className="text-sm">0</span>
            </Button>
          </div>
        </div>
      </header>
      
      {/* Hero Section with Background */}
      <section 
        className="relative py-24 lg:py-32 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${kotaHero})` }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            Our Menu
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Authentic South African kotas made with love and the finest ingredients
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className="gap-2"
              >
                {category.name}
                <Badge variant="secondary" className="text-xs">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Extras & Add-ons */}
      <section className="section-light py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8 text-foreground">
            Extras & Add-ons
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Extras */}
            <div className="bg-card rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-foreground">Extras</h3>
              <div className="space-y-3">
                {extras.map((extra, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-foreground">{extra.name}</span>
                    <Badge className="price-badge">R{extra.price}</Badge>
                  </div>
                ))}
              </div>
            </div>

            {/* Chips */}
            <div className="bg-card rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-foreground">Chips</h3>
              <div className="space-y-3">
                {chips.map((chip, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-foreground">{chip.name}</span>
                    <Badge className="price-badge">R{chip.price}</Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;