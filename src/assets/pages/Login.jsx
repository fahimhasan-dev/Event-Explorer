import React, { use, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Login = () => {
  const [error, setError] = useState("");
  // const email = emailRef.current.value;
  const [email, setEmail] = useState("");

  const emailRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const { loginUser, singInWithGoogle, setUser } = use(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    const password = e.target.password.value;
    loginUser(email, password)
      .then(() => {
        toast.success("Login successful");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        toast.error(`${error.code}`);
        setError(error.code);
      });
  };
  console.log(email);

  const handleGoogleSingUp = () => {
    singInWithGoogle().then((result) => {
      toast.success("Login successFull");
      setUser(result);
      navigate(`${location.state ? location.state : "/"}`);
    });
  };

  const handleForgetPassword = () => {
    navigate("/auth/forgatPassword", { state: { email } });
  };
  return (
    <HelmetProvider>
      <Helmet>
        <title>Login-Event Explorer</title>
      </Helmet>
      <div className="items-center my-4 justify-center min-h-[calc(100vh-300px)] flex  ">
        <div className="rounded  card-border timeline-card w-full max-w-sm mx-auto shrink-0 shadow-2xl ">
          <div className="card-body h-full">
            <h1 className="text-2xl font-semibold border-white">Login Now!</h1>
            <form onSubmit={handleLogin} className="fieldset">
              {/* email */}
              <label className="label">Email</label>
              <input
                ref={emailRef}
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input bg-gray-800 border-gray-700  card-border "
                placeholder="Email"
                required
              />
              {/* password */}
              <div className="relative">
                <input
                  type={`${show ? "text" : "password"}`}
                  name="password"
                  className="input bg-gray-800 border-gray-700  card-border "
                  placeholder="Password"
                  required
                />
                <button
                  onClick={() => {
                    setShow(!show);
                  }}
                  className=" btn-xs absolute top-3 right-7 "
                >
                  {show ? <FaEyeSlash /> : <FaEye></FaEye>}
                </button>
              </div>
              {error && (
                <p className="text-red-500 font-semibold pl-3 bg-white ">
                  {error}
                </p>
              )}
              <div onClick={handleForgetPassword}>
                <p className="hover:link">Forgat Password</p>
              </div>
              <button type="submit" className="btn btn-neutral mt-4">
                Login
              </button>
            </form>

            <div>
              <button
                onClick={handleGoogleSingUp}
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
              Don't Have An Account Please ?{" "}
              <Link className="text-blue-500 hover:link" to="/auth/register">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>{" "}
    </HelmetProvider>
  );
};

export default Login;
