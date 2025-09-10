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
      
      {/* Hero Section */}
      <section className="relative section-dark py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-kitchen-dark via-kitchen-wood to-kitchen-dark opacity-90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Authentic <span className="text-gradient">Kotas</span><br />
                Made Fresh Daily
              </h1>
              <p className="text-xl text-secondary-foreground/80 mb-8 max-w-xl">
                Experience the best South African kotas in town. Fresh ingredients, 
                authentic flavors, and unmatched quality in every bite.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="btn-hero text-lg px-8 py-4">
                  <Link to="/menu">Order Now</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-black">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative w-full max-w-lg mx-auto">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
                <img 
                  src={kotaHero} 
                  alt="Delicious Kota" 
                  className="relative z-10 w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Years Serving</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">10k+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Menu Items</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">4.8</div>
              <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                <Star className="w-4 h-4 fill-primary text-primary" />
                Rating
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Popular <span className="text-gradient">Kotas</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Try our most loved kotas, crafted with authentic ingredients and served fresh
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild size="lg" variant="outline" className="px-8">
              <Link to="/menu">View Full Menu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-dark py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-gradient">Bong's Kitchen</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Service</h3>
              <p className="text-secondary-foreground/80">Quick preparation and delivery to satisfy your cravings</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Ingredients</h3>
              <p className="text-secondary-foreground/80">Only the freshest and finest ingredients in every kota</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">Local Favorite</h3>
              <p className="text-secondary-foreground/80">Trusted by the community for authentic South African flavors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Visit Our <span className="text-gradient">Kitchen</span>
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Mpheni Block A (R578), Next to Makhode shop</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>Open Daily: 9:00 AM - 9:00 PM</span>
                </div>
              </div>
              <div className="mt-6">
                <Button asChild className="btn-hero">
                  <Link to="/contact">Get Directions</Link>
                </Button>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Call Us Now</h3>
              <div className="space-y-3">
                <a href="tel:0647623547" className="block text-lg font-medium hover:text-primary transition-colors">
                  064 762 3547
                </a>
                <a href="tel:0799743605" className="block text-lg font-medium hover:text-primary transition-colors">
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
