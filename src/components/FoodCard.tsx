import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface FoodCardProps {
  title: string;
  cuisine: string;
  rating: number;
  image: string;
  onOrder?: () => void;
  showOrderButton?: boolean;
}

const FoodCard = ({ 
  title, 
  cuisine, 
  rating, 
  image, 
  onOrder,
  showOrderButton = true 
}: FoodCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-0">
        <div className="aspect-[4/3] sm:aspect-video overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-3 sm:p-4">
          <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base line-clamp-1">{title}</h3>
          <p className="text-xs sm:text-sm text-gray-600 mb-2">{cuisine}</p>
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center space-x-1">
              <span className="text-xs sm:text-sm text-gray-600">Rating:</span>
              <div className="flex items-center space-x-1">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-xs sm:text-sm font-medium">{rating}</span>
              </div>
            </div>
            {showOrderButton && (
              <Button 
                size="sm" 
                onClick={onOrder}
                className="bg-primary hover:bg-primary/90 text-xs sm:text-sm px-3 py-1 sm:px-4 sm:py-2"
              >
                Order
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FoodCard;