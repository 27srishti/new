import React from "react";
import Image4 from "../Images/Image4.png"
const Works = () => {
  return (
    <div>
    <div  className="bg-gray-100  ">
      <div className="py-16 px-14 mx-auto max-w-screen-xl font-Poppins lg:py-20 lg:px-16  sm:px-14 ">
        <div className="mx-auto md:px-7  text-left mb-8  lg:mb-12">
          <h2 className="mb-2 text-3xl md:text-5xl  sm:text-4xl tracking-tight font-medium text-gray-900">
            ZERO fees from Influencers
            <p className="text-violet-500 md:py-3 font-extrabold">
              until you earn{" "}
              <span className="text-black font-medium">
                your first 1 Million
              </span>{" "}
            </p>
          </h2>

          <p className="mb-5 py-3 font-light text-gray-700 md:text-md text-base ">
            Your success is our success. As a guarantee that we can make you
            successful as an influencer, we don’t charge you until you succeed.
            Unlike other agencies, we put your interest above our own
          </p>
          <div></div>
          
        </div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-5 mx-auto flex flex-wrap">
            <div className="flex flex-wrap w-full">
              
              <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                
                <div className="flex relative pb-12">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-bold title-font text-sm  text-gray-900 mb-1 tracking-wider">
                      STEP 1
                    </h2>
                    <p className="leading-relaxed">
                      Apply by filling the form and sharing your bio in brief.
                      (Your face is not your fate!)
                    </p>
                  </div>
                </div>
                <div className="flex relative pb-12">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-bold title-font text-sm text-gray-900 mb-1 tracking-wider">
                      STEP 2
                    </h2>
                    <p className="leading-relaxed">
                      Our campaign team will scan your applications and have a
                      chat with you.
                    </p>
                  </div>
                </div>
                <div className="flex relative pb-12">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <circle cx={12} cy={5} r={3} />
                      <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3" />
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-bold title-font text-sm text-gray-900 mb-1 tracking-wider">
                      STEP 3
                    </h2>
                    <p className="leading-relaxed">
                      We guide, we measure, we match the right audiences and
                      clients for you.
                    </p>
                  </div>
                </div>
              </div>
              <img
                className="lg:w-3/5 md:w-1/2  object-cover object-center rounded-lg md:mt-0 mt-12"
                src={Image4}
                alt="step"
              />
            </div>
          </div>
        </section>
      </div>
      
      <div className="py-16 px-14 mx-auto max-w-screen-xl font-Poppins lg:py-20 lg:px-16   sm:px-14  ">
      
        <div className="mx-auto max-w-screen-lg text-center mb-8   lg:mb-12">
           <h2 className="mb-2 text-xl sm:text-2xl md:text-4xl  p-7   sm:p-10 md:p-14  bg-gradient-to-tr from-black to-violet-500 sm:text-4xl rounded-xl tracking-tight font-medium shadow-lg shadow-gray-700 text-white">
           GET PAID TO TELL CAPTIVATING STORIES FOR AWESOME BRANDS
          </h2>

          <button className="rounded-xl border text-white hover:text-black bg-violet-600 border-violet-500 w-[150px] font-bold my-10 mx-auto py-3 shadow-md shadow-violet-900">
            {" "}
            Apply Now !
          </button>
        </div>
      </div>
    </div></div>
  );
};

export default Works;
