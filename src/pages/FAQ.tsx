import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Search, MessageCircle, Phone, Mail, Clock, MapPin, CreditCard, Truck } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const faqCategories = [
    {
      id: 'ordering',
      name: 'Ordering',
      icon: <CreditCard className="w-5 h-5" />,
      questions: [
        {
          question: "How do I place an order?",
          answer: "You can place an order through our website by browsing our menu, adding items to your cart, and proceeding to checkout. You can also call us directly at 064 762 3547 or 079 974 3605."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept cash on delivery, EFT, and all major credit cards. Online payments are processed securely through our payment gateway."
        },
        {
          question: "Can I modify my order after placing it?",
          answer: "You can modify your order within 5 minutes of placing it by calling us immediately. After that, we may have already started preparing your food."
        },
        {
          question: "Do you have a minimum order amount?",
          answer: "Our minimum order for delivery is R50. There's no minimum for pickup orders."
        }
      ]
    },
    {
      id: 'delivery',
      name: 'Delivery',
      icon: <Truck className="w-5 h-5" />,
      questions: [
        {
          question: "What are your delivery areas?",
          answer: "We deliver within a 10km radius of our kitchen in Mpheni Block A. This includes most areas of Johannesburg. Call us to confirm if we deliver to your area."
        },
        {
          question: "How long does delivery take?",
          answer: "Delivery typically takes 20-35 minutes depending on your location and current order volume. We'll give you an estimated time when you place your order."
        },
        {
          question: "Is there a delivery fee?",
          answer: "Delivery is free for orders over R100. For orders under R100, there's a R15 delivery fee."
        },
        {
          question: "Can I track my delivery?",
          answer: "Yes! Once your order is out for delivery, you'll receive a tracking link to monitor your driver's location in real-time."
        }
      ]
    },
    {
      id: 'menu',
      name: 'Menu & Food',
      icon: <MapPin className="w-5 h-5" />,
      questions: [
        {
          question: "What makes your kotas special?",
          answer: "Our kotas are made with fresh, quality ingredients and traditional South African recipes. We bake our bread fresh daily and use only the finest meats and vegetables."
        },
        {
          question: "Do you have vegetarian options?",
          answer: "While our specialty is meat-based kotas, we can customize orders to be vegetarian by removing meat and adding extra vegetables and cheese."
        },
        {
          question: "Can I customize my kota?",
          answer: "Absolutely! You can add or remove ingredients, extra cheese, different sauces, and more. Just let us know your preferences when ordering."
        },
        {
          question: "Are your ingredients fresh?",
          answer: "Yes, we source fresh ingredients daily from local suppliers. Our bread is baked fresh every morning, and we never use frozen meats."
        }
      ]
    },
    {
      id: 'account',
      name: 'Account & Support',
      icon: <MessageCircle className="w-5 h-5" />,
      questions: [
        {
          question: "Do I need to create an account to order?",
          answer: "No, you can place orders as a guest. However, creating an account allows you to save addresses, track orders, and earn loyalty points."
        },
        {
          question: "How do I reset my password?",
          answer: "Click 'Forgot Password' on the login page and enter your email. We'll send you a reset link within a few minutes."
        },
        {
          question: "Can I save multiple delivery addresses?",
          answer: "Yes, registered users can save multiple addresses (home, work, etc.) for quick ordering."
        },
        {
          question: "How do I contact customer support?",
          answer: "You can call us at 064 762 3547 or 079 974 3605, email us through our contact form, or visit us at our location in Mpheni Block A."
        }
      ]
    }
  ];

  const allQuestions = faqCategories.flatMap(category => 
    category.questions.map(q => ({ ...q, category: category.name }))
  );

  const filteredQuestions = searchTerm 
    ? allQuestions.filter(q => 
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Find answers to common questions about ordering, delivery, and our delicious kotas
          </p>
          
          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search for answers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 h-12 text-base"
            />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Search Results */}
          {searchTerm && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">
                Search Results ({filteredQuestions.length})
              </h2>
              {filteredQuestions.length === 0 ? (
                <Card>
                  <CardContent className="p-8 text-center">
                    <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">No results found</h3>
                    <p className="text-muted-foreground mb-4">
                      Try different keywords or browse categories below
                    </p>
                    <Button onClick={() => setSearchTerm("")} variant="outline">
                      Clear Search
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Accordion type="single" collapsible className="space-y-4">
                  {filteredQuestions.map((item, index) => (
                    <Card key={index}>
                      <AccordionItem value={`search-${index}`} className="border-0">
                        <AccordionTrigger className="px-6 py-4 hover:no-underline">
                          <div className="flex items-center gap-3 text-left">
                            <span className="font-semibold">{item.question}</span>
                            <Badge variant="secondary" className="text-xs">
                              {item.category}
                            </Badge>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                          <p className="text-muted-foreground">{item.answer}</p>
                        </AccordionContent>
                      </AccordionItem>
                    </Card>
                  ))}
                </Accordion>
              )}
            </div>
          )}

          {/* Categories */}
          {!searchTerm && (
            <div className="space-y-8">
              {faqCategories.map((category) => (
                <div key={category.id}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      {category.icon}
                    </div>
                    <h2 className="text-2xl font-bold">{category.name}</h2>
                  </div>
                  
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.questions.map((item, index) => (
                      <Card key={index}>
                        <AccordionItem value={`${category.id}-${index}`} className="border-0">
                          <AccordionTrigger className="px-6 py-4 hover:no-underline">
                            <span className="font-semibold text-left">{item.question}</span>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-4">
                            <p className="text-muted-foreground">{item.answer}</p>
                          </AccordionContent>
                        </AccordionItem>
                      </Card>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          )}

          {/* Contact Support */}
          <Card className="mt-12">
            <CardContent className="p-8 text-center">
              <MessageCircle className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Still need help?</h3>
              <p className="text-muted-foreground mb-6">
                Can't find what you're looking for? Our friendly team is here to help!
              </p>
              
              <div className="grid md:grid-cols-3 gap-4">
                <Card>
                  <CardContent className="p-4 text-center">
                    <Phone className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h4 className="font-semibold mb-1">Call Us</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      064 762 3547<br />
                      079 974 3605
                    </p>
                    <Button size="sm" variant="outline">Call Now</Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4 text-center">
                    <Mail className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h4 className="font-semibold mb-1">Email Us</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Get in touch via our<br />
                      contact form
                    </p>
                    <Button asChild size="sm" variant="outline">
                      <Link to="/contact">Contact Form</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4 text-center">
                    <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h4 className="font-semibold mb-1">Visit Us</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Mpheni Block A<br />
                      9AM - 9PM Daily
                    </p>
                    <Button size="sm" variant="outline">Get Directions</Button>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FAQ;