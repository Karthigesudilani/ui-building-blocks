import { FeatureCard } from "./FeatureCard";
import { AlertCircle, CheckCircle2, ChefHat, Timer, DollarSign, CheckCircle, Zap } from "lucide-react";

export const ProblemSolutionSection = () => {
  const problems = [
    {
      title: "Food Waste Crisis",
      description: "40% of food is wasted because people don't know how to use leftover ingredients."
    },
    {
      title: "Decision Paralysis", 
      description: "People stare at their fridge for 20+ minutes trying to figure out what to cook."
    },
    {
      title: "Recipe Overwhelm",
      description: "Thousands of recipes online, but none match what's actually in your kitchen."
    }
  ];

  const solutions = [
    {
      title: "AI analyzes your ingredients",
      description: "Our smart system understands what you have and suggests optimal combinations."
    },
    {
      title: "Generates personalized recipes", 
      description: "Creates custom recipes tailored to your exact ingredients and preferences."
    },
    {
      title: "Minimizes food waste",
      description: "Uses ingredients efficiently to reduce waste and save money."
    },
    {
      title: "Saves time and money",
      description: "Quick meal planning and smart ingredient usage cuts costs and prep time."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 animate-slide-up">
              The Problem We Solve
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3 animate-fade-in-delay hover:scale-105 transition-transform duration-300">
                <div className="w-6 h-6 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mt-1 animate-pulse">
                  <span className="text-red-600 dark:text-red-400 text-sm font-bold">!</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Food Waste Crisis</h3>
                  <p className="text-gray-600 dark:text-gray-300">40% of food is wasted because people don't know how to use leftover ingredients.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 animate-fade-in-delay-2 hover:scale-105 transition-transform duration-300">
                <div className="w-6 h-6 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mt-1 animate-pulse">
                  <span className="text-red-600 dark:text-red-400 text-sm font-bold">!</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Decision Paralysis</h3>
                  <p className="text-gray-600 dark:text-gray-300">People stare at their fridge for 20+ minutes trying to figure out what to cook.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 animate-fade-in-delay-3 hover:scale-105 transition-transform duration-300">
                <div className="w-6 h-6 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mt-1 animate-pulse">
                  <span className="text-red-600 dark:text-red-400 text-sm font-bold">!</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Recipe Overwhelm</h3>
                  <p className="text-gray-600 dark:text-gray-300">Thousands of recipes online, but none match what's actually in your kitchen.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl p-8 animate-slide-in-right hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 animate-slide-up">Our Solution</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 animate-fade-in-delay hover:scale-105 transition-transform duration-300">
                <div className="animate-bounce-in">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">AI analyzes your ingredients</span>
              </div>
              <div className="flex items-center gap-3 animate-fade-in-delay-2 hover:scale-105 transition-transform duration-300">
                <div className="animate-bounce-in">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">Generates personalized recipes</span>
              </div>
              <div className="flex items-center gap-3 animate-fade-in-delay-3 hover:scale-105 transition-transform duration-300">
                <div className="animate-bounce-in">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">Minimizes food waste</span>
              </div>
              <div className="flex items-center gap-3 animate-fade-in-delay-4 hover:scale-105 transition-transform duration-300">
                <div className="animate-bounce-in">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">Saves time and money</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const HowItWorksSection = () => {
  const steps = [
    {
      icon: ChefHat,
      title: "Add Your Ingredients",
      description: "Simply type in the ingredients you have available. Our smart interface makes it easy to add multiple items.",
      step: 1
    },
    {
      icon: CheckCircle2,
      title: "AI Generates Recipes", 
      description: "Our advanced AI analyzes your ingredients and creates personalized recipes that use what you have.",
      step: 2
    },
    {
      icon: Timer,
      title: "Cook & Enjoy",
      description: "Follow the step-by-step instructions and enjoy delicious meals while reducing food waste.",
      step: 3
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/10 dark:to-red-900/10 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-color-pulse">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 animate-fade-in-delay">
            Three simple steps to transform your ingredients into delicious meals
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center group animate-slide-in-left hover:scale-105 transition-transform duration-300">
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110 animate-bounce-in">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md animate-pulse">
                <img
                  src="https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?w=100&h=100&fit=crop&crop=center"
                  alt="Fresh ingredients"
                  width={24}
                  height={24}
                  className="rounded-full object-cover"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 animate-slide-up">Add Your Ingredients</h3>
            <p className="text-gray-600 dark:text-gray-300 animate-fade-in-delay">
              Simply type in the ingredients you have available. Our smart interface makes it easy to add multiple items.
            </p>
          </div>
          <div className="text-center group animate-slide-in-up hover:scale-105 transition-transform duration-300">
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110 animate-bounce-in">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md animate-pulse">
                <Zap className="w-4 h-4 text-orange-500 animate-bounce-x" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 animate-slide-up">AI Generates Recipes</h3>
            <p className="text-gray-600 dark:text-gray-300 animate-fade-in-delay">
              Our advanced AI analyzes your ingredients and creates personalized recipes that use what you have.
            </p>
          </div>
          <div className="text-center group animate-slide-in-right hover:scale-105 transition-transform duration-300">
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110 animate-bounce-in">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md animate-pulse">
                <img
                  src="https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?w=100&h=100&fit=crop&crop=center"
                  alt="Delicious meal"
                  width={24}
                  height={24}
                  className="rounded-full object-cover"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 animate-slide-up">Cook & Enjoy</h3>
            <p className="text-gray-600 dark:text-gray-300 animate-fade-in-delay">
              Follow the step-by-step instructions and enjoy delicious meals while reducing food waste.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};