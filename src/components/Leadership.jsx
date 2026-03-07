import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiUserGroup } from 'react-icons/hi'

const Leadership = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const leadershipRoles = [
    {
      role: 'Co-President',
      organization: 'Girls Who Code',
      description: 'Describe your leadership role, responsibilities, and impact. Include any initiatives you led or teams you managed.',
    },
    {
      role: 'Team Lead',
      organization: 'Hackathon Organization',
      description: 'Highlight your leadership experience, whether in student organizations, clubs, or volunteer work.',
    },
    {
      role: 'Mentor',
      organization: 'Coding Bootcamp',
      description: 'Showcase your ability to lead, organize, and make a positive impact in your community or organization.',
    },
  ]

  return (
    <section id="leadership" ref={ref} className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-16 gradient-text"
        >
          Leadership
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leadershipRoles.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-6 border border-light-border hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <HiUserGroup className="text-4xl text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2 text-primary">{item.role}</h3>
              <p className="text-text-secondary mb-4 font-semibold">{item.organization}</p>
              <p className="text-text-secondary leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Leadership
