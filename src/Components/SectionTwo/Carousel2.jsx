import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  { name: "Computer", image: "https://martcms-dev-react.6amdev.xyz/_next/image?url=https%3A%2F%2Fmartcms-dev.6amdev.xyz%2Fstorage%2Fapp%2Fpublic%2Fcategory%2F2023-06-13-64881b1462dd9.png&w=64&q=75" },
  { name: "Phones & Gadgets", image: "https://martcms-dev-react.6amdev.xyz/_next/image?url=https%3A%2F%2Fmartcms-dev.6amdev.xyz%2Fstorage%2Fapp%2Fpublic%2Fcategory%2F2023-06-13-6488655ea7f52.png&w=64&q=75" },
  { name: "Beauty, Health", image: "https://martcms-dev-react.6amdev.xyz/_next/image?url=https%3A%2F%2Fmartcms-dev.6amdev.xyz%2Fstorage%2Fapp%2Fpublic%2Fcategory%2F2023-06-13-64881e123c2dd.png&w=64&q=75" },
  { name: "Bags & Shoes", image: "https://martcms-dev-react.6amdev.xyz/_next/image?url=https%3A%2F%2Fmartcms-dev.6amdev.xyz%2Fstorage%2Fapp%2Fpublic%2Fcategory%2F2023-06-13-64881969b0222.png&w=64&q=75" },
  { name: "Mobile Accessories", image: "https://martcms-dev-react.6amdev.xyz/_next/image?url=https%3A%2F%2Fmartcms-dev.6amdev.xyz%2Fstorage%2Fapp%2Fpublic%2Fcategory%2F2023-06-13-64881db930473.png&w=64&q=75" },
  { name: "Home, Pet", image: "https://martcms-dev-react.6amdev.xyz/_next/image?url=https%3A%2F%2Fmartcms-dev.6amdev.xyz%2Fstorage%2Fapp%2Fpublic%2Fcategory%2F2023-06-13-64881a1265b65.png&w=64&q=75" },
  { name: "eBook", image: "https://martcms-dev-react.6amdev.xyz/_next/image?url=https%3A%2F%2Fmartcms-dev.6amdev.xyz%2Fstorage%2Fapp%2Fpublic%2Fcategory%2F2023-06-13-64881f86528da.png&w=64&q=75" },
  { name: "Toys, Kids", image: "https://martcms-dev-react.6amdev.xyz/_next/image?url=https%3A%2F%2Fmartcms-dev.6amdev.xyz%2Fstorage%2Fapp%2Fpublic%2Fcategory%2F2023-06-13-6488209a179ec.png&w=64&q=75" },
  { name: "Home Tools", image: "https://martcms-dev-react.6amdev.xyz/_next/image?url=https%3A%2F%2Fmartcms-dev.6amdev.xyz%2Fstorage%2Fapp%2Fpublic%2Fcategory%2F2023-06-13-6488211a870e0.png&w=64&q=75" },
  { name: "Home Tools", image: "https://martcms-dev-react.6amdev.xyz/_next/image?url=https%3A%2F%2Fmartcms-dev.6amdev.xyz%2Fstorage%2Fapp%2Fpublic%2Fcategory%2F2023-06-13-6488211a870e0.png&w=64&q=75" },
  { name: "Home Tools", image: "https://martcms-dev-react.6amdev.xyz/_next/image?url=https%3A%2F%2Fmartcms-dev.6amdev.xyz%2Fstorage%2Fapp%2Fpublic%2Fcategory%2F2023-06-13-6488211a870e0.png&w=64&q=75" },
  { name: "Home Tools", image: "https://martcms-dev-react.6amdev.xyz/_next/image?url=https%3A%2F%2Fmartcms-dev.6amdev.xyz%2Fstorage%2Fapp%2Fpublic%2Fcategory%2F2023-06-13-6488211a870e0.png&w=64&q=75" },
  { name: "Home Tools", image: "https://martcms-dev-react.6amdev.xyz/_next/image?url=https%3A%2F%2Fmartcms-dev.6amdev.xyz%2Fstorage%2Fapp%2Fpublic%2Fcategory%2F2023-06-13-6488211a870e0.png&w=64&q=75" },
  { name: "Home Tools", image: "https://martcms-dev-react.6amdev.xyz/_next/image?url=https%3A%2F%2Fmartcms-dev.6amdev.xyz%2Fstorage%2Fapp%2Fpublic%2Fcategory%2F2023-06-13-6488211a870e0.png&w=64&q=75" },
];
// 
const Carousel2 = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative p-4 rounded-lg lg:max-w-[1210px] sm:max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 flex  md:flex-row items-center  gap-y-2">
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 hover:bg-blue-900 text-slate-400 p-2 rounded-full z-10"
        onClick={() => scroll("left")}
      >
        <ChevronLeft size={20} />
      </button>

      <div
        ref={scrollRef}
        className="flex overflow-hidden space-x-3 w-[350px] lg:w-[900px]"
      >
        {categories.map((cat, idx) => (

          // Cart
          <div className="max-w-xs text-white rounded-xl relative group p-6">
          <span className="absolute top-2 left-2 bg-red-600 text-white text-sm px-2 py-1 rounded-full">
            -$233
          </span>

          <img
            src={cat.image}
            alt="Charger"
            className="rounded-xl mx-auto"
          />

          <div className="absolute top-3 right-[-14px] flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
            <button className="w-9 h-9 bg-white border-2 rounded-full flex items-center justify-center">
              ❤️
            </button>
            <button className="w-9 h-9 bg-white border-2 rounded-full flex items-center justify-center ">
              🛒
            </button>
            <button className="w-9 h-9 bg-white border-2 rounded-full flex items-center justify-center ">
              👁️
            </button>
          </div>

          <div className="flex justify-center mt-4 text-gray-400 text-sm">
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
            (0)
          </div>

          <div className="text-center mt-1 text-[#65748B] text-sm">
            Tech Shop
          </div>

          <div className="text-center text-[#121828] font-semibold truncate">
            {cat.name}
          </div>

          <div className="text-center mt-1">
            <span className="line-through text-gray-400 mr-2">$118</span>
            <span className="text-lg font-bold text-[#121828]">$115</span>
          </div>
        </div>
        ))}
      </div>

      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 hover:bg-blue-900 hover:text-slate-400 bg-blue-400 text-white p-2 rounded-full z-10"
        onClick={() => scroll("right")}
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default Carousel2;
