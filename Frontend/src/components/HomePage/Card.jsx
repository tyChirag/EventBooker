import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  return (
    <div className="bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-zinc-700">

      {/* Image */}
      <img
        src={`http://localhost:3000${event.photoUrl}`}
        alt={event.movieName}
        className="w-full h-60 object-cover"
      />

      {/* Content */}
      <div className="p-5">

        <h2 className="text-2xl font-bold text-white">
          {event.movieName}
        </h2>

        <div className="mt-4 space-y-2 text-gray-300">

          <p>
            📍 <span className="font-semibold">Location:</span>{" "}
            {event.location}
          </p>

          <p>
            📅 <span className="font-semibold">Date:</span>{" "}
            {new Date(event.date).toLocaleDateString()}
          </p>

          <p>
            ⭐ <span className="font-semibold">Rating:</span>{" "}
            {event.rating}/5
          </p>

          <p>
            💰 <span className="font-semibold">Price:</span> ₹{event.price}
          </p>

          <p className="text-gray-400 line-clamp-3">
            {event.description}
          </p>

        </div>

        <Link
          to={`/details/${event._id}`}
          className="block mt-6 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold text-center py-3 rounded-xl transition"
        >
          View Details
        </Link>

      </div>
    </div>
  );
};

export default EventCard;
