import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { HiDocumentText } from 'react-icons/hi'

const Home = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  
  const rotatingTexts = [
    'Student at Iowa State University',
    'Data Science & AI Enthusiast',
    'Builder of impactful tech projects',
  ]

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const openResume = () => {
    // Open the resume PDF in a new tab
    window.open('/resume.pdf', '_blank', 'noopener,noreferrer')
  }

  // Rotate through texts every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-light-bg">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Friendly Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <p className="text-xl sm:text-2xl text-text-secondary font-medium">
            hey! <span className="text-2xl sm:text-3xl">👋</span>
          </p>
        </motion.div>

        {/* Large Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          I'm{' '}
          <span className="gradient-text">Maya France</span>
        </motion.h1>

        {/* Rotating Text Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-16 sm:h-20 mb-8 flex items-center justify-center"
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={currentTextIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-3xl md:text-4xl text-text-secondary font-medium"
            >
              {rotatingTexts[currentTextIndex]}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* Buttons Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          {/* Primary Contact Button */}
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="px-8 py-4 bg-gradient-to-r from-primary via-secondary to-accent text-white font-semibold rounded-full shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 text-base sm:text-lg min-w-[160px]"
          >
            Contact Me
          </motion.button>

          {/* Secondary Resume Button */}
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={openResume}
            className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300 text-base sm:text-lg min-w-[160px] flex items-center justify-center gap-2"
          >
            <HiDocumentText className="text-xl" />
            View Resume
          </motion.button>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            {/* LinkedIn */}
            <motion.a
              href="https://linkedin.com/in/mayamanalfrance"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white border-2 border-light-border flex items-center justify-center text-primary hover:border-primary hover:bg-primary/5 transition-all duration-300 shadow-sm hover:shadow-md"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-xl sm:text-2xl" />
            </motion.a>

            {/* GitHub */}
            <motion.a
              href="https://github.com/mmfrance"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white border-2 border-light-border flex items-center justify-center text-text-primary hover:border-primary hover:bg-primary/5 transition-all duration-300 shadow-sm hover:shadow-md"
              aria-label="GitHub"
            >
              <FaGithub className="text-xl sm:text-2xl" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-text-secondary/30 rounded-full flex justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 bg-text-secondary/50 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Home
