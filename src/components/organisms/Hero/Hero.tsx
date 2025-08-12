import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { usePortfolioStore } from '@/store/portfolioStore';
import { getGreeting } from '@/lib/utils';
import Button from '@/components/atoms/Button';
import Typography from '@/components/atoms/Typography';
import Icon from '@/components/atoms/Icons';
import { ArrowDown, Download, Mail, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  const { setTyping, setCurrentSection } = usePortfolioStore();

  const personal = {
    name: "Allotey Samuel Nii Adotei",
    preferredName: "NASA",
    title: "Elite Full-Stack Developer, Cybersecurity Specialist, and Creative Technologist",
    subtitle: "Cybersecurity Student | Ethical Hacker in Training | Kingdom Technologist | Speaker | Poet | Psalm 91 Protocol",
    bio: "Cybersecurity student passionate about ethical hacking and pentesting. I believe strong digital defenses protect not just data but destinies. Currently sharpening my skills through platforms like TryHackMe, while anchoring every exploit in integrity and purpose. My mission? Learning the craft, fighting the good fight — one exploit at a time.",
    contact: {
      email: "alloteyniisamuel@gmail.com",
      phone: "+233 25 677 1814",
      location: "Akim Oda, based in Accra for studies",
      linkedin: "linkedin.com/in/samuel-allotey-5526b6230",
      github: "github.com/nasa-cyber",
    }
  };

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
      setTyping(true);
    }
  }, [isInView, controls, setTyping]);

  const scrollToAbout = () => {
    setCurrentSection('about');
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden space-bg"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Particles */}
        <motion.div
          className="absolute top-20 left-20 w-2 h-2 bg-neon-cyan rounded-full opacity-60"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute top-40 right-32 w-1 h-1 bg-mission-gold rounded-full opacity-80"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '1s' }}
        />
        <motion.div
          className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-neon-cyan rounded-full opacity-40"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '2s' }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #00FFFF 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="space-y-8"
        >
          {/* Greeting */}
          <motion.div variants={itemVariants} className="space-y-4">
            <Typography
              variant="p"
              size="lg"
              color="secondary"
              className="font-mono"
            >
              {getGreeting()}, I'm
            </Typography>
          </motion.div>

          {/* Name */}
          <motion.div variants={itemVariants} className="space-y-4">
            <Typography
              variant="h1"
              size="5xl"
              weight="black"
              font="display"
              color="accent"
              glow
              className="tracking-wider"
            >
              {personal.preferredName}
            </Typography>
            <Typography
              variant="p"
              size="lg"
              color="muted"
              className="max-w-2xl mx-auto"
            >
              {personal.name}
            </Typography>
          </motion.div>

          {/* Title */}
          <motion.div variants={itemVariants} className="space-y-4">
            <Typography
              variant="h2"
              size="2xl"
              weight="semibold"
              color="secondary"
              className="max-w-4xl mx-auto leading-relaxed"
            >
              {personal.title}
            </Typography>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={itemVariants} className="space-y-4">
            <Typography
              variant="p"
              size="lg"
              color="muted"
              className="max-w-3xl mx-auto"
            >
              {personal.subtitle}
            </Typography>
          </motion.div>

          {/* Bio */}
          <motion.div variants={itemVariants} className="space-y-4">
            <Typography
              variant="p"
              size="base"
              color="primary"
              className="max-w-4xl mx-auto leading-relaxed"
            >
              {personal.bio}
            </Typography>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => setCurrentSection('projects')}
              glow
              className="group"
            >
              View My Work
              <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform duration-200" />
            </Button>
            
            <Button
              variant="secondary"
              size="lg"
              onClick={() => setCurrentSection('contact')}
              glow
            >
              Get In Touch
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center space-x-6 pt-8"
          >
            <motion.a
              href={`mailto:${personal.contact.email}`}
              className="p-3 rounded-full bg-dark-charcoal/50 border border-neon-cyan/20 hover:border-neon-cyan/40 transition-all duration-300 hover:scale-110"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5 text-neon-cyan" />
            </motion.a>
            
            <motion.a
              href={`https://${personal.contact.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-dark-charcoal/50 border border-neon-cyan/20 hover:border-neon-cyan/40 transition-all duration-300 hover:scale-110"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5 text-neon-cyan" />
            </motion.a>
            
            <motion.a
              href={`https://${personal.contact.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-dark-charcoal/50 border border-neon-cyan/20 hover:border-neon-cyan/40 transition-all duration-300 hover:scale-110"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-5 h-5 text-neon-cyan" />
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <Typography variant="h3" size="2xl" weight="bold" color="accent">
                2+
              </Typography>
              <Typography variant="p" size="sm" color="muted">
                Years Experience
              </Typography>
            </div>
            <div className="text-center">
              <Typography variant="h3" size="2xl" weight="bold" color="accent">
                8+
              </Typography>
              <Typography variant="p" size="sm" color="muted">
                Projects Completed
              </Typography>
            </div>
            <div className="text-center">
              <Typography variant="h3" size="2xl" weight="bold" color="accent">
                1
              </Typography>
              <Typography variant="p" size="sm" color="muted">
                Certifications
              </Typography>
            </div>
            <div className="text-center">
              <Typography variant="h3" size="2xl" weight="bold" color="accent">
                106
              </Typography>
              <Typography variant="p" size="sm" color="muted">
                LinkedIn Connections
              </Typography>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.button
          onClick={scrollToAbout}
          className="p-2 rounded-full border border-neon-cyan/30 hover:border-neon-cyan/60 transition-colors duration-300"
          whileHover={{ y: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowDown className="w-5 h-5 text-neon-cyan animate-bounce" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;