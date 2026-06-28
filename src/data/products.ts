import whiskeyImg from "@/assets/whiskey.jpg";
import vodkaImg from "@/assets/vodka.jpg";
import rumImg from "@/assets/rum.jpg";
import beerImg from "@/assets/beer.jpg";
import wineImg from "@/assets/wine.jpg";

export type Category = "whiskey" | "vodka" | "rum" | "beer" | "wine";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: Category;
  brand: string;
  image: string;
  description: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  badge?: string;
  variations?: { label: string; price: number }[];
}

export const categories: { id: Category; name: string; image: string; count: number }[] = [
  { id: "whiskey", name: "Whiskey", image: whiskeyImg, count: 45 },
  { id: "vodka", name: "Vodka", image: vodkaImg, count: 32 },
  { id: "rum", name: "Rum", image: rumImg, count: 28 },
  { id: "beer", name: "Beer", image: beerImg, count: 56 },
  { id: "wine", name: "Wine", image: wineImg, count: 38 },
];

export const products: Product[] = [
  {
    id: "1", name: "Royal Highland Single Malt", price: 4999, originalPrice: 5999,
    category: "whiskey", brand: "Royal Highland", image: whiskeyImg,
    description: "A rich, full-bodied single malt with notes of honey, vanilla, and oak. Aged 12 years for exceptional smoothness.",
    rating: 4.8, reviews: 234, inStock: true, badge: "Bestseller",
    variations: [{ label: "750ml", price: 4999 }, { label: "1L", price: 6499 }],
  },
  {
    id: "2", name: "Black Label Reserve Whiskey", price: 3499, originalPrice: 3999,
    category: "whiskey", brand: "Black Label", image: whiskeyImg,
    description: "Smooth blended whiskey with a distinctive smoky flavor. Perfect for special occasions.",
    rating: 4.6, reviews: 189, inStock: true, badge: "Trending",
  },
  {
    id: "3", name: "Crystal Ice Premium Vodka", price: 2499, originalPrice: 2999,
    category: "vodka", brand: "Crystal Ice", image: vodkaImg,
    description: "Triple-distilled premium vodka with crystal-clear purity. Perfect for cocktails or on the rocks.",
    rating: 4.7, reviews: 312, inStock: true, badge: "Hot Deal",
    variations: [{ label: "750ml", price: 2499 }, { label: "1L", price: 3299 }],
  },
  {
    id: "4", name: "Arctic Frost Vodka", price: 1899,
    category: "vodka", brand: "Arctic Frost", image: vodkaImg,
    description: "Imported vodka with a smooth, clean finish. Filtered through charcoal for ultimate purity.",
    rating: 4.4, reviews: 156, inStock: true,
  },
  {
    id: "5", name: "Caribbean Gold Dark Rum", price: 2199, originalPrice: 2699,
    category: "rum", brand: "Caribbean Gold", image: rumImg,
    description: "Rich dark rum aged in oak barrels with hints of caramel and tropical spices.",
    rating: 4.5, reviews: 203, inStock: true, badge: "Party Pick",
    variations: [{ label: "750ml", price: 2199 }, { label: "1L", price: 2899 }],
  },
  {
    id: "6", name: "Sailor's Pride Spiced Rum", price: 1799,
    category: "rum", brand: "Sailor's Pride", image: rumImg,
    description: "Bold spiced rum with vanilla, cinnamon, and nutmeg flavors.",
    rating: 4.3, reviews: 178, inStock: true,
  },
  {
    id: "7", name: "Golden Lager Craft Beer", price: 299, originalPrice: 399,
    category: "beer", brand: "Golden Lager", image: beerImg,
    description: "Refreshing craft lager brewed with premium hops. Light and crispy.",
    rating: 4.2, reviews: 456, inStock: true, badge: "Weekend Special",
  },
  {
    id: "8", name: "Stout Master Dark Ale", price: 349,
    category: "beer", brand: "Stout Master", image: beerImg,
    description: "Rich dark stout with notes of chocolate and coffee. Full-bodied flavor.",
    rating: 4.6, reviews: 287, inStock: true,
  },
  {
    id: "9", name: "Château Rouge Red Wine", price: 3299, originalPrice: 3999,
    category: "wine", brand: "Château Rouge", image: wineImg,
    description: "Premium Cabernet Sauvignon with complex flavors of dark fruit, oak, and subtle spices.",
    rating: 4.9, reviews: 167, inStock: true, badge: "Premium",
    variations: [{ label: "750ml", price: 3299 }, { label: "Magnum 1.5L", price: 5999 }],
  },
  {
    id: "10", name: "Blanc de Blanc White Wine", price: 2799,
    category: "wine", brand: "Blanc de Blanc", image: wineImg,
    description: "Crisp and elegant white wine with citrus and floral notes. Perfect with seafood.",
    rating: 4.5, reviews: 134, inStock: true,
  },
  {
    id: "11", name: "Heritage Gold Whiskey", price: 7999, originalPrice: 9499,
    category: "whiskey", brand: "Heritage", image: whiskeyImg,
    description: "Ultra-premium 18-year aged whiskey. Exquisite taste with notes of dried fruit and leather.",
    rating: 4.9, reviews: 89, inStock: true, badge: "Premium",
  },
  {
    id: "12", name: "Mountain Brew IPA", price: 399,
    category: "beer", brand: "Mountain Brew", image: beerImg,
    description: "Hoppy India Pale Ale with tropical fruit aromas and a bitter finish.",
    rating: 4.4, reviews: 321, inStock: true, badge: "New",
  },
];

export const testimonials = [
  { name: "Rahul S.", text: "Amazing collection and super fast delivery! DesiDaaru is my go-to store for premium spirits.", rating: 5 },
  { name: "Priya M.", text: "The quality of products is outstanding. Love the weekend deals and curated selections!", rating: 5 },
  { name: "Amit K.", text: "Best prices for premium alcohol online. The packaging is top-notch too.", rating: 4 },
  { name: "Sneha R.", text: "Great variety of wines and whiskeys. Customer support is very responsive.", rating: 5 },
];
