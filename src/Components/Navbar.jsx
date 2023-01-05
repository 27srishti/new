import React from "react";
import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Transition } from "@headlessui/react";
function Navbar() {
  return (
    <nav className=" border-gray-700 px-2  py-6 ">
      <div className="container flex flex-wrap  items-center justify-between mx-auto px-5 ">
      <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.6, duration: 2, type: "spring" }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
        <a href="" className="flex items-center">
          {/* <img
            src="https://jjjflowbite.com/docs/images/logo.svg"
            className="h-6 mr-3 sm:h-9"
            alt="Flowbite Logo"
          /> */}
            

          <span className="self-center text-4xl font-bold whitespace-nowrap text-pink-600">
           Logo
          </span>
          
        </a>
       </motion.div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-lg font-Poppins lg:text-base md:font-medium md:border-0 ">
            <li>
            <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.5, duration: 3, type: "spring" }}
                  variants={{
                    hidden: { opacity: 0, x: -150 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
              <a
                href="#"
                className="block py-2  h-8 pl-3 pr-4 text-gray-300  border-b-2 border-pink-600 hover:text-purple-300 rounded    md:p-0 "
                aria-current="page" 
              >
                Home
              </a>
              </motion.div>
            </li>
            <li>
            <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.6, duration:2, type: "spring" }}
                  variants={{
                    hidden: { opacity: 0, x: -180 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-300  bg-pink-600 hover:text-purple-900 rounded md:bg-transparent   md:p-0">
                Brands
              </a>
              </motion.div>
            </li>
            
            <li>
            <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.6, duration: 2, type: "spring" }}
                  variants={{
                    hidden: { opacity: 0, x: 180 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-300 bg-pink-600 hover:text-purple-300 rounded  md:bg-transparent   md:p-0">
                Influencers
              </a>
              </motion.div>
            </li>
            <li>
            <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay:0.5, duration: 3, type: "spring" }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-300 bg-pink-600 hover:text-purple-300 rounded md:bg-transparent   md:p-0">
                Contact Us
              </a>
              </motion.div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
