import { Navigation } from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";
import kotaHero from "@/assets/kota-hero.jpg";
import kotaVariety from "@/assets/kota-variety.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-dark py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                The Story of <span className="text-gradient">Bong's Kitchen</span>
              </h1>
              <p className="text-xl text-secondary-foreground/80 mb-8">
                Born from a passion for authentic South African flavors, we've been serving 
                the community with love, quality, and unmatched taste since day one.
              </p>
              <Button asChild size="lg" className="btn-hero">
                <Link to="/menu">Try Our Kotas</Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src={kotaHero} 
                alt="Delicious Kota" 
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gradient">Mission</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              To bring authentic, delicious, and affordable South African kotas to our community, 
              using only the freshest ingredients and traditional recipes passed down through generations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="food-card text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Made with Love</h3>
                <p className="text-muted-foreground">
                  Every kota is prepared with care and attention to detail, 
                  ensuring you get the best taste in every bite.
                </p>
              </CardContent>
            </Card>

            <Card className="food-card text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Quality First</h3>
                <p className="text-muted-foreground">
                  We source only the finest ingredients and maintain the highest 
                  standards of food safety and quality.
                </p>
              </CardContent>
            </Card>

            <Card className="food-card text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Community Focused</h3>
                <p className="text-muted-foreground">
                  We're proud to be part of this community and committed to 
                  serving our neighbors with respect and excellence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Makes Us Special */}
      <section className="section-dark py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={kotaVariety} 
                alt="Variety of Kotas" 
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What Makes Us <span className="text-gradient">Special</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Badge className="price-badge mt-1">1</Badge>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Authentic Recipes</h3>
                    <p className="text-secondary-foreground/80">
                      Traditional South African kota recipes that have been perfected over years.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Badge className="price-badge mt-1">2</Badge>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Fresh Daily</h3>
                    <p className="text-secondary-foreground/80">
                      All our bread is baked fresh daily, and ingredients are sourced from trusted local suppliers.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Badge className="price-badge mt-1">3</Badge>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Generous Portions</h3>
                    <p className="text-secondary-foreground/80">
                      We believe in giving our customers value for money with generous, satisfying portions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Badge className="price-badge mt-1">4</Badge>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Fast Service</h3>
                    <p className="text-secondary-foreground/80">
                      Quick preparation without compromising on quality. Your meal is ready when you are.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our <span className="text-gradient">Customers</span> Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="food-card">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Best kotas in the area! The full house kota is absolutely amazing. 
                  Fresh ingredients and great value for money."
                </p>
                <div className="font-semibold">Thabo M.</div>
              </CardContent>
            </Card>

            <Card className="food-card">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Been coming here for years. Consistent quality and friendly service. 
                  The rib kota is my favorite!"
                </p>
                <div className="font-semibold">Sarah L.</div>
              </CardContent>
            </Card>

            <Card className="food-card">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Authentic taste that reminds me of home. Great portions and 
                  reasonable prices. Highly recommended!"
                </p>
                <div className="font-semibold">James K.</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-dark py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to <span className="text-gradient">Taste</span> the Difference?
          </h2>
          <p className="text-xl text-secondary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have made Bong's Kitchen their go-to place for authentic kotas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-hero">
              <Link to="/menu">View Menu</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;