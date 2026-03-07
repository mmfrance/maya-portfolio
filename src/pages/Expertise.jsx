import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { HiBadgeCheck } from 'react-icons/hi'
import {
  SiJavascript,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJupyter,
  SiGoogle,
  SiMicrosoft,
  SiCanva,
  SiAdobe,
  SiGit,
  SiGithub,
  SiNextdotjs,
  SiNodedotjs,
  SiAmazonaws,
  SiMongodb,
  SiPowerapps,
} from 'react-icons/si'
import { FaDatabase, FaJava } from 'react-icons/fa'

// ——— EDIT DATA BELOW ———
// Technical skills: name + icon + colors (icon on left, name on right in card).
const technicalSkills = [
  { name: 'Python', icon: SiPython, bgColor: '#3776AB', textColor: '#fff' },
  { name: 'Java', icon: FaJava, bgColor: '#ED8B00', textColor: '#fff' },
  { name: 'JavaScript', icon: SiJavascript, bgColor: '#F7DF1E', textColor: '#000' },
  { name: 'SQL', icon: FaDatabase, bgColor: '#336791', textColor: '#fff' },
  { name: 'HTML', icon: SiHtml5, bgColor: '#E34F26', textColor: '#fff' },
  { name: 'CSS', icon: SiCss3, bgColor: '#1572B6', textColor: '#fff' },
  { name: 'React', icon: SiReact, bgColor: '#61DAFB', textColor: '#000' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, bgColor: '#06B6D4', textColor: '#fff' },
  { name: 'Next.js', icon: SiNextdotjs, bgColor: '#000000', textColor: '#fff' },
  { name: 'Node.js', icon: SiNodedotjs, bgColor: '#339933', textColor: '#fff' },
  { name: 'MongoDB', icon: SiMongodb, bgColor: '#47A248', textColor: '#fff' },
  { name: 'Jupyter Notebook / Google Colab', icon: SiJupyter, bgColor: '#F37626', textColor: '#fff' },
]

const toolsPlatforms = [
  { name: 'Google Workspace (Docs, Sheets, Slides, Drive)', icon: SiGoogle, bgColor: '#4285F4', textColor: '#fff' },
  { name: 'Microsoft Office (Excel, PowerPoint, Word)', icon: SiMicrosoft, bgColor: '#D83B01', textColor: '#fff' },
  { name: 'Microsoft Power Platform', icon: SiPowerapps, bgColor: '#0078D4', textColor: '#fff' },
  { name: 'Canva', icon: SiCanva, bgColor: '#00C4CC', textColor: '#fff' },
  { name: 'Adobe Illustrator', icon: SiAdobe, bgColor: '#FF9A00', textColor: '#fff' },
  { name: 'Adobe Photoshop', icon: SiAdobe, bgColor: '#31A8FF', textColor: '#fff' },
  { name: 'Git', icon: SiGit, bgColor: '#F05032', textColor: '#fff' },
  { name: 'GitHub', icon: SiGithub, bgColor: '#181717', textColor: '#fff' },
  { name: 'AWS', icon: SiAmazonaws, bgColor: '#232F3E', textColor: '#fff' },
]

const certifications = [
  { name: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', date: '2023' },
  { name: 'Google Cloud Professional', issuer: 'Google Cloud', date: '2023' },
  { name: 'React Developer Certification', issuer: 'Meta', date: '2022' },
]

const projects = [
  {
    title: 'WorldGuide',
    description: 'Online platform helps study abroad students discover recommendations for bars, restaurants, events, landmarks, and key information about the cities or countries they visit.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com',
    demo: null,
  },
  {
    title: 'Candland Game',
    description: 'Description coming soon.',
    technologies: ['Python', 'Flask', 'PostgreSQL', 'Docker'],
    github: 'https://github.com',
    demo: null,
  },
  {
    title: 'Coming Soon',
    description: 'Description coming soon.',
    technologies: ['JavaScript', 'TypeScript', 'AWS', 'GraphQL'],
    github: null,
    demo: null,
  },
]
// ——— END EDIT DATA ———

const Expertise = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div ref={ref} className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-light-bg pt-32">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight mb-4">
            Expertise
          </h1>
          <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto">
            A concise overview of my technical skills, tools, certifications, and selected projects.
          </p>
        </motion.header>

        {/* Skills & Expertise: Technical Skills + Tools & Platforms (icon cards) */}
        <motion.section
          id="skills"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-14"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight text-center mb-10">
            Skills & Expertise
          </h2>

          <div className="mb-10">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-text-secondary mb-4">
              Technical Skills
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {technicalSkills.map((skill, index) => {
                const Icon = skill.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.05 + index * 0.02 }}
                    className="bg-white border border-light-border rounded-box px-3 py-2.5 flex items-center gap-3 hover:shadow-subtle transition-shadow h-full"
                  >
                    <div
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-box flex items-center justify-center text-lg flex-shrink-0"
                      style={{ backgroundColor: skill.bgColor, color: skill.textColor }}
                    >
                      <Icon />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-text-primary truncate flex-1">
                      {skill.name}
                    </span>
                  </motion.div>
                )
              })}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-text-secondary mb-4">
              Tools & Platforms
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {toolsPlatforms.map((tool, index) => {
                const Icon = tool.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.1 + index * 0.02 }}
                    className="bg-white border border-light-border rounded-box px-3 py-2.5 flex items-center gap-3 hover:shadow-subtle transition-shadow h-full"
                  >
                    <div
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-box flex items-center justify-center text-lg flex-shrink-0"
                      style={{ backgroundColor: tool.bgColor, color: tool.textColor }}
                    >
                      <Icon />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-text-primary truncate flex-1">
                      {tool.name}
                    </span>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.section>

        {/* Certifications: cards with badge icon */}
        <motion.section
          id="certifications"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-14"
        >
          <h2 className="text-xs font-semibold uppercase tracking-wider text-text-secondary mb-6">
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.25 + index * 0.08 }}
                className="bg-white border border-light-border rounded-box p-6 text-center hover:shadow-card transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <HiBadgeCheck className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-base font-bold text-text-primary mb-1">{cert.name}</h3>
                <p className="text-sm text-text-secondary mb-1">{cert.issuer}</p>
                <p className="text-xs text-text-secondary">{cert.date}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects: cards with title, description, tech tags, Code/Demo */}
        <motion.section
          id="projects"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight text-center mb-8">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.35 + index * 0.08 }}
                className="bg-white border border-light-border rounded-box p-5 hover:shadow-card transition-shadow flex flex-col"
              >
                <h3 className="text-lg font-bold text-text-primary mb-2">{project.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2.5 py-1 bg-light-bg border border-light-border text-text-secondary text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 text-sm">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-text-secondary hover:text-text-primary transition-colors"
                    >
                      <FiGithub className="text-base" />
                      <span>Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-text-secondary hover:text-text-primary transition-colors"
                    >
                      <FiExternalLink className="text-base" />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default Expertise
