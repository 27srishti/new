import React from "react";

const Footer = () => {
  return (
    <div>
      <div className=" mx-auto  font-Poppins   bg-gray-100 ">
        <footer className="p-4 bg-white  shadow md:px-6  md:py-8  dark:bg-gray-900">
          <div className="sm:flex sm:items-center px-10 sm:justify-between">
            <div className="text-violet-400 text-xl font-bold">Logo</div>
            {/* <a
              href="https://flowbite.com/"
              className="flex items-center mb-4 sm:mb-0"
            >
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8 mr-3"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Flowbite
              </span>
            </a> */}
            <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">
                  Brands
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">
                 Influncers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact US
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            Copyrights © 2022{" "}
            <span className="text-purple-600">   Srishti Suratkal
         
            {/* <a href="https://flowbite.com/" className="hover:underline">
              Flowbite™
            </a> */}
            <span className="text-white"> . All Rights Reserved.</span></span>
           
          </span>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
