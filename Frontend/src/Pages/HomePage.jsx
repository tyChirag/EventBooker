import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Slider from '../Components/HomePage/Slider'
import Card from '../Components/HomePage/Card'
import { getEvents } from '../Services/eventServices'
import Navbar from '../Components/HomePage/Navbar'

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

const HomePage = ({ theme, setTheme }) => {
  const isDark = theme === 'black'
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getEvents()
      .then((data) => setEvents(data.list))
      .finally(() => setLoading(false))
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`min-h-screen ${isDark ? 'black' : 'white'}`}
    >
      <Navbar setTheme={setTheme} theme={theme} />
      <Slider theme={theme} />

      <section className="px-4 md:px-8 py-14 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-12"
        >
          <span
            className={`text-xs tracking-[.3em] uppercase font-medium ${
              isDark ? 'text-amber-400/70' : 'text-amber-600'
            }`}
          >
            Discover
          </span>
          <h2
            className={`text-4xl md:text-5xl font-black font-serif mt-2 ${
              isDark ? 'text-white' : 'text-zinc-900'
            }`}
          >
            Upcoming{' '}
            <span className="text-amber-500">Events</span>
          </h2>
          <p
            className={`mt-3 max-w-lg text-base leading-relaxed ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Browse and book tickets for the hottest shows and premieres near you.
          </p>
        </motion.div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className={`rounded-2xl h-[420px] skeleton-shimmer ${
                  isDark ? 'bg-zinc-800/60' : 'bg-zinc-200/80'
                }`}
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        ) : events.length === 0 ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`text-center py-20 text-lg ${isDark ? 'text-gray-500' : 'text-gray-400'}`}
          >
            No events available yet. Check back soon!
          </motion.p>
        ) : (
          <motion.div
            variants={gridVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {events.map((event, index) => (
              <motion.div key={event._id} variants={cardVariants}>
                <Card event={event} theme={theme} index={index} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </section>
    </motion.div>
  )
}

export default HomePage
