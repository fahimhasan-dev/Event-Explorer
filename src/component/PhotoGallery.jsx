import React from "react";
import TitleHeader from "./TitleHeader";
import Marquee from "react-fast-marquee";
const PhotoGallery = () => {
  return (
    <div className="pt-40 pb-20  ">
      <TitleHeader   title="Some Memories!!" sub=""></TitleHeader>
      <div className=" p-5 mt-16 border bg-gray-900 w-11/12 mx-auto  border-gray-700 rounded-xl mb-5 ">
      <Marquee speed={200} pauseOnHover={true}  className="grid p-4 bg-[#3f3e3ebe] cursor-pointer  grid-cols-2 md:grid-cols-4 mt-8 gap-4  mx-auto   rounded-xl ">
       



      <div className="grid grid-cols-2  h-96 md:grid-cols-4 gap-4">
    <div className="grid gap-4 ">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co.com/MxDYFvYK/1745154124955.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co.com/sJm81hn7/images-3.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co.com/LDB7z3RX/cd6a-1140o400o3-SZk-Wsjz-KPNSv-Kxo-Tvhe-Wr-Y.jpg" alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co.com/LdrGzyCJ/mobile-app-ux-ui-basics.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co.com/RkWC5Zsg/Brown-Vintage-Polaroid-Photo-Collage-Autumn-Vision-Board-2025-Desktop-Wallpaper.png" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co.com/4nQWQPgy/ramadan-mubarak-from-my-amazing-programming-hero-team.jpg" alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co.com/20m8CHgs/ai-generated-intricately-decorated-lamp-bearing-eid-mubarak-wishes-festive-vibes-photo.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co.com/0jQmHQty/web-champions-takeover-16-9.webp" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co.com/4gN1CCwc/Whats-App-Image-2025-05-05-at-11-15-29-9da7079f.jpg" alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co.com/zyMkFHN/487759797-1369627194361060-4957902464233766933-n.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co.com/B2FC58LH/Whats-App-Image-2025-05-05-at-11-15-21-65961ed1.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co.com/qMNLWFmq/1685963836617.jpg" alt=""/>
        </div>
    </div>
</div>


      </Marquee>
    </div></div>
  );
};

export default PhotoGallery;
