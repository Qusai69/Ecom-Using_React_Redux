import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { amount } = useSelector((state) => state.basket); // Retrieve amount from Redux store

  return (
    <div>
      <div className="navbar bg-blue-900 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <button tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/About">About Us</Link>
              </li>
              <li>
                <Link to="/Products">Products</Link>
              </li>
              <li>
                <Link to="/Contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/Tracker">Tracker</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            AwesomeShop
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About Us</Link>
            </li>
            <li>
              <Link to="/Products">Products</Link>
            </li>
            <li>
              <Link to="/Contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/Tracker">Tracker</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex flex-row items-center gap-14 font-medium">
          <p className="relative inline-block">
            <Link to="/Cart">
              <FontAwesomeIcon icon={faCartShopping} className="text-2xl" />
            </Link>
            <span className="text-xs absolute bottom-3 bg-red-500 text-white rounded-full px-2 py-1">
              {amount}
            </span>
          </p>
          <Link to="/Login" className="button-login">
            Log In
          </Link>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
