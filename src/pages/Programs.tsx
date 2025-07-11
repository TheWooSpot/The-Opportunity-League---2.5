import React, { useEffect, useState } from 'react'
import { GraduationCap, Users, Briefcase, Heart, ArrowRight, CheckCircle, Filter, Calendar, Clock, MapPin, Star } from 'lucide-react'

const Programs = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('all')
  const [selectedDay, setSelectedDay] = useState('all')

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

  const programs = [
    // Youth Development Programs
    {
      id: 1,
      title: 'Youth Leadership Academy',
      category: 'youth',
      ageGroup: 'teens',
      description: 'Develop leadership skills through workshops, community projects, and mentorship opportunities.',
      duration: '12 weeks',
      schedule: 'Saturdays 10am-2pm',
      location: 'Main Campus',
      capacity: '25 participants',
      featured: true,
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      title: 'After-School Tutoring',
      category: 'youth',
      ageGroup: 'children',
      description: 'Academic support and homework assistance in a safe, nurturing environment.',
      duration: 'Ongoing',
      schedule: 'Mon-Fri 3pm-6pm',
      location: 'Learning Center',
      capacity: '50 students',
      featured: false,
      image: 'https://images.pexels.com/photos/8471781/pexels-photo-8471781.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      title: 'Summer Youth Employment',
      category: 'youth',
      ageGroup: 'teens',
      description: 'Paid work experience program connecting teens with local businesses and organizations.',
      duration: '8 weeks',
      schedule: 'Mon-Fri 9am-3pm',
      location: 'Various sites',
      capacity: '40 positions',
      featured: true,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 4,
      title: 'Teen Entrepreneurship Workshop',
      category: 'youth',
      ageGroup: 'teens',
      description: 'Learn business fundamentals and develop entrepreneurial skills through hands-on projects.',
      duration: '6 weeks',
      schedule: 'Wednesdays 4pm-7pm',
      location: 'Innovation Lab',
      capacity: '20 participants',
      featured: false,
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 5,
      title: 'Youth Mentorship Program',
      category: 'youth',
      ageGroup: 'teens',
      description: 'One-on-one mentoring relationships with community professionals and role models.',
      duration: '12 months',
      schedule: 'Flexible scheduling',
      location: 'Community locations',
      capacity: '30 matches',
      featured: false,
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 6,
      title: 'College Prep Academy',
      category: 'youth',
      ageGroup: 'teens',
      description: 'Comprehensive college preparation including SAT prep, application assistance, and financial aid guidance.',
      duration: '10 months',
      schedule: 'Saturdays 9am-1pm',
      location: 'Education Center',
      capacity: '35 students',
      featured: true,
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=400'
    },

    // Adult Education Programs
    {
      id: 7,
      title: 'Adult Basic Education (ABE)',
      category: 'education',
      ageGroup: 'adults',
      description: 'Fundamental reading, writing, and math skills for adults seeking to improve their education.',
      duration: 'Self-paced',
      schedule: 'Mon/Wed/Fri 6pm-9pm',
      location: 'Adult Learning Center',
      capacity: '40 students',
      featured: false,
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 8,
      title: 'GED Preparation',
      category: 'education',
      ageGroup: 'adults',
      description: 'Comprehensive preparation for the General Educational Development (GED) test.',
      duration: '16 weeks',
      schedule: 'Tues/Thurs 6pm-9pm',
      location: 'Testing Center',
      capacity: '25 students',
      featured: true,
      image: 'https://images.pexels.com/photos/8471781/pexels-photo-8471781.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 9,
      title: 'English as a Second Language (ESL)',
      category: 'education',
      ageGroup: 'adults',
      description: 'English language instruction for non-native speakers at beginner to advanced levels.',
      duration: 'Ongoing',
      schedule: 'Multiple time slots',
      location: 'Language Center',
      capacity: '60 students',
      featured: false,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 10,
      title: 'Digital Literacy Training',
      category: 'education',
      ageGroup: 'adults',
      description: 'Basic computer skills, internet navigation, and digital communication training.',
      duration: '8 weeks',
      schedule: 'Saturdays 10am-1pm',
      location: 'Computer Lab',
      capacity: '20 participants',
      featured: false,
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 11,
      title: 'Financial Literacy Workshop',
      category: 'education',
      ageGroup: 'adults',
      description: 'Learn budgeting, saving, credit management, and financial planning skills.',
      duration: '4 weeks',
      schedule: 'Thursdays 7pm-9pm',
      location: 'Community Room',
      capacity: '30 participants',
      featured: false,
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 12,
      title: 'Parenting Skills Classes',
      category: 'education',
      ageGroup: 'adults',
      description: 'Evidence-based parenting strategies and child development education for parents.',
      duration: '6 weeks',
      schedule: 'Sundays 2pm-4pm',
      location: 'Family Center',
      capacity: '25 parents',
      featured: false,
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=400'
    },

    // Job Training Programs
    {
      id: 13,
      title: 'Healthcare Career Training',
      category: 'career',
      ageGroup: 'adults',
      description: 'Certified training for healthcare support roles including CNA, medical assistant, and home health aide.',
      duration: '12 weeks',
      schedule: 'Mon-Fri 9am-3pm',
      location: 'Healthcare Training Center',
      capacity: '20 students',
      featured: true,
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 14,
      title: 'Construction Skills Training',
      category: 'career',
      ageGroup: 'adults',
      description: 'Hands-on training in carpentry, electrical, plumbing, and general construction skills.',
      duration: '16 weeks',
      schedule: 'Mon-Fri 8am-4pm',
      location: 'Trade Skills Center',
      capacity: '15 trainees',
      featured: false,
      image: 'https://images.pexels.com/photos/8471781/pexels-photo-8471781.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 15,
      title: 'Culinary Arts Program',
      category: 'career',
      ageGroup: 'adults',
      description: 'Professional culinary training with food safety certification and restaurant experience.',
      duration: '20 weeks',
      schedule: 'Tues-Sat 10am-6pm',
      location: 'Culinary Institute',
      capacity: '12 students',
      featured: true,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 16,
      title: 'IT Support Certification',
      category: 'career',
      ageGroup: 'adults',
      description: 'CompTIA A+ certification preparation and hands-on IT support training.',
      duration: '14 weeks',
      schedule: 'Mon/Wed/Fri 6pm-9pm',
      location: 'Technology Center',
      capacity: '18 students',
      featured: false,
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 17,
      title: 'Customer Service Excellence',
      category: 'career',
      ageGroup: 'adults',
      description: 'Develop professional customer service skills for retail, hospitality, and office environments.',
      duration: '6 weeks',
      schedule: 'Saturdays 9am-3pm',
      location: 'Business Training Room',
      capacity: '25 participants',
      featured: false,
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 18,
      title: 'Small Business Development',
      category: 'career',
      ageGroup: 'adults',
      description: 'Comprehensive training for aspiring entrepreneurs including business planning and marketing.',
      duration: '10 weeks',
      schedule: 'Thursdays 6pm-9pm',
      location: 'Entrepreneur Hub',
      capacity: '20 participants',
      featured: false,
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=400'
    },

    // Family Support Programs
    {
      id: 19,
      title: 'Emergency Food Assistance',
      category: 'family',
      ageGroup: 'all',
      description: 'Monthly food distributions and emergency food boxes for families in need.',
      duration: 'Ongoing',
      schedule: '2nd Saturday each month',
      location: 'Food Distribution Center',
      capacity: '200 families/month',
      featured: false,
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 20,
      title: 'Housing Assistance Program',
      category: 'family',
      ageGroup: 'all',
      description: 'Rental assistance, housing counseling, and support for families facing housing instability.',
      duration: 'Case-by-case',
      schedule: 'By appointment',
      location: 'Housing Services Office',
      capacity: '50 families/year',
      featured: true,
      image: 'https://images.pexels.com/photos/8471781/pexels-photo-8471781.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 21,
      title: 'Childcare Support Services',
      category: 'family',
      ageGroup: 'children',
      description: 'Subsidized childcare and after-school care for working parents and students.',
      duration: 'Ongoing',
      schedule: 'Mon-Fri 7am-6pm',
      location: 'Childcare Center',
      capacity: '40 children',
      featured: false,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 22,
      title: 'Family Counseling Services',
      category: 'family',
      ageGroup: 'all',
      description: 'Professional counseling and therapy services for individuals and families.',
      duration: 'Ongoing',
      schedule: 'By appointment',
      location: 'Counseling Center',
      capacity: '30 families/month',
      featured: false,
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 23,
      title: 'Senior Support Network',
      category: 'family',
      ageGroup: 'seniors',
      description: 'Social activities, wellness programs, and support services for older adults.',
      duration: 'Ongoing',
      schedule: 'Various times',
      location: 'Senior Center',
      capacity: '75 seniors',
      featured: false,
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 24,
      title: 'Crisis Intervention Services',
      category: 'family',
      ageGroup: 'all',
      description: '24/7 crisis support, safety planning, and emergency assistance for families in crisis.',
      duration: 'As needed',
      schedule: '24/7 availability',
      location: 'Crisis Center',
      capacity: 'Unlimited',
      featured: true,
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=400'
    },

    // Community Health Programs
    {
      id: 25,
      title: 'Community Health Screenings',
      category: 'health',
      ageGroup: 'adults',
      description: 'Free health screenings including blood pressure, diabetes, and cholesterol checks.',
      duration: 'Monthly events',
      schedule: '1st Saturday each month',
      location: 'Health Clinic',
      capacity: '100 people/event',
      featured: false,
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 26,
      title: 'Mental Health First Aid',
      category: 'health',
      ageGroup: 'adults',
      description: 'Training to recognize and respond to mental health and substance use challenges.',
      duration: '8 hours',
      schedule: 'Quarterly workshops',
      location: 'Training Center',
      capacity: '25 participants',
      featured: false,
      image: 'https://images.pexels.com/photos/8471781/pexels-photo-8471781.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 27,
      title: 'Nutrition Education Program',
      category: 'health',
      ageGroup: 'all',
      description: 'Cooking classes, nutrition education, and healthy eating workshops for all ages.',
      duration: '4 weeks',
      schedule: 'Tuesdays 6pm-8pm',
      location: 'Community Kitchen',
      capacity: '20 participants',
      featured: false,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 28,
      title: 'Substance Abuse Support Groups',
      category: 'health',
      ageGroup: 'adults',
      description: 'Peer support groups and recovery resources for individuals and families affected by addiction.',
      duration: 'Ongoing',
      schedule: 'Multiple weekly meetings',
      location: 'Recovery Center',
      capacity: '15 per group',
      featured: true,
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 29,
      title: 'Fitness and Wellness Classes',
      category: 'health',
      ageGroup: 'all',
      description: 'Free fitness classes including yoga, Zumba, and strength training for community members.',
      duration: 'Ongoing',
      schedule: 'Daily classes',
      location: 'Fitness Center',
      capacity: '30 per class',
      featured: false,
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 30,
      title: 'Maternal and Child Health',
      category: 'health',
      ageGroup: 'families',
      description: 'Prenatal education, parenting classes, and health services for mothers and young children.',
      duration: 'Ongoing',
      schedule: 'Various times',
      location: 'Family Health Center',
      capacity: '40 families',
      featured: false,
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=400'
    },

    // Community Engagement Programs
    {
      id: 31,
      title: 'Neighborhood Watch Program',
      category: 'community',
      ageGroup: 'adults',
      description: 'Community safety initiative bringing neighbors together to prevent crime and build relationships.',
      duration: 'Ongoing',
      schedule: 'Monthly meetings',
      location: 'Various neighborhoods',
      capacity: '200 participants',
      featured: false,
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 32,
      title: 'Community Garden Project',
      category: 'community',
      ageGroup: 'all',
      description: 'Shared gardening space where community members grow fresh produce and learn sustainable practices.',
      duration: 'Seasonal',
      schedule: 'Flexible participation',
      location: 'Community Garden Site',
      capacity: '50 plot holders',
      featured: false,
      image: 'https://images.pexels.com/photos/8471781/pexels-photo-8471781.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 33,
      title: 'Cultural Arts Festival',
      category: 'community',
      ageGroup: 'all',
      description: 'Annual celebration of community diversity through music, dance, food, and cultural exhibitions.',
      duration: '3-day event',
      schedule: 'Annual in September',
      location: 'Community Park',
      capacity: '5000 attendees',
      featured: true,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 34,
      title: 'Volunteer Coordination Program',
      category: 'community',
      ageGroup: 'all',
      description: 'Matching community volunteers with local organizations and service opportunities.',
      duration: 'Ongoing',
      schedule: 'Flexible scheduling',
      location: 'Volunteer Center',
      capacity: '300 active volunteers',
      featured: false,
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 35,
      title: 'Community Leadership Institute',
      category: 'community',
      ageGroup: 'adults',
      description: 'Leadership development program for community members interested in civic engagement.',
      duration: '9 months',
      schedule: 'Monthly sessions',
      location: 'Leadership Center',
      capacity: '25 participants',
      featured: false,
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 36,
      title: 'Community Resource Fair',
      category: 'community',
      ageGroup: 'all',
      description: 'Quarterly event connecting community members with local services, resources, and opportunities.',
      duration: '1-day event',
      schedule: 'Quarterly',
      location: 'Community Center',
      capacity: '1000 attendees',
      featured: false,
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Programs', icon: Heart, color: 'bg-gray-600' },
    { id: 'youth', name: 'Youth Development', icon: GraduationCap, color: 'bg-blue-600' },
    { id: 'education', name: 'Adult Education', icon: Users, color: 'bg-green-600' },
    { id: 'career', name: 'Job Training', icon: Briefcase, color: 'bg-purple-600' },
    { id: 'family', name: 'Family Support', icon: Heart, color: 'bg-red-600' },
    { id: 'health', name: 'Community Health', icon: Heart, color: 'bg-pink-600' },
    { id: 'community', name: 'Community Engagement', icon: Users, color: 'bg-indigo-600' }
  ]

  const ageGroups = [
    { id: 'all', name: 'All Ages' },
    { id: 'children', name: 'Children (5-12)' },
    { id: 'teens', name: 'Teens (13-18)' },
    { id: 'adults', name: 'Adults (18+)' },
    { id: 'seniors', name: 'Seniors (55+)' },
    { id: 'families', name: 'Families' }
  ]

  const days = [
    { id: 'all', name: 'All Days' },
    { id: 'weekdays', name: 'Weekdays' },
    { id: 'weekends', name: 'Weekends' },
    { id: 'flexible', name: 'Flexible' }
  ]

  const filteredPrograms = programs.filter(program => {
    const categoryMatch = selectedCategory === 'all' || program.category === selectedCategory
    const ageMatch = selectedAgeGroup === 'all' || program.ageGroup === selectedAgeGroup
    return categoryMatch && ageMatch
  })

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#121212] text-white section-padding">
        <div className="container-max text-center">
          <h1 className="section-title text-white mb-6 animate-fade-in-up">
            Our Programs
          </h1>
          <p className="section-subtitle text-gray-300 max-w-3xl mx-auto animate-fade-in-up-delay-1">
            Discover comprehensive programs designed to empower individuals, strengthen families, and build thriving communities. From youth development to career training, we're here to support your journey.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white section-padding fade-in-section">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Find Your Perfect Program</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Use our filters to discover programs that match your interests and needs.
            </p>
          </div>

          {/* Filter Controls */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Category Filter */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
                <Filter className="h-5 w-5 mr-2 text-blue-600" />
                Program Category
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`p-3 rounded-lg text-left transition-all duration-300 flex items-center space-x-3 ${
                      selectedCategory === category.id
                        ? `${category.color} text-white shadow-lg transform scale-105`
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <category.icon className="h-5 w-5" />
                    <span className="font-medium">{category.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Age Group Filter */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
                <Users className="h-5 w-5 mr-2 text-blue-600" />
                Age Group
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {ageGroups.map((ageGroup) => (
                  <button
                    key={ageGroup.id}
                    onClick={() => setSelectedAgeGroup(ageGroup.id)}
                    className={`p-3 rounded-lg text-left transition-all duration-300 ${
                      selectedAgeGroup === ageGroup.id
                        ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <span className="font-medium">{ageGroup.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Schedule Filter */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                Schedule
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {days.map((day) => (
                  <button
                    key={day.id}
                    onClick={() => setSelectedDay(day.id)}
                    className={`p-3 rounded-lg text-left transition-all duration-300 ${
                      selectedDay === day.id
                        ? 'bg-green-600 text-white shadow-lg transform scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <span className="font-medium">{day.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Summary */}
          <div className="text-center mb-8">
            <p className="text-lg text-gray-600">
              Showing <span className="font-bold text-blue-600">{filteredPrograms.length}</span> programs
              {selectedCategory !== 'all' && (
                <span> in <span className="font-semibold">{categories.find(c => c.id === selectedCategory)?.name}</span></span>
              )}
              {selectedAgeGroup !== 'all' && (
                <span> for <span className="font-semibold">{ageGroups.find(a => a.id === selectedAgeGroup)?.name}</span></span>
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="bg-gray-50 section-padding fade-in-section">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program, index) => (
              <div key={program.id} className="card overflow-hidden group animate-card-hover" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {program.featured && (
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Featured
                    </div>
                  )}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${
                      categories.find(c => c.id === program.category)?.color || 'bg-gray-600'
                    }`}>
                      {categories.find(c => c.id === program.category)?.name}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="feature-title mb-3">
                    {program.title}
                  </h3>
                  <p className="body-text mb-4">
                    {program.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2 text-blue-600" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                      <span>{program.schedule}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                      <span>{program.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2 text-blue-600" />
                      <span>{program.capacity}</span>
                    </div>
                  </div>
                  
                  <button className="btn-primary w-full text-sm inline-flex items-center justify-center">
                    Add to Cart
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredPrograms.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Filter className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No Programs Found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your filters to see more programs.</p>
              <button
                onClick={() => {
                  setSelectedCategory('all')
                  setSelectedAgeGroup('all')
                  setSelectedDay('all')
                }}
                className="btn-primary"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-800 text-white section-padding fade-in-section">
        <div className="container-max text-center">
          <h2 className="section-title text-white mb-6 animate-fade-in-up">
            Ready to Get Started?
          </h2>
          <p className="section-subtitle text-blue-100 mb-8 max-w-2xl mx-auto animate-fade-in-up-delay-1">
            Take the first step towards positive change. Contact us today to learn more about enrollment and how we can support your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-2">
            <button className="btn-primary bg-red-600 hover:bg-red-700">
              Contact Us Today
            </button>
            <button className="btn-outline">
              Download Program Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Programs
