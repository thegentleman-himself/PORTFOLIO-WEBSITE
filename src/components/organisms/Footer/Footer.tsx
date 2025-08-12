import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import Typography from '@/components/atoms/Typography';
import Icon from '@/components/atoms/Icons';
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';
import { scrollToSection } from '@/lib/utils';

const Footer = () => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: `https://${personal.contact.github}`,
      icon: <Github className="w-5 h-5" />,
    },
    {
      name: 'LinkedIn',
      url: `https://${personal.contact.linkedin}`,
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      name: 'Twitter',
      url: `https://${personal.contact.twitter}`,
      icon: <Twitter className="w-5 h-5" />,
    },
    {
      name: 'Email',
      url: `mailto:${personal.contact.email}`,
      icon: <Mail className="w-5 h-5" />,
    },
  ];

  return (
    <footer className="bg-dark-charcoal border-t border-neon-cyan/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #00FFFF 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Icon emoji="🚀" size="xl" className="text-mission-gold" />
                <Typography
                  variant="h3"
                  size="2xl"
                  weight="bold"
                  font="display"
                  color="accent"
                >
                  NASA
                </Typography>
              </div>
              <Typography
                variant="p"
                size="base"
                color="muted"
                className="mb-6 max-w-md"
              >
                Elite Full-Stack Developer, Cybersecurity Specialist, and Creative Technologist. 
                Building secure digital solutions with integrity and purpose.
              </Typography>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-nasa-blue/50 border border-neon-cyan/20 hover:border-neon-cyan/40 text-neon-cyan transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <Typography
                variant="h4"
                size="lg"
                weight="semibold"
                color="secondary"
                className="mb-4"
              >
                Quick Links
              </Typography>
              <ul className="space-y-2">
                {footerLinks.map((link, index) => (
                  <li key={index}>
                    <motion.button
                      onClick={() => scrollToSection(link.href.substring(1))}
                      className="text-light-slate hover:text-neon-cyan transition-colors duration-200 text-left"
                      whileHover={{ x: 5 }}
                    >
                      {link.label}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <Typography
                variant="h4"
                size="lg"
                weight="semibold"
                color="secondary"
                className="mb-4"
              >
                Contact Info
              </Typography>
              <div className="space-y-2">
                <Typography
                  variant="p"
                  size="sm"
                  color="muted"
                >
                  {personal.contact.email}
                </Typography>
                <Typography
                  variant="p"
                  size="sm"
                  color="muted"
                >
                  {personal.contact.phone}
                </Typography>
                <Typography
                  variant="p"
                  size="sm"
                  color="muted"
                >
                  {personal.contact.location}
                </Typography>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-neon-cyan/20">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <Typography
              variant="p"
              size="sm"
              color="muted"
            >
              © {new Date().getFullYear()} {personal.name}. All rights reserved.
            </Typography>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-neon-cyan/10 border border-neon-cyan/20 text-neon-cyan hover:border-neon-cyan/40 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-sm font-medium">Back to Top</span>
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;