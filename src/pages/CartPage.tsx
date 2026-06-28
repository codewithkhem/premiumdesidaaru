import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ArrowLeft, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

const CartPage = () => {
  const { items, updateQuantity, removeFromCart, totalPrice, totalItems } = useCart();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <ShoppingCart className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
        <h1 className="text-3xl font-display font-bold text-foreground mb-2">Your Cart is Empty</h1>
        <p className="text-muted-foreground mb-6">Looks like you haven't added anything yet.</p>
        <Link to="/shop">
          <Button className="gold-gradient text-primary-foreground px-8 font-semibold">Start Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/shop" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
        <ArrowLeft className="h-4 w-4 mr-1" /> Continue Shopping
      </Link>
      <h1 className="text-3xl font-display font-bold text-foreground mb-8">Shopping Cart ({totalItems} items)</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div key={item.product.id} className="bg-card border border-border rounded-xl p-4 flex gap-4">
              <Link to={`/product/${item.product.id}`}>
                <img src={item.product.image} alt={item.product.name} className="w-24 h-24 object-cover rounded-lg" loading="lazy" />
              </Link>
              <div className="flex-1">
                <Link to={`/product/${item.product.id}`}>
                  <h3 className="font-display font-semibold text-foreground hover:text-primary transition-colors">{item.product.name}</h3>
                </Link>
                <p className="text-xs text-muted-foreground capitalize">{item.product.category} • {item.product.brand}</p>
                {item.variation && <p className="text-xs text-primary mt-0.5">{item.variation}</p>}
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center border border-border rounded-lg">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-foreground" onClick={() => updateQuantity(item.product.id, item.quantity - 1)}>
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-8 text-center text-sm text-foreground">{item.quantity}</span>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-foreground" onClick={() => updateQuantity(item.product.id, item.quantity + 1)}>
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                  <span className="font-bold text-primary">₹{(item.product.price * item.quantity).toLocaleString()}</span>
                  <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive" onClick={() => removeFromCart(item.product.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="bg-card border border-border rounded-xl p-6 h-fit sticky top-32">
          <h2 className="font-display font-bold text-foreground text-lg mb-4">Order Summary</h2>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between text-muted-foreground"><span>Subtotal</span><span>₹{totalPrice.toLocaleString()}</span></div>
            <div className="flex justify-between text-muted-foreground"><span>Delivery</span><span>{totalPrice >= 2000 ? "Free" : "₹99"}</span></div>
            <div className="border-t border-border pt-3 flex justify-between font-bold text-foreground text-lg">
              <span>Total</span><span className="text-primary">₹{(totalPrice + (totalPrice >= 2000 ? 0 : 99)).toLocaleString()}</span>
            </div>
          </div>
          <Link to="/checkout">
            <Button className="w-full mt-6 gold-gradient text-primary-foreground py-3 text-lg font-semibold hover:opacity-90">
              Proceed to Checkout
            </Button>
          </Link>
          {totalPrice < 2000 && (
            <p className="text-xs text-muted-foreground text-center mt-3">Add ₹{(2000 - totalPrice).toLocaleString()} more for free delivery</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
