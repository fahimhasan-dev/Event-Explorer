import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';

const ContactUs = () => {
    return (
        <div>
        <h2 className="font-bold my-5 ">Find Us on</h2>
  
        <div>
          <div className="join join-vertical w-full ">
            <button className="relative inline-flex btn join-item items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all sm:bg-white bg-[#1877F2] rounded hover:bg-white group">
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#1877F2] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative flex gap-1 items-center w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                <FaFacebook></FaFacebook> Facebook
              </span>
            </button>
            <button className="relative inline-flex btn join-item items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all sm:bg-white bg-[#0A66C2] rounded hover:bg-white group">
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#0A66C2] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative flex gap-1 items-center w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                <FaLinkedin size={15} />
                Linkedin
              </span>
            </button>
            <button className="relative inline-flex btn join-item items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all sm:bg-white bg-[#FF0000] rounded hover:bg-white group">
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#FF0000] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative flex gap-2 items-center w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                <FaYoutube size={15} /> YouTube
              </span>
            </button>
            <button className="relative inline-flex btn join-item items-center  justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white  rounded hover:bg-white group">
              <span className="w-48 hidden sm:flex h-48 rounded rotate-[-40deg] bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative flex gap-2 items-center w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                <BsInstagram></BsInstagram> Instagram
              </span>
            </button>
          </div>
        </div>
      </div>
    );
};

export default ContactUs;