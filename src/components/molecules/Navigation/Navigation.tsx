import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePortfolioStore } from '@/store/portfolioStore';
import { scrollToSection } from '@/lib/utils';
import Button from '@/components/atoms/Button';
import Icon from '@/components/atoms/Icons';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { currentSection, isMenuOpen, toggleMenu, setCurrentSection } = usePortfolioStore();

  const navItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'experience', label: 'Experience', href: '#experience' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setCurrentSection(sectionId);
    scrollToSection(sectionId);
    if (isMenuOpen) {
      toggleMenu();
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentSection('home');
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-nasa-blue/90 backdrop-blur-md border-b border-neon-cyan/20'
            : 'bg-transparent'
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon emoji="🚀" size="xl" className="text-mission-gold" />
              <span className="text-2xl font-display font-bold text-mission-gold">
                NASA
              </span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={cn(
                    'relative px-3 py-2 text-sm font-medium transition-colors duration-200',
                    currentSection === item.id
                      ? 'text-neon-cyan'
                      : 'text-light-slate hover:text-neon-cyan'
                  )}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  {currentSection === item.id && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-neon-cyan"
                      layoutId="activeTab"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button
                variant="primary"
                size="sm"
                onClick={() => handleNavClick('contact')}
                glow
              >
                Get In Touch
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMenu}
                icon={isMenuOpen ? <X /> : <Menu />}
                className="p-2"
              />
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />
            
            {/* Menu Panel */}
            <motion.div
              className="absolute top-16 right-0 w-64 h-full bg-nasa-blue/95 backdrop-blur-md border-l border-neon-cyan/20"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="p-6">
                <div className="space-y-4">
                  {navItems.map((item) => (
                    <motion.button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={cn(
                        'block w-full text-left px-4 py-3 rounded-lg transition-all duration-200',
                        currentSection === item.id
                          ? 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/40'
                          : 'text-light-slate hover:bg-neon-cyan/10 hover:text-neon-cyan'
                      )}
                      whileHover={{ x: 8 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.label}
                    </motion.button>
                  ))}
                  
                  <div className="pt-4 border-t border-neon-cyan/20">
                    <Button
                      variant="primary"
                      size="sm"
                      fullWidth
                      onClick={() => handleNavClick('contact')}
                      glow
                    >
                      Get In Touch
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;