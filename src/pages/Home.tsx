import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Users, Target, Heart, Award, CheckCircle, Star, Play } from 'lucide-react'

const Home = () => {
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

  const stats = [
    { number: '10,000+', label: 'Lives Impacted' },
    { number: '50+', label: 'Community Partners' },
    { number: '25+', label: 'Programs Launched' },
    { number: '95%', label: 'Success Rate' },
  ]

  const features = [
    {
      icon: Users,
      title: 'Community Focus',
      description: 'Building stronger communities through collaborative programs and local partnerships that create lasting impact.'
    },
    {
      icon: Target,
      title: 'Targeted Impact',
      description: 'Strategic initiatives designed to address specific community needs and challenges with measurable outcomes.'
    },
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'Every program is built with empathy and understanding of individual circumstances and unique needs.'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Track record of successful outcomes and measurable community improvements across all our programs.'
    },
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Program Graduate',
      content: 'The Opportunity League changed my life completely. Their career training program gave me the skills and confidence I needed to secure a great job and build a better future.',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Michael Chen',
      role: 'Community Partner',
      content: 'Working with The Opportunity League has been incredible. Their dedication to community impact and professional approach is truly unmatched in our area.',
      rating: 5,
      image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Maria Rodriguez',
      role: 'Parent',
      content: 'My daughter participated in their youth development program. The positive changes in her confidence, leadership skills, and academic performance are remarkable.',
      rating: 5,
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative flex items-center justify-start overflow-hidden bg-gray-50" style={{ minHeight: 'calc(100vh - 80px)', paddingTop: '2rem', paddingBottom: '2rem' }}>
        {/* Background with Gradient Overlay */}
        <div className="absolute inset-0 bg-gray-50"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/50 to-black/60"></div>
        
        {/* Content */}
        <div className="relative z-10 container-max">
          <div className="max-w-4xl space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-white animate-fade-in-up" style={{ fontSize: 'calc(3.5rem * 0.92)', lineHeight: 'calc(1 * 0.92)' }}>
              Empowering Youth to
              <span className="block text-red-400 font-black animate-fade-in-up-delay-1">
                Reach Their Full
              </span>
              <span className="block text-red-400 font-black animate-fade-in-up-delay-2">
                Potential
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white max-w-3xl leading-relaxed font-normal animate-fade-in-up-delay-3" style={{ fontSize: 'calc(1.125rem * 0.95)' }}>
              Through education, sports, leadership development, and community advocacy, we're creating opportunities for youth to thrive in school, career, and life.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 pt-4 animate-fade-in-up-delay-4">
              <Link to="/programs" className="bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-lg hover:transform hover:scale-105 hover:shadow-lg">
                Explore Our Programs
              </Link>
              <Link to="/get-involved" className="border-2 border-red-600 text-red-400 hover:bg-red-600 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-lg hover:transform hover:scale-105">
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white fade-in-section">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group animate-card-hover">
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-lg text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50 fade-in-section">
        <div className="container-max">
          <div className="text-center mb-20">
            <h2 className="section-title mb-6">
              Why Choose The Opportunity League?
            </h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              We're committed to creating meaningful change through strategic programs and community partnerships that deliver real results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card p-8 text-center group animate-card-hover" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-20 h-20 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="feature-title mb-4">
                  {feature.title}
                </h3>
                <p className="body-text">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-padding bg-white fade-in-section">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative animate-fade-in-left">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 gradient-bg rounded-2xl flex items-center justify-center shadow-xl animate-scale-in hover:scale-110 transition-transform duration-300">
                <Play className="h-8 w-8 text-white ml-1" />
              </div>
            </div>
            <div className="space-y-8 animate-fade-in-right">
              <h2 className="section-title leading-tight">
                Building Stronger Communities Together
              </h2>
              <p className="body-large">
                Since our founding, The Opportunity League has been dedicated to creating pathways to success for individuals and families in our community. Through innovative programs and strategic partnerships, we address the root causes of inequality and provide sustainable solutions.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                  <div className="w-6 h-6 gradient-bg rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-lg text-gray-700">Comprehensive career training and development programs</span>
                </li>
                <li className="flex items-start space-x-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  <div className="w-6 h-6 gradient-bg rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-lg text-gray-700">Youth mentorship and leadership development</span>
                </li>
                <li className="flex items-start space-x-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                  <div className="w-6 h-6 gradient-bg rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-lg text-gray-700">Community outreach and comprehensive support services</span>
                </li>
              </ul>
              <Link to="/about" className="btn-primary inline-flex items-center text-lg animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50 fade-in-section">
        <div className="container-max">
          <div className="text-center mb-20">
            <h2 className="section-title mb-6">
              What Our Community Says
            </h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Real stories from real people whose lives have been transformed through our programs and community initiatives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card p-8 relative animate-card-hover" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current animate-scale-in" style={{ animationDelay: `${i * 0.1}s` }} />
                  ))}
                </div>
                <p className="body-text mb-8 text-lg">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div>
                    <p className="font-bold text-blue-800 text-lg">{testimonial.name}</p>
                    <p className="text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative section-padding overflow-hidden fade-in-section">
        <div className="absolute inset-0 gradient-bg"></div>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 container-max text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-gray-100 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delay-1">
            Join thousands of community members who are creating positive change. Whether you're looking for opportunities or want to help others, we're here to support your journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up-delay-2">
            <Link to="/programs" className="btn-primary bg-white text-blue-800 hover:bg-gray-100 text-lg px-10 py-4">
              View Programs
            </Link>
            <Link to="/get-involved" className="btn-outline text-lg px-10 py-4">
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
