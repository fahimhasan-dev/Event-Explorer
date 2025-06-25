import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { userSignOut, user } = use(AuthContext);
  const handleLogOut = () => {
    userSignOut();
  };

  return (
    <div className="navbar shadow-sm card-border">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost xl:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>

          {user ? (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content black-50 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
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
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-black-50 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
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
        <a className="sm:text-2xl text-white sm:font-bold">Event Explorer</a>
      </div>

      {user ? (
        <div className="navbar-center hidden xl:flex">
          {" "}
          <ul className="menu menu-horizontal font-semibold text-xl px-1 ">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/myProfile">My Profile</NavLink>
            </li>
            <li>
              <NavLink to="/AboutOurself">About our self</NavLink>
            </li>
          </ul>
        </div>
      ) : (
        <div className="navbar-center hidden xl:flex">
          <ul className="menu menu-horizontal font-semibold text-xl px-1 ">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/auth/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/auth/register">Register</NavLink>
            </li>
          </ul>
        </div>
      )}

      <div className="navbar-end gap-3">
        <div>
          {user && (
            <div className="relative group inline-block avatar  avatar-online">
              <div className="sm:w-15 w-10 rounded-full">
                <img
                  src={user.photoURL}
                  alt="Profile Photo"
                  className="w-10 h-10 rounded-full"
                />
              </div>

              <h1
                className="absolute top-full left-1/2 translate-x-[-50%] mt-2 
                             text-black  rounded  px-2 py-1 font-bold bg-white
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                            whitespace-nowrap z-10"
              >
                {user.displayName}
              </h1>
            </div>
          )}
        </div>
        <div className=" mr-2">
          {user ? (
            <button
              onClick={handleLogOut}
              className="relative  inline-flex items-center justify-start sm:py-4 sm:pl-4 sm:pr-12 pr-7 pl-2 overflow-hidden font-semibold text-white transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-900 group"
            >
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-secondary group-hover:h-full"></span>
              <span className="absolute right-0 sm:pr-4 pr-1 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                LogOut
              </span>
            </button>
          ) : (
            <Link to="/auth/login">
              <button className="relative mt-1  sm:mt-0 inline-flex items-center justify-start sm:py-3 sm:pl-4 py-1 pl-2 sm:pr-12 pr-7 overflow-hidden font-semibold text-white transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-indigo-600   group">
                <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-gray-50 group-hover:h-full"></span>
                <span className="absolute right-0 sm:pr-4 pr-1 duration-200 ease-out group-hover:translate-x-12">
                  <svg
                    className="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <svg
                    className="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="relative w-full text-left text-sm transition-colors duration-200 ease-in-out group-hover:text-indigo-600">
                  Login
                </span>
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
