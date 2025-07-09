import React, { useEffect } from 'react'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'

const Contact = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
        }
      })
    }, observerOptions)

    const animatedElements = document.querySelectorAll('.fade-in-section')
    animatedElements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Community Street', 'Your City, State 12345'],
      link: '#'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['(123) 456-7890', 'Mon-Fri: 9AM-5PM'],
      link: 'tel:+1234567890'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@opportunityleague.org', 'We respond within 24 hours'],
      link: 'mailto:info@opportunityleague.org'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Friday: 9:00 AM - 5:00 PM', 'Saturday: 10:00 AM - 2:00 PM'],
      link: '#'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#121212] text-white section-padding">
        <div className="container-max text-center">
          <h1 className="section-title text-white mb-6 animate-fade-in-up">
            Contact Us
          </h1>
          <p className="section-subtitle text-gray-300 max-w-3xl mx-auto animate-fade-in-up-delay-1">
            We're here to help and answer any questions you might have. We look forward to hearing from you.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding fade-in-section">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="card p-8 text-center animate-card-hover" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-6 animate-scale-in">
                  <info.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="feature-title mb-4">
                  {info.title}
                </h3>
                <div className="space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="body-text">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="bg-gray-50 section-padding fade-in-section">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-fade-in-left">
              <h2 className="section-title text-3xl mb-8">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your first name"
                    />
                  </div>
                  <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                    placeholder="(123) 456-7890"
                  />
                </div>
                
                <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a subject</option>
                    <option value="programs">Program Information</option>
                    <option value="volunteer">Volunteer Opportunities</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="general">General Question</option>
                  </select>
                </div>
                
                <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn-primary w-full text-lg animate-fade-in-up"
                  style={{ animationDelay: '0.7s' }}
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div className="animate-fade-in-right">
              <h2 className="section-title text-3xl mb-8">
                Find Us
              </h2>
              
              {/* Map Placeholder */}
              <div className="bg-gray-300 rounded-2xl h-64 mb-8 flex items-center justify-center animate-scale-in">
                <p className="text-gray-600 text-lg">Interactive Map Coming Soon</p>
              </div>
              
              {/* Additional Information */}
              <div className="card p-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <h3 className="feature-title mb-4">
                  Visit Our Community Center
                </h3>
                <p className="body-text mb-6">
                  Our doors are always open to community members. Whether you're interested in our programs, want to volunteer, or just want to learn more about what we do, we'd love to meet you in person.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 animate-fade-in-left" style={{ animationDelay: '0.3s' }}>
                    <MapPin className="h-5 w-5 text-red-600" />
                    <span className="body-text">Free parking available on-site</span>
                  </div>
                  <div className="flex items-center space-x-3 animate-fade-in-left" style={{ animationDelay: '0.4s' }}>
                    <Clock className="h-5 w-5 text-red-600" />
                    <span className="body-text">Walk-ins welcome during office hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding fade-in-section">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">
              Frequently Asked Questions
            </h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Quick answers to common questions about our programs and services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="card p-6 animate-card-hover" style={{ animationDelay: '0.1s' }}>
                <h3 className="feature-title mb-3">
                  How do I apply for programs?
                </h3>
                <p className="body-text">
                  You can apply online through our website, call us directly, or visit our community center during office hours. Our staff will help guide you through the application process.
                </p>
              </div>
              <div className="card p-6 animate-card-hover" style={{ animationDelay: '0.3s' }}>
                <h3 className="feature-title mb-3">
                  Are your services free?
                </h3>
                <p className="body-text">
                  Yes, all of our core programs and services are provided free of charge to community members. We believe everyone deserves access to opportunities regardless of their financial situation.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="card p-6 animate-card-hover" style={{ animationDelay: '0.2s' }}>
                <h3 className="feature-title mb-3">
                  What areas do you serve?
                </h3>
                <p className="body-text">
                  We primarily serve the greater metropolitan area, but many of our programs are open to anyone who can benefit from them. Contact us to discuss your specific situation.
                </p>
              </div>
              <div className="card p-6 animate-card-hover" style={{ animationDelay: '0.4s' }}>
                <h3 className="feature-title mb-3">
                  How can I volunteer?
                </h3>
                <p className="body-text">
                  We have many volunteer opportunities available. Visit our Get Involved page to see current openings, or contact us to discuss how your skills and interests can help our community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-800 text-white section-padding fade-in-section">
        <div className="container-max text-center">
          <h2 className="section-title text-white mb-6 animate-fade-in-up">
            Ready to Connect?
          </h2>
          <p className="section-subtitle text-blue-100 mb-8 max-w-2xl mx-auto animate-fade-in-up-delay-1">
            Don't hesitate to reach out. We're here to help and would love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-2">
            <button className="btn-primary bg-red-600 hover:bg-red-700">
              Schedule a Visit
            </button>
            <button className="btn-outline">
              Call Us Now
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
