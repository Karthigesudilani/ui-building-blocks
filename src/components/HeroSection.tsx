import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles } from "lucide-react";
import foodTacos from "@/assets/food-tacos.jpg";
import foodPasta from "@/assets/food-pasta.jpg";
import foodSalad from "@/assets/food-salad.jpg";
import foodFriedRice from "@/assets/food-friedrice.jpg";

interface HeroSectionProps {
  onGetStarted?: () => void;
  onWatchDemo?: () => void;
}

export const HeroSection = ({ onGetStarted, onWatchDemo }: HeroSectionProps) => {
  return (
    <section className="py-20 px-4 text-center bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-4xl mx-auto">
        <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
          <Sparkles className="w-3 h-3 mr-1" />
          AI-Powered Recipe Discovery
        </Badge>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Turn Leftover Ingredients Into{" "}
          <span className="text-primary">Delicious Meals</span>
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Stop wasting food and start creating amazing dishes. Our AI analyzes your available 
          ingredients and generates personalized recipes that minimize waste and maximize flavor.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" onClick={onGetStarted} className="min-w-[200px]">
            Start Finding Recipes
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button variant="outline" size="lg" onClick={onWatchDemo}>
            Watch Demo
          </Button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-3xl mx-auto">
          <div>
            <img 
              src={foodTacos} 
              alt="Delicious tacos"
              className="w-full h-24 object-cover rounded-lg shadow-md"
            />
          </div>
          <div>
            <img 
              src={foodPasta} 
              alt="Golden pasta"
              className="w-full h-24 object-cover rounded-lg shadow-md"
            />
          </div>
          <div>
            <img 
              src={foodSalad} 
              alt="Fresh salad"
              className="w-full h-24 object-cover rounded-lg shadow-md"
            />
          </div>
          <div>
            <img 
              src={foodFriedRice} 
              alt="Fried rice"
              className="w-full h-24 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};