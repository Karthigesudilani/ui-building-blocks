import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Clock, Users, ChefHat, Heart, Plus, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

interface Recipe {
  id: string;
  title: string;
  image: string;
  cookTime: number;
  servings: number;
  difficulty: "Easy" | "Medium" | "Hard";
  efficiency: number;
  ingredients: string[];
  instructions: string[];
  isExpanded?: boolean;
}

interface RecipeCardProps {
  recipe: Recipe;
  isExpanded?: boolean;
  onToggleExpand?: () => void;
  onAddToCollection?: () => void;
  onAddToFavorites?: () => void;
}

export const RecipeCard = ({ 
  recipe, 
  isExpanded = false, 
  onToggleExpand,
  onAddToCollection,
  onAddToFavorites 
}: RecipeCardProps) => {
  const efficiencyColor = recipe.efficiency >= 90 ? "recipe-efficiency" : "recipe-easy";
  
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="relative">
          <img 
            src={recipe.image} 
            alt={recipe.title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-3 right-3">
            <Badge 
              variant="secondary" 
              className="bg-background/90 text-foreground"
            >
              <ChefHat className="w-3 h-3 mr-1" />
              {recipe.difficulty}
            </Badge>
          </div>
          <div className="absolute top-3 left-3">
            <Badge 
              className={cn(
                "text-white",
                recipe.efficiency >= 90 ? "bg-recipe-efficiency" : "bg-recipe-easy"
              )}
            >
              {recipe.efficiency}% Ingredient Efficiency
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-2">{recipe.title}</h3>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {recipe.cookTime} minutes
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {recipe.servings}
          </div>
          <div className="flex items-center gap-1">
            <ChefHat className="w-4 h-4" />
            {recipe.difficulty}
          </div>
        </div>

        {isExpanded && (
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2 flex items-center gap-2">
                <ChefHat className="w-4 h-4 text-primary" />
                All Ingredients
              </h4>
              <div className="grid grid-cols-1 gap-2 text-sm">
                {recipe.ingredients.map((ingredient, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full" />
                    {ingredient}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2 flex items-center gap-2">
                <Eye className="w-4 h-4 text-primary" />
                Complete Instructions
              </h4>
              <div className="space-y-2">
                {recipe.instructions.map((instruction, index) => (
                  <div key={index} className="flex gap-3 text-sm">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <p className="text-muted-foreground">{instruction}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="flex gap-2 mt-4">
          {onToggleExpand && (
            <Button 
              variant={isExpanded ? "outline" : "default"} 
              className="flex-1"
              onClick={onToggleExpand}
            >
              {isExpanded ? "View Less" : "View Full Recipe"}
            </Button>
          )}
          
          <div className="flex gap-2">
            {onAddToCollection && (
              <Button variant="success" size="sm" onClick={onAddToCollection}>
                <Plus className="w-4 h-4" />
              </Button>
            )}
            {onAddToFavorites && (
              <Button variant="outline" size="sm" onClick={onAddToFavorites}>
                <Heart className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};