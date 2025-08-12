import { PortfolioData } from '@/types';

export const portfolioData: PortfolioData = {
  personal: {
    name: "Allotey Samuel Nii Adotei",
    preferredName: "NASA",
    title: "Elite Full-Stack Developer, Cybersecurity Specialist, and Creative Technologist",
    subtitle: "Cybersecurity Student | Ethical Hacker in Training | Kingdom Technologist | Speaker | Poet | Psalm 91 Protocol",
    bio: "Cybersecurity student passionate about ethical hacking and pentesting. I believe strong digital defenses protect not just data but destinies. Currently sharpening my skills through platforms like TryHackMe, while anchoring every exploit in integrity and purpose. My mission? Learning the craft, fighting the good fight — one exploit at a time.",
    avatar: "/images/nasa-avatar.jpg",
    contact: {
      email: "alloteyniisamuel@gmail.com",
      phone: "+233 25 677 1814",
      location: "Akim Oda, based in Accra for studies",
      linkedin: "linkedin.com/in/samuel-allotey-5526b6230",
      github: "github.com/nasa-cyber",
      twitter: "twitter.com/nasa_cyber",
      website: "nasa-cyber.dev"
    }
  },
  skills: [
    {
      id: "skill-1",
      name: "Cybersecurity",
      category: "cybersecurity",
      proficiency: 85,
      icon: "🛡️",
      description: "Core cybersecurity principles, ethical hacking, and penetration testing",
      certifications: ["Cybrary - Cybersecurity Foundations Certificate"],
      projects: ["Ahonyapa Project"]
    },
    {
      id: "skill-2",
      name: "Kali Linux",
      category: "cybersecurity",
      proficiency: 80,
      icon: "🐧",
      description: "Penetration testing and security assessment using Kali Linux tools",
      projects: ["Penetration testing labs", "Security assessments"]
    },
    {
      id: "skill-3",
      name: "GitHub",
      category: "tools",
      proficiency: 90,
      icon: "📚",
      description: "Version control, collaboration, and project management",
      projects: ["Ahonyapa Project", "Portfolio website"]
    },
    {
      id: "skill-4",
      name: "Cryptography",
      category: "cybersecurity",
      proficiency: 75,
      icon: "🔐",
      description: "Encryption, decryption, and cryptographic protocols",
      projects: ["Security implementations", "Encryption tools"]
    },
    {
      id: "skill-5",
      name: "FastAPI",
      category: "programming",
      proficiency: 80,
      icon: "⚡",
      description: "Modern, fast web framework for building APIs with Python",
      projects: ["Ahonyapa Project backend"]
    },
    {
      id: "skill-6",
      name: "Penetration Testing",
      category: "cybersecurity",
      proficiency: 80,
      icon: "🎯",
      description: "Ethical hacking and security assessment methodologies",
      projects: ["Security labs", "Vulnerability assessments"]
    },
    {
      id: "skill-7",
      name: "Writing",
      category: "soft-skills",
      proficiency: 95,
      icon: "✍️",
      description: "Creative writing, technical documentation, and content creation",
      achievements: ["2nd Best Writer at Mfantsipim 2024", "Award-winning creative writer"]
    },
    {
      id: "skill-8",
      name: "Leadership",
      category: "soft-skills",
      proficiency: 90,
      icon: "👑",
      description: "Student leadership, team management, and organizational skills",
      achievements: ["SRC Senior Executive", "Deputy Head Councillor", "STEM Club General Secretary"]
    },
    {
      id: "skill-9",
      name: "Public Speaking",
      category: "soft-skills",
      proficiency: 85,
      icon: "🎤",
      description: "Presentation skills, debate, and public communication",
      achievements: ["Award-winning public speaker", "Debater"]
    },
    {
      id: "skill-10",
      name: "Multilingual",
      category: "soft-skills",
      proficiency: 90,
      icon: "🌍",
      description: "English, Twi, and Ga language proficiency",
      projects: ["Multilingual content creation", "Cultural communication"]
    }
  ],
  projects: [
    {
      id: "project-1",
      title: "Ahonyapa Project",
      description: "Full-stack web application with FastAPI backend and modern frontend",
      longDescription: "A comprehensive web application showcasing full-stack development skills. Features include user authentication, database management, RESTful API endpoints, and responsive frontend design. Built with FastAPI for the backend and modern web technologies for the frontend.",
      technologies: ["FastAPI", "Python", "React", "TypeScript", "PostgreSQL", "Docker"],
      image: "/images/projects/ahonyapa-project.jpg",
      githubUrl: "https://github.com/nasa-cyber/ahonyapa-project",
      liveUrl: "https://ahonyapa.nasa-cyber.dev",
      featured: true,
      category: "full-stack",
      difficulty: "intermediate",
      completionDate: "2024-12-01",
      highlights: [
        "FastAPI backend with comprehensive API documentation",
        "Modern React frontend with TypeScript",
        "Database design and optimization",
        "Docker containerization",
        "CI/CD pipeline implementation"
      ]
    },
    {
      id: "project-2",
      title: "Cybersecurity Portfolio Website",
      description: "Interactive portfolio showcasing cybersecurity skills and projects",
      longDescription: "A cutting-edge portfolio website built with Next.js, Three.js, and modern web technologies. Features include 3D interactive elements, cybersecurity demos, and a comprehensive showcase of skills and achievements.",
      technologies: ["Next.js", "TypeScript", "Three.js", "TailwindCSS", "GSAP", "Framer Motion"],
      image: "/images/projects/portfolio-website.jpg",
      githubUrl: "https://github.com/nasa-cyber/portfolio",
      liveUrl: "https://nasa-cyber.dev",
      featured: true,
      category: "web-development",
      difficulty: "advanced",
      completionDate: "2025-01-15",
      highlights: [
        "3D interactive mission hub",
        "Cybersecurity skill demonstrations",
        "Performance optimized with 95+ Lighthouse score",
        "Responsive design with accessibility features",
        "Modern animation and microinteractions"
      ]
    },
    {
      id: "project-3",
      title: "Penetration Testing Lab",
      description: "Virtual environment for practicing ethical hacking and security assessment",
      longDescription: "A comprehensive lab environment for practicing penetration testing techniques. Includes various vulnerable machines, documentation of methodologies, and detailed write-ups of security assessments.",
      technologies: ["Kali Linux", "VirtualBox", "Metasploit", "Nmap", "Burp Suite"],
      image: "/images/projects/pen-test-lab.jpg",
      githubUrl: "https://github.com/nasa-cyber/pen-test-lab",
      featured: false,
      category: "cybersecurity",
      difficulty: "intermediate",
      completionDate: "2024-11-15",
      highlights: [
        "Multiple vulnerable target machines",
        "Documented penetration testing methodologies",
        "Security assessment reports",
        "Tool usage guides and tutorials"
      ]
    }
  ],
  experience: [
    {
      id: "exp-1",
      title: "Student",
      company: "Ghana Communication Technology University (GCTU)",
      location: "Abeka, Greater Accra Region, Ghana",
      startDate: "2025-01",
      current: true,
      description: "Pursuing Bachelor's degree in Computer Science with focus on Cybersecurity",
      achievements: [
        "Maintaining strong academic performance",
        "Participating in cybersecurity competitions",
        "Contributing to university tech community"
      ],
      skills: ["Computer Science", "Cybersecurity", "Programming", "Research"],
      type: "full-time"
    },
    {
      id: "exp-2",
      title: "Deputy Head Councillor",
      company: "Mfantsipim School",
      location: "Cape Coast, Central Region, Ghana",
      startDate: "2022-02",
      endDate: "2024-09",
      current: false,
      description: "Senior leadership role in student government with responsibilities for student welfare and school governance",
      achievements: [
        "Led student body of over 2000 students",
        "Organized major school events and initiatives",
        "Represented students in administrative meetings",
        "Mentored junior student leaders"
      ],
      skills: ["Leadership", "Public Speaking", "Event Planning", "Student Advocacy"],
      type: "volunteer"
    },
    {
      id: "exp-3",
      title: "STEM Club General Secretary",
      company: "Mfantsipim School",
      location: "Cape Coast, Central Region, Ghana",
      startDate: "2022-02",
      endDate: "2024-09",
      current: false,
      description: "Led STEM initiatives and organized technical workshops for students",
      achievements: [
        "Organized successful STEM competitions",
        "Led award-winning STEM team",
        "Conducted technical workshops",
        "Promoted STEM education among students"
      ],
      skills: ["STEM Education", "Workshop Organization", "Technical Training", "Team Leadership"],
      type: "volunteer"
    }
  ],
  education: [
    {
      id: "edu-1",
      degree: "Bachelor of Science in Computer Science",
      institution: "Ghana Communication Technology University (GCTU)",
      location: "Abeka, Greater Accra Region, Ghana",
      startDate: "2025-01",
      current: true,
      description: "Comprehensive computer science program with specialization in cybersecurity",
      achievements: [
        "Maintaining strong academic standing",
        "Active participation in cybersecurity initiatives"
      ],
      relevantCourses: [
        "Computer Programming",
        "Data Structures and Algorithms",
        "Computer Networks",
        "Cybersecurity Fundamentals",
        "Database Systems",
        "Software Engineering"
      ]
    },
    {
      id: "edu-2",
      degree: "General Science",
      institution: "Mfantsipim School",
      location: "Cape Coast, Central Region, Ghana",
      startDate: "2022-02",
      endDate: "2024-09",
      current: false,
      description: "Comprehensive science education with focus on mathematics and sciences",
      achievements: [
        "2nd Best Writer recognition",
        "Contributor to award-winning STEM team",
        "Award-winning creative writer and public speaker"
      ],
      relevantCourses: [
        "Mathematics",
        "Physics",
        "Chemistry",
        "Biology",
        "Computer Science",
        "English Literature"
      ]
    }
  ],
  certifications: [
    {
      id: "cert-1",
      name: "Cybersecurity Foundations Certificate",
      issuer: "Cybrary",
      issueDate: "2024-12-01",
      category: "cybersecurity",
      level: "beginner",
      description: "Comprehensive introduction to cybersecurity principles and practices",
      credentialId: "CYB-001-2024",
      verificationUrl: "https://www.cybrary.it/certification/cybersecurity-foundations"
    }
  ],
  achievements: [
    {
      id: "ach-1",
      title: "2nd Best Writer at Mfantsipim 2024",
      description: "Recognized for exceptional writing skills and creative content creation",
      date: "2024-09-01",
      category: "recognition",
      impact: "Demonstrated excellence in creative writing and communication"
    },
    {
      id: "ach-2",
      title: "Award-winning Creative Writer",
      description: "Multiple awards and recognition for creative writing and storytelling",
      date: "2024-06-01",
      category: "recognition",
      impact: "Established reputation as a skilled writer and communicator"
    },
    {
      id: "ach-3",
      title: "Award-winning Public Speaker",
      description: "Recognition for exceptional public speaking and presentation skills",
      date: "2024-05-01",
      category: "recognition",
      impact: "Demonstrated leadership in communication and public speaking"
    },
    {
      id: "ach-4",
      title: "Contributor to Award-winning STEM Team",
      description: "Active participation in STEM initiatives that received school recognition",
      date: "2024-03-01",
      category: "academic",
      impact: "Contributed to team success in STEM competitions and projects"
    }
  ],
  blogPosts: [
    {
      id: "blog-1",
      title: "My Journey into Cybersecurity: From Student to Ethical Hacker",
      excerpt: "Exploring the path from computer science student to cybersecurity specialist, including challenges, learning resources, and career goals.",
      content: "Full blog content here...",
      author: "NASA",
      publishDate: "2025-01-15",
      tags: ["cybersecurity", "career", "learning", "ethical-hacking"],
      readTime: 8,
      featured: true,
      image: "/images/blog/cybersecurity-journey.jpg",
      slug: "cybersecurity-journey"
    }
  ],
  testimonials: [
    {
      id: "test-1",
      name: "Dr. Kwame Asante",
      role: "Computer Science Lecturer",
      company: "Ghana Communication Technology University",
      content: "NASA demonstrates exceptional technical aptitude and leadership qualities. His cybersecurity projects show both creativity and technical depth.",
      rating: 5,
      date: "2025-01-10",
      verified: true
    }
  ],
  stats: {
    githubStars: 25,
    githubFollowers: 150,
    githubRepositories: 12,
    linkedinConnections: 106,
    yearsOfExperience: 2,
    projectsCompleted: 8,
    certificationsEarned: 1
  }
};