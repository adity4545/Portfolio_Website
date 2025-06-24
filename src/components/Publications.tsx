import { Award, BookOpen, ExternalLink, FileText } from 'lucide-react';

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
      year: "2025",
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

  // Dynamic achievement stats
  const publicationCount = publications.length;
  const certificationCount = certifications.length;
  const latestYear = Math.max(
    ...[...publications, ...certifications].map(item => parseInt(item.year, 10))
  );

  return (
    <section id="publications" className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Publications & Certifications
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            My research contributions and professional certifications in technology and software development.
          </p>
        </div>

        {/* Publications */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-blue-400 mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6" /> Publications
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {publications.map((item, index) => (
              <div key={index} className="bg-gray-800 rounded-xl shadow-md p-6 flex flex-col gap-3 border border-gray-700 hover:border-blue-500 transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-600 text-white">{item.type.charAt(0).toUpperCase() + item.type.slice(1)}</span>
                  <span className="text-xs text-gray-400">{item.year}</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                <div className="text-sm text-gray-400 mb-2">{item.journal}</div>
                <p className="text-gray-300 text-sm mb-3">{item.description}</p>
                <div className="flex items-center gap-2 mt-auto">
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-200 text-sm font-medium">
                    <ExternalLink size={16} /> Read Paper
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-green-400 mb-6 flex items-center gap-2">
            <Award className="w-6 h-6" /> Certifications
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {certifications.map((item, index) => (
              <div key={index} className="bg-gray-800 rounded-xl shadow-md p-6 flex flex-col gap-3 border border-gray-700 hover:border-green-500 transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-green-600 text-white">{item.type.charAt(0).toUpperCase() + item.type.slice(1)}</span>
                  <span className="text-xs text-gray-400">{item.year}</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                <div className="text-sm text-gray-400 mb-2">{item.issuer}</div>
                <div className="flex items-center gap-2 mt-auto">
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-green-400 hover:text-green-200 text-sm font-medium">
                    <ExternalLink size={16} /> View Certificate
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { number: publicationCount, label: "Research Publications", icon: <FileText className="w-7 h-7" /> },
            { number: certificationCount, label: "Certifications", icon: <Award className="w-7 h-7" /> },
            { number: latestYear, label: "Latest Achievement", icon: <BookOpen className="w-7 h-7" /> }
          ].map((stat, index) => (
            <div key={index} className="text-center bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-md">
              <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-blue-400 mb-1">{stat.number}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;