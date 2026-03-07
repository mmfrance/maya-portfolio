import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div ref={ref} className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 pt-32 bg-light-bg">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight text-center mb-4 pb-4 border-b-2 border-text-primary"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-8">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4 text-text-secondary leading-relaxed"
          >
            <p>
              I am a Data Science and Technical Communication student at Iowa State University, with minors in Artificial Intelligence and Entrepreneurship. I enjoy working at the intersection of data, technology, and communication, and I am interested in creating thoughtful, practical solutions through hands-on experiences.
            </p>
            <p>
              Outside of the classroom, I enjoy taking on leadership roles, working on personal and entrepreneurial projects, and gaining new perspectives through international travel.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <img
              src="/France-129.jpg"
              alt="Maya France"
              className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full border border-light-border object-cover object-center"
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About
