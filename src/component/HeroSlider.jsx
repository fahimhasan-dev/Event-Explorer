import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HeroSlider = () => {
  return (
    <section className="w-full h-[300px] sm:h-[400px]  md:h-[550px] xl:h-[650px] xl:h-[750px] relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
      
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="https://i.ibb.co.com/200wz9M4/web-champions-takeover-16-9.webp"
              alt="City Football Championship"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 lg:bottom-10 left-4 lg:left-6 md:left-10 bg-black/50 text-white p-3 sm:p-4 md:p-6 rounded-xl max-w-[90%] sm:max-w-md">
              <h2 className="text-lg sm:text-2xl md:text-4xl font-bold">City Football Championship</h2>
              <p className="text-xs sm:text-sm md:text-base mt-2">
                Enjoy tha City Football Championship.
              </p>
            </div>
          </div>
        </SwiperSlide>

      
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="https://i.ibb.co.com/Xrrpf3WN/Screenshot-2025-05-05-114530.png"
              alt="Parenting"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 sm:bottom-10 left-4 sm:left-6 md:left-10 bg-black/50 text-white p-3 sm:p-4 md:p-6 rounded-xl max-w-[90%] sm:max-w-md">
              <h2 className="text-lg sm:text-2xl md:text-4xl font-bold">Parenting</h2>
              <p className="text-xs sm:text-sm md:text-base  mt-2">
              Learn practical parenting strategies based on the guidance of Islamic scholars and psychologists to build a strong relationship with your children, rooted in the teachings of the Qur'an and Sunnah.
              </p>
            </div>
          </div>
        </SwiperSlide>

     
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="https://i.ibb.co.com/TDH3DZzf/cd6a-1140o400o3-SZk-Wsjz-KPNSv-Kxo-Tvhe-Wr-Y.jpg"
              alt="Startup Conference"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 sm:bottom-10 left-4 sm:left-6 md:left-10 bg-black/50 text-white p-3 sm:p-4 md:p-6 rounded-xl max-w-[90%] sm:max-w-md">
              <h2 className="text-lg sm:text-2xl md:text-4xl font-bold">FutureTech Conference 2025</h2>
              <p className="text-xs sm:text-sm md:text-base mt-2">
              Join industry leaders to explore the future of technology, AI, and innovation.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HeroSlider;
