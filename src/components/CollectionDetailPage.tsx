import { useState } from "react";
import Header from "@/components/Header";
import { RecipeCard } from "@/components/RecipeCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Edit2, Trash2, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Collection {
  id: string;
  name: string;
  description?: string;
  recipeCount: number;
  createdAt: string;
  color: string;
  recipes: Array<{
    id: string;
    title: string;
    image: string;
    cookTime: number;
    servings: number;
    difficulty: "Easy" | "Medium" | "Hard";
    efficiency: number;
    ingredients: string[];
    instructions: string[];
  }>;
}

interface CollectionDetailPageProps {
  collection: Collection;
  onBack: () => void;
  onEdit: () => void;
  onDelete: () => void;
  onAddRecipe: () => void;
}

export const CollectionDetailPage = ({
  collection,
  onBack,
  onEdit,
  onDelete,
  onAddRecipe
}: CollectionDetailPageProps) => {
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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Collections
          </Button>
          
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className={`w-16 h-16 ${collection.color} rounded-2xl flex items-center justify-center`}>
                <span className="text-2xl text-white">📁</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-2">{collection.name}</h1>
                {collection.description && (
                  <p className="text-muted-foreground text-lg">{collection.description}</p>
                )}
                <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                  <span>{collection.recipeCount} recipes</span>
                  <span>Created {collection.createdAt}</span>
                </div>
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button variant="outline" onClick={onEdit}>
                <Edit2 className="w-4 h-4 mr-2" />
                Edit
              </Button>
              <Button variant="outline" onClick={onDelete}>
                <Trash2 className="w-4 h-4 mr-2" />
                Delete
              </Button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Recipes in this Collection</h2>
          <Button onClick={onAddRecipe}>
            <Plus className="w-4 h-4 mr-2" />
            Add Recipe
          </Button>
        </div>

        {collection.recipes.length > 0 ? (
          <div className="grid gap-6">
            {collection.recipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                isExpanded={expandedRecipes.has(recipe.id)}
                onToggleExpand={() => toggleRecipeExpanded(recipe.id)}
                onAddToCollection={() => {
                  console.log("Add to collection:", recipe.id);
                }}
                onAddToFavorites={() => {
                  console.log("Add to favorites:", recipe.id);
                }}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className={`w-16 h-16 ${collection.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
              <span className="text-2xl text-white">📁</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">No Recipes Yet</h3>
            <p className="text-muted-foreground mb-4">
              Start adding recipes to this collection to organize your favorites.
            </p>
            <Button onClick={onAddRecipe}>
              <Plus className="w-4 h-4 mr-2" />
              Add First Recipe
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};