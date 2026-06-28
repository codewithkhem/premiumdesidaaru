import { Link } from "react-router-dom";
import { ArrowRight, Star, Truck, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import Newsletter from "@/components/Newsletter";
import { products, categories, testimonials } from "@/data/products";
import heroBanner from "@/assets/hero-banner.jpg";
import partyBanner from "@/assets/party-banner.jpg";

const HomePage = () => {
  const featuredProducts = products.filter((p) => p.badge);
  const partyPicks = products.filter((p) => p.badge === "Party Pick" || p.badge === "Weekend Special" || p.badge === "Hot Deal");

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center overflow-hidden">
        <img src={heroBanner} alt="Premium spirits collection" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-xl animate-fade-in-up">
            <span className="inline-block gold-gradient text-primary-foreground text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
              Premium Spirits
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground leading-tight mb-4">
              Raise Your <span className="gold-text">Spirits</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Discover the finest whiskeys, vodkas, rums, beers, and wines. Premium quality delivered to your doorstep.
            </p>
            <div className="flex gap-4">
              <Link to="/shop">
                <Button className="gold-gradient text-primary-foreground px-8 py-3 text-lg font-semibold hover:opacity-90 transition-opacity">
                  Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/shop?category=whiskey">
                <Button variant="outline" className="border-primary text-primary px-8 py-3 text-lg hover:bg-primary hover:text-primary-foreground">
                  Explore Whiskey
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-y border-border bg-card py-6">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Truck, text: "Free delivery above ₹2,000" },
            { icon: Shield, text: "100% authentic products" },
            { icon: Clock, text: "Same day delivery" },
            { icon: Star, text: "4.8★ rated store" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Icon className="h-5 w-5 text-primary" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">Shop by Category</h2>
          <p className="text-muted-foreground">Find your perfect drink</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative rounded-xl overflow-hidden h-48 hover-lift"
            >
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h3 className="font-display font-bold text-foreground text-lg">{cat.name}</h3>
                <p className="text-xs text-muted-foreground">{cat.count} products</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">Trending Now</h2>
              <p className="text-muted-foreground">Most popular picks this week</p>
            </div>
            <Link to="/shop">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.slice(0, 8).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Party Banner */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img src={partyBanner} alt="Weekend party picks" className="w-full h-full object-cover" loading="lazy" width={1920} height={600} />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/40 flex items-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-3">
              Weekend <span className="gold-text">Party Picks</span>
            </h2>
            <p className="text-muted-foreground mb-6 max-w-md">Get the best deals on party essentials. Perfect drinks for every occasion.</p>
            <Link to="/shop">
              <Button className="gold-gradient text-primary-foreground px-6 font-semibold hover:opacity-90">
                Shop Party Picks
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">What Our Customers Say</h2>
          <p className="text-muted-foreground">Join thousands of happy customers</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-6 hover-lift">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4 italic">"{t.text}"</p>
              <p className="text-sm font-semibold text-foreground">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
};

export default HomePage;
