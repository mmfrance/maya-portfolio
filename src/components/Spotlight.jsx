import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiArrowLeft, HiArrowRight, HiExternalLink } from 'react-icons/hi'

const Spotlight = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [currentSlide, setCurrentSlide] = useState(0)

  const featuredIn = [
    {
      source: 'LAS Career Services - Iowa State University',
      title: 'LAS Student Spotlight: Maya',
      date: 'October 30, 2025',
      description: 'Featured for summer 2025 internships at NielsenIQ in Singapore and DXspark in Lisbon, Portugal, showcasing international experience and career growth.',
      link: 'https://careers.las.iastate.edu/2025/10/30/las-student-spotlight-elissa-2-2/',
    },
    {
      source: 'CIEE Study Abroad',
      title: 'ASU Online Spotlight: Maya Manal France',
      date: 'April 24, 2025',
      description: 'Highlighted for balancing ASU Online courses while studying abroad in Singapore through CIEE\'s Open Campus Block Program.',
      link: 'https://www.ciee.org/go-abroad/college-study-abroad/blog/asu-online-spotlight-5-week-april-21',
    },
  ]

  const globalExperiences = [
    {
      location: 'Singapore',
      caption: 'Summer 2025 internship at NielsenIQ, immersing in Southeast Asian tech innovation and global business practices.',
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800',
    },
    {
      location: 'Lisbon, Portugal',
      caption: 'Summer 2025 internship at DXspark, exploring European startup ecosystems and collaborating with international developers.',
      image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800',
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % globalExperiences.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + globalExperiences.length) % globalExperiences.length)
  }

  return (
    <section id="spotlight" ref={ref} className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-light-bg">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">
            In the Spotlight
          </h2>
          <p className="text-lg sm:text-xl text-text-secondary">
            Recognition, global experiences, and what I'm currently building.
          </p>
        </motion.div>

        {/* Featured In / Recognition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-text-primary mb-8 text-center">
            Featured In / Recognition
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredIn.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-xl p-6 border border-light-border hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col gap-3 group"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-semibold text-primary mb-1">{item.source}</p>
                    <h4 className="text-lg font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                  </div>
                  <HiExternalLink className="text-text-secondary group-hover:text-primary transition-colors flex-shrink-0" />
                </div>
                <p className="text-sm text-text-secondary mb-2">{item.date}</p>
                <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Global Experiences Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-text-primary mb-8 text-center">
            Global Experiences
          </h3>
          <div className="relative max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <img
                    src={globalExperiences[currentSlide].image}
                    alt={globalExperiences[currentSlide].location}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h4 className="text-2xl font-bold mb-2">{globalExperiences[currentSlide].location}</h4>
                    <p className="text-white/90">{globalExperiences[currentSlide].caption}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-10"
              aria-label="Previous slide"
            >
              <HiArrowLeft className="text-text-primary text-xl" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-10"
              aria-label="Next slide"
            >
              <HiArrowRight className="text-text-primary text-xl" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {globalExperiences.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-primary w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Currently Building */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-text-primary mb-8 text-center">
            Currently Building
          </h3>
          <div className="bg-white rounded-xl p-8 border border-light-border shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
              <h4 className="text-2xl font-bold text-text-primary">LocalBuzz</h4>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                In Progress
              </span>
            </div>
            <p className="text-text-secondary mb-6 leading-relaxed">
              Building a platform that connects local businesses with their communities through innovative
              technology solutions. Focused on creating meaningful impact through customer discovery,
              brand development, and scalable web infrastructure.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2 text-text-secondary">
                <span className="text-primary mt-1">▹</span>
                <span>Customer discovery and market research</span>
              </li>
              <li className="flex items-start gap-2 text-text-secondary">
                <span className="text-primary mt-1">▹</span>
                <span>Brand refresh and identity development</span>
              </li>
              <li className="flex items-start gap-2 text-text-secondary">
                <span className="text-primary mt-1">▹</span>
                <span>Website build and platform development</span>
              </li>
            </ul>
            <motion.a
              href="https://example.com/localbuzz"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary via-secondary to-accent text-white font-semibold rounded-full shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300"
            >
              Learn More
              <HiExternalLink className="text-lg" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Spotlight
