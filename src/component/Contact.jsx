import React from "react";

const Contact = () => {
  return (
    <div className="h-full md:w-[80%] mx-auto flex flex-col xl:grid xl:grid-cols-12 mb-5 gap-5  card-border rounded-xl xl:p-10 p-3">
      <div className=" col-span-5 flex border p-4 rounded  flex-col gap-9">
        <h1 className="font-bold pt-3 text-center text-4xl">
          Contact Us & FeedBack
        </h1>
        <ul className="list-disc p-4">
          <li className=" text-xl ">Mail</li>
          <span className="font-light">hello@</span>
        </ul>
        <ul className="list-disc p-4">
          <li className="text-xl">Address</li>
          <span>Chuadanga</span>
        </ul>
        <ul className="list-disc p-4">
          <li className="text-xl">Phone</li>
          <span>+88</span>
        </ul>
      </div>
      <div className=" col-span-7 w-full">
        <form className=" flex flex-col gap-5 ">
          <input
            className="contactInput"
            type="text"
            required
            placeholder="Name"
          />
          <input
            className="contactInput"
            type="Email"
            required
            placeholder="Email"
          />
          <textarea
            className="border border-white rounded p-4"
            rows={8}
            
            placeholder="Massage"
          ></textarea>
          <button
            className="bg-orange-400 cursor-pointer text-black rounded p-2 "
            type="submit"
          >
           Send Email
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
