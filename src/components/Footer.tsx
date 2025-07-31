import { ChefHat, Twitter, Instagram, Facebook, Youtube, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <ChefHat className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Smart Recipe Finder</span>
            </div>
            <p className="text-background/70 mb-6 max-w-md">
              Transforming leftover ingredients into delicious meals with AI-powered recipe 
              generation. Join thousands of users who are already saving money and reducing food waste.
            </p>
            <div className="flex gap-4">
              <Twitter className="w-5 h-5 text-background/70 hover:text-background cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-background/70 hover:text-background cursor-pointer transition-colors" />
              <Facebook className="w-5 h-5 text-background/70 hover:text-background cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-background/70 hover:text-background cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Get Started */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get Started Today</h3>
            <p className="text-background/70 mb-6">
              Join our community of food lovers and start creating amazing meals from your leftover ingredients.
            </p>
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary-hover transition-colors">
              <ChefHat className="w-4 h-4 mr-2 inline" />
              Start Finding Recipes
            </button>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/70 text-sm">
            © 2024 Smart Recipe Finder. All rights reserved. Made with{" "}
            <Heart className="w-4 h-4 inline text-primary" fill="currentColor" />{" "}
            for food lovers everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
};