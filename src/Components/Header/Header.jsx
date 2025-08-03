import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="border-t border-b border-gray-300 w-full  hidden lg:block">
      <div className=" relative z-20  navbar bg-base-100 w-full max-w-7xl mx-auto sm:px-6 lg:px-8 flex  md:flex-row items-center gap-0 lg:gap-11 py-0 gap-y-2  sm:mt-0 ">
        <div className="lg:flex hidden justify-center items-center">
          <div className="bg-blue-600 py-5 px-4 text-base font-semibold text-white flex justify-center items-center gap-1">
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
            Brows category
          </div>
        </div>

        <div>
          <div className="flex items-center justify-center bg-base-100 ">
            <div className="navbar-center  hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <Link>Home</Link>
                </li>
                <li>
                  <ul className="relative z-50 menu menu-horizontal p-0 m-0">
                    <li className="relative group">
                      <span className="flex items-center gap-1 text-sm cursor-pointer">
                        Offer
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
                        <a className="block px-4 py-2 hover:bg-gray-100">
                          Flash Deals
                        </a>
                        <a className="block px-4 py-2 hover:bg-gray-100">
                          Future Deals
                        </a>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li>
                  {/* <details>
                    <summary>Stores</summary>
                    <ul className="p-0">
                      <li>
                        <a>Submenu 1</a>
                      </li>
                      <li>
                        <a>Submenu 2</a>
                      </li>
                    </ul>
                  </details> */}

                  <ul className="relative z-50 menu menu-horizontal p-0 m-0">
                    <li className="relative group">
                      <span className="flex items-center gap-1 text-sm cursor-pointer">
                        Stores
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
                      <ul className="absolute left-0 top-full hidden group-hover:block bg-white text-black mt-1 p-2 shadow-lg rounded w-96">
                        {/* Iteam One */}
                        <div className="flex items-center gap-14">
                          <div className="flex text-center items-center ">
                            <li>
                              <img
                                src="https://martcms-dev-react.6amdev.xyz/_next/image?url=https%3A%2F%2Fmartcms-dev.6amdev.xyz%2Fstorage%2Fapp%2Fpublic%2Fshop%2F2022-04-21-6260f790349f7.png&w=32&q=75"
                                alt=""
                              />
                            </li>
                            <li className="hover:bg-gray-100">Delux Online</li>
                          </div>
                          <div className="flex text-center items-center ">
                            <li>
                              <img
                                src="https://martcms-dev-react.6amdev.xyz/_next/image?url=https%3A%2F%2Fmartcms-dev.6amdev.xyz%2Fstorage%2Fapp%2Fpublic%2Fshop%2F2022-04-21-6260f790349f7.png&w=32&q=75"
                                alt=""
                              />
                            </li>
                            <li className="hover:bg-gray-100">Delux Online</li>
                          </div>
                        </div>
                        {/* Iteam two */}
                        <div className="flex items-center gap-14">
                          <div className="flex text-center items-center ">
                            <li>
                              <img
                                src="https://martcms-dev-react.6amdev.xyz/_next/image?url=https%3A%2F%2Fmartcms-dev.6amdev.xyz%2Fstorage%2Fapp%2Fpublic%2Fshop%2F2022-04-21-6260f790349f7.png&w=32&q=75"
                                alt=""
                              />
                            </li>
                            <li className="hover:bg-gray-100">Delux Online</li>
                          </div>
                          <div className="flex text-center items-center ">
                            <li>
                              <img
                                src="https://martcms-dev-react.6amdev.xyz/_next/image?url=https%3A%2F%2Fmartcms-dev.6amdev.xyz%2Fstorage%2Fapp%2Fpublic%2Fshop%2F2022-04-21-6260f790349f7.png&w=32&q=75"
                                alt=""
                              />
                            </li>
                            <li className="hover:bg-gray-100">Delux Online</li>
                          </div>
                        </div>
                        {/* Iteam three */}
                        <div className="flex items-center gap-14">
                          <div className="flex text-center items-center ">
                            <li>
                              <img
                                src="https://martcms-dev-react.6amdev.xyz/_next/image?url=https%3A%2F%2Fmartcms-dev.6amdev.xyz%2Fstorage%2Fapp%2Fpublic%2Fshop%2F2022-04-21-6260f790349f7.png&w=32&q=75"
                                alt=""
                              />
                            </li>
                            <li className="hover:bg-gray-100">Delux Online</li>
                          </div>
                          <div className="flex text-center items-center ">
                            <li>
                              <img
                                src="https://martcms-dev-react.6amdev.xyz/_next/image?url=https%3A%2F%2Fmartcms-dev.6amdev.xyz%2Fstorage%2Fapp%2Fpublic%2Fshop%2F2022-04-21-6260f790349f7.png&w=32&q=75"
                                alt=""
                              />
                            </li>
                            <li className="hover:bg-gray-100">Delux Online</li>
                          </div>
                        </div>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul className="relative z-50 menu menu-horizontal p-0 m-0">
                    <li className="relative group">
                      <span className="flex items-center gap-1 text-sm cursor-pointer">
                        Brands
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
                      <ul className="absolute left-0 top-full hidden group-hover:block bg-white text-black mt-1 p-2 shadow-lg rounded w-96">
                        {/* Iteam One */}
                        <div className="flex items-center gap-14">
                          <div className="flex text-center items-center ">
                            <li>
                              <img
                                src="https://martcms-dev-react.6amdev.xyz/_next/image?url=https%3A%2F%2Fmartcms-dev.6amdev.xyz%2Fstorage%2Fapp%2Fpublic%2Fbrand%2F2023-06-13-6488153b45156.png&w=32&q=75"
                                alt=""
                              />
                            </li>
                            <li className="hover:bg-gray-100">Delux Online</li>
                          </div>
                          <div className="flex text-center items-center ">
                            <li>
                              <img
                                src="https://martcms-dev-react.6amdev.xyz/_next/image?url=https%3A%2F%2Fmartcms-dev.6amdev.xyz%2Fstorage%2Fapp%2Fpublic%2Fshop%2F2022-04-21-6260f6e190f4c.png&w=32&q=75"
                                alt=""
                              />
                            </li>
                            <li className="hover:bg-gray-100">Delux Online</li>
                          </div>
                        </div>
                        {/* Iteam two */}
                        <div className="flex items-center gap-14">
                          <div className="flex text-center items-center ">
                            <li>
                              <img
                                src="https://martcms-dev-react.6amdev.xyz/_next/image?url=https%3A%2F%2Fmartcms-dev.6amdev.xyz%2Fstorage%2Fapp%2Fpublic%2Fshop%2F2022-04-21-6260f790349f7.png&w=32&q=75"
                                alt=""
                              />
                            </li>
                            <li className="hover:bg-gray-100">Delux Online</li>
                          </div>
                          <div className="flex text-center items-center ">
                            <li>
                              <img
                                src="https://martcms-dev-react.6amdev.xyz/_next/image?url=https%3A%2F%2Fmartcms-dev.6amdev.xyz%2Fstorage%2Fapp%2Fpublic%2Fshop%2F2022-04-21-6260f790349f7.png&w=32&q=75"
                                alt=""
                              />
                            </li>
                            <li className="hover:bg-gray-100">Delux Online</li>
                          </div>
                        </div>
                        {/* Iteam three */}
                        <div className="flex items-center gap-14">
                          <div className="flex text-center items-center ">
                            <li>
                              <img
                                src="https://martcms-dev-react.6amdev.xyz/_next/image?url=https%3A%2F%2Fmartcms-dev.6amdev.xyz%2Fstorage%2Fapp%2Fpublic%2Fshop%2F2022-04-21-6260f790349f7.png&w=32&q=75"
                                alt=""
                              />
                            </li>
                            <li className="hover:bg-gray-100">Delux Online</li>
                          </div>
                          <div className="flex text-center items-center ">
                            <li>
                              <img
                                src="https://martcms-dev-react.6amdev.xyz/_next/image?url=https%3A%2F%2Fmartcms-dev.6amdev.xyz%2Fstorage%2Fapp%2Fpublic%2Fshop%2F2022-04-21-6260f790349f7.png&w=32&q=75"
                                alt=""
                              />
                            </li>
                            <li className="hover:bg-gray-100">Delux Online</li>
                          </div>
                        </div>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link>
                    Discounted Products
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1233_24175)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M6.44816 0.435674L5.31816 1.56467C5.22692 1.65596 5.10323 1.70737 4.97416 1.70767H3.19616C2.37416 1.70767 1.70816 2.37367 1.70816 3.19567V4.97367C1.70791 5.10304 1.6565 5.22706 1.56516 5.31867L0.435162 6.44767C0.156215 6.72671 -0.000488281 7.10512 -0.000488281 7.49967C-0.000488281 7.89423 0.156215 8.27263 0.435162 8.55167L1.56516 9.68167C1.65644 9.77292 1.70786 9.89661 1.70816 10.0257V11.8037C1.70816 12.6257 2.37416 13.2917 3.19616 13.2917H4.97416C5.10353 13.2919 5.22755 13.3433 5.31916 13.4347L6.44816 14.5647C6.7272 14.8436 7.10561 15.0003 7.50016 15.0003C7.89472 15.0003 8.27312 14.8436 8.55216 14.5647L9.68216 13.4347C9.77341 13.3434 9.8971 13.292 10.0262 13.2917H11.8042C12.6262 13.2917 13.2922 12.6257 13.2922 11.8037V10.0257C13.2924 9.89631 13.3438 9.77229 13.4352 9.68067L14.5652 8.55167C14.8441 8.27263 15.0008 7.89423 15.0008 7.49967C15.0008 7.10512 14.8441 6.72671 14.5652 6.44767L13.4352 5.31767C13.3439 5.22643 13.2925 5.10274 13.2922 4.97367V3.19567C13.2922 2.37367 12.6262 1.70767 11.8042 1.70767H10.0262C9.89675 1.70764 9.77265 1.6562 9.68116 1.56467L8.55216 0.434674C8.27312 0.155727 7.89472 -0.000976563 7.50016 -0.000976562C7.10561 -0.000976563 6.7272 0.156727 6.44816 0.435674ZM4.64616 9.64567L9.64616 4.64567L10.3542 5.35367L5.35416 10.3537L4.64616 9.64567ZM5.00016 4.99967V5.99967H6.00016V4.99967H5.00016ZM9.00016 9.99967H10.0002V8.99967H9.00016V9.99967Z"
                          fill="#FFBE00"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_1233_24175">
                          <rect width="15" height="15" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div>hello</div> */}
      </div>
    </div>
  );
};

export default Header;
