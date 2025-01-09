import React, { useRef, useState } from 'react';
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
  Coffee
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Response1 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

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

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Globe className="w-6 h-6 text-blue-600" />
              <span className="text-xl font-bold">ChangeMakers</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#causes" className="text-gray-600 hover:text-blue-600">Causes</a>
              <a href="#impact" className="text-gray-600 hover:text-blue-600">Impact</a>
              <a href="#join" className="text-gray-600 hover:text-blue-600">Join Us</a>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-16 left-0 right-0 bg-white shadow-lg md:hidden z-40">
          <div className="px-4 py-2 space-y-2">
            <a href="#causes" className="block py-2">Causes</a>
            <a href="#impact" className="block py-2">Impact</a>
            <a href="#join" className="block py-2">Join Us</a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Make a Difference Today
              </h1>
              <p className="text-xl opacity-90">
                Join our global community of changemakers working together for a better world.
              </p>
              <div className="flex space-x-4">
                <button className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors flex items-center space-x-2">
                  <Heart className="w-5 h-5" />
                  <span>Join Us</span>
                </button>
                <button className="px-6 py-3 border border-white rounded-lg hover:bg-white/10 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <Globe className="w-64 h-64 mx-auto text-white/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4 justify-center">
              <Users className="w-8 h-8 text-blue-600" />
              <div>
                <div className="text-3xl font-bold text-blue-600">100K+</div>
                <div className="text-gray-600">Lives Impacted</div>
              </div>
            </div>
            <div className="flex items-center space-x-4 justify-center">
              <DollarSign className="w-8 h-8 text-blue-600" />
              <div>
                <div className="text-3xl font-bold text-blue-600">$2.5M</div>
                <div className="text-gray-600">Funds Raised</div>
              </div>
            </div>
            <div className="flex items-center space-x-4 justify-center">
              <MapPin className="w-8 h-8 text-blue-600" />
              <div>
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-gray-600">Countries Reached</div>
              </div>
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
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 mb-4 mx-auto">
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
          <div className="h-80 w-full">
            <ResponsiveContainer>
              <LineChart data={impactData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="impact" stroke="#2563eb" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section id="join" className="py-20">
        <div className="container mx-auto px-4 max-w-md">
          <h2 className="text-3xl font-bold text-center mb-8">Join Our Cause</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
                  <option value="">Select a cause</option>
                  {causes.map((cause, index) => (
                    <option key={index} value={cause.title}>{cause.title}</option>
                  ))}
                </select>
              </div>
              <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                <Heart className="w-5 h-5" />
                <span>Join Now</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <Twitter className="w-6 h-6 hover:text-blue-400 cursor-pointer" />
                <Facebook className="w-6 h-6 hover:text-blue-400 cursor-pointer" />
                <Instagram className="w-6 h-6 hover:text-blue-400 cursor-pointer" />
                <Github className="w-6 h-6 hover:text-blue-400 cursor-pointer" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  <span>contact@changemakers.org</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Response1;