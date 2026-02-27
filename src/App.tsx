import { useState, useEffect } from 'react';
import { ChevronDown, Target, TrendingUp, Mail, Phone, Linkedin, Award, Users, Lightbulb, Rocket, ExternalLink, X } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const sections = ['hero', 'summary', 'experience', 'projects', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const summary = "Software Development Engineer with 4+ years of experience building scalable cloud infrastructure, distributed systems, and full-stack applications. Expertise in AWS, Azure, and GCP cloud platforms, with proven track record of reducing operational costs by $1M+ annually and improving system performance by 80-90%. Skilled in Java, Kotlin, Python, and modern web technologies, with strong focus on DevOps, microservices architecture, and delivering high-availability systems serving 10,000+ requests per second.";

  const experience = [
    {
      company: "Amazon Web Services",
      role: "Software Development Engineer",
      location: "Seattle, WA",
      dates: "Jun. 2025 – Present",
      highlights: [
        "Delivered an automated media cache cleanup system in Kotlin and Java, leveraging Android SDK APIs to proactively manage device storage, reducing production crashes by 12% and improving stability for 15,000+ active users within a month.",
        "Established a secure, private communication channel using AWS PrivateLink to exchange data between services in separate VPCs, ensuring traffic never traversed the public internet.",
        "Spearheaded the redesign of in-house Java markdown library, replacing RegEx parsing with an HTML-based model to support complex nested formatting, reducing production incidents by 20% for end users.",
        "Expanded UX observability by adding 20+ new metric events, enabling data-driven decisions and faster detection of reliability issues."
      ]
    },
    {
      company: "Motorola Solutions",
      role: "Software Engineer",
      location: "",
      dates: "Jun. 2021 – Jul. 2023",
      highlights: [
        "Cloud Agnostic Infra Deployer - Owned the design and development of cloud infrastructure management pipeline, automating orchestration workflows across AWS and Azure, reducing manual intervention by 50%, thus saving $1M+ in engineering and operational overhead annually.",
        "Engineered Infrastructure-as-Code (IaC) package with 20+ components using AWS CDK (Python), following Object-Oriented design.",
        "Automated workflows, using IaC library, IaC templates (Terraform, Bicep), and automation scripts (Python, Bash, Go), slashing cluster spin up time by 80% (45+ min → 9 min).",
        "Developed and containerized a RESTful API using Express.js and Docker, exposing the cluster management pipeline through TLS-secured HTTPS endpoints behind cloud load balancing.",
        "Deployed the API as a Kubernetes DaemonSet on AWS Auto Scaling Groups, fronted by an AWS Application Load Balancer, reliably scaling to handle 10,000+ requests per second with high availability.",
        "Secured the API at 3 levels: node (NGINX Firewall), network (AWS Security Groups & NACLs), and application (Azure Active Directory).",
        "Leveraged Azure DevOps version control & CI/CD pipelines to streamline development and reduce release errors by 30%.",
        "Partnered with 5+ cross-functional teams to align technical solutions with business goals & needs to deliver high-quality applications.",
        "Legacy Product Revamp - Modernized legacy emergency assistance system, accelerating subscriber provisioning and call-taker response times by 10%.",
        "Enhanced data processing by transitioning to a multi-threaded architecture for parallel query execution on SQL and NoSQL databases, slashing processing time by 90% (35 min → <3min).",
        "Unified data processing and handling workflows across PostgreSQL, MS Access, and Apache CouchDB for faster access to critical information spanning 100,000+ records over 70+ tables."
      ]
    }
  ];

  const projects = [
    {
      title: "Enhancing DSR-LM's abilities to produce robust outputs",
      subtitle: "LLM Research & Symbolic Reasoning",
      category: "Machine Learning Research",
      introduction: "Research project focused on improving logical reasoning capabilities in large language models through integration of differentiable symbolic reasoning modules.",
      problem: "Pre-trained LLMs struggle with complex logical reasoning tasks and maintaining logical integrity in outputs.",
      objective: "Boost logical reasoning capabilities by integrating symbolic reasoning into pre-trained LLMs and incorporating semantic loss for better task accuracy.",
      methodology: [
        "Integrated a differentiable symbolic reasoning module in 4 pre-trained LLMs.",
        "Incorporated semantic loss derived from logical integrity constraints.",
        "Evaluated performance on complex logical reasoning tasks."
      ],
      results: [
        "Enhanced task accuracy by 20% on logical reasoning benchmarks.",
        "Enabled handling of complex logical tasks with greater precision.",
        "Demonstrated effectiveness of combining neural and symbolic approaches."
      ],
      conclusion: "Successfully demonstrated that integrating symbolic reasoning modules can significantly improve LLM performance on logical tasks."
    },
    {
      title: "StockSearch",
      subtitle: "Full-Stack Stock Market Analysis Platform",
      category: "Full-Stack Web Development",
      introduction: "Designed and delivered a user-centric stock market analysis platform with real-time capabilities and comprehensive portfolio management features.",
      problem: "Need for a comprehensive, user-friendly platform for stock market analysis with real-time updates and portfolio management.",
      objective: "Build a scalable stock market analysis platform with auto-complete search, real-time price updates, and wallet management.",
      methodology: [
        "Built frontend using React.js with TypeScript for type safety.",
        "Developed backend APIs using Flask, Express.js, and Node.js.",
        "Implemented MongoDB for flexible data storage.",
        "Employed Redux state management for real-time data updates.",
        "Hosted on GCP AppEngine leveraging serverless infrastructure."
      ],
      results: [
        "Achieved 99.9% uptime with scalable serverless architecture.",
        "Enabled real-time price updates with minimal page reloads.",
        "Delivered seamless user experience with auto-complete search and wallet management."
      ],
      conclusion: "Successfully built a production-ready stock analysis platform demonstrating full-stack development and cloud deployment expertise."
    },
    {
      title: "ASCII Chess",
      subtitle: "Terminal-based Chess Game in C++",
      category: "Game Development",
      introduction: "Developed a fully functional chess game in C++ following Object-Oriented Programming principles for authentic terminal-based gameplay.",
      problem: "Need to implement complex chess rules and moves while ensuring robust error handling and user experience.",
      objective: "Create an authentic chess gameplay experience in terminal with proper rule enforcement and seamless interaction.",
      methodology: [
        "Implemented intricate chess rules and moves following OOP principles.",
        "Incorporated exception handling for robust error management.",
        "Added input validation to prevent invalid moves.",
        "Designed clean class hierarchies for chess pieces and game state."
      ],
      results: [
        "Delivered authentic chess gameplay experience in terminal environment.",
        "Ensured seamless interaction through comprehensive input validation.",
        "Prevented invalid moves through robust exception handling."
      ],
      conclusion: "Demonstrated strong OOP skills and ability to implement complex game logic with proper software engineering practices."
    }
  ];

  const skillCategories = [
    {
      icon: Target,
      title: 'Programming Languages',
      skills: ['Java', 'Kotlin', 'Python', 'C++', 'JavaScript', 'TypeScript', 'Bash', 'Go', 'SQL', 'HTML', 'CSS', 'PHP']
    },
    {
      icon: TrendingUp,
      title: 'Tools & Technologies',
      skills: ['AWS (EC2, Lambda, S3, API Gateway)', 'Azure', 'GCP', 'Git', 'GitHub', 'Kubernetes', 'Docker', 'Ansible', 'Android SDK', 'DevOps']
    },
    {
      icon: Users,
      title: 'Databases & Frameworks',
      skills: ['MySQL', 'SQLite', 'MongoDB', 'AWS DynamoDB', 'AWS RDS', 'Node.js', 'Express.js', 'React.js', 'Flask', 'Django']
    },
    {
      icon: Lightbulb,
      title: 'Core Competencies',
      skills: ['Full-Stack Development', 'Microservices Architecture Design', 'Cloud Infrastructure', 'Infrastructure-as-Code (IaC)', 'CI/CD Pipelines', 'System Design', 'Distributed Systems']
    }
  ];

  const education = [
    {
      school: "University of Southern California",
      degree: "Master of Science in Computer Science",
      dates: "Aug. 2023 – May 2025",
      details: "Courses: Analysis of Algorithms, Database Systems, Natural Language Processing, Software Architectures, Web Technologies."
    },
    {
      school: "Charotar University of Science and Technology",
      degree: "Bachelor of Technology in Computer Engineering",
      dates: "Jul. 2018 – Apr. 2022",
      details: "Courses: Data Structures and Algorithms, Object-Oriented Design, Operating Systems, Networking, Cloud Computing."
    }
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-brown/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-display text-black tracking-wide">DHRUVAM ZAVERI</div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'summary', label: 'Summary' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'education', label: 'Education' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-light tracking-wide transition-colors duration-300 ${
                    activeSection === item.id ? 'text-black font-medium' : 'text-brown hover:text-black'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

            <div className="mb-12">
              <img 
                src="images/image.png"
                alt="Dhruvam Zaveri"
                className="w-36 h-36 rounded-full mx-auto mb-6 object-cover border-4 border-brown/30 shadow-lg"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-display text-black mb-6 tracking-wide">
              DHRUVAM ZAVERI
            </h1>
            <div className="text-lg text-brown mb-2 font-light tracking-widest">
              Software Development Engineer | Cloud Infrastructure | Full-Stack Development
            </div>
            <div className="text-sm uppercase tracking-[0.3em] text-brown/80 mb-1">
              SEATTLE, WA, USA · HYBRID/REMOTE READY
            </div>
            <div className="w-24 h-0.5 bg-brown mx-auto mb-10"></div>
            <p className="text-lg text-brown mb-10 max-w-4xl mx-auto leading-relaxed font-light">
              {summary}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => scrollToSection('experience')}
                className="bg-black text-white px-10 py-4 font-light tracking-wide hover:bg-brown transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                💻 VIEW EXPERIENCE
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border border-black text-black px-10 py-4 font-light tracking-wide hover:bg-black hover:text-white transition-all duration-300"
              >
                📬 CONTACT
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16 text-center">
            {[
              { label: 'COST SAVINGS DELIVERED', value: '$1M+', detail: 'Annual Engineering Overhead' },
              { label: 'PERFORMANCE IMPROVEMENT', value: '80-90%', detail: 'Processing Time Reduction' },
              { label: 'TRAFFIC HANDLED', value: '10,000+', detail: 'Requests Per Second' }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-sm shadow-sm border border-brown/10">
                <div className="text-xs tracking-widest text-brown/70 mb-2">{stat.label}</div>
                <div className="text-3xl font-display text-black mb-1">{stat.value}</div>
                <div className="text-sm text-brown font-light">{stat.detail}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <ChevronDown 
              className="w-6 h-6 text-brown/60 mx-auto animate-bounce cursor-pointer hover:text-black transition-colors"
              onClick={() => scrollToSection('summary')}
            />
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section id="summary" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">SUMMARY</h2>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Software Engineer with expertise in cloud infrastructure, distributed systems, and full-stack development. Building scalable solutions across AWS, Azure, and GCP with focus on high availability and cost optimization.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Target,
                title: 'Cloud Infrastructure',
                detail: 'Designed and deployed cloud-agnostic infrastructure pipelines across AWS and Azure, reducing manual intervention by 50% and saving $1M+ annually in operational costs.'
              },
              {
                icon: Rocket,
                title: 'System Optimization',
                detail: 'Improved system performance by 80-90% through multi-threaded architectures and automation, reducing cluster spin-up time from 45+ minutes to 9 minutes.'
              },
              {
                icon: Lightbulb,
                title: 'Full-Stack Development',
                detail: 'Built and deployed scalable applications handling 10,000+ requests per second using Kubernetes, Docker, and modern web frameworks with comprehensive security layers.'
              }
            ].map((card, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10 text-center">
                <div className="w-14 h-14 bg-black mx-auto mb-6 flex items-center justify-center">
                  <card.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-display text-black mb-4 tracking-wide">{card.title.toUpperCase()}</h3>
                <p className="text-brown leading-relaxed font-light">{card.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">WORK EXPERIENCE</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Software engineering experience at AWS and Motorola Solutions, building scalable cloud infrastructure and distributed systems.
            </p>
          </div>
          <div className="space-y-10">
            {experience.map((role, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{role.role}</h3>
                    <p className="text-brown font-medium">{role.company}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {role.location} {role.location && '·'} {role.dates}
                  </div>
                </div>
                <ul className="space-y-3">
                  {role.highlights.map((highlight, i) => (
                    <li key={i} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">PROJECTS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Machine learning research, full-stack web development, and systems programming projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-cream p-6 rounded-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => setSelectedProject(index)}
              >
                <div className="mb-3">
                  <span className="text-xs font-medium text-brown bg-white px-3 py-1 tracking-wide">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-display text-black mb-3 tracking-wide leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-brown mb-4 font-light">
                  {project.subtitle}
                </p>
                <p className="text-brown leading-relaxed font-light text-sm line-clamp-3">
                  {project.introduction}
                </p>
                <div className="mt-4 flex items-center text-brown hover:text-black transition-colors">
                  <span className="text-sm font-light">View Details</span>
                  <ExternalLink className="w-4 h-4 ml-2" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-brown font-light">
              Interested in detailed methodology or technical implementation?
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-black ml-1 font-regular italic"
              >
                Reach out for comprehensive project documentation.
              </button>
            </p>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm">
            <div className="sticky top-0 bg-white border-b border-brown/20 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-display text-black tracking-wide">
                {projects[selectedProject].title}
              </h2>
              <button 
                onClick={() => setSelectedProject(null)}
                className="text-brown hover:text-black transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-8">
              <div>
                <span className="text-sm font-medium text-brown bg-cream px-3 py-1 tracking-wide">
                  {projects[selectedProject].category}
                </span>
                <p className="text-brown font-light mt-2">
                  {projects[selectedProject].subtitle}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">INTRODUCTION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].introduction}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">PROBLEM STATEMENT</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].problem}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">OBJECTIVE</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].objective}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">METHODOLOGY</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].methodology.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">RESULTS</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].results.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">CONCLUSION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].conclusion}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">SKILLS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Full-stack development, cloud infrastructure, and software engineering expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {skillCategories.map((category, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-black mx-auto mb-8 flex items-center justify-center">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-display text-black mb-6 tracking-wide">{category.title.toUpperCase()}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm text-brown font-light">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display text-black mb-6 tracking-wide">EDUCATION</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{edu.school}</h3>
                    <p className="text-brown font-medium">{edu.degree}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {edu.dates}
                  </div>
                </div>
                <p className="text-brown leading-relaxed font-light">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display mb-8 tracking-wide">CONTACT</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
              Let's discuss software engineering, cloud infrastructure, or full-stack development opportunities.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-8 max-w-md mx-auto">
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-brown mr-6" />
              <a 
                href="tel:+16305064056"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                +1 (630) 506-4056
              </a>
            </div>
            <div className="flex items-center">
              <Linkedin className="w-6 h-6 text-brown mr-6" />
              <a 
                href="https://www.linkedin.com/in/dhruvam-zaveri/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-brown mr-6" />
              <a 
                href="mailto:dhruvam.zaverii@gmail.com"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                dhruvam.zaverii@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brown text-white/80 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-light tracking-wide">
            © 2025 Dhruvam Zaveri · Software Engineering & Cloud Infrastructure.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;