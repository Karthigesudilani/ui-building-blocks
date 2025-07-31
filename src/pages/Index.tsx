import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSolutionSection, HowItWorksSection } from "@/components/ProblemSolutionSection";
import { Footer } from "@/components/Footer";
import { IngredientInput } from "@/components/IngredientInput";
import { RecipeCard } from "@/components/RecipeCard";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import foodFriedRice from "@/assets/food-friedrice.jpg";

const Index = () => {
  const [showIngredientDialog, setShowIngredientDialog] = useState(false);
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [showRecipes, setShowRecipes] = useState(false);

  // Sample recipe data
  const sampleRecipes = [
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
        "1 Tbsp Soy Sauce",
        "1/2 Cup Chopped Vegetables (Peas, Carrots, Etc.)",
        "Green Onions For Garnish (Optional)"
      ],
      instructions: [
        "Whisk eggs lightly.",
        "Heat sesame oil in a wok or large skillet over medium-high heat.",
        "Add eggs and scramble until cooked through.",
        "Add chicken and vegetables, stir-fry for 2 minutes.",
        "Add cooked rice and soy sauce, stir-fry until heated through.",
        "Garnish with green onions (optional). Serve hot."
      ]
    }
  ];

  const handleGetStarted = () => {
    setShowIngredientDialog(true);
  };

  const handleSearch = () => {
    setShowIngredientDialog(false);
    setShowRecipes(true);
  };

  const handleBackToIngredients = () => {
    setShowRecipes(false);
    setShowIngredientDialog(true);
  };

  if (showRecipes) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="mb-8">
            <Button 
              variant="ghost" 
              onClick={handleBackToIngredients}
              className="mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Ingredients
            </Button>
            
            <div 
              className="relative h-48 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl p-8 flex items-center justify-center text-center bg-cover bg-center"
              style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${foodFriedRice})` }}
            >
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">Recipe Suggestions</h1>
                <p className="text-white/90">Based on your ingredients: {ingredients.join(", ")}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mb-6">
            <p className="text-muted-foreground">
              {ingredients.length} ingredients • Ready to cook!
            </p>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setIngredients([])}>
                Add More Ingredients
              </Button>
              <Button variant="outline">
                Regenerate
              </Button>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Your Recipes ({sampleRecipes.length})</h2>
            <div className="grid gap-6">
              {sampleRecipes.map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  isExpanded={true}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection onGetStarted={handleGetStarted} />
      <ProblemSolutionSection />
      <HowItWorksSection />
      <Footer />

      <Dialog open={showIngredientDialog} onOpenChange={setShowIngredientDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center">What's in Your Kitchen?</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p className="text-center text-muted-foreground mb-6">
              Add the ingredients you have available. Our AI will analyze them and create 
              personalized recipes that minimize waste and maximize flavor.
            </p>
            
            <IngredientInput
              ingredients={ingredients}
              onIngredientsChange={setIngredients}
              onSearch={handleSearch}
              placeholder="Type an ingredient..."
            />
            
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
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
