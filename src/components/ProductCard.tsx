import { Link } from "react-router-dom";
import { ShoppingCart, Heart, Eye, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/data/products";

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="group bg-card border border-border rounded-lg overflow-hidden hover-lift relative">
      {/* Badge */}
      {product.badge && (
        <span className="absolute top-3 left-3 z-10 gold-gradient text-primary-foreground text-xs font-bold px-2.5 py-1 rounded-full">
          {product.badge}
        </span>
      )}
      {discount > 0 && (
        <span className="absolute top-3 right-3 z-10 bg-destructive text-destructive-foreground text-xs font-bold px-2 py-1 rounded-full">
          -{discount}%
        </span>
      )}

      {/* Image */}
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          width={640}
          height={800}
        />
        {/* Overlay actions */}
        <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
          <Button size="icon" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full">
            <Eye className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </Link>

      {/* Info */}
      <div className="p-4">
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{product.brand}</p>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-display font-semibold text-foreground text-sm leading-tight mb-2 hover:text-primary transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center gap-1 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`h-3 w-3 ${i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-border"}`} />
          ))}
          <span className="text-xs text-muted-foreground ml-1">({product.reviews})</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-primary">₹{product.price.toLocaleString()}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</span>
            )}
          </div>
          <Button
            size="icon"
            className="gold-gradient text-primary-foreground hover:opacity-90 rounded-full h-9 w-9"
            onClick={() => addToCart(product)}
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
