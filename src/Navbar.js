import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={`flex w-full items-center bg-white`}>
      <div className="container">
        <div className="relative flex items-center justify-between">
          <div className="w-60 max-w-full">
            <a href="/#" className="block py-5">
              <span className="text-2xl font-extrabold text-primary uppercase tracking-wide">
                Finactaxpro
              </span>
            </a>
          </div>
          <div className="flex items-center justify-end w-full lg:w-auto">
            <button
              onClick={() => setOpen(!open)}
              id="navbarToggler"
              className={`${
                open && "navbarTogglerActive"
              } lg:hidden block ml-auto mr-4 px-3 py-[6px] ring-primary focus:ring-2`}
            >
              <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
              <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
              <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
            </button>
            <nav
              className={`${
                open ? "block" : "hidden"
              } lg:flex flex-grow lg:flex lg:items-center lg:w-auto`}
            >
              <ul className="flex flex-col items-end lg:flex-row lg:ml-auto">
                <ListItem NavLink="/#">Home</ListItem>
                <ListItem NavLink="/#">Services</ListItem>
                <ListItem NavLink="/#">Contact Us</ListItem>
                <ListItem NavLink="/#">FAQs</ListItem>
                <ListItem NavLink="/#">About Us</ListItem>
              </ul>
            </nav>
          </div>
        </div>
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
