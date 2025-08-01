import { ChefHat, Twitter, Instagram, Facebook, Youtube, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-background py-16 px-4 animate-fade-in">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Brand */}
          <div className="animate-slide-in-left">
            <div className="flex items-center gap-2 mb-4 animate-bounce-in">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center animate-pulse">
                <ChefHat className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-accent font-bold animate-slide-up">Smart Recipe Finder</span>
            </div>
            <p className="text-background/70 mb-6 max-w-md font-body animate-fade-in-delay">
              Transforming leftover ingredients into delicious meals with AI-powered recipe 
              generation. Join thousands of users who are already saving money and reducing food waste.
            </p>
            <div className="flex gap-4 animate-fade-in-delay-2">
              <Twitter className="w-5 h-5 text-background/70 hover:text-background cursor-pointer transition-colors hover:scale-125" />
              <Instagram className="w-5 h-5 text-background/70 hover:text-background cursor-pointer transition-colors hover:scale-125" />
              <Facebook className="w-5 h-5 text-background/70 hover:text-background cursor-pointer transition-colors hover:scale-125" />
              <Youtube className="w-5 h-5 text-background/70 hover:text-background cursor-pointer transition-colors hover:scale-125" />
            </div>
          </div>

          {/* Get Started */}
          <div className="animate-slide-in-right">
            <h3 className="text-lg font-heading font-semibold mb-4 animate-slide-up">Get Started Today</h3>
            <p className="text-background/70 mb-6 font-body animate-fade-in-delay">
              Join our community of food lovers and start creating amazing meals from your leftover ingredients.
            </p>
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary-hover transition-colors font-body hover:scale-105 animate-pulse-subtle">
              <ChefHat className="w-4 h-4 mr-2 inline animate-bounce-x" />
              Start Finding Recipes
            </button>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center animate-fade-in-delay-3">
          <p className="text-background/70 text-sm">
            © 2024 Smart Recipe Finder. All rights reserved. Made with{" "}
            <Heart className="w-4 h-4 inline text-primary animate-pulse" fill="currentColor" />{" "}
            for food lovers everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
};