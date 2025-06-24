import { Code, Database, Globe, Smartphone } from 'lucide-react';
import { useTheme } from '../ThemeContext';

const About = () => {
  const { theme } = useTheme();

  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full Stack Development",
      description: "Expertise in MERN stack and Next.js for building modern web applications",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Blockchain Technology",
      description: "Smart contract development and decentralized application (DApp) creation",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Responsive Design",
      description: "Creating mobile-first, responsive interfaces that work across all devices",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Modern Technologies",
      description: "Staying current with the latest web development trends and best practices",
    },
  ];

  return (
    <section id="about" className={`py-24 transition-colors duration-500 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            About Me
          </h2>
          <p className={`mt-4 text-lg md:text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            I'm a passionate full stack developer creating innovative solutions that solve real-world problems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          {/* Story Section */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-3xl font-bold">My Journey</h3>
            <div className={`space-y-4 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>
                As a dedicated full stack developer, I specialize in the MERN stack (MongoDB, Express.js, 
                React, Node.js) and have extensive experience with Next.js for building high-performance 
                web applications.
              </p>
              <p>
                My passion for blockchain technology has led me to explore smart contract development 
                and decentralized applications. I believe in the transformative power of blockchain 
                and its potential to revolutionize various industries.
              </p>
              <p>
                I'm constantly learning and adapting to new technologies, ensuring that I stay at the 
                forefront of web development trends. My goal is to create scalable, efficient, and 
                user-friendly applications that make a positive impact.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg transition-all duration-300 transform hover:scale-105 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white shadow-lg'}`}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4 bg-blue-600`}>
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2">
                  {item.title}
                </h4>
                <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
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