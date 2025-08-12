import Hero from '@/components/organisms/Hero'
import SkillsSection from '@/components/organisms/SkillsSection'
import ProjectsSection from '@/components/organisms/ProjectsSection'
import ContactSection from '@/components/organisms/ContactSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-nasa-blue text-light-slate">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="space-y-8">
            {/* Greeting */}
            <div className="space-y-4">
              <p className="text-lg text-neon-cyan font-mono">
                Good morning, I'm
              </p>
            </div>

            {/* Name */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-black text-mission-gold font-display tracking-wider">
                NASA
              </h1>
              <p className="text-lg text-light-slate/70">
                Allotey Samuel Nii Adotei
              </p>
            </div>

            {/* Title */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-neon-cyan max-w-4xl mx-auto leading-relaxed">
                Elite Full-Stack Developer, Cybersecurity Specialist, and Creative Technologist
              </h2>
            </div>

            {/* Subtitle */}
            <div className="space-y-4">
              <p className="text-lg text-light-slate/70 max-w-3xl mx-auto">
                Cybersecurity Student | Ethical Hacker in Training | Kingdom Technologist | Speaker | Poet | Psalm 91 Protocol
              </p>
            </div>

            {/* Bio */}
            <div className="space-y-4">
              <p className="text-base text-light-slate max-w-4xl mx-auto leading-relaxed">
                Cybersecurity student passionate about ethical hacking and pentesting. I believe strong digital defenses protect not just data but destinies. Currently sharpening my skills through platforms like TryHackMe, while anchoring every exploit in integrity and purpose. My mission? Learning the craft, fighting the good fight — one exploit at a time.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <button className="bg-neon-cyan text-nasa-blue px-8 py-4 rounded-lg font-semibold hover:bg-mission-gold hover:scale-105 transition-all duration-300 shadow-lg shadow-neon-cyan/25">
                View My Work
              </button>
              
              <button className="bg-transparent border-2 border-neon-cyan text-neon-cyan px-8 py-4 rounded-lg font-semibold hover:bg-neon-cyan hover:text-nasa-blue transition-all duration-300">
                Get In Touch
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 max-w-2xl mx-auto">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-mission-gold">2+</h3>
                <p className="text-sm text-light-slate/70">Years Experience</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-mission-gold">8+</h3>
                <p className="text-sm text-light-slate/70">Projects Completed</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-mission-gold">1</h3>
                <p className="text-sm text-light-slate/70">Certifications</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-mission-gold">106</h3>
                <p className="text-sm text-light-slate/70">LinkedIn Connections</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-dark-charcoal relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-mission-gold mb-4">
              Skills & Expertise
            </h2>
            <p className="text-xl text-neon-cyan max-w-3xl mx-auto">
              A comprehensive toolkit for cybersecurity, development, and leadership
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-dark-charcoal/50 backdrop-blur-sm border border-neon-cyan/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-neon-cyan mb-4">Cybersecurity</h3>
              <div className="space-y-4">
                <div className="p-4 rounded-lg border border-neon-cyan/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-light-slate">Kali Linux</span>
                    <span className="text-mission-gold">80%</span>
                  </div>
                  <div className="w-full bg-dark-charcoal/50 rounded-full h-2">
                    <div className="bg-neon-cyan h-2 rounded-full" style={{width: '80%'}}></div>
                  </div>
                </div>
                <div className="p-4 rounded-lg border border-neon-cyan/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-light-slate">Penetration Testing</span>
                    <span className="text-mission-gold">80%</span>
                  </div>
                  <div className="w-full bg-dark-charcoal/50 rounded-full h-2">
                    <div className="bg-neon-cyan h-2 rounded-full" style={{width: '80%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-dark-charcoal/50 backdrop-blur-sm border border-neon-cyan/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-neon-cyan mb-4">Development</h3>
              <div className="space-y-4">
                <div className="p-4 rounded-lg border border-neon-cyan/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-light-slate">FastAPI</span>
                    <span className="text-mission-gold">80%</span>
                  </div>
                  <div className="w-full bg-dark-charcoal/50 rounded-full h-2">
                    <div className="bg-neon-cyan h-2 rounded-full" style={{width: '80%'}}></div>
                  </div>
                </div>
                <div className="p-4 rounded-lg border border-neon-cyan/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-light-slate">GitHub</span>
                    <span className="text-mission-gold">90%</span>
                  </div>
                  <div className="w-full bg-dark-charcoal/50 rounded-full h-2">
                    <div className="bg-neon-cyan h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-nasa-blue relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-mission-gold mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-neon-cyan max-w-3xl mx-auto">
              Ready to collaborate on cybersecurity projects or discuss opportunities? Let's connect!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-neon-cyan mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 rounded-lg bg-dark-charcoal/30 border border-neon-cyan/20">
                  <div className="p-3 rounded-lg bg-neon-cyan/10 text-neon-cyan">📧</div>
                  <div>
                    <p className="font-medium text-light-slate">Email</p>
                    <p className="text-light-slate/70">alloteyniisamuel@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 rounded-lg bg-dark-charcoal/30 border border-neon-cyan/20">
                  <div className="p-3 rounded-lg bg-neon-cyan/10 text-neon-cyan">📱</div>
                  <div>
                    <p className="font-medium text-light-slate">Phone</p>
                    <p className="text-light-slate/70">+233 25 677 1814</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 rounded-lg bg-dark-charcoal/30 border border-neon-cyan/20">
                  <div className="p-3 rounded-lg bg-neon-cyan/10 text-neon-cyan">📍</div>
                  <div>
                    <p className="font-medium text-light-slate">Location</p>
                    <p className="text-light-slate/70">Akim Oda, based in Accra for studies</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-neon-cyan mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg bg-dark-charcoal/50 border border-neon-cyan/20 text-light-slate placeholder-light-slate/50 focus:outline-none focus:border-neon-cyan/40"
                  />
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 rounded-lg bg-dark-charcoal/50 border border-neon-cyan/20 text-light-slate placeholder-light-slate/50 focus:outline-none focus:border-neon-cyan/40"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-lg bg-dark-charcoal/50 border border-neon-cyan/20 text-light-slate placeholder-light-slate/50 focus:outline-none focus:border-neon-cyan/40"
                />
                <textarea
                  placeholder="Your message..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-dark-charcoal/50 border border-neon-cyan/20 text-light-slate placeholder-light-slate/50 focus:outline-none focus:border-neon-cyan/40 resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-neon-cyan text-nasa-blue px-8 py-4 rounded-lg font-semibold hover:bg-mission-gold hover:scale-105 transition-all duration-300 shadow-lg shadow-neon-cyan/25"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}