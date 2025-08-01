import { Heart, Clock, Sparkles, Users, Globe, ChefHat, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const BenefitSection = () => {
    return (
<>
   {/* Benefits */}
   <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800 animate-fade-in">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-color-pulse">
              Why Choose Smart Recipe Finder?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 animate-fade-in-delay">
              Discover the benefits that make cooking easier and more sustainable
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/10 dark:to-red-900/10 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-slide-in-left hover:scale-105">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center mb-4 animate-bounce-in">
                <Heart className="w-6 h-6 text-orange-600 dark:text-orange-400 animate-pulse" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 animate-slide-up">Reduce Food Waste</h3>
              <p className="text-gray-600 dark:text-gray-300 animate-fade-in-delay">
                Use up to 90% of your available ingredients, significantly reducing food waste and saving money.
              </p>
              <div className="mt-4 relative h-32 rounded-lg overflow-hidden animate-fade-in-delay-2">
                <img
                  src="https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?w=400&h=200&fit=crop&crop=center"
                  alt="Fresh vegetables"
                  className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/10 dark:to-red-900/10 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Save Time</h3>
              <p className="text-gray-600 dark:text-gray-300">
                No more staring at the fridge wondering what to cook. Get instant recipe suggestions in seconds.
              </p>
              <div className="mt-4 relative h-32 rounded-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?w=400&h=200&fit=crop&crop=center"
                  alt="Quick meal preparation"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/10 dark:to-red-900/10 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">AI-Powered</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Advanced AI technology that understands ingredient combinations and creates delicious recipes.
              </p>
              <div className="mt-4 relative h-32 rounded-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?w=400&h=200&fit=crop&crop=center"
                  alt="AI-generated recipe"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/10 dark:to-red-900/10 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Dietary Support</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Accommodate vegan, vegetarian, gluten-free, and other dietary restrictions with ease.
              </p>
              <div className="mt-4 relative h-32 rounded-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?w=400&h=200&fit=crop&crop=center"
                  alt="Healthy dietary options"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/10 dark:to-red-900/10 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Global Cuisine</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Discover recipes from around the world, expanding your culinary horizons with every meal.
              </p>
              <div className="mt-4 relative h-32 rounded-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?w=400&h=200&fit=crop&crop=center"
                  alt="International cuisine"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/10 dark:to-red-900/10 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center mb-4">
                <ChefHat className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Easy Instructions</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Step-by-step cooking instructions that are clear, simple, and perfect for all skill levels.
              </p>
              <div className="mt-4 relative h-32 rounded-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?w=400&h=200&fit=crop&crop=center"
                  alt="Easy cooking instructions"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Transform Your Cooking?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Join thousands of users who are already saving money, reducing waste, and creating delicious meals.
          </p>
          <div>
            <Link 
              to="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-lg font-semibold text-lg transition-all"
            >
              Start Finding Recipes Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
      </>
    );
}