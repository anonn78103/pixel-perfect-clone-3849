import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import FoodCard from "@/components/FoodCard";
import Navigation from "@/components/Navigation";

// Import food images
import margheritaPizza from "@/assets/margherita-pizza.jpg";
import chineseNoodles from "@/assets/chinese-noodles.jpg";
import indianCurry from "@/assets/indian-curry.jpg";
import cherryDessert from "@/assets/cherry-dessert.jpg";
import spicyIndianDish from "@/assets/spicy-indian-dish.jpg";
import chineseDumplings from "@/assets/chinese-dumplings.jpg";

const Home = () => {
  const cuisineTags = ["Chinese", "Indian", "Italian"];
  
  const preferencesData = [
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
    }
  ];

  const nearYouData = [
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

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Search Section */}
        <div className="mb-8">
          <div className="flex gap-2 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input 
                placeholder="Search for cuisines, dishes..." 
                className="pl-10"
              />
            </div>
            <Button>Search</Button>
          </div>
          
          {/* Cuisine Tags */}
          <div className="flex gap-2">
            {cuisineTags.map((cuisine) => (
              <Button 
                key={cuisine}
                variant="secondary" 
                size="sm"
                className="bg-primary text-white hover:bg-primary/90"
              >
                {cuisine}
              </Button>
            ))}
          </div>
        </div>

        {/* Preferences Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Preferences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {preferencesData.map((item, index) => (
              <FoodCard key={index} {...item} />
            ))}
          </div>
        </section>

        {/* Near You Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Near You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nearYouData.map((item, index) => (
              <FoodCard key={index} {...item} />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 py-6 border-t text-center text-sm text-gray-500">
          <p>© 2025 Foodie. All rights reserved</p>
        </footer>
      </main>
    </div>
  );
};

export default Home;