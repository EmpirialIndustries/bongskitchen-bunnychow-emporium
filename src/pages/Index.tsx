import { Navigation } from "@/components/ui/navigation";
import { ProductCard } from "@/components/ui/product-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { products } from "@/lib/products";
import { Link } from "react-router-dom";
import { Star, Clock, MapPin, Users } from "lucide-react";
import kotaHero from "@/assets/kota-hero.jpg";

const Index = () => {
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section - Uber Eats Style */}
      <section className="bg-background py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground leading-tight">
                Order delivery near you
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                Authentic South African kotas made with love and the finest ingredients. 
                Fresh, delicious, and delivered to your door.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Button asChild className="btn-hero text-base h-12 px-6">
                  <Link to="/menu">Order Now</Link>
                </Button>
                <Button variant="outline" asChild className="h-12 px-6 text-base">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={kotaHero} 
                alt="Delicious Kota sandwich with fresh ingredients" 
                className="rounded-lg shadow-[var(--shadow-elevated)] w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-foreground mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Years Serving</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground mb-2">10k+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Menu Items</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground mb-2">4.8</div>
              <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                <Star className="w-4 h-4 fill-foreground text-foreground" />
                Rating
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Popular Kotas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Try our most loved kotas, crafted with authentic ingredients and served fresh
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild size="lg" variant="outline" className="px-8 h-12">
              <Link to="/menu">View Full Menu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-light py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Why Choose Bong's Kitchen
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-foreground rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-background" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground">Fast Service</h3>
              <p className="text-muted-foreground">Quick preparation and delivery to satisfy your cravings</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-foreground rounded-lg flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-background" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground">Quality Ingredients</h3>
              <p className="text-muted-foreground">Only the freshest and finest ingredients in every kota</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-foreground rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-background" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground">Local Favorite</h3>
              <p className="text-muted-foreground">Trusted by the community for authentic South African flavors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Visit Our Kitchen
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-foreground" />
                  <span className="text-muted-foreground">Mpheni Block A (R578), Next to Makhode shop</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-foreground" />
                  <span className="text-muted-foreground">Open Daily: 9:00 AM - 9:00 PM</span>
                </div>
              </div>
              <div className="mt-6">
                <Button asChild className="btn-hero h-12 px-6">
                  <Link to="/contact">Get Directions</Link>
                </Button>
              </div>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-[var(--shadow-card)]">
              <h3 className="text-xl font-bold mb-4 text-foreground">Call Us Now</h3>
              <div className="space-y-3">
                <a href="tel:0647623547" className="block text-lg font-medium hover:text-foreground transition-colors text-muted-foreground">
                  064 762 3547
                </a>
                <a href="tel:0799743605" className="block text-lg font-medium hover:text-foreground transition-colors text-muted-foreground">
                  079 974 3605
                </a>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Call ahead to place your order and skip the wait!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
