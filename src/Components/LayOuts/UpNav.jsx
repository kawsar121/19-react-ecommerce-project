import React, { useState } from "react";
import { CiFacebook, CiLinkedin, CiTwitter } from "react-icons/ci";
import {
  FaGoogle,
  FaGooglePlusG,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const UpNav = () => {
  return (
    <div className="w-full  bg-[#0d1d35] text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex  md:flex-row items-center justify-between py-1 gap-y-2">
        {/* Left Section */}
        <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
          <Link to="/register" className="bg-blue-700 px-5 py-1 rounded-full  text-base lg:text-sm whitespace-nowrap">
            Become a Vendor
          </Link>
          <p className="text-sm whitespace-nowrap hidden sm:inline">
            Free Express Shopping
          </p>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 flex-wrap justify-center md:justify-end">
          {/* Currency & Language */}
          <div className="flex items-center gap-1">
            {/* Currency */}

            <ul className="relative z-50 menu menu-horizontal p-0 m-0">
              <li className="relative group">
                <span className="flex items-center gap-1 text-sm cursor-pointer">
                  USD
                  <svg
                    className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>

                {/* Dropdown */}
                <ul className="absolute left-0 top-full hidden group-hover:block bg-white text-black mt-1 p-2 shadow-lg rounded w-32">
                  <div className="flex text-center justify-between">
                    <li>
                    <a className="block px-4 py-2 hover:bg-gray-100">USD</a>
                  </li>
                  <li>
                    <a className="block px-4 py-2 hover:bg-gray-100">$</a>
                  </li>
                  </div>
                  <div className="flex text-center justify-between">
                    <li>
                    <a className="block px-4 py-2 hover:bg-gray-100">Rupes</a>
                  </li>
                  <li>
                    <a className="block px-4 py-2 hover:bg-gray-100">₹</a>
                  </li>
                  </div>
                  <div className="flex text-center justify-between">
                    <li>
                    <a className="block px-4 py-2 hover:bg-gray-100">Taka</a>
                  </li>
                  <li>
                    <a className="block px-4 py-2 hover:bg-gray-100">৳</a>
                  </li>
                  </div>
                
                </ul>
              </li>
            </ul>

            {/* Language */}
            <ul className="relative z-50 menu menu-horizontal p-0 m-0">
              <li className="relative group">
                <span className="text-sm sm:text-base flex items-center gap-1 cursor-pointer">
                  <img
                    src="https://martcms-dev-react.6amdev.xyz/_next/image?url=https%3A%2F%2Fmartcms-dev.6amdev.xyz%2Fpublic%2Fassets%2Ffront-end%2Fimg%2Fflags%2Fen.png&w=32&q=75"
                    alt="flag"
                    className="hidden sm:inline"
                  />
                  <span className="hidden sm:inline text-sm">English</span>
                  <span className="sm:hidden">En</span>
                  {/* Arrow Icon */}
                  <svg
                    className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>

                {/* Dropdown */}
                <ul className="absolute top-full left-0 mt-1 hidden group-hover:block bg-white text-black rounded shadow-md w-32 z-50">
                  <li>
                    <Link className="block px-4 py-2 hover:bg-gray-100">
                      English
                    </Link>
                  </li>
                  <li>
                    <Link className="block px-4 py-2 hover:bg-gray-100">
                      Bangla
                    </Link>
                  </li>
                  <li>
                    <Link className="block px-4 py-2 hover:bg-gray-100">
                      Arabic
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="lg:hidden dropdown ">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <IoShareSocialSharp />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 bg-blue-700 rounded-box z-[1] mt-3 p-2 shadow"
            >
              <Link>
                <CiTwitter className="text-2xl" />
              </Link>
              <Link>
                <CiLinkedin className="text-2xl" />
              </Link>
              <Link>
                <FaGooglePlusG className="text-2xl" />
              </Link>
              <Link>
                <FaPinterest className="text-2xl" />
              </Link>
              <Link>
                <FaInstagram className="text-2xl" />
              </Link>
              <Link>
                <CiFacebook className="text-2xl" />
              </Link>
            </ul>
          </div>

          {/* Desktop Icons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link>
              <CiTwitter className="text-xl" />
            </Link>
            <Link>
              <CiLinkedin className="text-xl" />
            </Link>
            <Link>
              <FaGooglePlusG className="text-xl" />
            </Link>
            <Link>
              <FaPinterest className="text-xl" />
            </Link>
            <Link>
              <FaInstagram className="text-xl" />
            </Link>
            <Link>
              <CiFacebook className="text-xl" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpNav;
