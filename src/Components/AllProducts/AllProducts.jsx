import React from "react";
import { PiHandbagSimpleLight } from "react-icons/pi";
import { Link } from "react-router-dom";

const AllProducts = () => {
  return (
    <div className=" flex justify-center items-center max-w-[1215px] mx-auto mt-7 bg-gray-900 p-4 rounded-lg w-full  gap-0 lg:gap-96 ">
      <div>
        <h1 className="text-xl">All Products</h1>
        <p className="text-slate-500">Home / All Products</p>
      </div>
      <div className="flex relative z-20 gap-[3.25rem] lg:gap-20">
        <button>
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary className="border-slate-500 border-2 p-0 lg:p-2 text-xs lg:text-base">
                  Show Product : All
                </summary>
                <ul className="p-2">
                  <li className="border-b-2 border-indigo-500 text-base">
                    <Link className="">Bags and shoes</Link>
                  </li>
                  <li className="border-b-2 border-indigo-500 font-medium">
                    <Link className="">Home Pet and applience</Link>
                  </li>
                  <li className="border-b-2 border-indigo-500 text-base">
                    <Link className="">Phones & telecom</Link>
                  </li>
                  <li className="border-b-2 border-indigo-500 text-base">
                    <Link className="">Computer office and security</Link>
                  </li>
                  <li className="border-b-2 border-indigo-500 text-base">
                    <Link className="">Mobile Accories</Link>
                  </li>
                  <li className="border-b-2 border-indigo-500 text-base">
                    <Link className="">Toys kids and babies</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </button>
        <button>
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary className="border-slate-500 border-2 p-0 lg:p-2 text-xs lg:text-base">
                  Show Product : All
                </summary>
                <ul className="p-2">
                  <li className="border-b-2 border-indigo-500 text-base">
                    <Link className="">Bags and shoes</Link>
                  </li>
                  <li className="border-b-2 border-indigo-500 font-medium">
                    <Link className="">Home Pet and applience</Link>
                  </li>
                  <li className="border-b-2 border-indigo-500 text-base">
                    <Link className="">Phones & telecom</Link>
                  </li>
                  <li className="border-b-2 border-indigo-500 text-base">
                    <Link className="">Computer office and security</Link>
                  </li>
                  <li className="border-b-2 border-indigo-500 text-base">
                    <Link className="">Mobile Accories</Link>
                  </li>
                  <li className="border-b-2 border-indigo-500 text-base">
                    <Link className="">Toys kids and babies</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </button>

        {/* Extra */}
        {/* Dwar */}
        <div className="drawer lg:hidden">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label
              htmlFor="my-drawer"
              className="btn btn-primary drawer-button"
            >
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
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
              {/* Cheek Start */}
              <div className="">
                <div className="flex items-center gap-10 lg:gap-20 text-center my-6">
                  <p>Price</p>
                  <button className="border-red-400 px-3 border-2 rounded-lg">
                    Reset
                  </button>
                </div>
                <div className="flex gap-5 lg:gap-16 items-center">
                  <label className="label">Min</label>
                  <label className="label">Max</label>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="grid">
                    <input
                      className="border-slate-500 border-1 lg:border-2 bg-blue-950 w-10 lg:w-16 text-center"
                      type="text"
                      placeholder="$ 0"
                    />
                  </div>
                  <div className="grid">
                    <input
                      className="border-slate-500 border-1 lg:border-2 bg-blue-950 w-10 lg:w-16 text-center"
                      type="text"
                      placeholder="$ 0"
                    />
                  </div>
                  <div>
                    <button>▶</button>
                  </div>
                </div>
                <div>
                  <input
                    type="range"
                    min={0}
                    max="100"
                    value="0"
                    className="range range-xs w-44 my-3"
                  />
                </div>
                <div>
                  <h1 className="text-2xl">Categories</h1>

                  <div className="mt-7 space-y-3 max-w-md mx-auto">
                    {/* Cheek one */}
                    <div className="form-control">
                      <label className="label cursor-pointer flex items-start gap-3">
                        <input
                          type="checkbox"
                          defaultChecked
                          class="checkbox checkbox-primary mt-1 shrink-0"
                        />

                        <div className="flex justify-between items-start w-full ">
                          <span className="label-text text-base text-white break-words">
                            Outdoor Fun & Sports
                          </span>

                          <span className="label-text text-base text-white bg-gray-700 px-2 rounded-full shrink-0 ml-3">
                            1
                          </span>
                        </div>
                      </label>
                    </div>
                    {/* Cheek Two */}
                    <div className="form-control">
                      <label className="label cursor-pointer flex items-start gap-3">
                        <input
                          type="checkbox"
                          defaultChecked
                          class="checkbox checkbox-primary mt-1 shrink-0"
                        />

                        <div className="flex justify-between items-start w-full ">
                          <span className="label-text text-base text-white break-words">
                            Women's fashion
                          </span>

                          <span className="label-text text-base text-white bg-gray-700 px-2 rounded-full shrink-0 ml-3">
                            2
                          </span>
                        </div>
                      </label>
                    </div>
                    {/* Cheek Three */}
                    <div className="form-control">
                      <label className="label cursor-pointer flex items-start gap-3">
                        <input
                          type="checkbox"
                          defaultChecked
                          class="checkbox checkbox-primary mt-1 shrink-0"
                        />

                        <div className="flex justify-between items-start w-full ">
                          <span className="label-text text-base text-white break-words">
                            Men's fashion ss
                          </span>

                          <span className="label-text text-base text-white bg-gray-700 px-2 rounded-full shrink-0 ml-3">
                            3
                          </span>
                        </div>
                      </label>
                    </div>
                    {/* Cheek Four */}
                    <div className="form-control">
                      <label className="label cursor-pointer flex items-start gap-3">
                        <input
                          type="checkbox"
                          defaultChecked
                          class="checkbox checkbox-primary mt-1 shrink-0"
                        />

                        <div className="flex justify-between items-start w-full ">
                          <span className="label-text text-base text-white break-words">
                            Jewelry & Watches
                          </span>

                          <span className="label-text text-base text-white bg-gray-700 px-2 rounded-full shrink-0 ml-3">
                            4
                          </span>
                        </div>
                      </label>
                    </div>
                    {/* Cheek Five */}
                    <div className="form-control">
                      <label className="label cursor-pointer flex items-start gap-3">
                        <input
                          type="checkbox"
                          defaultChecked
                          class="checkbox checkbox-primary mt-1 shrink-0"
                        />

                        <div className="flex justify-between items-start w-full ">
                          <span className="label-text text-base text-white break-words">
                            Computer, Office & Security
                          </span>

                          <span className="label-text text-base text-white bg-gray-700 px-2 rounded-full shrink-0 ml-3">
                            5
                          </span>
                        </div>
                      </label>
                    </div>
                    {/* Cheek Six */}
                    <div className="form-control">
                      <label className="label cursor-pointer flex items-start gap-3">
                        <input
                          type="checkbox"
                          defaultChecked
                          class="checkbox checkbox-primary mt-1 shrink-0"
                        />

                        <div className="flex justify-between items-start w-full ">
                          <span className="label-text text-base text-white break-words">
                            Computer, Office & Security
                          </span>

                          <span className="label-text text-base text-white bg-gray-700 px-2 rounded-full shrink-0 ml-3">
                            6
                          </span>
                        </div>
                      </label>
                    </div>
                    {/* Cheek Seven */}
                    <div className="form-control">
                      <label className="label cursor-pointer flex items-start gap-3">
                        <input
                          type="checkbox"
                          defaultChecked
                          class="checkbox checkbox-primary mt-1 shrink-0"
                        />

                        <div className="flex justify-between items-start w-full ">
                          <span className="label-text text-base text-white break-words">
                            Phones & Telecom
                          </span>

                          <span className="label-text text-base text-white bg-gray-700 px-2 rounded-full shrink-0 ml-3">
                            1
                          </span>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              {/* Cheek End */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
