import React from "react";
import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Transition } from "@headlessui/react";
export const Hero = () => {
  return (
    <div className="text-white relative  ">
      <div className="Max-w-[800px] font-Poppins mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
      <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 1, duration: 10, type: "spring" }}
                  variants={{
                    hidden: { opacity: 0, x: 0 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
        <p className="text-white  pt-28 mb-3 ">
          ZERO fees from Influencers until you earn your first 1 Million
        </p>{" "}</motion.div>
        <div className="text-white md:text-6xl  sm:text-5xl text-2xl font-bold font-Poppins md:py-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.6, duration: 2, type: "spring" }}
            variants={{
              hidden: { opacity: 0, x: -180 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div>
              We are One Stop
              <span className="pl-3 text-violet-400 font-Poppins ">
                Influencer
              </span>
              <br />
            </div>{" "}
          </motion.div>
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
          <a>
            <div className="pt-2 sm:pt-3 md:pt-7 font-Poppins  text-violet-400">
              Marketing Agency
            </div>
          </a>
          </motion.div>
        </div>
        <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 1, duration: 10, type: "spring" }}
                  variants={{
                    hidden: { opacity: 0, x: 0 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
        <p className=" text-gray-500 font-Poppins md:text-xl pt-3 sm:pt-4 md:pt-2 sm:text-base  md:text-xl font-bold">
          We help both Influencers and Brands to stay on top of their game.
        </p></motion.div>

        {/* <button className="rounded-xl border  hover:text-violet-200  border-violet-500 w-[150px] font-medium my-10 mx-auto py-3 ">
          {" "}
          Get Started
        </button> */}
        <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 1, duration: 10, type: "spring" }}
                  variants={{
                    hidden: { opacity: 0, x: 0 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
        <a
          href="#_"
          class="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group rounded-xl border  hover:text-violet-200  border-violet-500 w-[150px] font-medium my-10 mx-auto py-3"
        >
          <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-violet-400 opacity-[3%]"></span>
          <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
          <span class="relative w-full text-center text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
            Get Started
          </span>
          <span class="absolute inset-0 border border-violet-500 rounded-full"></span>
        </a>
        </motion.div>
      </div>
    </div>
  );
};
