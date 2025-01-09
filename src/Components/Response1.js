import React, { useRef, useState, useEffect } from 'react';
import {
  Heart,
  Users,
  Globe,
  Mail,
  Phone,
  Twitter,
  Facebook,
  Instagram,
  Github,
  Calendar,
  DollarSign,
  ArrowRight,
  Menu,
  X,
  Search,
  MapPin,
  Share2,
  Award,
  Sprout,
  Book,
  Coffee,
  MapPinned

} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Response1 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
      setShowScrollTop(offset > 400);

      const sections = ['causes', 'impact', 'join'];
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const causes = [
    {
      title: "Environmental Conservation",
      description: "Protect and preserve our natural ecosystems",
      icon: <Sprout className="w-8 h-8 text-green-600" />,
      impact: "23,456 trees planted",
      volunteers: 1200,
      raised: "$345,000"
    },
    {
      title: "Education Access",
      description: "Quality education for every child",
      icon: <Book className="w-8 h-8 text-blue-600" />,
      impact: "5,678 students helped",
      volunteers: 800,
      raised: "$567,000"
    },
    {
      title: "Food Security",
      description: "Combat hunger worldwide",
      icon: <Coffee className="w-8 h-8 text-orange-600" />,
      impact: "89,012 meals served",
      volunteers: 2000,
      raised: "$234,000"
    },
    {
      title: "Healthcare Equality",
      description: "Healthcare for all communities",
      icon: <Heart className="w-8 h-8 text-red-600" />,
      impact: "12,345 patients treated",
      volunteers: 1500,
      raised: "$789,000"
    }
  ];

  const impactData = [
    { month: 'Jan', impact: 2400 },
    { month: 'Feb', impact: 3600 },
    { month: 'Mar', impact: 4000 },
    { month: 'Apr', impact: 5000 },
    { month: 'May', impact: 4800 },
    { month: 'Jun', impact: 6000 }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Globe className={`w-6 h-6 transition-colors duration-300 ${
                scrolled ? 'text-blue-600' : 'text-white'
              }`} />
              <span className={`text-xl font-bold transition-colors duration-300 ${
                scrolled ? 'text-gray-800' : 'text-white'
              }`}>Terntribe BUILD Demo</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['causes', 'impact', 'join'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`relative transition-colors duration-300 ${
                    scrolled ? 'text-gray-600 hover:text-blue-600' : 'text-white hover:text-blue-200'
                  }`}
                >
                  <span className="capitalize">{section}</span>
                  {activeSection === section && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform origin-left transition-transform duration-300" />
                  )}
                </button>
              ))}
            </div>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden transition-colors duration-300 ${
                scrolled ? 'text-gray-600' : 'text-white'
              }`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed top-16 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg md:hidden transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="px-4 py-2 space-y-2">
          {['causes', 'impact', 'join'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="block w-full py-2 text-left text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              <span className="capitalize">{section}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 space-y-6 transform transition-all duration-700 hover:scale-105">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Make a Difference Today
              </h1>
              <p className="text-xl opacity-90">
                Join our global community of Terntribe BUILD Demo working together for a better world.
              </p>
              <div className="flex space-x-4">
                <button className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105 flex items-center space-x-2">
                  <Heart className="w-5 h-5" />
                  <span>Join Us</span>
                </button>
                <button className="px-6 py-3 border border-white rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <Globe className="w-64 h-64 mx-auto text-white/20 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Causes Section */}
      <section id="causes" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Causes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {causes.map((cause, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg p-6 shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 mb-4 mx-auto transform transition-transform hover:rotate-12">
                  {cause.icon}
                </div>
                <h3 className="text-xl font-bold text-center mb-2">{cause.title}</h3>
                <p className="text-gray-600 text-center mb-4">{cause.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Award className="w-4 h-4 mr-2 text-blue-600" />
                    <span>{cause.impact}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Users className="w-4 h-4 mr-2 text-blue-600" />
                    <span>{cause.volunteers} volunteers</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <DollarSign className="w-4 h-4 mr-2 text-blue-600" />
                    <span>{cause.raised} raised</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="h-80 w-full transform transition-all duration-500 hover:scale-105">
            <ResponsiveContainer>
              <LineChart data={impactData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="impact" 
                  stroke="#2563eb" 
                  strokeWidth={2}
                  animationDuration={2000}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section id="join" className="py-20">
        <div className="container mx-auto px-4 max-w-md">
          <h2 className="text-3xl font-bold text-center mb-8">Join Our Cause</h2>
          <div className="bg-white rounded-lg shadow-lg p-8 transform transition-all duration-500 hover:shadow-xl">
            <form className="space-y-6">
              <div className="transform transition-all duration-300 hover:translate-x-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300"
                />
              </div>
              <div className="transform transition-all duration-300 hover:translate-x-2">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300"
                />
              </div>
              <div className="transform transition-all duration-300 hover:translate-x-2">
                <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300">
                  <option value="">Select a cause</option>
                  {causes.map((cause, index) => (
                    <option key={index} value={cause.title}>{cause.title}</option>
                  ))}
                </select>
              </div>
              <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg transition-all duration-300 hover:bg-blue-700 hover:scale-105 flex items-center justify-center space-x-2">
                <Heart className="w-5 h-5" />
                <span>Join Now</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-4 animate-fade-in">
              <div className="flex items-center space-x-2">
                <Globe className="w-6 h-6 text-blue-400" />
                <span className="text-xl font-bold">Terntribe BUILD Demo</span>
              </div>
              <p className="text-gray-400">Making positive change in communities worldwide through sustainable initiatives and collective action.</p>
              <div className="flex space-x-4">
                <Twitter className="w-5 h-5 text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110 cursor-pointer" />
                <Facebook className="w-5 h-5 text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110 cursor-pointer" />
                <Instagram className="w-5 h-5 text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110 cursor-pointer" />
                <Github className="w-5 h-5 text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110 cursor-pointer" />
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                {['About Us', 'Our Causes', 'Get Involved', 'Donate', 'News'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center space-x-2 group">
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                      <span>{link}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 group">
                  <MapPinned className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                  <span className="text-gray-400 group-hover:text-blue-400 transition-colors duration-300">
                    17b, Ikeja Road, Lagos, Nigeria
                  </span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <Mail className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                  <span className="text-gray-400 group-hover:text-blue-400 transition-colors duration-300">
                    contact@terntribebuilddemo.org
                  </span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <Phone className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                  <span className="text-gray-400 group-hover:text-blue-400 transition-colors duration-300">
                    +234 (902) 201-3174
                  </span>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Stay Updated</h3>
              <p className="text-gray-400">Subscribe to our newsletter for the latest updates and news.</p>
              <div className="flex flex-col space-y-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300"
                />
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2025 Terntribe BUILD Demo. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Response1;