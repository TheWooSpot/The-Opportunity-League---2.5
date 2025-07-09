import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'Events', href: '/events' },
    { name: 'Get Involved', href: '/get-involved' },
    { name: 'Contact', href: '/contact' },
  ]

  const programs = [
    { name: 'Career Training', href: '/programs' },
    { name: 'Youth Development', href: '/programs' },
    { name: 'Community Outreach', href: '/programs' },
    { name: 'Leadership Development', href: '/programs' },
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-blue-900 text-white">
      <div className="container-max py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="space-y-6 animate-fade-in-up">
            <Link to="/" className="text-2xl font-bold text-red-400 hover:text-red-300 transition-colors duration-300">
              The Opportunity League
            </Link>
            <p className="text-blue-200 leading-relaxed">
              Empowering communities through education, career development, and comprehensive support services that create lasting positive change.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-all duration-300 hover:transform hover:scale-110 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6 animate-fade-in-up animate-fade-in-up-delay-1">
            <h3 className="text-xl font-bold text-red-400">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-blue-200 hover:text-white transition-all duration-300 hover:transform hover:translateX-2 inline-block animate-fade-in-left"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-6 animate-fade-in-up animate-fade-in-up-delay-2">
            <h3 className="text-xl font-bold text-red-400">Our Programs</h3>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={program.name}>
                  <Link
                    to={program.href}
                    className="text-blue-200 hover:text-white transition-all duration-300 hover:transform hover:translateX-2 inline-block animate-fade-in-left"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in-up animate-fade-in-up-delay-3">
            <h3 className="text-xl font-bold text-red-400">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 animate-fade-in-right">
                <MapPin className="h-5 w-5 text-red-400 mt-1 flex-shrink-0" />
                <span className="text-blue-200">
                  123 Community Street<br />
                  Your City, State 12345
                </span>
              </div>
              <div className="flex items-center space-x-3 animate-fade-in-right" style={{ animationDelay: '0.1s' }}>
                <Phone className="h-5 w-5 text-red-400 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-blue-200 hover:text-white transition-colors duration-300">
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-center space-x-3 animate-fade-in-right" style={{ animationDelay: '0.2s' }}>
                <Mail className="h-5 w-5 text-red-400 flex-shrink-0" />
                <a href="mailto:info@opportunityleague.org" className="text-blue-200 hover:text-white transition-colors duration-300">
                  info@opportunityleague.org
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-800">
        <div className="container-max py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-blue-200 text-sm animate-fade-in-up">
              © 2024 The Opportunity League. All rights reserved.
            </p>
            <div className="flex space-x-6 animate-fade-in-up animate-fade-in-up-delay-1">
              <Link to="#" className="text-blue-200 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="#" className="text-blue-200 hover:text-white text-sm transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
