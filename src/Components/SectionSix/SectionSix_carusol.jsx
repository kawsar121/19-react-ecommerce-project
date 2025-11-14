import React from "react";
import { Link } from "react-router-dom";

const SectionSix_carusol = () => {
  return (
    <div className=" w-full max-w-5xl lg:max-w-6xl  mx-auto">
      <div className="flex items-center justify-between border-slate-500 border-b-2 mb-10">
        <h2 className="text-sm lg:text-2xl font-normal">
          <span className="text-blue-500">POPULAR</span> CATEGORIES
        </h2>
        <Link className="text-blue-500 text-xs lg:text-lg">View All ◀️ ▶️ </Link>
      </div>


      {/* Card */}
      <div className="gird w-full mx-auto lg:flex gap-3 lg:gap-7 my-5 justify-center">
        {/* Card One */}
      <div className="bg-[#f5f6f8] w-[400px] px-3 py-8 ">
        <button className=" ml-56 p-2 whitespace-nowrap text-xs btn bg-red-600 text-white uppercase border-none">Use Cupon : <span className="lowercase">axyfji</span></button>
        <h2 className="text-[#121828]  font-bold">Delux Online</h2>
        <p className="text-xs text-black">10 Product</p>
        
        <div className="max-w-2xl flex gap-5 items-center hover:shadow-lg rounded-xl relative group py-3 px-10">
          <div className="">
            <span className="absolute top-4 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-tl-lg">
              -10%
            </span>
            <img
              src="https://i.ibb.co.com/3ycdXJZQ/slide5.jpg"
              alt="Charger"
              className="rounded-xl mx-auto"
            />
          </div>

          <div>
            <div className=" font-medium text-sm text-[#121828] hover:text-blue-500">
              Women's long-sleeve lightweight <br /> french terry fleece quarter-zip
              top
            </div>
            <div className=" mt-1 text-gray-400 text-sm">
              <div className="rating rating-xs">
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
              </div>{" "}
              (2)
            </div>
            <div className=" mt-1">
              <span className="line-through text-gray-600 mr-2 text-xs">$118</span>
              <span className="text-bas font-bold text-[#121828]">$115</span>
            </div>
          </div>
        </div>


        <div className="max-w-2xl flex gap-5 items-center hover:shadow-lg rounded-xl relative group py-3 px-10">
          <div className="">
            <span className="absolute top-4 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-tl-lg">
              -10%
            </span>
            <img
              src="https://i.ibb.co.com/Xdxvqg2/slide4.jpg"
              alt="Charger"
              className="rounded-xl mx-auto"
            />
          </div>

          <div>
            <div className=" font-medium text-sm text-[#121828] hover:text-blue-500">
              Women's long-sleeve lightweight <br /> french terry fleece quarter-zip
              top
            </div>
            <div className=" mt-1 text-gray-400 text-sm">
              <div className="rating rating-xs">
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
              </div>{" "}
              (2)
            </div>
            <div className=" mt-1">
              <span className="line-through text-gray-600 mr-2 text-xs">$118</span>
              <span className="text-bas font-bold text-[#121828]">$115</span>
            </div>
          </div>
        </div>

        <div className="max-w-2xl flex gap-5 items-center hover:shadow-lg rounded-xl relative group py-3 px-10">
          <div className="">
            <span className="absolute top-4 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-tl-lg">
              -10%
            </span>
            <img
              src="https://i.ibb.co.com/dwN7RVdK/slide3.jpg"
              alt="Charger"
              className="rounded-xl mx-auto"
            />
          </div>

          <div>
            <div className=" font-medium text-sm text-[#121828] hover:text-blue-500">
              Women's long-sleeve lightweight <br /> french terry fleece quarter-zip
              top
            </div>
            <div className=" mt-1 text-gray-400 text-sm">
              <div className="rating rating-xs">
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
              </div>{" "}
              (2)
            </div>
            <div className=" mt-1">
              <span className="line-through text-gray-600 mr-2 text-xs">$118</span>
              <span className="text-bas font-bold text-[#121828]">$115</span>
            </div>
          </div>
        </div>
      </div>
      {/* Card two */}
      <div className="bg-[#f5f6f8] w-[400px] px-3 py-8 ">
        <button className=" ml-56 p-2 whitespace-nowrap text-xs btn bg-red-600 text-white uppercase border-none">Use Cupon : <span className="lowercase">axyfji</span></button>
        <h2 className="text-[#121828]  font-bold">Delux Online</h2>
        <p className="text-xs text-black">10 Product</p>
        
        <div className="max-w-2xl flex gap-5 items-center hover:shadow-lg rounded-xl relative group py-3 px-10">
          <div className="">
            <span className="absolute top-4 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-tl-lg">
              -10%
            </span>
            <img
              src="https://i.ibb.co.com/dwN7RVdK/slide3.jpg"
              alt="Charger"
              className="rounded-xl mx-auto"
            />
          </div>

          <div>
            <div className=" font-medium text-sm text-[#121828] hover:text-blue-500">
              Women's long-sleeve lightweight <br /> french terry fleece quarter-zip
              top
            </div>
            <div className=" mt-1 text-gray-400 text-sm">
              <div className="rating rating-xs">
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
              </div>{" "}
              (2)
            </div>
            <div className=" mt-1">
              <span className="line-through text-gray-600 mr-2 text-xs">$118</span>
              <span className="text-bas font-bold text-[#121828]">$115</span>
            </div>
          </div>
        </div>


        <div className="max-w-2xl flex gap-5 items-center hover:shadow-lg rounded-xl relative group py-3 px-10">
          <div className="">
            <span className="absolute top-4 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-tl-lg">
              -10%
            </span>
            <img
              src="https://i.ibb.co.com/Z5n4VRX/slide2.jpg"
              alt="Charger"
              className="rounded-xl mx-auto"
            />
          </div>

          <div>
            <div className=" font-medium text-sm text-[#121828] hover:text-blue-500">
              Women's long-sleeve lightweight <br /> french terry fleece quarter-zip
              top
            </div>
            <div className=" mt-1 text-gray-400 text-sm">
              <div className="rating rating-xs">
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
              </div>{" "}
              (2)
            </div>
            <div className=" mt-1">
              <span className="line-through text-gray-600 mr-2 text-xs">$118</span>
              <span className="text-bas font-bold text-[#121828]">$115</span>
            </div>
          </div>
        </div>

        <div className="max-w-2xl flex gap-5 items-center hover:shadow-lg rounded-xl relative group py-3 px-10">
          <div className="">
            <span className="absolute top-4 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-tl-lg">
              -10%
            </span>
            <img
              src="https://i.ibb.co.com/Xdxvqg2/slide4.jpg"
              alt="Charger"
              className="rounded-xl mx-auto"
            />
          </div>

          <div>
            <div className=" font-medium text-sm text-[#121828] hover:text-blue-500">
              Women's long-sleeve lightweight <br /> french terry fleece quarter-zip
              top
            </div>
            <div className=" mt-1 text-gray-400 text-sm">
              <div className="rating rating-xs">
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
              </div>{" "}
              (2)
            </div>
            <div className=" mt-1">
              <span className="line-through text-gray-600 mr-2 text-xs">$118</span>
              <span className="text-bas font-bold text-[#121828]">$115</span>
            </div>
          </div>
        </div>
      </div>
      {/* Card 3 */}
      <div className="bg-[#f5f6f8] w-[400px] px-3 py-8 ">
        <button className=" ml-56 p-2 whitespace-nowrap text-xs btn bg-red-600 text-white uppercase border-none">Use Cupon : <span className="lowercase">axyfji</span></button>
        <h2 className="text-[#121828]  font-bold">Delux Online</h2>
        <p className="text-xs text-black">10 Product</p>
        
        <div className="max-w-2xl flex gap-5 items-center hover:shadow-lg rounded-xl relative group py-3 px-10">
          <div className="">
            <span className="absolute top-4 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-tl-lg">
              -10%
            </span>
            <img
              src="https://i.ibb.co.com/Z5n4VRX/slide2.jpg"
              alt="Charger"
              className="rounded-xl mx-auto"
            />
          </div>

          <div>
            <div className=" font-medium text-sm text-[#121828] hover:text-blue-500">
              Women's long-sleeve lightweight <br /> french terry fleece quarter-zip
              top
            </div>
            <div className=" mt-1 text-gray-400 text-sm">
              <div className="rating rating-xs">
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
              </div>{" "}
              (2)
            </div>
            <div className=" mt-1">
              <span className="line-through text-gray-600 mr-2 text-xs">$118</span>
              <span className="text-bas font-bold text-[#121828]">$115</span>
            </div>
          </div>
        </div>


        <div className="max-w-2xl flex gap-5 items-center hover:shadow-lg rounded-xl relative group py-3 px-10">
          <div className="">
            <span className="absolute top-4 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-tl-lg">
              -10%
            </span>
            <img
              src="https://i.ibb.co.com/Xdxvqg2/slide4.jpg"
              alt="Charger"
              className="rounded-xl mx-auto"
            />
          </div>

          <div>
            <div className=" font-medium text-sm text-[#121828] hover:text-blue-500">
              Women's long-sleeve lightweight <br /> french terry fleece quarter-zip
              top
            </div>
            <div className=" mt-1 text-gray-400 text-sm">
              <div className="rating rating-xs">
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
              </div>{" "}
              (2)
            </div>
            <div className=" mt-1">
              <span className="line-through text-gray-600 mr-2 text-xs">$118</span>
              <span className="text-bas font-bold text-[#121828]">$115</span>
            </div>
          </div>
        </div>
        <div className="max-w-2xl flex gap-5 items-center hover:shadow-lg rounded-xl relative group py-3 px-10">
          <div className="">
            <span className="absolute top-4 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-tl-lg">
              -10%
            </span>
            <img
              src="https://i.ibb.co.com/Z5n4VRX/slide2.jpg"
              alt="Charger"
              className="rounded-xl mx-auto"
            />
          </div>

          <div>
            <div className=" font-medium text-sm text-[#121828] hover:text-blue-500">
              Women's long-sleeve lightweight <br /> french terry fleece quarter-zip
              top
            </div>
            <div className=" mt-1 text-gray-400 text-sm">
              <div className="rating rating-xs">
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
              </div>{" "}
              (2)
            </div>
            <div className=" mt-1">
              <span className="line-through text-gray-600 mr-2 text-xs">$118</span>
              <span className="text-bas font-bold text-[#121828]">$115</span>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default SectionSix_carusol;
