import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Folder, Clock, ChefHat, Edit2, Trash2 } from "lucide-react";

interface Collection {
  id: string;
  name: string;
  description?: string;
  recipeCount: number;
  createdAt: string;
  thumbnail?: string;
  recipes?: Array<{
    id: string;
    title: string;
    image: string;
  }>;
}

interface CollectionCardProps {
  collection: Collection;
  onView?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}

export const CollectionCard = ({ 
  collection, 
  onView, 
  onEdit, 
  onDelete 
}: CollectionCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader className="p-4 border-b">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Folder className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">{collection.name}</h3>
              {collection.description && (
                <p className="text-sm text-muted-foreground">{collection.description}</p>
              )}
            </div>
          </div>
          <div className="flex gap-1">
            {onEdit && (
              <Button variant="ghost" size="icon" onClick={onEdit}>
                <Edit2 className="w-4 h-4" />
              </Button>
            )}
            {onDelete && (
              <Button variant="ghost" size="icon" onClick={onDelete}>
                <Trash2 className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-4">
        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <ChefHat className="w-4 h-4" />
            {collection.recipeCount} recipes
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {collection.createdAt}
          </div>
        </div>

        {collection.recipes && collection.recipes.length > 0 && (
          <div className="mb-4">
            <div className="flex gap-2 mb-2">
              {collection.recipes.slice(0, 3).map((recipe) => (
                <img
                  key={recipe.id}
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-12 h-12 rounded object-cover"
                />
              ))}
              {collection.recipes.length > 3 && (
                <div className="w-12 h-12 rounded bg-muted flex items-center justify-center text-xs font-medium">
                  +{collection.recipes.length - 3}
                </div>
              )}
            </div>
          </div>
        )}

        {onView && (
          <Button 
            onClick={onView}
            className="w-full"
            variant="default"
          >
            View Collection
          </Button>
        )}
      </CardContent>
    </Card>
  );
};