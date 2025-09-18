import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText, Scale, AlertTriangle, CreditCard } from "lucide-react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <Button asChild variant="ghost" className="mb-6">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </Button>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-muted-foreground">
              Last updated: January 2024
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Agreement to Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  By accessing and using Bong's Kitchen services, you accept and agree to be bound by 
                  the terms and provision of this agreement. If you do not agree to abide by the above, 
                  please do not use this service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Ordering and Payment
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Order Placement</h4>
                  <p className="text-muted-foreground">
                    Orders can be placed through our website or by calling our restaurant directly. 
                    All orders are subject to availability and acceptance by Bong's Kitchen.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Pricing</h4>
                  <p className="text-muted-foreground">
                    All prices are listed in South African Rand (ZAR) and include applicable taxes. 
                    Prices are subject to change without notice. The price charged will be the price 
                    displayed at the time of order placement.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Payment</h4>
                  <p className="text-muted-foreground">
                    We accept cash on delivery, EFT, and major credit cards. Payment is required 
                    at the time of order placement for online orders, or upon delivery for cash orders.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Order Modifications</h4>
                  <p className="text-muted-foreground">
                    Order modifications or cancellations must be made within 5 minutes of order 
                    placement by calling us directly. After this time, we may have already begun 
                    food preparation.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Delivery Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Delivery Areas</h4>
                  <p className="text-muted-foreground">
                    We deliver within a 10km radius of our kitchen location. Delivery availability 
                    may vary based on weather conditions, traffic, and other factors beyond our control.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Delivery Times</h4>
                  <p className="text-muted-foreground">
                    Estimated delivery times are approximate and may vary based on order volume, 
                    weather, and traffic conditions. We strive to deliver within the estimated timeframe 
                    but cannot guarantee exact delivery times.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Delivery Fees</h4>
                  <p className="text-muted-foreground">
                    Delivery is free for orders over R100. Orders under R100 incur a R15 delivery fee. 
                    Additional charges may apply for deliveries to remote locations.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Failed Deliveries</h4>
                  <p className="text-muted-foreground">
                    If delivery cannot be completed due to incorrect address, unavailability of 
                    customer, or other customer-related issues, the customer remains responsible 
                    for payment and may be charged for redelivery.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Food Safety and Quality</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Food Preparation</h4>
                  <p className="text-muted-foreground">
                    All food is prepared in accordance with local health and safety regulations. 
                    We maintain high standards of hygiene and food safety in our kitchen.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Allergens</h4>
                  <p className="text-muted-foreground">
                    Our kitchen handles various allergens including gluten, dairy, eggs, and nuts. 
                    While we take precautions, we cannot guarantee that our food is free from 
                    cross-contamination. Please inform us of any allergies when ordering.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Quality Issues</h4>
                  <p className="text-muted-foreground">
                    If you are not satisfied with your order, please contact us within 30 minutes 
                    of delivery. We will work to resolve any quality issues promptly and fairly.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>User Accounts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Account Creation</h4>
                  <p className="text-muted-foreground">
                    You may create an account to save preferences and track orders. You are 
                    responsible for maintaining the confidentiality of your account credentials.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Account Security</h4>
                  <p className="text-muted-foreground">
                    You are responsible for all activities that occur under your account. 
                    Please notify us immediately of any unauthorized use of your account.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Account Termination</h4>
                  <p className="text-muted-foreground">
                    We reserve the right to terminate accounts that violate these terms or 
                    engage in fraudulent activity.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="w-5 h-5" />
                  Liability and Disclaimers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Service Availability</h4>
                  <p className="text-muted-foreground">
                    Our services are provided "as is" and "as available." We do not guarantee 
                    uninterrupted service and may suspend operations for maintenance, holidays, 
                    or unforeseen circumstances.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Limitation of Liability</h4>
                  <p className="text-muted-foreground">
                    Our liability is limited to the cost of the order. We are not liable for 
                    indirect, incidental, or consequential damages arising from our services.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Force Majeure</h4>
                  <p className="text-muted-foreground">
                    We are not liable for delays or failures in performance due to circumstances 
                    beyond our reasonable control, including but not limited to natural disasters, 
                    power outages, or government actions.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Prohibited Uses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  You may not use our services for any unlawful purpose or in any way that could 
                  damage, disable, or impair our services. Prohibited activities include:
                </p>
                
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Providing false or misleading information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Using our services for fraudulent purposes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Attempting to gain unauthorized access to our systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Harassing or abusing our staff or delivery personnel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Violating any applicable laws or regulations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  All content on our website, including text, graphics, logos, images, and software, 
                  is the property of Bong's Kitchen and is protected by copyright and other intellectual 
                  property laws. You may not reproduce, distribute, or create derivative works without 
                  our express written permission.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Changes to Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We reserve the right to modify these terms at any time. Changes will be effective 
                  immediately upon posting on our website. Your continued use of our services after 
                  changes are posted constitutes acceptance of the modified terms.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Governing Law</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  These terms are governed by the laws of South Africa. Any disputes arising from 
                  these terms or our services will be resolved in the courts of South Africa.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Phone:</strong> 064 762 3547 or 079 974 3605</p>
                  <p><strong>Address:</strong> Mpheni Block A (R578), Next to Makhode shop</p>
                  <p><strong>Email:</strong> Through our <Link to="/contact" className=\"text-primary hover:underline">contact form</Link></p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              By using our services, you acknowledge that you have read and agree to these terms.
            </p>
            <Button asChild className="btn-hero">
              <Link to="/menu">Start Ordering</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;