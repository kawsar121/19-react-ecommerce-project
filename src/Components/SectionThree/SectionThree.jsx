const SectionThree = () => {
  return (
    <div className="grid gap-20 lg:flex  mb-10 w-full max-w-5xl lg:max-w-7xl justify-center  mx-auto">
      {/* Card */}
      <div className="card bg-[#eff7ff] w-[25rem] lg:w-[30rem] border-2 border-[#1455ac4a]">
          <p className="text-blue-600 text-2xl text-center lg:hidden mt-2">Deal Of The Day</p>
        <figure className="px-10 pt-[0.25rem] ">
         <p className="text-blue-600  left-32 mb-80 absolute text-4xl hidden lg:block">Deal Of The Day</p>
          <img
            src="https://martcms-dev-react.6amdev.xyz/_next/image?url=https%3A%2F%2Fmartcms-dev.6amdev.xyz%2Fstorage%2Fapp%2Fpublic%2Fproduct%2F2023-06-13-648861cfa6410.png&w=384&q=75"
            alt="Shoes"
            className="rounded-xl "
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Shoes!</h2>
          <p className="flex-grow-0">Stone Crystal Unique Design <br /> Necklace Woman Exquisite Wild Short Clavicle Chain</p>
          <p className="text-lg font-semibold flex-grow-0">$60 <span className="text-2xl  font-bold text-blue-500">$50</span></p>
          <div className="card-actions">
            <button className="btn btn-primary px-16 py-5">Buy Now</button>
          </div>
        </div>
      </div>

      {/* list */}
      <div className="grid lg:grid-cols-2 gap-9 items-center ml-8 lg:ml-0">
        {/* First card */}
         <div className="max-w-xs flex gap-2 items-center bg-[#0F172A] text-white rounded-xl relative group p-6">
          <div className="">
            <span className="absolute top-4 left-2 bg-red-600 text-white text-sm px-2 py-1 rounded-full">
              -$233
            </span>

            <img src="https://martcms-dev-react.6amdev.xyz/_next/image?url=https%3A%2F%2Fmartcms-dev.6amdev.xyz%2Fstorage%2Fapp%2Fpublic%2Fproduct%2Fthumbnail%2F2022-04-20-625fe69f72cce.png&w=96&q=75" alt="Charger" className="rounded-xl mx-auto" />
          </div>

          <div>
            <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
              <button className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700">
                ❤️
              </button>
              <button className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700">
                🛒
              </button>
              <button className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700">
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

            <div className="text-center mt-1 text-gray-400 text-sm">
              Tech Shop
            </div>

            <div className="text-center font-semibold truncate">Bangla</div>

            <div className="text-center mt-1">
              <span className="line-through text-gray-400 mr-2">$118</span>
              <span className="text-lg font-bold text-white">$115</span>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className="max-w-xs flex gap-2 items-center bg-[#0F172A] text-white rounded-xl relative group p-6">
          <div className="">
            <span className="absolute top-4 left-2 bg-red-600 text-white text-sm px-2 py-1 rounded-full">
              -$233
            </span>

            <img src="https://martcms-dev-react.6amdev.xyz/_next/image?url=https%3A%2F%2Fmartcms-dev.6amdev.xyz%2Fstorage%2Fapp%2Fpublic%2Fproduct%2Fthumbnail%2F2022-04-20-625fe69f72cce.png&w=96&q=75" alt="Charger" className="rounded-xl mx-auto" />
          </div>

          <div>
            <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
              <button className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700">
                ❤️
              </button>
              <button className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700">
                🛒
              </button>
              <button className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700">
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

            <div className="text-center mt-1 text-gray-400 text-sm">
              Tech Shop
            </div>

            <div className="text-center font-semibold truncate">Bangla</div>

            <div className="text-center mt-1">
              <span className="line-through text-gray-400 mr-2">$118</span>
              <span className="text-lg font-bold text-white">$115</span>
            </div>
          </div>
        </div>

        {/* Third Card */}
        <div className="max-w-xs flex gap-2 items-center bg-[#0F172A] text-white rounded-xl relative group p-6">
          <div className="">
            <span className="absolute top-4 left-2 bg-red-600 text-white text-sm px-2 py-1 rounded-full">
              -$233
            </span>

            <img src="https://martcms-dev-react.6amdev.xyz/_next/image?url=https%3A%2F%2Fmartcms-dev.6amdev.xyz%2Fstorage%2Fapp%2Fpublic%2Fproduct%2Fthumbnail%2F2022-04-20-625fe69f72cce.png&w=96&q=75" alt="Charger" className="rounded-xl mx-auto" />
          </div>

          <div>
            <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
              <button className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700">
                ❤️
              </button>
              <button className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700">
                🛒
              </button>
              <button className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700">
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

            <div className="text-center mt-1 text-gray-400 text-sm">
              Tech Shop
            </div>

            <div className="text-center font-semibold truncate">Bangla</div>

            <div className="text-center mt-1">
              <span className="line-through text-gray-400 mr-2">$118</span>
              <span className="text-lg font-bold text-white">$115</span>
            </div>
          </div>
        </div>

        {/* Four Card */}
        <div className="max-w-xs flex gap-2 items-center bg-[#0F172A] text-white rounded-xl relative group p-6">
          <div className="">
            <span className="absolute top-4 left-2 bg-red-600 text-white text-sm px-2 py-1 rounded-full">
              -$233
            </span>

            <img src="https://martcms-dev-react.6amdev.xyz/_next/image?url=https%3A%2F%2Fmartcms-dev.6amdev.xyz%2Fstorage%2Fapp%2Fpublic%2Fproduct%2Fthumbnail%2F2022-04-20-625fe69f72cce.png&w=96&q=75" alt="Charger" className="rounded-xl mx-auto" />
          </div>

          <div>
            <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
              <button className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700">
                ❤️
              </button>
              <button className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700">
                🛒
              </button>
              <button className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700">
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

            <div className="text-center mt-1 text-gray-400 text-sm">
              Tech Shop
            </div>

            <div className="text-center font-semibold truncate">Bangla</div>

            <div className="text-center mt-1">
              <span className="line-through text-gray-400 mr-2">$118</span>
              <span className="text-lg font-bold text-white">$115</span>
            </div>
          </div>
        </div>

        {/* Fifth Card */}
        <div className="max-w-xs flex gap-2 items-center bg-[#0F172A] text-white rounded-xl relative group p-6">
          <div className="">
            <span className="absolute top-4 left-2 bg-red-600 text-white text-sm px-2 py-1 rounded-full">
              -$233
            </span>

            <img src="https://martcms-dev-react.6amdev.xyz/_next/image?url=https%3A%2F%2Fmartcms-dev.6amdev.xyz%2Fstorage%2Fapp%2Fpublic%2Fproduct%2Fthumbnail%2F2022-04-20-625fe69f72cce.png&w=96&q=75" alt="Charger" className="rounded-xl mx-auto" />
          </div>

          <div>
            <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
              <button className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700">
                ❤️
              </button>
              <button className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700">
                🛒
              </button>
              <button className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700">
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

            <div className="text-center mt-1 text-gray-400 text-sm">
              Tech Shop
            </div>

            <div className="text-center font-semibold truncate">Bangla</div>

            <div className="text-center mt-1">
              <span className="line-through text-gray-400 mr-2">$118</span>
              <span className="text-lg font-bold text-white">$115</span>
            </div>
          </div>
        </div>

        {/* Six Card */}
        <div className="max-w-xs flex gap-2 items-center bg-[#0F172A] text-white rounded-xl relative group p-6">
          <div className="">
            <span className="absolute top-4 left-2 bg-red-600 text-white text-sm px-2 py-1 rounded-full">
              -$233
            </span>

            <img src="https://martcms-dev-react.6amdev.xyz/_next/image?url=https%3A%2F%2Fmartcms-dev.6amdev.xyz%2Fstorage%2Fapp%2Fpublic%2Fproduct%2Fthumbnail%2F2022-04-20-625fe69f72cce.png&w=96&q=75" alt="Charger" className="rounded-xl mx-auto" />
          </div>

          <div>
            <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
              <button className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700">
                ❤️
              </button>
              <button className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700">
                🛒
              </button>
              <button className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700">
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

            <div className="text-center mt-1 text-gray-400 text-sm">
              Tech Shop
            </div>

            <div className="text-center font-semibold truncate">Bangla</div>

            <div className="text-center mt-1">
              <span className="line-through text-gray-400 mr-2">$118</span>
              <span className="text-lg font-bold text-white">$115</span>
            </div>
          </div>
        </div>

        

      </div>
    </div>
  );
};

export default SectionThree;
