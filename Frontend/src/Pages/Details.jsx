import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getDetails } from "../Services/eventServices";
import { BASE_URL } from "../config";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Details = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();

  const [event, setEvent] = useState(null);

  const imageRef = useRef();
  const overlayRef = useRef();
  const titleRef = useRef();
  const infoRef = useRef();
  const descRef = useRef();
  const buttonRef = useRef();
  const cardsRef = useRef([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getDetails(eventId);

      // change this if your API returns differently
      setEvent(res.event || res.data || res);
    };

    fetchData();
  }, [eventId]);

  useGSAP(() => {
    if (!event) return;

    gsap.from(imageRef.current, {
      scale: 1.3,
      duration: 2,
      ease: "power3.out",
    });

    gsap.from(overlayRef.current, {
      opacity: 0,
      duration: 1.5,
    });

    gsap.from(titleRef.current, {
      x: -120,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(infoRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.3,
    });

    gsap.from(descRef.current, {
      y: 40,
      opacity: 0,
      duration: 1,
      delay: 0.6,
    });

    gsap.from(buttonRef.current, {
      scale: 0,
      duration: 0.8,
      ease: "back.out(2)",
      delay: 1,
    });

    gsap.from(cardsRef.current, {
      y: 80,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      delay: 1.2,
    });
  }, [event]);

  if (!event) {
    return (
      <div className="h-screen flex justify-center items-center bg-black text-white text-3xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen text-white">

      {/* HERO SECTION */}

      <section className="relative h-screen overflow-hidden">

        <img
          ref={imageRef}
          src={`${BASE_URL}${event.photoUrl}`}
          alt={event.movieName}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div
          ref={overlayRef}
          className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"
        />

        <div className="relative z-10 h-full flex items-center">

          <div className="max-w-3xl px-16">

            <button
              onClick={() => navigate(-1)}
              className="mb-10 bg-white/20 backdrop-blur-md px-5 py-2 rounded-full hover:bg-white/30 transition"
            >
              ← Back
            </button>

            <h1
              ref={titleRef}
              className="text-7xl font-extrabold leading-tight"
            >
              {event.movieName}
            </h1>

            <div
              ref={infoRef}
              className="flex flex-wrap gap-8 mt-8 text-xl"
            >
              <span>⭐ {event.rating}/5</span>

              <span>
                📅{" "}
                {new Date(event.date).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>

              <span>📍 {event.location}</span>
            </div>

            <p
              ref={descRef}
              className="mt-10 text-lg leading-8 text-gray-300 max-w-2xl"
            >
              {event.description}
            </p>

            <button
              ref={buttonRef}
              className="mt-12 bg-red-600 hover:bg-red-700 px-10 py-4 rounded-xl text-lg font-semibold transition duration-300 hover:scale-105"
            >
              🎟 Book Ticket
            </button>

          </div>

        </div>
      </section>

      {/* EVENT INFO */}

      <section className="max-w-7xl mx-auto py-24 px-8">

        <h2 className="text-5xl font-bold text-center mb-16">
          Event Information
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div
            ref={(el) => (cardsRef.current[0] = el)}
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20"
          >
            <h3 className="text-xl text-gray-400 mb-3">Price</h3>

            <p className="text-4xl font-bold text-green-400">
              ₹{event.price}
            </p>
          </div>

          <div
            ref={(el) => (cardsRef.current[1] = el)}
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20"
          >
            <h3 className="text-xl text-gray-400 mb-3">Rating</h3>

            <p className="text-4xl font-bold text-yellow-400">
              ⭐ {event.rating}
            </p>
          </div>

          <div
            ref={(el) => (cardsRef.current[2] = el)}
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20"
          >
            <h3 className="text-xl text-gray-400 mb-3">Location</h3>

            <p className="text-2xl font-semibold">{event.location}</p>
          </div>

          <div
            ref={(el) => (cardsRef.current[3] = el)}
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20"
          >
            <h3 className="text-xl text-gray-400 mb-3">Date</h3>

            <p className="text-2xl font-semibold">
              {new Date(event.date).toLocaleDateString()}
            </p>
          </div>

        </div>

      </section>

      {/* DESCRIPTION */}

      <section className="max-w-5xl mx-auto pb-32 px-8">

        <h2 className="text-5xl font-bold mb-10">
          About this Event
        </h2>

        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 border border-white/20 shadow-xl">

          <p className="text-gray-300 leading-9 text-lg">
            {event.description}
          </p>

        </div>

      </section>
    </div>
  );
};

export default Details;