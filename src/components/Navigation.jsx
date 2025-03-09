import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navigation red-bg">
      <div className="max-w-screen-2xl flex flex-wrap justify-between items-center mx-auto p-4 text-white uppercase tracking-widest ">
        <div className="logo">
          <Link to="/">
            <h1 className="text-3xl md:text-4xl rubik-font hover:scale-105 transition-all duration-500">
              Just Donut
            </h1>
          </Link>
        </div>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-white"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`md:block w-full md:w-auto ${isOpen ? "block" : "hidden"}`}
        >
          <ul className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-20 text-xl mt-3 md:m-0">
            <Link to="/">
              <li className="rubik-font hover:scale-105 transition-all duration-500">
                Home
              </li>
            </Link>
            <Link to="/menu">
              <li className="rubik-font hover:scale-105 transition-all duration-500">
                Menu
              </li>
            </Link>
            <Link to="/about">
              <li className="rubik-font hover:scale-105 transition-all duration-500">
                About
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
