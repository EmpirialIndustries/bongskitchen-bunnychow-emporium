import { useState } from "react";
import { Navigation } from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";
import { Search, Filter, Clock, Package, CheckCircle, XCircle } from "lucide-react";

const OrderHistory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const orders = [
    {
      id: 'ORD001',
      date: '2024-01-15',
      time: '14:30',
      items: ['Full House Kota', 'Large Chips'],
      total: 170,
      status: 'delivered',
      estimatedTime: '25 mins',
      address: '123 Main Street, Johannesburg'
    },
    {
      id: 'ORD002',
      date: '2024-01-12',
      time: '19:15',
      items: ['Rib Kota', 'Russian Kota'],
      total: 120,
      status: 'delivered',
      estimatedTime: '30 mins',
      address: '123 Main Street, Johannesburg'
    },
    {
      id: 'ORD003',
      date: '2024-01-10',
      time: '12:45',
      items: ['Basic Kota', 'Cheese Kota', 'Medium Chips'],
      total: 75,
      status: 'delivered',
      estimatedTime: '20 mins',
      address: '456 Business Ave, Sandton'
    },
    {
      id: 'ORD004',
      date: '2024-01-08',
      time: '18:20',
      items: ['Vienna Combo'],
      total: 80,
      status: 'cancelled',
      estimatedTime: '25 mins',
      address: '123 Main Street, Johannesburg'
    },
    {
      id: 'ORD005',
      date: '2024-01-05',
      time: '13:10',
      items: ['Patty Kota', 'Small Chips'],
      total: 65,
      status: 'delivered',
      estimatedTime: '22 mins',
      address: '123 Main Street, Johannesburg'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'preparing':
        return <Clock className="w-4 h-4 text-orange-500" />;
      case 'on-the-way':
        return <Package className="w-4 h-4 text-blue-500" />;
      case 'cancelled':
        return <XCircle className="w-4 h-4 text-red-500" />;
      default:
        return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'preparing':
        return 'bg-orange-100 text-orange-800';
      case 'on-the-way':
        return 'bg-blue-100 text-blue-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.items.some(item => item.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold">Order History</h1>
              <p className="text-muted-foreground">Track and manage your past orders</p>
            </div>
            <Button asChild className="btn-hero">
              <Link to="/menu">Order Again</Link>
            </Button>
          </div>

          {/* Filters */}
          <Card className="mb-6">
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search orders..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-full md:w-48">
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Orders</SelectItem>
                    <SelectItem value="delivered">Delivered</SelectItem>
                    <SelectItem value="preparing">Preparing</SelectItem>
                    <SelectItem value="on-the-way">On the Way</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Orders List */}
          <div className="space-y-4">
            {filteredOrders.length === 0 ? (
              <Card>
                <CardContent className="p-8 text-center">
                  <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No orders found</h3>
                  <p className="text-muted-foreground mb-4">
                    {searchTerm || statusFilter !== 'all' 
                      ? "Try adjusting your search or filter criteria"
                      : "You haven't placed any orders yet"
                    }
                  </p>
                  <Button asChild className="btn-hero">
                    <Link to="/menu">Start Ordering</Link>
                  </Button>
                </CardContent>
              </Card>
            ) : (
              filteredOrders.map((order) => (
                <Card key={order.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold">Order #{order.id}</h3>
                          <div className="flex items-center gap-1">
                            {getStatusIcon(order.status)}
                            <Badge className={getStatusColor(order.status)}>
                              {order.status.charAt(0).toUpperCase() + order.status.slice(1).replace('-', ' ')}
                            </Badge>
                          </div>
                        </div>
                        
                        <div className="text-sm text-muted-foreground mb-3">
                          <p>{order.date} at {order.time}</p>
                          <p>{order.address}</p>
                        </div>

                        <div className="mb-3">
                          <p className="text-sm font-medium mb-1">Items:</p>
                          <p className="text-sm text-muted-foreground">
                            {order.items.join(', ')}
                          </p>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold">R{order.total}</span>
                          <div className="flex gap-2">
                            <Button asChild variant="outline" size="sm">
                              <Link to={`/order/${order.id}`}>View Details</Link>
                            </Button>
                            {order.status === 'delivered' && (
                              <Button size="sm" className="btn-hero">
                                Reorder
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>

          {/* Summary Stats */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Order Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">{orders.length}</div>
                  <div className="text-sm text-muted-foreground">Total Orders</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">
                    {orders.filter(o => o.status === 'delivered').length}
                  </div>
                  <div className="text-sm text-muted-foreground">Delivered</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">
                    R{orders.reduce((sum, order) => sum + order.total, 0)}
                  </div>
                  <div className="text-sm text-muted-foreground">Total Spent</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">
                    R{Math.round(orders.reduce((sum, order) => sum + order.total, 0) / orders.length)}
                  </div>
                  <div className="text-sm text-muted-foreground">Avg Order</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;