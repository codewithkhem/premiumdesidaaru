import { Link } from "react-router-dom";
import { X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

const CartPopup = () => {
  const { showCartPopup, lastAddedItem, closeCartPopup } = useCart();

  if (!showCartPopup || !lastAddedItem) return null;

  return (
    <div className="fixed top-24 right-4 z-50 w-80 bg-card border border-border rounded-lg shadow-2xl animate-slide-in-right p-4">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2 text-primary">
          <Check className="h-5 w-5" />
          <span className="font-semibold text-sm">Added to Cart!</span>
        </div>
        <Button variant="ghost" size="icon" className="h-6 w-6 text-muted-foreground" onClick={closeCartPopup}>
          <X className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex gap-3">
        <img src={lastAddedItem.product.image} alt={lastAddedItem.product.name} className="w-16 h-16 object-cover rounded-md" />
        <div className="flex-1">
          <p className="text-sm font-medium text-foreground line-clamp-2">{lastAddedItem.product.name}</p>
          <p className="text-sm text-primary font-bold">₹{lastAddedItem.product.price.toLocaleString()}</p>
        </div>
      </div>
      <div className="flex gap-2 mt-4">
        <Link to="/cart" className="flex-1" onClick={closeCartPopup}>
          <Button className="w-full gold-gradient text-primary-foreground text-sm">View Cart</Button>
        </Link>
        <Button variant="outline" className="flex-1 border-border text-foreground text-sm" onClick={closeCartPopup}>
          Continue
        </Button>
      </div>
    </div>
  );
};

export default CartPopup;
