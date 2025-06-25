import React, { useEffect, useState } from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";

import RightAside from "../../component/RightAside";
import EventDetailsSection from "../../component/EventDetailsSection";
import { useLoaderData, useParams } from "react-router";
import ReserveSeatFrom from "../../component/ReserveSeatFrom";


const EventDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
   
    const [event, setEvent] = useState({});
    useEffect(() => {
      const eventData = data.find((singleData)=> singleData.id == id )
       
        setEvent(eventData)
    }, [data, id]);
    
  return (

    <div className="border">
      <Navbar></Navbar>

      <main className=" w-11/12 mx-auto sm:grid gap-5 py-4 my-4 gap-5px grid-cols-12">
        <section className=" col-span-9">
         
         <EventDetailsSection event={event}></EventDetailsSection>
        </section>
        <aside className="col-span-3">
          <ReserveSeatFrom></ReserveSeatFrom>
          <RightAside event={event}></RightAside>
        </aside>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default EventDetails;
