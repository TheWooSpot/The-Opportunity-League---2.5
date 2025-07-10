import React, { useEffect } from 'react'
import { Calendar, Clock, MapPin, Users, ArrowRight, Star, Filter } from 'lucide-react'

const Events = () => {
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

  const upcomingEvents = [
    {
      id: 1,
      title: 'Annual Community Gala',
      description: 'Join us for an evening of celebration, recognition, and fundraising to support our community programs.',
      date: '2024-03-15',
      time: '6:00 PM - 10:00 PM',
      location: 'Grand Ballroom, Downtown Convention Center',
      category: 'Fundraising',
      attendees: '300+ expected',
      featured: true,
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      title: 'Youth Leadership Summit',
      description: 'A day-long conference for young leaders featuring workshops, networking, and inspirational speakers.',
      date: '2024-03-22',
      time: '9:00 AM - 4:00 PM',
      location: 'Community Center Main Hall',
      category: 'Youth Development',
      attendees: '150+ youth leaders',
      featured: false,
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      title: 'Career Fair & Job Expo',
      description: 'Connect with local employers, explore career opportunities, and access on-site interviews.',
      date: '2024-04-05',
      time: '10:00 AM - 3:00 PM',
      location: 'Sports Complex Exhibition Hall',
      category: 'Career Development',
      attendees: '500+ job seekers',
      featured: true,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 4,
      title: 'Family Fun Day',
      description: 'A community celebration with activities for all ages, food trucks, live music, and program showcases.',
      date: '2024-04-20',
      time: '11:00 AM - 5:00 PM',
      location: 'Central Park Pavilion',
      category: 'Community',
      attendees: '1000+ families',
      featured: false,
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 5,
      title: 'Professional Development Workshop',
      description: 'Advanced training session focusing on leadership skills and career advancement strategies.',
      date: '2024-05-10',
      time: '6:00 PM - 8:30 PM',
      location: 'Business Development Center',
      category: 'Professional Development',
      attendees: '75+ professionals',
      featured: false,
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 6,
      title: 'Arts & Culture Showcase',
      description: 'Celebrating creativity in our community with art exhibitions, performances, and cultural presentations.',
      date: '2024-05-25',
      time: '2:00 PM - 8:00 PM',
      location: 'Arts Center Gallery',
      category: 'Arts & Culture',
      attendees: '200+ art enthusiasts',
      featured: false,
      image: 'https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ]

  const pastEvents = [
    {
      id: 7,
      title: 'Winter Holiday Celebration',
      description: 'Community gathering with holiday activities, gift distribution, and seasonal festivities.',
      date: '2023-12-15',
      location: 'Community Center',
      attendees: '800+ community members',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 8,
      title: 'Back-to-School Resource Fair',
      description: 'Annual event providing school supplies, health screenings, and educational resources for families.',
      date: '2023-08-12',
      location: 'School District Gymnasium',
      attendees: '600+ students and families',
      image: 'https://images.pexels.com/photos/8471781/pexels-photo-8471781.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 9,
      title: 'Community Health & Wellness Expo',
      description: 'Health screenings, wellness workshops, and resources for healthy living in our community.',
      date: '2023-06-18',
      location: 'Recreation Center',
      attendees: '400+ participants',
      image: 'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ]

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#121212] text-white section-padding">
        <div className="container-max text-center">
          <h1 className="section-title text-white mb-6 animate-fade-in-up">
            Community Events
          </h1>
          <p className="section-subtitle text-gray-300 max-w-3xl mx-auto animate-fade-in-up-delay-1">
            Join us for inspiring events that bring our community together, celebrate achievements, and create opportunities for growth and connection.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding fade-in-section">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">
              Upcoming Events
            </h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Don't miss these exciting opportunities to connect, learn, and grow with our community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={event.id} className="card overflow-hidden group animate-card-hover" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {event.featured && (
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Featured
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-blue-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {event.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="feature-title mb-3">
                    {event.title}
                  </h3>
                  <p className="body-text mb-4">
                    {event.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2 text-blue-600" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2 text-blue-600" />
                      <span>{event.attendees}</span>
                    </div>
                  </div>
                  
                  <button className="btn-primary w-full text-sm inline-flex items-center justify-center">
                    Register Now
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="bg-gray-50 section-padding fade-in-section">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">
              Past Events
            </h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Look back at some of our recent successful community events and celebrations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <div key={event.id} className="card overflow-hidden group animate-card-hover" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="feature-title mb-3">
                    {event.title}
                  </h3>
                  <p className="body-text mb-4">
                    {event.description}
                  </p>
                  
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2 text-blue-600" />
                      <span>{event.attendees}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="section-padding fade-in-section">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">
              Event Categories
            </h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              We host a variety of events throughout the year to serve different interests and needs in our community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Fundraising', icon: '💰', description: 'Support our mission through special fundraising events' },
              { name: 'Youth Development', icon: '🌟', description: 'Programs and events focused on empowering young people' },
              { name: 'Career Development', icon: '💼', description: 'Professional growth and job placement opportunities' },
              { name: 'Community', icon: '🤝', description: 'Celebrations and gatherings that bring us together' },
              { name: 'Arts & Culture', icon: '🎨', description: 'Showcasing creativity and cultural diversity' },
              { name: 'Health & Wellness', icon: '🏃', description: 'Promoting physical and mental well-being' },
              { name: 'Education', icon: '📚', description: 'Learning opportunities for all ages' },
              { name: 'Sports & Recreation', icon: '⚽', description: 'Athletic events and recreational activities' }
            ].map((category, index) => (
              <div key={index} className="card p-6 text-center animate-card-hover" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="feature-title mb-3">
                  {category.name}
                </h3>
                <p className="body-text text-sm">
                  {category.description}
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
            Stay Connected
          </h2>
          <p className="section-subtitle text-blue-100 mb-8 max-w-2xl mx-auto animate-fade-in-up-delay-1">
            Don't miss out on upcoming events and opportunities. Subscribe to our newsletter or follow us on social media.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-2">
            <button className="btn-primary bg-red-600 hover:bg-red-700">
              Subscribe to Newsletter
            </button>
            <button className="btn-outline">
              View Event Calendar
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Events
