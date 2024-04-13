import React, { useState } from "react";
import logo from "./img/logo.jpeg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white">
      <div className="container mx-auto flex items-center justify-between ">
        <div className=" max-w-full px-4">
          <a href="/#" className="block w-full py-5">
            <img src={logo} alt="logo" className="dark:hidden w-60" />
            <img src={logo} alt="logo" className="hidden dark:block" />
          </a>
        </div>

        <div className="lg:hidden">
          <button
            onClick={() => setOpen(!open)}
            className={`${
              open ? "text-primary" : "text-dark"
            } block focus:outline-none`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <nav className="hidden lg:flex lg:flex-grow lg:items-center">
          <ul className="flex flex-col lg:flex-row lg:ml-auto">
            <ListItem NavLink="#">Home</ListItem>
            <ListItem NavLink="#Services">Services</ListItem>
            <ListItem NavLink="#Contact">Contact Us</ListItem>
            <ListItem NavLink="#FAQs">FAQs</ListItem>
            <ListItem NavLink="#About">About Us</ListItem>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

const ListItem = ({ children, NavLink }) => {
  return (
    <li className="my-2 lg:my-0">
      <a
        href={NavLink}
        className="block py-2 text-base font-medium text-body-color hover:text-dark lg:ml-6 lg:inline-block"
      >
        {children}
      </a>
    </li>
  );
};
