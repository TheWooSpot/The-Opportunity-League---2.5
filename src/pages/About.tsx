import React, { useEffect } from 'react'
import { Users, Target, Heart, Award, ArrowRight } from 'lucide-react'

const About = () => {
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

  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We approach every interaction with empathy, understanding that each person has unique circumstances and needs.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for the highest standards in all our programs and services, continuously improving to better serve our community.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We believe in the power of collective action and work to build strong, supportive networks that uplift everyone.'
    },
    {
      icon: Award,
      title: 'Integrity',
      description: 'We operate with transparency, accountability, and honesty in all our relationships and activities.'
    }
  ]

  const teamMembers = [
    {
      name: 'Dr. Sarah Mitchell',
      role: 'Executive Director',
      bio: 'With over 15 years in community development, Dr. Mitchell leads our organization with passion and strategic vision.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Marcus Johnson',
      role: 'Program Director',
      bio: 'Marcus oversees all program operations and has helped thousands of individuals achieve their career goals.',
      image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Lisa Rodriguez',
      role: 'Community Outreach Manager',
      bio: 'Lisa builds partnerships and ensures our programs reach those who need them most in our community.',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ]

  const milestones = [
    { year: '2015', event: 'The Opportunity League founded' },
    { year: '2017', event: 'First career training program launched' },
    { year: '2019', event: 'Youth development program established' },
    { year: '2021', event: 'Reached 5,000 community members served' },
    { year: '2023', event: 'Expanded to serve 10,000+ individuals' },
    { year: '2024', event: 'Launched comprehensive community center' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#121212] text-white section-padding">
        <div className="container-max text-center">
          <h1 className="section-title text-white mb-6 animate-fade-in-up">
            About The Opportunity League
          </h1>
          <p className="section-subtitle text-gray-300 max-w-3xl mx-auto animate-fade-in-up-delay-1">
            Dedicated to creating pathways to success and building stronger communities through comprehensive programs and unwavering support.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding fade-in-section">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our mission in action"
                className="rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="space-y-8 animate-fade-in-right">
              <div>
                <h2 className="section-title text-3xl mb-4">
                  Our Mission
                </h2>
                <p className="body-large">
                  To empower individuals and families in our community by providing comprehensive programs, resources, and support that create sustainable pathways to economic stability, personal growth, and community engagement.
                </p>
              </div>
              <div>
                <h2 className="section-title text-3xl mb-4">
                  Our Vision
                </h2>
                <p className="body-large">
                  A thriving community where every individual has access to opportunities that enable them to reach their full potential and contribute meaningfully to society.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 section-padding fade-in-section">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">
              Our Core Values
            </h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              These principles guide everything we do and shape how we serve our community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card p-8 text-center animate-card-hover" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-6 animate-scale-in">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="feature-title mb-4">
                  {value.title}
                </h3>
                <p className="body-text">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding fade-in-section">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in-left">
              <h2 className="section-title">
                Our Story
              </h2>
              <p className="body-large">
                The Opportunity League was born from a simple belief: that everyone deserves access to opportunities that can transform their lives. Founded in 2015 by a group of community leaders who saw the need for comprehensive support services, we started with a single program and a big vision.
              </p>
              <p className="body-large">
                Today, we've grown into a comprehensive organization serving thousands of community members annually. Our programs have evolved to meet changing needs, but our core mission remains the same: creating pathways to success for individuals and families in our community.
              </p>
              <p className="body-large">
                Through partnerships with local businesses, educational institutions, and community organizations, we've built a network of support that extends far beyond our walls. Every success story motivates us to reach even more people and create even greater impact.
              </p>
            </div>
            <div className="animate-fade-in-right">
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Community gathering"
                className="rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-gray-50 section-padding fade-in-section">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">
              Our Journey
            </h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Key milestones in our organization's growth and impact in the community.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-red-600 rounded-full"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                } animate-fade-in-up`} style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="card p-6 animate-card-hover">
                      <div className="text-2xl font-bold text-red-600 mb-2">{milestone.year}</div>
                      <p className="body-text text-lg">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-red-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding fade-in-section">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">
              Meet Our Team
            </h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Dedicated professionals committed to making a difference in our community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="card p-8 text-center animate-card-hover" style={{ animationDelay: `${index * 0.2}s` }}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-6 transition-transform duration-300 hover:scale-110"
                />
                <h3 className="feature-title mb-2">
                  {member.name}
                </h3>
                <p className="text-red-600 font-semibold mb-4">{member.role}</p>
                <p className="body-text">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-800 text-white section-padding fade-in-section">
        <div className="container-max text-center">
          <h2 className="section-title text-white mb-6 animate-fade-in-up">
            Join Our Mission
          </h2>
          <p className="section-subtitle text-blue-100 mb-8 max-w-2xl mx-auto animate-fade-in-up-delay-1">
            Whether you're looking for opportunities or want to help others, there's a place for you in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-2">
            <button className="btn-primary bg-red-600 hover:bg-red-700">
              Get Involved
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

export default About
