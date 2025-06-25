import { useTheme } from '../ThemeContext';

const Hero = () => {
  const { theme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className={`relative min-h-screen flex items-center transition-colors duration-500 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          
          {/* Text Content - Order 2 on small screens, 1 on large */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              <span className={`block ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-2xl font-medium`}>
                Hi, I'm
              </span>
              <span className="block mt-1 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Aditya Kakkad
              </span>
            </h1>
            <p className={`mt-6 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Full Stack Developer specializing in MERN Stack, Next.js, and Blockchain Technology.
            </p>
            
            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="group inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-transform duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg ${
                  theme === 'dark'
                    ? 'border-gray-600 text-gray-300 hover:bg-gray-800'
                    : 'border-gray-300 text-gray-800 hover:bg-gray-100'
                }`}
              >
                Get In Touch
              </button>
            </div>
            </div>

          {/* Avatar - Order 1 on small screens, 2 on large */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto lg:w-9/10 lg:h-auto order-1 lg:order-2">
            <div className="relative group">
              <div className={`absolute -inset-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-75 blur-xl group-hover:opacity-100 transition-all duration-1000 group-hover:duration-200 animate-tilt`}></div>
              <img
                src="/IMG_0014.JPG"
                alt="Aditya Kakkad Avatar"
                className={`relative w-full h-full rounded-full object-cover border-4 shadow-xl ${theme === 'dark' ? 'border-gray-800' : 'border-white'}`}
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;