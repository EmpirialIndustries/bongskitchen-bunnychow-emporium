import { useState, useEffect } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { Navigation } from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Clock, MapPin, Phone, CheckCircle, Package, Truck, Home } from "lucide-react";

const OrderTracking = () => {
  const { id } = useParams();
  const [currentStep, setCurrentStep] = useState(2);

  // Mock order data - in real app, fetch based on ID
  const order = {
    id: id || 'ORD001',
    date: '2024-01-15',
    time: '14:30',
    items: [
      { name: 'Full House Kota', quantity: 1, price: 150 },
      { name: 'Large Chips', quantity: 1, price: 40 }
    ],
    total: 190,
    status: 'preparing',
    estimatedTime: '25 mins',
    address: '123 Main Street, Johannesburg, 2000',
    phone: '064 762 3547',
    driver: {
      name: 'Sipho Mthembu',
      phone: '071 234 5678',
      rating: 4.8
    }
  };

  const steps = [
    {
      id: 1,
      title: 'Order Confirmed',
      description: 'Your order has been received',
      icon: CheckCircle,
      completed: true,
      time: '14:30'
    },
    {
      id: 2,
      title: 'Preparing',
      description: 'Your kotas are being prepared',
      icon: Package,
      completed: currentStep >= 2,
      active: currentStep === 2,
      time: '14:35'
    },
    {
      id: 3,
      title: 'On the Way',
      description: 'Your order is being delivered',
      icon: Truck,
      completed: currentStep >= 3,
      active: currentStep === 3,
      time: '14:50'
    },
    {
      id: 4,
      title: 'Delivered',
      description: 'Enjoy your meal!',
      icon: Home,
      completed: currentStep >= 4,
      active: currentStep === 4,
      time: '15:10'
    }
  ];

  // Simulate order progress
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev < 4) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 10000); // Progress every 10 seconds for demo

    return () => clearInterval(interval);
  }, []);

  if (!order) {
    return <Navigate to="/orders" replace />;
  }

  const progressPercentage = (currentStep / 4) * 100;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <Button asChild variant="ghost" className="mb-6">
          <Link to="/orders" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Orders
          </Link>
        </Button>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Order Tracking */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Order #{order.id}</CardTitle>
                    <Badge className="price-badge">
                      {steps.find(s => s.active)?.title || 'Processing'}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">
                    Placed on {order.date} at {order.time}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Order Progress</span>
                      <span className="text-sm text-muted-foreground">
                        {Math.round(progressPercentage)}% Complete
                      </span>
                    </div>
                    <Progress value={progressPercentage} className="h-2" />
                  </div>

                  <div className="space-y-6">
                    {steps.map((step, index) => {
                      const Icon = step.icon;
                      return (
                        <div key={step.id} className="flex gap-4">
                          <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                            step.completed 
                              ? 'bg-primary text-primary-foreground' 
                              : step.active
                              ? 'bg-primary/20 text-primary border-2 border-primary'
                              : 'bg-muted text-muted-foreground'
                          }`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h3 className={`font-semibold ${
                                step.completed || step.active ? 'text-foreground' : 'text-muted-foreground'
                              }`}>
                                {step.title}
                              </h3>
                              {step.completed && (
                                <span className="text-sm text-muted-foreground">{step.time}</span>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground">{step.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Delivery Info */}
              {currentStep >= 3 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Truck className="w-5 h-5" />
                      Delivery Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                        <div>
                          <p className="font-semibold">{order.driver.name}</p>
                          <p className="text-sm text-muted-foreground">Your delivery driver</p>
                          <div className="flex items-center gap-1 mt-1">
                            <span className="text-sm">⭐ {order.driver.rating}</span>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          <Phone className="w-4 h-4 mr-2" />
                          Call Driver
                        </Button>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-muted-foreground mt-0.5" />
                        <div>
                          <p className="font-medium">Delivery Address</p>
                          <p className="text-sm text-muted-foreground">{order.address}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Order Summary */}
            <div>
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-sm">
                          {item.quantity}x {item.name}
                        </span>
                        <span className="text-sm font-medium">R{item.price}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t pt-3">
                    <div className="flex justify-between items-center font-semibold">
                      <span>Total:</span>
                      <span className="text-primary">R{order.total}</span>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span>Estimated: {order.estimatedTime}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <span>{order.phone}</span>
                    </div>
                  </div>

                  <div className="space-y-2 pt-4">
                    <Button variant="outline" className="w-full">
                      Contact Support
                    </Button>
                    {currentStep < 4 && (
                      <Button variant="outline" className="w-full text-destructive">
                        Cancel Order
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;