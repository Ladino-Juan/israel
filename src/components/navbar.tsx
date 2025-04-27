import { useState } from 'react';
import { FiMenu, FiX, FiArrowLeft } from 'react-icons/fi';
import Logo from '../assets/images/Logo.svg';

export const navLinks = [
  {
    title: 'בית',
    href: '#home',
  },
  {
    title: 'אודות',
    href: '#about',
  },
  {
    title: 'תכונות',
    href: '#features',
  },
  {
    title: 'סיפורי הצלחה',
    href: '#testimonials',
  },
  {
    title: 'שאלות נפוצות',
    href: '#faq',
  },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black top-0 z-50 sticky">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img className="h-10 w-10" alt="לוגו" src={Logo} />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-purple-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                {link.title}
              </a>
            ))}
            <button className="ml-4 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
              הרשם עכשיו
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-purple-400 hover:bg-gray-800 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.title}
              </a>
            ))}
            <button className="w-full mt-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-base font-medium block text-center">
              הרשם עכשיו
            </button>
          </div>
        </div>
      )}
    </header>
  );
}