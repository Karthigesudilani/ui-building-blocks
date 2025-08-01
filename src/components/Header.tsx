"use client";

import { useState } from "react";
import { ChefHat, Heart, ArrowLeft, Menu, X, BookOpen, Search } from "lucide-react";

import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";

interface HeaderProps {
  currentPage?: string;
  showBackButton?: boolean;
  backUrl?: string;
  favoritesCount?: number;
}

export default function Header({
  currentPage,
  showBackButton = false,
  backUrl = "/",
  favoritesCount = 0
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  return (
    <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <ChefHat className="w-8 h-8 text-orange-500" />
              <span className="text-xl font-accent font-bold text-gray-900 hidden sm:block">
                Smart Recipe Finder
              </span>
              <span className="text-lg font-accent font-bold text-gray-900 sm:hidden">
                SRF
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
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

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
                  {isMobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 transition-all duration-300 ease-in-out">
              <div className="py-4 space-y-2">
                <Button
                  variant={location.pathname === "/" ? "default" : "ghost"}
                  size="sm"
                  asChild
                  className="w-full justify-start"
                >
                  <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                    <Search className="w-4 h-4 mr-2" />
                    Find Recipes
                  </Link>
                </Button>
                <Button
                  variant={location.pathname === "/collections" ? "default" : "ghost"}
                  size="sm"
                  asChild
                  className="w-full justify-start"
                >
                  <Link to="/collections" onClick={() => setIsMobileMenuOpen(false)}>
                    <BookOpen className="w-4 h-4 mr-2" />
                    Collections
                  </Link>
                </Button>
                <Button
                  variant={location.pathname === "/favorites" ? "default" : "ghost"}
                  size="sm"
                  asChild
                  className="w-full justify-start"
                >
                  <Link to="/favorites" onClick={() => setIsMobileMenuOpen(false)}>
                    <Heart className="w-4 h-4 mr-2" />
                    Favorites
                  </Link>
                </Button>

              {showBackButton && (
                <Link
                  to={backUrl}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors bg-gray-100 text-gray-700 hover:bg-gray-200"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span>Back</span>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 