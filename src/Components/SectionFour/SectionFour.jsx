

const SectionFour = () => {
  return (
    <div className="w-full max-w-5xl lg:max-w-6xl  mx-auto items-center">
      {/* List Iteam */}
      <div className="text-center mb-5">
         <h2 className="text-xl font-semibold text-black">Recommended For You</h2>
        <ul className="menu  menu-horizontal rounded-box text-black">
          <li className=" hover:border-b-2 border-blue-600">
            <a>Featured Product</a>
          </li>
          <li className=" hover:border-b-2 border-blue-600">
            <a>Top Rated</a>
          </li>
          <li className=" hover:border-b-2 border-blue-600">
            <a>Best Selling</a>
          </li>
          <li className=" hover:border-b-2 border-blue-600">
            <a>Latest Product</a>
          </li>
          <li className=" hover:border-b-2 border-blue-600">
            <a>New Arrivals</a>
          </li>
        </ul>
      </div>

        {/* Card Iteam */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 ">
        {/* First */}
        <div className="max-w-xs hover:shadow-lg  text-white rounded-xl relative group p-4 w-52">
          <span className="absolute top-2 left-2 bg-red-600 text-white text-sm px-2 py-1 rounded-full">
            -$233
          </span>

          <img
            src="data:image/jpeg;base64,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"
            alt="Charger"
            className="rounded-xl mx-auto w-48"
          />

          <div className="absolute top-3 right-[14px] flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
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

          <div className="text-center mt-1 text-gray-500 text-sm">
            Tech Shop
          </div>

          <div className="text-center text-black font-semibold truncate">
            Yuzu Fast Charger 27W...
          </div>

          <div className="text-center mt-1">
            <span className="line-through text-gray-500 mr-2">$118</span>
            <span className="text-lg font-bold text-black">$115</span>
          </div>
        </div>
        {/* Second */}
        <div className="max-w-xs hover:shadow-lg text-white rounded-xl relative group p-4 w-52">
          <span className="absolute top-2 left-2 bg-red-600 text-white text-sm px-2 py-1 rounded-full">
            -$233
          </span>

          <img
            src="https://martcms-dev-react.6amdev.xyz/_next/image?url=https%3A%2F%2Fmartcms-dev.6amdev.xyz%2Fstorage%2Fapp%2Fpublic%2Fproduct%2Fthumbnail%2F2022-04-19-625e6fdf2fbb9.png&w=640&q=75"
            alt="Charger"
            className="rounded-xl mx-auto w-48"
          />

          <div className="absolute top-3 right-[14px] flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
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

          <div className="text-center mt-1 text-gray-500 text-sm">
            Tech Shop
          </div>

          <div className="text-center text-black font-semibold truncate">
            Yuzu Fast Charger 27W...
          </div>

          <div className="text-center mt-1">
            <span className="line-through text-gray-500 mr-2">$118</span>
            <span className="text-lg font-bold text-black">$115</span>
          </div>
        </div>
        {/* Third */}
        <div className="max-w-xs hover:shadow-lg text-white rounded-xl relative group p-4 w-52">
          <span className="absolute top-2 left-2 bg-red-600 text-white text-sm px-2 py-1 rounded-full">
            -$233
          </span>

          <img
            src="https://martcms-dev-react.6amdev.xyz/_next/image?url=https%3A%2F%2Fmartcms-dev.6amdev.xyz%2Fstorage%2Fapp%2Fpublic%2Fproduct%2Fthumbnail%2F2022-04-13-62566e1a35a9c.png&w=640&q=75"
            alt="Charger"
            className="rounded-xl mx-auto w-48"
          />

          <div className="absolute top-3 right-[14px] flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
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

          <div className="text-center mt-1 text-gray-500 text-sm">
            Tech Shop
          </div>

          <div className="text-center text-black font-semibold truncate">
            Yuzu Fast Charger 27W...
          </div>

          <div className="text-center mt-1">
            <span className="line-through text-gray-500 mr-2">$118</span>
            <span className="text-lg font-bold text-black">$115</span>
          </div>
        </div>
        {/* Fourth */}
        <div className="max-w-xs hover:shadow-lg text-white rounded-xl relative group p-4 w-52">
          <span className="absolute top-2 left-2 bg-red-600 text-white text-sm px-2 py-1 rounded-full">
            -$233
          </span>

          <img
            src="https://martcms-dev-react.6amdev.xyz/_next/image?url=https%3A%2F%2Fmartcms-dev.6amdev.xyz%2Fstorage%2Fapp%2Fpublic%2Fproduct%2Fthumbnail%2F2022-04-13-62566e1a35a9c.png&w=640&q=75"
            alt="Charger"
            className="rounded-xl mx-auto w-48"
          />

          <div className="absolute top-3 right-[14px] flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
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

          <div className="text-center mt-1 text-gray-500 text-sm">
            Tech Shop
          </div>

          <div className="text-center text-black font-semibold truncate">
            Yuzu Fast Charger 27W...
          </div>

          <div className="text-center mt-1">
            <span className="line-through text-gray-500 mr-2">$118</span>
            <span className="text-lg font-bold text-black">$115</span>
          </div>
        </div>
        {/* Fifth */}
        <div className="max-w-xs hover:shadow-lg text-white rounded-xl relative group p-4 w-52">
          <span className="absolute top-2 left-2 bg-red-600 text-white text-sm px-2 py-1 rounded-full">
            -$233
          </span>

          <img
            src="https://martcms-dev-react.6amdev.xyz/_next/image?url=https%3A%2F%2Fmartcms-dev.6amdev.xyz%2Fstorage%2Fapp%2Fpublic%2Fproduct%2Fthumbnail%2F2022-04-13-62566e1a35a9c.png&w=640&q=75"
            alt="Charger"
            className="rounded-xl mx-auto w-48"
          />

          <div className="absolute top-3 right-[14px] flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
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

          <div className="text-center mt-1 text-gray-500 text-sm">
            Tech Shop
          </div>

          <div className="text-center text-black font-semibold truncate">
            Yuzu Fast Charger 27W...
          </div>

          <div className="text-center mt-1">
            <span className="line-through text-gray-500 mr-2">$118</span>
            <span className="text-lg font-bold text-black">$115</span>
          </div>
        </div>
        {/* Sixth */}
        <div className="max-w-xs hover:shadow-lg text-white rounded-xl relative group p-4 w-52">
          <span className="absolute top-2 left-2 bg-red-600 text-white text-sm px-2 py-1 rounded-full">
            -$233
          </span>

          <img
            src="https://martcms-dev-react.6amdev.xyz/_next/image?url=https%3A%2F%2Fmartcms-dev.6amdev.xyz%2Fstorage%2Fapp%2Fpublic%2Fproduct%2Fthumbnail%2F2022-04-13-62566e1a35a9c.png&w=640&q=75"
            alt="Charger"
            className="rounded-xl mx-auto w-48"
          />

          <div className="absolute top-3 right-[14px] flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
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

          <div className="text-center mt-1 text-gray-500 text-sm">
            Tech Shop
          </div>

          <div className="text-center text-black font-semibold truncate">
            Yuzu Fast Charger 27W...
          </div>

          <div className="text-center mt-1">
            <span className="line-through text-gray-500 mr-2">$118</span>
            <span className="text-lg font-bold text-black">$115</span>
          </div>
        </div>
        {/* Seven */}
        <div className="max-w-xs hover:shadow-lg text-white rounded-xl relative group p-4 w-52">
          <span className="absolute top-2 left-2 bg-red-600 text-white text-sm px-2 py-1 rounded-full">
            -$233
          </span>

          <img
            src="https://martcms-dev-react.6amdev.xyz/_next/image?url=https%3A%2F%2Fmartcms-dev.6amdev.xyz%2Fstorage%2Fapp%2Fpublic%2Fproduct%2Fthumbnail%2F2022-04-13-62566e1a35a9c.png&w=640&q=75"
            alt="Charger"
            className="rounded-xl mx-auto w-48"
          />

          <div className="absolute top-3 right-[14px] flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
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

          <div className="text-center mt-1 text-gray-500 text-sm">
            Tech Shop
          </div>

          <div className="text-center text-black font-semibold truncate">
            Yuzu Fast Charger 27W...
          </div>

          <div className="text-center mt-1">
            <span className="line-through text-gray-500 mr-2">$118</span>
            <span className="text-lg font-bold text-black">$115</span>
          </div>
        </div>
        {/* Eight */}
        <div className="max-w-xs hover:shadow-lg text-white rounded-xl relative group p-4 w-52">
          <span className="absolute top-2 left-2 bg-red-600 text-white text-sm px-2 py-1 rounded-full">
            -$233
          </span>

          <img
            src="https://martcms-dev-react.6amdev.xyz/_next/image?url=https%3A%2F%2Fmartcms-dev.6amdev.xyz%2Fstorage%2Fapp%2Fpublic%2Fproduct%2Fthumbnail%2F2022-04-13-62566e1a35a9c.png&w=640&q=75"
            alt="Charger"
            className="rounded-xl mx-auto w-48"
          />

          <div className="absolute top-3 right-[14px] flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
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

          <div className="text-center mt-1 text-gray-500 text-sm">
            Tech Shop
          </div>

          <div className="text-center text-black font-semibold truncate">
            Yuzu Fast Charger 27W...
          </div>

          <div className="text-center mt-1">
            <span className="line-through text-gray-500 mr-2">$118</span>
            <span className="text-lg font-bold text-black">$115</span>
          </div>
        </div>
        {/* Nine */}
        <div className="max-w-xs hover:shadow-lg text-white rounded-xl relative group p-4 w-52">
          <span className="absolute top-2 left-2 bg-red-600 text-white text-sm px-2 py-1 rounded-full">
            -$233
          </span>

          <img
            src="https://martcms-dev-react.6amdev.xyz/_next/image?url=https%3A%2F%2Fmartcms-dev.6amdev.xyz%2Fstorage%2Fapp%2Fpublic%2Fproduct%2Fthumbnail%2F2022-04-13-62566e1a35a9c.png&w=640&q=75"
            alt="Charger"
            className="rounded-xl mx-auto w-48"
          />

          <div className="absolute top-3 right-[14px] flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
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

          <div className="text-center mt-1 text-gray-500 text-sm">
            Tech Shop
          </div>

          <div className="text-center text-black font-semibold truncate">
            Yuzu Fast Charger 27W...
          </div>

          <div className="text-center mt-1">
            <span className="line-through text-gray-500 mr-2">$118</span>
            <span className="text-lg font-bold text-black">$115</span>
          </div>
        </div>
        {/* Ten */}
        <div className="max-w-xs hover:shadow-lg text-white rounded-xl relative group p-4 w-52">
          <span className="absolute top-2 left-2 bg-red-600 text-white text-sm px-2 py-1 rounded-full">
            -$233
          </span>

          <img
            src="https://martcms-dev-react.6amdev.xyz/_next/image?url=https%3A%2F%2Fmartcms-dev.6amdev.xyz%2Fstorage%2Fapp%2Fpublic%2Fproduct%2Fthumbnail%2F2022-04-13-62566e1a35a9c.png&w=640&q=75"
            alt="Charger"
            className="rounded-xl mx-auto w-48"
          />

          <div className="absolute top-3 right-[14px] flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
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

          <div className="text-center mt-1 text-gray-500 text-sm">
            Tech Shop
          </div>

          <div className="text-center text-black font-semibold truncate">
            Yuzu Fast Charger 27W...
          </div>

          <div className="text-center mt-1">
            <span className="line-through text-gray-500 mr-2">$118</span>
            <span className="text-lg font-bold text-black">$115</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
