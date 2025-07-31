import { Button } from "@/components/ui/button";
import { ChefHat, Heart, BookOpen, Search } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-background border-b border-border px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <ChefHat className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">Smart Recipe Finder</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Button variant="ghost" size="sm">
            <Search className="w-4 h-4" />
            Find Recipes
          </Button>
          <Button variant="ghost" size="sm">
            <BookOpen className="w-4 h-4" />
            Collections
          </Button>
          <Button variant="ghost" size="sm">
            <Heart className="w-4 h-4" />
            Favorites
          </Button>
        </nav>
      </div>
    </header>
  );
};