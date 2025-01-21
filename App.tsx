import React from 'react';
import { Search, ShoppingCart, MapPin, ChevronDown, Menu } from 'lucide-react';
import { ProductRow } from './components/ProductRow';

// Sample data with themed products for each category
const holiProducts = [
  {
    id: 1,
    rank: 1,
    subTheme: "Holi Colors",
    title: "Organic Gulal Powder Pack of 5 Colors - Natural & Safe Holi Colors for Festival Celebration",
    image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?q=80&w=500",
    rating: 4.5,
    reviewCount: 13994,
    price: 509,
  },
  {
    id: 2,
    rank: 2,
    subTheme: "Holi T-shirts",
    title: "Family Pack of 4 White Cotton T-shirts for Holi Celebration - All Sizes",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=500",
    rating: 4.5,
    reviewCount: 21843,
    price: 1299,
  },
  {
    id: 3,
    rank: 3,
    subTheme: "Pichkari Set",
    title: "Premium Holi Pichkari with 2L Tank - Long Range Water Gun with Back Support",
    image: "https://images.unsplash.com/photo-1551873753-fe8c40dcb54b?q=80&w=500",
    rating: 4,
    reviewCount: 30168,
    price: 899,
  },
];

const travelProducts = [
  {
    id: 4,
    rank: 1,
    subTheme: "Luggage",
    title: "American Tourister Polycarbonate 79cms Blue Hardsided Spinner Suitcase",
    image: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?q=80&w=500",
    rating: 4.6,
    reviewCount: 8756,
    price: 4999,
  },
  {
    id: 5,
    rank: 2,
    subTheme: "Travel Essentials",
    title: "Travel Organizer Set - Packing Cubes, Electronics Organizer, Toiletry Bag",
    image: "https://images.unsplash.com/photo-1581553680321-4fffae59fccd?q=80&w=500",
    rating: 4.4,
    reviewCount: 3421,
    price: 1499,
  },
  {
    id: 6,
    rank: 3,
    subTheme: "Travel Comfort",
    title: "Memory Foam Travel Neck Pillow with Eye Mask and Earplugs",
    image: "https://images.unsplash.com/photo-1520473378652-85d9c4aee6cf?q=80&w=500",
    rating: 4.3,
    reviewCount: 5632,
    price: 899,
  },
];

const birthdayProducts = [
  {
    id: 7,
    rank: 1,
    subTheme: "Party Decorations",
    title: "Safari Theme Birthday Decoration Kit with Balloons, Banners, and Table Setup",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=500",
    rating: 4.7,
    reviewCount: 2341,
    price: 1999,
  },
  {
    id: 8,
    rank: 2,
    subTheme: "Party Activities",
    title: "Kids Safari Adventure Party Games Set with Treasure Hunt Kit",
    image: "https://images.unsplash.com/photo-1638984849684-c02358d19d89?q=80&w=500",
    rating: 4.5,
    reviewCount: 1876,
    price: 899,
  },
  {
    id: 9,
    rank: 3,
    subTheme: "Return Gifts",
    title: "Safari Animal Plush Toys Party Pack - Set of 12 for Return Gifts",
    image: "https://images.unsplash.com/photo-1559715541-d4fc97b8d6cd?q=80&w=500",
    rating: 4.4,
    reviewCount: 3245,
    price: 1499,
  },
];

const schoolProducts = [
  {
    id: 10,
    rank: 1,
    subTheme: "School Bags",
    title: "American Tourister 32L Large School Backpack with Laptop Compartment",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=500",
    rating: 4.6,
    reviewCount: 9876,
    price: 1299,
  },
  {
    id: 11,
    rank: 2,
    subTheme: "Stationery Kit",
    title: "Complete School Stationery Set with Premium Notebooks and Art Supplies",
    image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?q=80&w=500",
    rating: 4.4,
    reviewCount: 4532,
    price: 999,
  },
  {
    id: 12,
    rank: 3,
    subTheme: "Lunch Essentials",
    title: "Insulated Kids Lunch Box with Water Bottle and Containers",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=500",
    rating: 4.5,
    reviewCount: 3421,
    price: 799,
  },
];

const summerProducts = [
  {
    id: 13,
    rank: 1,
    subTheme: "Indoor Activities",
    title: "Premium Art and Craft Kit with 150+ Items for Creative Activities",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=500",
    rating: 4.7,
    reviewCount: 2345,
    price: 1499,
  },
  {
    id: 14,
    rank: 2,
    subTheme: "Outdoor Fun",
    title: "Kids Swimming Pool Set with Water Guns and Beach Toys",
    image: "https://images.unsplash.com/photo-1533317424440-f74cae73a094?q=80&w=500",
    rating: 4.5,
    reviewCount: 3456,
    price: 2499,
  },
  {
    id: 15,
    rank: 3,
    subTheme: "Learning Activities",
    title: "Science Experiment Kit for Kids with 30+ Fun Projects",
    image: "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?q=80&w=500",
    rating: 4.6,
    reviewCount: 2876,
    price: 1999,
  },
];

