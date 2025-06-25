import React, { use, useState } from "react";
import { useLocation } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { Helmet, HelmetProvider } from "react-helmet-async";

const ForgetPassword = () => {
  const { sendPasswordReset } = use(AuthContext);
  const location = useLocation();
  console.log(location);
  const emailFromLogin = location.state?.email || "";
  console.log(emailFromLogin);

  const [email, setEmail] = useState(emailFromLogin);
  const handleForgetPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    sendPasswordReset(email)
      .then(() => {
        toast.success("Check your email to reset password");
        window.location.href = "https://mail.google.com";
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const handleChange = (e) => setEmail(e.target.value);
  return (
    <div className="flex justify-center items-center  card-body min-h-[calc(100vh-347px)]">
      <HelmetProvider>
        <Helmet>
          <title>Forgat Password</title>
        </Helmet>
        <form
          onSubmit={handleForgetPassword}
          className="fieldset border-2 border-gray-500 rounded p-4 w-[20%]"
        >
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={email}
            className="input bg-gray-800 border-gray-700  card-border "
            placeholder="Email"
            required
          />

          <button type="submit" className="btn bg-orange-400 mt-4">
            Reseat Password
          </button>
        </form>{" "}
      </HelmetProvider>
    </div>
  );
};

export default ForgetPassword;
