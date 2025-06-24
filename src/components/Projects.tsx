import { ExternalLink, Github } from 'lucide-react';
import { useTheme } from '../ThemeContext';

const Projects = () => {
  const { theme } = useTheme();

  const projects = [
    {
      title: "Weather App",
      description: "A functional weather application with real-time updates and accurate forecasts.",
      technologies: ["HTML5", "CSS3", "JavaScript", "API"],
      github: "https://github.com/adity4545/task5",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Tic Tac Toe Game",
      description: "An interactive 2D Tic Tac Toe game with sound effects and real-time score updates.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/adity4545/task3",
      image: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Fraud Detection AI Model",
      description: "A machine learning model to detect credit card fraud using a custom dataset.",
      technologies: ["Python", "ML", "Data Analysis"],
      github: "https://github.com/adity4545/Ai_model",
      image: "https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Car Details Retrieval System",
      description: "A project leveraging NLP and Deep Learning to streamline car search and retrieval.",
      technologies: ["Python", "NLP", "Deep Learning"],
      github: "https://github.com/adity4545/Car-Details-Retrieval-System",
      image: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800",
    }
  ];

  return (
    <section id="projects" className={`py-24 transition-colors duration-500 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            My Projects
          </h2>
          <p className={`mt-4 text-lg md:text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            A collection of my recent work showcasing diverse skills and innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 ${
                theme === 'dark'
                  ? 'bg-gray-800 shadow-2xl shadow-blue-500/10'
                  : 'bg-gray-50 shadow-2xl shadow-blue-500/10'
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-800'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
                    theme === 'dark'
                      ? 'text-blue-400 hover:text-blue-300'
                      : 'text-blue-600 hover:text-blue-800'
                  }`}
                >
                  <Github size={16} />
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://github.com/adity4545"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-3 px-8 py-4 text-lg font-bold rounded-full transition-all duration-300 shadow-lg transform hover:scale-105 ${
              theme === 'dark'
                ? 'bg-gray-800 text-white hover:bg-gray-700'
                : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
            }`}
          >
            <Github size={24} />
            Explore All Projects
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;