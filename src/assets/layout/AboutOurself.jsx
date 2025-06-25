import React from 'react';

import AboutOurselfBanner from '../../component/AboutOurselfBanner';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';
import PhotoGallery from '../../component/PhotoGallery';
import Contact from '../../component/Contact';

import Services from '../../component/Services';

import Speakers from '../../component/Speakers';
import ContactUs from '../../component/ContactUs';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const AboutOurself = () => {
    return (
      <div className='about'>
            <HelmetProvider>
                 <Helmet>
                     <title>About Our Self</title>
                 </Helmet>
        {/* <AboutOurselfHero></AboutOurselfHero>  */}
        <nav>
          <Navbar></Navbar>
        </nav>
        <header>
          <AboutOurselfBanner></AboutOurselfBanner> </header>
        <main>
          <section>
            <aside>

              <PhotoGallery></PhotoGallery>
              
            </aside>
            <aside className='mt-20 w-11/12 mx-auto  '>
              <h1 className='font-bold text-5xl text-center mt-4 mb-8 '>Out Team Member</h1>
              <div className='lg:hidden'>
                <Speakers></Speakers>
               <ContactUs></ContactUs>
              </div>
              <div className='hidden w-11/12 mx-auto  grid-cols-12 lg:flex  gap-5 '>
                <div>
                  <Speakers></Speakers> 
                </div>
                <div className='w-full'>
                  <Speakers></Speakers> 
                  <div className='p-4 bg-black-50'>
                  <div className='py-10 border-5 border-white'>

                  <ContactUs></ContactUs>
                  </div></div>
                </div>
              </div>
            </aside>
          </section>
          <section>
            <Contact></Contact>
          </section>
          <section className='my-20'>
          <Services></Services>
          </section>
        </main>
        <footer>
          <Footer></Footer>
          </footer>
          </HelmetProvider>
        </div>
    );
};

export default AboutOurself;