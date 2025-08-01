import { useState } from "react";
import Header from "@/components/Header";
import { RecipeCard } from "@/components/RecipeCard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { CollectionCard } from "@/components/CollectionCard";
import { CreateCollectionModal } from "@/components/CreateCollectionModal";
import { CollectionDetailPage } from "@/components/CollectionDetailPage";
import foodFriedRice from "@/assets/food-friedrice.jpg";

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

export const CollectionsPage = () => {
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState<Collection | null>(null);
  const [collections, setCollections] = useState<Collection[]>([
    {
      id: "1",
      name: "dev",
      description: "test",
      recipeCount: 1,
      createdAt: "7/31/2025",
      color: "bg-orange-500",
      recipes: [
        {
          id: "1",
          title: "Chicken and Egg Fried Rice",
          image: foodFriedRice,
          cookTime: 15,
          servings: 4,
          difficulty: "Easy",
          efficiency: 90,
          ingredients: [
            "1 Cup Cooked Chicken, Diced",
            "2 Cups Cooked Rice",
            "2 Eggs",
            "1 Tbsp Soy Sauce"
          ],
          instructions: [
            "Whisk eggs lightly.",
            "Heat oil and scramble eggs.",
            "Add chicken and rice, stir-fry until heated."
          ]
        }
      ]
    }
  ]);

  const handleCreateCollection = (newCollection: { name: string; description: string; color: string }) => {
    const collection: Collection = {
      id: Date.now().toString(),
      name: newCollection.name,
      description: newCollection.description,
      color: newCollection.color,
      recipeCount: 0,
      createdAt: new Date().toLocaleDateString(),
      recipes: []
    };

    setCollections([...collections, collection]);
    setShowCreateDialog(false);
  };

  const handleViewCollection = (collection: Collection) => {
    setSelectedCollection(collection);
  };

  const handleEditCollection = (collectionId: string) => {
    // TODO: Implement edit functionality
    console.log("Edit collection:", collectionId);
  };

  const handleDeleteCollection = (collectionId: string) => {
    setCollections(collections.filter(c => c.id !== collectionId));
  };

  if (selectedCollection) {
    return (
      <CollectionDetailPage
        collection={selectedCollection}
        onBack={() => setSelectedCollection(null)}
        onEdit={() => handleEditCollection(selectedCollection.id)}
        onDelete={() => {
          handleDeleteCollection(selectedCollection.id);
          setSelectedCollection(null);
        }}
        onAddRecipe={() => {
          console.log("Add recipe to collection:", selectedCollection.id);
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="text-center flex-1">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-6 h-6 bg-primary/10 rounded flex items-center justify-center">
                📁
              </div>
              <h1 className="text-2xl font-bold">Recipe Collections</h1>
            </div>
            <p className="text-muted-foreground">
              Organize your recipes into themed collections for easy access and inspiration.
            </p>
          </div>
        </div>

        <div className="text-center mb-8">
          <Button onClick={() => setShowCreateDialog(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Create New Collection
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((collection) => (
            <CollectionCard
              key={collection.id}
              collection={collection}
              onView={() => handleViewCollection(collection)}
              onEdit={() => handleEditCollection(collection.id)}
              onDelete={() => handleDeleteCollection(collection.id)}
            />
          ))}
        </div>

        {collections.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              📁
            </div>
            <h3 className="text-lg font-semibold mb-2">No Collections Yet</h3>
            <p className="text-muted-foreground mb-4">
              Create your first collection to organize your favorite recipes.
            </p>
            <Button onClick={() => setShowCreateDialog(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Create Collection
            </Button>
          </div>
        )}
      </div>

      <CreateCollectionModal
        open={showCreateDialog}
        onOpenChange={setShowCreateDialog}
        onCreateCollection={handleCreateCollection}
      />
    </div>
  );
};