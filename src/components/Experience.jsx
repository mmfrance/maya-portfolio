import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const experiences = [
    {
      title: 'Software Engineer Intern',
      company: 'Company Name',
      date: 'June 2023 - August 2023',
      description: 'Describe your responsibilities, achievements, and what you learned during this experience. Highlight any significant contributions or projects you worked on.',
    },
    {
      title: 'Full Stack Developer',
      company: 'Company Name',
      date: 'January 2023 - May 2023',
      description: 'Add details about this role, technologies used, and key accomplishments. Be specific about your impact.',
    },
    {
      title: 'Junior Developer',
      company: 'Company Name',
      date: 'September 2022 - December 2022',
      description: 'Include relevant experience, whether it\'s internships, part-time work, or freelance projects.',
    },
  ]

  return (
    <section id="experience" ref={ref} className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-16 gradient-text"
        >
          Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-2 w-4 h-4 bg-primary rounded-full border-4 border-light-bg" />

                <div className="bg-white rounded-xl p-6 border border-light-border hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md">
                  <h3 className="text-2xl font-bold mb-2 text-text-primary">{exp.title}</h3>
                  <p className="text-primary font-semibold mb-1">{exp.company}</p>
                  <p className="text-text-secondary text-sm mb-4">{exp.date}</p>
                  <p className="text-text-secondary leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
