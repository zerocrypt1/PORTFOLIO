import React, { useState, useEffect } from 'react';
import { Shield, Code, Brain, Zap, Globe, Users, ChevronDown, Star, Sparkles, Binary, Feather, Cloud, Wifi, Lock, Cpu, Import } from 'lucide-react';
import shivansh from '../assets/impshivansh.png'; // Restored original image import

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Set isVisible to true for the initial fade-in animation
    setIsVisible(true);

    // Event listener for mouse movement to control the mouse follower effect
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    // Cleanup function to remove the event listener when the component unmounts
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Function to smoothly scroll to a specific section by its ID
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Component for displaying the technology stack
  const TechStack = () => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 mb-8 px-4">
      {[
        { name: 'Rust', icon: '🦀', color: 'from-orange-500 to-red-600', bgColor: 'bg-orange-600/20' },
        { name: 'Go', icon: '🐹', color: 'from-blue-500 to-cyan-600', bgColor: 'bg-blue-600/20' },
        { name: 'Solidity', icon: '⚡', color: 'from-purple-500 to-indigo-600', bgColor: 'bg-purple-600/20' },
        { name: 'Quantum', icon: '🔮', color: 'from-pink-500 to-rose-600', bgColor: 'bg-pink-600/20' }
      ].map((tech, index) => (
        <div
          key={index}
          className={`${tech.bgColor} backdrop-blur-lg border border-white/30 p-4 sm:p-6 rounded-xl text-center transform hover:scale-110 transition-all duration-500 hover:rotate-3 group cursor-pointer shadow-lg hover:shadow-orange-500/50 relative z-10`} // Added z-10
        >
          <div className="text-3xl sm:text-4xl mb-2 group-hover:animate-pulse">{tech.icon}</div>
          <div className={`font-bold text-lg sm:text-xl bg-gradient-to-r ${tech.color} bg-clip-text text-transparent`}>{tech.name}</div>
          <div className={`h-1 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r ${tech.color} rounded-full mt-2`}></div>
        </div>
      ))}
    </div>
  );

  // Component for displaying cyber defense cards
  const CyberDefenseCards = () => {
    const defenses = [
      {
        title: "Quantum Algorithms",
        description: "Harnessing quantum computing for next-generation cryptography, a 'Shiva Tandava' of unbreakable codes.",
        icon: <Brain className="w-8 h-8" />,
        color: "from-purple-600 to-indigo-700",
        bgColor: "bg-purple-600/20"
      },
      {
        title: "AI-Driven Intelligence",
        description: "AI models for predictive security, acting as 'Vishnu’s Sudarshana Chakra' to foresee and neutralize threats.",
        icon: <Zap className="w-8 h-8" />,
        color: "from-blue-600 to-cyan-700",
        bgColor: "bg-blue-600/20"
      },
      {
        title: "Smart Contract Auditing",
        description: "Ensuring blockchain integrity with 'Lakshmi’s blessings' for secure, prosperous digital agreements.",
        icon: <Code className="w-8 h-8" />,
        color: "from-orange-600 to-red-700",
        bgColor: "bg-orange-600/20"
      },
      {
        title: "Ethical Hacking",
        description: "Penetration testing with 'Hanuman’s strength', wielding ethical tools to fortify digital realms.",
        icon: <Shield className="w-8 h-8" />,
        color: "from-green-600 to-emerald-700",
        bgColor: "bg-green-600/20"
      }
    ];

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        {defenses.map((defense, index) => (
          <div
            key={index}
            className={`${defense.bgColor} backdrop-blur-lg rounded-2xl p-6 sm:p-8 hover:scale-105 transition-all duration-500 border border-white/30 group cursor-pointer relative overflow-hidden shadow-lg hover:shadow-orange-500/50`}
          >
            {/* Animated overlay for hover effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${defense.color} flex items-center justify-center text-white mb-6 group-hover:rotate-12 transition-transform duration-300 relative z-10`}>
              {defense.icon}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-red-600 group-hover:bg-clip-text transition-all duration-300 relative z-10">
              {defense.title}
            </h3>
            <p className="text-amber-100 text-sm sm:text-base leading-relaxed relative z-10">{defense.description}</p>
          </div>
        ))}
      </div>
    );
  };

  // Component for the animated background elements
  const AnimatedBackground = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0"> {/* Added z-0 */}
      {/* Divine Particles animation */}
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-orange-500 to-red-600 rounded-full animate-divine-spark opacity-0"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.2}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
            animationFillMode: 'forwards',
            animationName: 'divineSpark'
          }}
        />
      ))}

      {/* Glowing Om Symbol */}
      <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-gradient-to-br from-orange-500/10 to-red-600/10 rounded-full blur-3xl animate-pulse-slow">
        <div className="text-4xl sm:text-6xl text-orange-400/50 absolute inset-0 flex items-center justify-center animate-spin-slow">🕉</div>
      </div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>

      {/* Mouse Follower effect */}
      <div
        className="absolute w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-full blur-lg opacity-20 pointer-events-none transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
        }}
      />

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes divineSpark {
          0% { opacity: 0; transform: scale(0.5) translateY(0); }
          50% { opacity: 0.9; transform: scale(1.3) translateY(-20px); }
          100% { opacity: 0; transform: scale(0.7) translateY(-40px); }
        }
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.15; }
          50% { transform: scale(1.1); opacity: 0.25; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );

  // Component for glowing text effect - now without the blur duplicate
  const GlowingText = ({ children, className = "" }) => (
    <span className={`relative ${className}`}>
      {/* Base text for readability, no blurred duplicate */}
      <span className="text-white relative z-10">{children}</span>
    </span>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden font-sans pt-16 sm:pt-20"> {/* Adjusted padding-top here */}
      {/* Render the animated background */}
      <AnimatedBackground />

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20 pb-8 overflow-hidden z-10"> {/* Adjusted padding, added z-10 */}
        <div className="absolute inset-0 bg-hero-pattern opacity-10 z-0"></div> {/* Added z-0 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"> {/* Ensured main content is z-10 */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Sacred Symbol & Deity Image */}
            <div className="mb-8 relative flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1598090216740-eb040d8c3f82?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                alt="Lord Shiva"
                className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-cover rounded-full opacity-20 blur-lg animate-spin-slow z-0" // Added z-0
                style={{ animationDuration: '80s' }}
              />
              <div className="text-7xl sm:text-9xl md:text-[10rem] text-transparent bg-gradient-to-r from-orange-500 via-red-600 to-pink-600 bg-clip-text animate-pulse relative z-10">🕉</div> {/* Added z-10 */}
              <div className="absolute w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-orange-500 shadow-2xl transition-all duration-500 hover:scale-110 hover:border-red-600 group z-20"> {/* Ensured image is z-20 */}
                <img
                  src={shivansh} // Reverted to original import
                  alt="Shivansh Mishra"
                  className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-115"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-sm sm:text-base font-semibold">Shivansh</span>
                </div>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight font-sans">
              <span className="block text-white animate-fadeInUp">Shivansh</span>
              <span className="block bg-gradient-to-r from-orange-500 via-red-600 to-pink-600 bg-clip-text text-transparent animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
                Mishra
              </span>
            </h1>

            <div className="text-base sm:text-lg md:text-xl text-amber-200 mb-8 space-y-3 font-sans">
              <p className="animate-fadeInUp flex flex-wrap items-center justify-center gap-2 sm:gap-4" style={{ animationDelay: '0.6s' }}>
                <span className="animate-bounce">🛡️</span> Ethical Cyber Defender | <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>⚛️</span> Quantum AI Alchemist
              </p>
              <p className="animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
                <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>✨</span> Architect & CEO of Glocybs.com
              </p>
              <p className="text-sm sm:text-base italic animate-fadeInUp font-sans" style={{ animationDelay: '1s' }}>
                <GlowingText>"Digital Dharma: Securing the Cosmic Byte"</GlowingText>
              </p>
            </div>

            <div className="text-sm sm:text-base text-amber-100 mb-10 max-w-3xl mx-auto animate-fadeInUp px-4 font-sans">
              <p className="mb-4 italic text-xs sm:text-sm text-white/90">
                "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत,<br />
                अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्।"
              </p>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                Whenever Dharma declines, I manifest to restore integrity and safeguard the digital cosmos.
              </p>
            </div>

            <TechStack />

            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 animate-fadeInUp" style={{ animationDelay: '1.6s' }}>
              <button
                onClick={() => scrollToSection('about')}
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 px-6 sm:px-8 py-3 rounded-full text-white font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50 relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                <span className="flex items-center justify-center gap-2 relative z-10">
                  <Sparkles className="w-5 h-5 animate-spin-slow-reverse" />
                  Explore the Cyber Geeta
                </span>
              </button>
              <button
                onClick={() => scrollToSection('tech')}
                className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 sm:px-8 py-3 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50 relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                <span className="flex items-center justify-center gap-2 relative z-10">
                  <Code className="w-5 h-5 animate-pulse-code" />
                  View Technologies
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow z-10"> {/* Added z-10 */}
          <ChevronDown className="w-8 h-8 text-orange-500 animate-pulse" />
        </div>
        {/* CSS for animations and hero pattern */}
        <style jsx>{`
          @keyframes animate-pulse-fast {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
          }
          @keyframes animate-spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes animate-spin-slow-reverse {
            from { transform: rotate(360deg); }
            to { transform: rotate(0deg); }
          }
          @keyframes animate-bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          @keyframes animate-pulse-code {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.15); }
          }
          .bg-hero-pattern {
            background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF8C00' fill-opacity='0.1'%3E%3Cpath d='M30 30a15 15 0 1 0 0-30 15 15 0 0 0 0 30zm0-3a12 12 0 1 1 0-24 12 12 0 0 1 0 24z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          }
        `}</style>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 bg-black/30 relative border-t border-b border-white/10 shadow-inner z-10"> {/* Added z-10 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent font-sans">
              <GlowingText>The Cyber Geeta: Principles of Digital Warfare</GlowingText>
            </h2>
            <p className="text-base sm:text-lg text-amber-100 max-w-4xl mx-auto leading-relaxed font-sans">
              A manifesto of awareness, resilience, and enlightenment, blending ancient Vedic wisdom with modern cybernetics.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              {[
                {
                  title: "🏛️ Mission: Digital Dharma Raksha",
                  content: "Safeguarding the cyber realm with quantum algorithms and ethical hacking rooted in dharmic principles.",
                  color: "from-blue-600/20 to-cyan-600/20"
                },
                {
                  title: "⚔️ Battle: Against Asura-Bots",
                  content: "Confronting cyber threats like Lord Rama against Ravana, from malware to zero-day exploits.",
                  color: "from-red-600/20 to-orange-600/20"
                },
                {
                  title: "🌟 Vision: Moksha for Data",
                  content: "Uniting Vedic wisdom with technology to create a secure, liberated digital future.",
                  color: "from-purple-600/20 to-pink-600/20"
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-r ${item.color} backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-500 group relative overflow-hidden shadow-md hover:shadow-orange-500/50`}
                >
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-red-600 group-hover:bg-clip-text transition-all duration-300 font-sans">
                    {item.title}
                  </h3>
                  <p className="text-amber-100 text-sm sm:text-base leading-relaxed font-sans">{item.content}</p>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-orange-600/20 to-red-700/20 rounded-3xl p-6 sm:p-8 border border-orange-500/30 backdrop-blur-lg hover:scale-105 transition-all duration-500 group shadow-lg hover:shadow-orange-500/50">
                <div className="text-center mb-6 sm:mb-8">
                  <div className="text-5xl sm:text-6xl mb-4 sm:mb-6 group-hover:animate-bounce">🏹</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-sans">Glocybs.com: Cyber Yuga Vanguard</h3>
                  <p className="text-amber-200 text-sm sm:text-base font-sans">Founder & CEO - Forging Digital Invincibility</p>
                </div>
                <div className="space-y-4">
                  {[
                    { icon: Shield, text: "Ethical Hacking: Penetration 'Yagnas'" },
                    { icon: Brain, text: "Quantum Pioneer: 'Brahma' of Algorithms" },
                    { icon: Code, text: "Blockchain Expert: 'Dharma-Chakra'" },
                    { icon: Zap, text: "AI Innovator: 'Indra’s Net'" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 group/item hover:scale-105 transition-transform duration-300">
                      <item.icon className="w-5 h-5 text-orange-500 group-hover/item:animate-pulse" />
                      <span className="text-white text-sm sm:text-base group-hover/item:text-orange-500 transition-colors duration-300 font-sans">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dharma Section */}
      <section id="dharma" className="py-16 sm:py-20 relative border-t border-b border-white/10 shadow-inner z-10"> {/* Added z-10 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent font-sans">
              <GlowingText>The Dharma of the Cyber Warrior</GlowingText>
            </h2>
            <p className="text-base sm:text-lg text-amber-100 max-w-4xl mx-auto leading-relaxed font-sans">
              "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।"<br />
              Perform your duty without attachment to results, embodying the eternal warrior’s code.
            </p>
          </div>

          <CyberDefenseCards />

          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                emoji: "🛡️",
                title: "Durga's Shield: Firewall of Faith",
                description: "Multi-layered defenses against cyber threats, a cosmic barrier of protection.",
                color: "from-red-600/20 to-pink-600/20"
              },
              {
                emoji: "🏹",
                title: "Arjuna's Bow: Precision Pen Testing",
                description: "Focused penetration testing to neutralize digital vulnerabilities.",
                color: "from-blue-600/20 to-cyan-600/20"
              },
              {
                emoji: "⚡",
                title: "Indra's Vajra: Incident Response",
                description: "Swift threat mitigation, restoring digital equilibrium with divine precision.",
                color: "from-yellow-600/20 to-orange-600/20"
              }
            ].map((item, index) => (
              <div
                key={index}
                className={`text-center bg-gradient-to-r ${item.color} backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-500 group shadow-md hover:shadow-orange-500/50`}
              >
                <div className="text-4xl sm:text-5xl mb-4 group-hover:animate-bounce">{item.emoji}</div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-red-600 group-hover:bg-clip-text transition-all duration-300 font-sans">
                  {item.title}
                </h3>
                <p className="text-amber-100 text-sm sm:text-base leading-relaxed font-sans">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Section */}
      <section id="tech" className="py-16 sm:py-20 bg-black/30 relative border-t border-b border-white/10 shadow-inner z-10"> {/* Added z-10 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent font-sans">
              <GlowingText>The Quantum Conch: Resonant Technologies</GlowingText>
            </h2>
            <p className="text-base sm:text-lg text-amber-100 max-w-4xl mx-auto leading-relaxed font-sans">
              Harnessing technologies like Krishna’s Panchajanya, awakening digital consciousness.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                name: "Rust: The Memory-Safe 'Vajra'",
                description: "Building unbreakable, high-performance cyber tools.",
                icon: <Binary className="w-8 h-8" />,
                color: "from-orange-600 to-red-700",
                bgColor: "bg-orange-600/20"
              },
              {
                name: "Go: Concurrent 'Sahasrara'",
                description: "Scalable microservices for distributed cyber defense.",
                icon: <Cloud className="w-8 h-8" />,
                color: "from-blue-600 to-cyan-700",
                bgColor: "bg-blue-600/20"
              },
              {
                name: "Solidity: Blockchain 'Dharma'",
                description: "Ensuring secure, righteous blockchain transactions.",
                icon: <Lock className="w-8 h-8" />,
                color: "from-purple-600 to-indigo-700",
                bgColor: "bg-purple-600/20"
              },
              {
                name: "Quantum: The 'Ananta' Realm",
                description: "Pioneering quantum-resilient cryptography.",
                icon: <Cpu className="w-8 h-8" />,
                color: "from-pink-600 to-rose-700",
                bgColor: "bg-pink-600/20"
              }
            ].map((tech, index) => (
              <div
                key={index}
                className={`${tech.bgColor} backdrop-blur-lg rounded-2xl p-6 text-center hover:scale-105 transition-all duration-500 border border-white/20 group cursor-pointer shadow-md hover:shadow-orange-500/50`}
              >
                <div className="text-4xl sm:text-5xl mb-4 group-hover:animate-bounce flex justify-center">{tech.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-red-600 group-hover:bg-clip-text transition-all duration-300 font-sans">
                  {tech.name}
                </h3>
                <p className="text-amber-100 text-sm sm:text-base leading-relaxed mb-4 font-sans">{tech.description}</p>
                <div className={`w-full h-2 bg-gradient-to-r ${tech.color} rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>

          <div className="mt-12 sm:mt-16 text-center">
            <div className="bg-gradient-to-r from-orange-600/20 to-red-700/20 rounded-3xl p-6 sm:p-8 border border-orange-500/30 backdrop-blur-lg hover:scale-105 transition-all duration-500 group shadow-xl hover:shadow-orange-500/50">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-red-600 group-hover:bg-clip-text transition-all duration-300 font-sans">
                🌌 The Vision of Vishwarupa
              </h3>
              <p className="text-amber-100 mb-6 text-sm sm:text-base leading-relaxed max-w-4xl mx-auto font-sans">
                Beholding the boundless domain of cybersecurity, uniting infinite devices with one protective consciousness.
              </p>
              <div className="flex justify-center">
                <div className="text-5xl sm:text-6xl animate-pulse group-hover:animate-spin-slow-reverse text-orange-500">⚛️</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 relative z-10"> {/* Added z-10 */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent font-sans">
            <GlowingText>The Oath of the Ethical Hacker</GlowingText>
          </h2>

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 border border-white/20 mb-8 hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-orange-500/50">
            <p className="text-base sm:text-lg text-amber-100 mb-6 italic leading-relaxed font-sans">
              "यत्र योगेश्वरः कृष्णो यत्र पार्थो धनुर्धरः।"
            </p>
            <p className="text-white text-sm sm:text-base font-sans">
              Wherever wisdom and action unite, there lies victory, power, and righteousness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8">
            <div className="bg-gradient-to-r from-orange-600/20 to-red-700/20 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-500 group shadow-lg hover:shadow-orange-500/50">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-red-600 group-hover:bg-clip-text transition-all duration-300 font-sans">🌐 Connect with Glocybs</h3>
              <p className="text-amber-100 mb-4 text-sm sm:text-base font-sans">
                Strengthen your digital defenses with Dharmic Cybersecurity solutions.
              </p>
              <a href="https://glocybs.com" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 px-6 py-3 rounded-full text-white font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-500/50 group relative overflow-hidden">
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                <span className="flex items-center justify-center gap-2 relative z-10">
                  <Globe className="w-5 h-5" /> Visit Glocybs.com
                </span>
              </a>
            </div>

            <div className="bg-gradient-to-r from-blue-600/20 to-purple-700/20 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-500 group shadow-lg hover:shadow-orange-500/50">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-red-600 group-hover:bg-clip-text transition-all duration-300 font-sans">
                Reach Out: The Sankalpa Call
              </h3>
              <p className="text-amber-100 mb-4 text-sm sm:text-base font-sans">
                Connect for consultations or to explore Cyber Dharma.
              </p>
              <div className="space-y-3">
                <a href="mailto:your.email@example.com" className="flex items-center justify-center gap-2 text-white hover:text-orange-500 transition-colors duration-300 text-sm sm:text-base font-sans">
                  <Star className="w-5 h-5 animate-pulse-fast" /> your.email@example.com
                </a>
                <a href="tel:+1234567890" className="flex items-center justify-center gap-2 text-white hover:text-orange-500 transition-colors duration-300 text-sm sm:text-base font-sans">
                  <Users className="w-5 h-5 animate-pulse-fast" /> +1 (234) 567-890
                </a>
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-white hover:text-orange-500 transition-colors duration-300 text-sm sm:text-base font-sans">
                  <Feather className="w-5 h-5 animate-pulse-fast" /> LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;