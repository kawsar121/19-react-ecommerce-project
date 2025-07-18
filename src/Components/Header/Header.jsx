import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="border-t border-b border-gray-300 w-full  hidden lg:block">
      <div className=" relative z-20  navbar bg-base-100 w-full max-w-7xl mx-auto sm:px-6 lg:px-8 flex  md:flex-row items-center gap-0 lg:gap-11 py-0 gap-y-2  sm:mt-0 ">
        <div className="lg:flex hidden justify-center items-center">
                <div className="bg-blue-600 p-5 text-lg flex justify-center items-center gap-1">
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
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <Link>Home</Link>
                </li>
                <li>
                  <details>
                    <summary>Offer</summary>
                    <ul className="p-0">
                      <li>
                        <a>Submenu 1</a>
                      </li>
                      <li>
                        <a>Submenu 2</a>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details>
                    <summary>Stores</summary>
                    <ul className="p-0">
                      <li>
                        <a>Submenu 1</a>
                      </li>
                      <li>
                        <a>Submenu 2</a>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details>
                    <summary>Brands</summary>
                    <ul className="p-2">
                      <li>
                        <a>Submenu 1</a>
                      </li>
                      <li>
                        <a>Submenu 2</a>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <Link>Discounted Products</Link>
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
