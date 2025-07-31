import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, ChefHat } from "lucide-react";

interface CompletionModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  recipeTitle: string;
  recipeImage: string;
  cookTime: number;
  servings: number;
  onTakePhoto?: () => void;
  onShareSuccess?: () => void;
}

export const CompletionModal = ({
  open,
  onOpenChange,
  recipeTitle,
  recipeImage,
  cookTime,
  servings,
  onTakePhoto,
  onShareSuccess
}: CompletionModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md text-center">
        <div className="space-y-6">
          {/* Recipe Header */}
          <div 
            className="h-32 bg-cover bg-center rounded-lg relative"
            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${recipeImage})` }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div>
                <h2 className="text-lg font-bold text-white mb-1">{recipeTitle}</h2>
                <div className="flex items-center justify-center gap-3 text-white text-xs">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {cookTime} minutes
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {servings} servings
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Complete */}
          <div className="flex items-center justify-between text-sm font-medium mb-2">
            <span>Step 6 of 6</span>
            <span>100%</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div className="bg-primary h-2 rounded-full w-full"></div>
          </div>

          {/* Completion Message */}
          <div className="space-y-4">
            <div className="text-6xl">🎉</div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Congratulations!</h3>
              <p className="text-muted-foreground">Your delicious meal is ready to enjoy!</p>
            </div>

            <Badge className="bg-blue-100 text-blue-700 border-blue-200">
              <span className="mr-1">👨‍🍳</span>
              Bon Appétit!
            </Badge>
          </div>

          {/* Action Tip */}
          <div className="bg-muted/30 rounded-lg p-4">
            <p className="text-sm text-muted-foreground">
              💡 Tip: Take a photo and share your culinary success!
            </p>
          </div>

          {/* Navigation */}
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1"
            >
              Previous
            </Button>
            <Button
              onClick={() => onOpenChange(false)}
              className="flex-1 bg-success text-success-foreground hover:bg-success/90"
            >
              Finish
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};