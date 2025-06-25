import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router';

const EventDetailsSection = ({ event }) => {
  const {thumbnail,description_long,name,description,category,date,location,entry_fee}=event
    return (
        <div className=" sm:p-5 border bg-gray-900  border-gray-700 rounded-xl  shadow-md">
        <div className="w-full  mx-auto bg-white rounded-t-lg p-10 space-y-4 ">
          {/* Image */}
        
          <img
src={thumbnail} alt="Event Thumbnail"
  class="transition-transform duration-300 ease-in-out transform hover:scale-105 w-full rounded-md"
/>
          {/* Description */}
          <h2 className=" text-2xl font-bold text-gray-600  ">Category- {category}</h2>
          <h2 className=" text-2xl sm:font-semibold text-gray-600  "> {name}</h2>
          
          <p className='text-gray-800 sm:font-semibold'>{description }</p>
          <p className='text-gray-800'>{ description_long}</p>
  
          
          
        </div>
        <div className="w-full  mx-auto bg-white rounded-b-lg   p-10 space-y-4 ">
          
          <div className='border border-gray-400 rounded-xl p-4 bg-gray-300'>
                  <h2 className=" sm:text-2xl sm:font-semibold text-gray-600  ">Date: {date}</h2>
                  <h2 className=" sm:text-2xl sm:font-semibold text-gray-600 my-2 ">Location: {location}</h2>
                  <h2 className=" sm:text-2xl sm:font-semibold text-gray-600  ">Entry Fee: {entry_fee}</h2>
        </div>
  
       
        
  
          <Link to="/" className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 font-semibold overflow-hidden text-secondary transition-all duration-150 ease-in-out rounded hover:pr-10 hover:pl-6 bg-gray-50 group">
            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-secondary group-hover:h-full"></span>
            <span className="absolute left-0 pr-4   duration-200 ease-out group-hover:translate-y-12">
            <FaArrowLeft color="secondary" />
            </span>
            <span className="absolute right-0 pr-2.5  -translate-y-12 group-hover:translate-y-0 ease-out duration-200">
            <FaArrowLeft  color="white"/>
            </span>
            <span className="relative w-full text-right transition-colors duration-200 ease-in-out group-hover:text-white">
             See All Event
            </span>
          </Link>
        </div>



      </div>
    );
};

export default EventDetailsSection;