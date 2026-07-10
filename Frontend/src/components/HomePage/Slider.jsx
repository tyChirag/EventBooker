import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getEvents } from '../../Services/eventServices'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

const contentVariants = {
  enter: (direction) => ({
    opacity: 0,
    x: direction > 0 ? 60 : -60,
    y: 16,
  }),
  center: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction > 0 ? -60 : 60,
    transition: { duration: 0.35 },
  }),
}

const SlideContent = ({ event, direction }) => (
  <AnimatePresence mode="wait" custom={direction}>
    <motion.div
      key={event._id}
      custom={direction}
      variants={contentVariants}
      initial="enter"
      animate="center"
      exit="exit"
      className="w-full max-w-xl text-white"
    >
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="inline-block text-xs tracking-[.25em] uppercase font-medium px-3 py-1 rounded-full border border-white/20 text-white/60 mb-3 md:mb-4"
      >
        Featured Event
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-black font-serif mb-3 md:mb-4 leading-tight line-clamp-2"
        style={{ textShadow: '0 4px 30px rgba(0,0,0,0.5)' }}
      >
        {event.movieName}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="text-sm sm:text-base lg:text-lg text-gray-300 mb-4 md:mb-5 line-clamp-2 md:line-clamp-3"
      >
        {event.description}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
        className="flex flex-wrap gap-3 md:gap-5 mb-5 md:mb-8 text-xs sm:text-sm md:text-base"
      >
        <span className="flex items-center gap-1.5">
          <span className="text-amber-400">⭐</span> {event.rating}/5
        </span>
        <span className="flex items-center gap-1.5">
          <span className="text-amber-400">📍</span> {event.location}
        </span>
        <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
          ₹{event.price}
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55 }}
      >
        <Link to={`/details/${event._id}`}>
          <motion.span
            whileHover={{ scale: 1.05, backgroundColor: '#dc2626' }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-red-600 px-6 py-2.5 md:px-8 md:py-3 rounded-xl text-sm md:text-base font-semibold transition-colors cursor-pointer"
          >
            View Details
          </motion.span>
        </Link>
      </motion.div>
    </motion.div>
  </AnimatePresence>
)

const Slider = ({ theme = 'black' }) => {
  const [slidesData, setSlidesData] = useState([])
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getEvents()
      .then((res) => setSlidesData(res.list))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div
        className={`hero-slider skeleton-shimmer ${
          theme === 'black' ? 'bg-zinc-900' : 'bg-zinc-200'
        }`}
      />
    )
  }

  if (slidesData.length === 0) return null

  const activeEvent = slidesData[activeIndex]

  return (
    <section className="hero-slider relative w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={slidesData.length > 1}
        className="hero-swiper h-full w-full"
        onSlideChange={(swiper) => {
          setDirection(swiper.activeIndex > activeIndex ? 1 : -1)
          setActiveIndex(swiper.realIndex)
        }}
      >
        {slidesData.map((event) => (
          <SwiperSlide key={event._id}>
            <div className="relative h-full w-full overflow-hidden">
              <img
                src={`http://localhost:3000${event.photoUrl}`}
                alt={event.movieName}
                className="absolute inset-0 h-full w-full object-cover object-center ken-burns"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="hero-slider-content absolute inset-0 z-10 flex items-end md:items-center pointer-events-none">
        <div className="w-full px-5 sm:px-8 md:px-16 pb-14 sm:pb-16 md:pb-0 pointer-events-auto">
          {activeEvent && (
            <SlideContent event={activeEvent} direction={direction} />
          )}
        </div>
      </div>
    </section>
  )
}

export default Slider
