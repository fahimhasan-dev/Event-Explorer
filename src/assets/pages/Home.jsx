import React, { Suspense } from "react";

import HeroSlider from "../../component/HeroSlider";
import EventCard from "../../component/EventCard";
import Loader from "../../component/Loader";
import OurPreviousEvent from "../../component/OurPreviousEvent";
// import Footer from "../../component/Footer";
// import Contact from "../../component/Contact";
// import PhotoGallery from "../../component/PhotoGallery";
import Services from "../../component/Services";
import { ToastContainer } from "react-toastify";
import { Helmet, HelmetProvider } from "react-helmet-async";


const Home = () => {
  return (
    <div>
    <HelmetProvider>
      <Helmet>
        <title>Home</title>
      </Helmet>
   
   
      <header>
     
        <HeroSlider></HeroSlider>
      </header>

 
      <main>
        <Suspense fallback={<Loader></Loader>}>
          <EventCard></EventCard>
        </Suspense>

        <section>
          <OurPreviousEvent></OurPreviousEvent>
        </section>
        <section className="mt-10">
    
         <Services></Services>
         
        </section>
      </main>
      </HelmetProvider>
    </div>
  );
};

export default Home;
