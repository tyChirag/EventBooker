import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getEvents } from '../../Services/eventServices'
import { BASE_URL } from '../../config'

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

const imageVariants = {
  enter: { opacity: 0, scale: 0.92, y: 20 },
  center: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } },
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
        <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur px-3 py-1 rounded-full">
          <span className="text-amber-400">⭐</span> {event.rating}/5
        </span>
        <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur px-3 py-1 rounded-full">
          <span className="text-amber-400">📍</span> {event.location}
        </span>
        <span className="flex items-center gap-1.5 bg-amber-500/20 border border-amber-500/40 text-amber-400 font-semibold px-3 py-1 rounded-full">
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
            🎟 Book Now
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
    <section className="hero-slider relative w-full overflow-hidden">
      {/* Blurred background — follows active slide */}
      <AnimatePresence>
        {activeEvent && (
          <motion.div
            key={activeEvent._id + '-bg'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 z-0"
          >
            <img
              src={`${BASE_URL}${activeEvent.photoUrl}`}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover object-center"
              style={{ filter: 'blur(28px)', transform: 'scale(1.12)' }}
            />
            {/* Dark overlay on top of the blur */}
            <div className="absolute inset-0 bg-black/65" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Swiper — transparent, just for slide logic + arrows + dots */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={slidesData.length > 1}
        className="hero-swiper h-full w-full absolute inset-0 z-10"
        onSlideChange={(swiper) => {
          setDirection(swiper.activeIndex > activeIndex ? 1 : -1)
          setActiveIndex(swiper.realIndex)
        }}
      >
        {slidesData.map((event) => (
          <SwiperSlide key={event._id}>
            {/* Invisible placeholder — real image shown below */}
            <div className="h-full w-full" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Main content layer — split layout */}
      <div className="hero-slider-content absolute inset-0 z-20 flex items-center pointer-events-none">
        <div className="w-full px-5 sm:px-8 md:px-16 flex items-center justify-between gap-8 pointer-events-auto">

          {/* Left — text info */}
          <div className="flex-1 min-w-0">
            {activeEvent && (
              <SlideContent event={activeEvent} direction={direction} />
            )}
          </div>

          {/* Right — contained event image (no stretch, no blur) */}
          {activeEvent && (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeEvent._id + '-img'}
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="hidden md:flex flex-shrink-0 items-center justify-center"
                style={{ width: 'clamp(200px, 28vw, 360px)' }}
              >
                <div
                  className="relative rounded-2xl overflow-hidden shadow-2xl"
                  style={{
                    boxShadow: '0 25px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.08)',
                  }}
                >
                  <img
                    src={`${BASE_URL}${activeEvent.photoUrl}`}
                    alt={activeEvent.movieName}
                    className="block w-full h-auto"
                    style={{
                      maxHeight: 'clamp(260px, 55vh, 480px)',
                      objectFit: 'contain',
                      background: 'rgba(0,0,0,0.3)',
                    }}
                  />
                  {/* Subtle shine on top of image card */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(255,255,255,0.07) 0%, transparent 60%)',
                    }}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </section>
  )
}

export default Slider
