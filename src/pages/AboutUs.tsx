import React from 'react'

const AboutUs = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="bg-[#121212] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">About The Opportunity League</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up">
            Empowering youth through comprehensive programs, mentorship, and community support to unlock their full potential and create lasting positive change.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-blue-800 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                The Opportunity League is dedicated to providing comprehensive support and resources to underserved youth, helping them overcome barriers and achieve their educational, personal, and professional goals.
              </p>
              <p className="text-lg text-gray-700">
                Through innovative programs, mentorship opportunities, and community partnerships, we create pathways to success that transform lives and strengthen communities.
              </p>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Youth empowerment" 
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-scale-in md:order-1">
              <img 
                src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Community impact" 
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
            </div>
            <div className="animate-fade-in md:order-2">
              <h2 className="text-3xl font-bold text-blue-800 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-700 mb-6">
                We envision a world where every young person has access to the opportunities, resources, and support they need to thrive and contribute meaningfully to their communities.
              </p>
              <p className="text-lg text-gray-700">
                By breaking down systemic barriers and creating inclusive environments, we aim to build a future where potential is recognized, nurtured, and celebrated regardless of background or circumstances.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 text-center mb-12 animate-fade-in">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-slide-up">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Excellence</h3>
              <p className="text-gray-600">We strive for the highest standards in all our programs and services, ensuring quality outcomes for every participant.</p>
            </div>
            <div className="text-center animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Community</h3>
              <p className="text-gray-600">We believe in the power of community and work collaboratively to create supportive networks for youth success.</p>
            </div>
            <div className="text-center animate-slide-up" style={{animationDelay: '0.4s'}}>
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Empowerment</h3>
              <p className="text-gray-600">We empower young people with the tools, skills, and confidence they need to overcome challenges and achieve their goals.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 text-center mb-12 animate-fade-in">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-scale-in">
              <div className="text-4xl font-bold text-red-600 mb-2">2,500+</div>
              <p className="text-gray-600">Youth Served</p>
            </div>
            <div className="animate-scale-in" style={{animationDelay: '0.1s'}}>
              <div className="text-4xl font-bold text-red-600 mb-2">85%</div>
              <p className="text-gray-600">Program Completion Rate</p>
            </div>
            <div className="animate-scale-in" style={{animationDelay: '0.2s'}}>
              <div className="text-4xl font-bold text-red-600 mb-2">150+</div>
              <p className="text-gray-600">Community Partners</p>
            </div>
            <div className="animate-scale-in" style={{animationDelay: '0.3s'}}>
              <div className="text-4xl font-bold text-red-600 mb-2">95%</div>
              <p className="text-gray-600">Success Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Meet Our Team Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 text-center mb-12 animate-fade-in">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Marcus Johnson - Executive Director */}
            <div className="text-center animate-slide-up">
              <img 
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Marcus Johnson" 
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover shadow-lg"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Marcus Johnson</h3>
              <p className="text-red-600 font-medium mb-3">Executive Director</p>
              <p className="text-gray-600 text-sm">
                Marcus brings over 15 years of executive leadership experience in youth development and nonprofit management. As Executive Director, he oversees strategic planning, organizational growth, and ensures our mission reaches every community we serve. His visionary leadership has expanded our impact to serve over 2,500 youth annually.
              </p>
            </div>

            {/* Sarah Mitchell - Program Director */}
            <div className="text-center animate-slide-up" style={{animationDelay: '0.1s'}}>
              <img 
                src="https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Sarah Mitchell" 
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover shadow-lg"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Sarah Mitchell</h3>
              <p className="text-red-600 font-medium mb-3">Program Director</p>
              <p className="text-gray-600 text-sm">
                Sarah leads our comprehensive program development and implementation across all 36 programs. With her expertise in youth development and program management, she ensures each initiative delivers measurable outcomes and creates lasting impact. Her innovative approach has achieved an 85% program completion rate and 95% success rate.
              </p>
            </div>

            {/* Michael Chen - Community Outreach Coordinator */}
            <div className="text-center animate-slide-up" style={{animationDelay: '0.2s'}}>
              <img 
                src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Michael Chen" 
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover shadow-lg"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Michael Chen</h3>
              <p className="text-red-600 font-medium mb-3">Community Outreach Coordinator</p>
              <p className="text-gray-600 text-sm">
                Michael builds and maintains relationships with our 150+ community partners, ensuring we can provide comprehensive support to youth across all neighborhoods. His dedication to community engagement has created a robust network of resources and opportunities.
              </p>
            </div>

            {/* Lisa Rodriguez - Youth Mentor Coordinator */}
            <div className="text-center animate-slide-up" style={{animationDelay: '0.3s'}}>
              <img 
                src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Lisa Rodriguez" 
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover shadow-lg"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Lisa Rodriguez</h3>
              <p className="text-red-600 font-medium mb-3">Youth Mentor Coordinator</p>
              <p className="text-gray-600 text-sm">
                Lisa oversees our mentorship programs, matching youth with caring adults who provide guidance, support, and encouragement. Her compassionate approach has created meaningful connections that transform lives and build lasting relationships.
              </p>
            </div>

            {/* David Thompson - Operations Manager */}
            <div className="text-center animate-slide-up" style={{animationDelay: '0.4s'}}>
              <img 
                src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="David Thompson" 
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover shadow-lg"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">David Thompson</h3>
              <p className="text-red-600 font-medium mb-3">Operations Manager</p>
              <p className="text-gray-600 text-sm">
                David ensures our programs run smoothly and efficiently, managing logistics, resources, and day-to-day operations. His attention to detail and organizational skills keep our team focused on what matters most - serving youth.
              </p>
            </div>

            {/* Amanda Foster - Development Coordinator */}
            <div className="text-center animate-slide-up" style={{animationDelay: '0.5s'}}>
              <img 
                src="https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Amanda Foster" 
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover shadow-lg"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Amanda Foster</h3>
              <p className="text-red-600 font-medium mb-3">Development Coordinator</p>
              <p className="text-gray-600 text-sm">
                Amanda leads our fundraising efforts and grant writing initiatives, securing the resources needed to expand our impact. Her strategic approach to development has helped us grow our programs and reach more youth in need.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 animate-fade-in">Join Our Mission</h2>
          <p className="text-xl mb-8 animate-slide-up">
            Together, we can create more opportunities and brighter futures for young people in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <a 
              href="/get-involved" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Get Involved
            </a>
            <a 
              href="/programs" 
              className="bg-white hover:bg-gray-100 text-blue-800 px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              View Programs
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
