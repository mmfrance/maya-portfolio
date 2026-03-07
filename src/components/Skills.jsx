import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  SiJavascript, 
  SiPython, 
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJupyter,
  SiGoogle,
  SiMicrosoft,
  SiCanva,
  SiAdobe,
  SiGit,
  SiGithub,
  SiNextdotjs,
  SiNodedotjs,
  SiAmazonaws,
  SiMongodb,
  SiPowerapps
} from 'react-icons/si'
import { FaDatabase, FaJava } from 'react-icons/fa'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const technicalSkills = [
    { name: 'Python', icon: SiPython, color: '#3776AB', bgColor: '#3776AB', textColor: '#fff' },
    { name: 'Java', icon: FaJava, color: '#ED8B00', bgColor: '#ED8B00', textColor: '#fff' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', bgColor: '#F7DF1E', textColor: '#000' },
    { name: 'SQL', icon: FaDatabase, color: '#336791', bgColor: '#336791', textColor: '#fff' },
    { name: 'HTML', icon: SiHtml5, color: '#E34F26', bgColor: '#E34F26', textColor: '#fff' },
    { name: 'CSS', icon: SiCss3, color: '#1572B6', bgColor: '#1572B6', textColor: '#fff' },
    { name: 'React', icon: SiReact, color: '#61DAFB', bgColor: '#61DAFB', textColor: '#000' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', bgColor: '#06B6D4', textColor: '#fff' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000', bgColor: '#000000', textColor: '#fff' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933', bgColor: '#339933', textColor: '#fff' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248', bgColor: '#47A248', textColor: '#fff' },
    { name: 'Jupyter Notebook / Google Colab', icon: SiJupyter, color: '#F37626', bgColor: '#F37626', textColor: '#fff' },
  ]

  const toolsPlatforms = [
    { name: 'Google Workspace (Docs, Sheets, Slides, Drive)', icon: SiGoogle, color: '#4285F4', bgColor: '#4285F4', textColor: '#fff' },
    { name: 'Microsoft Office (Excel, PowerPoint, Word)', icon: SiMicrosoft, color: '#D83B01', bgColor: '#D83B01', textColor: '#fff' },
    { name: 'Microsoft Power Platform', icon: SiPowerapps, color: '#0078D4', bgColor: '#0078D4', textColor: '#fff' },
    { name: 'Canva', icon: SiCanva, color: '#00C4CC', bgColor: '#00C4CC', textColor: '#fff' },
    { name: 'Adobe Illustrator', icon: SiAdobe, color: '#FF9A00', bgColor: '#FF9A00', textColor: '#fff' },
    { name: 'Adobe Photoshop', icon: SiAdobe, color: '#31A8FF', bgColor: '#31A8FF', textColor: '#fff' },
    { name: 'Git', icon: SiGit, color: '#F05032', bgColor: '#F05032', textColor: '#fff' },
    { name: 'GitHub', icon: SiGithub, color: '#181717', bgColor: '#181717', textColor: '#fff' },
    { name: 'AWS', icon: SiAmazonaws, color: '#232F3E', bgColor: '#232F3E', textColor: '#fff' },
  ]

  const SkillCard = ({ skill, index, delay }) => {
    const Icon = skill.icon
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.4, delay: delay + index * 0.03 }}
        whileHover={{ scale: 1.02, y: -2 }}
        className="bg-gray-50 rounded-xl px-3 py-2.5 sm:px-4 sm:py-3 border border-gray-200 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-row items-center gap-3 cursor-pointer group h-full"
      >
        <div 
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center text-xl sm:text-2xl transition-transform duration-300 group-hover:scale-110 shadow-sm font-bold flex-shrink-0"
          style={{ 
            backgroundColor: skill.bgColor,
            color: skill.textColor
          }}
        >
          {skill.icon ? <Icon /> : <span className="text-lg sm:text-xl">{skill.text || skill.name.charAt(0)}</span>}
        </div>
        <span className="text-xs sm:text-sm font-medium text-text-primary leading-tight flex-1">{skill.name}</span>
      </motion.div>
    )
  }

  return (
    <section id="skills" ref={ref} className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-light-bg">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-16 gradient-text"
        >
          Skills & Expertise
        </motion.h2>

        {/* Technical Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-text-primary mb-8 text-center">Technical Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
            {technicalSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} index={index} delay={0.3} />
            ))}
          </div>
        </motion.div>

        {/* Tools & Platforms Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-text-primary mb-8 text-center">Tools & Platforms</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
            {toolsPlatforms.map((skill, index) => (
              <SkillCard key={index} skill={skill} index={index} delay={0.5} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
