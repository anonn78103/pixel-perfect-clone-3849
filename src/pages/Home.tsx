import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
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

const Home = () => {
  const { toast } = useToast();
  const cuisineTags = ["Chinese", "Indian", "Italian"];
  
  const allFoodData: FoodItem[] = [
    {
      title: "Margherita Pizza",
      cuisine: "Italian",
      rating: 4.5,
      image: margheritaPizza
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
    hasResults 
  } = useSearch(allFoodData);

  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setIsSearchActive(true);
      toast({
        title: "Search Results",
        description: `Found ${filteredItems.length} items matching "${searchQuery}"`,
      });
    }
  };

  const handleTagClick = (cuisine: string) => {
    setSelectedCategory(cuisine);
    setIsSearchActive(true);
    toast({
      title: `${cuisine} Cuisine`,
      description: `Showing ${cuisine} dishes`,
    });
  };

  const handleOrder = (itemTitle: string) => {
    toast({
      title: "Added to Cart",
      description: `${itemTitle} has been added to your cart!`,
    });
  };

  const displayData = isSearchActive ? filteredItems : allFoodData;
  const preferencesData = displayData.slice(0, 3);
  const nearYouData = displayData.slice(3, 6);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        {/* Search Section */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row gap-2 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input 
                placeholder="Search for cuisines, dishes..." 
                className="pl-10 text-sm sm:text-base"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
            </div>
            <Button 
              onClick={handleSearch}
              className="w-full sm:w-auto"
            >
              Search
            </Button>
          </div>
          
          {/* Cuisine Tags */}
          <div className="flex flex-wrap gap-2">
            <Button 
              variant={selectedCategory === "All" ? "default" : "secondary"}
              size="sm"
              onClick={() => {
                setSelectedCategory("All");
                setIsSearchActive(false);
              }}
              className={selectedCategory === "All" ? "bg-primary text-white" : ""}
            >
              All
            </Button>
            {cuisineTags.map((cuisine) => (
              <Button 
                key={cuisine}
                variant={selectedCategory === cuisine ? "default" : "secondary"}
                size="sm"
                onClick={() => handleTagClick(cuisine)}
                className={selectedCategory === cuisine ? "bg-primary text-white" : ""}
              >
                {cuisine}
              </Button>
            ))}
          </div>
        </div>

        {/* Search Results or Default Sections */}
        {isSearchActive ? (
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
              {selectedCategory !== "All" ? `${selectedCategory} Dishes` : "Search Results"}
              <span className="text-sm font-normal text-gray-600 ml-2">
                ({filteredItems.length} items)
              </span>
            </h2>
            {hasResults ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {filteredItems.map((item, index) => (
                  <FoodCard 
                    key={index} 
                    {...item} 
                    onOrder={() => handleOrder(item.title)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-8 sm:py-12">
                <p className="text-gray-500 text-sm sm:text-base">No items found matching your search.</p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setIsSearchActive(false);
                    setSearchQuery("");
                    setSelectedCategory("All");
                  }}
                  className="mt-4"
                >
                  Clear Search
                </Button>
              </div>
            )}
          </section>
        ) : (
          <>
            {/* Preferences Section */}
            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Preferences</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {preferencesData.map((item, index) => (
                  <FoodCard 
                    key={index} 
                    {...item} 
                    onOrder={() => handleOrder(item.title)}
                  />
                ))}
              </div>
            </section>

            {/* Near You Section */}
            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Near You</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {nearYouData.map((item, index) => (
                  <FoodCard 
                    key={index} 
                    {...item} 
                    onOrder={() => handleOrder(item.title)}
                  />
                ))}
              </div>
            </section>
          </>
        )}

        {/* Footer */}
        <footer className="mt-8 sm:mt-12 py-6 border-t text-center text-xs sm:text-sm text-gray-500">
          <p>© 2025 Foodie. All rights reserved</p>
        </footer>
      </main>
    </div>
  );
};

export default Home;