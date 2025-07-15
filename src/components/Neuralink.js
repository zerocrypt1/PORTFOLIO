import React, { useState } from 'react';
import { Brain, MessageSquare, Cpu, User, Mail, Send, Award, Zap, Lightbulb, TrendingUp } from 'lucide-react';

// Placeholder image URLs - replace with actual images if available
const neuralInterfaceImg = "https://images.unsplash.com/photo-1579547622941-11d2b270724b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5ldXJhbGlua3xlbnwwfHwwfHwwfDA%3D";
const aiBrainImg = "https://images.unsplash.com/photo-1620712943506-ed291c7879d5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWklMjBicmFpbnxlbnwwfHwwfHwwfDA%3D";

const Neuralink = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend.
    // For this portfolio, we'll direct them to email.
    const subject = encodeURIComponent(`Inquiry from Neuralink Page: ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:shivansh@glocybs.com?subject=${subject}&body=${body}`;
    alert("Thank you for your message! Your email client should open shortly. If not, please email shivansh@glocybs.com directly.");
  };

  return (
    <section id="neuralink" className="min-h-screen py-16 sm:py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden z-10">
      {/* Background elements for cosmic feel */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 leading-tight font-sans bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent animate-fadeInUp">
          <span className="block">Neuralink:</span>
          <span className="block text-white">My Vision for Cognitive Augmentation</span>
        </h2>
        <p className="text-lg sm:text-xl text-amber-200 mb-12 max-w-4xl mx-auto leading-relaxed font-sans animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          As Shivansh Mishra, I am driven by the profound potential of merging human intellect with artificial intelligence. My work in Neuralink explores the seamless integration of AI, Natural Language Processing (NLP), and Machine Learning (ML) to unlock unprecedented cognitive capabilities, fostering a harmonious future where human intuition is amplified by digital intelligence.
        </p>

        {/* Sanskrit Shloka 1: On Mind and Knowledge */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 border border-white/20 mb-12 animate-fadeInUp shadow-xl hover:shadow-orange-500/50" style={{ animationDelay: '0.6s' }}>
          <p className="text-base sm:text-lg italic text-amber-100 mb-4 leading-relaxed font-sans">
            "मन एव मनुष्याणां कारणं बन्धमोक्षयोः।"
          </p>
          <p className="text-white text-sm sm:text-base font-sans">
            *“Mind alone is the cause of bondage and liberation for human beings.”* This ancient wisdom guides my Neuralink vision: by understanding and augmenting the mind through advanced AI, I aim to liberate human potential and expand our cognitive horizons.
          </p>
        </div>

        {/* Core Pillars of Neuralink */}
        <h3 className="text-3xl sm:text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-sans animate-fadeInUp" style={{ animationDelay: '0.9s' }}>
          My Foundational Pillars of Neuralink
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {/* AI-Driven Cognitive Enhancement */}
          <div className="bg-gradient-to-br from-blue-700/20 to-indigo-800/20 rounded-3xl p-6 sm:p-8 border border-blue-600/30 backdrop-blur-lg shadow-lg hover:shadow-cyan-500/50 transition-all duration-500 transform hover:scale-105">
            <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-blue-500 text-white mb-4 mx-auto">
              <Brain className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 font-sans bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500 text-transparent">
              AI for Cognitive Augmentation
            </h3>
            <p className="text-amber-100 text-sm sm:text-base leading-relaxed font-sans">
              I develop sophisticated AI models that integrate with neural interfaces to enhance memory, processing speed, and problem-solving abilities, pushing the boundaries of human cognition.
            </p>
          </div>

          {/* Natural Language Processing (NLP) */}
          <div className="bg-gradient-to-br from-orange-700/20 to-red-800/20 rounded-3xl p-6 sm:p-8 border border-orange-600/30 backdrop-blur-lg shadow-lg hover:shadow-orange-500/50 transition-all duration-500 transform hover:scale-105">
            <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-orange-500 text-white mb-4 mx-auto">
              <MessageSquare className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 font-sans bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 text-transparent">
              Seamless NLP Integration
            </h3>
            <p className="text-amber-100 text-sm sm:text-base leading-relaxed font-sans">
              My NLP advancements enable direct thought-to-text conversion and intuitive human-computer communication, dissolving the barriers between intention and digital action.
            </p>
          </div>

          {/* Machine Learning for Adaptation */}
          <div className="bg-gradient-to-br from-purple-700/20 to-pink-800/20 rounded-3xl p-6 sm:p-8 border border-purple-600/30 backdrop-blur-lg shadow-lg hover:shadow-pink-500/50 transition-all duration-500 transform hover:scale-105">
            <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-purple-500 text-white mb-4 mx-auto">
              <Cpu className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 font-sans bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 text-transparent">
              Adaptive ML for Neural Harmony
            </h3>
            <p className="text-amber-100 text-sm sm:text-base leading-relaxed font-sans">
              I leverage sophisticated ML algorithms to ensure Neuralink systems adapt dynamically to individual cognitive patterns, providing a personalized and harmonious augmentation experience.
            </p>
          </div>
        </div>

        {/* My Achievements in Neuralink */}
        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-700/20 backdrop-blur-lg rounded-3xl p-6 sm:p-8 border border-cyan-500/30 mb-12 shadow-xl hover:shadow-cyan-500/50">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 font-sans bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent text-center">
            My Milestones in Neuralink Research
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300">
              <Award className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-lg text-white mb-1">Developed Low-Latency Neural Decoders</h4>
                <p className="text-amber-100 text-sm">Pioneered neural decoding algorithms achieving sub-10ms latency for thought-to-action translation, a critical step for real-time interfaces.</p>
              </div>
            </div>
            <div className="flex items-start p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300">
              <TrendingUp className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-lg text-white mb-1">Achieved 90% Accuracy in Semantic Parsing</h4>
                <p className="text-amber-100 text-sm">My NLP models demonstrated 90% accuracy in parsing complex semantic intent directly from neural signals, enabling richer communication.</p>
              </div>
            </div>
            <div className="flex items-start p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300">
              <Zap className="w-6 h-6 text-red-400 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-lg text-white mb-1">Optimized AI for Brain-Computer Interfaces</h4>
                <p className="text-amber-100 text-sm">Engineered lightweight AI architectures suitable for implantable BCIs, minimizing power consumption while maximizing computational efficiency.</p>
              </div>
            </div>
            <div className="flex items-start p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300">
              <Lightbulb className="w-6 h-6 text-purple-400 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-lg text-white mb-1">Published Research on Adaptive Learning</h4>
                <p className="text-amber-100 text-sm">Authored key papers on ML frameworks that allow BCIs to continuously learn and adapt to neural plasticity, ensuring long-term interface stability.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Representation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105">
            <div className="absolute inset-0 bg-blue-900/80 z-10 flex flex-col items-center justify-center p-4">
              <Brain className="w-16 h-16 text-cyan-400 animate-pulse mb-2" />
              <div className="text-white text-center font-semibold text-lg">Neural Interface & AI</div>
            </div>
            <img
              src={neuralInterfaceImg}
              alt="Neural Interface Visual"
              className="w-full h-auto object-cover opacity-70"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/900x600/000000/FFFFFF?text=Neural+Interface+Image'; }}
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105">
            <div className="absolute inset-0 bg-orange-900/80 z-10 flex flex-col items-center justify-center p-4">
              <Cpu className="w-16 h-16 text-orange-400 animate-bounce mb-2" />
              <div className="text-white text-center font-semibold text-lg">AI, NLP, ML Integration</div>
            </div>
            <img
              src={aiBrainImg}
              alt="AI Brain Visual"
              className="w-full h-auto object-cover opacity-70"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/900x600/000000/FFFFFF?text=AI+Brain+Image'; }}
            />
          </div>
        </div>

        {/* Sanskrit Shloka 2: On Skill in Action */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 border border-white/20 mb-12 animate-fadeInUp shadow-xl hover:shadow-orange-500/50">
          <p className="text-base sm:text-lg italic text-amber-100 mb-4 leading-relaxed font-sans">
            "योगः कर्मसु कौशलम्।"
          </p>
          <p className="text-white text-sm sm:text-base font-sans">
            *“Yoga is skill in action.”* My work in Neuralink embodies this principle: achieving unparalleled precision and efficiency in merging human and artificial intelligence for seamless cognitive augmentation.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 border border-white/20 mb-12 shadow-xl hover:shadow-orange-500/50">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 font-sans bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 text-transparent text-center">
            Connect for Neuralink Insights
          </h3>
          <p className="text-amber-100 text-sm sm:text-base leading-relaxed font-sans mb-6">
            I invite you to reach out to discuss collaborations, research, or insights into the future of cognitive augmentation.
          </p>
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="block w-full pl-10 pr-3 py-3 rounded-md bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:ring-orange-500 focus:border-orange-500 sm:text-sm transition-colors duration-200"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="block w-full pl-10 pr-3 py-3 rounded-md bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:ring-orange-500 focus:border-orange-500 sm:text-sm transition-colors duration-200"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 pt-3 flex items-start pointer-events-none">
                  <MessageSquare className="h-5 w-5 text-gray-400" />
                </div>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="block w-full pl-10 pr-3 py-3 rounded-md bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:ring-orange-500 focus:border-orange-500 sm:text-sm transition-colors duration-200"
                  required
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 px-8 py-4 rounded-full text-white font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 group relative overflow-hidden flex items-center justify-center gap-2"
            >
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
              <Send className="w-6 h-6 animate-pulse" /> Send My Inquiry
            </button>
          </form>
          <p className="text-sm text-amber-100 mt-6">
            Alternatively, you can directly email me at: <a href="mailto:shivansh@glocybs.com" className="text-orange-400 hover:text-red-500 font-semibold transition-colors duration-300">shivansh@glocybs.com</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Neuralink;
