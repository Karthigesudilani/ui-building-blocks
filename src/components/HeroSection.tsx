import { ArrowRight, Sparkles } from "lucide-react";

interface HeroSectionProps {
  onGetStarted?: () => void;
  onWatchDemo?: () => void;
}

export const HeroSection = ({ onGetStarted, onWatchDemo }: HeroSectionProps) => {
  return (
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden animate-fade-in">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-red-50/50 dark:from-orange-900/10 dark:to-red-900/10 animate-pulse-slow"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-orange-800 dark:text-orange-200 px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg animate-bounce-in hover:scale-105 transition-transform duration-300">
              <Sparkles className="w-4 h-4 animate-spin-slow" />
              AI-Powered Recipe Discovery
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-slide-up">
              Turn Leftover Ingredients Into
              <span className="text-orange-500 block animate-color-pulse"> Delicious Meals</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay">
              Stop wasting food and start creating amazing dishes. Our AI analyzes your available ingredients 
              and generates personalized recipes that minimize waste and maximize flavor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up-delay">
              <div>
                <button 
                  onClick={onGetStarted}
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-xl font-semibold text-lg transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 animate-pulse-subtle"
                >
                  Start Finding Recipes
                  <ArrowRight className="w-5 h-5 animate-bounce-x" />
                </button>
              </div>
              <div>
                <button 
                  onClick={onWatchDemo}
                  className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all backdrop-blur-sm hover:scale-105 hover:border-orange-300">
                  Watch Demo
                </button>
              </div>
            </div>
            
            {/* Hero Image Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto animate-fade-in-delay-2">
              <div className="relative h-24 md:h-32 rounded-xl overflow-hidden shadow-lg hover:scale-110 transition-transform duration-300 animate-slide-in-left">
                <img
                  src="https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?w=400&h=300&fit=crop&crop=center"
                  alt="Delicious pasta dish"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="relative h-24 md:h-32 rounded-xl overflow-hidden shadow-lg hover:scale-110 transition-transform duration-300 animate-slide-in-right">
                <img
                  src="https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?w=400&h=300&fit=crop&crop=center"
                  alt="Fresh vegetables"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="relative h-24 md:h-32 rounded-xl overflow-hidden shadow-lg hover:scale-110 transition-transform duration-300 animate-slide-in-left">
                <img
                  src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?w=400&h=300&fit=crop&crop=center"
                  alt="Grilled chicken"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="relative h-24 md:h-32 rounded-xl overflow-hidden shadow-lg hover:scale-110 transition-transform duration-300 animate-slide-in-right">
                <img
                  src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?w=400&h=300&fit=crop&crop=center"
                  alt="Healthy salad"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};