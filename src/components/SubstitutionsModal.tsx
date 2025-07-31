import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Activity, ArrowRight } from "lucide-react";

interface Substitution {
  ingredient: string;
  substitutes: Array<{
    name: string;
    ratio: string;
    notes: string;
    commonality: "common" | "uncommon" | "rare";
  }>;
}

interface SubstitutionsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  substitutions: Substitution[];
}

export const SubstitutionsModal = ({
  open,
  onOpenChange,
  substitutions
}: SubstitutionsModalProps) => {
  const getCommonalityColor = (commonality: string) => {
    switch (commonality) {
      case "common":
        return "bg-recipe-common text-white";
      case "uncommon":
        return "bg-orange-500 text-white";
      case "rare":
        return "bg-red-500 text-white";
      default:
        return "bg-muted";
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Activity className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <DialogTitle>AI Recipe Enhancement</DialogTitle>
              <p className="text-sm text-muted-foreground">Find ingredient substitutes</p>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Ingredient Substitutions</h3>
            
            <div className="space-y-6">
              {substitutions.map((substitution, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <h4 className="font-medium mb-4 text-primary">{substitution.ingredient}</h4>
                  
                  <div className="space-y-3">
                    {substitution.substitutes.map((substitute, subIndex) => (
                      <div key={subIndex} className="bg-muted/30 rounded-lg p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <h5 className="font-medium">{substitute.name}</h5>
                            <Badge className={getCommonalityColor(substitute.commonality)}>
                              {substitute.commonality}
                            </Badge>
                          </div>
                          <div className="text-sm font-medium text-primary">
                            Ratio: {substitute.ratio}
                          </div>
                        </div>
                        
                        <p className="text-sm text-muted-foreground">
                          <strong>Notes:</strong> {substitute.notes}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-medium mb-2 text-blue-900">💡 Substitution Tips</h4>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Always taste as you go when using substitutions</li>
              <li>• Green badges indicate common substitutes that work well</li>
              <li>• Orange badges are less common but still effective</li>
              <li>• Red badges are rare substitutes - use with caution</li>
              <li>• Ratios are guidelines - adjust based on your taste preferences</li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};