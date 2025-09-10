import { useState } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { Navigation } from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Minus, Plus, ArrowLeft } from "lucide-react";
import { products, extras } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { toast } from "sonner";
import kotaVariety from "@/assets/kota-variety.jpg";
import kotaHero from "@/assets/kota-hero.jpg";
import ribKota from "@/assets/rib-kota.jpg";

const getProductImage = (productId: string, category: string) => {
  if (category === 'rib-kota') return ribKota;
  if (productId === 'kota-full-house') return kotaHero;
  return kotaVariety;
};

const ProductDetail = () => {
  const { id } = useParams();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedExtras, setSelectedExtras] = useState<Array<{name: string; price: number}>>([]);

  const product = products.find(p => p.id === id);

  if (!product) {
    return <Navigate to="/menu" replace />;
  }

  const productImage = getProductImage(product.id, product.category);
  
  const extrasPrice = selectedExtras.reduce((sum, extra) => sum + extra.price, 0);
  const totalPrice = (product.price + extrasPrice) * quantity;

  const handleExtraChange = (extra: {name: string; price: number}, checked: boolean) => {
    if (checked) {
      setSelectedExtras(prev => [...prev, extra]);
    } else {
      setSelectedExtras(prev => prev.filter(e => e.name !== extra.name));
    }
  };

  const handleAddToCart = () => {
    addItem({
      id: `${product.id}-${Date.now()}`, // Unique ID for different configurations
      name: product.name,
      price: product.price,
      image: productImage,
      extras: selectedExtras.length > 0 ? selectedExtras : undefined
    });
    
    // Add multiple quantities
    for (let i = 1; i < quantity; i++) {
      addItem({
        id: `${product.id}-${Date.now()}-${i}`,
        name: product.name,
        price: product.price,
        image: productImage,
        extras: selectedExtras.length > 0 ? selectedExtras : undefined
      });
    }
    
    toast.success(`${quantity}x ${product.name} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button asChild variant="ghost" className="mb-6">
          <Link to="/menu" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Menu
          </Link>
        </Button>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square rounded-xl overflow-hidden">
              <img 
                src={productImage} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-2">
                {product.category.replace('-', ' ').toUpperCase()}
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center gap-2 mb-4">
                <Badge className="price-badge text-xl">R{product.price}</Badge>
                {extrasPrice > 0 && (
                  <span className="text-sm text-muted-foreground">
                    + R{extrasPrice} extras
                  </span>
                )}
              </div>
              <p className="text-lg text-muted-foreground">{product.description}</p>
            </div>

            {/* Ingredients */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Ingredients</h3>
              <div className="flex flex-wrap gap-2">
                {product.ingredients.map((ingredient, index) => (
                  <Badge key={index} variant="outline">
                    {ingredient}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Extras */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Add Extras</h3>
                <div className="space-y-3">
                  {extras.map((extra) => (
                    <div key={extra.name} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Checkbox
                          id={extra.name}
                          checked={selectedExtras.some(e => e.name === extra.name)}
                          onCheckedChange={(checked) => handleExtraChange(extra, checked as boolean)}
                        />
                        <label htmlFor={extra.name} className="text-sm font-medium">
                          {extra.name}
                        </label>
                      </div>
                      <Badge variant="secondary">R{extra.price}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quantity & Add to Cart */}
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Quantity</label>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="text-xl font-semibold min-w-[3rem] text-center">
                    {quantity}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center text-lg font-semibold">
                  <span>Total:</span>
                  <span className="text-primary">R{totalPrice}</span>
                </div>
                <Button 
                  onClick={handleAddToCart} 
                  size="lg" 
                  className="btn-hero w-full text-lg py-6"
                >
                  Add to Cart - R{totalPrice}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;