import React, { use } from "react";
import ServicesCard from "./ServicesCard";

const ServicesData = fetch("/services.json").then((res) => res.json());
const Services = () => {
  const sData = use(ServicesData);
 
  return (
    <div className="py-20">
      <h2 className="font-extrabold sm:text-5xl text-3xl text-center mt-[100px]  mx-4 sm:mx-0">
        We are Provide Best Services
      </h2>

      <div className=" xl:grid-cols-4 xl:w-11/12 mx-auto md:grid-cols-2  md:mx-auto  gap-6 xl:justify-center  items-center grid  mt-8 ">
        {sData.map((data, index) => (
          <ServicesCard key={index} data={data}></ServicesCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
