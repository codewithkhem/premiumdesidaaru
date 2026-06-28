import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, ShoppingCart, Heart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { categories, products } from "@/data/products";
import logo from "@/assets/logo.png";

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredCat, setHoveredCat] = useState<string | null>(null);
  const { totalItems } = useCart();
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);

  // Live search results
  const searchResults = searchQuery.trim().length >= 2
    ? products.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 6)
    : [];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  // Close search dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
        setSearchQuery("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Get latest 4 products for a category
  const getCategoryProducts = (catId: string) =>
    products.filter((p) => p.category === catId).slice(0, 4);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      {/* Top bar */}
      <div className="gold-gradient py-1.5 px-2">
        <p className="text-center text-[10px] sm:text-xs font-semibold text-primary-foreground tracking-wider">
          🎉 FREE DELIVERY on orders above ₹2,000 | Use code PARTY20 for 20% off
        </p>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="DesiDaaru" className="h-9 sm:h-12 w-auto object-contain" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1" onMouseLeave={() => setHoveredCat(null)}>
          {categories.map((cat) => (
            <div key={cat.id} className="relative" onMouseEnter={() => setHoveredCat(cat.id)}>
              <Link
                to={`/shop?category=${cat.id}`}
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {cat.name}
              </Link>
              {hoveredCat === cat.id && (
                <div className="absolute top-full left-0 w-[480px] bg-card border border-border rounded-lg shadow-2xl p-4 animate-fade-in z-50">
                  <div className="flex gap-4">
                    {/* Category info */}
                    <div className="shrink-0">
                      <img src={cat.image} alt={cat.name} className="w-28 h-36 object-cover rounded-md" loading="lazy" />
                      <h4 className="font-display font-semibold text-foreground mt-2 text-sm">{cat.name}</h4>
                      <p className="text-xs text-muted-foreground mb-2">{cat.count} products</p>
                      <Link
                        to={`/shop?category=${cat.id}`}
                        className="text-xs text-primary hover:underline font-medium"
                      >
                        View All →
                      </Link>
                    </div>
                    {/* 4 Latest products */}
                    <div className="flex-1 grid grid-cols-2 gap-2">
                      {getCategoryProducts(cat.id).map((p) => (
                        <Link
                          key={p.id}
                          to={`/product/${p.id}`}
                          className="flex flex-col gap-1 p-2 rounded-md hover:bg-secondary transition-colors"
                        >
                          <img src={p.image} alt={p.name} className="w-full h-20 object-cover rounded" loading="lazy" />
                          <p className="text-xs font-medium text-foreground line-clamp-1">{p.name}</p>
                          <p className="text-xs font-bold text-primary">₹{p.price.toLocaleString()}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-1 sm:gap-2">
          <Button variant="ghost" size="icon" className="text-foreground h-8 w-8 sm:h-9 sm:w-9" onClick={() => setSearchOpen(!searchOpen)}>
            <Search className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
          <Link to="/wishlist">
            <Button variant="ghost" size="icon" className="text-foreground h-8 w-8 sm:h-9 sm:w-9">
              <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </Link>
          <Link to="/cart" className="relative">
            <Button variant="ghost" size="icon" className="text-foreground h-8 w-8 sm:h-9 sm:w-9">
              <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 gold-gradient text-primary-foreground text-[10px] rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="lg:hidden text-foreground h-8 w-8 sm:h-9 sm:w-9" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-4 w-4 sm:h-5 sm:w-5" /> : <Menu className="h-4 w-4 sm:h-5 sm:w-5" />}
          </Button>
        </div>
      </div>

      {/* Search bar with live results */}
      {searchOpen && (
        <div ref={searchRef} className="border-t border-border bg-card animate-fade-in relative">
          <form onSubmit={handleSearch} className="container mx-auto px-3 sm:px-4 py-2 sm:py-3 flex gap-2">
            <input
              type="text"
              placeholder="Search for whiskey, vodka, rum..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-secondary border border-border rounded-lg px-3 sm:px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              autoFocus
            />
            <Button type="submit" size="sm" className="gold-gradient text-primary-foreground text-xs sm:text-sm">Search</Button>
          </form>
          {/* Live search results dropdown */}
          {searchResults.length > 0 && (
            <div className="container mx-auto px-3 sm:px-4 pb-3">
              <div className="bg-popover border border-border rounded-lg shadow-2xl overflow-hidden max-h-80 overflow-y-auto">
                {searchResults.map((p) => (
                  <Link
                    key={p.id}
                    to={`/product/${p.id}`}
                    className="flex items-center gap-3 px-3 py-2.5 hover:bg-secondary transition-colors border-b border-border last:border-0"
                    onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
                  >
                    <img src={p.image} alt={p.name} className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">{p.name}</p>
                      <p className="text-xs text-muted-foreground capitalize">{p.category} · {p.brand}</p>
                    </div>
                    <p className="text-sm font-bold text-primary shrink-0">₹{p.price.toLocaleString()}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
          {searchQuery.trim().length >= 2 && searchResults.length === 0 && (
            <div className="container mx-auto px-3 sm:px-4 pb-3">
              <div className="bg-popover border border-border rounded-lg p-4 text-center">
                <p className="text-sm text-muted-foreground">No products found for "{searchQuery}"</p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-card animate-fade-in">
          <nav className="container mx-auto px-3 py-3 flex flex-col gap-1">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={`/shop?category=${cat.id}`}
                className="py-2.5 px-3 text-sm text-foreground hover:text-primary hover:bg-secondary rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {cat.name}
              </Link>
            ))}
            <Link to="/contact" className="py-2.5 px-3 text-sm text-foreground hover:text-primary hover:bg-secondary rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
