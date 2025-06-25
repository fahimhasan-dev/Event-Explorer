import React from "react";

const Speakers = () => {
  return (
    <div className="bg-base-200 p-3 rounded">
      <h2 className="font-bold">QZone</h2>
      <div className="space-y-5 flex flex-col items-center mt-5">
        <div className="border-5 border-white ">
        <img
          className="transition-transform duration-300 hover:scale-110"
          src={"https://i.ibb.co.com/pvmJm5vX/ramadan-mubarak-from-my-amazing-programming-hero-team.jpg"}
          alt=""
        /></div>
        <div className="border-5 border-white ">
        <img
          className="transition-transform duration-300 hover:scale-110  "
          src={"https://i.ibb.co.com/j9ZYMRvv/Brown-Vintage-Polaroid-Photo-Collage-Autumn-Vision-Board-2025-Desktop-Wallpaper.png"}
          alt=""
          /></div>
        <div className="border-5 border-white ">
        <img
          className="transition-transform duration-300 hover:scale-110"
          src={"https://i.ibb.co.com/qFdv8ycR/1745154124955.jpg"}
          alt=""
        /></div>
      </div>
    </div>
  );
};

export default Speakers;
