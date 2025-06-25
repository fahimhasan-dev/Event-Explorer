import React, { useRef } from 'react';
import CountUp from 'react-countup';
const ServicesCard = ({data,index}) => {
   const {thumbnail,name,end}=data
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
       
        <div  ref={(el) => (cardRefs.current[index] = el)}
      onMouseMove={handleMouseMove(index)} className='xl:timeline-card card  card-border break-inside-avoid-column flex justify-center py-5 items-center card-border rounded-xl'>
        <div className='bg-gray-800  py-12 px-5 w-[280px]  rounded-2xl inset-shadow-sm '>
            <div><img className='w-20 ' src={thumbnail} alt="" /></div>
            <div className='flex mt-4'>
            <CountUp className='font-extrabold text-4xl' end={end} enableScrollSpy scrollSpyDelay={200} /><p className='font-extrabold text-4xl'>+</p></div>
                <p className='mt-3'>{ name}</p>
        </div></div>
     
  
    );
};

export default ServicesCard;