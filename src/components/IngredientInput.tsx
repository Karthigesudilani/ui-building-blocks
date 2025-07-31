import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Plus, X, Search } from "lucide-react";

interface IngredientInputProps {
  ingredients: string[];
  onIngredientsChange: (ingredients: string[]) => void;
  onSearch?: () => void;
  placeholder?: string;
}

export const IngredientInput = ({ 
  ingredients, 
  onIngredientsChange, 
  onSearch,
  placeholder = "Type an ingredient..." 
}: IngredientInputProps) => {
  const [inputValue, setInputValue] = useState("");

  const addIngredient = () => {
    if (inputValue.trim() && !ingredients.includes(inputValue.trim())) {
      onIngredientsChange([...ingredients, inputValue.trim()]);
      setInputValue("");
    }
  };

  const removeIngredient = (ingredient: string) => {
    onIngredientsChange(ingredients.filter(i => i !== ingredient));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addIngredient();
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <div className="flex-1">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={placeholder}
            className="text-base"
          />
        </div>
        <Button onClick={addIngredient} disabled={!inputValue.trim()}>
          <Plus className="w-4 h-4" />
          Add
        </Button>
      </div>

      {ingredients.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-medium">Your Ingredients ({ingredients.length})</p>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => onIngredientsChange([])}
              className="text-muted-foreground hover:text-foreground"
            >
              Clear All
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {ingredients.map((ingredient) => (
              <Badge 
                key={ingredient} 
                variant="secondary" 
                className="px-3 py-1 text-sm"
              >
                {ingredient}
                <Button
                  variant="ghost"
                  size="sm"
                  className="ml-2 h-auto p-0 hover:bg-transparent"
                  onClick={() => removeIngredient(ingredient)}
                >
                  <X className="w-3 h-3" />
                </Button>
              </Badge>
            ))}
          </div>
        </div>
      )}

      {ingredients.length > 0 && onSearch && (
        <Button 
          onClick={onSearch} 
          className="w-full"
          size="lg"
        >
          <Search className="w-4 h-4 mr-2" />
          Find Recipes ({ingredients.length} ingredients)
        </Button>
      )}
    </div>
  );
};