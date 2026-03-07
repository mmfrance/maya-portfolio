import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiBadgeCheck } from 'react-icons/hi'

const Certifications = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const certifications = [
    { name: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', date: '2023' },
    { name: 'Google Cloud Professional', issuer: 'Google Cloud', date: '2023' },
    { name: 'React Developer Certification', issuer: 'Meta', date: '2022' },
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
          Certifications
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-light-border rounded-box p-6 text-center hover:shadow-card transition-shadow"
            >
              <HiBadgeCheck className="w-10 h-10 text-text-primary mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-text-primary mb-1">{cert.name}</h3>
              <p className="text-sm text-text-secondary">{cert.issuer}</p>
              <p className="text-xs text-text-secondary mt-1">{cert.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Certifications
