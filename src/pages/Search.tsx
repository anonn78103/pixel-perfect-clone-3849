import { useState } from "react";
import { Search as SearchIcon, Filter, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import FoodCard from "@/components/FoodCard";
import Navigation from "@/components/Navigation";
import { useSearch, FoodItem } from "@/hooks/useSearch";
import { useToast } from "@/hooks/use-toast";

// Import food images
import margheritaPizza from "@/assets/margherita-pizza.jpg";
import chineseNoodles from "@/assets/chinese-noodles.jpg";
import indianCurry from "@/assets/indian-curry.jpg";
import cherryDessert from "@/assets/cherry-dessert.jpg";
import spicyIndianDish from "@/assets/spicy-indian-dish.jpg";
import chineseDumplings from "@/assets/chinese-dumplings.jpg";

const Search = () => {
  const { toast } = useToast();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  
  const categories = [
    { name: "All", icon: "🍽️" },
    { name: "Pizza", icon: "🍕" },
    { name: "Chinese", icon: "🥢" },
    { name: "Indian", icon: "🍛" },
    { name: "Desserts", icon: "🍰" }
  ];

  const allFoodData: FoodItem[] = [
    {
      title: "Margherita Pizza",
      cuisine: "Italian",
      rating: 4.5,
      image: margheritaPizza,
      category: "Pizza"
    },
    {
      title: "Chinese Noodles", 
      cuisine: "Chinese",
      rating: 4.7,
      image: chineseNoodles
    },
    {
      title: "Indian Curry",
      cuisine: "Indian", 
      rating: 4.6,
      image: indianCurry
    },
    {
      title: "Cherry Dessert",
      cuisine: "Desserts",
      rating: 4.5,
      image: cherryDessert
    },
    {
      title: "Spicy Indian Dish",
      cuisine: "Indian",
      rating: 4.7,
      image: spicyIndianDish
    },
    {
      title: "Chinese Dumplings",
      cuisine: "Chinese",
      rating: 4.6,
      image: chineseDumplings
    }
  ];

  const { 
    searchQuery, 
    setSearchQuery, 
    selectedCategory, 
    setSelectedCategory, 
    filteredItems, 
    hasResults,
    totalResults 
  } = useSearch(allFoodData);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      toast({
        title: "Search Results",
        description: `Found ${totalResults} items matching "${searchQuery}"`,
      });
    }
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setIsMobileSidebarOpen(false);
    toast({
      title: category === "All" ? "All Categories" : category,
      description: category === "All" ? "Showing all items" : `Showing ${category.toLowerCase()} items`,
    });
  };

  const handleOrder = (itemTitle: string) => {
    toast({
      title: "Added to Cart",
      description: `${itemTitle} has been added to your cart!`,
    });
  };

  const trendingData = filteredItems.slice(0, 3);
  const nearYouData = filteredItems.slice(3, 6);

  const CategorySidebar = () => (
    <div className="space-y-2">
      {categories.map((category) => (
        <button
          key={category.name}
          onClick={() => handleCategorySelect(category.name)}
          className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
            selectedCategory === category.name
              ? "bg-primary text-white"
              : "hover:bg-gray-100 text-gray-700"
          }`}
        >
          <span className="text-lg">{category.icon}</span>
          <span className="font-medium">{category.name}</span>
        </button>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="flex">
        {/* Desktop Categories Sidebar */}
        <aside className="hidden lg:block w-64 bg-white border-r border-gray-200 min-h-screen p-4">
          <h2 className="font-semibold text-gray-900 mb-4">Categories</h2>
          <CategorySidebar />
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6">
          {/* Search Bar with Mobile Filter */}
          <div className="mb-6 sm:mb-8">
            <div className="flex gap-2">
              {/* Mobile Filter Button */}
              <Sheet open={isMobileSidebarOpen} onOpenChange={setIsMobileSidebarOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="lg:hidden">
                    <Filter className="w-4 h-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-64">
                  <SheetHeader>
                    <SheetTitle>Categories</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6">
                    <CategorySidebar />
                  </div>
                </SheetContent>
              </Sheet>

              <div className="relative flex-1">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input 
                  placeholder="Search for cuisines, dishes..." 
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
              </div>
              <Button onClick={handleSearch} className="px-4 sm:px-6">
                Search
              </Button>
            </div>
          </div>

          {/* Results Summary */}
          {(searchQuery.trim() || selectedCategory !== "All") && (
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">
                  {hasResults ? (
                    <>Showing {totalResults} results {searchQuery && `for "${searchQuery}"`} {selectedCategory !== "All" && `in ${selectedCategory}`}</>
                  ) : (
                    <>No results found {searchQuery && `for "${searchQuery}"`}</>
                  )}
                </p>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                  }}
                  className="text-xs"
                >
                  <X className="w-3 h-3 mr-1" />
                  Clear
                </Button>
              </div>
            </div>
          )}

          {/* Promotional Banners */}
          <div className="mb-6 sm:mb-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 h-24 sm:h-32">
              <div className="bg-gradient-to-r from-pink-400 to-purple-500 rounded-lg p-2 sm:p-4 text-white">
                <p className="text-xs sm:text-sm opacity-90">Special Offers</p>
                <p className="font-bold text-sm sm:text-base">Save 20%</p>
              </div>
              <div className="bg-gradient-to-r from-blue-400 to-cyan-500 rounded-lg p-2 sm:p-4 text-white">
                <p className="text-xs sm:text-sm opacity-90">Fresh & Fast</p>
                <p className="font-bold text-sm sm:text-base">30min delivery</p>
              </div>
              <div className="bg-gradient-to-r from-green-400 to-lime-500 rounded-lg p-2 sm:p-4 text-white">
                <p className="text-xs sm:text-sm opacity-90">Healthy Options</p>
                <p className="font-bold text-sm sm:text-base">Organic Food</p>
              </div>
              <div className="bg-gradient-to-r from-orange-400 to-red-500 rounded-lg p-2 sm:p-4 text-white">
                <p className="text-xs sm:text-sm opacity-90">New Menu</p>
                <p className="font-bold text-sm sm:text-base">Try Now</p>
              </div>
            </div>
          </div>

          {hasResults ? (
            <>
              {/* Trending Now */}
              {trendingData.length > 0 && (
                <section className="mb-6 sm:mb-8">
                  <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Trending Now</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                    {trendingData.map((item, index) => (
                      <FoodCard 
                        key={index} 
                        {...item} 
                        onOrder={() => handleOrder(item.title)}
                      />
                    ))}
                  </div>
                </section>
              )}

              {/* Near You */}
              {nearYouData.length > 0 && (
                <section className="mb-6 sm:mb-8">
                  <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Near You</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                    {nearYouData.map((item, index) => (
                      <FoodCard 
                        key={index} 
                        {...item} 
                        onOrder={() => handleOrder(item.title)}
                      />
                    ))}
                  </div>
                </section>
              )}

              {/* All Results */}
              {filteredItems.length > 6 && (
                <section className="mb-6 sm:mb-8">
                  <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">All Results</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                    {filteredItems.slice(6).map((item, index) => (
                      <FoodCard 
                        key={index + 6} 
                        {...item} 
                        onOrder={() => handleOrder(item.title)}
                      />
                    ))}
                  </div>
                </section>
              )}
            </>
          ) : (
            // No Results
            <div className="text-center py-8 sm:py-12">
              <p className="text-gray-500 mb-4">No items found matching your criteria.</p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
              >
                Show All Items
              </Button>
            </div>
          )}

          {/* Offers & Discounts */}
          <section className="mt-8 sm:mt-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Offers & Discounts</h2>
            <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-lg p-4 sm:p-6 text-center">
              <p className="text-base sm:text-lg font-semibold text-gray-800 mb-4">Get 20% off on your first order!</p>
              <div className="flex justify-center space-x-2 sm:space-x-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                  <span className="text-lg sm:text-2xl">🍔</span>
                </div>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                  <span className="text-lg sm:text-2xl">🍰</span>
                </div>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                  <span className="text-lg sm:text-2xl">🍜</span>
                </div>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                  <span className="text-lg sm:text-2xl">🥗</span>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Search;