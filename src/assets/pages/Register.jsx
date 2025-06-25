import React, { use,  useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";

import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Register = () => {
  const navigate = useNavigate();
  const { createUser, setUser, updateUser, singInWithGoogle } =
    use(AuthContext);
  const [show, setShow] = useState(false);
  // email & password
 
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUser(email, password)
      .then(() => {
        
        toast.success("Login successful");
        updateUser({ displayName: name, photoURL: photoUrl })
          .then((currentUser) => {
            setUser({ ...currentUser, displayName: name, photoURL: photoUrl });
            navigate("/");
          })
          .catch((error) => {
            toast.error(error.massage);
          });
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };

  const handleGoogleSingUp = () => {
    singInWithGoogle().then((result) => {
      setUser(result);
      navigate(`${location.state ? location.state : "/"}`);
    });
  };

  return (
     <HelmetProvider>
                       <Helmet>
                           <title>Register</title>
                       </Helmet>
    <div className="rounded card-border timeline-card my-5 flex items-center min-h-[calc(100vh-296px)]  w-full max-w-sm mx-auto shrink-0 shadow-2xl ">
       
      
      <div className="card-body">
        

        <h1 className="text-2xl text-center py-6 mb-4 border-b font-semibold border-white">
          Create Your Account
        </h1>
        <form onSubmit={handleRegister} className="fieldset">
        
          <label className="label">Your Name</label>
          <input
            type="text"
            name="name"
            className="input bg-gray-700 card-border"
            placeholder="Enter your name"
            required
          />
        
          <label className="label">Photo URL</label>
          <input
            type="text"
            name="photoUrl"
            className="input bg-gray-700 card-border"
            placeholder="Enter your Profile Photo Url"
            required
          />
   
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input bg-gray-700 card-border"
            placeholder="Email"
            required
          />
        
          <label className="label ">Password</label>
          <label className="input bg-gray-700 card-border validator">
            <svg
              className="h-[1em] opacity-50 "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
           
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
                required
              >
                <path  d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
              </g>
            </svg>
            <input
             
              type={show ? "text":"password"}
              required
              placeholder="Password"
              name="password"
              minlength="8"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
            />
             <button
                            onClick={() => {
                              setShow(!show);
                            }}
                            className=" btn-xs absolute top-3 right-7 "
                          >
                            {show ? <FaEyeSlash /> : <FaEye></FaEye>}{" "}
                          </button>
          </label>
          <p className="validator-hint hidden">
            Must be more than 8 characters, including
            <br />
            At least one number <br />
            At least one lowercase letter <br />
            At least one uppercase letter
          </p>
          <div className="flex gap-1 bg-gray-700 card-border">
            <input type="checkbox" required className="bg-gray-700 card-border" />
            <p >Accept Term & Conditions</p>
          </div>
          <button onClick={""} type="submit" className="btn btn-neutral mt-4">
            Register
          </button>
        </form>
        <div>
          <button
            onClick={() => handleGoogleSingUp()}
            className="relative px-5 py-3 w-full overflow-hidden font-medium text-gray-600  border  rounded-lg  group"
          >
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-300 delay-200 flex items-center gap-2 justify-center group-hover:text-white ease">
              <FcGoogle size={24} /> Login with Google
            </span>
          </button>
        </div>
        <p className="text-sm text-center">
          AllReady Have An Account Please ?{" "}
          <Link className="text-blue-500 hover:link" to="/auth/login">
            Login
          </Link>
        </p>
      </div>
    </div> </HelmetProvider>
  );
};

export default Register;
