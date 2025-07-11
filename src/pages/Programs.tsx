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
      description: "Personalized tutoring sessions to help students excel in core subjects including math, reading, and science.",
      duration: "2 hours",
      schedule: "Monday-Friday",
      location: "Main Campus",
      capacity: 25,
      enrolled: 18,
      price: 45,
      features: ["Certified Tutors", "Small Groups", "Progress Tracking"],
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg"
    },
    {
      id: 2,
      title: "STEM Explorers",
      category: "academic",
      ageGroup: "middle",
      description: "Hands-on science, technology, engineering, and math activities designed to spark curiosity and innovation.",
      duration: "3 hours",
      schedule: "Saturdays",
      location: "STEM Lab",
      capacity: 20,
      enrolled: 15,
      price: 65,
      features: ["Lab Equipment", "Project-Based", "Expert Mentors"],
      image: "https://images.pexels.com/photos/8471822/pexels-photo-8471822.jpeg"
    },
    {
      id: 3,
      title: "College Prep Academy",
      category: "academic",
      ageGroup: "high",
      description: "Comprehensive college preparation including SAT/ACT prep, essay writing, and application guidance.",
      duration: "4 hours",
      schedule: "Weekends",
      location: "Academic Center",
      capacity: 15,
      enrolled: 12,
      price: 85,
      features: ["Test Prep", "Essay Coaching", "College Counseling"],
      image: "https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg"
    },
    {
      id: 4,
      title: "Reading Champions",
      category: "academic",
      ageGroup: "elementary",
      description: "Interactive reading program that builds literacy skills through engaging stories and activities.",
      duration: "1.5 hours",
      schedule: "Tuesday/Thursday",
      location: "Library",
      capacity: 30,
      enrolled: 22,
      price: 35,
      features: ["Age-Appropriate Books", "Reading Games", "Progress Rewards"],
      image: "https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg"
    },
    {
      id: 5,
      title: "Math Masters",
      category: "academic",
      ageGroup: "middle",
      description: "Advanced mathematics program covering algebra, geometry, and problem-solving strategies.",
      duration: "2.5 hours",
      schedule: "Monday/Wednesday",
      location: "Math Lab",
      capacity: 18,
      enrolled: 14,
      price: 55,
      features: ["Advanced Curriculum", "Problem Solving", "Competition Prep"],
      image: "https://images.pexels.com/photos/6238050/pexels-photo-6238050.jpeg"
    },
    {
      id: 6,
      title: "AP Success Program",
      category: "academic",
      ageGroup: "high",
      description: "Intensive preparation for Advanced Placement exams across multiple subjects.",
      duration: "3 hours",
      schedule: "Saturdays",
      location: "AP Center",
      capacity: 12,
      enrolled: 10,
      price: 95,
      features: ["AP Curriculum", "Practice Exams", "Score Guarantee"],
      image: "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg"
    },

    // Sports & Recreation Programs
    {
      id: 7,
      title: "Youth Basketball League",
      category: "sports",
      ageGroup: "middle",
      description: "Competitive basketball league focusing on skill development, teamwork, and sportsmanship.",
      duration: "2 hours",
      schedule: "Saturdays",
      location: "Gymnasium",
      capacity: 24,
      enrolled: 20,
      price: 40,
      features: ["Professional Coaching", "Team Uniforms", "League Games"],
      image: "https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg"
    },
    {
      id: 8,
      title: "Soccer Skills Academy",
      category: "sports",
      ageGroup: "elementary",
      description: "Fun and engaging soccer program that teaches fundamental skills and promotes physical fitness.",
      duration: "1.5 hours",
      schedule: "Saturdays",
      location: "Soccer Field",
      capacity: 30,
      enrolled: 25,
      price: 30,
      features: ["Skill Drills", "Mini Games", "Equipment Provided"],
      image: "https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg"
    },
    {
      id: 9,
      title: "Swimming Lessons",
      category: "sports",
      ageGroup: "all",
      description: "Professional swimming instruction for all skill levels, from beginners to advanced swimmers.",
      duration: "1 hour",
      schedule: "Monday-Friday",
      location: "Aquatic Center",
      capacity: 16,
      enrolled: 12,
      price: 50,
      features: ["Certified Instructors", "All Levels", "Safety First"],
      image: "https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg"
    },
    {
      id: 10,
      title: "Track & Field Club",
      category: "sports",
      ageGroup: "high",
      description: "Comprehensive track and field training covering sprints, distance running, and field events.",
      duration: "2.5 hours",
      schedule: "Tuesday/Thursday",
      location: "Track Stadium",
      capacity: 20,
      enrolled: 16,
      price: 45,
      features: ["Event Specialization", "Competition Training", "Fitness Coaching"],
      image: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg"
    },
    {
      id: 11,
      title: "Tennis Academy",
      category: "sports",
      ageGroup: "middle",
      description: "Professional tennis instruction focusing on technique, strategy, and competitive play.",
      duration: "2 hours",
      schedule: "Weekends",
      location: "Tennis Courts",
      capacity: 12,
      enrolled: 9,
      price: 60,
      features: ["Pro Instruction", "Court Time", "Tournament Prep"],
      image: "https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg"
    },
    {
      id: 12,
      title: "Martial Arts Training",
      category: "sports",
      ageGroup: "all",
      description: "Traditional martial arts training emphasizing discipline, respect, and self-defense skills.",
      duration: "1.5 hours",
      schedule: "Monday/Wednesday/Friday",
      location: "Dojo",
      capacity: 25,
      enrolled: 18,
      price: 55,
      features: ["Belt Progression", "Self-Defense", "Character Building"],
      image: "https://images.pexels.com/photos/7045617/pexels-photo-7045617.jpeg"
    },

    // Arts & Creativity Programs
    {
      id: 13,
      title: "Young Artists Studio",
      category: "arts",
      ageGroup: "elementary",
      description: "Creative art classes exploring various mediums including painting, drawing, and sculpture.",
      duration: "2 hours",
      schedule: "Saturdays",
      location: "Art Studio",
      capacity: 20,
      enrolled: 16,
      price: 40,
      features: ["Art Supplies", "Gallery Showcase", "Creative Expression"],
      image: "https://images.pexels.com/photos/1153213/pexels-photo-1153213.jpeg"
    },
    {
      id: 14,
      title: "Music Makers",
      category: "arts",
      ageGroup: "middle",
      description: "Comprehensive music program including instrument lessons, music theory, and ensemble performance.",
      duration: "2.5 hours",
      schedule: "Tuesday/Thursday",
      location: "Music Room",
      capacity: 15,
      enrolled: 12,
      price: 65,
      features: ["Instrument Rental", "Music Theory", "Recital Performance"],
      image: "https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg"
    },
    {
      id: 15,
      title: "Drama Club",
      category: "arts",
      ageGroup: "high",
      description: "Theater arts program covering acting, stagecraft, and production for aspiring performers.",
      duration: "3 hours",
      schedule: "Weekends",
      location: "Theater",
      capacity: 18,
      enrolled: 14,
      price: 50,
      features: ["Acting Techniques", "Stage Production", "Public Performance"],
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
    },
    {
      id: 16,
      title: "Digital Media Lab",
      category: "arts",
      ageGroup: "high",
      description: "Modern digital arts program covering video production, graphic design, and digital photography.",
      duration: "3 hours",
      schedule: "Saturdays",
      location: "Media Lab",
      capacity: 12,
      enrolled: 10,
      price: 70,
      features: ["Professional Software", "Equipment Access", "Portfolio Development"],
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
    },
    {
      id: 17,
      title: "Creative Writing Workshop",
      category: "arts",
      ageGroup: "middle",
      description: "Writing program that develops storytelling skills through poetry, short stories, and creative expression.",
      duration: "2 hours",
      schedule: "Wednesdays",
      location: "Writing Center",
      capacity: 16,
      enrolled: 11,
      price: 35,
      features: ["Writing Prompts", "Peer Review", "Publication Opportunities"],
      image: "https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg"
    },
    {
      id: 18,
      title: "Dance Academy",
      category: "arts",
      ageGroup: "all",
      description: "Dance instruction covering multiple styles including ballet, hip-hop, and contemporary dance.",
      duration: "1.5 hours",
      schedule: "Monday/Wednesday/Friday",
      location: "Dance Studio",
      capacity: 22,
      enrolled: 19,
      price: 45,
      features: ["Multiple Styles", "Performance Opportunities", "Flexibility Training"],
      image: "https://images.pexels.com/photos/3737094/pexels-photo-3737094.jpeg"
    },

    // Leadership & Life Skills Programs
    {
      id: 19,
      title: "Young Leaders Academy",
      category: "leadership",
      ageGroup: "high",
      description: "Leadership development program focusing on communication, project management, and community service.",
      duration: "3 hours",
      schedule: "Saturdays",
      location: "Leadership Center",
      capacity: 15,
      enrolled: 13,
      price: 60,
      features: ["Leadership Skills", "Community Projects", "Mentorship"],
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
    },
    {
      id: 20,
      title: "Public Speaking Club",
      category: "leadership",
      ageGroup: "middle",
      description: "Build confidence and communication skills through structured speaking exercises and presentations.",
      duration: "2 hours",
      schedule: "Thursdays",
      location: "Conference Room",
      capacity: 18,
      enrolled: 14,
      price: 40,
      features: ["Speech Training", "Confidence Building", "Presentation Skills"],
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
    },
    {
      id: 21,
      title: "Entrepreneurship Workshop",
      category: "leadership",
      ageGroup: "high",
      description: "Business skills program teaching entrepreneurship, financial literacy, and startup fundamentals.",
      duration: "4 hours",
      schedule: "Saturdays",
      location: "Business Lab",
      capacity: 12,
      enrolled: 8,
      price: 75,
      features: ["Business Planning", "Financial Literacy", "Pitch Practice"],
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg"
    },
    {
      id: 22,
      title: "Peer Mentoring Program",
      category: "leadership",
      ageGroup: "middle",
      description: "Develop mentoring skills while supporting younger students in their academic and personal growth.",
      duration: "2 hours",
      schedule: "Tuesdays",
      location: "Mentoring Center",
      capacity: 20,
      enrolled: 16,
      price: 25,
      features: ["Mentoring Training", "Peer Support", "Leadership Development"],
      image: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg"
    },
    {
      id: 23,
      title: "Life Skills Workshop",
      category: "leadership",
      ageGroup: "high",
      description: "Essential life skills including time management, goal setting, and personal development strategies.",
      duration: "2.5 hours",
      schedule: "Fridays",
      location: "Life Skills Center",
      capacity: 16,
      enrolled: 12,
      price: 45,
      features: ["Time Management", "Goal Setting", "Personal Development"],
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
    },
    {
      id: 24,
      title: "Community Service Club",
      category: "leadership",
      ageGroup: "all",
      description: "Organized community service opportunities that develop civic responsibility and social awareness.",
      duration: "3 hours",
      schedule: "Saturdays",
      location: "Various Locations",
      capacity: 25,
      enrolled: 20,
      price: 20,
      features: ["Service Projects", "Community Impact", "Social Responsibility"],
      image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg"
    },

    // Technology Programs
    {
      id: 25,
      title: "Coding Bootcamp",
      category: "technology",
      ageGroup: "high",
      description: "Intensive programming course covering web development, mobile apps, and software engineering principles.",
      duration: "4 hours",
      schedule: "Saturdays",
      location: "Computer Lab",
      capacity: 15,
      enrolled: 12,
      price: 80,
      features: ["Multiple Languages", "Project Portfolio", "Industry Mentors"],
      image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg"
    },
    {
      id: 26,
      title: "Robotics Club",
      category: "technology",
      ageGroup: "middle",
      description: "Hands-on robotics program where students design, build, and program robots for various challenges.",
      duration: "3 hours",
      schedule: "Saturdays",
      location: "Robotics Lab",
      capacity: 12,
      enrolled: 10,
      price: 70,
      features: ["Robot Building", "Programming", "Competition Teams"],
      image: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg"
    },
    {
      id: 27,
      title: "Digital Citizenship",
      category: "technology",
      ageGroup: "elementary",
      description: "Essential digital literacy and online safety skills for young internet users.",
      duration: "1.5 hours",
      schedule: "Fridays",
      location: "Computer Lab",
      capacity: 20,
      enrolled: 15,
      price: 30,
      features: ["Online Safety", "Digital Ethics", "Technology Skills"],
      image: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg"
    },
    {
      id: 28,
      title: "Game Development Studio",
      category: "technology",
      ageGroup: "high",
      description: "Learn game design and development using modern tools and programming languages.",
      duration: "3.5 hours",
      schedule: "Sundays",
      location: "Game Lab",
      capacity: 10,
      enrolled: 8,
      price: 85,
      features: ["Game Engines", "Design Principles", "Publishing Process"],
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
    },
    {
      id: 29,
      title: "3D Printing Workshop",
      category: "technology",
      ageGroup: "middle",
      description: "Introduction to 3D modeling and printing technology with hands-on project creation.",
      duration: "2.5 hours",
      schedule: "Saturdays",
      location: "Maker Space",
      capacity: 14,
      enrolled: 11,
      price: 65,
      features: ["3D Modeling", "Printer Access", "Design Projects"],
      image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg"
    },
    {
      id: 30,
      title: "AI & Machine Learning",
      category: "technology",
      ageGroup: "high",
      description: "Introduction to artificial intelligence concepts and machine learning applications.",
      duration: "4 hours",
      schedule: "Sundays",
      location: "AI Lab",
      capacity: 8,
      enrolled: 6,
      price: 95,
      features: ["AI Concepts", "ML Algorithms", "Real Applications"],
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"
    },

    // Health & Wellness Programs
    {
      id: 31,
      title: "Mindfulness & Meditation",
      category: "wellness",
      ageGroup: "all",
      description: "Stress reduction and mindfulness techniques to promote mental health and emotional well-being.",
      duration: "1 hour",
      schedule: "Daily",
      location: "Wellness Center",
      capacity: 30,
      enrolled: 22,
      price: 25,
      features: ["Stress Relief", "Emotional Balance", "Mindfulness Techniques"],
      image: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg"
    },
    {
      id: 32,
      title: "Nutrition Education",
      category: "wellness",
      ageGroup: "middle",
      description: "Learn about healthy eating habits, meal planning, and the importance of proper nutrition.",
      duration: "2 hours",
      schedule: "Wednesdays",
      location: "Health Center",
      capacity: 25,
      enrolled: 18,
      price: 35,
      features: ["Healthy Eating", "Meal Planning", "Cooking Basics"],
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
    },
    {
      id: 33,
      title: "Fitness & Conditioning",
      category: "wellness",
      ageGroup: "high",
      description: "Comprehensive fitness program focusing on strength training, cardio, and overall physical wellness.",
      duration: "2 hours",
      schedule: "Monday/Wednesday/Friday",
      location: "Fitness Center",
      capacity: 20,
      enrolled: 16,
      price: 50,
      features: ["Strength Training", "Cardio Workouts", "Fitness Planning"],
      image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg"
    },
    {
      id: 34,
      title: "Mental Health Support",
      category: "wellness",
      ageGroup: "all",
      description: "Supportive environment for discussing mental health topics and developing coping strategies.",
      duration: "1.5 hours",
      schedule: "Thursdays",
      location: "Counseling Center",
      capacity: 15,
      enrolled: 10,
      price: 40,
      features: ["Peer Support", "Coping Strategies", "Professional Guidance"],
      image: "https://images.pexels.com/photos/3958464/pexels-photo-3958464.jpeg"
    },
    {
      id: 35,
      title: "Yoga & Flexibility",
      category: "wellness",
      ageGroup: "all",
      description: "Gentle yoga practice focusing on flexibility, balance, and mind-body connection.",
      duration: "1.5 hours",
      schedule: "Tuesday/Thursday",
      location: "Yoga Studio",
      capacity: 25,
      enrolled: 20,
      price: 35,
      features: ["Flexibility Training", "Balance Improvement", "Relaxation Techniques"],
      image: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg"
    },
    {
      id: 36,
      title: "Outdoor Adventure Club",
      category: "wellness",
      ageGroup: "middle",
      description: "Outdoor activities including hiking, camping skills, and nature exploration for physical and mental wellness.",
      duration: "4 hours",
      schedule: "Saturdays",
      location: "Various Outdoor Locations",
      capacity: 18,
      enrolled: 14,
      price: 45,
      features: ["Nature Exploration", "Outdoor Skills", "Adventure Activities"],
      image: "https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg"
    }
  ]

  const categories = [
    { id: 'all', name: 'All Programs', icon: GraduationCap, color: 'bg-blue-600' },
    { id: 'academic', name: 'Academic Support', icon: GraduationCap, color: 'bg-blue-600' },
    { id: 'sports', name: 'Sports & Recreation', icon: Users, color: 'bg-green-600' },
    { id: 'arts', name: 'Arts & Creativity', icon: Heart, color: 'bg-purple-600' },
    { id: 'leadership', name: 'Leadership & Life Skills', icon: Briefcase, color: 'bg-orange-600' },
    { id: 'technology', name: 'Technology', icon: GraduationCap, color: 'bg-indigo-600' },
    { id: 'wellness', name: 'Health & Wellness', icon: Heart, color: 'bg-pink-600' }
  ]

  const ageGroups = [
    { id: 'all', name: 'All Ages' },
    { id: 'elementary', name: 'Elementary (6-10)' },
    { id: 'middle', name: 'Middle School (11-13)' },
    { id: 'high', name: 'High School (14-18)' }
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
                  schedule.includes('friday')
      } else if (selectedDay === 'weekends') {
        dayMatch = schedule.includes('saturday') || schedule.includes('sunday') || 
                  schedule.includes('weekend')
      } else if (selectedDay === 'daily') {
        dayMatch = schedule.includes('daily') || schedule.includes('monday-friday')
      }
    }
    
    return categoryMatch && ageMatch && dayMatch
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#121212' }}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 fade-in-section">
            Our Programs
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto fade-in-section">
            Discover comprehensive programs designed to nurture growth, build skills, and create lasting impact in young lives.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-b">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Category Filter */}
            <div className="fade-in-section">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                Program Category
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {categories.map((category) => {
                  const IconComponent = category.icon
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center p-3 rounded-lg text-left transition-all duration-200 ${
                        selectedCategory === category.id
                          ? `${category.color} text-white shadow-lg transform scale-105`
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <IconComponent className="h-5 w-5 mr-3" />
                      <span className="font-medium">{category.name}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Age Group Filter */}
            <div className="fade-in-section">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Age Group
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {ageGroups.map((ageGroup) => (
                  <button
                    key={ageGroup.id}
                    onClick={() => setSelectedAgeGroup(ageGroup.id)}
                    className={`p-3 rounded-lg text-left transition-all duration-200 ${
                      selectedAgeGroup === ageGroup.id
                        ? 'bg-red-600 text-white shadow-lg transform scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <span className="font-medium">{ageGroup.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Schedule Filter */}
            <div className="fade-in-section">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Schedule
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {days.map((day) => (
                  <button
                    key={day.id}
                    onClick={() => setSelectedDay(day.id)}
                    className={`p-3 rounded-lg text-left transition-all duration-200 ${
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
          <div className="mt-8 text-center fade-in-section">
            <p className="text-lg text-gray-600">
              Showing <span className="font-bold text-blue-600">{filteredPrograms.length}</span> programs
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program, index) => (
              <div
                key={program.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 fade-in-section"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-white bg-opacity-90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      ${program.price}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className={`${categories.find(c => c.id === program.category)?.color || 'bg-blue-600'} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                      {categories.find(c => c.id === program.category)?.name || 'Program'}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{program.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{program.duration} • {program.schedule}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{program.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{program.enrolled}/{program.capacity} enrolled</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {program.features.slice(0, 3).map((feature, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                        >
                          <CheckCircle className="h-3 w-3 mr-1" />
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-600">4.9</span>
                    </div>
                    <button className="bg-red-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors duration-200 flex items-center">
                      Add to Cart
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPrograms.length === 0 && (
            <div className="text-center py-16 fade-in-section">
              <div className="text-gray-400 mb-4">
                <Filter className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No programs found</h3>
              <p className="text-gray-600">Try adjusting your filters to see more programs.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Programs
