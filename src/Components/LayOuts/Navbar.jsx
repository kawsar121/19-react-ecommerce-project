import { IoMdHeartEmpty } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { PiHandbagSimpleLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import Drawer from "../Theme/Drawer";
import ThemesControlers from "../Theme/ThemesControlers";

const Navbar = () => {
  return (
    <div className="relative z-30 navbar bg-base-100 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex  md:flex-row items-center justify-between py-2 gap-y-2 mt-3 ">
      {/* DropDown Icon */}
      <div className="navbar-start">
       <img
          className="w-28 h-14 lg:w-[120px] lg:h-[40px] "
          src="https://i.ibb.co.com/gZFJP9ZQ/cupcake.gif"
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
        <input
          type="search"
          placeholder="Search for iteams"
          className="ml-2 p-2 border-none bg-transparent focus:outline-none"
        />
        <div className="bg-[#1455ac] ml-20 rounded-r-full px-5 py-4">
          <IoSearchOutline className="text-white"></IoSearchOutline>
        </div>
      </div>

      <div className="navbar-end gap-2 md:gap-6 items-center">
        {/* Theme controller start */}
       
          <ThemesControlers></ThemesControlers>
    
        {/* Theme controller start */}


        
        {/* Search Icon for small device */}
        <div className="md:hidden">
          <IoSearchOutline className="text-xl mr-2"></IoSearchOutline>
        </div>
        {/* Profile Icon */}
        
        {/* <Link to="/register" className="border-r-[1px] border-[#65748B] pr-2">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.4054 21.8138C24.662 20.3019 25.536 18.5095 25.9534 16.5884C26.3708 14.6673 26.3194 12.6739 25.8035 10.7769C25.2876 8.87985 24.3223 7.13497 22.9894 5.68986C21.6566 4.24476 19.9952 3.14193 18.146 2.47468C16.2967 1.80743 14.314 1.59539 12.3655 1.85649C10.4169 2.11759 8.55997 2.84415 6.95163 3.97471C5.34329 5.10527 4.0309 6.60657 3.12549 8.35161C2.22008 10.0966 1.74828 12.0341 1.75 14C1.75067 16.8579 2.75778 19.6243 4.59463 21.8138L4.57713 21.8286C4.63838 21.9021 4.70838 21.9651 4.77138 22.0378C4.85013 22.1279 4.935 22.2128 5.01638 22.3003C5.26138 22.5663 5.51338 22.8218 5.77763 23.0615C5.85813 23.135 5.94125 23.2033 6.02263 23.2733C6.30263 23.5148 6.5905 23.744 6.88888 23.9575C6.92738 23.9838 6.96238 24.0179 7.00088 24.045V24.0345C9.05022 25.4767 11.495 26.2507 14.0009 26.2507C16.5068 26.2507 18.9515 25.4767 21.0009 24.0345V24.045C21.0394 24.0179 21.0735 23.9838 21.1129 23.9575C21.4104 23.7431 21.6991 23.5148 21.9791 23.2733C22.0605 23.2033 22.1436 23.1341 22.2241 23.0615C22.4884 22.8209 22.7404 22.5663 22.9854 22.3003C23.0668 22.2128 23.1508 22.1279 23.2304 22.0378C23.2925 21.9651 23.3634 21.9021 23.4246 21.8278L23.4054 21.8138ZM14 7.00002C14.7788 7.00002 15.54 7.23095 16.1876 7.66361C16.8351 8.09627 17.3398 8.71122 17.6378 9.43071C17.9358 10.1502 18.0138 10.9419 17.8618 11.7057C17.7099 12.4695 17.3349 13.1711 16.7842 13.7218C16.2336 14.2724 15.532 14.6474 14.7682 14.7994C14.0044 14.9513 13.2127 14.8733 12.4932 14.5753C11.7737 14.2773 11.1588 13.7726 10.7261 13.1251C10.2934 12.4776 10.0625 11.7163 10.0625 10.9375C10.0625 9.89323 10.4773 8.89171 11.2158 8.15329C11.9542 7.41486 12.9557 7.00002 14 7.00002ZM7.00613 21.8138C7.02131 20.6649 7.48821 19.5681 8.30582 18.7608C9.12343 17.9535 10.226 17.5006 11.375 17.5H16.625C17.774 17.5006 18.8766 17.9535 19.6942 18.7608C20.5118 19.5681 20.9787 20.6649 20.9939 21.8138C19.0749 23.5431 16.5832 24.5001 14 24.5001C11.4168 24.5001 8.92514 23.5431 7.00613 21.8138Z"
              fill="#A1B1C2"
            ></path>
          </svg>
        </Link> */}

        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="border-r-[1px] md:border-[#65748B] pr-0 md:pr-2"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.4054 21.8138C24.662 20.3019 25.536 18.5095 25.9534 16.5884C26.3708 14.6673 26.3194 12.6739 25.8035 10.7769C25.2876 8.87985 24.3223 7.13497 22.9894 5.68986C21.6566 4.24476 19.9952 3.14193 18.146 2.47468C16.2967 1.80743 14.314 1.59539 12.3655 1.85649C10.4169 2.11759 8.55997 2.84415 6.95163 3.97471C5.34329 5.10527 4.0309 6.60657 3.12549 8.35161C2.22008 10.0966 1.74828 12.0341 1.75 14C1.75067 16.8579 2.75778 19.6243 4.59463 21.8138L4.57713 21.8286C4.63838 21.9021 4.70838 21.9651 4.77138 22.0378C4.85013 22.1279 4.935 22.2128 5.01638 22.3003C5.26138 22.5663 5.51338 22.8218 5.77763 23.0615C5.85813 23.135 5.94125 23.2033 6.02263 23.2733C6.30263 23.5148 6.5905 23.744 6.88888 23.9575C6.92738 23.9838 6.96238 24.0179 7.00088 24.045V24.0345C9.05022 25.4767 11.495 26.2507 14.0009 26.2507C16.5068 26.2507 18.9515 25.4767 21.0009 24.0345V24.045C21.0394 24.0179 21.0735 23.9838 21.1129 23.9575C21.4104 23.7431 21.6991 23.5148 21.9791 23.2733C22.0605 23.2033 22.1436 23.1341 22.2241 23.0615C22.4884 22.8209 22.7404 22.5663 22.9854 22.3003C23.0668 22.2128 23.1508 22.1279 23.2304 22.0378C23.2925 21.9651 23.3634 21.9021 23.4246 21.8278L23.4054 21.8138ZM14 7.00002C14.7788 7.00002 15.54 7.23095 16.1876 7.66361C16.8351 8.09627 17.3398 8.71122 17.6378 9.43071C17.9358 10.1502 18.0138 10.9419 17.8618 11.7057C17.7099 12.4695 17.3349 13.1711 16.7842 13.7218C16.2336 14.2724 15.532 14.6474 14.7682 14.7994C14.0044 14.9513 13.2127 14.8733 12.4932 14.5753C11.7737 14.2773 11.1588 13.7726 10.7261 13.1251C10.2934 12.4776 10.0625 11.7163 10.0625 10.9375C10.0625 9.89323 10.4773 8.89171 11.2158 8.15329C11.9542 7.41486 12.9557 7.00002 14 7.00002ZM7.00613 21.8138C7.02131 20.6649 7.48821 19.5681 8.30582 18.7608C9.12343 17.9535 10.226 17.5006 11.375 17.5H16.625C17.774 17.5006 18.8766 17.9535 19.6942 18.7608C20.5118 19.5681 20.9787 20.6649 20.9939 21.8138C19.0749 23.5431 16.5832 24.5001 14 24.5001C11.4168 24.5001 8.92514 23.5431 7.00613 21.8138Z"
              fill="#A1B1C2"
            ></path>
          </svg>
        </button>
        <dialog id="my_modal_3" className="modal mt-0 ">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <div className="py-0">

              {/* Register Start */}
              < div className="card bg-base-100 w-full max-w-sm mx-auto mt-2 shrink-0 shadow-2xl">
            <h1 className="text-5xl text-center font-bold">Register now!</h1>
          <form  className="card-body">
            <div className="form-control">
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6 mx-auto">
              <button className="btn btn-primary">Submit</button>
            </div>
            <p>Do you have no account?<Link className="text-blue-400" to='/login'>Log In</Link></p>
          </form>
              </div>
              {/* Register End */}
            </div>
          </div>
        </dialog>

        {/* random icon */}
        <div className="border-r-[1px] border-[#65748B] pr-2 hidden md:block">
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.4998 14.9028V13.3337L19.6665 15.8337L15.4998 18.3337V16.592C14.226 16.4096 13.0206 15.9025 11.9994 15.1195C10.9783 14.3365 10.1757 13.304 9.669 12.1212L9.6665 12.117L9.664 12.122C9.08574 13.4709 8.12439 14.6206 6.89908 15.4285C5.67377 16.2364 4.23835 16.667 2.77067 16.667H2.1665V15.0003H2.77067C3.91232 15.0003 5.02887 14.6653 5.98193 14.0367C6.935 13.4082 7.68269 12.5139 8.13234 11.4645L8.75984 10.0003L8.13234 8.53616C7.68269 7.48679 6.935 6.59242 5.98193 5.96391C5.02887 5.33539 3.91232 5.00036 2.77067 5.00033H2.1665V3.33366H2.77067C4.23844 3.33373 5.67393 3.76447 6.89925 4.57252C8.12457 5.38056 9.08587 6.53038 9.664 7.87949L9.6665 7.88366L9.669 7.87866C10.1758 6.69599 10.9784 5.66361 11.9996 4.88078C13.0207 4.09794 14.2261 3.59099 15.4998 3.40866V1.66699L19.6665 4.16699L15.4998 6.66699V5.09783C14.5556 5.27278 13.6691 5.67815 12.9191 6.27795C12.1692 6.87776 11.5789 7.65344 11.2007 8.53616L10.5732 10.0003L11.2007 11.4645C11.5789 12.3472 12.1692 13.1229 12.9191 13.7227C13.6691 14.3225 14.5556 14.7279 15.4998 14.9028Z"
              fill="#65748B"
            ></path>
            <label className="bg-red-400 text-black">0</label>
          </svg>
        </div>
        {/* <IoMdHeartEmpty className="text-2xl border-r-[1px] border-[#65748B] pr-2"></IoMdHeartEmpty> */}
        
        {/* Heart Icon */}
       <div className="hidden md:block">
         <svg
          width="30"
          height="25"
          className="border-r-[1px] border-[#65748B] pr-2"
          viewBox="0 0 19 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.5 17.125C9.39868 17.126 9.29887 17.1004 9.21055 17.0508C8.89141 16.8727 1.48438 12.6645 1.48438 7.32813C1.48438 6.39349 1.77845 5.48255 2.32494 4.72434C2.87143 3.96612 3.64263 3.39908 4.5293 3.10352C5.41597 2.80796 6.37316 2.79888 7.26528 3.07756C8.1574 3.35623 8.93922 3.90854 9.5 4.65625C10.0608 3.90854 10.8426 3.35623 11.7347 3.07756C12.6268 2.79888 13.584 2.80796 14.4707 3.10352C15.3574 3.39908 16.1286 3.96612 16.6751 4.72434C17.2216 5.48255 17.5156 6.39349 17.5156 7.32813C17.5156 9.59922 16.202 11.9297 13.6117 14.2602C12.4355 15.3175 11.1549 16.2526 9.78945 17.0508C9.70113 17.1004 9.60132 17.126 9.5 17.125ZM5.9375 4.0625C5.0714 4.0625 4.24078 4.40656 3.62835 5.01898C3.01593 5.6314 2.67188 6.46203 2.67188 7.32813C2.67188 11.425 8.16406 15.0246 9.5 15.841C10.8359 15.0246 16.3281 11.425 16.3281 7.32813C16.3288 6.57319 16.0679 5.84134 15.5898 5.25708C15.1117 4.67282 14.446 4.27225 13.7059 4.12352C12.9657 3.9748 12.1969 4.0871 11.5302 4.44132C10.8636 4.79554 10.3402 5.36981 10.0492 6.06641C10.0045 6.17531 9.92839 6.26845 9.8306 6.334C9.7328 6.39955 9.61773 6.43455 9.5 6.43455C9.38227 6.43455 9.2672 6.39955 9.16941 6.334C9.07161 6.26845 8.99552 6.17531 8.95078 6.06641C8.70365 5.47137 8.28527 4.96319 7.74876 4.6064C7.21225 4.24961 6.58181 4.06029 5.9375 4.0625Z"
            fill="#65748B"
          ></path>
        </svg>
       </div>

        {/* Start Drawer */}
        <div className="hidden md:block">
          <Drawer></Drawer>
        </div>
        {/* End Drawer */}

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
      </div>
    </div>
  );
};

export default Navbar;
