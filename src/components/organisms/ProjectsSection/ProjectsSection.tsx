import React, { useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { usePortfolioStore } from '@/store/portfolioStore';
import { portfolioData } from '@/data/portfolio';
import Typography from '@/components/atoms/Typography';
import Button from '@/components/atoms/Button';
import Icon from '@/components/atoms/Icons';
import { ExternalLink, Github, Eye, Code, Shield, Globe } from 'lucide-react';

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  const { setActiveProject, activeProject } = usePortfolioStore();
  const [activeFilter, setActiveFilter] = useState('all');

  const { projects } = portfolioData;

  const filters = [
    { id: 'all', label: 'All Projects', icon: '🚀' },
    { id: 'cybersecurity', label: 'Cybersecurity', icon: '🛡️' },
    { id: 'web-development', label: 'Web Development', icon: '🌐' },
    { id: 'full-stack', label: 'Full Stack', icon: '⚡' },
    { id: 'research', label: 'Research', icon: '🔬' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'cybersecurity': return '🛡️';
      case 'web-development': return '🌐';
      case 'full-stack': return '⚡';
      case 'research': return '🔬';
      default: return '🚀';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'text-success';
      case 'intermediate': return 'text-warning';
      case 'advanced': return 'text-error';
      default: return 'text-light-slate';
    }
  };

  const handleProjectClick = (projectId: string) => {
    setActiveProject(activeProject === projectId ? null : projectId);
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 bg-dark-charcoal relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #00FFFF 1px, transparent 0)`,
          backgroundSize: '80px 80px'
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
              Featured Projects
            </Typography>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Typography
              variant="p"
              size="xl"
              color="secondary"
              className="max-w-3xl mx-auto"
            >
              Showcasing my technical expertise across cybersecurity, web development, and full-stack solutions
            </Typography>
          </motion.div>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'border-neon-cyan bg-neon-cyan/20 text-neon-cyan'
                  : 'border-neon-cyan/30 text-light-slate hover:border-neon-cyan/50 hover:bg-neon-cyan/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon emoji={filter.icon} size="sm" />
              <span className="font-medium">{filter.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`card cursor-pointer transition-all duration-300 ${
                activeProject === project.id
                  ? 'border-neon-cyan/60 bg-neon-cyan/10'
                  : 'hover:border-neon-cyan/40 hover:bg-neon-cyan/5'
              }`}
              onClick={() => handleProjectClick(project.id)}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <Icon emoji={getCategoryIcon(project.category)} size="lg" />
                  <div>
                    <Typography
                      variant="h3"
                      size="lg"
                      weight="semibold"
                      color="primary"
                      className="mb-1"
                    >
                      {project.title}
                    </Typography>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium bg-dark-charcoal/50 ${getDifficultyColor(project.difficulty)}`}>
                        {project.difficulty}
                      </span>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-dark-charcoal/50 text-neon-cyan">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <Typography
                variant="p"
                size="sm"
                color="muted"
                className="mb-4 leading-relaxed"
              >
                {project.description}
              </Typography>

              {/* Technologies */}
              <div className="mb-4">
                <Typography
                  variant="p"
                  size="xs"
                  weight="medium"
                  color="secondary"
                  className="mb-2"
                >
                  Technologies:
                </Typography>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 rounded-full text-xs bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 rounded-full text-xs bg-mission-gold/10 text-mission-gold border border-mission-gold/20">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Project Actions */}
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-dark-charcoal/50 border border-neon-cyan/20 hover:border-neon-cyan/40 transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-4 h-4 text-neon-cyan" />
                    </motion.a>
                  )}
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-dark-charcoal/50 border border-neon-cyan/20 hover:border-neon-cyan/40 transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-4 h-4 text-neon-cyan" />
                    </motion.a>
                  )}
                </div>
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleProjectClick(project.id);
                  }}
                  className="text-neon-cyan hover:text-neon-cyan/80"
                >
                  {activeProject === project.id ? 'Less' : 'More'} Details
                </Button>
              </div>

              {/* Expanded Project Details */}
              {activeProject === project.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6 pt-6 border-t border-neon-cyan/20 space-y-4"
                >
                  {/* Long Description */}
                  <Typography
                    variant="p"
                    size="sm"
                    color="primary"
                    className="leading-relaxed"
                  >
                    {project.longDescription}
                  </Typography>

                  {/* Highlights */}
                  <div>
                    <Typography
                      variant="p"
                      size="sm"
                      weight="medium"
                      color="secondary"
                      className="mb-2"
                    >
                      Key Highlights:
                    </Typography>
                    <div className="space-y-1">
                      {project.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <Icon emoji="✨" size="sm" className="mt-0.5 flex-shrink-0" />
                          <Typography
                            variant="p"
                            size="xs"
                            color="muted"
                          >
                            {highlight}
                          </Typography>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Completion Date */}
                  <div className="flex items-center space-x-2 text-xs text-muted">
                    <Icon emoji="📅" size="sm" />
                    <span>Completed: {new Date(project.completionDate).toLocaleDateString()}</span>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects CTA */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => window.open('https://github.com/nasa-cyber', '_blank')}
            glow
            icon={<Github className="w-5 h-5" />}
          >
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;