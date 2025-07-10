import React, { useState } from 'react';

const Programs = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const programs = [
    // Academic Support
    { name: 'Tutoring Services', category: 'Academic Support', description: 'One-on-one and group tutoring in core subjects' },
    { name: 'Homework Help', category: 'Academic Support', description: 'After-school homework assistance and study support' },
    { name: 'College Prep', category: 'Academic Support', description: 'SAT/ACT preparation and college application guidance' },
    { name: 'Study Skills Workshop', category: 'Academic Support', description: 'Teaching effective study techniques and time management' },
    { name: 'Reading Comprehension', category: 'Academic Support', description: 'Improving reading skills and literacy development' },
    { name: 'Math Excellence', category: 'Academic Support', description: 'Advanced mathematics support and problem-solving skills' },

    // Life Skills
    { name: 'Financial Literacy', category: 'Life Skills', description: 'Teaching budgeting, saving, and financial responsibility' },
    { name: 'Communication Skills', category: 'Life Skills', description: 'Public speaking, presentation, and interpersonal skills' },
    { name: 'Time Management', category: 'Life Skills', description: 'Organization and productivity techniques for success' },
    { name: 'Digital Literacy', category: 'Life Skills', description: 'Computer skills and digital citizenship education' },
    { name: 'Critical Thinking', category: 'Life Skills', description: 'Problem-solving and analytical thinking development' },
    { name: 'Goal Setting', category: 'Life Skills', description: 'Personal development and achievement planning' },

    // Career Development
    { name: 'Job Readiness', category: 'Career Development', description: 'Resume writing, interview skills, and workplace etiquette' },
    { name: 'Internship Program', category: 'Career Development', description: 'Real-world work experience with local businesses' },
    { name: 'Career Exploration', category: 'Career Development', description: 'Discovering career paths and professional opportunities' },
    { name: 'Networking Skills', category: 'Career Development', description: 'Building professional relationships and connections' },
    { name: 'Entrepreneurship', category: 'Career Development', description: 'Business development and startup fundamentals' },
    { name: 'Professional Development', category: 'Career Development', description: 'Workplace skills and career advancement strategies' },

    // Leadership
    { name: 'Youth Leadership Council', category: 'Leadership', description: 'Student-led governance and community decision making' },
    { name: 'Peer Mentoring', category: 'Leadership', description: 'Training older students to mentor younger participants' },
    { name: 'Community Service', category: 'Leadership', description: 'Organizing and leading volunteer projects in the community' },
    { name: 'Public Speaking', category: 'Leadership', description: 'Developing confidence and communication in public forums' },
    { name: 'Team Building', category: 'Leadership', description: 'Collaborative leadership and group dynamics training' },
    { name: 'Social Justice Advocacy', category: 'Leadership', description: 'Empowering youth to advocate for positive change' },

    // Sports & Recreation
    { name: 'Basketball League', category: 'Sports & Recreation', description: 'Competitive and recreational basketball for all skill levels' },
    { name: 'Soccer Program', category: 'Sports & Recreation', description: 'Youth soccer training and team participation' },
    { name: 'Fitness Training', category: 'Sports & Recreation', description: 'Physical fitness and healthy lifestyle education' },
    { name: 'Swimming Lessons', category: 'Sports & Recreation', description: 'Water safety and competitive swimming instruction' },
    { name: 'Track & Field', category: 'Sports & Recreation', description: 'Athletic development in running, jumping, and throwing events' },
    { name: 'Outdoor Adventures', category: 'Sports & Recreation', description: 'Hiking, camping, and nature exploration activities' },

    // Arts & Culture
    { name: 'Music Program', category: 'Arts & Culture', description: 'Instrumental and vocal music instruction and performance' },
    { name: 'Visual Arts', category: 'Arts & Culture', description: 'Painting, drawing, and creative expression workshops' },
    { name: 'Drama Club', category: 'Arts & Culture', description: 'Theater arts, acting, and stage performance training' },
    { name: 'Creative Writing', category: 'Arts & Culture', description: 'Poetry, storytelling, and literary expression development' },
    { name: 'Cultural Awareness', category: 'Arts & Culture', description: 'Celebrating diversity and multicultural understanding' },
    { name: 'Digital Media', category: 'Arts & Culture', description: 'Video production, photography, and digital storytelling' }
  ];

  const categories = ['All', 'Academic Support', 'Life Skills', 'Career Development', 'Leadership', 'Sports & Recreation', 'Arts & Culture'];

  const filteredPrograms = selectedCategory === 'All' 
    ? programs 
    : programs.filter(program => program.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    const colors = {
      'All': 'bg-blue-600 hover:bg-blue-700',
      'Academic Support': 'bg-green-600 hover:bg-green-700',
      'Life Skills': 'bg-purple-600 hover:bg-purple-700',
      'Career Development': 'bg-orange-600 hover:bg-orange-700',
      'Leadership': 'bg-red-600 hover:bg-red-700',
      'Sports & Recreation': 'bg-teal-600 hover:bg-teal-700',
      'Arts & Culture': 'bg-pink-600 hover:bg-pink-700'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-600 hover:bg-gray-700';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#121212] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Our Programs</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up">
            Comprehensive programs designed to empower youth with the skills, knowledge, and opportunities they need to succeed in life.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Our Program Categories</h2>
            <p className="text-lg text-gray-600">Choose a category to discover programs that match your interests</p>
          </div>
          
          {/* Filter Buttons - Three Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category 
                    ? getCategoryColor(category) + ' ring-4 ring-opacity-50 ring-offset-2' 
                    : getCategoryColor(category) + ' opacity-80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getCategoryColor(program.category).split(' ')[0]}`}>
                      {program.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{program.name}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
