import React from 'react';
import { Code, Database, Smartphone, Globe, Zap, Shield } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full Stack Development",
      description: "Expertise in MERN stack and Next.js for building modern web applications",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Blockchain Technology",
      description: "Smart contract development and decentralized application (DApp) creation",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Responsive Design",
      description: "Creating mobile-first, responsive interfaces that work across all devices",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Modern Technologies",
      description: "Staying current with the latest web development trends and best practices",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Building fast, efficient applications with optimal user experience",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security First",
      description: "Implementing robust security measures and best practices in development",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gray-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-6">
            <Code className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full stack developer with expertise in modern web technologies 
            and blockchain development. I love creating innovative solutions that solve real-world problems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Story Section */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-8">
              My Journey
            </h3>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">
                As a dedicated full stack developer, I specialize in the MERN stack (MongoDB, Express.js, 
                React, Node.js) and have extensive experience with Next.js for building high-performance 
                web applications.
              </p>
              <p className="text-lg">
                My passion for blockchain technology has led me to explore smart contract development 
                and decentralized applications. I believe in the transformative power of blockchain 
                technology and its potential to revolutionize various industries.
              </p>
              <p className="text-lg">
                I'm constantly learning and adapting to new technologies, ensuring that I stay at the 
                forefront of web development trends. My goal is to create scalable, efficient, and 
                user-friendly applications that make a positive impact.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              {[
                { number: "4+", label: "Projects Completed" },
                { number: "3+", label: "Technologies Mastered" },
                { number: "1+", label: "Years Experience" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group bg-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <div className={`w-14 h-14 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;