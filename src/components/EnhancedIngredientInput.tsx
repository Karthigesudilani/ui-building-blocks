import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, X, Search, Sparkles } from "lucide-react";

interface IngredientInputProps {
  ingredients: string[];
  onIngredientsChange: (ingredients: string[]) => void;
  onSearch?: () => void;
  placeholder?: string;
}

const commonIngredients = [
  { name: "Chicken breast", emoji: "🐔", category: "Protein" },
  { name: "Eggs", emoji: "🥚", category: "Protein" },
  { name: "Rice", emoji: "🍚", category: "Grain" },
  { name: "Pasta", emoji: "🍝", category: "Grain" },
  { name: "Tomatoes", emoji: "🍅", category: "Vegetable" },
  { name: "Onions", emoji: "🧅", category: "Vegetable" },
  { name: "Garlic", emoji: "🧄", category: "Seasoning" },
  { name: "Bell peppers", emoji: "🫑", category: "Vegetable" },
  { name: "Spinach", emoji: "🥬", category: "Vegetable" },
  { name: "Cheese", emoji: "🧀", category: "Dairy" },
  { name: "Olive oil", emoji: "🫒", category: "Fat" },
  { name: "Salt", emoji: "🧂", category: "Seasoning" },
  { name: "Black pepper", emoji: "⚫", category: "Seasoning" },
  { name: "Lemon", emoji: "🍋", category: "Fruit" },
  { name: "Mushrooms", emoji: "🍄", category: "Vegetable" },
  { name: "Carrots", emoji: "🥕", category: "Vegetable" },
];

export const EnhancedIngredientInput = ({ 
  ingredients, 
  onIngredientsChange, 
  onSearch,
  placeholder = "Search for ingredients..." 
}: IngredientInputProps) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<typeof commonIngredients>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInputChange = (value: string) => {
    setInputValue(value);
    if (value.trim()) {
      const filtered = commonIngredients.filter(ingredient => 
        ingredient.name.toLowerCase().includes(value.toLowerCase()) &&
        !ingredients.includes(ingredient.name)
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const addIngredient = (ingredient: string) => {
    if (ingredient.trim() && !ingredients.includes(ingredient.trim())) {
      onIngredientsChange([...ingredients, ingredient.trim()]);
      setInputValue("");
      setShowSuggestions(false);
    }
  };

  const removeIngredient = (ingredient: string) => {
    onIngredientsChange(ingredients.filter(i => i !== ingredient));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (filteredSuggestions.length > 0) {
        addIngredient(filteredSuggestions[0].name);
      } else {
        addIngredient(inputValue);
      }
    }
  };

  const quickAddIngredients = commonIngredients.filter(ingredient => 
    !ingredients.includes(ingredient.name)
  ).slice(0, 8);

  return (
    <div className="space-y-6">
      {/* Search Input */}
      <div className="relative">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Input
              value={inputValue}
              onChange={(e) => handleInputChange(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={placeholder}
              className="text-base pr-10"
              onFocus={() => inputValue && setShowSuggestions(true)}
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          </div>
          <Button 
            onClick={() => addIngredient(inputValue)} 
            disabled={!inputValue.trim()}
            size="default"
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>

        {/* Autocomplete Suggestions */}
        {showSuggestions && filteredSuggestions.length > 0 && (
          <Card className="absolute top-full left-0 right-0 z-50 mt-1 max-h-48 overflow-y-auto">
            <CardContent className="p-2">
              {filteredSuggestions.map((ingredient) => (
                <button
                  key={ingredient.name}
                  onClick={() => addIngredient(ingredient.name)}
                  className="w-full flex items-center gap-3 p-2 hover:bg-muted rounded-md transition-colors text-left"
                >
                  <span className="text-lg">{ingredient.emoji}</span>
                  <div className="flex-1">
                    <div className="font-medium">{ingredient.name}</div>
                    <div className="text-xs text-muted-foreground">{ingredient.category}</div>
                  </div>
                </button>
              ))}
            </CardContent>
          </Card>
        )}
      </div>

      {/* Quick Add Suggestions */}
      {ingredients.length === 0 && (
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-primary" />
            <p className="text-sm font-medium">Quick Add Popular Ingredients</p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {quickAddIngredients.map((ingredient) => (
              <Button
                key={ingredient.name}
                variant="outline"
                size="sm"
                onClick={() => addIngredient(ingredient.name)}
                className="justify-start h-auto p-3"
              >
                <span className="mr-2 text-base">{ingredient.emoji}</span>
                <span className="text-sm">{ingredient.name}</span>
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Selected Ingredients */}
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
            {ingredients.map((ingredient) => {
              const commonIngredient = commonIngredients.find(ci => ci.name === ingredient);
              return (
                <Badge 
                  key={ingredient} 
                  variant="secondary" 
                  className="px-3 py-2 text-sm flex items-center gap-2"
                >
                  {commonIngredient && (
                    <span className="text-sm">{commonIngredient.emoji}</span>
                  )}
                  {ingredient}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="ml-1 h-auto p-0 hover:bg-transparent"
                    onClick={() => removeIngredient(ingredient)}
                  >
                    <X className="w-3 h-3" />
                  </Button>
                </Badge>
              );
            })}
          </div>
        </div>
      )}

      {/* Search Button */}
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

      {/* Tips */}
      {ingredients.length === 0 && (
        <div className="mt-6 p-4 bg-muted/30 rounded-lg">
          <p className="text-sm text-muted-foreground mb-2">💡 Tips for Better Results:</p>
          <ul className="text-xs text-muted-foreground space-y-1">
            <li>• Include main ingredients like proteins, vegetables, and grains</li>
            <li>• Add common pantry staples (oil, spices, etc.)</li>
            <li>• Be specific about ingredients (e.g., "chicken breast" vs "chicken")</li>
            <li>• The more ingredients you add, the better the recipe suggestions</li>
          </ul>
        </div>
      )}
    </div>
  );
};