import React, { useEffect } from 'react'
import { Heart, DollarSign, Users, CheckCircle, ArrowRight, Star, CreditCard, Shield, Award } from 'lucide-react'

const Donate = () => {
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

  const donationAmounts = [
    {
      amount: '$25',
      impact: 'Provides school supplies for one student',
      popular: false
    },
    {
      amount: '$50',
      impact: 'Funds a week of after-school tutoring',
      popular: false
    },
    {
      amount: '$100',
      impact: 'Supports a family through our emergency assistance program',
      popular: true
    },
    {
      amount: '$250',
      impact: 'Sponsors a youth for our leadership development program',
      popular: false
    },
    {
      amount: '$500',
      impact: 'Funds career training materials for 10 participants',
      popular: false
    },
    {
      amount: 'Custom',
      impact: 'Choose an amount that works for you',
      popular: false
    }
  ]

  const impactStories = [
    {
      name: 'Maria Santos',
      story: 'Thanks to donor support, Maria completed our career training program and now works as a certified medical assistant.',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300',
      program: 'Career Training'
    },
    {
      name: 'James Wilson',
      story: 'Your donations helped James access tutoring that improved his grades and earned him a college scholarship.',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300',
      program: 'Youth Education'
    },
    {
      name: 'The Rodriguez Family',
      story: 'Emergency assistance funded by donations helped this family avoid eviction and get back on their feet.',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=300',
      program: 'Family Support'
    }
  ]

  const donationMethods = [
    {
      icon: CreditCard,
      title: 'Online Donation',
      description: 'Secure, fast, and convenient. Make a one-time or recurring donation.',
      features: ['Instant confirmation', 'Tax receipt provided', 'Multiple payment options']
    },
    {
      icon: Shield,
      title: 'Monthly Giving',
      description: 'Join our sustaining donor program for ongoing impact.',
      features: ['Predictable support', 'Lower processing fees', 'Cancel anytime']
    },
    {
      icon: Award,
      title: 'Legacy Giving',
      description: 'Include The Opportunity League in your estate planning.',
      features: ['Tax benefits', 'Lasting impact', 'Professional guidance']
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#121212] text-white section-padding">
        <div className="container-max text-center">
          <h1 className="section-title text-white mb-6 animate-fade-in-up">
            Make a Donation
          </h1>
          <p className="section-subtitle text-gray-300 max-w-3xl mx-auto animate-fade-in-up-delay-1">
            Your generosity creates opportunities, transforms lives, and builds stronger communities. Every donation makes a meaningful difference.
          </p>
        </div>
      </section>

      {/* Donation Amounts */}
      <section className="section-padding fade-in-section">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">
              Choose Your Impact
            </h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Select an amount that works for you and see the direct impact your donation will have.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {donationAmounts.map((option, index) => (
              <div key={index} className={`card p-8 text-center cursor-pointer transition-all duration-300 animate-card-hover ${
                option.popular ? 'ring-2 ring-red-600 transform scale-105' : ''
              }`} style={{ animationDelay: `${index * 0.1}s` }}>
                {option.popular && (
                  <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                    Most Popular
                  </div>
                )}
                <div className="text-4xl font-bold text-blue-800 mb-4">{option.amount}</div>
                <p className="body-text text-lg">{option.impact}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button className="btn-primary text-xl px-12 py-4 mr-6 mb-4">
              <Heart className="mr-2 h-6 w-6" />
              Donate Now
            </button>
            <button className="btn-outline text-xl px-12 py-4 mb-4">
              Set Up Monthly Giving
            </button>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="bg-gray-50 section-padding fade-in-section">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">
              Your Donations at Work
            </h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              See how your contributions create real change in people's lives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactStories.map((story, index) => (
              <div key={index} className="card p-8 animate-card-hover" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-20 h-20 rounded-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div>
                    <h3 className="feature-title text-lg">{story.name}</h3>
                    <p className="text-red-600 font-medium">{story.program}</p>
                  </div>
                </div>
                <p className="body-text text-lg leading-relaxed">
                  {story.story}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Methods */}
      <section className="section-padding fade-in-section">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">
              Ways to Give
            </h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Choose the donation method that works best for you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {donationMethods.map((method, index) => (
              <div key={index} className="card p-8 text-center animate-card-hover" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-6 animate-scale-in">
                  <method.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="feature-title mb-4">
                  {method.title}
                </h3>
                <p className="body-text mb-6">
                  {method.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {method.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-red-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="btn-primary text-sm">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tax Information */}
      <section className="bg-blue-50 section-padding fade-in-section">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              <h2 className="section-title text-3xl mb-6">
                Tax-Deductible Giving
              </h2>
              <p className="body-large mb-6">
                The Opportunity League is a 501(c)(3) nonprofit organization. Your donations are tax-deductible to the full extent allowed by law.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Immediate Tax Receipt</h4>
                    <p className="text-gray-600">Receive your tax receipt via email immediately after donation.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Annual Summary</h4>
                    <p className="text-gray-600">Year-end giving summary provided for tax preparation.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">EIN: 12-3456789</h4>
                    <p className="text-gray-600">Our federal tax identification number for your records.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-fade-in-right">
              <div className="card p-8 bg-white">
                <h3 className="feature-title mb-6 text-center">
                  Donation Impact Calculator
                </h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-800 mb-1">$100</div>
                    <div className="text-sm text-gray-600">Your donation</div>
                  </div>
                  <div className="text-center text-gray-500">equals</div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <div className="text-lg font-semibold text-red-600 mb-1">1 Family Supported</div>
                    <div className="text-sm text-gray-600">Through emergency assistance</div>
                  </div>
                  <button className="btn-primary w-full">
                    Donate $100 Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Giving */}
      <section className="section-padding fade-in-section">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">
              Corporate Giving
            </h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Partner with us to create meaningful impact while achieving your corporate social responsibility goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { level: 'Bronze Partner', amount: '$1,000+', color: 'bg-amber-100 text-amber-800' },
              { level: 'Silver Partner', amount: '$5,000+', color: 'bg-gray-100 text-gray-800' },
              { level: 'Gold Partner', amount: '$10,000+', color: 'bg-yellow-100 text-yellow-800' },
              { level: 'Platinum Partner', amount: '$25,000+', color: 'bg-purple-100 text-purple-800' }
            ].map((tier, index) => (
              <div key={index} className="card p-6 text-center animate-card-hover" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${tier.color}`}>
                  {tier.level}
                </div>
                <div className="text-2xl font-bold text-blue-800 mb-4">{tier.amount}</div>
                <button className="btn-outline text-sm w-full">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-800 text-white section-padding fade-in-section">
        <div className="container-max text-center">
          <h2 className="section-title text-white mb-6 animate-fade-in-up">
            Ready to Make a Difference?
          </h2>
          <p className="section-subtitle text-blue-100 mb-8 max-w-2xl mx-auto animate-fade-in-up-delay-1">
            Your donation today will create opportunities and transform lives in our community. Join us in building a brighter future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-2">
            <button className="btn-primary bg-red-600 hover:bg-red-700 text-xl px-12 py-4">
              <Heart className="mr-2 h-6 w-6" />
              Donate Now
            </button>
            <button className="btn-outline text-xl px-12 py-4">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Donate
