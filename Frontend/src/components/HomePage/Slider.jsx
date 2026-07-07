import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { useEffect, useState } from "react";
import { getEvents } from "../../Services/eventServices";

const Slider = () => {
  const [slidesData, setSlidesData] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await getEvents();
      setSlidesData(res.list);
      console.log("Fetched events for slider:", res.list);
    };

    fetchEvents();
  }, []);

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      effect="fade"
      loop={slidesData.length > 2}
      className="h-[70vh] w-full"
    >
      {slidesData.map((event) => (
        <SwiperSlide key={event._id}>
          <div className="relative h-full w-full overflow-hidden">

            {/* Background Image */}
            <img
              src={`http://localhost:3000${event.photoUrl}`}
              alt={event.movieName}
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>

            {/* Content */}
            <div className="absolute left-16 top-1/2 -translate-y-1/2 text-white max-w-xl">

              <h1 className="text-6xl font-bold mb-5">
                {event.movieName}
              </h1>

              <p className="text-lg text-gray-300 mb-5">
                {event.description}
              </p>

              <div className="flex gap-6 mb-8">
                <span>⭐ {event.rating}/5</span>
                <span>📍 {event.location}</span>
                <span>💰 ₹{event.price}</span>
              </div>

              <button className="bg-red-600 px-8 py-3 rounded-lg hover:bg-red-700 transition">
                View Details
              </button>

            </div>

          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;