import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Card = ({ event, theme = 'black' }) => {
  const isDark = theme === 'black'

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`group rounded-2xl overflow-hidden shadow-lg border transition-shadow duration-300 hover:shadow-2xl ${
        isDark
          ? 'bg-zinc-900 border-zinc-700/50 hover:border-amber-500/40 hover:shadow-amber-500/5'
          : 'bg-white border-zinc-200 hover:border-amber-400/60 hover:shadow-amber-400/10'
      }`}
    >
      <div className="relative overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          src={`http://localhost:3000${event.photoUrl}`}
          alt={event.movieName}
          className="w-full h-60 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="absolute top-3 right-3 bg-amber-500 text-black text-sm font-bold px-2.5 py-1 rounded-full shadow-lg"
        >
          ⭐ {event.rating}
        </motion.div>
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-sm line-clamp-2 drop-shadow-lg">
            {event.description}
          </p>
        </div>
      </div>

      <div className="p-5">
        <h2
          className={`text-xl font-bold font-serif truncate ${
            isDark ? 'text-white' : 'text-zinc-900'
          }`}
        >
          {event.movieName}
        </h2>

        <div
          className={`mt-3 space-y-1.5 text-sm ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}
        >
          <p className="flex items-center gap-2">
            <span className="text-amber-500">📍</span>
            <span className="truncate">{event.location}</span>
          </p>
          <p className="flex items-center gap-2">
            <span className="text-amber-500">📅</span>
            {new Date(event.date).toLocaleDateString('en-IN', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            })}
          </p>
          <p className="text-amber-500 font-semibold text-base">
            ₹{event.price}
          </p>
        </div>

        <Link to={`/details/${event._id}`} className="block mt-5">
          <motion.span
            whileHover={{ scale: 1.03, backgroundColor: '#fbbf24' }}
            whileTap={{ scale: 0.97 }}
            className="block bg-amber-500 text-black font-semibold text-center py-3 rounded-xl transition-colors"
          >
            View Details
          </motion.span>
        </Link>
      </div>
    </motion.div>
  )
}

export default Card
