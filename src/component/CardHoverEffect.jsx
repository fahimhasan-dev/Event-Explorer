import { useRef } from "react";
import { Link } from "react-router";

const CardHoverEffect = ({ index, card }) => {
  const { name, thumbnail, category, date, location, entry_fee, id } = card;
  const cardRefs = useRef([]);

  const handleMouseMove = (index) => (e) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

    angle = (angle + 360) % 360;

    card.style.setProperty("--start", angle + 60);
  };

  return (
    <div
      ref={(el) => (cardRefs.current[index] = el)}
      onMouseMove={handleMouseMove(index)}
      className="card card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column"
    >
      <div className="max-w-full  border rounded-lg shadow-sm bg-gray-800 border-gray-700">
        <a href="Event Image">
          <img className="rounded-t-lg " src={thumbnail} alt="Event Thumbnail Photo" />
        </a>
        <div className="p-5">
          <div>
            <h5 className="mb-2 sm:text-2xl font-bold tracking-tight  text-white">
              {name}
            </h5>
          </div>

          <div className="border p-4 rounded sm:my-2">
            <p className="text-white py-2">
              Category- <span className=" paragraph">{category}</span>{" "}
            </p>
            <p className="text-white py-2">
              Location- <span className="paragraph text-sm">{location}</span>{" "}
            </p>
            <p className="text-white py-2">
              Date- <span className="paragraph">{date}</span>{" "}
            </p>
          </div>

          <div className="sm:flex items-center mt-2 sm:mt-0 justify-between">
            <span className="sm:text-2xl font-semibold  text-white">
              Entry Fee- {entry_fee}
            </span>
            <Link to={`/event-details/${id}`}>
              <button className="relative mt-1 sm:mt-0 inline-flex items-center justify-start sm:py-3 sm:pl-4 py-1 pl-2 pr-12 overflow-hidden font-semibold text-white transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-indigo-600   group">
                <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-gray-50 group-hover:h-full"></span>
                <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <svg
                    className="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <svg
                    className="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="relative w-full text-left text-sm transition-colors duration-200 ease-in-out group-hover:text-indigo-600">
                  View More
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHoverEffect;
