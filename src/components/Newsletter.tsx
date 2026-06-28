import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <section className="py-16 gold-gradient">
      <div className="container mx-auto px-4 text-center">
        <Mail className="h-10 w-10 mx-auto mb-4 text-primary-foreground" />
        <h2 className="text-3xl font-display font-bold text-primary-foreground mb-2">Stay Updated</h2>
        <p className="text-primary-foreground/80 mb-6 max-w-md mx-auto">
          Subscribe for exclusive deals, new arrivals, and party picks delivered to your inbox.
        </p>
        {submitted ? (
          <p className="text-primary-foreground font-semibold">🎉 Thanks for subscribing!</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 rounded-lg bg-background/20 border border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-foreground/50"
            />
            <Button type="submit" className="bg-background text-foreground hover:bg-background/90 px-6 font-semibold">
              Subscribe
            </Button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
