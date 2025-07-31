import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Activity, TrendingUp } from "lucide-react";

interface NutritionData {
  macronutrients: {
    calories: number;
    protein: number;
    carbohydrates: number;
    fat: number;
  };
  micronutrients: {
    fiber: number;
    sugar: number;
    sodium: number;
  };
  vitamins: string[];
  minerals: string[];
}

interface NutritionModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  recipeTitle: string;
  nutritionData: NutritionData;
  servings: number;
}

export const NutritionModal = ({
  open,
  onOpenChange,
  recipeTitle,
  nutritionData,
  servings
}: NutritionModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Activity className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <DialogTitle>AI Recipe Enhancement</DialogTitle>
              <p className="text-sm text-muted-foreground">Get detailed nutrition info</p>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Nutritional Information</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Macronutrients */}
              <div>
                <h4 className="font-medium mb-3 text-sm">Macronutrients (per serving)</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Calories</span>
                    <span className="font-medium">{nutritionData.macronutrients.calories} kcal</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Protein</span>
                    <span className="font-medium">{nutritionData.macronutrients.protein}g</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Carbohydrates</span>
                    <span className="font-medium">{nutritionData.macronutrients.carbohydrates}g</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Fat</span>
                    <span className="font-medium">{nutritionData.macronutrients.fat}g</span>
                  </div>
                </div>
              </div>

              {/* Micronutrients */}
              <div>
                <h4 className="font-medium mb-3 text-sm">Micronutrients</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Fiber</span>
                    <span className="font-medium">{nutritionData.micronutrients.fiber}g</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Sugar</span>
                    <span className="font-medium">{nutritionData.micronutrients.sugar}g</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Sodium</span>
                    <span className="font-medium">{nutritionData.micronutrients.sodium}mg</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vitamins & Minerals */}
          <div>
            <h4 className="font-medium mb-3">Vitamins & Minerals</h4>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="text-sm font-medium mb-2">Vitamins:</h5>
                <div className="flex flex-wrap gap-2">
                  {nutritionData.vitamins.map((vitamin) => (
                    <Badge 
                      key={vitamin} 
                      variant="secondary"
                      className="text-xs bg-orange-100 text-orange-700"
                    >
                      {vitamin}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h5 className="text-sm font-medium mb-2">Minerals:</h5>
                <div className="flex flex-wrap gap-2">
                  {nutritionData.minerals.map((mineral) => (
                    <Badge 
                      key={mineral} 
                      variant="secondary"
                      className="text-xs bg-blue-100 text-blue-700"
                    >
                      {mineral}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-muted/30 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Nutritional Highlights</span>
            </div>
            <p className="text-xs text-muted-foreground">
              This recipe provides a balanced mix of macronutrients with {nutritionData.macronutrients.protein}g protein 
              per serving, making it suitable for active individuals. The variety of vitamins and minerals 
              contribute to overall nutritional value.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};