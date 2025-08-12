import React, { useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { usePortfolioStore } from '@/store/portfolioStore';
import { portfolioData } from '@/data/portfolio';
import Typography from '@/components/atoms/Typography';
import Icon from '@/components/atoms/Icons';
import { getSkillLevel, getSkillColor } from '@/lib/utils';

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  const { setActiveSkill, activeSkill } = usePortfolioStore();

  const { skills } = portfolioData;

  const skillCategories = [
    { id: 'cybersecurity', name: 'Cybersecurity', icon: '🛡️', color: 'neon-cyan' },
    { id: 'programming', name: 'Programming', icon: '⚡', color: 'mission-gold' },
    { id: 'tools', name: 'Tools & Platforms', icon: '🛠️', color: 'success' },
    { id: 'soft-skills', name: 'Soft Skills', icon: '🌟', color: 'warning' },
  ];

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

  const getSkillsByCategory = (categoryId: string) => {
    return skills.filter(skill => skill.category === categoryId);
  };

  const handleSkillClick = (skillId: string) => {
    setActiveSkill(activeSkill === skillId ? null : skillId);
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 bg-nasa-blue relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #00FFFF 1px, transparent 0)`,
          backgroundSize: '100px 100px'
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
              Skills & Expertise
            </Typography>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Typography
              variant="p"
              size="xl"
              color="secondary"
              className="max-w-3xl mx-auto"
            >
              A comprehensive toolkit for cybersecurity, development, and leadership
            </Typography>
          </motion.div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className="card space-y-6"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3">
                <Icon emoji={category.icon} size="xl" />
                <Typography
                  variant="h3"
                  size="xl"
                  weight="semibold"
                  color="secondary"
                >
                  {category.name}
                </Typography>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {getSkillsByCategory(category.id).map((skill) => (
                  <motion.div
                    key={skill.id}
                    className={`p-4 rounded-lg border transition-all duration-300 cursor-pointer ${
                      activeSkill === skill.id
                        ? 'border-neon-cyan/60 bg-neon-cyan/10'
                        : 'border-neon-cyan/20 hover:border-neon-cyan/40 hover:bg-neon-cyan/5'
                    }`}
                    onClick={() => handleSkillClick(skill.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Skill Header */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <Icon emoji={skill.icon} size="lg" />
                        <Typography
                          variant="h4"
                          size="lg"
                          weight="medium"
                          color="primary"
                        >
                          {skill.name}
                        </Typography>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Typography
                          variant="span"
                          size="sm"
                          color="muted"
                          className="px-2 py-1 rounded-full bg-dark-charcoal/50"
                        >
                          {getSkillLevel(skill.proficiency)}
                        </Typography>
                        <Typography
                          variant="span"
                          size="sm"
                          className={getSkillColor(skill.proficiency)}
                        >
                          {skill.proficiency}%
                        </Typography>
                      </div>
                    </div>

                    {/* Proficiency Bar */}
                    <div className="w-full bg-dark-charcoal/50 rounded-full h-2 mb-3">
                      <motion.div
                        className={`h-2 rounded-full ${
                          skill.proficiency >= 90
                            ? 'bg-success'
                            : skill.proficiency >= 80
                            ? 'bg-mission-gold'
                            : skill.proficiency >= 70
                            ? 'bg-neon-cyan'
                            : skill.proficiency >= 50
                            ? 'bg-warning'
                            : 'bg-light-slate'
                        }`}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.proficiency}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>

                    {/* Skill Description */}
                    <Typography
                      variant="p"
                      size="sm"
                      color="muted"
                      className="leading-relaxed"
                    >
                      {skill.description}
                    </Typography>

                    {/* Expanded Details */}
                    {activeSkill === skill.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 pt-4 border-t border-neon-cyan/20 space-y-3"
                      >
                        {/* Certifications */}
                        {skill.certifications && skill.certifications.length > 0 && (
                          <div>
                            <Typography
                              variant="p"
                              size="sm"
                              weight="medium"
                              color="secondary"
                              className="mb-2"
                            >
                              Certifications:
                            </Typography>
                            <div className="space-y-1">
                              {skill.certifications.map((cert, index) => (
                                <Typography
                                  key={index}
                                  variant="p"
                                  size="xs"
                                  color="muted"
                                  className="pl-4"
                                >
                                  • {cert}
                                </Typography>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Related Projects */}
                        {skill.projects && skill.projects.length > 0 && (
                          <div>
                            <Typography
                              variant="p"
                              size="sm"
                              weight="medium"
                              color="secondary"
                              className="mb-2"
                            >
                              Related Projects:
                            </Typography>
                            <div className="space-y-1">
                              {skill.projects.map((project, index) => (
                                <Typography
                                  key={index}
                                  variant="p"
                                  size="xs"
                                  color="muted"
                                  className="pl-4"
                                >
                                  • {project}
                                </Typography>
                              ))}
                            </div>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Typography variant="h3" size="3xl" weight="bold" color="accent">
                {skills.filter(s => s.category === 'cybersecurity').length}
              </Typography>
              <Typography variant="p" size="sm" color="muted">
                Cybersecurity Skills
              </Typography>
            </div>
            <div className="text-center">
              <Typography variant="h3" size="3xl" weight="bold" color="accent">
                {skills.filter(s => s.category === 'programming').length}
              </Typography>
              <Typography variant="p" size="sm" color="muted">
                Programming Skills
              </Typography>
            </div>
            <div className="text-center">
              <Typography variant="h3" size="3xl" weight="bold" color="accent">
                {skills.filter(s => s.category === 'tools').length}
              </Typography>
              <Typography variant="p" size="sm" color="muted">
                Tools & Platforms
              </Typography>
            </div>
            <div className="text-center">
              <Typography variant="h3" size="3xl" weight="bold" color="accent">
                {skills.filter(s => s.category === 'soft-skills').length}
              </Typography>
              <Typography variant="p" size="sm" color="muted">
                Soft Skills
              </Typography>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;