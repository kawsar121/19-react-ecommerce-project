import React from "react";
import { CiFacebook, CiLinkedin, CiLocationOn, CiTwitter } from "react-icons/ci";
import { FaGooglePlusG, FaInstagram, FaPhoneVolume, FaPinterest } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { IoShareSocialSharp } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      {/* First Foot start */}
      <div className="bg-[#f2f3f4] p-8">
        <div className="grid lg:flex items-center justify-between w-11/12 mx-auto bg-blue-800 p-8 rounded-xl">
        <div>
          <h2 className="text-2xl">Newsletter</h2>
          <p>Be the first one to know about discounts, offers and events</p>
        </div>
        <div className="join">
          <input
            type="text"
            placeholder=" Enter Your Email"
            className="input input-bordered join-item px-10 border-none focus:outline-none"
          />
          <button className="btn btn-primary join-item">Submit</button>
        </div>
      </div>
      </div>
      {/* First Foot End */}

      {/* Second Foot Start */}
      <div className="bg-[#1B7FED4D] p-5">
        <div className="grid lg:flex justify-end gap-6 lg:gap-32 mr-20 mt-7 items-center">
        {/* Social Icons */}
        <div className="flex gap-6 ">
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
        </div>
        <div className="flex justify-center gap-4 items-center">
          <div><FiPhoneCall className="text-3xl"></FiPhoneCall></div>
          <div>
            <h1>Hotlines</h1>
            <p>+00xxxxxxxxxxxx</p>
          </div>
        </div>
      </div>
      </div>

      {/* Third Footer */}
      <div>
        <footer className="footer  my-4 bg-base-200 text-base-content p-0 lg:p-16 grid lg:flex justify-center lg:justify-between">
          <aside>
            <img className="w-40" src="https://martcms-dev-react.6amdev.xyz/_next/image?url=https%3A%2F%2Fmartcms-dev.6amdev.xyz%2Fstorage%2Fapp%2Fpublic%2Fcompany%2F2023-06-13-648845d83f583.png&w=256&q=75" alt="" srcset="" />
            <p className="flex justify-center items-center gap-1 text-base">
              <CiLocationOn></CiLocationOn>
              Kingston, New York 12401 United States
            </p>
            <p className="flex justify-center items-center gap-1 text-base">
              <MdOutlineMail></MdOutlineMail>
              copy@6amtech.com
            </p>
          </aside>
          <nav>
            <h6 className="footer-title">Accounts</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Quick Links</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Other</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </div>
      {/* Third Footer End */}

      {/* Fourth Footer Start */}
      <div>
        <footer className="footer text-neutral-content flex justify-center py-4 items-center p-2 bg-[#1B7FED4D] ">
          <aside className="grid-flow-col items-center">
            <p className="text-black">Copyright © {new Date().getFullYear()} - All right reserved</p>
          </aside>
        </footer>
      </div>
      {/* Fourth Footer End */}
    </div>
  );
};

export default Footer;
