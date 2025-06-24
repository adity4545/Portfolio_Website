import { Blocks, Cloud, Code, Server, Star, TrendingUp, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

const Skills = () => {
  const [animatedSkills, setAnimatedSkills] = useState<{[key: string]: number}>({});
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="w-10 h-10" />,
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      bgGradient: "from-blue-500/20 via-cyan-500/20 to-teal-500/20",
      skills: [
        { name: "React.js", level: 95, color: "from-blue-400 to-blue-600" },
        { name: "Next.js", level: 92, color: "from-gray-400 to-gray-600" },
        { name: "TypeScript", level: 90, color: "from-blue-500 to-blue-700" },
        { name: "Tailwind CSS", level: 95, color: "from-cyan-400 to-cyan-600" },
        { name: "Redux Toolkit", level: 88, color: "from-purple-400 to-purple-600" },
        { name: "React Query", level: 85, color: "from-pink-400 to-pink-600" }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="w-10 h-10" />,
      gradient: "from-emerald-500 via-green-500 to-teal-500",
      bgGradient: "from-emerald-500/20 via-green-500/20 to-teal-500/20",
      skills: [
        { name: "Node.js", level: 92, color: "from-green-400 to-green-600" },
        { name: "Express.js", level: 90, color: "from-gray-400 to-gray-600" },
        { name: "MongoDB", level: 88, color: "from-green-500 to-green-700" },
        { name: "PostgreSQL", level: 85, color: "from-blue-500 to-blue-700" }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-10 h-10" />,
      gradient: "from-purple-500 via-violet-500 to-pink-500",
      bgGradient: "from-purple-500/20 via-violet-500/20 to-pink-500/20",
      skills: [
        { name: "AWS", level: 85, color: "from-orange-400 to-orange-600" },
        { name: "Vercal", level: 82, color: "from-blue-400 to-blue-600" },
        { name: "GoDadday", level: 75, color: "from-blue-500 to-blue-700" },
        { name: "CI/CD", level: 88, color: "from-green-400 to-green-600" }
      ]
    },
    {
      title: "Blockchain & Web3",
      icon: <Blocks className="w-10 h-10" />,
      gradient: "from-orange-500 via-red-500 to-pink-500",
      bgGradient: "from-orange-500/20 via-red-500/20 to-pink-500/20",
      skills: [
        { name: "Solidity", level: 85, color: "from-gray-400 to-gray-600" },
        { name: "Web3.js", level: 82, color: "from-orange-400 to-orange-600" },
        { name: "Hardhat", level: 85, color: "from-yellow-400 to-yellow-600" },
        { name: "Smart Contracts", level: 88, color: "from-purple-400 to-purple-600" }
      ]
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      const animated: {[key: string]: number} = {};
      skillCategories.forEach(category => {
        category.skills.forEach(skill => {
          animated[skill.name] = skill.level;
        });
      });
      setAnimatedSkills(animated);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skills" className="py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-3xl mb-8 shadow-2xl shadow-purple-500/25 animate-bounce">
            <TrendingUp className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 mb-8 animate-pulse">
            Skills & Expertise
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Mastering cutting-edge technologies to build the future of web development
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="group relative"
              onMouseEnter={() => setHoveredCategory(categoryIndex)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-50 group-hover:opacity-70 rounded-3xl transition-opacity duration-500 blur-xl`}></div>
              
              {/* Main Card */}
              <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-3xl p-10 border border-gray-700/50 shadow-2xl group-hover:shadow-purple-500/25 transition-all duration-500 transform group-hover:scale-105">
                
                {/* Category Header */}
                <div className="flex items-center mb-10">
                  <div className={`w-20 h-20 bg-gradient-to-r ${category.gradient} rounded-3xl flex items-center justify-center text-white mr-6 shadow-2xl group-hover:rotate-12 transition-transform duration-500`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-500">
                      {category.title}
                    </h3>
                    <div className="flex items-center mt-2">
                      <Star className="w-5 h-5 text-yellow-400 mr-2" />
                      <span className="text-gray-400">Expert Level</span>
                    </div>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-8">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group/skill">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-xl font-semibold text-gray-300 group-hover/skill:text-white transition-colors">
                          {skill.name}
                        </span>
                        <div className="flex items-center space-x-2">
                          <span className="text-lg font-bold text-gray-400 group-hover/skill:text-purple-400 transition-colors">
                            {animatedSkills[skill.name] || 0}%
                          </span>
                          <Zap className="w-4 h-4 text-yellow-400" />
                        </div>
                      </div>
                      
                      {/* Progress Bar Container */}
                      <div className="relative w-full bg-gray-800 rounded-full h-4 overflow-hidden shadow-inner">
                        {/* Animated Progress Bar */}
                        <div
                          className={`h-4 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-2000 ease-out relative overflow-hidden`}
                          style={{ width: `${animatedSkills[skill.name] || 0}%` }}
                        >
                          {/* Shimmer Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                          
                          {/* Glow Effect */}
                          <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                        </div>
                        
                        {/* Skill Level Indicator */}
                        <div 
                          className="absolute top-0 h-4 w-1 bg-white/50 transition-all duration-2000 ease-out"
                          style={{ left: `${(animatedSkills[skill.name] || 0)}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Technologies Showcase */}
        <div className="text-center">
          <h3 className="text-4xl font-bold text-white mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Additional Technologies
            </span>
          </h3>
          
          {/* Floating Tech Badges */}
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: 'TypeScript', gradient: 'from-blue-400 to-blue-600' },
              { name: 'React Native', gradient: 'from-cyan-400 to-blue-500' },
              { name: 'Next.js 13+', gradient: 'from-gray-400 to-gray-600' },
              { name: 'Tailwind CSS', gradient: 'from-cyan-400 to-teal-500' },
              { name: 'GraphQL', gradient: 'from-pink-400 to-purple-500' },
              { name: 'Prisma', gradient: 'from-purple-400 to-indigo-500' },
              { name: 'AWS Lambda', gradient: 'from-orange-400 to-red-500' },
              { name: 'Docker', gradient: 'from-blue-400 to-indigo-500' },
              { name: 'Kubernetes', gradient: 'from-blue-500 to-cyan-500' },
              { name: 'Web3', gradient: 'from-purple-400 to-pink-500' },
              { name: 'Solidity', gradient: 'from-gray-400 to-gray-600' },
              { name: 'Hardhat', gradient: 'from-yellow-400 to-orange-500' }
            ].map((tech, index) => (
              <div
                key={index}
                className="group relative"
              >
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${tech.gradient} opacity-0 group-hover:opacity-50 rounded-2xl blur-xl transition-opacity duration-500`}></div>
                
                {/* Badge */}
                <div className={`relative px-8 py-4 bg-gradient-to-r ${tech.gradient} text-white rounded-2xl font-semibold text-lg shadow-2xl transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 cursor-default border border-white/20`}>
                  {tech.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;