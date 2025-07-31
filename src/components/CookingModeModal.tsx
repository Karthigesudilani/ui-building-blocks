import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Clock, Users, ChefHat } from "lucide-react";

interface CookingStep {
  step: number;
  instruction: string;
  duration?: number;
  tips?: string[];
}

interface CookingModeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  recipeTitle: string;
  recipeImage: string;
  cookTime: number;
  servings: number;
  difficulty: string;
  steps: CookingStep[];
  currentStep: number;
  onNextStep: () => void;
  onPreviousStep: () => void;
  onFinish?: () => void;
}

export const CookingModeModal = ({
  open,
  onOpenChange,
  recipeTitle,
  recipeImage,
  cookTime,
  servings,
  difficulty,
  steps,
  currentStep,
  onNextStep,
  onPreviousStep,
  onFinish
}: CookingModeModalProps) => {
  const progress = ((currentStep + 1) / steps.length) * 100;
  const isLastStep = currentStep === steps.length - 1;
  const isFirstStep = currentStep === 0;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="relative">
          {/* Recipe Header */}
          <div 
            className="h-48 bg-cover bg-center rounded-t-lg relative"
            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${recipeImage})` }}
          >
            <div className="absolute inset-0 flex items-center justify-center text-center p-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">{recipeTitle}</h2>
                <div className="flex items-center justify-center gap-4 text-white text-sm">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {cookTime} minutes
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {servings} servings
                  </div>
                  <div className="flex items-center gap-1">
                    <ChefHat className="w-4 h-4" />
                    {difficulty}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Section */}
          <div className="p-6 border-b">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">
                Step {currentStep + 1} of {steps.length}
              </span>
              <span className="text-sm text-muted-foreground">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Current Step */}
          <div className="p-6">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  {currentStep + 1}
                </div>
                <h3 className="text-lg font-semibold">Step {currentStep + 1}</h3>
              </div>
              
              <p className="text-base leading-relaxed mb-4">
                {steps[currentStep]?.instruction}
              </p>

              {steps[currentStep]?.duration && (
                <Badge variant="outline" className="mb-4">
                  <Clock className="w-3 h-3 mr-1" />
                  {steps[currentStep].duration} minutes
                </Badge>
              )}

              {steps[currentStep]?.tips && steps[currentStep].tips.length > 0 && (
                <div className="bg-muted/30 rounded-lg p-4">
                  <h4 className="font-medium mb-2">💡 Pro Tips:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {steps[currentStep].tips.map((tip, index) => (
                      <li key={index}>• {tip}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center">
              <Button
                variant="outline"
                onClick={onPreviousStep}
                disabled={isFirstStep}
                className="flex items-center gap-2"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </Button>

              {isLastStep ? (
                <Button
                  onClick={onFinish}
                  className="flex items-center gap-2 bg-success text-success-foreground hover:bg-success/90"
                >
                  🎉 Finish
                </Button>
              ) : (
                <Button
                  onClick={onNextStep}
                  className="flex items-center gap-2"
                >
                  Next Step
                  <ChevronRight className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};