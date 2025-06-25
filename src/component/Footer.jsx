import React, { use } from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook, FaFacebookSquare } from "react-icons/fa";
import { IoLogoLinkedin, IoLogoYoutube } from "react-icons/io";
import { AuthContext } from "../context/AuthContext";
import { NavLink } from "react-router";

const Footer = () => {
  const { user } = use(AuthContext);
  return (
    <div>
      <footer className="px-4 divide-y text-gray-100 bg-gray-800">
        <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 xl:flex-row xl:space-y-0">
          <div className="xl:w-1/3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex justify-center space-x-3 xl:justify-start"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-violet-600">
                <img src="https://i.ibb.co.com/VWpy0xkG/tracking.png" alt="" />
              </div>
              <span className="self-center text-2xl font-semibold">
                Event Explorer
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 xl:w-2/3 sm:grid-cols-4">
            <div className="space-y-3">
              <h3 className="uppercase font-semibold text-white-50">
                Footer Navbar
              </h3>
              {user ? (
                <ul>
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/myProfile">My Profile</NavLink>
                  </li>
                  <li>
                    <NavLink to="/aboutOurself">About our self</NavLink>
                  </li>
                </ul>
              ) : (
                <ul>
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/auth/login">Login</NavLink>
                  </li>
                  <li>
                    <NavLink to="/auth/register">Register</NavLink>
                  </li>
                  <li>
                    <NavLink to="/aboutOurself">About our self</NavLink>
                  </li>
                </ul>
              )}
            </div>
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase font-semibold text-white-50">
                Section
              </h3>
              <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Features
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer">Upcoming Event!!</a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Our Previous Event
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase font-semibold text-white-50">
                Company
              </h3>
              <ul className="space-y-1">
                <li>
                  <a className="hover:link" rel="noopener noreferrer" href="#">
                    Privacy & Policy
                  </a>
                </li>
                <li>
                  <a className="hover:link" rel="noopener noreferrer" href="#">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="uppercase font-semibold text-white-50">
                Social media
              </div>
              <div className="flex justify-start space-x-3">
                <a
                  href="https://www.facebook.com/profile.php?id=100068304346965"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <div className="text-[#1877F2]">
                    <FaFacebook size={24} />
                  </div>
                </a>
                <div className="text-[#0A66C2]">
                  <IoLogoLinkedin size={26} />
                </div>
                <a
                  href="https://www.youtube.com/@lltfahim"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <div className="text-[#FF0000]">
                    <IoLogoYoutube size={25} />
                  </div>
                </a>
                <div className="bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] rounded-full">
                  <BsInstagram size={23} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 text-sm text-center text-[#839CB5]">
          © 1968 Company Co. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
