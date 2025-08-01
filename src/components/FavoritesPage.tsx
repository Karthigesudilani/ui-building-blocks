import { useState } from "react";
import { Header } from "@/components/Header";
import { RecipeCard } from "@/components/RecipeCard";
import { Heart, HeartOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import foodFriedRice from "@/assets/food-friedrice.jpg";

export const FavoritesPage = () => {
  const { toast } = useToast();
  const [favoriteRecipes, setFavoriteRecipes] = useState([
    {
      id: "1",
      title: "Chicken and Egg Fried Rice",
      image: foodFriedRice,
      cookTime: 15,
      servings: 4,
      difficulty: "Easy" as const,
      efficiency: 90,
      ingredients: [
        "1 Cup Cooked Chicken, Diced",
        "2 Cups Cooked Rice",
        "2 Eggs", 
        "1 Tbsp Soy Sauce"
      ],
      instructions: [
        "Whisk eggs lightly.",
        "Heat sesame oil in a wok or large skillet over medium-high heat.",
        "Add eggs and scramble until cooked through."
      ]
    },
    {
      id: "2", 
      title: "Fluffy Chicken and Egg Frittata",
      image: foodFriedRice,
      cookTime: 30,
      servings: 4,
      difficulty: "Easy" as const,
      efficiency: 90,
      ingredients: [
        "1 Lb Boneless, Skinless Chicken Breast, Cooked And Shredded",
        "6 Large Eggs",
        "1/2 Cup Milk Or Cream",
        "1/4 Cup Chopped Scallions"
      ],
      instructions: [
        "Preheat oven to 350°F (175°C).",
        "In a large bowl, whisk together eggs, milk, salt, and pepper.",
        "Stir in shredded chicken and scallions."
      ]
    },
    {
      id: "3",
      title: "One-Pan Lemon Herb Roasted Chicken and Eggs", 
      image: foodFriedRice,
      cookTime: 30,
      servings: 4,
      difficulty: "Easy" as const,
      efficiency: 90,
      ingredients: [
        "1.5 Lbs Boneless, Skinless Chicken Thighs",
        "4 Large Eggs",
        "1 Lemon (Juiced And Zested)",
        "2 Tbsp Olive Oil"
      ],
      instructions: [
        "Preheat oven to 400°F (200°C).",
        "Cut chicken thighs into bite-sized pieces. If using, chop onion.",
        "In a large bowl, toss chicken with olive oil, lemon juice, lemon zest, oregano, thyme, salt, and pepper. Add onion if using."
      ]
    }
  ]);

  const [expandedRecipes, setExpandedRecipes] = useState<Set<string>>(new Set());

  const toggleRecipeExpanded = (recipeId: string) => {
    const newExpanded = new Set(expandedRecipes);
    if (newExpanded.has(recipeId)) {
      newExpanded.delete(recipeId);
    } else {
      newExpanded.add(recipeId);
    }
    setExpandedRecipes(newExpanded);
  };

  const handleRemoveFromFavorites = (recipeId: string) => {
    setFavoriteRecipes(prevRecipes => prevRecipes.filter(recipe => recipe.id !== recipeId));
    toast({
      title: "Removed from favorites",
      description: "Recipe has been removed from your favorites.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Heart className="w-6 h-6 text-red-500" fill="currentColor" />
            <h1 className="text-2xl font-bold">Your Favorite Recipes</h1>
          </div>
          <p className="text-muted-foreground">
            You have {favoriteRecipes.length} favorite recipes
          </p>
        </div>

        {favoriteRecipes.length > 0 ? (
          <div className="grid gap-6">
            {favoriteRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                isExpanded={expandedRecipes.has(recipe.id)}
                onToggleExpand={() => toggleRecipeExpanded(recipe.id)}
                onAddToFavorites={() => handleRemoveFromFavorites(recipe.id)}
                showActionButtons={true}
                isFavorited={true}
                showCollectionButton={false}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Heart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No Favorite Recipes Yet</h3>
            <p className="text-muted-foreground">
              Start exploring recipes and save your favorites here for easy access.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};