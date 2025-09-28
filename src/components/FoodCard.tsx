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
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardContent className="p-0">
        <div className="aspect-video overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
          <p className="text-sm text-gray-600 mb-2">{cuisine}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <span className="text-sm text-gray-600">Rating:</span>
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{rating}</span>
              </div>
            </div>
            {showOrderButton && (
              <Button 
                size="sm" 
                onClick={onOrder}
                className="bg-primary hover:bg-primary/90"
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