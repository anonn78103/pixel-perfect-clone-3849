import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";

// Import food images
import pepperoniPizza from "@/assets/pepperoni-pizza.jpg";
import vegetableNoodles from "@/assets/vegetable-noodles.jpg";
import indianCurry from "@/assets/indian-curry.jpg";
import margheritaPizza from "@/assets/margherita-pizza.jpg";
import spicyIndianDish from "@/assets/spicy-indian-dish.jpg";
import chineseDumplings from "@/assets/chinese-dumplings.jpg";

const Orders = () => {
  const currentOrders = [
    {
      title: "Pepperoni Pizza",
      restaurant: "Mario's Pizzeria",
      eta: "15 mins",
      image: pepperoniPizza
    },
    {
      title: "Vegetable Noodles", 
      restaurant: "Wok & Roll",
      eta: "25 mins",
      image: vegetableNoodles
    },
    {
      title: "Chicken Curry",
      restaurant: "Spice Route", 
      eta: "30 mins",
      image: indianCurry
    }
  ];

  const pastOrders = [
    {
      title: "Margherita Pizza",
      date: "Oct 1, 2023",
      rating: 4.5,
      image: margheritaPizza
    },
    {
      title: "Butter Chicken",
      date: "Sep 25, 2023", 
      rating: 5.0,
      image: spicyIndianDish
    },
    {
      title: "Mushroom Risotto",
      date: "Sep 15, 2023",
      rating: 4.0,
      image: chineseDumplings
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) 
            ? "fill-yellow-400 text-yellow-400" 
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        {/* Current Orders */}
        <section className="mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Current Orders</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {currentOrders.map((order, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="aspect-[4/3] sm:aspect-video overflow-hidden">
                    <img 
                      src={order.image} 
                      alt={order.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3 sm:p-4">
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">{order.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">From: {order.restaurant}</p>
                    <p className="text-xs sm:text-sm text-gray-600 mb-3">ETA: {order.eta}</p>
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 text-xs sm:text-sm"
                      size="sm"
                    >
                      Track Order
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Past Orders */}
        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Past Orders</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {pastOrders.map((order, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="aspect-[4/3] sm:aspect-video overflow-hidden">
                    <img 
                      src={order.image} 
                      alt={order.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3 sm:p-4">
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">{order.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 mb-2">Ordered on: {order.date}</p>
                    <div className="flex items-center space-x-1 mb-3">
                      {renderStars(order.rating)}
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full text-xs sm:text-sm"
                      size="sm"
                    >
                      Reorder
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Orders;