import React, { use } from "react";
import TitleHeader from "./TitleHeader";
import CardHoverEffect from "./CardHoverEffect";

const eventData = fetch("/event.json").then((res) => res.json());
const EventCard = () => {
  const data = use(eventData);


  return (
    <section
      id="eventCard"
      className="flex-center sm:px-5 md:px-10 md:mt-40 mt-20 "
    >
      <div className="w-full h-full md:px-10 sm:px-5">
        <TitleHeader
          title="Upcoming Event!!"
          sub="⭐ Don't miss our life changing event"
        ></TitleHeader>
        <div className="xl:columns-3 columns-1 mt-16">
          {data.map((card,index) => (
            <CardHoverEffect  card={card} key={index}></CardHoverEffect>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventCard;
