import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import img from "../img/new.png";

const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div>
      <section className="min-h-screen flex justify-center items-center">
        <div className="flex rounded-3xl shadow-2xl max-w-3xl p-5">
          <div className="sm:w-1/2 p-8">
            <h2 className="font-bold text-2xl text-black flex items-center justify-between">
              Login
            </h2>
            <p className="mt-4 text-sm text-black">
              If you already a member, easily log in
            </p>
            <form className="flex flex-col gap-4">
              <div className="relative mt-8">
                <input
                  className="p-2 border rounded-lg text-white w-full"
                  type="email"
                  placeholder="Email"
                  required
                />
                <span className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
              </div>
              <div className="relative">
                <input
                  className="p-2 border rounded-lg text-white w-full"
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Password"
                  required
                />
                <span
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  <FontAwesomeIcon
                    icon={passwordVisible ? faEyeSlash : faEye}
                  />
                </span>
              </div>
              <button className="bg-black shadow-lg rounded-lg text-white py-2">
                Login
              </button>
            </form>
            <div className="mt-5 grid grid-cols-3 items-center text-gray-500">
              <hr className="border-black" />
              <p className="text-center text-sm">OR</p>
              <hr className="border-black" />
            </div>
            <button className="bg-slate-300 border py-2 w-full rounded-xl text-black mt-5 flex justify-center items-center gap-2">
              <FontAwesomeIcon icon={faGoogle} className="text-lg" />
              <span className="text-sm">Login with Google</span>
            </button>

            <p className="mt-5 text-xs cursor-pointer border-b border-black py-4 text-black">
              <Link to="#">Forgot your password?</Link>
            </p>

            <div className="flex justify-between mt-3 text-sm items-center  ">
              <p className="flex gap-3 text-black">
                Don't have an account?
                <Link to="/Register">
                  <span className="text-blue-700">Register</span>
                </Link>
              </p>
            </div>
          </div>
          <div className="w-1/2 sm:block hidden">
            <img src={img} alt="Right" className="login-image" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
