import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Clock, Users, ChefHat, Heart, HeartOff, Plus, Eye, Download, Activity, Utensils } from "lucide-react";
import { cn } from "@/lib/utils";
import { CookingModeModal } from "./CookingModeModal";
import { NutritionModal } from "./NutritionModal";
import { SubstitutionsModal } from "./SubstitutionsModal";
import { CompletionModal } from "./CompletionModal";

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
  onStartCooking?: () => void;
  showActionButtons?: boolean;
  isFavorited?: boolean;
  showCollectionButton?: boolean;
}

export const RecipeCard = ({ 
  recipe, 
  isExpanded = false, 
  onToggleExpand,
  onAddToCollection,
  onAddToFavorites,
  onStartCooking,
  showActionButtons = true,
  isFavorited = false,
  showCollectionButton = true
}: RecipeCardProps) => {
  const [showCookingMode, setShowCookingMode] = useState(false);
  const [showNutrition, setShowNutrition] = useState(false);
  const [showSubstitutions, setShowSubstitutions] = useState(false);
  const [showCompletion, setShowCompletion] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  // Sample cooking steps
  const cookingSteps = recipe.instructions.map((instruction, index) => ({
    step: index + 1,
    instruction,
    duration: index === 0 ? 2 : undefined,
    tips: index === 0 ? ["Make sure eggs are at room temperature for best results"] : undefined
  }));

  // Sample nutrition data
  const nutritionData = {
    macronutrients: {
      calories: 250,
      protein: 28,
      carbohydrates: 4,
      fat: 12
    },
    micronutrients: {
      fiber: 0,
      sugar: 1,
      sodium: 350
    },
    vitamins: ["Vitamin B12", "Vitamin D", "Vitamin A", "Riboflavin"],
    minerals: ["Calcium", "Selenium", "Phosphorus", "Potassium"]
  };

  // Sample substitution data
  const substitutions = [
    {
      ingredient: "soy sauce",
      substitutes: [
        {
          name: "Coconut aminos",
          ratio: "1:1",
          notes: "Slightly sweeter and less salty than soy sauce, with a subtle coconut flavor. Good for those with soy allergies.",
          commonality: "common" as const
        },
        {
          name: "Tamari", 
          ratio: "1:1",
          notes: "Similar to soy sauce but gluten-free. Slightly richer and less salty.",
          commonality: "common" as const
        }
      ]
    }
  ];

  const handleFinishCooking = () => {
    setShowCookingMode(false);
    setShowCompletion(true);
  };
  
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

        {showActionButtons && (
          <div className="space-y-3 mt-4">
            <div className="flex gap-2">
              {onToggleExpand && (
                <Button 
                  variant={isExpanded ? "outline" : "default"} 
                  className="flex-1"
                  onClick={onToggleExpand}
                >
                  {isExpanded ? "View Less" : "View Full Recipe"}
                </Button>
              )}
              
              <Button 
                variant="success" 
                onClick={() => setShowCookingMode(true)}
                className="flex-1"
              >
                <Utensils className="w-4 h-4 mr-2" />
                Start Cooking
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <Button 
                variant="success" 
                size="sm"
                onClick={() => setShowNutrition(true)}
              >
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
              
              {showCollectionButton && onAddToCollection && (
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={onAddToCollection}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add to Collection
                </Button>
              )}

              {onAddToFavorites && (
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={onAddToFavorites}
                >
                  {isFavorited ? (
                    <>
                      <HeartOff className="w-4 h-4 mr-2" />
                      Remove from Favorites
                    </>
                  ) : (
                    <>
                      <Heart className="w-4 h-4 mr-2" />
                      Add to Favorites
                    </>
                  )}
                </Button>
              )}
              
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setShowSubstitutions(true)}
              >
                Substitutions
              </Button>
              
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setShowNutrition(true)}
              >
                <Activity className="w-4 h-4 mr-2" />
                Nutrition
              </Button>
            </div>
          </div>
        )}

        {/* Modals */}
        <CookingModeModal
          open={showCookingMode}
          onOpenChange={setShowCookingMode}
          recipeTitle={recipe.title}
          recipeImage={recipe.image}
          cookTime={recipe.cookTime}
          servings={recipe.servings}
          difficulty={recipe.difficulty}
          steps={cookingSteps}
          currentStep={currentStep}
          onNextStep={() => setCurrentStep(prev => Math.min(prev + 1, cookingSteps.length - 1))}
          onPreviousStep={() => setCurrentStep(prev => Math.max(prev - 1, 0))}
          onFinish={handleFinishCooking}
        />

        <NutritionModal
          open={showNutrition}
          onOpenChange={setShowNutrition}
          recipeTitle={recipe.title}
          nutritionData={nutritionData}
          servings={recipe.servings}
        />

        <SubstitutionsModal
          open={showSubstitutions}
          onOpenChange={setShowSubstitutions}
          substitutions={substitutions}
        />

        <CompletionModal
          open={showCompletion}
          onOpenChange={setShowCompletion}
          recipeTitle={recipe.title}
          recipeImage={recipe.image}
          cookTime={recipe.cookTime}
          servings={recipe.servings}
        />
      </CardContent>
    </Card>
  );
};