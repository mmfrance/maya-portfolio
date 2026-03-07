import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const projects = [
    {
      title: 'Project Name 1',
      description: 'A brief description of your project, what it does, and the problem it solves. Highlight key features and your role in the project.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Project Name 2',
      description: 'Another project description showcasing your skills and experience. Include technologies used and outcomes achieved.',
      technologies: ['Python', 'Flask', 'PostgreSQL', 'Docker'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Project Name 3',
      description: 'Describe your third project here. Make sure to highlight what makes it unique and what you learned from building it.',
      technologies: ['JavaScript', 'TypeScript', 'AWS', 'GraphQL'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
  ]

  return (
    <div ref={ref} className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-light-bg pt-32">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight text-center mb-10"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white border border-light-border rounded-box p-5 hover:shadow-card transition-shadow"
            >
              <h3 className="text-lg font-semibold text-text-primary mb-2">{project.title}</h3>
              <p className="text-sm text-text-secondary mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-0.5 bg-light-bg border border-light-border text-text-secondary text-xs rounded-box"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 text-sm">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-text-secondary hover:text-text-primary transition-colors"
                >
                  <FiGithub className="text-base" />
                  <span>Code</span>
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-text-secondary hover:text-text-primary transition-colors"
                >
                  <FiExternalLink className="text-base" />
                  <span>Demo</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
