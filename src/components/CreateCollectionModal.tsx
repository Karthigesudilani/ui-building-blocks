import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

interface CreateCollectionModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCreateCollection: (collection: { name: string; description: string; color: string }) => void;
}

const collectionColors = [
  { name: "Orange", value: "bg-orange-500", textColor: "text-white" },
  { name: "Blue", value: "bg-blue-500", textColor: "text-white" },
  { name: "Green", value: "bg-green-500", textColor: "text-white" },
  { name: "Purple", value: "bg-purple-500", textColor: "text-white" },
  { name: "Red", value: "bg-red-500", textColor: "text-white" },
  { name: "Pink", value: "bg-pink-500", textColor: "text-white" },
  { name: "Teal", value: "bg-teal-500", textColor: "text-white" },
  { name: "Indigo", value: "bg-indigo-500", textColor: "text-white" },
];

export const CreateCollectionModal = ({
  open,
  onOpenChange,
  onCreateCollection
}: CreateCollectionModalProps) => {
  const [newCollection, setNewCollection] = useState({
    name: "",
    description: "",
    color: collectionColors[0].value
  });

  const handleCreate = () => {
    if (newCollection.name.trim()) {
      onCreateCollection(newCollection);
      setNewCollection({ name: "", description: "", color: collectionColors[0].value });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Create New Collection</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Collection Name</label>
            <Input
              value={newCollection.name}
              onChange={(e) => setNewCollection({ ...newCollection, name: e.target.value })}
              placeholder="e.g., Quick Dinners, Healthy Snacks..."
            />
          </div>
          
          <div>
            <label className="text-sm font-medium mb-2 block">Description (Optional)</label>
            <Textarea
              value={newCollection.description}
              onChange={(e) => setNewCollection({ ...newCollection, description: e.target.value })}
              placeholder="Describe what this collection is about..."
              rows={3}
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-3 block">Collection Color</label>
            <div className="grid grid-cols-4 gap-2">
              {collectionColors.map((color) => (
                <button
                  key={color.value}
                  onClick={() => setNewCollection({ ...newCollection, color: color.value })}
                  className={`
                    relative w-full aspect-square rounded-lg ${color.value} 
                    flex items-center justify-center transition-transform hover:scale-105
                    ${newCollection.color === color.value ? 'ring-2 ring-primary ring-offset-2' : ''}
                  `}
                >
                  {newCollection.color === color.value && (
                    <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                    </div>
                  )}
                </button>
              ))}
            </div>
            <div className="mt-2">
              <Badge variant="outline" className={`${newCollection.color} ${collectionColors.find(c => c.value === newCollection.color)?.textColor}`}>
                Preview: {newCollection.name || "Collection Name"}
              </Badge>
            </div>
          </div>
          
          <div className="flex gap-2 pt-4">
            <Button 
              variant="outline" 
              onClick={() => onOpenChange(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button 
              onClick={handleCreate}
              disabled={!newCollection.name.trim()}
              className="flex-1"
            >
              Create Collection
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};