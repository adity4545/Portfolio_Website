import { Code, Github, Heart, Linkedin, Mail } from 'lucide-react';
import { useTheme } from '../ThemeContext';

const Footer = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Publications', href: '#publications' },
    { label: 'Contact', href: '#contact' }
  ];

  const technologies = [
    'React', 'Next.js', 'Node.js', 'MongoDB', 'Solidity', 'TypeScript', 'Python', 'Machine Learning'
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/adity4545", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/aditya-kakkad-045689225", label: "LinkedIn" },
    { icon: Mail, href: "mailto:kakkadaditya65@gmail.com", label: "Email" }
  ];

  return (
    <footer className={`transition-colors duration-500 relative overflow-hidden ${theme === 'dark' ? 'bg-gray-900 border-t border-gray-800' : 'bg-gray-100 border-t border-gray-200'}`}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className={`absolute top-0 left-1/4 w-96 h-96 ${theme === 'dark' ? 'bg-blue-500/5' : 'bg-blue-400/10'} rounded-full blur-3xl`}></div>
        <div className={`absolute bottom-0 right-1/4 w-96 h-96 ${theme === 'dark' ? 'bg-purple-500/5' : 'bg-purple-400/10'} rounded-full blur-3xl`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Aditya Kakkad
              </h3>
            </div>
            <p className={`mb-6 text-lg leading-relaxed max-w-md ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Full Stack Developer specializing in MERN stack, Next.js, and Blockchain technology.
              Building innovative solutions for the digital future.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`w-12 h-12 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 rounded-2xl flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 hover:text-white ${theme === 'dark' ? 'bg-gray-800/50 text-gray-400 border border-gray-700 hover:border-transparent' : 'bg-white text-gray-600 border border-gray-300 hover:border-transparent'}`}
                  title={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`text-lg font-semibold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className={`transition-colors duration-300 hover:translate-x-1 transform inline-block ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className={`text-lg font-semibold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 rounded-full text-sm border transition-all duration-300 ${theme === 'dark' ? 'bg-gray-800/50 text-gray-300 border-gray-700 hover:border-blue-500 hover:text-blue-400' : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400 hover:text-blue-600'}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`border-t mt-12 pt-8 ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'}`}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className={`flex items-center space-x-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              <span>© {currentYear} Aditya Kakkad. Made with</span>
              <Heart className="w-7 h-7 text-red-500 animate-pulse" />
            </p>
            
            <div className={`flex items-center space-x-6 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              <span>Built with modern technologies</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Always learning, always growing</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;