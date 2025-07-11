import React, { useState } from 'react'

const Programs = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('all')
  const [selectedDay, setSelectedDay] = useState('all')

  const programs = [
    // Academic Support Programs
    {
      id: 1,
      title: "After-School Tutoring",
      category: "Academic Support",
      ageGroup: "6-18",
      days: "Monday-Friday",
      time: "3:00 PM - 6:00 PM",
      description: "Personalized tutoring sessions to help students excel in core subjects including math, reading, and science.",
      duration: "3 hours",
      schedule: "Monday-Friday",
      enrollment: "18/25 enrolled",
      features: ["Certified Tutors", "Small Groups", "Progress Tracking"],
      rating: 4.9,
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 2,
      title: "College Prep Workshop",
      category: "Academic Support",
      ageGroup: "14-18",
      days: "Saturday",
      time: "10:00 AM - 2:00 PM",
      description: "Comprehensive college preparation including SAT/ACT prep, application assistance, and scholarship guidance.",
      duration: "4 hours",
      schedule: "Saturday",
      enrollment: "12/15 enrolled",
      features: ["SAT/ACT Prep", "Application Help", "Scholarship Guidance"],
      rating: 4.8,
      image: "https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 3,
      title: "Reading & Literacy Circle",
      category: "Academic Support",
      ageGroup: "6-12",
      days: "Tuesday, Thursday",
      time: "4:00 PM - 5:30 PM",
      description: "Interactive reading sessions designed to improve literacy skills and foster a love for reading.",
      duration: "1.5 hours",
      schedule: "Tuesday, Thursday",
      enrollment: "15/20 enrolled",
      features: ["Interactive Sessions", "Reading Skills", "Literacy Focus"],
      rating: 4.7,
      image: "https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 4,
      title: "STEM Learning Lab",
      category: "Academic Support",
      ageGroup: "8-16",
      days: "Wednesday, Friday",
      time: "3:30 PM - 5:30 PM",
      description: "Hands-on science, technology, engineering, and math activities to spark curiosity and learning.",
      duration: "2 hours",
      schedule: "Wednesday, Friday",
      enrollment: "20/25 enrolled",
      features: ["Hands-on Activities", "STEM Focus", "Curiosity Building"],
      rating: 4.9,
      image: "https://images.pexels.com/photos/8471822/pexels-photo-8471822.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 5,
      title: "Study Skills Workshop",
      category: "Academic Support",
      ageGroup: "10-18",
      days: "Monday",
      time: "5:00 PM - 6:30 PM",
      description: "Learn effective study techniques, time management, and organizational skills for academic success.",
      duration: "1.5 hours",
      schedule: "Monday",
      enrollment: "14/18 enrolled",
      features: ["Study Techniques", "Time Management", "Organization Skills"],
      rating: 4.6,
      image: "https://images.pexels.com/photos/5940841/pexels-photo-5940841.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 6,
      title: "Math Mastery Program",
      category: "Academic Support",
      ageGroup: "8-16",
      days: "Tuesday, Thursday",
      time: "3:00 PM - 4:30 PM",
      description: "Focused math instruction and practice to build confidence and competency in mathematics.",
      duration: "1.5 hours",
      schedule: "Tuesday, Thursday",
      enrollment: "16/20 enrolled",
      features: ["Math Focus", "Confidence Building", "Competency Development"],
      rating: 4.8,
      image: "https://images.pexels.com/photos/5940719/pexels-photo-5940719.jpeg?auto=compress&cs=tinysrgb&w=400"
    },

    // Life Skills Programs
    {
      id: 7,
      title: "Financial Literacy Workshop",
      category: "Life Skills",
      ageGroup: "14-18",
      days: "Saturday",
      time: "9:00 AM - 11:00 AM",
      description: "Essential money management skills including budgeting, saving, and understanding credit.",
      duration: "2 hours",
      schedule: "Saturday",
      enrollment: "10/15 enrolled",
      features: ["Money Management", "Budgeting Skills", "Credit Education"],
      rating: 4.7,
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 8,
      title: "Cooking & Nutrition Class",
      category: "Life Skills",
      ageGroup: "10-18",
      days: "Wednesday",
      time: "4:00 PM - 6:00 PM",
      description: "Learn healthy cooking techniques and nutrition basics for lifelong wellness.",
      duration: "2 hours",
      schedule: "Wednesday",
      enrollment: "12/16 enrolled",
      features: ["Healthy Cooking", "Nutrition Education", "Wellness Focus"],
      rating: 4.8,
      image: "https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 9,
      title: "Communication Skills Training",
      category: "Life Skills",
      ageGroup: "12-18",
      days: "Friday",
      time: "3:30 PM - 5:00 PM",
      description: "Develop effective verbal and written communication skills for personal and professional success.",
      duration: "1.5 hours",
      schedule: "Friday",
      enrollment: "14/18 enrolled",
      features: ["Verbal Skills", "Written Communication", "Professional Development"],
      rating: 4.6,
      image: "https://images.pexels.com/photos/5940860/pexels-photo-5940860.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 10,
      title: "Time Management Workshop",
      category: "Life Skills",
      ageGroup: "12-18",
      days: "Thursday",
      time: "4:30 PM - 6:00 PM",
      description: "Learn to prioritize tasks, manage schedules, and balance responsibilities effectively.",
      duration: "1.5 hours",
      schedule: "Thursday",
      enrollment: "11/15 enrolled",
      features: ["Task Prioritization", "Schedule Management", "Responsibility Balance"],
      rating: 4.5,
      image: "https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 11,
      title: "Digital Citizenship Program",
      category: "Life Skills",
      ageGroup: "10-16",
      days: "Monday",
      time: "4:00 PM - 5:30 PM",
      description: "Safe and responsible use of technology, social media awareness, and online etiquette.",
      duration: "1.5 hours",
      schedule: "Monday",
      enrollment: "16/20 enrolled",
      features: ["Technology Safety", "Social Media Awareness", "Online Etiquette"],
      rating: 4.7,
      image: "https://images.pexels.com/photos/5940719/pexels-photo-5940719.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 12,
      title: "Leadership Development",
      category: "Life Skills",
      ageGroup: "14-18",
      days: "Saturday",
      time: "2:00 PM - 4:00 PM",
      description: "Build leadership skills through team projects, public speaking, and community service opportunities.",
      duration: "2 hours",
      schedule: "Saturday",
      enrollment: "13/16 enrolled",
      features: ["Team Projects", "Public Speaking", "Community Service"],
      rating: 4.9,
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400"
    },

    // Career Development Programs
    {
      id: 13,
      title: "Job Readiness Training",
      category: "Career Development",
      ageGroup: "16-18",
      days: "Tuesday, Thursday",
      time: "5:00 PM - 7:00 PM",
      description: "Resume writing, interview skills, and workplace etiquette preparation for first jobs.",
      duration: "2 hours",
      schedule: "Tuesday, Thursday",
      enrollment: "8/12 enrolled",
      features: ["Resume Writing", "Interview Skills", "Workplace Etiquette"],
      rating: 4.8,
      image: "https://images.pexels.com/photos/5940860/pexels-photo-5940860.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 14,
      title: "Entrepreneurship Workshop",
      category: "Career Development",
      ageGroup: "14-18",
      days: "Saturday",
      time: "11:00 AM - 1:00 PM",
      description: "Learn business basics, develop business plans, and explore entrepreneurial opportunities.",
      duration: "2 hours",
      schedule: "Saturday",
      enrollment: "10/14 enrolled",
      features: ["Business Basics", "Business Plans", "Entrepreneurial Skills"],
      rating: 4.7,
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 15,
      title: "Career Exploration Series",
      category: "Career Development",
      ageGroup: "12-18",
      days: "Friday",
      time: "5:30 PM - 7:00 PM",
      description: "Monthly presentations by professionals from various fields to explore career options.",
      duration: "1.5 hours",
      schedule: "Friday",
      enrollment: "18/22 enrolled",
      features: ["Professional Presentations", "Career Options", "Field Exploration"],
      rating: 4.6,
      image: "https://images.pexels.com/photos/5940841/pexels-photo-5940841.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 16,
      title: "Internship Placement Program",
      category: "Career Development",
      ageGroup: "16-18",
      days: "Monday-Friday",
      time: "Flexible",
      description: "Matched internship opportunities with local businesses and organizations.",
      duration: "Flexible",
      schedule: "Monday-Friday",
      enrollment: "6/10 enrolled",
      features: ["Business Matching", "Real Experience", "Professional Mentoring"],
      rating: 4.9,
      image: "https://images.pexels.com/photos/5940719/pexels-photo-5940719.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 17,
      title: "Professional Networking Events",
      category: "Career Development",
      ageGroup: "16-18",
      days: "Monthly",
      time: "6:00 PM - 8:00 PM",
      description: "Connect with professionals, learn about industries, and build professional relationships.",
      duration: "2 hours",
      schedule: "Monthly",
      enrollment: "15/20 enrolled",
      features: ["Professional Connections", "Industry Learning", "Relationship Building"],
      rating: 4.8,
      image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 18,
      title: "Trade Skills Introduction",
      category: "Career Development",
      ageGroup: "14-18",
      days: "Wednesday",
      time: "3:00 PM - 5:00 PM",
      description: "Hands-on introduction to various trade skills including carpentry, plumbing, and electrical work.",
      duration: "2 hours",
      schedule: "Wednesday",
      enrollment: "12/16 enrolled",
      features: ["Hands-on Learning", "Multiple Trades", "Practical Skills"],
      rating: 4.7,
      image: "https://images.pexels.com/photos/5940860/pexels-photo-5940860.jpeg?auto=compress&cs=tinysrgb&w=400"
    },

    // Arts & Creative Programs
    {
      id: 19,
      title: "Music Production Workshop",
      category: "Arts & Creative",
      ageGroup: "12-18",
      days: "Tuesday, Thursday",
      time: "4:00 PM - 6:00 PM",
      description: "Learn music production, recording techniques, and digital audio workstation skills.",
      duration: "2 hours",
      schedule: "Tuesday, Thursday",
      enrollment: "14/18 enrolled",
      features: ["Music Production", "Recording Techniques", "Digital Skills"],
      rating: 4.8,
      image: "https://images.pexels.com/photos/1751731/pexels-photo-1751731.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 20,
      title: "Visual Arts Studio",
      category: "Arts & Creative",
      ageGroup: "8-18",
      days: "Monday, Wednesday",
      time: "3:30 PM - 5:30 PM",
      description: "Explore various art mediums including painting, drawing, sculpture, and digital art.",
      duration: "2 hours",
      schedule: "Monday, Wednesday",
      enrollment: "16/20 enrolled",
      features: ["Multiple Mediums", "Creative Expression", "Artistic Skills"],
      rating: 4.7,
      image: "https://images.pexels.com/photos/1572386/pexels-photo-1572386.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 21,
      title: "Creative Writing Circle",
      category: "Arts & Creative",
      ageGroup: "10-18",
      days: "Friday",
      time: "4:00 PM - 5:30 PM",
      description: "Develop writing skills through poetry, short stories, and collaborative storytelling.",
      duration: "1.5 hours",
      schedule: "Friday",
      enrollment: "12/16 enrolled",
      features: ["Poetry Writing", "Story Development", "Collaborative Work"],
      rating: 4.6,
      image: "https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 22,
      title: "Drama & Theater Program",
      category: "Arts & Creative",
      ageGroup: "8-18",
      days: "Saturday",
      time: "10:00 AM - 12:00 PM",
      description: "Acting workshops, script reading, and full theatrical productions throughout the year.",
      duration: "2 hours",
      schedule: "Saturday",
      enrollment: "18/22 enrolled",
      features: ["Acting Workshops", "Script Reading", "Full Productions"],
      rating: 4.9,
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 23,
      title: "Photography Club",
      category: "Arts & Creative",
      ageGroup: "12-18",
      days: "Wednesday",
      time: "5:00 PM - 6:30 PM",
      description: "Learn photography techniques, photo editing, and develop a portfolio of work.",
      duration: "1.5 hours",
      schedule: "Wednesday",
      enrollment: "10/14 enrolled",
      features: ["Photography Techniques", "Photo Editing", "Portfolio Development"],
      rating: 4.7,
      image: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 24,
      title: "Dance & Movement Class",
      category: "Arts & Creative",
      ageGroup: "6-18",
      days: "Tuesday, Thursday",
      time: "5:30 PM - 7:00 PM",
      description: "Various dance styles including hip-hop, contemporary, and cultural dances.",
      duration: "1.5 hours",
      schedule: "Tuesday, Thursday",
      enrollment: "20/25 enrolled",
      features: ["Multiple Styles", "Cultural Dances", "Movement Expression"],
      rating: 4.8,
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400"
    },

    // Sports & Recreation Programs
    {
      id: 25,
      title: "Basketball League",
      category: "Sports & Recreation",
      ageGroup: "10-18",
      days: "Monday, Wednesday, Friday",
      time: "6:00 PM - 8:00 PM",
      description: "Competitive and recreational basketball leagues for different skill levels.",
      duration: "2 hours",
      schedule: "Monday, Wednesday, Friday",
      enrollment: "22/28 enrolled",
      features: ["Competitive Leagues", "Skill Development", "Team Building"],
      rating: 4.9,
      image: "https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 26,
      title: "Soccer Training Program",
      category: "Sports & Recreation",
      ageGroup: "6-16",
      days: "Tuesday, Thursday",
      time: "4:30 PM - 6:30 PM",
      description: "Soccer skills development, team play, and competitive matches.",
      duration: "2 hours",
      schedule: "Tuesday, Thursday",
      enrollment: "18/24 enrolled",
      features: ["Skills Development", "Team Play", "Competitive Matches"],
      rating: 4.8,
      image: "https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 27,
      title: "Swimming Lessons",
      category: "Sports & Recreation",
      ageGroup: "6-18",
      days: "Saturday",
      time: "9:00 AM - 11:00 AM",
      description: "Swimming instruction for beginners to advanced swimmers, including water safety.",
      duration: "2 hours",
      schedule: "Saturday",
      enrollment: "15/20 enrolled",
      features: ["All Skill Levels", "Water Safety", "Professional Instruction"],
      rating: 4.7,
      image: "https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 28,
      title: "Track & Field Club",
      category: "Sports & Recreation",
      ageGroup: "8-18",
      days: "Monday, Wednesday",
      time: "5:00 PM - 7:00 PM",
      description: "Running, jumping, and throwing events with coaching and competitive opportunities.",
      duration: "2 hours",
      schedule: "Monday, Wednesday",
      enrollment: "14/18 enrolled",
      features: ["Multiple Events", "Professional Coaching", "Competition Prep"],
      rating: 4.6,
      image: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 29,
      title: "Martial Arts Training",
      category: "Sports & Recreation",
      ageGroup: "8-18",
      days: "Tuesday, Thursday",
      time: "6:00 PM - 7:30 PM",
      description: "Discipline, self-defense, and physical fitness through martial arts training.",
      duration: "1.5 hours",
      schedule: "Tuesday, Thursday",
      enrollment: "16/20 enrolled",
      features: ["Self-Defense", "Discipline Training", "Physical Fitness"],
      rating: 4.8,
      image: "https://images.pexels.com/photos/4761663/pexels-photo-4761663.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 30,
      title: "Outdoor Adventure Club",
      category: "Sports & Recreation",
      ageGroup: "10-18",
      days: "Saturday",
      time: "8:00 AM - 4:00 PM",
      description: "Hiking, camping, rock climbing, and outdoor survival skills development.",
      duration: "8 hours",
      schedule: "Saturday",
      enrollment: "12/16 enrolled",
      features: ["Adventure Activities", "Survival Skills", "Nature Connection"],
      rating: 4.9,
      image: "https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=400"
    },

    // Community Service Programs
    {
      id: 31,
      title: "Community Garden Project",
      category: "Community Service",
      ageGroup: "8-18",
      days: "Saturday",
      time: "9:00 AM - 12:00 PM",
      description: "Learn gardening skills while growing fresh produce for local food banks.",
      duration: "3 hours",
      schedule: "Saturday",
      enrollment: "14/18 enrolled",
      features: ["Gardening Skills", "Community Impact", "Fresh Produce"],
      rating: 4.7,
      image: "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 32,
      title: "Senior Center Visits",
      category: "Community Service",
      ageGroup: "12-18",
      days: "Sunday",
      time: "2:00 PM - 4:00 PM",
      description: "Regular visits to local senior centers for companionship and assistance.",
      duration: "2 hours",
      schedule: "Sunday",
      enrollment: "10/15 enrolled",
      features: ["Companionship", "Community Service", "Intergenerational Connection"],
      rating: 4.8,
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 33,
      title: "Environmental Cleanup Initiative",
      category: "Community Service",
      ageGroup: "10-18",
      days: "Monthly",
      time: "10:00 AM - 2:00 PM",
      description: "Organize and participate in neighborhood and park cleanup activities.",
      duration: "4 hours",
      schedule: "Monthly",
      enrollment: "16/20 enrolled",
      features: ["Environmental Impact", "Community Pride", "Team Collaboration"],
      rating: 4.6,
      image: "https://images.pexels.com/photos/2547565/pexels-photo-2547565.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 34,
      title: "Food Bank Volunteer Program",
      category: "Community Service",
      ageGroup: "12-18",
      days: "Wednesday",
      time: "4:00 PM - 6:00 PM",
      description: "Sort, pack, and distribute food to families in need through local food banks.",
      duration: "2 hours",
      schedule: "Wednesday",
      enrollment: "12/16 enrolled",
      features: ["Food Distribution", "Community Support", "Volunteer Experience"],
      rating: 4.7,
      image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 35,
      title: "Peer Mentoring Program",
      category: "Community Service",
      ageGroup: "14-18",
      days: "Tuesday, Thursday",
      time: "3:00 PM - 4:30 PM",
      description: "Older youth mentor younger participants in academics and life skills.",
      duration: "1.5 hours",
      schedule: "Tuesday, Thursday",
      enrollment: "8/12 enrolled",
      features: ["Peer Support", "Academic Help", "Life Skills Mentoring"],
      rating: 4.8,
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 36,
      title: "Community Event Planning",
      category: "Community Service",
      ageGroup: "14-18",
      days: "Friday",
      time: "5:00 PM - 7:00 PM",
      description: "Plan and execute community events, fundraisers, and awareness campaigns.",
      duration: "2 hours",
      schedule: "Friday",
      enrollment: "10/14 enrolled",
      features: ["Event Planning", "Fundraising", "Campaign Management"],
      rating: 4.7,
      image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ]

  const categories = ['all', 'Academic Support', 'Life Skills', 'Career Development', 'Arts & Creative', 'Sports & Recreation', 'Community Service']
  const ageGroups = ['all', '6-12', '8-16', '10-18', '12-18', '14-18', '16-18']
  const days = ['all', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday-Friday', 'Monthly']

  const filteredPrograms = programs.filter(program => {
    const categoryMatch = selectedCategory === 'all' || program.category === selectedCategory
    const ageMatch = selectedAgeGroup === 'all' || program.ageGroup.includes(selectedAgeGroup.split('-')[0]) || program.ageGroup.includes(selectedAgeGroup.split('-')[1])
    const dayMatch = selectedDay === 'all' || program.days.includes(selectedDay)
    
    return categoryMatch && ageMatch && dayMatch
  })

  const getCategoryColor = (category) => {
    const colors = {
      'Academic Support': 'bg-blue-100 text-blue-800',
      'Life Skills': 'bg-green-100 text-green-800',
      'Career Development': 'bg-purple-100 text-purple-800',
      'Arts & Creative': 'bg-pink-100 text-pink-800',
      'Sports & Recreation': 'bg-orange-100 text-orange-800',
      'Community Service': 'bg-red-100 text-red-800'
    }
    return colors[category] || 'bg-gray-100 text-gray-800'
  }

  const getFilterButtonColor = (filterType, value, selected) => {
    if (selected) {
      const colors = {
        category: {
          'Academic Support': 'bg-blue-600 text-white',
          'Life Skills': 'bg-green-600 text-white',
          'Career Development': 'bg-purple-600 text-white',
          'Arts & Creative': 'bg-pink-600 text-white',
          'Sports & Recreation': 'bg-orange-600 text-white',
          'Community Service': 'bg-red-600 text-white',
          'all': 'bg-gray-800 text-white'
        }
      }
      return colors[filterType]?.[value] || 'bg-gray-800 text-white'
    }
    return 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
  }

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0
    const stars = []

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
        </svg>
      )
    }

    if (hasHalfStar) {
      stars.push(
        <svg key="half" className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
          <defs>
            <linearGradient id="half">
              <stop offset="50%" stopColor="currentColor"/>
              <stop offset="50%" stopColor="transparent"/>
            </linearGradient>
          </defs>
          <path fill="url(#half)" d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
        </svg>
      )
    }

    return stars
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="bg-[#121212] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Our Programs</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up">
            Discover comprehensive programs designed to empower youth through education, skill development, and community engagement.
          </p>
        </div>
      </div>

      {/* Filter Section - Three Column Layout */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Find the Perfect Program</h2>
          
          {/* Three Column Filter Layout */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Category Filters */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Program Categories</h3>
              <div className="grid grid-cols-1 gap-3">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 text-left ${
                      getFilterButtonColor('category', category, selectedCategory === category)
                    }`}
                  >
                    {category === 'all' ? 'All Programs' : category}
                  </button>
                ))}
              </div>
            </div>

            {/* Age Group Filters */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Age Groups</h3>
              <div className="grid grid-cols-1 gap-3">
                {ageGroups.map(age => (
                  <button
                    key={age}
                    onClick={() => setSelectedAgeGroup(age)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 text-left ${
                      selectedAgeGroup === age 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {age === 'all' ? 'All Ages' : age}
                  </button>
                ))}
              </div>
            </div>

            {/* Day Filters */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Schedule</h3>
              <div className="grid grid-cols-1 gap-3">
                {days.map(day => (
                  <button
                    key={day}
                    onClick={() => setSelectedDay(day)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 text-left ${
                      selectedDay === day 
                        ? 'bg-green-600 text-white' 
                        : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {day === 'all' ? 'Any Day' : day}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Programs Grid */}
      <div className="py-16" style={{backgroundColor: '#1E1F20'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-white">
              {filteredPrograms.length} Program{filteredPrograms.length !== 1 ? 's' : ''} Available
            </h2>
            <div className="text-sm text-gray-300">
              Showing {selectedCategory === 'all' ? 'all categories' : selectedCategory.toLowerCase()}
              {selectedAgeGroup !== 'all' && ` • Ages ${selectedAgeGroup}`}
              {selectedDay !== 'all' && ` • ${selectedDay}`}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.map((program, index) => (
              <div 
                key={program.id} 
                className="rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in border border-gray-600"
                style={{backgroundColor: '#121212', animationDelay: `${index * 0.1}s`}}
              >
                <div className="relative">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(program.category)}`}>
                      {program.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="bg-white bg-opacity-90 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                      Ages {program.ageGroup}
                    </span>
                  </div>
                </div>
                
                <div className="p-5">
                  {/* 1. Main Heading */}
                  <h3 className="text-lg font-bold text-white mb-2">{program.title}</h3>
                  
                  {/* 2. Summarized Subheading Description */}
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{program.description}</p>
                  
                  {/* 3. Three Bullet Points */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-400">
                      <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-medium">{program.duration}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="font-medium">{program.schedule}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <svg className="w-4 h-4 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <span className="font-medium">{program.enrollment}</span>
                    </div>
                  </div>
                  
                  {/* 4. Three Features/Benefits */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {program.features.map((feature, idx) => (
                        <span 
                          key={idx}
                          className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-700 text-gray-200"
                        >
                          <svg className="w-3 h-3 mr-1 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* 5. Star Rating */}
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {renderStars(program.rating)}
                    </div>
                    <span className="ml-2 text-sm font-medium text-gray-300">{program.rating}</span>
                  </div>
                  
                  {/* 6. Add to Cart Button */}
                  <button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-2.5 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredPrograms.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.5-.816-6.207-2.175.193-.39.398-.774.618-1.15A4.978 4.978 0 0112 13.5c2.34 0 4.5-.816 6.207-2.175-.193-.39-.398-.774-.618-1.15A4.978 4.978 0 0112 11.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-300 mb-2">No programs found</h3>
              <p className="text-gray-400 mb-4">Try adjusting your filters to see more programs.</p>
              <button 
                onClick={() => {
                  setSelectedCategory('all')
                  setSelectedAgeGroup('all')
                  setSelectedDay('all')
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-300"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Support Our Programs Section */}
      <div className="py-16 bg-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 animate-fade-in">Support Our Programs</h2>
          <p className="text-xl mb-8 animate-slide-up">
            Your donation helps us provide these life-changing programs to youth in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <a 
              href="/get-involved#donation" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Make a Donation
            </a>
            <a 
              href="/get-involved" 
              className="bg-white hover:bg-gray-100 text-blue-800 px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Get Involved
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Programs
