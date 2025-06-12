import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Users, Clock, ChevronDown, Star, Lightbulb, Award } from 'lucide-react';
import Button from "@mui/material/Button";

const FoundersHivePage = () => {
  const [activeTab, setActiveTab] = useState('bengaluru');
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);


  const sessions = {
    bengaluru: {
      date: '2 February 2025',
      venue: 'Tea Villa Cafe, Jayanagar',
      registrations: 15,
      mentor: {
        name: 'Ojas Ulhas Dighe',
        role: 'CTO & Co-founder of FinE',
        bio: 'Chief Technology Officer and Co-founder of FinE (Financial Empowerment for Everyone), leading engineering initiatives focused on AI, machine learning, and data analytics. With prior experience at Salesforce and Morgan Stanley.'
      },
      startups: [
        'A social ticketing platform for events, concerts, and gigs that integrates WhatsApp-like features',
        'An AI-driven social platform that connects users based on shared music preferences'
      ]
    },
    hyderabad: {
      date: '18 January 2025',
      venue: 'Sage Farm Cafe, Jubilee Hills',
      registrations: 9,
      mentor: {
        name: 'Akhil Gabbeta',
        role: 'CEO of Hackerinthehouse',
        bio: 'Indian entrepreneur and cybersecurity consultant, serving as Chairperson and CEO of HITH Technologies. Recognized globally for contributions to cybersecurity innovation and fostering cyber-aware ecosystem.'
      },
      startups: [
        'A platform that connects new startup founders directly with industry experts',
        'A healthcare platform offering access to high-cost medical equipment at reduced rates'
      ]
    }
  };

  const itinerary = [
    { title: 'Opening & Welcome', duration: '10 min', icon: Users },
    { title: 'Guided Group Discussion', duration: '40 min', icon: Star },
    { title: 'Founder Simulation/Breakout Groups', duration: '40 min', icon: Lightbulb },
    { title: 'Closing Reflections', duration: '10 min', icon: Award }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-purple-600/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-l from-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-purple-700/15 to-transparent rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="text-center max-w-6xl mx-auto px-6">
            <div 
              id="hero-title"
              data-animate
              className={`transition-all duration-1000 transform ${
                isVisible['hero-title'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <h1 className="text-7xl md:text-9xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent animate-pulse">
                Founders Hive
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-8 animate-pulse"></div>
            </div>
            
            <div 
              id="hero-subtitle"
              data-animate
              className={`transition-all duration-1000 delay-300 transform ${
                isVisible['hero-subtitle'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
            <Button 
              variant='contained'
              sx={{
                background: 'linear-gradient(90deg, #9C27B0, #E040FB)',
                color: 'white',
                padding: '16px 40px',
                fontFamily: "Montserrat",
                marginBottom: "20px",
                borderRadius: "5%",
                fontSize: '1rem',
                boxShadow: '0 0 15px rgba(156, 39, 176, 0.7), 0 0 30px rgba(224, 64, 251, 0.5)',
                '&:hover':{
                  background: "none",
                  boxShadow: '0 0 15px rgba(156, 39, 176, 0.7), 0 0 30px rgba(224, 64, 251, 0.5)',
                },
              }}
              onClick={() => {
                window.open("https://forms.gle/4eZC61f8fVBicd428")
              }}
            >
              Register Here 
            </Button>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Exclusive networking sessions bringing together top student founders,<br />
                experienced entrepreneurs, and mentors in intimate settings
              </p>
            </div>

            <div 
              id="hero-badge"
              data-animate
              className={`transition-all duration-1000 delay-500 transform ${
                isVisible['hero-badge'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-900/50 to-purple-800/50 rounded-full border border-purple-500/30 backdrop-blur-sm">
                <Star className="w-5 h-5 text-purple-400 mr-2" />
                <span className="text-purple-200">E-Cell IIT Hyderabad</span>
              </div>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ChevronDown className="w-8 h-8 text-purple-400" />
            </div>
          </div>
        </section>

        {/* Sessions Tabs */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div 
              id="tabs-section"
              data-animate
              className={`transition-all duration-1000 transform ${
                isVisible['tabs-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="flex justify-center mb-12">
                <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/30 p-2 rounded-full border border-purple-500/30 backdrop-blur-sm">
                  {Object.keys(sessions).map((city) => (
                    <button
                      key={city}
                      onClick={() => setActiveTab(city)}
                      className={`px-8 py-3 rounded-full transition-all duration-300 capitalize font-semibold ${
                        activeTab === city
                          ? 'bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-lg shadow-purple-500/25'
                          : 'text-purple-200 hover:text-white hover:bg-purple-800/30'
                      }`}
                    >
                      {city}
                    </button>
                  ))}
                </div>
              </div>

              {/* Session Details */}
              <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-3xl border border-purple-500/20 backdrop-blur-sm p-8 md:p-12">
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Left Column - Session Info */}
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                        {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Session
                      </h2>
                      
                      <div className="space-y-4">
                        <div className="flex items-center text-gray-300">
                          <Calendar className="w-5 h-5 text-purple-400 mr-3" />
                          <span>{sessions[activeTab].date}</span>
                        </div>
                        <div className="flex items-center text-gray-300">
                          <MapPin className="w-5 h-5 text-purple-400 mr-3" />
                          <span>{sessions[activeTab].venue}</span>
                        </div>
                        <div className="flex items-center text-gray-300">
                          <Users className="w-5 h-5 text-purple-400 mr-3" />
                          <span>{sessions[activeTab].registrations} Registrations</span>
                        </div>
                      </div>
                    </div>

                    {/* Mentor Info */}
                    <div className="bg-gradient-to-r from-purple-900/20 to-purple-800/20 rounded-2xl p-6 border border-purple-500/20 mr-4">
                      <h3 className="text-2xl font-bold mb-2 text-purple-200">Featured Mentor</h3>
                      <h4 className="text-xl font-semibold mb-2">{sessions[activeTab].mentor.name}</h4>
                      <p className="text-purple-300 mb-3">{sessions[activeTab].mentor.role}</p>
                      <p className="text-gray-300 leading-relaxed">{sessions[activeTab].mentor.bio}</p>
                    </div>
                  </div>

                  {/* Right Column - Itinerary */}
                  <div>
                    <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                      Session Itinerary
                    </h3>
                    
                    <div className="space-y-4">
                      {itinerary.map((item, index) => {
                        const Icon = item.icon;
                        return (
                          <div 
                            key={index}
                            className="flex items-center justify-center p-4 bg-gradient-to-r from-gray-800/30 to-gray-900/30 rounded-xl border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 hover:scale-105"
                          >
                            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-white">{item.title}</h4>
                            </div>
                            <div className="flex items-center text-purple-300">
                              <Clock className="w-4 h-4 mr-1" />
                              <span className="text-sm">{item.duration}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Upcoming Sessions*/}
        <section className="bg-gradient-to-br from-gray-900/50 to-black/50          rounded-3xl border border-purple-500/20 backdrop-blur-sm p-8 md:p-12">
            <div className="flex flex-col gap-4">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Upcoming Sessions
              </h2>
              <span className="text-xl font-primary mb-4 ml-8 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Bengaluru : 5th July 2025</span>
              <span className="text-xl font-primary mb-4 ml-8 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Hyderabad : To be announced
              </span>
              <span className="text-xl font-primary mb-4 ml-8 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Pune : To be announced
              </span>
            </div>
        </section>
        {/* Startup Concepts */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div 
              id="startups-section"
              data-animate
              className={`transition-all duration-1000 transform ${
                isVisible['startups-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Innovative Startup Concepts
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {sessions[activeTab].startups.map((startup, index) => (
                  <div 
                    key={index}
                    className="bg-gradient-to-br from-purple-900/20 to-black/20 rounded-2xl p-8 border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300 hover:scale-105"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                      <Lightbulb className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-gray-300 leading-relaxed">{startup}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div 
              id="gallery-section"
              data-animate
              className={`transition-all duration-1000 transform ${
                isVisible['gallery-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Event Gallery
              </h2>
              <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
                Capturing moments of innovation, collaboration, and entrepreneurial spirit from our Founders Hive sessions
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {[
                  'ccs-1.jpeg',
                  'ccs-2.jpeg', 
                  'ccs-3.jpeg',
                  'ccs-4.jpeg',
                  'ccs-7.jpeg',
                ].map((image, index) => (
                  <div 
                    key={index}
                    className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/20 to-black/20 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 hover:scale-105"
                    style={{
                      aspectRatio: '1',
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                    
                    <img 
                      src={`/${image}`}
                      alt={`Founders' Hive Event ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      onError={(e) => {
                        // Fallback gradient background if image doesn't exist
                        e.target.style.display = 'none';
                        e.target.parentElement.style.background = `linear-gradient(135deg, 
                          ${index % 3 === 0 ? '#6B46C1' : index % 3 === 1 ? '#7C3AED' : '#8B5CF6'}20, 
                          ${index % 3 === 0 ? '#4C1D95' : index % 3 === 1 ? '#5B21B6' : '#6D28D9'}40)`;
                      }}
                    />
                    
                    {/* Fallback content for missing images */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-50">
                      <div className="text-center">
                        
                      </div>
                    </div>
                    
                    {/* Hover overlay with gradient border effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Animated corner accents */}
                    <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
              
              {/* Gallery Stats */}
              <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-gradient-to-br from-purple-900/20 to-black/20 rounded-2xl border border-purple-500/20">
                  <div className="text-3xl font-bold text-purple-300 mb-2">2</div>
                  <div className="text-gray-400">Cities Covered</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-900/20 to-black/20 rounded-2xl border border-purple-500/20">
                  <div className="text-3xl font-bold text-purple-300 mb-2">24</div>
                  <div className="text-gray-400">Total Participants</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-900/20 to-black/20 rounded-2xl border border-purple-500/20">
                  <div className="text-3xl font-bold text-purple-300 mb-2">100%</div>
                  <div className="text-gray-400">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-purple-500/20">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-6">
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-6"></div>
              <p className="text-gray-400 mb-4">
                Creating collaborative environments for the next generation of entrepreneurs
              </p>
              <p className="text-purple-300 font-semibold">E-Cell IIT Hyderabad</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default FoundersHivePage;