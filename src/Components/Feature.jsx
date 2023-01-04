import React from "react";
import Image1 from "../Images/Image1.png";
import Image2 from "../Images/Image2.png";
import Image3 from "../Images/Image3.png";
import Background from "../Images/Bg.jpg"
import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Transition } from "@headlessui/react";
const Feature = () => {
  return (
    <section className=" relative border-t-4 border-violet-400 bg-gray-900  pb-8">
      <img src={Background} className=" invisible sm: visible md:visible bg-gray-100 h-full w-full bg-local absolute opacity-[0.15] "></img>
      <div className="py-8 px-4 mx-auto max-w-screen-xl font-Poppins lg:py-16 lg:px-16  rounded-md">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
        <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.5, duration: 3, type: "spring" }}
                  variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
          <h2 className="mb-2 py-2 text-3xl md:text-5xl sm:text-4xl tracking-tight  font-medium text-gray-900 dark:text-white">
            We bring great results through
            <p className="text-violet-400 md:py-6 font-extrabold">
              MEANINGFUL{" "}
              <span className="text-white font-medium">Advertising</span>{" "}
            </p>
          </h2></motion.div>
          <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.1, duration: 10, type: "spring" }}
                  variants={{
                    hidden: { opacity: 0, x: 0 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
          <p className="mb-5 font-light  text-gray-500 md:text-md text-base dark:text-gray-400">
            Influencer Marketing is not a straightforward marketing strategy. We
            combine strategic planning with a focusing in creating a meaningful
            relationship between you and your target audience. Our team of
            experts can help you hit your KPIs with systematic planning and
            implementation while creating a life long impact on your audience.
            We offer :
          </p>
          </motion.div>
        </div>
        {/* <------------------------------------------------------------------------------------------------> */}
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-8 lg:space-y-0">
          {/*  Card1 */}
          <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.5, duration: 2, type: "spring" }}
                  variants={{
                    hidden: { opacity: 0, y: 60 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
          <div className="flex flex-col  p-6 mx-auto max-w-lg text-center text-gray-900  rounded-lg border  shadow border-violet-300 xl:p-8 bg-black  text-white  shadow-md shadow-violet-600 ">
            
            <p className="font-Medium py-5 text-2xl sm:text-3xl md:text-2xl text-white">
              The Number of Followers Matters, Influencer Does Too!
            </p>
            <center>
              <img className=" py-3 w-48" src={Image1}></img>
            </center>
            {/* List */}
            <ul role="list" className=" space-y-4 py-2 text-left">
              <li className="flex items-center space-x-3">
                {/* Icon */}

                <div className=" text-gray-400 px-1 text-center">
                  Sure, the number of followers matters - yet we believe that
                  higher numbers aren't always greater. So what moves the needle
                  for our clients? Here is the answer : the influencer style,
                  voice, authenticity, belief and life moments that make a truly
                  authentic fit for their brands. Effective followers also play
                  an important role in any work force.
                </div>
              </li>
            </ul>
            <button className="rounded-xl border shadow-md shadow-violet-700 hover:text-white text-black bg-violet-500 border-violet-500 w-[150px] font-semibold my-6 mx-auto py-3 ">
              {" "}
              Learn More!
            </button>
          </div>
          </motion.div>
          {/*  Card2 */}
          <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 1, duration: 2, type: "spring" }}
                  variants={{
                    hidden: { opacity: 0, y: 70 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900  rounded-lg border  shadow border-violet-300 xl:p-8 bg-black  text-white  shadow-md shadow-violet-600 ">
            <p className="font-medium py-5 text-2xl sm:text-3xl md:text-2xl text-white">
              We Care For Our Influencers More Than Anyone
            </p>
            <center>
              <img className=" py-3 w-48" src={Image2}></img>
            </center>
            {/* List */}
            <ul role="list" className=" space-y-4 py-2 text-left">
              <li className="flex items-center space-x-3">
                {/* Icon */}

                <div className=" text-gray-400 px-2 text-center">
                  We go beyond identifying influencers through hashtags, profile
                  descriptions, follower count, and captions. We identify our
                  influencers who are aligned with client’s brands and shine
                  influencers & passion. Our creative team can bring your story
                  to life and deliver your story to the right audience on the
                  right platform
                </div>
              </li>
            </ul>
            <button className="rounded-xl border shadow-md shadow-violet-700 hover:text-white text-black bg-violet-500 border-violet-500 w-[150px] font-semibold my-6 mx-auto py-3 ">
              {" "}
              Learn More!
            </button>
          </div>
</motion.div>
          {/* Card3 */}
          <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 1.5, duration: 2, type: "spring" }}
                  variants={{
                    hidden: { opacity: 0, y: 90 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900  rounded-lg border  shadow border-violet-300 xl:p-8 bg-black  text-white  shadow-md shadow-violet-600 ">
            <p className="font-medium py-5 text-2xl sm:text-3xl md:text-2xl text-white">
              The Value Of Working With Us, With Right Campaign Goals &
              KPI
            </p>
            <center>
              <img className=" py-3 w-48" src={Image3}></img>
            </center>
            {/* List */}
            <ul role="list" className=" space-y-4 py-2 text-left">
              <li className="flex items-center space-x-3">
                {/* Icon */}

                <div className=" text-gray-400 px-2.5 text-center">
                  Our network includes all ages, ethnicities, geographic
                  locations, and all areas of expertise. We verify the
                  influencer that can engage the right audience with the right
                  campaign goals and KPI. A KPI Means = The New Leadership, It
                  indicates : Keep People Intersted, Informed, Involved or
                  Inspired.
                </div>
              </li>
            </ul>

            <button className="rounded-xl border shadow-md shadow-violet-700 hover:text-white text-black bg-violet-500 border-violet-500 w-[150px] font-semibold my-6 mx-auto py-3 ">
              {" "}
              Learn More!
            </button>
          </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
