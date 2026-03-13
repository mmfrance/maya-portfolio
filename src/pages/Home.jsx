import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { HiDocumentText } from 'react-icons/hi'
import { HiOutlineMail, HiExternalLink } from 'react-icons/hi'

const Home = () => {
  const navigate = useNavigate()
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  
  const aboutRef = useRef(null)
  const experienceRef = useRef(null)
  const contactRef = useRef(null)
  
  const aboutInView = useInView(aboutRef, { once: true, margin: '-100px' })
  const experienceInView = useInView(experienceRef, { once: true, margin: '-100px' })
  const contactInView = useInView(contactRef, { once: true, margin: '-100px' })
  
  const rotatingTexts = [
    'Student at Iowa State University',
    'Data Science & AI Enthusiast',
    'Builder of impactful tech projects',
  ]

  const goToContact = () => {
    navigate('/contact')
  }

  const openResume = () => {
    window.open('/resume.pdf', '_blank', 'noopener,noreferrer')
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Experience data
  const experiences = [
    {
      title: 'BOLD Peer Mentor',
      company: 'Iowa State University',
      location: 'Ames, Iowa',
      date: 'Aug. 2025 - Present',
      description: [
        'Facilitated classes and helped develop programming focused on leadership, communication, and career readiness, using clear and concise communication to connect students with peers, campus organizations, and university resources that support a smooth transition to college life.',
        'Established meaningful relationships through one-on-one mentoring, providing empathy, guidance, and support to foster trust and a strong sense of belonging among students.',
        'Analyzed and coordinated student programming logistics, including space, vendors, and attendee flow, with a strong attention to detail, ensuring efficient operations and engaging sessions that attracted over 24 students.',
      ],
    },
    {
      title: 'Data Science & Machine Learning Intern',
      company: 'DXspark',
      location: 'Lisbon, Portugal',
      date: 'May 2025 - Aug 2025',
      description: [
        'Developed a machine learning model to predict real-time bus arrival times, working with over 100,000 rows of GPS and scheduling data to improve delay prediction accuracy.',
        'Engineered, analyzed, and cleaned time-based and location-based features using Python and pandas, applying principles of future engineering and AI to prepare data across six core variables.',
        'Utilized multiple machine learning frameworks, including scikit-learn, to build, evaluate, and visualize regression models, translating performance metrics into actionable insights.',
      ],
    },
    {
      title: 'Qualitative Insights & Data Science Intern',
      company: 'NielsenIQ',
      location: 'Singapore, Singapore',
      date: 'Feb. 2025 - May 2025',
      description: [
        'Conducted qualitative research for Fortune 500 companies and Southeast Asian markets through interviews, focus groups, and surveys, delivering insights that supported strategic decisions.',
        'Developed research reports and presentations using Microsoft Office, turning complex data into actionable insights for clients.',
        'Collaborated with international teams to manage timelines, prepare screener documents, and monitor fieldwork, ensuring smooth project execution.',
        'Provided timely analysis/background for ad-hoc client requests, strengthening engagement and supporting global strategies.',
      ],
    },
    {
      title: 'Student Assistant',
      company: 'Iowa State University: Start Something Liberal Arts and Sciences',
      location: 'Ames, Iowa',
      date: 'Apr. 2024 - Jan. 2025',
      description: [
        'Managed social media and created content for Start Something LAS Programs to showcase different programs in the cohorts.',
        'Partnered with Papa John Center and Entrepreneurship Department to plan and organize events to drive student engagement.',
        'Communicated professionally with students and built relationships at events to grow personal network and engage with peers.',
        'Assisted with student information and resources for LAS 3450, 3460, and 4900E courses.',
      ],
    },
    {
      title: 'Data and Systems Development Intern',
      company: 'Pursuit of Innovation',
      location: 'Des Moines, Iowa',
      date: 'May 2024 - Oct. 2024',
      description: [
        'Conducted business requirements, reported on KPIs, and sorted and cleaned data to support strategic decision-making.',
        'Developed CRM tool and database models in Microsoft Power Apps to automate data management and improve efficiency.',
        'Researched and implemented project management tools to optimize workflows and enhance user experience.',
        'Served as Challenge Coordinator for the Smart Cities program, organizing events to enhance community engagement.',
      ],
    },
    {
      title: 'Engineer for the Week (EFTW) Teacher/Mentor',
      company: 'Pi515 Internship',
      location: 'Des Moines, Iowa',
      date: 'Sep. 2022 - Dec. 2022',
      description: [
        'Curated innovative ideas to engage 15 middle school students to learn about programming and opportunities in STEM.',
        'Assisted students in programming games by providing them with debugging advice to improve code and learn new material.',
      ],
    },
  ]

  // Contact links
  const contactLinks = [
    {
      icon: HiOutlineMail,
      label: 'Email',
      href: 'mailto:mayamfrance@gmail.com',
      color: 'hover:text-primary',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/mayamanalfrance',
      color: 'hover:text-blue-400',
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      href: 'https://github.com/mmfrance',
      color: 'hover:text-gray-300',
    },
  ]

  return (
    <div className="bg-light-bg">
      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center bg-light-bg pt-14 relative overflow-hidden">
        {/* Colored circles behind hero text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] rounded-full bg-hero-circle/10 blur-2xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="absolute w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] rounded-full bg-hero-circleMuted/25 blur-xl"
          />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm uppercase tracking-[0.2em] text-text-secondary mb-6"
          >
            Hey — welcome
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary tracking-tight mb-6 leading-[1.1]"
          >
            I'm Maya France
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-14 sm:h-16 mb-10 flex items-center justify-center"
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={currentTextIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="text-lg sm:text-xl text-text-secondary font-medium"
              >
                {rotatingTexts[currentTextIndex]}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <motion.button
              whileHover={{ opacity: 0.9 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => contactRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className="px-6 py-3 bg-text-primary text-white font-medium text-sm tracking-tight rounded-box shadow-subtle hover:shadow-card transition-shadow duration-200 min-w-[140px]"
            >
              Contact Me
            </motion.button>
            <motion.button
              whileHover={{ opacity: 0.9 }}
              whileTap={{ scale: 0.98 }}
              onClick={openResume}
              className="px-6 py-3 border border-light-border bg-white text-text-primary font-medium text-sm tracking-tight rounded-box hover:border-text-secondary transition-colors duration-200 min-w-[140px] flex items-center justify-center gap-2"
            >
              <HiDocumentText className="text-lg" />
              View Resume
            </motion.button>
            <div className="flex items-center gap-3 mt-2 sm:mt-0">
              <motion.a
                href="https://linkedin.com/in/mayamanalfrance"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ opacity: 0.8 }}
                className="w-10 h-10 border border-light-border rounded-box bg-white flex items-center justify-center text-text-primary hover:border-text-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-lg" />
              </motion.a>
              <motion.a
                href="https://github.com/mmfrance"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ opacity: 0.8 }}
                className="w-10 h-10 border border-light-border rounded-box bg-white flex items-center justify-center text-text-primary hover:border-text-secondary transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="text-lg" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex justify-center py-6"
      >
        <motion.button
          onClick={() => aboutRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          className="flex flex-col items-center gap-1 text-text-secondary hover:text-text-primary transition-colors text-xs font-medium tracking-wide"
        >
          <span>Scroll</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.button>
      </motion.div>

      {/* About Section */}
      <div id="about" ref={aboutRef} className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-light-border">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-heading text-center mb-4 pb-4 border-b-2 border-text-primary"
          >
            About Me
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center pt-8">
            <div className="text-left">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-text-secondary leading-relaxed mb-4"
              >
                I am a Data Science and Technical Communication student at Iowa State University, with minors in Artificial Intelligence and Entrepreneurship. I enjoy working at the intersection of data, technology, and communication, and I am interested in creating thoughtful, practical solutions through hands-on experiences.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="text-text-secondary leading-relaxed"
              >
                Outside of the classroom, I enjoy taking on leadership roles, working on personal and entrepreneurial projects, and gaining new perspectives through international travel.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center"
            >
              <img
                src="/images/France-129.jpg"
                alt="Maya France"
                className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full border border-light-border object-cover object-center"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Currently Building / LocalBuzz */}
      <div className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-light-border">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold uppercase tracking-wider text-text-secondary mb-6"
          >
            Currently Building
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-light-bg border border-light-border rounded-box p-6 hover:shadow-card transition-shadow"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-semibold text-text-primary">LocalBuzz</h3>
              <span className="px-2 py-0.5 border border-light-border text-text-secondary text-xs font-medium rounded-box">
                In Progress
              </span>
            </div>
            <p className="text-sm text-text-secondary mb-4 leading-relaxed">
              Building a platform that connects local businesses with their communities through innovative
              technology solutions. Focused on customer discovery, brand development, and scalable web infrastructure.
            </p>
            <ul className="space-y-1.5 mb-4">
              <li className="flex items-start gap-2 text-sm text-text-secondary">
                <span className="text-text-primary mt-0.5">—</span>
                <span>Customer discovery and market research</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-text-secondary">
                <span className="text-text-primary mt-0.5">—</span>
                <span>Brand refresh and identity development</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-text-secondary">
                <span className="text-text-primary mt-0.5">—</span>
                <span>Website build and platform development</span>
              </li>
            </ul>
            <a
              href="https://example.com/localbuzz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-text-primary text-white text-sm font-medium rounded-box hover:opacity-90 transition-opacity"
            >
              Learn More
              <HiExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Experience Section */}
      <div id="experience" ref={experienceRef} className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-light-border">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={experienceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-heading text-center mb-10"
          >
            Experience
          </motion.h2>
          <div className="relative pl-6 sm:pl-8 border-l-2 border-light-border">
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -16 }}
                  animate={experienceInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="absolute left-[-29px] top-1.5 w-3 h-3 bg-text-primary rounded-none border-2 border-white" />
                  <div className="bg-light-bg border border-light-border rounded-box p-5 hover:shadow-subtle transition-shadow">
                    <h3 className="text-lg font-semibold text-text-primary">{exp.title}</h3>
                    <p className="text-sm font-medium text-text-secondary mt-0.5">{exp.company}</p>
                    <p className="text-xs text-text-secondary">{exp.location} · {exp.date}</p>
                    <ul className="mt-3 space-y-1.5">
                      {exp.description.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="text-sm text-text-secondary leading-relaxed flex items-start gap-2">
                          <span className="text-text-primary mt-0.5">—</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div ref={contactRef} className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 flex items-center border-t border-light-border">
        <div className="max-w-2xl mx-auto text-center w-full">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={contactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-heading mb-4"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={contactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-text-secondary mb-8 text-sm sm:text-base"
          >
            I'm always open to discussing new opportunities, interesting projects, or a conversation about technology.
          </motion.p>
          <div className="flex flex-wrap justify-center gap-3">
            {contactLinks.map((link, index) => {
              const Icon = link.icon
              const isEmail = link.href.startsWith('mailto:')
              return (
                <motion.a
                  key={index}
                  href={link.href}
                  {...(isEmail ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                  initial={{ opacity: 0, y: 12 }}
                  animate={contactInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + index * 0.05 }}
                  className="flex items-center gap-2 px-4 py-3 bg-white border border-light-border rounded-box text-sm font-medium text-text-primary hover:border-text-secondary transition-colors"
                >
                  <Icon className="text-lg" />
                  <span>{link.label}</span>
                </motion.a>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
