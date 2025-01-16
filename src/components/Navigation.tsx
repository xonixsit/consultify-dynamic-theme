import { useState } from "react";
import { Menu, X } from "lucide-react";
import { getNavigationContent } from "../utils/contentLoader";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigation = getNavigationContent();

  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold bg-primary text-white px-3 py-1 rounded-md transform -skew-x-12">
              <span className="inline-block transform skew-x-12">
                {navigation.logo}
              </span>
            </div>
            <span className="text-primary font-medium hidden sm:inline-block">
              Consulting
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigation.links.map((link) => (
              <a
                key={link.text}
                href={link.href}
                className="text-gray-600 hover:text-primary transition-colors"
              >
                {link.text}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              {navigation.links.map((link) => (
                <a
                  key={link.text}
                  href={link.href}
                  className="text-gray-600 hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};