import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChevronDown } from 'react-icons/hi'

const Navbar = ({ scrolled }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const [openDropdown, setOpenDropdown] = useState(null) // 'home' only (Professional Experience & Projects is a direct link)

  const navItems = [
    {
      path: '/',
      label: 'Home',
      hasDropdown: true,
      dropdownKey: 'home',
      subItems: [
        { label: 'About Me', sectionId: 'about' },
        { label: 'Experiences', sectionId: 'experience' },
      ],
    },
    { path: '/expertise', label: 'Professional Experience & Projects' },
    { path: '/leadership', label: 'Leadership' },
    { path: '/spotlight', label: 'In the Spotlight' },
    { path: '/contact', label: 'Contact' },
  ]

  const isActive = (path, item) => {
    if (path === '/') return item.dropdownKey === 'home' && location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  const scrollToSection = (sectionId, targetPath) => {
    setOpenDropdown(null)
    const goToPage = targetPath || '/'
    const onPage = targetPath ? location.pathname === targetPath : location.pathname === '/'
    if (!onPage) {
      navigate(goToPage)
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          const yOffset = -80
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
          window.scrollTo({ top: y, behavior: 'smooth' })
        }
      }, 150)
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        const yOffset = -80
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
        window.scrollTo({ top: y, behavior: 'smooth' })
      }
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-light-bg border-b border-light-border shadow-subtle'
          : 'bg-light-bg/80 backdrop-blur-sm border-b border-light-border/60'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              if (location.pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }
            }}
          >
            <img src="/images/tranmflogo.png" alt="Maya France" className="h-14 w-auto" />
          </Link>
          <ul className="hidden md:flex space-x-1 items-center">
            {navItems.map((item) => (
              <li key={item.path + (item.label || '') + (item.dropdownKey || '')} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.dropdownKey)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Link
                      to={item.path}
                      className={`relative block py-3 px-3 text-sm font-medium transition-colors duration-200 flex items-center gap-0.5 ${
                        isActive(item.path, item)
                          ? 'text-text-primary'
                          : 'text-text-secondary hover:text-text-primary'
                      }`}
                    >
                      {item.label}
                      <HiChevronDown className={`text-xs transition-transform duration-200 ${openDropdown === item.dropdownKey ? 'rotate-180' : ''}`} />
                      {isActive(item.path, item) && (
                        <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-text-primary" />
                      )}
                    </Link>
                    <AnimatePresence>
                      {openDropdown === item.dropdownKey && (
                        <motion.div
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 mt-0 w-48 bg-white border border-light-border shadow-card overflow-hidden rounded-box"
                        >
                          {item.subItems.map((subItem, index) => (
                            <motion.button
                              key={subItem.sectionId}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: index * 0.03 }}
                              onClick={() => scrollToSection(subItem.sectionId, subItem.targetPath)}
                              className="w-full text-left px-4 py-2.5 text-sm text-text-secondary hover:text-text-primary hover:bg-light-bg transition-colors duration-150 border-b border-light-border last:border-0"
                            >
                              {subItem.label}
                            </motion.button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`relative block py-3 px-3 text-sm font-medium transition-colors duration-200 ${
                      isActive(item.path, item)
                        ? 'text-text-primary'
                        : 'text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    {item.label}
                    {isActive(item.path, item) && (
                      <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-text-primary" />
                    )}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <button className="md:hidden text-text-primary p-2" aria-label="Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
