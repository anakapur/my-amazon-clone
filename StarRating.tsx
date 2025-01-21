import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  count: number;
}

export function StarRating({ rating, count }: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="flex items-center">
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < fullStars
                ? 'text-[#F4A41C] fill-[#F4A41C]'
                : i === fullStars && hasHalfStar
                ? 'text-[#F4A41C] fill-[#F4A41C]/50'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      <span className="ml-1 text-sm text-gray-600">{count.toLocaleString()}</span>
    </div>
  );
}