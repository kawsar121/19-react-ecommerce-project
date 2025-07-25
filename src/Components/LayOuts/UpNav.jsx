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
    <div className="w-full bg-[#0d1d35] text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex  md:flex-row items-center justify-between py-1 gap-y-2">
        {/* Left Section */}
        <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
          <Link className="bg-blue-700 px-5 py-1 rounded-full  text-base lg:text-sm whitespace-nowrap">
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
              <li>
                <details>
                  <summary className="text-sm">USD</summary>
                  <ul className="p-1 bg-white text-black">
                    <li><a>USD</a></li>
                    <li><a>Rupees</a></li>
                    <li><a>BDT</a></li>
                  </ul>
                </details>
              </li>
            </ul>

            {/* Language */}
            <ul className="relative z-50 menu menu-horizontal p-0 m-0">
              <li>
                <details>
                  <summary className="text-sm sm:text-base flex items-center gap-1">
                    {/* <svg
                      className="w-5 h-5 rounded-full hidden sm:inline"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 3900 3900"
                    >
                      <path fill="#b22234" d="M0 0h7410v3900H0z" />
                      <path
                        d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
                        stroke="#fff"
                        strokeWidth="300"
                      />
                      <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
                      <g fill="#fff">
                        <use xlinkHref="#a" />
                      </g>
                    </svg> */}
                    <img src="https://martcms-dev-react.6amdev.xyz/_next/image?url=https%3A%2F%2Fmartcms-dev.6amdev.xyz%2Fpublic%2Fassets%2Ffront-end%2Fimg%2Fflags%2Fen.png&w=32&q=75" alt="" className=" hidden sm:inline" />
                    <span className="hidden sm:inline text-sm">English</span>
                    <span className="sm:hidden">En</span>
                  </summary>
                  <ul className="p-1 bg-white text-black">
                    <li><Link>English</Link></li>
                    <li><Link>Bangla</Link></li>
                    <li><Link>Arabic</Link></li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="lg:hidden dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <IoShareSocialSharp />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 p-2 shadow"
            >
              <Link><CiTwitter className="text-2xl" /></Link>
              <Link><CiLinkedin className="text-2xl" /></Link>
              <Link><FaGooglePlusG className="text-2xl" /></Link>
              <Link><FaPinterest className="text-2xl" /></Link>
              <Link><FaInstagram className="text-2xl" /></Link>
              <Link><CiFacebook className="text-2xl" /></Link>
            </ul>
          </div>

          {/* Desktop Icons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link><CiTwitter className="text-xl" /></Link>
            <Link><CiLinkedin className="text-xl" /></Link>
            <Link><FaGooglePlusG className="text-xl" /></Link>
            <Link><FaPinterest className="text-xl" /></Link>
            <Link><FaInstagram className="text-xl" /></Link>
            <Link><CiFacebook className="text-xl" /></Link>
          </div>
        </div>
      </div>
    </div>
  );
};


export default UpNav;
