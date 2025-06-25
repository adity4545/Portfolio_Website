import { Blocks, Cloud, Code, Server } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTheme } from '../ThemeContext';

const Skills = () => {
  const { theme } = useTheme();
  const [animatedSkills, setAnimatedSkills] = useState<{[key: string]: number}>({});

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="w-8 h-8" />,
      skills: [
        { name: "React.js", level: 85, color: "#3b82f6" },
        { name: "Next.js", level: 80, color: "#6366f1" },
        { name: "TypeScript", level: 90, color: "#0ea5e9" },
        { name: "Tailwind CSS", level: 85, color: "#06b6d4" },
        { name: "Redux Toolkit", level: 80, color: "#a21caf" },
        { name: "React Query", level: 80, color: "#f43f5e" }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="w-8 h-8" />,
      skills: [
        { name: "Node.js", level: 75, color: "#22c55e" },
        { name: "Express.js", level: 70, color: "#64748b" },
        { name: "MongoDB", level: 80, color: "#16a34a" },
        { name: "PostgreSQL", level: 80, color: "#2563eb" }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-8 h-8" />,
      skills: [
        { name: "AWS", level: 80, color: "#f59e42" },
        { name: "Vercal", level: 80, color: "#0ea5e9" },
        { name: "GoDadday", level: 85, color: "#6366f1" },
        { name: "CI/CD", level: 88, color: "#22c55e" }
      ]
    },
    {
      title: "Blockchain & Web3",
      icon: <Blocks className="w-8 h-8" />,
      skills: [
        { name: "Solidity", level: 70, color: "#64748b" },
        { name: "Web3.js", level: 60, color: "#f59e42" },
        { name: "Hardhat", level: 60, color: "#facc15" },
        { name: "Smart Contracts", level: 80, color: "#a21caf" }
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
    <section id="skills" className={`py-24 transition-colors duration-500 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Skills & Expertise</h2>
          <p className={`mt-4 text-lg md:text-xl max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Mastering modern technologies to build the future of web development.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {skillCategories.map((category, idx) => (
            <div key={idx} className={`rounded-xl shadow-lg p-8 flex flex-col items-center transition-all duration-300 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="mb-4">{category.icon}</div>
              <h3 className={`text-xl font-semibold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{category.title}</h3>
              <div className="flex flex-col gap-6 w-full">
                {category.skills.map((skill, sidx) => (
                  <div key={sidx} className="flex items-center gap-4">
                    {/* Minimal Progress Bar */}
                    <div className="w-24 h-3 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-3 rounded-full"
                        style={{
                          width: `${animatedSkills[skill.name] || 0}%`,
                          background: skill.color,
                          transition: 'width 1.5s cubic-bezier(.4,2,.6,1)'
                        }}
                      />
                    </div>
                    <span className={`text-base font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>{skill.name}</span>
                    <span className="ml-auto text-sm font-bold" style={{ color: skill.color }}>
                      {animatedSkills[skill.name] || 0}%
                    </span>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;