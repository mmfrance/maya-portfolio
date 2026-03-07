import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiBadgeCheck } from 'react-icons/hi'

const Certifications = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
    },
    {
      name: 'Google Cloud Professional',
      issuer: 'Google Cloud',
      date: '2023',
    },
    {
      name: 'React Developer Certification',
      issuer: 'Meta',
      date: '2022',
    },
  ]

  return (
    <section id="certifications" ref={ref} className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-light-card">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-16 gradient-text"
        >
          Certifications
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl p-8 text-center border border-light-border hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="inline-block mb-4"
              >
                <HiBadgeCheck className="text-5xl text-primary" />
              </motion.div>
              <h3 className="text-xl font-bold mb-2 text-text-primary">{cert.name}</h3>
              <p className="text-text-secondary mb-2">{cert.issuer}</p>
              <p className="text-text-secondary text-sm">{cert.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
