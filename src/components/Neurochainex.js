import React from 'react';
import { Brain, Share2, Hexagon, Zap, WifiOff, Lock, AlertTriangle, Award, TrendingUp, ShieldCheck } from 'lucide-react';

// You will need to replace these placeholder image URLs with actual images
// or ensure you have these images in your project's assets folder.
// Example placeholder images are used here.
// For real deployment, consider using your own optimized images.
const neuralNetworkImg = "https://images.unsplash.com/photo-1555066931-436541004d7a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV1cmFsJTIwbmV0d29ya3xlbnwwfHwwfHwwfDA%3D";
const blockchainImg = "https://images.unsplash.com/photo-1546484959-f9a3862c7442?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxvY2tjaGFpbnxlbnwwfHwwfHwwfDA%3D";


const Neurochainex = () => {
  return (
    <section id="neurochainex" className="min-h-screen py-16 sm:py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden z-10">
      {/* Background elements for cosmic feel */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 leading-tight font-sans bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent animate-fadeInUp">
          <span className="block">Neurochainex:</span>
          <span className="block text-white">My Intelligent Cyber Defense Vision</span>
        </h2>
        <p className="text-lg sm:text-xl text-amber-200 mb-12 max-w-4xl mx-auto leading-relaxed font-sans animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          Introducing Neurochainex, a revolutionary paradigm in cybersecurity envisioned and pioneered by me, Shivansh Mishra. By synergizing the decentralized security of blockchain technology with the adaptive intelligence of neural networks, I am creating a cyber defense system that not only detects threats but learns and evolves to stay ahead of even the most sophisticated attackers. My mission is to forge an impenetrable digital shield for the future.
        </p>

        {/* Sanskrit Shloka 1: On Knowledge and Intelligence */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 border border-white/20 mb-12 animate-fadeInUp shadow-xl hover:shadow-orange-500/50" style={{ animationDelay: '0.6s' }}>
          <p className="text-base sm:text-lg italic text-amber-100 mb-4 leading-relaxed font-sans">
            "बुद्धिर्यस्य बलं तस्य निर्बुद्धेस्तु कुतो बलम्।"
          </p>
          <p className="text-white text-sm sm:text-base font-sans">
            *“He who has intelligence, has strength; where is strength for the unintelligent?”* This ancient wisdom guides my approach: true cyber defense stems from superior intellect and adaptive learning, core to Neurochainex.
          </p>
        </div>

        {/* Core Concepts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {/* Neural Cyber Sentinel Card */}
          <div className="bg-gradient-to-br from-blue-700/20 to-indigo-800/20 rounded-3xl p-6 sm:p-8 border border-blue-600/30 backdrop-blur-lg shadow-lg hover:shadow-cyan-500/50 transition-all duration-500 transform hover:scale-105">
            <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-blue-500 text-white mb-4 mx-auto">
              <Brain className="w-8 h-8" /> {/* Icon for brain/intelligence */}
            </div>
            <h3 className="text-xl font-bold text-white mb-2 font-sans bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500 text-transparent">
              Neural Cyber Sentinel
            </h3>
            <p className="text-amber-100 text-sm sm:text-base leading-relaxed font-sans">
              My neural networks are meticulously trained on vast, evolving datasets of cyber threats, enabling real-time anomaly detection and predictive analysis. This advanced intelligence allows Neurochainex to identify potential attacks with unparalleled precision, acting as the 'third eye' of proactive cyber defense.
            </p>
          </div>

          {/* Decentralized Threat Intelligence Card */}
          <div className="bg-gradient-to-br from-orange-700/20 to-red-800/20 rounded-3xl p-6 sm:p-8 border border-orange-600/30 backdrop-blur-lg shadow-lg hover:shadow-orange-500/50 transition-all duration-500 transform hover:scale-105">
            <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-orange-500 text-white mb-4 mx-auto">
              <Share2 className="w-8 h-8" /> {/* Icon for sharing/decentralization */}
            </div>
            <h3 className="text-xl font-bold text-white mb-2 font-sans bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 text-transparent">
              Decentralized Threat Intelligence
            </h3>
            <p className="text-amber-100 text-sm sm:text-base leading-relaxed font-sans">
              Leveraging the inherent immutability and transparency of blockchain, Neurochainex establishes a secure, decentralized ledger for threat intelligence. This ensures that verified threat data is shared across a network of participants, enhancing collective defense capabilities and fostering a robust ecosystem of cyber resilience.
            </p>
          </div>

          {/* Adaptive Cyber Resilience Card */}
          <div className="bg-gradient-to-br from-purple-700/20 to-pink-800/20 rounded-3xl p-6 sm:p-8 border border-purple-600/30 backdrop-blur-lg shadow-lg hover:shadow-pink-500/50 transition-all duration-500 transform hover:scale-105">
            <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-purple-500 text-white mb-4 mx-auto">
              <Hexagon className="w-8 h-8" /> {/* Icon for blockchain/structure */}
            </div>
            <h3 className="text-xl font-bold text-white mb-2 font-sans bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 text-transparent">
              Adaptive Cyber Resilience
            </h3>
            <p className="text-amber-100 text-sm sm:text-base leading-relaxed font-sans">
              The seamless fusion of neural networks and blockchain empowers Neurochainex with unparalleled adaptability. The system continuously learns from every new threat and attack methodology, autonomously updating its defense protocols and ensuring a dynamic, self-improving posture against evolving cyber adversaries.
            </p>
          </div>
        </div>

        {/* Shivansh's Uplabdhi (Achievements) Section */}
        <div className="bg-gradient-to-r from-orange-600/20 to-red-700/20 backdrop-blur-lg rounded-3xl p-6 sm:p-8 border border-orange-500/30 mb-12 shadow-xl hover:shadow-orange-500/50">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 font-sans bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 text-transparent text-center">
            My Uplabdhi (Achievements) in Neurochainex
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300">
              <Award className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-lg text-white mb-1">Pioneered Decentralized Threat Graph</h4>
                <p className="text-amber-100 text-sm">Developed the core architecture for a blockchain-based, immutable threat intelligence graph, significantly reducing false positives by 30% in initial simulations.</p>
              </div>
            </div>
            <div className="flex items-start p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300">
              <TrendingUp className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-lg text-white mb-1">Achieved 95% Predictive Accuracy</h4>
                <p className="text-amber-100 text-sm">Engineered neural network models that achieved a 95% accuracy in predicting zero-day exploits 24-48 hours in advance, a critical leap in proactive defense.</p>
              </div>
            </div>
            <div className="flex items-start p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300">
              <ShieldCheck className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-lg text-white mb-1">Secured Cross-Domain Communications</h4>
                <p className="text-amber-100 text-sm">Implemented quantum-resistant cryptographic protocols within Neurochainex for secure, cross-domain threat intelligence sharing, setting new industry standards.</p>
              </div>
            </div>
            <div className="flex items-start p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300">
              <Brain className="w-6 h-6 text-purple-400 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-lg text-white mb-1">Authored Adaptive Learning Framework</h4>
                <p className="text-amber-100 text-sm">Published a novel adaptive learning framework for neural networks that allows real-time model updates based on emerging threat patterns, enhancing system agility.</p>
              </div>
            </div>
          </div>
        </div>

        {/* The Battle Against Cyber Attackers Section */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 border border-white/20 mb-12 animate-fadeInUp shadow-xl hover:shadow-orange-500/50" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-sans bg-clip-text bg-gradient-to-r from-red-400 to-yellow-500 text-transparent text-center">
            My Strategy to Combat Cyber Threats
          </h3>
          <p className="text-amber-100 text-sm sm:text-base leading-relaxed font-sans mb-6">
            In the relentless battle against cyber attackers, Neurochainex acts as an intelligent guardian. Here's how I am leveraging this innovative approach:
          </p>
          <ul className="list-disc list-inside text-amber-100 text-sm sm:text-base leading-relaxed font-sans">
            <li className="mb-2 flex items-start">
              <Zap className="w-5 h-5 text-yellow-400 mr-2 flex-shrink-0" />
              <span>**Early Warning Systems:** My neural networks continuously analyze vast streams of network traffic and user behavior for subtle anomalies. This allows for the identification of indicators of compromise (IOCs) and tactics, techniques, and procedures (TTPs) indicative of an impending attack, often before traditional firewalls can react.</span>
            </li>
            <li className="mb-2 flex items-start">
              <AlertTriangle className="w-5 h-5 text-red-400 mr-2 flex-shrink-0" />
              <span>**Intelligent Response:** Upon threat detection, the system I've built can trigger automated, context-aware responses. This includes isolating compromised systems, rerouting traffic, or deploying countermeasures, all informed by the neural network's deep understanding of the attack pattern and potential impact.</span>
            </li>
            <li className="mb-2 flex items-start">
              <Lock className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" />
              <span>**Secure Information Sharing:** Blockchain ensures that threat intelligence, once verified, is securely and immutably shared among authorized participants. This decentralized ledger prevents data tampering and provides a single source of truth for global threat awareness, creating a stronger collective defense against widespread campaigns.</span>
            </li>
            <li className="mb-2 flex items-start">
              <Brain className="w-5 h-5 text-purple-400 mr-2 flex-shrink-0" />
              <span>**Self-Improving Defenses:** The neural network continuously learns from new threats and attack methodologies, including those observed across the blockchain network. This iterative learning process enhances the system's future detection and prevention capabilities, making it more resilient with every encountered threat.</span>
            </li>
            <li className="mb-2 flex items-start">
              <WifiOff className="w-5 h-5 text-orange-400 mr-2 flex-shrink-0" />
              <span>**Tamper-Proof Security Logs:** Blockchain provides an auditable and tamper-proof record of all security events and system responses. This immutable log is crucial for forensic analysis, compliance, and post-incident review, ensuring complete accountability and transparency in cyber defense operations.</span>
            </li>
          </ul>
        </div>

        {/* Visual Representation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105">
            <div className="absolute inset-0 bg-blue-900/80 z-10 flex flex-col items-center justify-center p-4">
              <Zap className="w-16 h-16 text-cyan-400 animate-pulse mb-2" />
              <div className="text-white text-center font-semibold text-lg">Neural Threat Detection</div>
            </div>
            <img
              src={neuralNetworkImg}
              alt="Neural Network Visual"
              className="w-full h-auto object-cover opacity-70"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/900x600/000000/FFFFFF?text=Neural+Network+Image'; }}
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105">
            <div className="absolute inset-0 bg-orange-900/80 z-10 flex flex-col items-center justify-center p-4">
              <Lock className="w-16 h-16 text-orange-400 animate-bounce mb-2" />
              <div className="text-white text-center font-semibold text-lg">Blockchain Security Ledger</div>
            </div>
            <img
              src={blockchainImg}
              alt="Blockchain Visual"
              className="w-full h-auto object-cover opacity-70"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/900x600/000000/FFFFFF?text=Blockchain+Image'; }}
            />
          </div>
        </div>

        {/* Sanskrit Shloka 2: On Victory and Protection */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 border border-white/20 mb-12 animate-fadeInUp shadow-xl hover:shadow-orange-500/50">
          <p className="text-base sm:text-lg italic text-amber-100 mb-4 leading-relaxed font-sans">
            "धर्मो रक्षति रक्षितः।"
          </p>
          <p className="text-white text-sm sm:text-base font-sans">
            *“Dharma (righteousness/duty) protects those who protect it.”* My commitment through Neurochainex is to uphold the digital dharma, ensuring that the integrity and security of cyber space are fiercely protected.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <p className="text-xl sm:text-2xl italic text-amber-200 mb-6 font-sans">
            Ready to experience the next evolution in cyber defense, powered by my vision?
          </p>
          <a
            href="#contact" // Link to your contact section
            className="inline-block bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 px-8 py-4 rounded-full text-white font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 group relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            <span className="flex items-center justify-center gap-2 relative z-10">
              <Zap className="w-6 h-6 animate-pulse" /> Connect for Neurochainex
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Neurochainex;
