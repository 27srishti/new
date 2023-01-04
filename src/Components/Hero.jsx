import React from "react";

export const Hero = () => {
  return (
    <div className="text-white relative  ">
      
      <div className="Max-w-[800px] font-Poppins mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
        <p className="text-white  pt-28 ">
          ZERO fees from Influencers until you earn your first 1 Million
        </p>{" "}
        <h1 className="text-white md:text-6xl  sm:text-5xl text-2xl font-bold font-Poppins md:py-6">
          We are One Stop
          <span className="pl-3 text-violet-400 font-Poppins ">Influencer</span>
          <br />
          <div className="pt-2 sm:pt-3 md:pt-7 font-Poppins  text-violet-400">
            Marketing Agency
          </div>
        </h1>
        <p className=" text-gray-500 font-Poppins md:text-xl pt-3 sm:pt-4 md:pt-2 sm:text-base  md:text-xl font-bold">
          We help both Influencers and Brands to stay on top of their game.
        </p>
        <button className="rounded-xl border  hover:text-violet-200  border-violet-500 w-[150px] font-medium my-10 mx-auto py-3 ">
          {" "}
          Get Started
        </button>
        <div class="arrow bounce">
  <a class="fa fa-arrow-down fa-2x" href="#"></a>
</div>
      </div>
      
    </div>
  );
};
