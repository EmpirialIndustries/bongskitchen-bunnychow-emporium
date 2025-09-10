import { useState } from "react";
import { Navigation } from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/lib/cart";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { ArrowLeft, Phone, MapPin } from "lucide-react";

const Checkout = () => {
  const { items, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const totalPrice = getTotalPrice();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    notes: '',
    orderType: 'pickup' // pickup or delivery
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.phone) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (formData.orderType === 'delivery' && !formData.address) {
      toast.error("Please provide delivery address");
      return;
    }

    // Simulate order processing
    toast.success("Order placed successfully! We'll call you shortly.");
    clearCart();
    navigate('/');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">No Items in Cart</h1>
          <p className="text-muted-foreground mb-8">Add some delicious kotas to your cart first!</p>
          <Button asChild className="btn-hero">
            <Link to="/menu">Browse Menu</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <Button asChild variant="ghost" className="mb-6">
          <Link to="/cart" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Cart
          </Link>
        </Button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Checkout</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Contact Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Contact Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email (optional)</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  {/* Order Type */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Order Type</h3>
                    <RadioGroup 
                      value={formData.orderType} 
                      onValueChange={(value) => setFormData(prev => ({ ...prev, orderType: value }))}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="pickup" id="pickup" />
                        <Label htmlFor="pickup" className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          Pickup from store (Free)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="delivery" id="delivery" />
                        <Label htmlFor="delivery" className="flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          Call for delivery details
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Address (if delivery) */}
                  {formData.orderType === 'delivery' && (
                    <div>
                      <Label htmlFor="address">Delivery Address *</Label>
                      <Textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Enter your full delivery address"
                        required
                      />
                    </div>
                  )}

                  {/* Special Instructions */}
                  <div>
                    <Label htmlFor="notes">Special Instructions (optional)</Label>
                    <Textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      placeholder="Any special requests or notes about your order"
                    />
                  </div>

                  <Button type="submit" size="lg" className="btn-hero w-full">
                    Place Order - R{totalPrice}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {items.map((item) => {
                    const itemTotal = (item.price + (item.extras?.reduce((sum, e) => sum + e.price, 0) || 0)) * item.quantity;
                    return (
                      <div key={item.id} className="border-b pb-3">
                        <div className="flex justify-between items-start mb-1">
                          <span className="font-medium">{item.quantity}x {item.name}</span>
                          <span className="font-semibold">R{itemTotal}</span>
                        </div>
                        {item.extras && item.extras.length > 0 && (
                          <div className="flex flex-wrap gap-1">
                            {item.extras.map((extra, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                +{extra.name}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
                
                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>R{totalPrice}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span className="text-primary">R{totalPrice}</span>
                  </div>
                </div>

                {/* Store Info */}
                <div className="bg-muted rounded-lg p-4 text-sm">
                  <h4 className="font-semibold mb-2">Bong's Kitchen</h4>
                  <p className="text-muted-foreground">
                    Mpheni Block A (R578)<br />
                    Next to Makhode shop
                  </p>
                  <div className="mt-2 space-y-1">
                    <p>📞 064 762 3547</p>
                    <p>📞 079 974 3605</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;