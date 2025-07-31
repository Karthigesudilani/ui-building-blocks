import { FeatureCard } from "./FeatureCard";
import { AlertCircle, CheckCircle2, ChefHat, Timer, DollarSign } from "lucide-react";

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
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Problems */}
          <div>
            <h2 className="text-3xl font-bold mb-8">The Problem We Solve</h2>
            <div className="space-y-6">
              {problems.map((problem, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-8 h-8 bg-destructive/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-4 h-4 text-destructive" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{problem.title}</h3>
                    <p className="text-muted-foreground text-sm">{problem.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div className="bg-success/5 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-8">Our Solution</h2>
            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-8 h-8 bg-success/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-success" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{solution.title}</h3>
                    <p className="text-muted-foreground text-sm">{solution.description}</p>
                  </div>
                </div>
              ))}
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
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">How It Works</h2>
        <p className="text-muted-foreground mb-16 max-w-2xl mx-auto">
          Three simple steps to transform your ingredients into delicious meals
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <FeatureCard
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              step={step.step}
            />
          ))}
        </div>
      </div>
    </section>
  );
};