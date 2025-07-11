import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Programs', href: '/programs' },
    { name: 'About Us', href: '/about' },
    { name: 'Events', href: '/events' },
    { name: 'Get Involved', href: '/get-involved' },
    { name: 'Contact', href: '/contact' },
  ]

  // Get hero section background color based on current page
  const getHeroBackgroundColor = () => {
    switch (location.pathname) {
      case '/':
        return 'bg-gray-50' // Home page hero background
      case '/programs':
      case '/about':
      case '/events':
      case '/get-involved':
      case '/contact':
      case '/donate':
        return 'bg-[#121212]' // Dark hero background for specified pages
      default:
        return 'bg-[#121212]'
    }
  }

  // Check if current page should have dynamic navigation
  const shouldHaveDynamicNav = () => {
    return true // All pages now have dynamic navigation
  }

  useEffect(() => {
    if (!shouldHaveDynamicNav()) return

    const handleScroll = () => {
      // Get the hero section element
      const heroSection = document.querySelector('section:first-of-type')
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
        const scrollPosition = window.scrollY + 80 // Account for header height
        
        // When scroll position reaches the bottom of hero section, change to black
        setIsScrolled(scrollPosition >= heroBottom)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position

    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname])

  // Determine navigation background class
  const getNavBackgroundClass = () => {
    if (isScrolled) {
      return 'bg-black'
    }
    
    return getHeroBackgroundColor()
  }

  return (
    <header className={`shadow-sm sticky top-0 z-50 animate-fade-in transition-all duration-300 ${getNavBackgroundClass()}`}>
      <div className="container-max">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 animate-fade-in-left">
            <span className="text-2xl font-bold text-red-500">The Opportunity League</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 animate-fade-in-up">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-lg font-semibold transition-all duration-300 relative animate-fade-in-up-delay-${Math.min(index + 1, 4)} ${
                  location.pathname === item.href
                    ? 'text-white'
                    : 'text-gray-300 hover:text-white hover:transform hover:scale-105'
                }`}
              >
                {item.name}
                {location.pathname === item.href && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-500 rounded-full animate-scale-in"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block animate-fade-in-right">
            <Link to="/get-involved#donationOptions" className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-lg hover:transform hover:scale-105 hover:shadow-lg">
              Donate
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 animate-fade-in-right"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-white transition-transform duration-300 rotate-180" />
            ) : (
              <Menu className="h-6 w-6 text-white transition-transform duration-300" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden animate-slide-in-up">
            <div className={`px-2 pt-2 pb-6 space-y-1 border-t transition-all duration-300 ${
              isScrolled ? 'bg-black border-gray-700' : 
              `${getHeroBackgroundColor()} border-gray-700`
            }`}>
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-4 py-3 font-semibold rounded-lg transition-all duration-300 text-lg animate-fade-in-up ${
                    location.pathname === item.href
                      ? 'text-white bg-opacity-20 bg-white'
                      : 'text-gray-300 hover:text-white hover:bg-opacity-20 hover:bg-white hover:transform hover:translateX-2'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <Link to="/get-involved#donation" className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 w-full text-center block text-lg hover:transform hover:scale-105">
                  Donate
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
