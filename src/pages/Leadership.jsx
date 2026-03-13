import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiUserGroup } from 'react-icons/hi'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'

const Leadership = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const leadershipRoles = [
    {
      role: 'Co-President',
      organization: 'Girls Who Code',
      description: 'The Girls Who Code Club at Iowa State University is a community driven organization dedicated to closing the gender gap in technology. Our club empowers students through technical skill building, professional development, mentorship, and connections with industry professionals.',
      images: [
        '/images/gwsgroup.JPG',
        '/images/GWC@ISU_Logo.png',
      ],
    },
    {
      role: 'LAS PULSE',
      organization: 'Advisory Board',
      description: 'LAS Pulse is a group of appointed LAS students that can provide the deans of the college with an increased pulse on the climate, culture, and access within LAS. This is a leadership opportunity for students, and they will have the opportunity to engage in constructive conversation with the LAS Dean and other college deans during monthly meetings.',
      images: ['/images/laspulsefall24.jpg'],
    },
    {
      role: 'Start Something',
      organization: 'Liberal Arts and Sciences',
      description: 'Start Something is a program in the College of Liberal Arts and Sciences that supports students in exploring entrepreneurship, innovation, and leadership. Students engage in cohorts, events, and mentorship to develop ideas and build community.',
      images: ['/images/StartSomethingGraphic.webp'],
    },
    {
      role: 'STEM Scholars',
      organization: 'Program Member',
      description: 'STEM Scholars is a program that supports students in science, technology, engineering, and mathematics through academic enrichment, mentorship, and community building. Scholars benefit from dedicated resources and connections to succeed in STEM fields.',
      images: ['/images/stemscholarslogo.png'],
    },
    {
      role: 'BOLD',
      organization: 'Peer Mentor and Member',
      description: 'The BOLD (Building Opportunities in Leadership and Diversity) learning community at Iowa State University supports first and second year students in the College of Liberal Arts and Sciences by helping them build academic success, leadership skills, and strong connections on campus. The program includes a course, peer mentoring, and academic and social events designed to help students transition to college and grow as leaders.',
      images: [
        'https://via.placeholder.com/600x400/10B981/FFFFFF?text=BOLD',
      ],
    },
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState({})

  const setImageIndex = (roleIndex, imageIndex) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [roleIndex]: imageIndex
    }))
  }

  const nextImage = (roleIndex, totalImages) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [roleIndex]: ((prev[roleIndex] || 0) + 1) % totalImages
    }))
  }

  const prevImage = (roleIndex, totalImages) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [roleIndex]: ((prev[roleIndex] || 0) - 1 + totalImages) % totalImages
    }))
  }

  return (
    <div ref={ref} className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 pt-32">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight text-center mb-10"
        >
          Leadership
        </motion.h2>

        <div className="space-y-12">
          {leadershipRoles.map((item, index) => {
            const currentIndex = currentImageIndex[index] || 0
            const totalImages = item.images.length

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch"
              >
                {/* Leadership Info - Left side - fixed height to match carousel */}
                <div className="h-full min-h-[320px] lg:min-h-[340px]">
                  <motion.div
                    className="bg-white rounded-box p-5 sm:p-6 border border-light-border hover:shadow-card transition-shadow h-full min-h-[320px] lg:min-h-[340px] flex flex-col"
                  >
                    <HiUserGroup className="text-2xl text-text-primary mb-3 flex-shrink-0" />
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-text-primary">{item.role}</h3>
                    <p className="text-lg text-text-secondary mb-3 font-semibold">{item.organization}</p>
                    <p className="text-sm sm:text-base text-text-secondary leading-relaxed flex-grow overflow-y-auto">{item.description}</p>
                  </motion.div>
                </div>

                {/* Image Carousel - Right side - same height as left box */}
                <div className="h-full min-h-[320px] lg:min-h-[340px]">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
                    className="relative rounded-box overflow-hidden border border-light-border bg-white h-full min-h-[320px] lg:min-h-[340px]"
                  >
                    <div className="absolute inset-0">
                      <AnimatePresence mode="wait" initial={false}>
                        <motion.img
                          key={currentIndex}
                          src={item.images[currentIndex]}
                          alt={`${item.organization} - Image ${currentIndex + 1}`}
                          initial={{ opacity: 0, x: 100 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -100 }}
                          transition={{ duration: 0.5 }}
                          className="w-full h-full object-contain object-center bg-light-bg"
                        />
                      </AnimatePresence>

                      {/* Navigation Arrows */}
                      {totalImages > 1 && (
                        <>
                          <button
                            onClick={() => prevImage(index, totalImages)}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 bg-white border border-light-border flex items-center justify-center shadow-subtle hover:shadow-card transition-shadow z-10 rounded-box"
                            aria-label="Previous image"
                          >
                            <HiArrowLeft className="text-text-primary text-xl" />
                          </button>
                          <button
                            onClick={() => nextImage(index, totalImages)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 bg-white border border-light-border flex items-center justify-center shadow-subtle hover:shadow-card transition-shadow z-10 rounded-box"
                            aria-label="Next image"
                          >
                            <HiArrowRight className="text-text-primary text-xl" />
                          </button>
                        </>
                      )}

                      {/* Dots Indicator */}
                      {totalImages > 1 && (
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                          {item.images.map((_, imgIndex) => (
                            <button
                              key={imgIndex}
                              onClick={() => setImageIndex(index, imgIndex)}
                              className={`h-0.5 transition-all duration-300 ${
                                imgIndex === currentIndex
                                  ? 'bg-text-primary w-6'
                                  : 'bg-white/60 w-2 hover:bg-white/80'
                              } rounded-box`}
                              aria-label={`Go to image ${imgIndex + 1}`}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Leadership
