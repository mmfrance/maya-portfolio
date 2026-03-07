import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const contactLinks = [
    { icon: HiOutlineMail, label: 'Email', href: 'mailto:mayamfrance@gmail.com' },
    { icon: FaLinkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/mayamanalfrance' },
    { icon: FaGithub, label: 'GitHub', href: 'https://github.com/mmfrance' },
  ]

  return (
    <div ref={ref} className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 flex items-center pt-32 bg-light-bg">
      <div className="max-w-2xl mx-auto text-center w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight mb-4"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
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
                animate={isInView ? { opacity: 1, y: 0 } : {}}
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
  )
}

export default Contact
