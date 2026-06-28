import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ShoppingCart, Heart, Star, Minus, Plus, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedVariation, setSelectedVariation] = useState(product?.variations?.[0]?.label || "");

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <p className="text-2xl font-display text-foreground">Product not found</p>
        <Link to="/shop"><Button className="mt-4 gold-gradient text-primary-foreground">Back to Shop</Button></Link>
      </div>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);
  const currentPrice = product.variations?.find((v) => v.label === selectedVariation)?.price || product.price;

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/shop" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
        <ArrowLeft className="h-4 w-4 mr-1" /> Back to Shop
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Image */}
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <img src={product.image} alt={product.name} className="w-full h-[500px] object-cover" width={640} height={800} />
        </div>

        {/* Details */}
        <div>
          <span className="text-xs text-primary uppercase tracking-wider font-semibold">{product.brand}</span>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-4">{product.name}</h1>

          <div className="flex items-center gap-2 mb-4">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-border"}`} />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">{product.rating} ({product.reviews} reviews)</span>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl font-bold text-primary">₹{currentPrice.toLocaleString()}</span>
            {product.originalPrice && (
              <>
                <span className="text-xl text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</span>
                <span className="gold-gradient text-primary-foreground text-sm font-bold px-2 py-0.5 rounded-full">
                  {Math.round(((product.originalPrice - currentPrice) / product.originalPrice) * 100)}% OFF
                </span>
              </>
            )}
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">{product.description}</p>

          {/* Variations */}
          {product.variations && (
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-foreground mb-2">Size</h3>
              <div className="flex gap-2">
                {product.variations.map((v) => (
                  <button
                    key={v.label}
                    onClick={() => setSelectedVariation(v.label)}
                    className={`px-4 py-2 rounded-lg text-sm border transition-colors ${selectedVariation === v.label ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground hover:border-primary"}`}
                  >
                    {v.label} — ₹{v.price.toLocaleString()}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity + Add to Cart */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center border border-border rounded-lg">
              <Button variant="ghost" size="icon" className="text-foreground" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-12 text-center text-foreground font-semibold">{quantity}</span>
              <Button variant="ghost" size="icon" className="text-foreground" onClick={() => setQuantity(quantity + 1)}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <Button
              className="flex-1 gold-gradient text-primary-foreground py-3 text-lg font-semibold hover:opacity-90"
              onClick={() => { for (let i = 0; i < quantity; i++) addToCart(product, selectedVariation); }}
            >
              <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
            </Button>
            <Button variant="outline" size="icon" className="border-border text-foreground hover:text-primary hover:border-primary">
              <Heart className="h-5 w-5" />
            </Button>
          </div>

          {/* Specs */}
          <div className="border-t border-border pt-6 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Category</span>
              <span className="text-foreground capitalize">{product.category}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Brand</span>
              <span className="text-foreground">{product.brand}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Availability</span>
              <span className="text-primary font-semibold">{product.inStock ? "In Stock" : "Out of Stock"}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <section>
          <h2 className="text-2xl font-display font-bold text-foreground mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductPage;
