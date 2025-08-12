import React, { useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { usePortfolioStore } from '@/store/portfolioStore';
import { portfolioData } from '@/data/portfolio';
import Typography from '@/components/atoms/Typography';
import Button from '@/components/atoms/Button';
import Icon from '@/components/atoms/Icons';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, CheckCircle } from 'lucide-react';
import { isValidEmail, copyToClipboard } from '@/lib/utils';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  const { setCurrentSection } = usePortfolioStore();

  const { personal } = portfolioData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  React.useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleCopyContact = async (text: string, type: string) => {
    try {
      await copyToClipboard(text);
      // You could add a toast notification here
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: personal.contact.email,
      action: () => window.open(`mailto:${personal.contact.email}`, '_blank'),
      copyAction: () => handleCopyContact(personal.contact.email, 'email'),
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: personal.contact.phone,
      action: () => window.open(`tel:${personal.contact.phone}`, '_blank'),
      copyAction: () => handleCopyContact(personal.contact.phone, 'phone'),
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: personal.contact.location,
      action: null,
      copyAction: () => handleCopyContact(personal.contact.location, 'location'),
    },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: `https://${personal.contact.github}`,
      icon: <Github className="w-5 h-5" />,
      color: 'hover:text-light-slate',
    },
    {
      name: 'LinkedIn',
      url: `https://${personal.contact.linkedin}`,
      icon: <Linkedin className="w-5 h-5" />,
      color: 'hover:text-blue-400',
    },
    {
      name: 'Twitter',
      url: `https://${personal.contact.twitter}`,
      icon: <Twitter className="w-5 h-5" />,
      color: 'hover:text-blue-400',
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 bg-nasa-blue relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #00FFFF 1px, transparent 0)`,
          backgroundSize: '120px 120px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants}>
            <Typography
              variant="h2"
              size="4xl"
              weight="bold"
              font="display"
              color="accent"
              className="mb-4"
            >
              Get In Touch
            </Typography>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Typography
              variant="p"
              size="xl"
              color="secondary"
              className="max-w-3xl mx-auto"
            >
              Ready to collaborate on cybersecurity projects or discuss opportunities? Let's connect!
            </Typography>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <Typography
                variant="h3"
                size="2xl"
                weight="semibold"
                color="secondary"
                className="mb-6"
              >
                Contact Information
              </Typography>
            </motion.div>

            {/* Contact Methods */}
            <motion.div variants={itemVariants} className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 p-4 rounded-lg bg-dark-charcoal/30 border border-neon-cyan/20 hover:border-neon-cyan/40 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="p-3 rounded-lg bg-neon-cyan/10 text-neon-cyan">
                    {method.icon}
                  </div>
                  <div className="flex-1">
                    <Typography
                      variant="p"
                      size="sm"
                      weight="medium"
                      color="primary"
                      className="mb-1"
                    >
                      {method.label}
                    </Typography>
                    <Typography
                      variant="p"
                      size="base"
                      color="muted"
                    >
                      {method.value}
                    </Typography>
                  </div>
                  <div className="flex space-x-2">
                    {method.action && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={method.action}
                        className="p-2 text-neon-cyan hover:text-neon-cyan/80"
                      >
                        <Icon emoji="🔗" size="sm" />
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={method.copyAction}
                      className="p-2 text-neon-cyan hover:text-neon-cyan/80"
                    >
                      <Icon emoji="📋" size="sm" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="space-y-4">
              <Typography
                variant="p"
                size="lg"
                weight="medium"
                color="secondary"
                className="mb-4"
              >
                Follow me on social media
              </Typography>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-dark-charcoal/50 border border-neon-cyan/20 hover:border-neon-cyan/40 text-neon-cyan transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability Status */}
            <motion.div variants={itemVariants} className="p-4 rounded-lg bg-success/10 border border-success/20">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                <Typography
                  variant="p"
                  size="base"
                  color="success"
                  weight="medium"
                >
                  Available for new opportunities and collaborations
                </Typography>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <Typography
                variant="h3"
                size="2xl"
                weight="semibold"
                color="secondary"
                className="mb-6"
              >
                Send a Message
              </Typography>
            </motion.div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 rounded-lg bg-success/10 border border-success/20 text-center"
              >
                <CheckCircle className="w-12 h-12 text-success mx-auto mb-4" />
                <Typography
                  variant="h4"
                  size="lg"
                  weight="semibold"
                  color="success"
                  className="mb-2"
                >
                  Message Sent Successfully!
                </Typography>
                <Typography
                  variant="p"
                  size="base"
                  color="muted"
                >
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </Typography>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neon-cyan mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg bg-dark-charcoal/50 border transition-colors duration-200 ${
                        errors.name
                          ? 'border-error focus:border-error'
                          : 'border-neon-cyan/20 focus:border-neon-cyan/40'
                      } text-light-slate placeholder-light-slate/50 focus:outline-none`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <Typography
                        variant="p"
                        size="sm"
                        color="error"
                        className="mt-1"
                      >
                        {errors.name}
                      </Typography>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neon-cyan mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg bg-dark-charcoal/50 border transition-colors duration-200 ${
                        errors.email
                          ? 'border-error focus:border-error'
                          : 'border-neon-cyan/20 focus:border-neon-cyan/40'
                      } text-light-slate placeholder-light-slate/50 focus:outline-none`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <Typography
                        variant="p"
                        size="sm"
                        color="error"
                        className="mt-1"
                      >
                        {errors.email}
                      </Typography>
                    )}
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-neon-cyan mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg bg-dark-charcoal/50 border transition-colors duration-200 ${
                      errors.subject
                        ? 'border-error focus:border-error'
                        : 'border-neon-cyan/20 focus:border-neon-cyan/40'
                    } text-light-slate placeholder-light-slate/50 focus:outline-none`}
                    placeholder="What's this about?"
                  />
                  {errors.subject && (
                    <Typography
                      variant="p"
                      size="sm"
                      color="error"
                      className="mt-1"
                    >
                      {errors.subject}
                    </Typography>
                  )}
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-neon-cyan mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg bg-dark-charcoal/50 border transition-colors duration-200 ${
                      errors.message
                        ? 'border-error focus:border-error'
                        : 'border-neon-cyan/20 focus:border-neon-cyan/40'
                    } text-light-slate placeholder-light-slate/50 focus:outline-none resize-none`}
                    placeholder="Tell me about your project or opportunity..."
                  />
                  {errors.message && (
                    <Typography
                      variant="p"
                      size="sm"
                      color="error"
                      className="mt-1"
                    >
                      {errors.message}
                    </Typography>
                  )}
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    loading={isSubmitting}
                    icon={<Send className="w-5 h-5" />}
                    glow
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </motion.div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;