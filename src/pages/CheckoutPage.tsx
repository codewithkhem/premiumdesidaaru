import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

const CheckoutPage = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "", city: "", state: "", pin: "", payment: "cod" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    clearCart();
    navigate("/thank-you");
  };

  const delivery = totalPrice >= 2000 ? 0 : 99;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-display font-bold text-foreground mb-8">Checkout</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Billing */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="font-display font-semibold text-foreground text-lg mb-4">Billing Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { key: "name", label: "Full Name", type: "text" },
                { key: "email", label: "Email", type: "email" },
                { key: "phone", label: "Phone", type: "tel" },
                { key: "city", label: "City", type: "text" },
                { key: "state", label: "State", type: "text" },
                { key: "pin", label: "PIN Code", type: "text" },
              ].map(({ key, label, type }) => (
                <div key={key}>
                  <label className="text-sm text-muted-foreground mb-1 block">{label}</label>
                  <input
                    type={type}
                    required
                    value={form[key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              ))}
              <div className="md:col-span-2">
                <label className="text-sm text-muted-foreground mb-1 block">Full Address</label>
                <textarea
                  required
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  rows={3}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>
            </div>
          </div>

          {/* Payment */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="font-display font-semibold text-foreground text-lg mb-4">Payment Method</h2>
            <div className="space-y-3">
              {[
                { value: "cod", label: "Cash on Delivery" },
                { value: "upi", label: "UPI Payment" },
                { value: "card", label: "Credit/Debit Card" },
              ].map((opt) => (
                <label key={opt.value} className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${form.payment === opt.value ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"}`}>
                  <input type="radio" name="payment" value={opt.value} checked={form.payment === opt.value} onChange={(e) => setForm({ ...form, payment: e.target.value })} className="accent-primary" />
                  <span className="text-sm text-foreground">{opt.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-card border border-border rounded-xl p-6 h-fit sticky top-32">
          <h2 className="font-display font-bold text-foreground text-lg mb-4">Order Summary</h2>
          <div className="space-y-3 mb-4">
            {items.map((item) => (
              <div key={item.product.id} className="flex justify-between text-sm">
                <span className="text-muted-foreground">{item.product.name} × {item.quantity}</span>
                <span className="text-foreground">₹{(item.product.price * item.quantity).toLocaleString()}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-border pt-3 space-y-2 text-sm">
            <div className="flex justify-between text-muted-foreground"><span>Subtotal</span><span>₹{totalPrice.toLocaleString()}</span></div>
            <div className="flex justify-between text-muted-foreground"><span>Delivery</span><span>{delivery === 0 ? "Free" : `₹${delivery}`}</span></div>
            <div className="flex justify-between font-bold text-foreground text-lg pt-2 border-t border-border">
              <span>Total</span><span className="text-primary">₹{(totalPrice + delivery).toLocaleString()}</span>
            </div>
          </div>
          <Button type="submit" className="w-full mt-6 gold-gradient text-primary-foreground py-3 text-lg font-semibold hover:opacity-90">
            Place Order
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;
