import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "../Theme/Drawer";
import View from "../Theme/View";

const SectionSeven = () => {
  const [load, setLoad] = useState([]);

    useEffect(() => {
        fetch("/product.json")
          .then((res) => res.json())
          .then((data) => {
            setLoad(data);
            
          })
          .catch((error) => {
            console.error("ডেটা আনার সময় সমস্যা:", error);
           
          });
      }, []);
  return (
    <div  className="w-full max-w-5xl lg:max-w-6xl mx-auto items-center">
      <div className="flex justify-center lg:justify-start items-center gap-1 my-8 border-[#e6e8f0] border-b-2 pb-3">
        <div>
          <img
            src="https://martcms-dev-react.6amdev.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffeatured-icon.a6fdc034.png&w=32&q=75"
            alt=""
            sizes=""
            srcset=""
            className=""
          />
        </div>
        <h1 className="text-xl font-medium">Featured Categories</h1>
      </div>

      <div className="grid  lg:flex gap-2 lg:gap-28 mb-5">
        {/* Menu Div */}
        <div>
          <ul className="grid justify-center">
            <li className="mb-3 hover:border-blue-600 whitespace-nowrap hover:border-b-4 pb-2 hover:font-medium">
              <Link>Home Pet Applience</Link>
            </li>
            <li className="mb-3 whitespace-nowrap hover:border-blue-600 hover:border-b-4 pb-2 hover:font-medium">
              <Link>Phone and telecom</Link>
            </li>
            <li className="mb-3 whitespace-nowrap hover:border-blue-600 hover:border-b-4 pb-2 hover:font-medium">
              <Link>Beauty health, hair</Link>
            </li>
            <li className="mb-3 whitespace-nowrap hover:border-blue-600 hover:border-b-4 pb-2 hover:font-medium">
              <Link>Juwellary & watch</Link>
            </li>
            <li className="mb-3 whitespace-nowrap hover:border-blue-600 hover:border-b-4 pb-2 hover:font-medium">
              <Link>Ebook</Link>
            </li>
            <li className="mb-3 whitespace-nowrap hover:border-blue-600 hover:border-b-4 pb-2 hover:font-medium">
              <Link>Women Fashion</Link>
            </li>
            <li className="mb-3 whitespace-nowrap hover:border-blue-600 hover:border-b-4 pb-2 hover:font-medium">
              <Link>Outdoor fun & sports</Link>
            </li>
            <li className=" hover:border-blue-600 whitespace-nowrap hover:border-b-4 pb-2 hover:font-medium ">
              <Link >
                Men fashion ss
              </Link>
            </li>
          </ul>
        </div>
        {/* Card Div */}
        {/* Card*/}
      <div className="grid justify-center md:grid-cols-3 lg:grid-cols-4 gap-10">
        {load.map((dataload) => (
          <div
            key={dataload.id}
            className="max-w-xs hover:shadow-lg  text-white rounded-xl relative group p-4 w-52"
          >
            <span className="absolute top-2 left-1 z-20 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
              {dataload.discount_price}
            </span>

            <div className="">
              <img
                src={dataload.accessories_image}
                alt="Charger"
                className="rounded-xl mx-auto w-48 transform scale-110 group-hover:scale-100 transition-transform duration-500"
              />
            </div>

            {/* Button icon */}
            <div className="absolute top-3 right-[-2px] flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
              <button className="w-9 h-9 bg-white text-blue-600 border-2 rounded-full flex items-center justify-center">
                <Drawer></Drawer>
              </button>
              <button className="w-9 h-9 bg-white border-2 rounded-full flex items-center justify-center ">
                <svg
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 11.625C6.92001 11.6258 6.84122 11.6056 6.77148 11.5664C6.51953 11.4258 0.671875 8.10352 0.671875 3.89062C0.671875 3.15276 0.904038 2.43359 1.33548 1.835C1.76692 1.23641 2.37576 0.788745 3.07576 0.55541C3.77577 0.322076 4.53144 0.314905 5.23575 0.534913C5.94005 0.754922 6.55728 1.19096 7 1.78125C7.44272 1.19096 8.05995 0.754922 8.76425 0.534913C9.46856 0.314905 10.2242 0.322076 10.9242 0.55541C11.6242 0.788745 12.2331 1.23641 12.6645 1.835C13.096 2.43359 13.3281 3.15276 13.3281 3.89062C13.3281 5.68359 12.291 7.52344 10.2461 9.36328C9.31752 10.1981 8.30646 10.9362 7.22852 11.5664C7.15878 11.6056 7.07999 11.6258 7 11.625ZM4.1875 1.3125C3.50374 1.3125 2.84798 1.58412 2.36449 2.06762C1.881 2.55111 1.60938 3.20686 1.60938 3.89062C1.60938 7.125 5.94531 9.9668 7 10.6113C8.05469 9.9668 12.3906 7.125 12.3906 3.89062C12.3912 3.29462 12.1852 2.71684 11.8078 2.25559C11.4303 1.79433 10.9047 1.47809 10.3204 1.36068C9.73609 1.24326 9.12914 1.33192 8.60282 1.61157C8.0765 1.89122 7.66332 2.34458 7.43359 2.89453C7.39828 2.9805 7.3382 3.05404 7.261 3.10579C7.18379 3.15754 7.09295 3.18517 7 3.18517C6.90706 3.18517 6.81621 3.15754 6.739 3.10579C6.6618 3.05404 6.60172 2.9805 6.56641 2.89453C6.3713 2.42476 6.041 2.02357 5.61744 1.74189C5.19388 1.46022 4.69617 1.31076 4.1875 1.3125Z"
                    fill="#1455ac"
                  ></path>
                </svg>
              </button>

              {/* adjust Modal */}
              {/* You can open the modal using document.getElementById('ID').showModal() method */}
              <View></View>
            </div>

            <div className="flex justify-center items-center mt-4 text-gray-400 text-sm">
              {/* <div className="rating rating-xs">
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div> */}
              <div className="mt-1 text-gray-400 text-xs flex items-center gap-1">
              ⭐⭐⭐⭐⭐
              </div>
              
              <div><p className="text-gray-600 text-xs">({dataload.quantity})</p></div>
            </div>

            <div className="text-center mt-1 text-gray-500 text-sm">
              {dataload.company}
            </div>

            <div className="text-center text-[#121828] truncate text-sm font-bold">
              {dataload.accessories_name}
            </div>

            <div className="text-center mt-1">
              <span className="line-through text-sm text-gray-500 mr-2">
                {dataload.discount_price}
              </span>
              <span className="text-base font-bold text-black">
                {dataload.price}
              </span>
            </div>
          </div>
        ))}
      </div>

      </div>
    </div>
  );
};

export default SectionSeven;
