import { useState } from "react";
import { Navigation } from "@/components/ui/navigation";
import { ProductCard } from "@/components/ui/product-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { products, extras, chips } from "@/lib/products";

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
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-background py-12 lg:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground">
            Our Menu
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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