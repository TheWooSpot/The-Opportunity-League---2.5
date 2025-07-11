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
    // Academic Support Programs
    {
      id: 1,
      title: "After-School Tutoring",
      category: "academic",
      ageGroup: "elementary",
      description: "Personalized academic support to help students excel in their studies.",
      duration: "2 hours",
      schedule: "Monday-Friday",
      location: "Main Campus",
      capacity: 25,
      enrolled: 18,
      rating: 4.8,
      image: "https://images.pexels.com/photos/8471831/pexels-photo-8471831.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Homework Help", "Test Prep", "Study Skills"]
    },
    {
      id: 2,
      title: "STEM Explorers",
      category: "academic",
      ageGroup: "middle",
      description: "Hands-on science, technology, engineering, and math activities.",
      duration: "3 hours",
      schedule: "Saturdays",
      location: "Science Lab",
      capacity: 20,
      enrolled: 15,
      rating: 4.9,
      image: "https://images.pexels.com/photos/8471906/pexels-photo-8471906.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Robotics", "Coding", "Lab Experiments"]
    },
    {
      id: 3,
      title: "College Prep Academy",
      category: "academic",
      ageGroup: "high",
      description: "Comprehensive college preparation and application support.",
      duration: "4 hours",
      schedule: "Weekends",
      location: "Academic Center",
      capacity: 30,
      enrolled: 22,
      rating: 4.7,
      image: "https://images.pexels.com/photos/8471832/pexels-photo-8471832.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["SAT/ACT Prep", "Essay Writing", "College Applications"]
    },
    {
      id: 4,
      title: "Reading Champions",
      category: "academic",
      ageGroup: "elementary",
      description: "Building strong reading foundations through engaging activities.",
      duration: "1.5 hours",
      schedule: "Tuesday/Thursday",
      location: "Library",
      capacity: 15,
      enrolled: 12,
      rating: 4.6,
      image: "https://images.pexels.com/photos/8471833/pexels-photo-8471833.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Phonics", "Comprehension", "Storytelling"]
    },
    {
      id: 5,
      title: "Math Masters",
      category: "academic",
      ageGroup: "middle",
      description: "Advanced mathematics program for accelerated learning.",
      duration: "2.5 hours",
      schedule: "Monday/Wednesday",
      location: "Math Lab",
      capacity: 18,
      enrolled: 14,
      rating: 4.8,
      image: "https://images.pexels.com/photos/8471834/pexels-photo-8471834.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Algebra", "Geometry", "Problem Solving"]
    },
    {
      id: 6,
      title: "Academic Excellence",
      category: "academic",
      ageGroup: "high",
      description: "Comprehensive academic support for high school success.",
      duration: "3 hours",
      schedule: "Daily",
      location: "Study Hall",
      capacity: 40,
      enrolled: 35,
      rating: 4.9,
      image: "https://images.pexels.com/photos/8471835/pexels-photo-8471835.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["All Subjects", "Study Groups", "Peer Tutoring"]
    },

    // Sports & Recreation Programs
    {
      id: 7,
      title: "Youth Basketball League",
      category: "sports",
      ageGroup: "middle",
      description: "Competitive basketball program focusing on teamwork and skill development.",
      duration: "2 hours",
      schedule: "Tuesday/Thursday",
      location: "Gymnasium",
      capacity: 24,
      enrolled: 20,
      rating: 4.7,
      image: "https://images.pexels.com/photos/8471836/pexels-photo-8471836.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Team Play", "Skill Training", "Tournaments"]
    },
    {
      id: 8,
      title: "Soccer Stars",
      category: "sports",
      ageGroup: "elementary",
      description: "Fun and engaging soccer program for young athletes.",
      duration: "1.5 hours",
      schedule: "Saturdays",
      location: "Sports Field",
      capacity: 30,
      enrolled: 25,
      rating: 4.8,
      image: "https://images.pexels.com/photos/8471837/pexels-photo-8471837.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Basic Skills", "Team Spirit", "Fun Games"]
    },
    {
      id: 9,
      title: "Track & Field Club",
      category: "sports",
      ageGroup: "high",
      description: "Comprehensive track and field training program.",
      duration: "2.5 hours",
      schedule: "Monday/Wednesday/Friday",
      location: "Athletic Track",
      capacity: 35,
      enrolled: 28,
      rating: 4.6,
      image: "https://images.pexels.com/photos/8471838/pexels-photo-8471838.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Running", "Jumping", "Throwing"]
    },
    {
      id: 10,
      title: "Swimming Lessons",
      category: "sports",
      ageGroup: "all",
      description: "Learn to swim in a safe and supportive environment.",
      duration: "1 hour",
      schedule: "Daily",
      location: "Pool",
      capacity: 12,
      enrolled: 10,
      rating: 4.9,
      image: "https://images.pexels.com/photos/8471839/pexels-photo-8471839.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Water Safety", "Stroke Technique", "Confidence Building"]
    },
    {
      id: 11,
      title: "Tennis Academy",
      category: "sports",
      ageGroup: "middle",
      description: "Professional tennis instruction for all skill levels.",
      duration: "2 hours",
      schedule: "Weekends",
      location: "Tennis Courts",
      capacity: 16,
      enrolled: 12,
      rating: 4.7,
      image: "https://images.pexels.com/photos/8471840/pexels-photo-8471840.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Technique", "Strategy", "Match Play"]
    },
    {
      id: 12,
      title: "Fitness & Wellness",
      category: "sports",
      ageGroup: "high",
      description: "Comprehensive fitness program promoting healthy lifestyles.",
      duration: "1.5 hours",
      schedule: "Monday/Wednesday/Friday",
      location: "Fitness Center",
      capacity: 25,
      enrolled: 20,
      rating: 4.8,
      image: "https://images.pexels.com/photos/8471841/pexels-photo-8471841.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Strength Training", "Cardio", "Nutrition Education"]
    },

    // Arts & Creativity Programs
    {
      id: 13,
      title: "Creative Arts Studio",
      category: "arts",
      ageGroup: "elementary",
      description: "Explore various art forms and unleash creativity.",
      duration: "2 hours",
      schedule: "Saturdays",
      location: "Art Studio",
      capacity: 20,
      enrolled: 16,
      rating: 4.9,
      image: "https://images.pexels.com/photos/8471842/pexels-photo-8471842.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Painting", "Drawing", "Crafts"]
    },
    {
      id: 14,
      title: "Music Makers",
      category: "arts",
      ageGroup: "middle",
      description: "Learn instruments and develop musical talents.",
      duration: "1.5 hours",
      schedule: "Tuesday/Thursday",
      location: "Music Room",
      capacity: 15,
      enrolled: 13,
      rating: 4.8,
      image: "https://images.pexels.com/photos/8471843/pexels-photo-8471843.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Piano", "Guitar", "Vocals"]
    },
    {
      id: 15,
      title: "Drama Club",
      category: "arts",
      ageGroup: "high",
      description: "Develop acting skills and stage presence.",
      duration: "3 hours",
      schedule: "Weekends",
      location: "Theater",
      capacity: 25,
      enrolled: 18,
      rating: 4.7,
      image: "https://images.pexels.com/photos/8471844/pexels-photo-8471844.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Acting", "Improvisation", "Stage Production"]
    },
    {
      id: 16,
      title: "Digital Media Lab",
      category: "arts",
      ageGroup: "high",
      description: "Learn digital art, video editing, and multimedia creation.",
      duration: "2.5 hours",
      schedule: "Monday/Wednesday",
      location: "Media Lab",
      capacity: 18,
      enrolled: 15,
      rating: 4.8,
      image: "https://images.pexels.com/photos/8471845/pexels-photo-8471845.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Video Editing", "Graphic Design", "Animation"]
    },
    {
      id: 17,
      title: "Photography Workshop",
      category: "arts",
      ageGroup: "middle",
      description: "Capture the world through the lens of creativity.",
      duration: "2 hours",
      schedule: "Saturdays",
      location: "Photography Studio",
      capacity: 12,
      enrolled: 10,
      rating: 4.9,
      image: "https://images.pexels.com/photos/8471846/pexels-photo-8471846.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Composition", "Lighting", "Digital Processing"]
    },
    {
      id: 18,
      title: "Creative Writing Circle",
      category: "arts",
      ageGroup: "all",
      description: "Express yourself through the power of words.",
      duration: "1.5 hours",
      schedule: "Friday",
      location: "Writing Lab",
      capacity: 15,
      enrolled: 11,
      rating: 4.6,
      image: "https://images.pexels.com/photos/8471847/pexels-photo-8471847.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Poetry", "Short Stories", "Publishing"]
    },

    // Life Skills Programs
    {
      id: 19,
      title: "Leadership Development",
      category: "life-skills",
      ageGroup: "high",
      description: "Build leadership skills and confidence for future success.",
      duration: "2 hours",
      schedule: "Weekends",
      location: "Conference Room",
      capacity: 20,
      enrolled: 16,
      rating: 4.8,
      image: "https://images.pexels.com/photos/8471848/pexels-photo-8471848.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Public Speaking", "Team Building", "Project Management"]
    },
    {
      id: 20,
      title: "Financial Literacy",
      category: "life-skills",
      ageGroup: "high",
      description: "Learn essential money management and financial planning skills.",
      duration: "1.5 hours",
      schedule: "Tuesday",
      location: "Classroom A",
      capacity: 25,
      enrolled: 20,
      rating: 4.7,
      image: "https://images.pexels.com/photos/8471849/pexels-photo-8471849.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Budgeting", "Saving", "Investing"]
    },
    {
      id: 21,
      title: "Communication Skills",
      category: "life-skills",
      ageGroup: "middle",
      description: "Develop effective communication and interpersonal skills.",
      duration: "1.5 hours",
      schedule: "Thursday",
      location: "Classroom B",
      capacity: 18,
      enrolled: 14,
      rating: 4.6,
      image: "https://images.pexels.com/photos/8471850/pexels-photo-8471850.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Active Listening", "Presentation Skills", "Conflict Resolution"]
    },
    {
      id: 22,
      title: "Cooking & Nutrition",
      category: "life-skills",
      ageGroup: "all",
      description: "Learn healthy cooking and nutrition fundamentals.",
      duration: "2.5 hours",
      schedule: "Saturdays",
      location: "Kitchen Lab",
      capacity: 16,
      enrolled: 13,
      rating: 4.9,
      image: "https://images.pexels.com/photos/8471851/pexels-photo-8471851.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Meal Planning", "Healthy Recipes", "Food Safety"]
    },
    {
      id: 23,
      title: "Time Management",
      category: "life-skills",
      ageGroup: "middle",
      description: "Master the art of effective time management and organization.",
      duration: "1 hour",
      schedule: "Wednesday",
      location: "Study Room",
      capacity: 20,
      enrolled: 15,
      rating: 4.5,
      image: "https://images.pexels.com/photos/8471852/pexels-photo-8471852.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Planning", "Prioritization", "Goal Setting"]
    },
    {
      id: 24,
      title: "Digital Citizenship",
      category: "life-skills",
      ageGroup: "elementary",
      description: "Learn responsible and safe internet usage.",
      duration: "1 hour",
      schedule: "Friday",
      location: "Computer Lab",
      capacity: 22,
      enrolled: 18,
      rating: 4.7,
      image: "https://images.pexels.com/photos/8471853/pexels-photo-8471853.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Online Safety", "Digital Ethics", "Privacy Protection"]
    },

    // Career Development Programs
    {
      id: 25,
      title: "Career Exploration",
      category: "career",
      ageGroup: "high",
      description: "Discover career paths and professional opportunities.",
      duration: "2 hours",
      schedule: "Monday",
      location: "Career Center",
      capacity: 30,
      enrolled: 24,
      rating: 4.8,
      image: "https://images.pexels.com/photos/8471854/pexels-photo-8471854.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Career Assessments", "Industry Tours", "Guest Speakers"]
    },
    {
      id: 26,
      title: "Internship Program",
      category: "career",
      ageGroup: "high",
      description: "Gain real-world work experience through structured internships.",
      duration: "4 hours",
      schedule: "Weekdays",
      location: "Various Locations",
      capacity: 15,
      enrolled: 12,
      rating: 4.9,
      image: "https://images.pexels.com/photos/8471855/pexels-photo-8471855.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Mentorship", "Skill Development", "Networking"]
    },
    {
      id: 27,
      title: "Resume Building Workshop",
      category: "career",
      ageGroup: "high",
      description: "Create professional resumes and cover letters.",
      duration: "2 hours",
      schedule: "Saturday",
      location: "Workshop Room",
      capacity: 25,
      enrolled: 20,
      rating: 4.6,
      image: "https://images.pexels.com/photos/8471856/pexels-photo-8471856.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Resume Writing", "Interview Prep", "Professional Branding"]
    },
    {
      id: 28,
      title: "Entrepreneurship Club",
      category: "career",
      ageGroup: "middle",
      description: "Learn business fundamentals and entrepreneurial thinking.",
      duration: "2.5 hours",
      schedule: "Wednesday",
      location: "Innovation Lab",
      capacity: 20,
      enrolled: 16,
      rating: 4.7,
      image: "https://images.pexels.com/photos/8471857/pexels-photo-8471857.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Business Planning", "Marketing", "Financial Management"]
    },
    {
      id: 29,
      title: "Job Readiness Training",
      category: "career",
      ageGroup: "high",
      description: "Prepare for the workforce with essential job skills.",
      duration: "3 hours",
      schedule: "Thursday",
      location: "Training Center",
      capacity: 28,
      enrolled: 22,
      rating: 4.8,
      image: "https://images.pexels.com/photos/8471858/pexels-photo-8471858.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Interview Skills", "Workplace Etiquette", "Professional Communication"]
    },
    {
      id: 30,
      title: "Tech Skills Bootcamp",
      category: "career",
      ageGroup: "high",
      description: "Intensive technology skills training for modern careers.",
      duration: "4 hours",
      schedule: "Weekends",
      location: "Tech Lab",
      capacity: 18,
      enrolled: 15,
      rating: 4.9,
      image: "https://images.pexels.com/photos/8471859/pexels-photo-8471859.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Coding", "Data Analysis", "Digital Tools"]
    },

    // Community Service Programs
    {
      id: 31,
      title: "Community Garden Project",
      category: "community",
      ageGroup: "all",
      description: "Grow fresh produce while learning about sustainability.",
      duration: "3 hours",
      schedule: "Saturdays",
      location: "Community Garden",
      capacity: 25,
      enrolled: 20,
      rating: 4.8,
      image: "https://images.pexels.com/photos/8471860/pexels-photo-8471860.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Organic Gardening", "Environmental Education", "Community Impact"]
    },
    {
      id: 32,
      title: "Senior Center Visits",
      category: "community",
      ageGroup: "middle",
      description: "Build intergenerational connections through regular visits.",
      duration: "2 hours",
      schedule: "Sundays",
      location: "Local Senior Centers",
      capacity: 15,
      enrolled: 12,
      rating: 4.9,
      image: "https://images.pexels.com/photos/8471861/pexels-photo-8471861.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Companionship", "Activity Assistance", "Story Sharing"]
    },
    {
      id: 33,
      title: "Environmental Cleanup",
      category: "community",
      ageGroup: "high",
      description: "Protect our environment through community cleanup efforts.",
      duration: "4 hours",
      schedule: "Monthly",
      location: "Various Parks",
      capacity: 40,
      enrolled: 32,
      rating: 4.7,
      image: "https://images.pexels.com/photos/8471862/pexels-photo-8471862.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Park Restoration", "Recycling Education", "Team Building"]
    },
    {
      id: 34,
      title: "Food Bank Volunteer",
      category: "community",
      ageGroup: "elementary",
      description: "Help fight hunger in our community through food distribution.",
      duration: "2.5 hours",
      schedule: "Saturdays",
      location: "Local Food Bank",
      capacity: 20,
      enrolled: 16,
      rating: 4.8,
      image: "https://images.pexels.com/photos/8471863/pexels-photo-8471863.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Food Sorting", "Distribution", "Community Awareness"]
    },
    {
      id: 35,
      title: "Reading Buddies",
      category: "community",
      ageGroup: "middle",
      description: "Support younger students with reading and literacy.",
      duration: "1.5 hours",
      schedule: "Tuesday/Thursday",
      location: "Elementary Schools",
      capacity: 18,
      enrolled: 14,
      rating: 4.6,
      image: "https://images.pexels.com/photos/8471864/pexels-photo-8471864.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Mentoring", "Reading Support", "Educational Games"]
    },
    {
      id: 36,
      title: "Neighborhood Beautification",
      category: "community",
      ageGroup: "all",
      description: "Improve local neighborhoods through beautification projects.",
      duration: "3 hours",
      schedule: "Weekends",
      location: "Local Neighborhoods",
      capacity: 30,
      enrolled: 25,
      rating: 4.7,
      image: "https://images.pexels.com/photos/8471865/pexels-photo-8471865.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Mural Painting", "Landscaping", "Community Pride"]
    }
  ]

  const categories = [
    { id: 'all', name: 'All Programs', icon: GraduationCap, color: 'bg-blue-500' },
    { id: 'academic', name: 'Academic Support', icon: GraduationCap, color: 'bg-blue-500' },
    { id: 'sports', name: 'Sports & Recreation', icon: Users, color: 'bg-green-500' },
    { id: 'arts', name: 'Arts & Creativity', icon: Heart, color: 'bg-purple-500' },
    { id: 'life-skills', name: 'Life Skills', icon: CheckCircle, color: 'bg-orange-500' },
    { id: 'career', name: 'Career Development', icon: Briefcase, color: 'bg-red-500' },
    { id: 'community', name: 'Community Service', icon: Heart, color: 'bg-pink-500' }
  ]

  const ageGroups = [
    { id: 'all', name: 'All Ages' },
    { id: 'elementary', name: 'Elementary (6-11)' },
    { id: 'middle', name: 'Middle School (12-14)' },
    { id: 'high', name: 'High School (15-18)' }
  ]

  const days = [
    { id: 'all', name: 'All Days' },
    { id: 'weekdays', name: 'Weekdays' },
    { id: 'weekends', name: 'Weekends' },
    { id: 'daily', name: 'Daily' }
  ]

  const filteredPrograms = programs.filter(program => {
    const categoryMatch = selectedCategory === 'all' || program.category === selectedCategory
    const ageMatch = selectedAgeGroup === 'all' || program.ageGroup === selectedAgeGroup
    
    let dayMatch = true
    if (selectedDay !== 'all') {
      const schedule = program.schedule.toLowerCase()
      if (selectedDay === 'weekdays') {
        dayMatch = schedule.includes('monday') || schedule.includes('tuesday') || 
                  schedule.includes('wednesday') || schedule.includes('thursday') || 
                  schedule.includes('friday') || schedule.includes('weekdays')
      } else if (selectedDay === 'weekends') {
        dayMatch = schedule.includes('saturday') || schedule.includes('sunday') || 
                  schedule.includes('weekends')
      } else if (selectedDay === 'daily') {
        dayMatch = schedule.includes('daily')
      }
    }
    
    return categoryMatch && ageMatch && dayMatch
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#121212] text-white py-20 fade-in-section">
        <div className="container-max">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Our Programs
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up-delay-1">
              Discover comprehensive programs designed to empower youth and build stronger communities
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b fade-in-section">
        <div className="container-max">
          <div className="text-center mb-8 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Your Perfect Program</h2>
            <p className="text-lg text-gray-600">Use our filters to discover programs that match your interests and schedule</p>
          </div>

          {/* Filter Controls */}
          <div className="grid md:grid-cols-3 gap-8 animate-fade-in-up-delay-1">
            {/* Category Filter */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Filter className="h-5 w-5 mr-2 text-blue-600" />
                Program Category
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {categories.map((category) => {
                  const IconComponent = category.icon
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`p-3 rounded-lg border-2 transition-all duration-300 text-left hover:transform hover:scale-105 ${
                        selectedCategory === category.id
                          ? `${category.color} text-white border-transparent shadow-lg`
                          : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center">
                        <IconComponent className="h-4 w-4 mr-2" />
                        <span className="text-sm font-medium">{category.name}</span>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Age Group Filter */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Users className="h-5 w-5 mr-2 text-green-600" />
                Age Group
              </h3>
              <div className="space-y-2">
                {ageGroups.map((ageGroup) => (
                  <button
                    key={ageGroup.id}
                    onClick={() => setSelectedAgeGroup(ageGroup.id)}
                    className={`w-full p-3 rounded-lg border-2 transition-all duration-300 text-left hover:transform hover:scale-105 ${
                      selectedAgeGroup === ageGroup.id
                        ? 'bg-green-500 text-white border-transparent shadow-lg'
                        : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <span className="font-medium">{ageGroup.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Schedule Filter */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-purple-600" />
                Schedule
              </h3>
              <div className="space-y-2">
                {days.map((day) => (
                  <button
                    key={day.id}
                    onClick={() => setSelectedDay(day.id)}
                    className={`w-full p-3 rounded-lg border-2 transition-all duration-300 text-left hover:transform hover:scale-105 ${
                      selectedDay === day.id
                        ? 'bg-purple-500 text-white border-transparent shadow-lg'
                        : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <span className="font-medium">{day.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 fade-in-section">
        <div className="container-max">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {filteredPrograms.length} Program{filteredPrograms.length !== 1 ? 's' : ''} Available
            </h2>
            <p className="text-lg text-gray-600">
              {selectedCategory === 'all' ? 'All categories' : categories.find(c => c.id === selectedCategory)?.name} • 
              {selectedAgeGroup === 'all' ? ' All ages' : ' ' + ageGroups.find(a => a.id === selectedAgeGroup)?.name} • 
              {selectedDay === 'all' ? ' All schedules' : ' ' + days.find(d => d.id === selectedDay)?.name}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program, index) => {
              const categoryInfo = categories.find(c => c.id === program.category)
              const IconComponent = categoryInfo?.icon || GraduationCap
              
              return (
                <div
                  key={program.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:transform hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className={`absolute top-4 left-4 ${categoryInfo?.color} text-white px-3 py-1 rounded-full text-sm font-medium flex items-center`}>
                      <IconComponent className="h-4 w-4 mr-1" />
                      {categoryInfo?.name}
                    </div>
                    <div className="absolute top-4 right-4 bg-white bg-opacity-90 text-gray-800 px-2 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="h-4 w-4 mr-1 text-yellow-500" />
                      {program.rating}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h3>
                    <p className="text-gray-600 mb-4">{program.description}</p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-2" />
                        {program.duration} • {program.schedule}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 mr-2" />
                        {program.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="h-4 w-4 mr-2" />
                        {program.enrolled}/{program.capacity} enrolled
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {program.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${(program.enrolled / program.capacity) * 100}%` }}
                        ></div>
                      </div>
                      <span className="ml-3 text-sm text-gray-500 whitespace-nowrap">
                        {Math.round((program.enrolled / program.capacity) * 100)}% full
                      </span>
                    </div>

                    <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center hover:transform hover:scale-105">
                      Add to Cart
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

          {filteredPrograms.length === 0 && (
            <div className="text-center py-12 animate-fade-in-up">
              <div className="text-gray-400 mb-4">
                <Filter className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No programs found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your filters to see more programs</p>
              <button
                onClick={() => {
                  setSelectedCategory('all')
                  setSelectedAgeGroup('all')
                  setSelectedDay('all')
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Support Our Programs Section */}
      <section className="py-16 bg-gray-100 fade-in-section">
        <div className="container-max">
          <div className="text-center animate-fade-in-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Support Our Programs</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Your donation helps us provide these life-changing programs to youth in our community. 
              Every contribution makes a difference in a young person's future.
            </p>
            <a
              href="/get-involved#donation"
              className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg"
            >
              Make a Donation
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Programs
