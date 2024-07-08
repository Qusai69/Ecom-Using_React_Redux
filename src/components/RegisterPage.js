import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faEye,
  faEyeSlash,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import img from "../img/new.png";

const RegisterPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisible1, setPasswordVisible1] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const togglePasswordVisibility1 = () => {
    setPasswordVisible1(!passwordVisible1);
  };

  return (
    <div >
      <section className="min-h-screen flex justify-center items-center">
        <div className="flex rounded-3xl shadow-2xl max-w-3xl p-5">
          <div className="w-1/2 sm:block hidden">
            <img src={img} alt="Right" className="register-image" />
          </div>
          <div className="sm:w-1/2 p-8">
            <h2 className="font-bold text-2xl text-blackflex items-center justify-between text-black">
              Register
            </h2>
            <p className="mt-4 text-sm text-black">
              If you aren't a member, whats the wait ?
            </p>
            <form className="flex flex-col gap-4">
              <div className="relative mt-4">
                <input
                  className="p-2 border rounded-lg text-black w-full"
                  type="text"
                  placeholder="Username"
                  required
                />
                <span className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <FontAwesomeIcon icon={faUser} />
                </span>
              </div>

              <div className="relative">
                <input
                  className="p-2 border rounded-lg text-black w-full"
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
                  className="p-2 border rounded-lg text-black w-full"
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
              <div className="relative">
                <input
                  className="p-2 border rounded-lg text-black w-full"
                  type={passwordVisible1 ? "text" : "password"}
                  placeholder="Confirm password"
                  required
                />
                <span
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  onClick={togglePasswordVisibility1}
                >
                  <FontAwesomeIcon
                    icon={passwordVisible1 ? faEyeSlash : faEye}
                  />
                </span>
              </div>
              <button className="bg-black shadow-lg rounded-lg py-2">
                Register
              </button>
            </form>
            <div className="mt-5 grid grid-cols-3 items-center text-black">
              <hr className="border-black" />
              <p className="text-center text-sm">OR</p>
              <hr className="border-black" />
            </div>
            <button className="bg-slate-300 border py-2 w-full rounded-xl text-black mt-5 flex justify-center items-center gap-2">
              <FontAwesomeIcon icon={faGoogle} className="text-lg" />
              <span className="text-sm">Register with Google</span>
            </button>
            <div className=" relative top-8 text-sm ">
              <p className="flex gap-3 text-black">
                Have an account?
                <Link to="/Login">
                  <span className="text-blue-700">Login</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegisterPage;
