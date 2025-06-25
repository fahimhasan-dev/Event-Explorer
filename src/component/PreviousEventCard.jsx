import React, { useRef } from 'react';

const PreviousEventCard = ({ index, card }) => {
    const { name, thumbnail, category, date, location,description} = card;
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
             <div className="max-w-full  rounded-lg shadow-sm bg-gray-800 border-gray-700">
        <a href="Event Image">
          <img className="rounded-t-lg " src={thumbnail} alt="thumbnail Img" />
        </a>
        <div className="md:p-5">
          <div>
            <h5 className="mb-2 md:text-2xl font-bold tracking-tight  text-white">
              {name}
            </h5>
          </div>

          <div className="border p-4 rounded sm:my-2">
            <p className="text-white text-sm sm:text-xl py-2">
              Category- <span className=" paragraph">{category}</span>{" "}
            </p>
            <p className="text-white py-2">
              Location- <span className="paragraph text-sm">{location}</span>{" "}
            </p>
            <p className="text-white py-2">
              Date- <span className="paragraph">{date}</span>{" "}
            </p>
            <p className="text-white py-2">
            Description- <span className="paragraph text-sm">{description}</span>{" "}
            </p>
          </div>  </div>

      </div></div>
    );
};

export default PreviousEventCard;