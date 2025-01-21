import { Play } from 'lucide-react';
import { StarRating } from './StarRating';

interface ProductCardProps {
  rank: number;
  title: string;
  image: string;
  rating: number;
  reviewCount: number;
  price: number;
  subTheme: string;
  mrp?: number;
  discount?: number;
  isPrime?: boolean;
  deliveryDate?: string;
  isFresh?: boolean;
  pricePerUnit?: string;
}

export function ProductCard({ 
  rank, 
  title, 
  image, 
  rating, 
  reviewCount, 
  price,
  subTheme,
  mrp = price + Math.round(price * 0.2), // Default 20% higher than price
  discount = Math.round(((mrp - price) / mrp) * 100),
  isPrime = true,
  deliveryDate = "Tomorrow",
  isFresh = false,
  pricePerUnit = "₹100/unit"
}: ProductCardProps) {
  return (
    <div className="w-[250px] p-4 flex-shrink-0">
      {/* Sub-theme Text */}
      <h3 className="text-sm text-center mb-2 text-gray-600">{subTheme}</h3>
      
      <div className="relative">
        {/* Rank Badge */}
        <div className="absolute -left-2 -top-2 bg-[#B12704] text-white px-2 py-1 text-sm font-bold transform -rotate-12">
          #{rank}
        </div>
        
        {/* Product Image */}
        <div className="relative aspect-square bg-white rounded-md overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain"
          />
          <button className="absolute bottom-2 right-2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white">
            <Play className="w-4 h-4 text-gray-800" />
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="mt-2">
        <a href="#" className="text-sm text-[#007185] hover:text-[#C7511F] hover:underline line-clamp-2">
          {title}
        </a>
        <div className="mt-1">
          <StarRating rating={rating} count={reviewCount} />
        </div>

        {/* Price Section */}
        <div className="mt-2">
          {/* Discount Badge */}
          {discount > 0 && (
            <span className="text-sm text-[#CC0C39] font-medium">-{discount}% </span>
          )}
          
          {/* Main Price */}
          <div className="flex items-baseline gap-1">
            <span className="text-sm">₹</span>
            <span className="text-xl font-medium">{price}</span>
            <span className="text-sm">.00</span>
          </div>

          {/* M.R.P */}
          <div className="text-xs text-gray-600 flex items-center gap-1">
            M.R.P.: <span className="line-through">₹{mrp}</span>
            {pricePerUnit && <span>({pricePerUnit})</span>}
          </div>
        </div>

        {/* Prime Badge & Delivery */}
        <div className="mt-2">
          {isPrime && (
            <div className="flex items-center gap-1 mb-1">
              <span className="text-[#00A8E1] font-bold text-sm">prime</span>
              <span className="text-xs">FREE delivery</span>
              <span className="text-xs font-bold">{deliveryDate}</span>
            </div>
          )}
          
          {/* Fresh Badge */}
          {isFresh && (
            <div className="text-[#007600] text-xs font-medium">
              FREE 2-hour delivery on orders over ₹ 249.00
            </div>
          )}
        </div>

        {/* Add to Cart Button */}
        <button className="w-full mt-3 bg-[#FFD814] hover:bg-[#F7CA00] text-black text-sm font-medium py-1.5 rounded-full border border-[#FCD200]">
          Add to Cart
        </button>
      </div>
    </div>
  );
}