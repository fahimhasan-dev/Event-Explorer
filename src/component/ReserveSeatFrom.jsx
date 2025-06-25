import React, { useState } from "react";
import { toast } from "react-toastify";
// import { toast } from "react-toastify";

const ReserveSeatFrom = () => {
  const [color, setColor] = useState(true);

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
 
  // console.log(email, name);
  const handleReserve = (e) => {
    e.preventDefault();
    // const email = e.target.email.value;
    // setEmail(email);
    // const name = e.target.name.value;
    // setName(name);
    setColor(false)
    toast.success("ReserveSeat Success")
    // console.log(name,email)
  };
  return (
    <div className=" w-full mb-5 bg-gray-900  border-gray-700 timeline-card   p-4 rounded-xl  shadow-md">
      <h1 className="font-semibold md:text-4xl text-2xl py-3 text-center">
        Reserve Your seat
      </h1>
      <form onSubmit={handleReserve} className=" flex flex-col gap-5 ">
        <input
          className="contactInput"
          type="text"
          name="name"
          required
          placeholder="Name"
        />
        <input
          className="contactInput"
          type="email "
          name="email"
          required
          placeholder="Email"
        />

        <button
          type="submit"
          className={`${
            color
              ? "bg-orange-400 cursor-pointer text-black rounded p-2"
              : " bg-green-400 cursor-pointer text-black rounded p-2"
          }  `}
        >
          Reserve Seat
        </button>
      </form>
    </div>
  );
};

export default ReserveSeatFrom;