const categories = [
  "Holi Preparation",
  "Plan your next travel",
  "Plan a birthday party",
  "Back to school",
  "Plan activities for kids summer holiday"
];

const categoryProducts = {
  "Holi Preparation": holiProducts,
  "Plan your next travel": travelProducts,
  "Plan a birthday party": birthdayProducts,
  "Back to school": schoolProducts,
  "Plan activities for kids summer holiday": summerProducts,
};

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <header>
        {/* Upper Header */}
        <div className="bg-[#131921] px-4 py-2">
          <div className="max-w-[1500px] mx-auto flex items-center gap-4">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="text-white font-bold text-2xl">
                amazon<span className="text-[#FF9900]">.in</span>
                <span className="text-[#00A8E1] text-sm ml-1">prime</span>
              </a>
            </div>

            {/* Location */}
            <div className="flex items-center text-white hover:outline outline-1 p-2 cursor-pointer">
              <MapPin className="w-4 h-4" />
              <div className="ml-1">
                <div className="text-xs text-gray-300">Deliver to Ana</div>
                <div className="text-sm font-bold">Gurugram 122018</div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1">
              <div className="flex">
                <button className="px-4 bg-gray-100 rounded-l-md border-r border-gray-300 flex items-center">
                  All <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                <input
                  type="text"
                  placeholder="Search Amazon.in"
                  className="flex-1 px-4 py-2 outline-none"
                />
                <button className="px-6 bg-[#FF9900] rounded-r-md hover:bg-[#ff9900]/90">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Right Navigation */}
            <div className="flex items-center gap-4 text-white">
              <div className="flex items-center cursor-pointer hover:outline outline-1 p-2">
                <img src="https://flagcdn.com/w20/in.png" alt="IN" className="w-5 h-4" />
                <span className="ml-1">EN</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              
              <div className="hover:outline outline-1 p-2 cursor-pointer">
                <div className="text-xs">Hello, Ana</div>
                <div className="text-sm font-bold flex items-center">
                  Account & Lists <ChevronDown className="w-4 h-4 ml-1" />
                </div>
              </div>

              <div className="hover:outline outline-1 p-2 cursor-pointer">
                <div className="text-xs">Returns</div>
                <div className="text-sm font-bold">& Orders</div>
              </div>

              <div className="flex items-center hover:outline outline-1 p-2 cursor-pointer">
                <div className="relative">
                  <ShoppingCart className="w-8 h-8" />
                  <span className="absolute -top-1 -right-1 bg-[#FF9900] text-black rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                    1
                  </span>
                </div>
                <span className="font-bold ml-1">Cart</span>
              </div>
            </div>
          </div>
        </div>

        {/* Lower Header */}
        <div className="bg-[#232F3E] px-4 py-1">
          <div className="max-w-[1500px] mx-auto flex items-center text-white">
            <button className="flex items-center px-2 py-1 hover:outline outline-1">
              <Menu className="w-6 h-6 mr-1" /> All
            </button>
            
            <nav className="flex items-center gap-4 ml-4">
              {['Fresh', 'Amazon Business', 'MX Player', 'Sell', 'Gift Cards', 'Buy Again', 'Browsing History', "Ana's Amazon.in", 'Amazon Pay', 'Gift Ideas'].map((item) => (
                <a key={item} href="#" className="px-2 py-1 hover:outline outline-1 whitespace-nowrap">
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1500px] mx-auto px-4 py-4">
        <div className="flex items-baseline gap-2 mb-1">
          <h1 className="text-3xl font-medium">Findly@Amazon</h1>
        </div>
        <p className="text-gray-600 mb-6">Curated shopping lists for every occasion</p>

        {/* Findly Search Bar */}
        <div className="mb-8">
          <div className="flex max-w-3xl">
            <input
              type="text"
              placeholder="What are you shopping for? e.g. travel, birthday party gifts..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-l-md outline-none focus:border-gray-400"
            />
            <button className="px-8 bg-[#232F3E] text-white rounded-r-md hover:bg-[#232F3E]/90">
              Search lists
            </button>
          </div>
        </div>

        {/* Product Rows */}
        {categories.map((category) => (
          <ProductRow
            key={category}
            title={category}
            products={categoryProducts[category]}
            page={1}
            totalPages={7}
          />
        ))}
      </main>
    </div>
  );
}

export default App;