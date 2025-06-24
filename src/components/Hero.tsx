import { ArrowDown, Github, Linkedin, Mail, Phone, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Avatar */}
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto mb-6 bg-gradient-to-br from-blue-500 via-purple-500 to-teal-500 rounded-full flex items-center justify-center shadow-2xl relative">
              <div className="absolute inset-2 bg-gray-900 rounded-full flex items-center justify-center overflow-hidden">
                <img 
                  src="/IMG_7288.JPG" 
                  alt="Aditya Kakkad Avatar" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="absolute -top-2 -right-2">
                <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700 mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-gray-300 text-sm">Available for new opportunities</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="block">Hi, I'm</span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
                Aditya Kakkad
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Full Stack Developer specializing in{' '}
              <span className="font-semibold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">MERN Stack</span>, 
              <span className="font-semibold bg-gradient-to-r from-teal-400 to-teal-300 bg-clip-text text-transparent"> Next.js</span>, and 
              <span className="font-semibold bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent"> Blockchain Technology</span>
            </p>
            
            <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Passionate about building scalable web applications and smart contracts. 
              I create digital experiences that make a difference.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
              <button
                onClick={() => scrollToSection('projects')}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 flex items-center space-x-2"
              >
                <span>View My Work</span>
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-gray-600 text-gray-300 hover:border-blue-500 hover:text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:bg-blue-500/10 transform hover:-translate-y-1"
              >
                Get In Touch
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-12">
              {[
                { icon: Github, href: "https://github.com/adity4545", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/aditya-kakkad-045689225", label: "LinkedIn" },
                { icon: Mail, href: "mailto:kakkadaditya65@gmail.com", label: "Email" },
                { icon: Phone, href: "tel:8347774574", label: "Phone" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-14 h-14 bg-gray-800/50 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 text-gray-400 hover:text-white rounded-2xl flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg border border-gray-700 hover:border-transparent"
                  title={social.label}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>

            {/* Scroll Indicator */}
            <button
              onClick={() => scrollToSection('about')}
              className="animate-bounce text-gray-500 hover:text-blue-400 transition-colors"
            >
              <ArrowDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;