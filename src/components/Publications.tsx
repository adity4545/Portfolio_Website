import React from 'react';
import { ExternalLink, FileText, Award, BookOpen } from 'lucide-react';

const Publications = () => {
  const publications = [
    {
      title: "FRAUD DETACTION: USING ARTIFICIAL INTELLIGENCE",
      journal: "International Journal of Research in Engineering and Technology",
      year: "2024",
      description: "This literature review summarizes recent advancements (2018-2023) in AI-based fraud detection across finance, e-commerce, and insurance, exploring diverse techniques like machine learning, deep learning, and federated learning, while addressing challenges such as data imbalance and evolving fraud tactics.",
      link: "https://ijrpr.com/uploads/V5ISSUE5/IJRPR29039.pdf",
      type: "research",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "SENSOR MATI real time object detection and navigation for blind people ",
      journal: "International Journal of Research in Engineering and Technology",
      year: "2024",
      description: "Real-time AI object detection transforms visual data into audio, enabling accurate and independent navigation for the visually impaired.",
      link: "https://www.ijcrt.org/papers/IJCRT2504139.pdf",
      type: "research",
      gradient: "from-blue-500 to-cyan-500"
    }
  ];

  const certifications = [
    {
      title: "CYPHIER It Event",
      issuer: "ACM Chapter At Jain (Deemed To Be) University",
      year: "2024",
      // description: "Comprehensive certification covering MERN stack development and modern web technologies.",
      link: "https://drive.google.com/file/d/1kvctxwAjCdwiP64f9eTZPsFl1jVh88Cj/view?usp=drive_link",
      type: "certification",
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Student Skill Enhancement Workshop",
      issuer: "ACM Chapter At Jain (Deemed To Be) University", 
      year: "2024",
      // description: "Specialized training in smart contract development and decentralized application creation.",
      link: "https://drive.google.com/file/d/1FAqx1U_AeXITY0sQflUORKTt8MEyhdha/view?usp=drive_link",
      type: "certification",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const allItems = [
    ...publications.map(item => ({ ...item, category: 'Publications' })),
    ...certifications.map(item => ({ ...item, category: 'Certifications' }))
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'research':
        return <FileText className="w-8 h-8" />;
      case 'certification':
        return <Award className="w-8 h-8" />;
      default:
        return <BookOpen className="w-8 h-8" />;
    }
  };

  return (
    <section id="publications" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl mb-6">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Publications & Certifications
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            My research contributions and professional certifications in technology and software development.
          </p>
        </div>

        <div className="space-y-8">
          {allItems.map((item, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-gray-600 rounded-3xl p-8 transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              <div className="flex items-start space-x-6">
                {/* Icon */}
                <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                  {getIcon(item.type)}
                </div>
                
                {/* Content */}
                <div className="flex-grow">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-gray-400 text-lg font-medium mt-2 lg:mt-0">
                      {item.year}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <span className={`inline-block px-4 py-2 bg-gradient-to-r ${item.gradient} text-white text-sm font-medium rounded-full mr-4`}>
                      {item.category}
                    </span>
                    <span className="text-gray-300 text-lg">
                      {item.type === 'research' ? item.journal : item.issuer}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                    {item.description}
                  </p>
                  
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-gray-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 text-white px-6 py-3 rounded-2xl font-medium transition-all duration-300 transform hover:-translate-y-1 border border-gray-600 hover:border-transparent"
                  >
                    <ExternalLink size={20} />
                    <span>
                      {item.type === 'research' ? 'Read Paper' : 'View Certificate'}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { number: "2", label: "Research Publication", icon: <FileText className="w-8 h-8" /> },
            { number: "2", label: "Professional Certifications", icon: <Award className="w-8 h-8" /> },
            { number: "2024", label: "Latest Achievement", icon: <BookOpen className="w-8 h-8" /> }
          ].map((stat, index) => (
            <div key={index} className="text-center bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;