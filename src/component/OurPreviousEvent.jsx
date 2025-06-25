import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TitleHeader from "./TitleHeader";
import { use } from "react";
import CardHoverEffect from "./CardHoverEffect";
import { FaStar } from "react-icons/fa";
import PreviousEventCard from "./PreviousEventCard";


const eventData = fetch("/ourPreviousEvent.json").then((res) => res.json());
gsap.registerPlugin(ScrollTrigger);

const OurPreviousEvent = () => {
  const data = use(eventData);
  
  
  useGSAP(() => {
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      gsap.from(card, {
        xPercent: -100,

        opacity: 0,

        transformOrigin: "left left",

        duration: 1,

        ease: "power2.inOut",

        scrollTrigger: {
          trigger: card,

          start: "top 80%",
        },
      });
    });

    gsap.to(".timeline", {
      transformOrigin: "bottom bottom",

      ease: "power1.inOut",

      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",

        onUpdate: (self) => {
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });

    gsap.utils.toArray(".expText").forEach((text) => {
      gsap.from(text, {
        xPercent: 0,

        duration: 1,

        ease: "power2.inOut",

        scrollTrigger: {
          trigger: text,

          start: "top 60%",
        },
      });
    }, "<");
  }, []);

  return (
    <section className="flex-center md:mt-40 mt-20 section-padding xl:px-0">
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Our Previous Event"
          sub=" See Our Audience Feedback &"
         
        />
        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {data.map((card,index) => (
              <div key={index}  className="exp-card-wrapper">
                <div className="xl:w-2/6">
                  <PreviousEventCard card={card} index={index}>
                    <div>
                      <img src={card.thumbnail} alt="exp-img" />
                    </div>
                  </PreviousEventCard>
                </div>
                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>
                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div className="timeline-logo">
                        <div className="avatar">
                          <div className="w-24 rounded-full">
                            <img src={card.logo} />
                          </div>
                        </div>
                      </div>
                      <div>
                        <h1 className="font-semibold text-3xl">{card.event_name}</h1>
                        <p className="my-5 text-white-50">
                          🗓️&nbsp;{card.date}
                        </p>
                        <p className="text-[#839CB5] italic">
                          Speaker Was
                        </p>

                        <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                          {card.speakers.map((speaker,index) => (
                            <div key={index} >
                            <li  className="text-lg font-bold">
                             
                              {speaker.name}
                              <p>{ speaker.title}</p>
                              <p> Topic-{ speaker.topic}</p>
                            </li>
                          
                            </div>
                          ))}
                        </ul>
                        <p className="text-[#839CB5] ms-5 mt-5 italic">
                          Responsibilities
                        </p>
                        <div>{card.feedback.map((odience, index) => (
                          <ul className="list-disc" key={index}><li className="text-lg ms-5 mt-5 text-white-50">{odience.user} was Comment
                          </li>
                          <p className="text-sm  ms-5 text-white-50">{ odience.comment}</p>
                          </ul>
                        ))}</div>
                        <p className="ms-5 font-semibold text-white-50 mt-5 flex gap-2 items-center"><FaStar size={15} color="gold" /> Average Rating { card.average_rating}<FaStar size={15} color="gold" /></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPreviousEvent;
