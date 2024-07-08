import {
  faEnvelope,
  faMapMarkerAlt,
  faMessage,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Contact = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex rounded-3xl shadow-2xl max-w-3xl p-5 bg-white">
        {/* Contact Information Section */}
        <div className="flex flex-col gap-4 relative top-14 font-bold mr-10">
          <div className="flex items-center gap-4">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="text-gray-600 text-lg"
            />
            <p className="text-black">123 Street, City Name, Country</p>
          </div>
          <div className="flex items-center gap-4">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-gray-600 text-lg"
            />
            <p className="text-black">contact@example.com</p>
          </div>
          <div className="flex items-center gap-4">
            <FontAwesomeIcon icon={faPhone} className="text-gray-600 text-lg" />
            <p className="text-black">+123 456 7890</p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="w-full p-8">
          <h2 className="font-bold text-2xl text-black mb-4">Contact Us</h2>
          <form className="flex flex-col gap-4">
            <div className="relative ">
              <input
                className=" input w-full max-w-xs"
                type="text"
                placeholder="Your Name"
                required
              />
              <span className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <FontAwesomeIcon icon={faUser} />
              </span>
            </div>
            <div className="relative">
              <input
                className="input w-full max-w-xs"
                type="email"
                placeholder="Email Address"
                required
              />
              <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
            </div>
            <div className="relative">
              <textarea
                className="textarea textarea-bordered w-full h-32"
                placeholder="Message"
              ></textarea>
              <span className="absolute bottom-[100px] right-0 pr-3 flex items-center text-gray-500">
                <FontAwesomeIcon icon={faMessage} />
              </span>
            </div>
            <button className="input w-full max-w-xs">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
