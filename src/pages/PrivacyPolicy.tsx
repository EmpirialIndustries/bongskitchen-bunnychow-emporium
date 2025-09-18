import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Eye, Lock, UserCheck } from "lucide-react";

const PrivacyPolicy = () => {
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
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">
              Last updated: January 2024
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Personal Information</h4>
                  <p className="text-muted-foreground">
                    When you create an account or place an order, we collect information such as your name, 
                    email address, phone number, and delivery address. This information is necessary to 
                    process your orders and provide our services.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Order Information</h4>
                  <p className="text-muted-foreground">
                    We collect details about your orders, including items purchased, order history, 
                    preferences, and payment information (processed securely through our payment partners).
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Usage Data</h4>
                  <p className="text-muted-foreground">
                    We may collect information about how you use our website and services, including 
                    pages visited, time spent on the site, and interaction patterns to improve our services.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserCheck className="w-5 h-5" />
                  How We Use Your Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Process and fulfill your food orders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Communicate with you about your orders and account</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Provide customer support and respond to inquiries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Send promotional offers and updates (with your consent)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Improve our services and develop new features</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Comply with legal obligations and prevent fraud</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="w-5 h-5" />
                  Information Sharing
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We do not sell, trade, or rent your personal information to third parties. 
                  We may share your information only in the following circumstances:
                </p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-1">Service Providers</h4>
                    <p className="text-muted-foreground text-sm">
                      With trusted partners who help us operate our business (payment processors, 
                      delivery services, etc.) under strict confidentiality agreements.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-1">Legal Requirements</h4>
                    <p className="text-muted-foreground text-sm">
                      When required by law, court order, or government regulation.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-1">Business Transfer</h4>
                    <p className="text-muted-foreground text-sm">
                      In the event of a merger, acquisition, or sale of our business assets.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We implement appropriate security measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction. This includes:
                </p>
                
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Secure SSL encryption for data transmission</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Regular security audits and updates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Limited access to personal data by authorized personnel only</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Secure payment processing through certified providers</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Your Rights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  You have the following rights regarding your personal information:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-1">Access</h4>
                      <p className="text-sm text-muted-foreground">
                        Request a copy of your personal data
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-1">Correction</h4>
                      <p className="text-sm text-muted-foreground">
                        Update or correct inaccurate information
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-1">Deletion</h4>
                      <p className="text-sm text-muted-foreground">
                        Request deletion of your personal data
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-1">Portability</h4>
                      <p className="text-sm text-muted-foreground">
                        Receive your data in a portable format
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-1">Opt-out</h4>
                      <p className="text-sm text-muted-foreground">
                        Unsubscribe from marketing communications
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-1">Restriction</h4>
                      <p className="text-sm text-muted-foreground">
                        Limit how we process your data
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cookies and Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We use cookies and similar technologies to enhance your experience on our website. 
                  These help us remember your preferences, analyze site usage, and provide personalized content.
                </p>
                
                <p className="text-muted-foreground">
                  You can control cookie settings through your browser preferences. However, 
                  disabling certain cookies may affect the functionality of our website.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about this Privacy Policy or how we handle your 
                  personal information, please contact us:
                </p>
                
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Phone:</strong> 064 762 3547 or 079 974 3605</p>
                  <p><strong>Address:</strong> Mpheni Block A (R578), Next to Makhode shop</p>
                  <p><strong>Email:</strong> Through our <Link to="/contact" className=\"text-primary hover:underline">contact form</Link></p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Changes to This Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy from time to time to reflect changes in our 
                  practices or legal requirements. We will notify you of any significant changes 
                  by posting the updated policy on our website and updating the "Last updated" date.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Have questions about our privacy practices?
            </p>
            <Button asChild className="btn-hero">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;