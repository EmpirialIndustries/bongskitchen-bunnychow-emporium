import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import kotaVariety from "@/assets/kota-variety.jpg";
import kotaHero from "@/assets/kota-hero.jpg";
import ribKota from "@/assets/rib-kota.jpg";

const getProductImage = (product: Product) => {
  if (product.category === 'rib-kota') return ribKota;
  if (product.id === 'kota-full-house') return kotaHero;
  return kotaVariety;
};

interface ProductCardProps {
  product: Product;
  showQuickAdd?: boolean;
}

export const ProductCard = ({ product, showQuickAdd = true }: ProductCardProps) => {
  const { addItem } = useCart();

  const handleQuickAdd = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: getProductImage(product)
    });
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <Card className="food-card group">
      <Link to={`/product/${product.id}`}>
        <div className="aspect-square overflow-hidden">
          <img 
            src={getProductImage(product)} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </Link>
      
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
            <Badge className="price-badge">R{product.price}</Badge>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {product.ingredients.slice(0, 3).map((ingredient, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {ingredient}
            </Badge>
          ))}
          {product.ingredients.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{product.ingredients.length - 3} more
            </Badge>
          )}
        </div>
      </CardContent>
      
      {showQuickAdd && (
        <CardFooter className="p-4 pt-0 gap-2">
          <Button asChild variant="outline" className="flex-1">
            <Link to={`/product/${product.id}`}>View Details</Link>
          </Button>
          <Button onClick={handleQuickAdd} className="btn-hero flex-1">
            Add to Cart
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};