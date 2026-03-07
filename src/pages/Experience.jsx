import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const experiences = [
    {
      title: 'BOLD Peer Mentor',
      company: 'Iowa State University',
      location: 'Ames, Iowa',
      date: 'Aug. 2025 - Present',
      description: [
        'Facilitated classes and helped develop programming focused on leadership, communication, and career readiness, using clear and concise communication to connect students with peers, campus organizations, and university resources that support a smooth transition to college life.',
        'Established meaningful relationships through one-on-one mentoring, providing empathy, guidance, and support to foster trust and a strong sense of belonging among students.',
        'Analyzed and coordinated student programming logistics, including space, vendors, and attendee flow, with a strong attention to detail, ensuring efficient operations and engaging sessions that attracted over 24 students.',
      ],
    },
    {
      title: 'Data Science & Machine Learning Intern',
      company: 'DXspark',
      location: 'Lisbon, Portugal',
      date: 'May 2025 - Aug 2025',
      description: [
        'Developed a machine learning model to predict real-time bus arrival times, working with over 100,000 rows of GPS and scheduling data to improve delay prediction accuracy.',
        'Engineered, analyzed, and cleaned time-based and location-based features using Python and pandas, applying principles of future engineering and AI to prepare data across six core variables.',
        'Utilized multiple machine learning frameworks, including scikit-learn, to build, evaluate, and visualize regression models, translating performance metrics into actionable insights.',
      ],
    },
    {
      title: 'Qualitative Insights & Data Science Intern',
      company: 'NielsenIQ',
      location: 'Singapore, Singapore',
      date: 'Feb. 2025 - May 2025',
      description: [
        'Conducted qualitative research for Fortune 500 companies and Southeast Asian markets through interviews, focus groups, and surveys, delivering insights that supported strategic decisions.',
        'Developed research reports and presentations using Microsoft Office, turning complex data into actionable insights for clients.',
        'Collaborated with international teams to manage timelines, prepare screener documents, and monitor fieldwork, ensuring smooth project execution.',
        'Provided timely analysis/background for ad-hoc client requests, strengthening engagement and supporting global strategies.',
      ],
    },
    {
      title: 'Student Assistant',
      company: 'Iowa State University: Start Something Liberal Arts and Sciences',
      location: 'Ames, Iowa',
      date: 'Apr. 2024 - Jan. 2025',
      description: [
        'Managed social media and created content for Start Something LAS Programs to showcase different programs in the cohorts.',
        'Partnered with Papa John Center and Entrepreneurship Department to plan and organize events to drive student engagement.',
        'Communicated professionally with students and built relationships at events to grow personal network and engage with peers.',
        'Assisted with student information and resources for LAS 3450, 3460, and 4900E courses.',
      ],
    },
    {
      title: 'Data and Systems Development Intern',
      company: 'Pursuit of Innovation',
      location: 'Des Moines, Iowa',
      date: 'May 2024 - Oct. 2024',
      description: [
        'Conducted business requirements, reported on KPIs, and sorted and cleaned data to support strategic decision-making.',
        'Developed CRM tool and database models in Microsoft Power Apps to automate data management and improve efficiency.',
        'Researched and implemented project management tools to optimize workflows and enhance user experience.',
        'Served as Challenge Coordinator for the Smart Cities program, organizing events to enhance community engagement.',
      ],
    },
    {
      title: 'Engineer for the Week (EFTW) Teacher/Mentor',
      company: 'Pi515 Internship',
      location: 'Des Moines, Iowa',
      date: 'Sep. 2022 - Dec. 2022',
      description: [
        'Curated innovative ideas to engage 15 middle school students to learn about programming and opportunities in STEM.',
        'Assisted students in programming games by providing them with debugging advice to improve code and learn new material.',
      ],
    },
  ]

  return (
    <div ref={ref} className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 pt-32 bg-light-bg">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight text-center mb-10"
        >
          Experience
        </motion.h2>

        <div className="relative pl-6 sm:pl-8 border-l-2 border-light-border">
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -16 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="absolute left-[-29px] top-1.5 w-3 h-3 bg-text-primary rounded-none border-2 border-light-bg" />
                <div className="bg-light-bg border border-light-border rounded-box p-5 hover:shadow-subtle transition-shadow">
                  <h3 className="text-lg font-semibold text-text-primary">{exp.title}</h3>
                  <p className="text-sm font-medium text-text-secondary mt-0.5">{exp.company}</p>
                  <p className="text-xs text-text-secondary">{exp.location} · {exp.date}</p>
                  <ul className="mt-3 space-y-1.5">
                    {exp.description.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="text-sm text-text-secondary leading-relaxed flex items-start gap-2">
                        <span className="text-text-primary mt-0.5">—</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
