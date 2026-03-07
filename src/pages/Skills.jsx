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
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: delay + index * 0.02 }}
        className="bg-light-bg rounded-box px-3 py-2.5 border border-light-border hover:border-text-secondary/40 transition-colors flex flex-row items-center gap-3 h-full"
      >
        <div
          className="w-9 h-9 rounded-box flex items-center justify-center text-lg flex-shrink-0"
          style={{ backgroundColor: skill.bgColor, color: skill.textColor }}
        >
          {skill.icon ? <Icon /> : <span className="text-sm font-medium">{skill.name.charAt(0)}</span>}
        </div>
        <span className="text-xs sm:text-sm font-medium text-text-primary truncate flex-1">{skill.name}</span>
      </motion.div>
    )
  }

  return (
    <div ref={ref} className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-light-bg pt-32">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight text-center mb-10"
        >
          Skills & Expertise
        </motion.h2>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-12">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-text-secondary mb-4">Technical Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3">
            {technicalSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} index={index} delay={0.1} />
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }}>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-text-secondary mb-4">Tools & Platforms</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3">
            {toolsPlatforms.map((skill, index) => (
              <SkillCard key={index} skill={skill} index={index} delay={0.2} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Skills
