import { IoMdHeartEmpty } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { PiHandbagSimpleLight } from "react-icons/pi";

const Navbar = () => {
  return (
    <div className="relative z-30 navbar bg-base-100 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex  md:flex-row items-center justify-between py-2 gap-y-2 mt-3 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <img
          className="w-28 h-10 lg:w-[120px] lg:h-[40px] "
          src="https://martcms-dev-react.6amdev.xyz/_next/image?url=https%3A%2F%2Fmartcms-dev.6amdev.xyz%2Fstorage%2Fapp%2Fpublic%2Fcompany%2F2024-09-22-66eff19c3253e.webp&w=384&q=75"
          alt=""
          srcset=""
        />
      </div>
      <div className="navbar-center hidden lg:flex border-2 input-primary w-full  max-w-lg p-0 rounded-full">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>{" "}
                All Categories
              </summary>
              <ul className="p-6">
                <li>
                  <a>Bags and Shoes</a>
                </li>
                <li>
                  <a>Bags and Shoes</a>
                </li>
                <li>
                  <a>Bags and Shoes</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
        <input type="search" placeholder="Search for iteams" className="ml-2 p-2 " />
        <div className="bg-[#1455ac] ml-24 rounded-r-full px-5 py-4">
          <IoSearchOutline className="text-white"></IoSearchOutline>
        </div>
      </div>

      <div className="navbar-end gap-7 items-center">
        <div>
          <label className="swap swap-rotate ">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              className="theme-controller"
              value="synthwave"
            />

            {/* sun icon */}
            <svg
              className="swap-off h-10 w-7 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on h-10 w-7 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
        {/* Profile Icon */}
        <div className="border-r-[1px] border-[#65748B] pr-2">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.4054 21.8138C24.662 20.3019 25.536 18.5095 25.9534 16.5884C26.3708 14.6673 26.3194 12.6739 25.8035 10.7769C25.2876 8.87985 24.3223 7.13497 22.9894 5.68986C21.6566 4.24476 19.9952 3.14193 18.146 2.47468C16.2967 1.80743 14.314 1.59539 12.3655 1.85649C10.4169 2.11759 8.55997 2.84415 6.95163 3.97471C5.34329 5.10527 4.0309 6.60657 3.12549 8.35161C2.22008 10.0966 1.74828 12.0341 1.75 14C1.75067 16.8579 2.75778 19.6243 4.59463 21.8138L4.57713 21.8286C4.63838 21.9021 4.70838 21.9651 4.77138 22.0378C4.85013 22.1279 4.935 22.2128 5.01638 22.3003C5.26138 22.5663 5.51338 22.8218 5.77763 23.0615C5.85813 23.135 5.94125 23.2033 6.02263 23.2733C6.30263 23.5148 6.5905 23.744 6.88888 23.9575C6.92738 23.9838 6.96238 24.0179 7.00088 24.045V24.0345C9.05022 25.4767 11.495 26.2507 14.0009 26.2507C16.5068 26.2507 18.9515 25.4767 21.0009 24.0345V24.045C21.0394 24.0179 21.0735 23.9838 21.1129 23.9575C21.4104 23.7431 21.6991 23.5148 21.9791 23.2733C22.0605 23.2033 22.1436 23.1341 22.2241 23.0615C22.4884 22.8209 22.7404 22.5663 22.9854 22.3003C23.0668 22.2128 23.1508 22.1279 23.2304 22.0378C23.2925 21.9651 23.3634 21.9021 23.4246 21.8278L23.4054 21.8138ZM14 7.00002C14.7788 7.00002 15.54 7.23095 16.1876 7.66361C16.8351 8.09627 17.3398 8.71122 17.6378 9.43071C17.9358 10.1502 18.0138 10.9419 17.8618 11.7057C17.7099 12.4695 17.3349 13.1711 16.7842 13.7218C16.2336 14.2724 15.532 14.6474 14.7682 14.7994C14.0044 14.9513 13.2127 14.8733 12.4932 14.5753C11.7737 14.2773 11.1588 13.7726 10.7261 13.1251C10.2934 12.4776 10.0625 11.7163 10.0625 10.9375C10.0625 9.89323 10.4773 8.89171 11.2158 8.15329C11.9542 7.41486 12.9557 7.00002 14 7.00002ZM7.00613 21.8138C7.02131 20.6649 7.48821 19.5681 8.30582 18.7608C9.12343 17.9535 10.226 17.5006 11.375 17.5H16.625C17.774 17.5006 18.8766 17.9535 19.6942 18.7608C20.5118 19.5681 20.9787 20.6649 20.9939 21.8138C19.0749 23.5431 16.5832 24.5001 14 24.5001C11.4168 24.5001 8.92514 23.5431 7.00613 21.8138Z" fill="#A1B1C2"></path></svg>
        </div>

        {/* random icon */}
        <div className="border-r-[1px] border-[#65748B] pr-2">
          <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.4998 14.9028V13.3337L19.6665 15.8337L15.4998 18.3337V16.592C14.226 16.4096 13.0206 15.9025 11.9994 15.1195C10.9783 14.3365 10.1757 13.304 9.669 12.1212L9.6665 12.117L9.664 12.122C9.08574 13.4709 8.12439 14.6206 6.89908 15.4285C5.67377 16.2364 4.23835 16.667 2.77067 16.667H2.1665V15.0003H2.77067C3.91232 15.0003 5.02887 14.6653 5.98193 14.0367C6.935 13.4082 7.68269 12.5139 8.13234 11.4645L8.75984 10.0003L8.13234 8.53616C7.68269 7.48679 6.935 6.59242 5.98193 5.96391C5.02887 5.33539 3.91232 5.00036 2.77067 5.00033H2.1665V3.33366H2.77067C4.23844 3.33373 5.67393 3.76447 6.89925 4.57252C8.12457 5.38056 9.08587 6.53038 9.664 7.87949L9.6665 7.88366L9.669 7.87866C10.1758 6.69599 10.9784 5.66361 11.9996 4.88078C13.0207 4.09794 14.2261 3.59099 15.4998 3.40866V1.66699L19.6665 4.16699L15.4998 6.66699V5.09783C14.5556 5.27278 13.6691 5.67815 12.9191 6.27795C12.1692 6.87776 11.5789 7.65344 11.2007 8.53616L10.5732 10.0003L11.2007 11.4645C11.5789 12.3472 12.1692 13.1229 12.9191 13.7227C13.6691 14.3225 14.5556 14.7279 15.4998 14.9028Z" fill="#65748B"></path></svg>
        </div>
        <IoMdHeartEmpty className="text-2xl border-r-[1px] border-[#65748B] pr-2"></IoMdHeartEmpty>
        

        {/* Start Drawer */}
        <div className=" drawer-end">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="my-drawer-4" className="drawer-button">
              <PiHandbagSimpleLight className="text-2xl"></PiHandbagSimpleLight>
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <div className="menu bg-base-200 text-base-content min-h-full w-56 p-10">
              {/* Sidebar content here */}
              <h1>hello</h1>
            </div>
          </div>
        </div>
        {/* End Drawer */}
      </div>
    </div>
  );
};

export default Navbar;
