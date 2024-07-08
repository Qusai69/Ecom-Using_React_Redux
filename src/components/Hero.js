import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import img from "../img/b2.jpg";

export default function Hero() {
  return (
    <>
      <div className="relative">
        <img src={img} alt="" className="hero h-80 w-full" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Shop Now</h1>
            <p className="max-w-md mx-auto py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">
              Get Started{" "}
              <FontAwesomeIcon icon={faAnglesRight} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
