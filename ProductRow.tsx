import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ProductCard } from './ProductCard';
import { useRef } from 'react';

interface Product {
  id: number;
  rank: number;
  title: string;
  image: string;
  rating: number;
  reviewCount: number;
  price: number;
}

interface ProductRowProps {
  title: string;
  products: Product[];
  page?: number;
  totalPages?: number;
}

export function ProductRow({ title, products, page = 1, totalPages = 7 }: ProductRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -800 : 800;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative mb-8">
      {/* Header */}
      <div className="flex items-baseline justify-between mb-2">
        <h2 className="text-xl font-medium">{title}</h2>
        <div className="flex items-center gap-4">
          <a href="#" className="text-sm text-[#007185] hover:text-[#C7511F] hover:underline">
            See More
          </a>
          <span className="text-sm text-gray-600">
            Page {page} of {totalPages}
          </span>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative group">
        {/* Navigation Buttons */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white/80 border border-gray-300 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-white"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white/80 border border-gray-300 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-white"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Products */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide gap-1 px-4 -mx-4"
        >
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}