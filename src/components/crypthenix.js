import React from 'react';
import { Shield, Lock, Zap, Brain, Globe, Layers, Eye, RefreshCw, Award, TrendingUp, ShieldCheck, Cpu, Dna, Database, Network, Share2 } from 'lucide-react';

// You will need to replace these placeholder image URLs with actual images
// or ensure you have these images in your project's assets folder.
// Example placeholder images are used here.
// For real deployment, consider using your own optimized images.
const phoenixRisingImg = "https://images.unsplash.com/photo-1598500213123-39185a06757b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvZW5peCUyMHJpc2luZ3xlbnwwfHwwfHwwfDA%3D";
const cyberSecurityAbstractImg = "https://images.unsplash.com/photo-1511370235335-e1250284457e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGN5YmVyJTIwc2VjdXJpdHl8ZW58MHx8MHx8fDA%3D";
const quantumComputingVisual = "https://images.unsplash.com/photo-1590483162391-7299042b322a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHF1YW50dW0lMjBjb21wdXRpbmd8ZW58MHx8MHx8fDA%3D";


const Crypthenix = () => {
  return (
    <section id="crypthenix" className="min-h-screen py-16 sm:py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden z-10">
      {/* Background elements for cosmic feel */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-orange-600/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-red-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 leading-tight font-sans bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent animate-fadeInUp">
          <span className="block">Crypthenix:</span>
          <span className="block text-white">My Rebirth of Cyber Security</span>
        </h2>
        <p className="text-lg sm:text-xl text-amber-200 mb-12 max-w-4xl mx-auto leading-relaxed font-sans animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          As Shivansh Mishra, I introduce Crypthenix – my visionary paradigm for cyber security that embodies resilience and perpetual evolution. Rising from the ashes of conventional defense limitations, Crypthenix synergizes cutting-edge cryptography with adaptive intelligence, ensuring an unbreakable digital shield against the most formidable threats. My mission is to redefine cyber resilience for the global digital ecosystem.
        </p>

        {/* Sanskrit Shloka 1: On Overcoming Challenges/Rebirth */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 border border-white/20 mb-12 animate-fadeInUp shadow-xl hover:shadow-orange-500/50" style={{ animationDelay: '0.6s' }}>
          <p className="text-base sm:text-lg italic text-amber-100 mb-4 leading-relaxed font-sans">
            "मृत्योर्मा अमृतं गमय।"
          </p>
          <p className="text-white text-sm sm:text-base font-sans">
            *“From death, lead me to immortality.”* This ancient prayer resonates with Crypthenix's core: transforming past vulnerabilities into an immortal, unbreakable state of cyber security. I strive to eliminate threats so completely that they cannot rise again.
          </p>
        </div>

        {/* Core Pillars of Crypthenix */}
        <h3 className="text-3xl sm:text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-sans animate-fadeInUp" style={{ animationDelay: '0.9s' }}>
          My Foundational Pillars of Crypthenix
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {/* Cryptographic Resilience */}
          <div className="bg-gradient-to-br from-blue-700/20 to-indigo-800/20 rounded-3xl p-6 sm:p-8 border border-blue-600/30 backdrop-blur-lg shadow-lg hover:shadow-cyan-500/50 transition-all duration-500 transform hover:scale-105">
            <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-blue-500 text-white mb-4 mx-auto">
              <Lock className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 font-sans bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500 text-transparent">
              Quantum-Resistant Cryptography
            </h3>
            <p className="text-amber-100 text-sm sm:text-base leading-relaxed font-sans">
              I implement advanced, quantum-resistant cryptographic protocols to safeguard data against future computational threats. Crypthenix ensures data confidentiality and integrity, even against the most powerful adversaries.
            </p>
          </div>

          {/* Threat Intelligence Phoenix */}
          <div className="bg-gradient-to-br from-orange-700/20 to-red-800/20 rounded-3xl p-6 sm:p-8 border border-orange-600/30 backdrop-blur-lg shadow-lg hover:shadow-orange-500/50 transition-all duration-500 transform hover:scale-105">
            <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-orange-500 text-white mb-4 mx-auto">
              <RefreshCw className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 font-sans bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 text-transparent">
              Adaptive Threat Intelligence
            </h3>
            <p className="text-amber-100 text-sm sm:text-base leading-relaxed font-sans">
              Crypthenix features an intelligent system that learns from every attack, transforming past vulnerabilities into new strengths. My algorithms ensure the system rises stronger and more resilient with each encountered threat.
            </p>
          </div>

          {/* Adaptive Defense Matrix */}
          <div className="bg-gradient-to-br from-purple-700/20 to-pink-800/20 rounded-3xl p-6 sm:p-8 border border-purple-600/30 backdrop-blur-lg shadow-lg hover:shadow-pink-500/50 transition-all duration-500 transform hover:scale-105">
            <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-purple-500 text-white mb-4 mx-auto">
              <Layers className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 font-sans bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 text-transparent">
              Multi-Layered Adaptive Defense
            </h3>
            <p className="text-amber-100 text-sm sm:text-base leading-relaxed font-sans">
              I've engineered Crypthenix with a dynamic, multi-layered defense matrix that adapts in real-time. This ensures comprehensive protection across all vectors, from network perimeters to individual data packets.
            </p>
          </div>
        </div>

        {/* Glocybs.com Tools: BIQUA & QUBISA */}
        <h3 className="text-3xl sm:text-4xl font-bold mb-8 bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent font-sans animate-fadeInUp" style={{ animationDelay: '1.2s' }}>
          Empowering Crypthenix with Glocybs.com Tools
        </h3>
        <p className="text-lg sm:text-xl text-amber-200 mb-12 max-w-4xl mx-auto leading-relaxed font-sans animate-fadeInUp" style={{ animationDelay: '1.3s' }}>
          My vision for Crypthenix is brought to life through the powerful tools developed at Glocybs.com: BIQUA and QUBISA. These innovations form the backbone of Crypthenix's unparalleled defense capabilities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* BIQUA Section */}
          <div className="bg-gradient-to-br from-cyan-700/20 to-blue-800/20 rounded-3xl p-6 sm:p-8 border border-cyan-600/30 backdrop-blur-lg shadow-lg hover:shadow-cyan-500/50 transition-all duration-500 transform hover:scale-105">
            <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-cyan-500 text-white mb-4 mx-auto">
              <Cpu className="w-8 h-8" /> {/* Icon for quantum/processing */}
            </div>
            <h4 className="text-2xl font-bold text-white mb-2 font-sans bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent">
              BIQUA: The Quantum Intelligence Engine
            </h4>
            <p className="text-amber-100 text-sm sm:text-base leading-relaxed font-sans mb-4">
              BIQUA, my brainchild at Glocybs.com, is Crypthenix's quantum-powered analytics core. It enables:
            </p>
            <ul className="list-disc list-inside text-amber-100 text-sm sm:text-base leading-relaxed font-sans text-left mx-auto max-w-md">
              <li className="mb-1 flex items-start"><Dna className="w-4 h-4 mr-2 mt-1 flex-shrink-0" /><span>**Quantum Threat Analysis:** Rapidly processing vast datasets to identify complex, multi-vector threats that classical systems miss.</span></li>
              <li className="mb-1 flex items-start"><Database className="w-4 h-4 mr-2 mt-1 flex-shrink-0" /><span>**Data Integrity Verification:** Utilizing quantum principles to ensure the absolute integrity and authenticity of critical security data.</span></li>
              <li className="mb-1 flex items-start"><Eye className="w-4 h-4 mr-2 mt-1 flex-shrink-0" /><span>**Predictive Anomaly Detection:** Forecasting emerging attack patterns with unprecedented accuracy, allowing for proactive defense.</span></li>
            </ul>
            <a href="https://www.glocybs.com/biqua" target="_blank" rel="noopener noreferrer" className="mt-6 inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-6 py-3 rounded-full text-white font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Learn More about BIQUA
            </a>
          </div>

          {/* QUBISA Section */}
          <div className="bg-gradient-to-br from-yellow-700/20 to-orange-800/20 rounded-3xl p-6 sm:p-8 border border-yellow-600/30 backdrop-blur-lg shadow-lg hover:shadow-orange-500/50 transition-all duration-500 transform hover:scale-105">
            <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-yellow-500 text-white mb-4 mx-auto">
              <Network className="w-8 h-8" /> {/* Icon for network/blockchain */}
            </div>
            <h4 className="text-2xl font-bold text-white mb-2 font-sans bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent">
              QUBISA: The Secure Blockchain Fortress
            </h4>
            <p className="text-amber-100 text-sm sm:text-base leading-relaxed font-sans mb-4">
              QUBISA, another innovation I've spearheaded at Glocybs.com, provides Crypthenix with an immutable and decentralized foundation for:
            </p>
            <ul className="list-disc list-inside text-amber-100 text-sm sm:text-base leading-relaxed font-sans text-left mx-auto max-w-md">
              <li className="mb-1 flex items-start"><Lock className="w-4 h-4 mr-2 mt-1 flex-shrink-0" /><span>**Immutable Security Logs:** Creating tamper-proof records of all security events and responses, crucial for forensics and compliance.</span></li>
              <li className="mb-1 flex items-start"><Share2 className="w-4 h-4 mr-2 mt-1 flex-shrink-0" /><span>**Decentralized Identity Management:** Ensuring secure and verifiable identities across the network, preventing unauthorized access.</span></li>
              <li className="mb-1 flex items-start"><Shield className="w-4 h-4 mr-2 mt-1 flex-shrink-0" /><span>**Secure Transaction Verification:** Validating all cyber operations on a distributed ledger, eliminating single points of failure.</span></li>
            </ul>
            <a href="https://www.glocybs.com/qubisa" target="_blank" rel="noopener noreferrer" className="mt-6 inline-block bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 px-6 py-3 rounded-full text-white font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Learn More about QUBISA
            </a>
          </div>
        </div>

        {/* My Approach to Cyber Resilience (Shivansh's perspective) */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 border border-white/20 mb-12 animate-fadeInUp shadow-xl hover:shadow-orange-500/50" style={{ animationDelay: '1.5s' }}>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-sans bg-clip-text bg-gradient-to-r from-red-400 to-yellow-500 text-transparent text-center">
            My Holistic Approach to Cyber Resilience with Crypthenix
          </h3>
          <p className="text-amber-100 text-sm sm:text-base leading-relaxed font-sans mb-6">
            With Crypthenix, I am building more than just a defense system; I am cultivating a state of digital invincibility. My approach integrates:
          </p>
          <ul className="list-disc list-inside text-amber-100 text-sm sm:text-base leading-relaxed font-sans text-left mx-auto max-w-2xl">
            <li className="mb-2 flex items-start"><Award className="w-5 h-5 text-yellow-400 mr-2 flex-shrink-0" /><span>**Proactive Threat Neutralization:** Leveraging BIQUA's predictive capabilities to neutralize threats before they can inflict damage.</span></li>
            <li className="mb-2 flex items-start"><TrendingUp className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" /><span>**Continuous Adaptive Learning:** Crypthenix constantly evolves, learning from global threat intelligence via QUBISA and refining its defenses.</span></li>
            <li className="mb-2 flex items-start"><ShieldCheck className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0" /><span>**Unbreakable Data Sovereignty:** Ensuring that data remains secure and untampered, regardless of external pressures or sophisticated attacks.</span></li>
            <li className="mb-2 flex items-start"><Globe className="w-5 h-5 text-purple-400 mr-2 flex-shrink-0" /><span>**Global Cyber Harmony:** Contributing to a safer digital world by fostering a network of resilient, interconnected defenses.</span></li>
          </ul>
        </div>

        {/* Visual Representation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105">
            <div className="absolute inset-0 bg-blue-900/80 z-10 flex flex-col items-center justify-center p-4">
              <Zap className="w-16 h-16 text-cyan-400 animate-pulse mb-2" />
              <div className="text-white text-center font-semibold text-lg">Crypthenix Core: Adaptive Defense</div>
            </div>
            <img
              src={cyberSecurityAbstractImg}
              alt="Cyber Security Abstract Visual"
              className="w-full h-auto object-cover opacity-70"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/900x600/000000/FFFFFF?text=Cyber+Security+Image'; }}
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105">
            <div className="absolute inset-0 bg-orange-900/80 z-10 flex flex-col items-center justify-center p-4">
              <RefreshCw className="w-16 h-16 text-orange-400 animate-bounce mb-2" />
              <div className="text-white text-center font-semibold text-lg">Phoenix Rebirth: Continuous Evolution</div>
            </div>
            <img
              src={phoenixRisingImg}
              alt="Phoenix Rising Visual"
              className="w-full h-auto object-cover opacity-70"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/900x600/000000/FFFFFF?text=Phoenix+Image'; }}
            />
          </div>
        </div>

        {/* Sanskrit Shloka 2: On Invincibility/Skill in Action */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 border border-white/20 mb-12 animate-fadeInUp shadow-xl hover:shadow-orange-500/50">
          <p className="text-base sm:text-lg italic text-amber-100 mb-4 leading-relaxed font-sans">
            "योगः कर्मसु कौशलम्।"
          </p>
          <p className="text-white text-sm sm:text-base font-sans">
            *“Yoga is skill in action.”* For me, Crypthenix embodies this principle: a system of unparalleled skill and efficiency in its every defensive action, ensuring seamless and unbreakable cyber protection.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <p className="text-xl sm:text-2xl italic text-amber-200 mb-6 font-sans">
            Ready to secure your digital future with Crypthenix, my ultimate cyber defense vision?
          </p>
          <a
            href="#contact" // Link to your contact section
            className="inline-block bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 px-8 py-4 rounded-full text-white font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 group relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            <span className="flex items-center justify-center gap-2 relative z-10">
              <Shield className="w-6 h-6 animate-pulse" /> Discover Crypthenix Solutions
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Crypthenix;
