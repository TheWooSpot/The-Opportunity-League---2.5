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

  const categories = [
    { id: 'all', name: 'All Programs', icon: '🎯' },
    { id: 'career', name: 'Career Development', icon: '💼' },
    { id: 'youth', name: 'Youth Programs', icon: '🌟' },
    { id: 'education', name: 'Education & Tutoring', icon: '📚' },
    { id: 'sports', name: 'Sports & Recreation', icon: '⚽' },
    { id: 'arts', name: 'Arts & Creative', icon: '🎨' },
    { id: 'community', name: 'Community Support', icon: '🤝' }
  ]

  const ageGroups = [
    { id: 'all', name: 'All Ages' },
    { id: 'elementary', name: 'Elementary (5-10)' },
    { id: 'middle', name: 'Middle School (11-13)' },
    { id: 'high', name: 'High School (14-18)' },
    { id: 'young-adult', name: 'Young Adults (18-25)' },
    { id: 'adult', name: 'Adults (25+)' }
  ]

  const days = [
    { id: 'all', name: 'All Days' },
    { id: 'monday', name: 'Monday' },
    { id: 'tuesday', name: 'Tuesday' },
    { id: 'wednesday', name: 'Wednesday' },
    { id: 'thursday', name: 'Thursday' },
    { id: 'friday', name: 'Friday' },
    { id: 'saturday', name: 'Saturday' },
    { id: 'sunday', name: 'Sunday' },
    { id: 'weekdays', name: 'Weekdays' },
    { id: 'weekends', name: 'Weekends' }
  ]

  const programs = [
    // CAREER DEVELOPMENT PROGRAMS (6 total)
    {
      id: 1,
      category: 'career',
      title: 'Career Training & Development',
      description: 'Comprehensive programs designed to equip individuals with in-demand skills and certifications for today\'s job market.',
      features: [
        'Industry-recognized certifications',
        'Hands-on training with modern equipment',
        'Job placement assistance',
        'Ongoing career support'
      ],
      duration: '6-12 months',
      participants: '200+ annually',
      ageGroup: 'young-adult',
      days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
      time: '9:00 AM - 3:00 PM',
      location: 'Main Training Center',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true
    },
    {
      id: 2,
      category: 'career',
      title: 'Professional Development Workshop',
      description: 'Advanced training for working professionals looking to advance their careers and develop new skills.',
      features: [
        'Executive coaching',
        'Professional networking events',
        'Skills assessment and development',
        'Industry-specific training'
      ],
      duration: '3-6 months',
      participants: '100+ professionals',
      ageGroup: 'adult',
      days: ['tuesday', 'thursday'],
      time: '6:00 PM - 8:00 PM',
      location: 'Professional Development Center',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 13,
      category: 'career',
      title: 'Digital Skills Bootcamp',
      description: 'Intensive training in digital literacy, computer skills, and online tools essential for modern workplace success.',
      features: [
        'Microsoft Office certification',
        'Social media marketing',
        'Basic web development',
        'Digital communication skills'
      ],
      duration: '8 weeks',
      participants: '75+ graduates',
      ageGroup: 'young-adult',
      days: ['monday', 'wednesday', 'friday'],
      time: '10:00 AM - 2:00 PM',
      location: 'Technology Center',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 14,
      category: 'career',
      title: 'Financial Literacy & Entrepreneurship',
      description: 'Comprehensive program teaching financial management, business planning, and entrepreneurial skills for economic empowerment.',
      features: [
        'Personal finance management',
        'Business plan development',
        'Credit building strategies',
        'Investment basics'
      ],
      duration: '12 weeks',
      participants: '60+ entrepreneurs',
      ageGroup: 'adult',
      days: ['saturday'],
      time: '9:00 AM - 1:00 PM',
      location: 'Business Development Center',
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 25,
      category: 'career',
      title: 'Healthcare Career Pathway',
      description: 'Specialized training program preparing individuals for careers in healthcare with certifications and clinical experience.',
      features: [
        'Medical assistant certification',
        'CPR and first aid training',
        'Clinical internship placement',
        'Healthcare industry networking'
      ],
      duration: '9 months',
      participants: '40+ healthcare professionals',
      ageGroup: 'young-adult',
      days: ['tuesday', 'thursday', 'saturday'],
      time: '8:00 AM - 4:00 PM',
      location: 'Healthcare Training Center',
      image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 26,
      category: 'career',
      title: 'Construction & Trades Academy',
      description: 'Hands-on training in construction trades including carpentry, electrical, plumbing, and HVAC with apprenticeship opportunities.',
      features: [
        'Multiple trade certifications',
        'Safety training and OSHA compliance',
        'Apprenticeship program connections',
        'Tool and equipment training'
      ],
      duration: '6 months',
      participants: '80+ skilled tradespeople',
      ageGroup: 'young-adult',
      days: ['monday', 'wednesday', 'friday'],
      time: '7:00 AM - 3:00 PM',
      location: 'Trades Training Facility',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800'
    },

    // YOUTH PROGRAMS (6 total)
    {
      id: 3,
      category: 'youth',
      title: 'Youth Leadership Academy',
      description: 'Empowering young people with leadership skills, academic support, and mentorship opportunities.',
      features: [
        'Academic tutoring and support',
        'Leadership development workshops',
        'Peer mentoring programs',
        'College and career readiness'
      ],
      duration: 'Year-round',
      participants: '150+ youth served',
      ageGroup: 'high',
      days: ['monday', 'wednesday', 'friday'],
      time: '4:00 PM - 6:00 PM',
      location: 'Youth Center',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true
    },
    {
      id: 9,
      category: 'youth',
      title: 'Teen Entrepreneurship Program',
      description: 'Business development program teaching young entrepreneurs how to start and manage their own ventures.',
      features: [
        'Business plan development',
        'Financial literacy',
        'Marketing strategies',
        'Mentorship from local business owners'
      ],
      duration: '4 months',
      participants: '40+ teen entrepreneurs',
      ageGroup: 'high',
      days: ['saturday'],
      time: '10:00 AM - 2:00 PM',
      location: 'Business Incubator',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 15,
      category: 'youth',
      title: 'Youth Mentorship Circle',
      description: 'One-on-one and group mentoring program connecting youth with positive adult role models and peer support networks.',
      features: [
        'Individual mentor matching',
        'Group mentoring sessions',
        'Life skills workshops',
        'Goal setting and achievement'
      ],
      duration: '6 months',
      participants: '80+ mentees',
      ageGroup: 'middle',
      days: ['tuesday', 'thursday'],
      time: '4:30 PM - 6:00 PM',
      location: 'Mentorship Center',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 16,
      category: 'youth',
      title: 'College Prep & Scholarship Program',
      description: 'Comprehensive college preparation including SAT/ACT prep, application assistance, and scholarship guidance.',
      features: [
        'Standardized test preparation',
        'College application support',
        'Scholarship search and applications',
        'Financial aid guidance'
      ],
      duration: '10 months',
      participants: '50+ college-bound students',
      ageGroup: 'high',
      days: ['tuesday', 'thursday', 'saturday'],
      time: '3:00 PM - 5:00 PM',
      location: 'Academic Success Center',
      image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 27,
      category: 'youth',
      title: 'Youth Environmental Stewards',
      description: 'Environmental education and conservation program teaching youth about sustainability and environmental responsibility.',
      features: [
        'Environmental science education',
        'Community garden projects',
        'Recycling and waste reduction',
        'Nature conservation activities'
      ],
      duration: '8 months',
      participants: '65+ young environmentalists',
      ageGroup: 'middle',
      days: ['wednesday', 'saturday'],
      time: '3:00 PM - 5:00 PM',
      location: 'Environmental Learning Center',
      image: 'https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 28,
      category: 'youth',
      title: 'Youth Civic Engagement Program',
      description: 'Civics education program teaching youth about government, democracy, and community involvement through hands-on experiences.',
      features: [
        'Government and civics education',
        'Mock trial and debate teams',
        'Community service projects',
        'Youth council participation'
      ],
      duration: '6 months',
      participants: '45+ civic leaders',
      ageGroup: 'high',
      days: ['monday', 'friday'],
      time: '4:00 PM - 6:00 PM',
      location: 'Civic Education Center',
      image: 'https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=800'
    },

    // EDUCATION & TUTORING PROGRAMS (6 total)
    {
      id: 5,
      category: 'education',
      title: 'After-School Tutoring Program',
      description: 'Comprehensive academic support helping students excel in core subjects with personalized attention.',
      features: [
        'Math and Science tutoring',
        'Reading and writing support',
        'Homework assistance',
        'Test preparation'
      ],
      duration: 'School year',
      participants: '80+ students',
      ageGroup: 'elementary',
      days: ['monday', 'tuesday', 'wednesday', 'thursday'],
      time: '3:30 PM - 5:30 PM',
      location: 'Learning Center',
      image: 'https://images.pexels.com/photos/8471781/pexels-photo-8471781.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 8,
      category: 'education',
      title: 'STEM Explorers Club',
      description: 'Interactive science, technology, engineering, and math program with hands-on experiments and projects.',
      features: [
        'Robotics and coding',
        'Science experiments',
        'Engineering challenges',
        'Math competitions'
      ],
      duration: 'Year-round',
      participants: '90+ students',
      ageGroup: 'middle',
      days: ['monday', 'wednesday'],
      time: '4:00 PM - 6:00 PM',
      location: 'STEM Lab',
      image: 'https://images.pexels.com/photos/8471709/pexels-photo-8471709.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 17,
      category: 'education',
      title: 'Adult Education & GED Prep',
      description: 'Comprehensive adult education program helping individuals earn their GED and develop essential academic skills.',
      features: [
        'GED test preparation',
        'Basic math and reading skills',
        'English as Second Language (ESL)',
        'Computer literacy training'
      ],
      duration: '6-12 months',
      participants: '45+ adult learners',
      ageGroup: 'adult',
      days: ['tuesday', 'thursday'],
      time: '6:00 PM - 8:30 PM',
      location: 'Adult Learning Center',
      image: 'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 18,
      category: 'education',
      title: 'Summer Learning Academy',
      description: 'Intensive summer program preventing learning loss while making education fun through hands-on activities and field trips.',
      features: [
        'Core subject reinforcement',
        'Educational field trips',
        'Creative learning projects',
        'Reading incentive programs'
      ],
      duration: '6 weeks',
      participants: '120+ summer scholars',
      ageGroup: 'elementary',
      days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
      time: '9:00 AM - 1:00 PM',
      location: 'Summer Campus',
      image: 'https://images.pexels.com/photos/8471709/pexels-photo-8471709.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 29,
      category: 'education',
      title: 'Early Childhood Development',
      description: 'Comprehensive early learning program for preschoolers focusing on school readiness and developmental milestones.',
      features: [
        'Pre-K curriculum and activities',
        'Social and emotional development',
        'Parent education workshops',
        'Kindergarten transition support'
      ],
      duration: '9 months',
      participants: '60+ preschoolers',
      ageGroup: 'elementary',
      days: ['monday', 'wednesday', 'friday'],
      time: '9:00 AM - 12:00 PM',
      location: 'Early Learning Center',
      image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 30,
      category: 'education',
      title: 'Special Needs Learning Support',
      description: 'Specialized educational support for students with learning differences and developmental disabilities.',
      features: [
        'Individualized education plans',
        'Adaptive learning technologies',
        'Behavioral support strategies',
        'Family counseling and resources'
      ],
      duration: 'Year-round',
      participants: '35+ special needs students',
      ageGroup: 'elementary',
      days: ['tuesday', 'thursday'],
      time: '10:00 AM - 2:00 PM',
      location: 'Special Education Center',
      image: 'https://images.pexels.com/photos/8613092/pexels-photo-8613092.jpeg?auto=compress&cs=tinysrgb&w=800'
    },

    // SPORTS & RECREATION PROGRAMS (6 total)
    {
      id: 6,
      category: 'sports',
      title: 'Youth Basketball League',
      description: 'Competitive and recreational basketball program teaching teamwork, discipline, and athletic skills.',
      features: [
        'Skill development training',
        'Team competition',
        'Character building',
        'Physical fitness'
      ],
      duration: '3 months per season',
      participants: '120+ athletes',
      ageGroup: 'middle',
      days: ['tuesday', 'thursday', 'saturday'],
      time: '5:00 PM - 7:00 PM',
      location: 'Sports Complex',
      image: 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true
    },
    {
      id: 10,
      category: 'sports',
      title: 'Summer Sports Camp',
      description: 'Multi-sport summer program combining athletics with character development and leadership training.',
      features: [
        'Multiple sports activities',
        'Swimming and water sports',
        'Team building exercises',
        'Healthy lifestyle education'
      ],
      duration: '8 weeks',
      participants: '200+ campers',
      ageGroup: 'elementary',
      days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
      time: '9:00 AM - 3:00 PM',
      location: 'Recreation Center',
      image: 'https://images.pexels.com/photos/296301/pexels-photo-296301.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 19,
      category: 'sports',
      title: 'Fitness & Wellness Program',
      description: 'Comprehensive health and fitness program promoting physical wellness, nutrition education, and healthy lifestyle choices.',
      features: [
        'Personal fitness training',
        'Nutrition workshops',
        'Mental health awareness',
        'Group fitness classes'
      ],
      duration: '12 weeks',
      participants: '85+ participants',
      ageGroup: 'young-adult',
      days: ['monday', 'wednesday', 'friday'],
      time: '6:00 PM - 7:30 PM',
      location: 'Wellness Center',
      image: 'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 20,
      category: 'sports',
      title: 'Adaptive Sports Program',
      description: 'Inclusive sports program designed for youth with disabilities, promoting inclusion, confidence, and athletic achievement.',
      features: [
        'Adaptive equipment training',
        'Inclusive team sports',
        'Individual skill development',
        'Peer support networks'
      ],
      duration: 'Year-round',
      participants: '35+ adaptive athletes',
      ageGroup: 'middle',
      days: ['saturday', 'sunday'],
      time: '10:00 AM - 12:00 PM',
      location: 'Adaptive Sports Center',
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 31,
      category: 'sports',
      title: 'Youth Soccer Development League',
      description: 'Comprehensive soccer program focusing on skill development, teamwork, and competitive play for all skill levels.',
      features: [
        'Professional coaching staff',
        'Age-appropriate skill training',
        'League competition games',
        'Character and leadership development'
      ],
      duration: '4 months per season',
      participants: '150+ soccer players',
      ageGroup: 'elementary',
      days: ['tuesday', 'thursday', 'saturday'],
      time: '4:00 PM - 6:00 PM',
      location: 'Soccer Fields Complex',
      image: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 32,
      category: 'sports',
      title: 'Martial Arts & Self-Defense',
      description: 'Traditional martial arts training combined with practical self-defense skills, emphasizing discipline and respect.',
      features: [
        'Traditional martial arts forms',
        'Self-defense techniques',
        'Discipline and respect training',
        'Belt ranking system'
      ],
      duration: 'Year-round',
      participants: '70+ martial artists',
      ageGroup: 'middle',
      days: ['monday', 'wednesday', 'friday'],
      time: '5:00 PM - 6:30 PM',
      location: 'Martial Arts Dojo',
      image: 'https://images.pexels.com/photos/7045617/pexels-photo-7045617.jpeg?auto=compress&cs=tinysrgb&w=800'
    },

    // ARTS & CREATIVE PROGRAMS (6 total)
    {
      id: 7,
      category: 'arts',
      title: 'Creative Arts Workshop',
      description: 'Hands-on arts program fostering creativity through painting, drawing, sculpture, and digital media.',
      features: [
        'Multiple art mediums',
        'Professional instruction',
        'Art exhibitions',
        'Portfolio development'
      ],
      duration: '6 months',
      participants: '60+ young artists',
      ageGroup: 'high',
      days: ['wednesday', 'friday'],
      time: '4:00 PM - 6:00 PM',
      location: 'Arts Studio',
      image: 'https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 11,
      category: 'arts',
      title: 'Music & Performance Academy',
      description: 'Comprehensive music program offering instrument lessons, vocal training, and performance opportunities.',
      features: [
        'Individual and group lessons',
        'Multiple instruments available',
        'Vocal training and choir',
        'Public performances'
      ],
      duration: 'Year-round',
      participants: '75+ musicians',
      ageGroup: 'middle',
      days: ['tuesday', 'thursday', 'saturday'],
      time: '3:00 PM - 5:00 PM',
      location: 'Music Center',
      image: 'https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 21,
      category: 'arts',
      title: 'Drama & Theater Workshop',
      description: 'Dynamic theater program developing confidence, public speaking skills, and creative expression through dramatic arts.',
      features: [
        'Acting and improvisation',
        'Script writing workshops',
        'Stage production experience',
        'Public speaking development'
      ],
      duration: '4 months',
      participants: '40+ young actors',
      ageGroup: 'high',
      days: ['monday', 'wednesday'],
      time: '4:30 PM - 6:30 PM',
      location: 'Theater Arts Center',
      image: 'https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 22,
      category: 'arts',
      title: 'Digital Media & Photography',
      description: 'Modern creative program teaching digital photography, video production, and multimedia storytelling skills.',
      features: [
        'Digital photography techniques',
        'Video editing and production',
        'Social media content creation',
        'Portfolio development'
      ],
      duration: '8 weeks',
      participants: '50+ digital creators',
      ageGroup: 'high',
      days: ['tuesday', 'friday'],
      time: '4:00 PM - 6:00 PM',
      location: 'Digital Media Lab',
      image: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 33,
      category: 'arts',
      title: 'Youth Dance Academy',
      description: 'Comprehensive dance program offering multiple styles from hip-hop to ballet, building confidence and artistic expression.',
      features: [
        'Multiple dance styles training',
        'Performance opportunities',
        'Choreography workshops',
        'Annual dance showcase'
      ],
      duration: '9 months',
      participants: '80+ dancers',
      ageGroup: 'middle',
      days: ['monday', 'wednesday', 'friday'],
      time: '4:00 PM - 5:30 PM',
      location: 'Dance Studio',
      image: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 34,
      category: 'arts',
      title: 'Creative Writing & Journalism',
      description: 'Writing program developing storytelling skills, journalism techniques, and creative expression through various literary forms.',
      features: [
        'Creative writing workshops',
        'Journalism and reporting skills',
        'Poetry and storytelling',
        'Student publication creation'
      ],
      duration: '6 months',
      participants: '35+ young writers',
      ageGroup: 'high',
      days: ['tuesday', 'thursday'],
      time: '4:00 PM - 5:30 PM',
      location: 'Writing Center',
      image: 'https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=800'
    },

    // COMMUNITY SUPPORT PROGRAMS (6 total)
    {
      id: 4,
      category: 'community',
      title: 'Community Outreach Services',
      description: 'Comprehensive support services addressing basic needs and connecting families to essential resources.',
      features: [
        'Emergency assistance programs',
        'Resource navigation services',
        'Community health initiatives',
        'Family support services'
      ],
      duration: 'Ongoing',
      participants: '500+ families served',
      ageGroup: 'adult',
      days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
      time: '8:00 AM - 5:00 PM',
      location: 'Community Resource Center',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 12,
      category: 'community',
      title: 'Family Support Services',
      description: 'Holistic family support including counseling, resource assistance, and parenting workshops.',
      features: [
        'Family counseling services',
        'Parenting workshops',
        'Emergency assistance',
        'Resource referrals'
      ],
      duration: 'Ongoing',
      participants: '300+ families',
      ageGroup: 'adult',
      days: ['monday', 'wednesday', 'friday'],
      time: '9:00 AM - 5:00 PM',
      location: 'Family Services Center',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 23,
      category: 'community',
      title: 'Senior Citizen Engagement Program',
      description: 'Intergenerational program connecting seniors with youth while providing essential services and social engagement.',
      features: [
        'Technology assistance',
        'Social activities and events',
        'Health and wellness checks',
        'Intergenerational mentoring'
      ],
      duration: 'Year-round',
      participants: '150+ seniors',
      ageGroup: 'adult',
      days: ['tuesday', 'thursday'],
      time: '10:00 AM - 2:00 PM',
      location: 'Senior Community Center',
      image: 'https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 24,
      category: 'community',
      title: 'Food Security & Nutrition Program',
      description: 'Comprehensive food assistance program including food pantry, nutrition education, and community garden initiatives.',
      features: [
        'Weekly food distribution',
        'Nutrition education workshops',
        'Community garden participation',
        'Cooking classes and meal planning'
      ],
      duration: 'Ongoing',
      participants: '400+ families served',
      ageGroup: 'adult',
      days: ['wednesday', 'saturday'],
      time: '9:00 AM - 3:00 PM',
      location: 'Community Kitchen & Garden',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 35,
      category: 'community',
      title: 'Housing & Homelessness Support',
      description: 'Comprehensive housing assistance program providing emergency shelter, transitional housing, and permanent housing solutions.',
      features: [
        'Emergency shelter services',
        'Transitional housing programs',
        'Housing search assistance',
        'Financial counseling and budgeting'
      ],
      duration: 'Ongoing',
      participants: '200+ individuals housed',
      ageGroup: 'adult',
      days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
      time: '24/7 Emergency Services',
      location: 'Housing Services Center',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 36,
      category: 'community',
      title: 'Mental Health & Wellness Support',
      description: 'Community mental health program providing counseling, support groups, and wellness resources for individuals and families.',
      features: [
        'Individual and group counseling',
        'Crisis intervention services',
        'Support group facilitation',
        'Mental health education workshops'
      ],
      duration: 'Ongoing',
      participants: '250+ individuals served',
      ageGroup: 'adult',
      days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
      time: '9:00 AM - 6:00 PM',
      location: 'Mental Health Center',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ]

  // Filter programs based on selected criteria
  const filteredPrograms = programs.filter(program => {
    const categoryMatch = selectedCategory === 'all' || program.category === selectedCategory
    const ageMatch = selectedAgeGroup === 'all' || program.ageGroup === selectedAgeGroup
    const dayMatch = selectedDay === 'all' || 
      program.days.includes(selectedDay) ||
      (selectedDay === 'weekdays' && program.days.some(day => ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'].includes(day))) ||
      (selectedDay === 'weekends' && program.days.some(day => ['saturday', 'sunday'].includes(day)))
    
    return categoryMatch && ageMatch && dayMatch
  })

  const successStories = [
    {
      name: 'Marcus Thompson',
      program: 'Career Training',
      story: 'After completing our IT certification program, Marcus landed a position as a network administrator, increasing his income by 150%.',
      image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Aisha Williams',
      program: 'Youth Leadership Academy',
      story: 'Through our mentorship program, Aisha developed leadership skills and is now attending college on a full scholarship.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Carlos Rodriguez',
      program: 'Teen Entrepreneurship',
      story: 'Carlos launched his own landscaping business at 17 and now employs three other teens from our program.',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#121212] text-white section-padding">
        <div className="container-max text-center">
          <h1 className="section-title text-white mb-6 animate-fade-in-up">
            Our Programs
          </h1>
          <p className="section-subtitle text-gray-300 max-w-3xl mx-auto animate-fade-in-up-delay-1">
            Comprehensive programs designed to create opportunities, build skills, and transform lives in our community.
          </p>
        </div>
      </section>

      {/* Filter Section - THREE COLUMN LAYOUT */}
      <section className="bg-white py-8 border-b fade-in-section">
        <div className="container-max">
          <div className="flex items-center gap-4 mb-8">
            <Filter className="h-5 w-5 text-blue-800" />
            <h3 className="text-lg font-semibold text-blue-800">Filter Programs</h3>
          </div>
          
          {/* THREE COLUMN GRID LAYOUT */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Category Filter - Column 1 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">Program Category</label>
              <div className="flex flex-wrap gap-3">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-blue-800 text-white shadow-lg transform scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:transform hover:scale-105'
                    }`}
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Age Group Filter - Column 2 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">Age Group</label>
              <div className="flex flex-wrap gap-3">
                {ageGroups.map(age => (
                  <button
                    key={age.id}
                    onClick={() => setSelectedAgeGroup(age.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedAgeGroup === age.id
                        ? 'bg-red-600 text-white shadow-lg transform scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:transform hover:scale-105'
                    }`}
                  >
                    {age.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Day Filter - Column 3 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">Days Available</label>
              <div className="flex flex-wrap gap-3">
                {days.map(day => (
                  <button
                    key={day.id}
                    onClick={() => setSelectedDay(day.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedDay === day.id
                        ? 'bg-green-600 text-white shadow-lg transform scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:transform hover:scale-105'
                    }`}
                  >
                    {day.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <div className="text-sm text-blue-800 font-medium">
              Showing {filteredPrograms.length} of {programs.length} programs
            </div>
            <div className="text-xs text-blue-600 mt-1">
              {selectedCategory !== 'all' && `Category: ${categories.find(c => c.id === selectedCategory)?.name} • `}
              {selectedAgeGroup !== 'all' && `Age: ${ageGroups.find(a => a.id === selectedAgeGroup)?.name} • `}
              {selectedDay !== 'all' && `Days: ${days.find(d => d.id === selectedDay)?.name}`}
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="section-padding fade-in-section">
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
                </div>
                
                <div className="p-6">
                  <h3 className="feature-title mb-3">
                    {program.title}
                  </h3>
                  <p className="body-text mb-4">
                    {program.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                      <span>{program.days.slice(0, 2).map(day => day.charAt(0).toUpperCase() + day.slice(1)).join(', ')}{program.days.length > 2 ? ` +${program.days.length - 2} more` : ''}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2 text-blue-600" />
                      <span>{program.time}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                      <span>{program.location}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {program.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex justify-between items-center pt-4 border-t">
                    <div>
                      <p className="text-xs text-gray-500">Duration</p>
                      <p className="text-sm font-semibold text-blue-800">{program.duration}</p>
                    </div>
                    <button className="btn-primary text-sm px-4 py-2 inline-flex items-center">
                      Learn More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPrograms.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Filter className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No programs found</h3>
              <p className="text-gray-500">Try adjusting your filters to see more programs.</p>
            </div>
          )}
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-gray-50 section-padding fade-in-section">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">
              Success Stories
            </h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Real transformations from real people who have participated in our programs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="card p-8 animate-card-hover" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-16 h-16 rounded-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div>
                    <h3 className="feature-title">{story.name}</h3>
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

      {/* CTA Section */}
      <section className="bg-blue-800 text-white section-padding fade-in-section">
        <div className="container-max text-center">
          <h2 className="section-title text-white mb-6 animate-fade-in-up">
            Ready to Get Started?
          </h2>
          <p className="section-subtitle text-blue-100 mb-8 max-w-2xl mx-auto animate-fade-in-up-delay-1">
            Take the first step towards transforming your life. Our programs are designed to meet you where you are and help you reach your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-2">
            <button className="btn-primary bg-red-600 hover:bg-red-700">
              Apply Now
            </button>
            <button className="btn-outline">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Programs
