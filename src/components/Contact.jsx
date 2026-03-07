import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

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
    <section id="contact" ref={ref} className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 flex items-center">
      <div className="max-w-4xl mx-auto text-center w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-8 gradient-text"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-text-secondary mb-12 max-w-2xl mx-auto"
        >
          I'm always open to discussing new opportunities, interesting projects, or just having
          a conversation about technology. Feel free to reach out!
        </motion.p>

        <div className="flex flex-wrap justify-center gap-6">
          {contactLinks.map((link, index) => {
            const Icon = link.icon
            const isEmail = link.href.startsWith('mailto:')
            return (
              <motion.a
                key={index}
                href={link.href}
                {...(isEmail ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-3 px-6 py-4 bg-white rounded-xl border border-light-border ${link.color} transition-all duration-300 hover:border-primary/50 shadow-sm hover:shadow-md`}
              >
                <Icon className="text-2xl" />
                <span className="font-medium">{link.label}</span>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Contact
