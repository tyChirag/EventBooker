import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { to: '/home', label: 'Home', icon: 'fa-regular fa-house' },
  { to: '/addEvents', label: 'Add Event', icon: 'fa-solid fa-bullhorn' },
  { to: '/about', label: 'About', icon: 'fa-solid fa-info' },
  { to: '/contact', label: 'Contact', icon: 'fa-solid fa-phone' },
]

const Navbar = ({ theme, setTheme }) => {
  const isDark = theme === 'black'
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const linkClass = (path) => {
    const active = location.pathname === path
    if (active) return 'text-amber-500'
    return isDark
      ? 'text-white/70 hover:text-white'
      : 'text-zinc-600 hover:text-zinc-900'
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 backdrop-blur-md border-b ${
        isDark
          ? 'bg-black/70 border-white/10'
          : 'bg-white/80 border-black/10'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/home" onClick={() => setMenuOpen(false)}>
          <motion.span
            whileHover={{ scale: 1.02 }}
            className="text-2xl md:text-3xl font-black tracking-widest uppercase font-serif"
          >
            <span className="text-amber-500">Cine</span>
            <span className={isDark ? 'text-white' : 'text-zinc-900'}>X</span>
          </motion.span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item, i) => (
            <motion.div
              key={item.to}
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.08 }}
            >
              <Link
                to={item.to}
                className={`group flex items-center gap-2 text-sm font-medium tracking-widest uppercase transition-colors duration-300 relative ${linkClass(item.to)}`}
              >
                <i className={`${item.icon} text-amber-500 text-xs`} />
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-amber-500 transition-all duration-300 ${
                    location.pathname === item.to
                      ? 'w-full'
                      : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => setTheme(isDark ? 'white' : 'black')}
            className={`p-2.5 rounded-full border transition-colors ${
              isDark
                ? 'border-white/20 text-amber-400 hover:bg-white/10'
                : 'border-zinc-300 text-amber-600 hover:bg-zinc-100'
            }`}
            aria-label="Toggle theme"
          >
            <i className={isDark ? 'fa-regular fa-sun' : 'fa-solid fa-moon'} />
          </motion.button>

          <button
            type="button"
            className={`md:hidden p-2.5 rounded-lg transition-colors ${
              isDark ? 'text-white hover:bg-white/10' : 'text-zinc-900 hover:bg-zinc-100'
            }`}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            <i className={menuOpen ? 'fa-solid fa-xmark text-lg' : 'fa-solid fa-bars'} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className={`md:hidden overflow-hidden border-t mt-4 pt-2 ${
              isDark ? 'border-white/10' : 'border-black/10'
            }`}
          >
            {navLinks.map((item, i) => (
              <motion.div
                key={item.to}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-3 py-3 text-sm tracking-widest uppercase transition-colors ${linkClass(item.to)}`}
                >
                  <i className={`${item.icon} text-amber-500`} />
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
