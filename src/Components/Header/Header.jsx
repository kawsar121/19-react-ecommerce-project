import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="border-t border-b border-gray-300 w-full mb-4  hidden lg:block">
      <div className=" relative z-20  navbar bg-base-100 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex  md:flex-row items-center justify-between py-2 gap-y-2  sm:mt-0 ">
        <div className="lg:flex hidden justify-center items-center">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary className="bg-blue-600 p-3 text-lg">
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
                </summary>
                <ul className="p-2">
                  <li className="border-b-2 border-indigo-500 text-base">
                    <Link className="whitespace-nowrap">Bags and shoes</Link>
                  </li>
                  <li className="border-b-2 border-indigo-500 font-medium">
                    <Link className="whitespace-nowrap">
                      Home Pet and applience
                    </Link>
                  </li>
                  <li className="border-b-2 border-indigo-500 text-base">
                    <Link className="whitespace-nowrap">Phones & telecom</Link>
                  </li>
                  <li className="border-b-2 border-indigo-500 text-base">
                    <Link className="whitespace-nowrap">
                      Computer office and security
                    </Link>
                  </li>
                  <li className="border-b-2 border-indigo-500 text-base">
                    <Link className="whitespace-nowrap">Mobile Accories</Link>
                  </li>
                  <li className="border-b-2 border-indigo-500 text-base">
                    <Link className="whitespace-nowrap">
                      Toys kids and babies
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
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
        <div>{/* hello */}</div>
      </div>
    </div>
  );
};

export default Header;
