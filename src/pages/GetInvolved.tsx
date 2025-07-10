import React, { useEffect } from 'react'
import { Heart, Users, Calendar, DollarSign, ArrowRight, CheckCircle, Star, Clock, MapPin } from 'lucide-react'

const GetInvolved = () => {
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

  const volunteerOpportunities = [
    {
      id: 1,
      title: 'Youth Mentor',
      description: 'Guide and support young people in their personal and academic development through one-on-one mentoring.',
      timeCommitment: '2-3 hours per week',
      location: 'Youth Center',
      requirements: ['Background check required', 'Minimum 6-month commitment', 'Training provided'],
      featured: true,
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      title: 'Career Workshop Facilitator',
      description: 'Share your professional expertise by leading workshops and training sessions for job seekers.',
      timeCommitment: '4-6 hours per month',
      location: 'Training Center',
      requirements: ['Professional experience', 'Public speaking comfort', 'Flexible schedule'],
      featured: false,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      title: 'Event Coordinator',
      description: 'Help plan and execute community events, fundraisers, and special programs throughout the year.',
      timeCommitment: '5-10 hours per month',
      location: 'Various locations',
      requirements: ['Organizational skills', 'Event planning experience preferred', 'Team player'],
      featured: false,
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 4,
      title: 'Tutor & Academic Support',
      description: 'Provide educational support to students of all ages in various subjects and skill areas.',
      timeCommitment: '2-4 hours per week',
      location: 'Learning Center',
      requirements: ['Strong academic background', 'Patience and empathy', 'Regular availability'],
      featured: true,
      image: 'https://images.pexels.com/photos/8471781/pexels-photo-8471781.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 5,
      title: 'Community Outreach Ambassador',
      description: 'Connect with community members, promote our programs, and help identify those who could benefit from our services.',
      timeCommitment: '3-5 hours per week',
      location: 'Community locations',
      requirements: ['Excellent communication skills', 'Bilingual preferred', 'Community connections'],
      featured: false,
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 6,
      title: 'Administrative Support',
      description: 'Assist with office tasks, data entry, phone support, and general administrative duties.',
      timeCommitment: '4-8 hours per week',
      location: 'Main Office',
      requirements: ['Computer skills', 'Attention to detail', 'Professional demeanor'],
      featured: false,
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ]

  const donationOptions = [
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

  const partnershipLevels = [
    {
      level: 'Community Partner',
      amount: '$1,000 - $4,999',
      benefits: [
        'Recognition on our website',
        'Quarterly impact reports',
        'Invitation to annual appreciation event',
        'Social media recognition'
      ]
    },
    {
      level: 'Program Sponsor',
      amount: '$5,000 - $14,999',
      benefits: [
        'All Community Partner benefits',
        'Logo placement on program materials',
        'Opportunity to speak at events',
        'Custom volunteer opportunities for employees'
      ]
    },
    {
      level: 'Champion Sponsor',
      amount: '$15,000+',
      benefits: [
        'All Program Sponsor benefits',
        'Naming rights opportunities',
        'Board meeting presentations',
        'Exclusive networking events',
        'Custom partnership development'
      ]
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#121212] text-white section-padding">
        <div className="container-max text-center">
          <h1 className="section-title text-white mb-6 animate-fade-in-up">
            Get Involved
          </h1>
          <p className="section-subtitle text-gray-300 max-w-3xl mx-auto animate-fade-in-up-delay-1">
            Join our mission to create opportunities and transform lives. Whether through volunteering, donating, or partnering with us, your involvement makes a real difference.
          </p>
        </div>
      </section>

      {/* Ways to Help */}
      <section className="section-padding fade-in-section">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">
              Ways to Make a Difference
            </h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Choose how you'd like to contribute to our community's success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: 'Volunteer',
                description: 'Share your time and skills to directly impact lives in our community.',
                action: 'Find Opportunities'
              },
              {
                icon: DollarSign,
                title: 'Donate',
                description: 'Financial contributions help us expand programs and reach more people.',
                action: 'Make a Donation'
              },
              {
                icon: Users,
                title: 'Partner',
                description: 'Corporate partnerships create sustainable support for our mission.',
                action: 'Explore Partnerships'
              },
              {
                icon: Calendar,
                title: 'Attend Events',
                description: 'Join our community events and help spread awareness of our work.',
                action: 'View Events'
              }
            ].map((way, index) => (
              <div key={index} className="card p-8 text-center group animate-card-hover" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                  <way.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="feature-title mb-4">
                  {way.title}
                </h3>
                <p className="body-text mb-6">
                  {way.description}
                </p>
                <button className="btn-primary text-sm">
                  {way.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="bg-gray-50 section-padding fade-in-section">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">
              Volunteer Opportunities
            </h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Find the perfect way to share your talents and make a meaningful impact in our community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {volunteerOpportunities.map((opportunity, index) => (
              <div key={opportunity.id} className="card overflow-hidden group animate-card-hover" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative">
                  <img
                    src={opportunity.image}
                    alt={opportunity.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {opportunity.featured && (
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      High Need
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="feature-title mb-3">
                    {opportunity.title}
                  </h3>
                  <p className="body-text mb-4">
                    {opportunity.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2 text-blue-600" />
                      <span>{opportunity.timeCommitment}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                      <span>{opportunity.location}</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {opportunity.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="btn-primary w-full text-sm inline-flex items-center justify-center">
                    Apply Now
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donation" className="section-padding fade-in-section">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">
              Make a Donation
            </h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Your financial support directly funds programs that transform lives and strengthen our community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {donationOptions.map((option, index) => (
              <div key={index} className={`card p-6 text-center cursor-pointer transition-all duration-300 animate-card-hover ${
                option.popular ? 'ring-2 ring-red-600 transform scale-105' : ''
              }`} style={{ animationDelay: `${index * 0.1}s` }}>
                {option.popular && (
                  <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                    Most Popular
                  </div>
                )}
                <div className="text-3xl font-bold text-blue-800 mb-2">{option.amount}</div>
                <p className="body-text">{option.impact}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button className="btn-primary text-lg px-8 py-4 mr-4">
              Donate Now
            </button>
            <button className="btn-outline text-lg px-8 py-4">
              Set Up Monthly Giving
            </button>
          </div>
        </div>
      </section>

      {/* Corporate Partnerships */}
      <section className="bg-gray-50 section-padding fade-in-section">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">
              Corporate Partnerships
            </h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Partner with us to create lasting impact while achieving your corporate social responsibility goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnershipLevels.map((level, index) => (
              <div key={index} className="card p-8 animate-card-hover" style={{ animationDelay: `${index * 0.2}s` }}>
                <h3 className="feature-title mb-2">
                  {level.level}
                </h3>
                <p className="text-2xl font-bold text-red-600 mb-6">{level.amount}</p>
                <ul className="space-y-3">
                  {level.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="body-text">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="btn-primary text-lg px-8 py-4">
              Explore Partnership Opportunities
            </button>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="section-padding fade-in-section">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">
              Your Impact in Action
            </h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              See how community support creates real change in people's lives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Community impact"
                className="rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="space-y-8 animate-fade-in-right">
              <div className="card p-6">
                <h3 className="feature-title mb-3">
                  "Volunteering Changed My Perspective"
                </h3>
                <p className="body-text mb-4">
                  "I started as a tutor and discovered how much I learned from the students. It's been incredibly rewarding to see their confidence grow."
                </p>
                <p className="text-sm text-gray-600">- Sarah M., Volunteer Tutor</p>
              </div>
              <div className="card p-6">
                <h3 className="feature-title mb-3">
                  "Partnership That Makes Sense"
                </h3>
                <p className="body-text mb-4">
                  "Our company's partnership with The Opportunity League has strengthened our team while making a real difference in our community."
                </p>
                <p className="text-sm text-gray-600">- David L., Corporate Partner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-800 text-white section-padding fade-in-section">
        <div className="container-max text-center">
          <h2 className="section-title text-white mb-6 animate-fade-in-up">
            Ready to Get Started?
          </h2>
          <p className="section-subtitle text-blue-100 mb-8 max-w-2xl mx-auto animate-fade-in-up-delay-1">
            Take the first step in making a difference. Every contribution, no matter the size, creates positive change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-2">
            <button className="btn-primary bg-red-600 hover:bg-red-700">
              Start Volunteering
            </button>
            <button className="btn-outline">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default GetInvolved
