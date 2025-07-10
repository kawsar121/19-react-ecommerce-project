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
const Carusol = () => {
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
    <div className="relative bg-[#0F172A] p-4 rounded-lg lg:max-w-[1210px] sm:max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 flex  md:flex-row items-center  gap-y-2">
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-900 text-white p-2 rounded-full z-10"
        onClick={() => scroll("left")}
      >
        <ChevronLeft size={20} />
      </button>

      <div
        ref={scrollRef}
        className="flex overflow-hidden space-x-4"
      >
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center min-w-[100px] text-white"
          >
            <img src={cat.image} alt={cat.name} className="w-14 h-14  object-contain mb-2" />
            <p className="text-xs text-center truncate w-20">{cat.name}</p>
          </div>
        ))}
      </div>

      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-900 text-white p-2 rounded-full z-10"
        onClick={() => scroll("right")}
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default Carusol;
