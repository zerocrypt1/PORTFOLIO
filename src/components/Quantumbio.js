import React from 'react';
import { Atom, Leaf, Brain, FlaskConical, Microscope, Dna, Lightbulb } from 'lucide-react';

// Image imports (ensure these paths are correct in your project)
import saraswatiImg from '../assets/sarswati.jpg'; // Example image for knowledge/wisdom
import vishnuLotusImg from '../assets/vishnulotus.jpg'; // Example image for creation/preservation

const QuantumBio = () => {
  return (
    <section id="quantum-bio" className="min-h-screen py-16 sm:py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden z-10">
      {/* Background elements for cosmic feel */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 leading-tight font-sans bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent animate-fadeInUp">
          <span className="block">The Quantum Bio-Verse:</span>
          <span className="block text-white">My Vision</span>
        </h2>
        <p className="text-lg sm:text-xl text-amber-200 mb-12 max-w-4xl mx-auto leading-relaxed font-sans animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          Welcome to the cutting edge where the ancient wisdom of life meets the ultimate frontier of computation. As Shivansh Mishra, I am a pioneer at the confluence of quantum mechanics and biological systems, embarking on a journey to unlock the universe's most intricate secrets. This is not just technology; it's my profound quest into the very essence of existence, guided by the principles of cosmic harmony and digital dharma.
        </p>

        {/* Shloka Section */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 border border-white/20 mb-12 animate-fadeInUp shadow-xl hover:shadow-orange-500/50" style={{ animationDelay: '0.6s' }}>
          <p className="text-base sm:text-lg italic text-amber-100 mb-4 leading-relaxed font-sans">
            "विद्या ददाति विनयं विनयाद् याति पात्रताम्।"
          </p>
          <p className="text-white text-sm sm:text-base font-sans">
            Knowledge bestows humility; from humility comes worthiness. In my pursuit of the quantum bio realm, I believe continuous learning and humble innovation pave the path to understanding life's deepest codes.
          </p>
        </div>

        {/* Deity Imagery Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-700/20 to-indigo-800/20 rounded-3xl p-6 sm:p-8 border border-blue-600/30 backdrop-blur-lg shadow-lg hover:shadow-cyan-500/50 transition-all duration-500 transform hover:scale-105">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-sans bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500 text-transparent">
              Atma & Parmanu: Soul of the Cosmos
            </h3>
            <div className="flex justify-center mb-6">
              <img
                src={saraswatiImg}
                alt="Devi Saraswati - Goddess of Knowledge"
                className="w-40 h-40 sm:w-48 sm:h-48 object-cover rounded-full border-4 border-blue-500 shadow-2xl transition-all duration-500 hover:scale-110 hover:border-cyan-600"
              />
            </div>
            <p className="text-amber-100 text-sm sm:text-base leading-relaxed font-sans">
              Just as Devi Saraswati embodies knowledge and wisdom, I explore how quantum principles reveal the profound intelligence embedded within every atom and cell, linking the macroscopic and microscopic, the spiritual and the scientific.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-700/20 to-red-800/20 rounded-3xl p-6 sm:p-8 border border-orange-600/30 backdrop-blur-lg shadow-lg hover:shadow-orange-500/50 transition-all duration-500 transform hover:scale-105">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-sans bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 text-transparent">
              Vishnu's Lotus: Life's Creation
            </h3>
            <div className="flex justify-center mb-6">
              <img
                src={vishnuLotusImg}
                alt="Lord Vishnu with Lotus - Symbol of Creation"
                className="w-40 h-40 sm:w-48 sm:h-48 object-cover rounded-full border-4 border-orange-500 shadow-2xl transition-all duration-500 hover:scale-110 hover:border-red-600"
              />
            </div>
            <p className="text-amber-100 text-sm sm:text-base leading-relaxed font-sans">
              Inspired by Lord Vishnu, the preserver and creator, my work in quantum bio aims to preserve health and create new solutions for humanity, fostering well-being through cutting-edge biological insights.
            </p>
          </div>
        </div>

        <h3 className="text-3xl sm:text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-sans animate-fadeInUp" style={{ animationDelay: '0.9s' }}>
          My Core Pillars of Quantum Bio Exploration
        </h3>

        {/* Quantum Bio Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {[
            {
              title: "Vedic Genomics: Unraveling the Genetic Code",
              description: "I utilize quantum algorithms to swiftly analyze complex genetic data, like deciphering ancient texts to reveal hidden wisdom.",
              icon: <Dna className="w-8 h-8" />,
              color: "from-pink-600 to-rose-700",
              bgColor: "bg-pink-600/20"
            },
            {
              title: "Quantum Drug Discovery: The Elixir of Immortality",
              description: "I simulate molecular interactions with quantum fidelity to design new, life-saving therapies.",
              icon: <FlaskConical className="w-8 h-8" />,
              color: "from-green-600 to-emerald-700",
              bgColor: "bg-green-600/20"
            },
            {
              title: "Neuro-Quantum Interface: Bridging Mind & Machine",
              description: "I am exploring quantum computing to interface with neural networks, bridging consciousness and computation.",
              icon: <Brain className="w-8 h-8" />,
              color: "from-purple-600 to-indigo-700",
              bgColor: "bg-purple-600/20"
            },
            {
              title: "Bio-Computational Harmony: Prakriti & Purusha",
              description: "I am fusing natural biological processes with quantum computational power for symbiotic advancements.",
              icon: <Leaf className="w-8 h-8" />,
              color: "from-lime-600 to-teal-700",
              bgColor: "bg-lime-600/20"
            },
            {
              title: "Quantum Sensing for Health: Prana-Scan",
              description: "I am developing hyper-sensitive quantum sensors for early detection and precise diagnostics in biological systems.",
              icon: <Microscope className="w-8 h-8" />,
              color: "from-yellow-600 to-orange-700",
              bgColor: "bg-yellow-600/20"
            },
            {
              title: "AI-Accelerated Bio-Insights: Viveka's Eye",
              description: "I leverage advanced AI within quantum frameworks to gain discriminative knowledge from vast biological data.",
              icon: <Lightbulb className="w-8 h-8" />,
              color: "from-blue-600 to-cyan-700",
              bgColor: "bg-blue-600/20"
            }
          ].map((pillar, index) => (
            <div
              key={index}
              className={`${pillar.bgColor} backdrop-blur-lg rounded-2xl p-6 hover:scale-105 transition-all duration-500 border border-white/20 group cursor-pointer shadow-md hover:shadow-orange-500/50`}
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center text-white mb-4 group-hover:rotate-6 transition-transform duration-300 mx-auto`}>
                {pillar.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-red-600 group-hover:bg-clip-text transition-all duration-300 font-sans">
                {pillar.title}
              </h4>
              <p className="text-amber-100 text-sm leading-relaxed font-sans">{pillar.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <p className="text-xl sm:text-2xl italic text-amber-200 mb-6 font-sans">
            "यतो धर्मस्ततो जयः।"
          </p>
          <p className="text-base sm:text-lg text-white/80 max-w-4xl mx-auto mb-8 font-sans">
            *“Where there is Dharma, there is victory.”* This principle guides my journey in Quantum Bio. Ethical research and responsible innovation will lead to breakthroughs that benefit all.
          </p>
          <a
            href="#contact" // Link to your contact section
            className="inline-block bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 px-8 py-4 rounded-full text-white font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 group relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            <span className="flex items-center justify-center gap-2 relative z-10">
              <Atom className="w-6 h-6 animate-pulse" /> Explore My Quantum Bio Insights
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default QuantumBio;