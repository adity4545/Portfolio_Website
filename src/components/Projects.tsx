import { Brain, Car, Cloud, ExternalLink, Gamepad, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Weather App",
      description: "A functional weather application with real-time updates and accurate forecasts. Features include current weather conditions, hourly forecasts, and detailed weather information.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Weather API", "Responsive Design"],
      github: "https://github.com/adity4545/weather-app",
      icon: <Cloud className="w-8 h-8" />,
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      bgGradient: "from-blue-500/20 via-cyan-500/20 to-teal-500/20",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Web App",
      featured: true
    },
    {
      title: "Tic Tac Toe Game",
      description: "An interactive 2D Tic Tac Toe game with sound effects and real-time score updates. Features a user-friendly interface and engaging gameplay experience.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Web Audio API", "Responsive Design"],
      github: "https://github.com/adity4545/tic-tac-toe",
      icon: <Gamepad className="w-8 h-8" />,
      gradient: "from-emerald-500 via-green-500 to-teal-500",
      bgGradient: "from-emerald-500/20 via-green-500/20 to-teal-500/20",
      image: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Game",
      featured: false
    },
    {
      title: "Fraud Detection AI Model",
      description: "A machine learning model developed to detect credit card fraud using a custom dataset. Utilizes advanced algorithms to identify and prevent fraudulent transactions with high accuracy.",
      technologies: ["Python", "Machine Learning", "Data Analysis", "Scikit-learn", "Pandas", "NumPy"],
      github: "https://github.com/adity4545/fraud-detection-ai",
      icon: <Brain className="w-8 h-8" />,
      gradient: "from-orange-500 via-red-500 to-pink-500",
      bgGradient: "from-orange-500/20 via-red-500/20 to-pink-500/20",
      image: "https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "AI/ML",
      featured: true
    },
    {
      title: "Car Details Retrieval System",
      description: "A project leveraging NLP and Deep Learning to streamline car search and retrieval. Features efficient vehicle information categorization and enhanced user experience.",
      technologies: ["Python", "NLP", "Deep Learning", "TensorFlow", "Natural Language Processing", "Data Analysis"],
      github: "https://github.com/adity4545/car-details-system",
      icon: <Car className="w-8 h-8" />,
      gradient: "from-violet-500 via-purple-500 to-indigo-500",
      bgGradient: "from-violet-500/20 via-purple-500/20 to-indigo-500/20",
      image: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "AI/ML",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            My Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A collection of my recent work showcasing diverse skills and innovative solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-lg shadow-lg bg-gray-800 transition-all duration-300 transform hover:scale-105 border border-gray-700`}
            >
              {/* Project Image */}
              <div className="relative h-48 sm:h-56 md:h-64 overflow-none">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full  transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full flex items-center space-x-2 text-sm font-semibold"
                  >
                    <Github size={20} />
                    <span>View Code</span>
                  </a>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-7 flex flex-col h-full">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed ">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700 text-gray-300 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/adity4545"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-white text-gray-900 hover:bg-gray-200 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <Github size={24} />
            <span>Explore All Projects</span>
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;