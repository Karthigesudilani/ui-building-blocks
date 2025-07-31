import { Button } from "@/components/ui/button";
import { ChefHat, Heart, BookOpen, Search } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  return (
    <header className="bg-background border-b border-border px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <ChefHat className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Smart Recipe Finder</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Button 
            variant={location.pathname === "/" ? "default" : "ghost"} 
            size="sm"
            asChild
          >
            <Link to="/">
              <Search className="w-4 h-4" />
              Find Recipes
            </Link>
          </Button>
          <Button 
            variant={location.pathname === "/collections" ? "default" : "ghost"} 
            size="sm"
            asChild
          >
            <Link to="/collections">
              <BookOpen className="w-4 h-4" />
              Collections
            </Link>
          </Button>
          <Button 
            variant={location.pathname === "/favorites" ? "default" : "ghost"} 
            size="sm"
            asChild
          >
            <Link to="/favorites">
              <Heart className="w-4 h-4" />
              Favorites
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};