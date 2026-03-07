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
    <section id="projects" ref={ref} className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-light-card">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-16 gradient-text"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-6 border border-light-border hover:border-primary/50 transition-all duration-300 group shadow-sm hover:shadow-md"
            >
              <h3 className="text-2xl font-bold mb-3 text-text-primary group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-text-secondary mb-4 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors"
                >
                  <FiGithub className="text-xl" />
                  <span>Code</span>
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors"
                >
                  <FiExternalLink className="text-xl" />
                  <span>Demo</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
