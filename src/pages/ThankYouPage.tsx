import { Link } from "react-router-dom";
import { CheckCircle2, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

const ThankYouPage = () => (
  <div className="container mx-auto px-4 py-20 text-center">
    <div className="max-w-md mx-auto animate-fade-in-up">
      <CheckCircle2 className="h-20 w-20 text-primary mx-auto mb-6" />
      <h1 className="text-4xl font-display font-bold text-foreground mb-3">Thank You!</h1>
      <p className="text-lg text-muted-foreground mb-2">Your order has been placed successfully.</p>
      <div className="bg-card border border-border rounded-xl p-6 my-8 text-left">
        <div className="flex items-center gap-3 mb-4">
          <Package className="h-5 w-5 text-primary" />
          <span className="font-semibold text-foreground">Order Details</span>
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between"><span className="text-muted-foreground">Order ID</span><span className="text-foreground font-mono">#DD{Date.now().toString().slice(-8)}</span></div>
          <div className="flex justify-between"><span className="text-muted-foreground">Status</span><span className="text-primary font-semibold">Processing</span></div>
          <div className="flex justify-between"><span className="text-muted-foreground">Estimated Delivery</span><span className="text-foreground">2-3 Business Days</span></div>
        </div>
      </div>
      <Link to="/shop">
        <Button className="gold-gradient text-primary-foreground px-8 font-semibold hover:opacity-90">Continue Shopping</Button>
      </Link>
    </div>
  </div>
);

export default ThankYouPage;
