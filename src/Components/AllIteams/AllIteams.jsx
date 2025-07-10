import React from "react";

const AllIteams = () => {
  return (
    <div className="max-w-[1000px] lg:max-w-[1210px] mx-auto my-9  bg-base-100 w-full px-4 sm:px-6 lg:px-2 flex  md:flex-row  gap-5 lg:gap-20 py-2 gap-y-2 mt-3 justify-center">
      <div className="hidden md:block bg-blue-950 p-5 rounded-lg ">
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
          <h1 className="text-2xl text-white mt-4 font-medium">Categories</h1>
          <div className="mt-7 space-y-3 max-w-md mx-auto h-56 overflow-scroll mb-10">
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
                    1
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
                    1
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
                    1
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
                    1
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
                    1
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
          <h1 className="text-2xl text-white mt-4 font-medium">Brands</h1>
          <div className="mt-7 space-y-3 max-w-md mx-auto h-56 overflow-scroll">
            {/* Cheek one */}
            <div className="form-control ">
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
                    1
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
                    1
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
                    1
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
                    1
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
                    1
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
          <h1 className="text-2xl text-white mt-4 font-medium">Gosarry</h1>
          <div className="mt-7 space-y-3 max-w-md mx-auto h-56 overflow-scroll">
            {/* Cheek one */}
            <div className="form-control ">
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
                    1
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
                    1
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
                    1
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
                    1
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
                    1
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
          <h1 className="text-2xl text-white mt-4 font-medium">Electric</h1>
          <div className="mt-7 space-y-3 max-w-md mx-auto h-56 overflow-scroll">
            {/* Cheek one */}
            <div className="form-control ">
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
                    1
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
                    1
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
                    1
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
                    1
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
                    1
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
          <h1 className="text-2xl text-white mt-4 font-medium">
            Womens Fashion
          </h1>
          <div className="mt-7 space-y-3 max-w-md mx-auto h-56 overflow-scroll">
            {/* Cheek one */}
            <div className="form-control ">
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
                    1
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
                    1
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
                    1
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
                    1
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
                    1
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

      {/* Cart */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {/* First */}
        <div className="max-w-xs bg-[#0F172A] text-white rounded-xl relative group p-4">
          <span className="absolute top-2 left-2 bg-red-600 text-white text-sm px-2 py-1 rounded-full">
            -$233
          </span>

          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITERUQEhIVEhUVEhEXExcVFxgVFRYVGRUXFhUSFhUYHSggGBomGxYTITEiJSorLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGi8lICYvLS8tLS8tNS0tLS0tNS0tLS0tLS0tLS0tLS0tLS0tLSstNS0vLS0uLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYCAwQHAf/EAEcQAAEDAgMEBgQKBgoDAAAAAAEAAgMEERIhMQUGQVETImFxgZEyUpKhBxQVI0JigpOx0VVywdLT4RYzQ0RTVJSisvAkc+L/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAgMEAQX/xAAiEQEAAgIBBAMBAQAAAAAAAAAAAQIDERIhMTJRE0FhInH/2gAMAwEAAhEDEQA/APcUREBERAREQEREBERARFz1dYyO2K+d7WF1yZ13diNuhFGnbUd7AOJtfID819+V2eq/yH5rnOvt3hb0kUUd8rs9V/kPzWMW243C9nauHDUEg8eYK5zr7OFvSTRa6eYPaHDQ39xt+xbFNEREQEREBERAREQEREBERAREQEREBERAREQEREBVjenascUrWPjlkPR3HRsc4C7iMyNNPcrOoHa+xop58UgvhiYB4ueT+xVZvFZi1y6q1Ht6jLndI2aOwbYEvYdXXNmu7vJbflrZ/rTfeS/vLDbWzoYJQG11HSAxt+bqI4nOPWf84C94Nje3Lqrhxs/S+zPuYP4qy9WrdUl8tbP9ab7yX99aIN5IMw2CZ4D3gOHXuA42OJz7nLmuPpY/0xsz7qn/AIin9m7sU7oWOLmTlwLukYGhj8RLsTQ02Dc8rJ1Jmv2n93qgSU7Hta5oJks1ws4ddwsQpJR2wIAyBsbdGvmA7hK8BSK208YY7eUiIikiIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICqG9W+NLRT9HO/C50bHAfVu4X8wfJdm9O1J2OZT0tuld1nOIDsLNBkcrk39kql7wbozV1Q58xc98bIoy5kvQ3GHpLFoYRkZHZ5arPlvWf5aMVJ8pWHYs1DtEvqhEya2CPFIwEjCC7CCRp1z5qWGwKMf3WH7tv5Ktbq7uy0IfFGCRI7pCHyGQg4Ws9PCPVGVvFT4FV6g9r+Szcpjsumv66RselH93i9hv5KpM+EOgpy6mc4sMUszS0NyFpHWAtwtZWV0VTY5NGXP+SpL/g2a8ukcxznSSSyOd8Zkjze8utga2wtcDwXY693NRH29G3YrmT0zJ4ziZIZXNPMGR6lV51syCsp6cR0zsDaeR8fREiQECz74yA43xlX3Z9WJYmStyDmg24g8WntBuPBa8V4mNR9M+SkxO3QiIrVQiIgIiICIiAiIgIiICIiAiIgIiICIiAhKKF3j2m1kboQ7ruab/Uaci9x4ZXsuWtERuXYjc6cNHVNc58x1lddvPAMowBr6IBtzcVzmaWOeZ75IoopHMc25LpjaJjCMFgG5tJvc9wVel2yWgtg7A6R3DO17/RH/AHJRkrgScRdM7jYkN8TqfcsERMztumIhbp944B9KSQ874fDqWWj+kcf+ET3uc78TdVhokPohrO4Z+a1y0z75ueTbL2mi3nhVnxWQ5UW+PeSLiwt7nuHu0XbHtaN4syYxnhiAe3x4+8KjRU8gFw52ZN755jI/gvt3j0mh3aOqf5pOKxyqvOy45I2SGRzH45nvxR3w2LWgXBzBs3+akN3pgHSRcL9Izudk8D7Qv9tUKj2o5hGB5uT6J9Ly4qf2TthnSCS2F4xBzdA4HUW4G4B8FGk8LbdvXdV5RaaSqZI3Gw3HvB5EcCty3MQiIgIiICIiAiIgIiICIiAiIgIiICItVTO2NjpHmzWNLnHkALkoIveTbQp2BrbGV98AOgA9KR/JrQvP3F0pcS44AbyPPpPdz7+Q4D37KmeSplLzk+XCbH+zi1ji8uu7mSFJUWz8ZDWj5tvo/WPF5WS0zktqGutYx13KOZSOkGBrcMfBvPtdzUjs3YhxFjhYjNuWrDp4g5HwPFWuh2Y1o0XTUUt8Lm2DmG4voQcnMNuBHkQ052WmtIrHRntebSiINhAcEqNlNDm5A5OAvpcvjDfeQrBdYSNadQD394P4geSlLlZ1PVDjYjQLa63PMk3J8yVx1OxBZWVtgLBaKyDG3BfqkjH2t4t8cgewlHNqDJsckY7WBN2cCG8D3nXxtwXJJCb2fk76L/wDvzXpM1OCoTaeygQclXfHFllMk1QOydsSQvxEXI/rG+u0fSH1hr2+a9DpahsjGyMOJrgCD2LzOthw6nC5voOOVxy7SFN7l7TwSfFzkyTE6IerIP6yPu+kP5qrHaazxlZlrExyhdkRFpZhERAREQEREBERAREQEREBERAVW38qx0cdPfKRxdL/AOqIY3jxOEK0qgb3vx1Tm8Gtgi9t/SPPs2VeWdVWYo3ZzbMoOkBL2gue7iPRJzeRy1Dfsq10tG+PrMs4ZdQ2HsOH4HXmFx7Ch6oJ9Uebus73lTgco4Y6bTz266fIKxrrgXa4ek1ws4eHEdouDwJWZetZcqfUbXr6N7jURfHabESJYWhs8TeT4xZsgHMWOXFXKFo2rJMInGAAyW6odaxPbcge8Lnc6pvla2Bnq3DrSYveIezrO14Nj7Zgqo+lp5Wyt0NsnNPqvYesx3YQF33QR7X1V9GW6upzIyDhlo4dZwysQbZaqUDlgobam8UcTjEwGeYWvGwizNM5pD1YhnexOI8AUE9jyucgNfzUDDt5tTJ0VM0vjF8dQR8yCPoxXIMzu1vVHM6KL+T56s3qXB7OEIu2mH6zT1qg56v6uQIYFZaKiazPU2tc8uQHAI6h9p7OwtuCXEHFdxuSePYO4WCrUwLHYmZFpbLH+szO3i24+yvQKqO4VO2lDhcPqvHkXBtvKQrPmj7aMM7iYegUk4kjbI3R7WuHcRdbVDbou/8AFaw6sc9nk4ke4hTKvrO42z2jU6ERF1wREQEREBERAREQEREBERAXn28rbTyHnLf2ad9l6CqbvVB84HcDPED3PaGE/wC4qnN2j/VuHyd+zKiNsQdiFi4gEZi4yIy7l0fKEfrH2Xfktew3Xgbw0/AFdZUsXjBl85fQ6+aLG6+3VitXdsboRSSfGKd7qOpGksOV+yRmj29hCgdo7511G4U1TBA+QguZM1zmskYDb+qAJa++EHO2egXoIVZ3h2FFXPaJBdseJoOhJuMeYztdoFuYd2KNvxZj4xO7RuHDQ7Qq9pRte29LA4G4jcekfa7XYprAtbe9hGAcgcY0Vh2XsKKFoaGjK5AAAaCcyQ0cSeJzK7KKlZFG2KNoaxjQ1oGQAAsAF0KSuX0LCWbDwc79UXX26XRxqNVf+zk9kD8Sq/vEBnkQS0HMaWzsTpe4GSs7VXd5znh54B4l7MvZLvJU5uy/D3VarqZItq0wZIRjdACwF1nB0pa4kDLT8F64qxT7rwyVDKx5fjiwhgBs3qnECeebirOmGsxVHLaJmNCIiuVCIiAiIgIiICIiAiIgIiICgt6KLpI3gall29jm5g9+fuU6tNVHiblqMx38vEXHioZK8q6SpOp2rm7dUHNI0xDEByvmR4Eub9lSrlWS74tMbXwG8keWrdXstrcZm3a9T0kXSWJcejIFmDK/MPcDc58BYc7qrDb6XZY+4fY6hrnFrTe2pA6oPq4tL9mq2hfGsAAAAAAsAMgByA4LIBaFLTWTENDWmznZNPL1n+A99hxWVJAGtAAtkAO4aZrnpvnHdJwOTOyPge9x63dh5KRwqO0pjXRgV8WRCwK6iErQyqbiwG7HXNg7LF2tIydzsDccQFuWMkTXDC4BwOoIuPIro3xquSnpqtjeDXGQ9zbtb+Lx9lSNfN0MR6xN/WN8DPpHEcyLXOZJ1z0WndejJBlcLOlNwDq2MaA9trX7SSs2SeU6hdT+a7WSmZZoHj55/tW1EWiI1GmcREXQREQEREBERAREQEREBERAREQQW3dmYxYHDd2KN3qSa27j+N+YCjdkVxbeOQYbGzh6p0uPqn+XK9tkYCCCLg6qB2tswEh18Lxkx/O+QY/v07fcs+SkxPKF+O/TjLqPu4FcO1HFwEIyx36Q8REPSA7XEhvc4ngtVNVuYejeMJ5HQ9rXf98Vvhja5xeCbuwkh2TgAMmW5ZuPe4rtckT3dmk1ncOunyzX2WtDSQQbDU5ZZE2troPeF8sQo+sdlJ9n/iVZKNI3PVIxzYr5WINiDbkDw7CFrqosbS29tCCNWuBu1w7iAVrpnG7hcmzhmbX9FpzsF0Bp7u9No2jr0aKWfE3MWcCWvHJw1HdoRzBB4rdJIGjE7wHEnkuKrqo4iZNS7C0+rcXsbak52yzt3ZQVdXGU9ZxazQ8HOvkG2+iDy1PuVd8uuyyuP26C74zIS4/MsN3EaPI0Y3m0G2mptyF7hQw2bcixNsvVA0ao/Y2zSA1z24QPQZy+s7t7OH4TK7iprrKGS++kCIiuVCIiAiIgIiICIiAiIgIiICIiAiIgLm2lSCWJ8R+k0jPgeB8DYrpRBSqSSUxgOHStt6Lj84wjIgOOpBuM8+1Y/KLWOLLm7QLseNL6Z8PBSoaGVEsRyxESs7n3x/7w8/aC4W7KimqqjpWNfhMGC4zbeIXIOo8F50xNZ03biY2yi29GMi7D45eTljNtGJzg/pALZXFr2sdbO1zy7zzWFZufC8gNkljyJyfj5a9ICbZ81EzfB48+jVe1E0/g4KUWl2OPtKQbbhhZh6VvDi0Z2zzJJ7uxRlfvezRl3HsBeffZvuK0N+Dh30qv2YgD/wAiuqk3AgwhzpJZLgXBcGt8mALk2d1XvtEsqKioJc1tgDYucbkZXw31GRGQAUpu5sgmrixkvLMUh5DDa1hzxOb7137J2XHA6eGNoawGF1u1zXAnP9UKU3UYHSTzcA5sTfsjE8+0+32V3HE2vCOSYrWdLIiIt7CIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIIHejZMsvRywFokjLh1jYFjtRfncN96qu2ZpYJi+eojpi+OPITRNxBoIxkSW43GXJekKob37n09fM10xkBjjAb0byzJznE3troqMtK+Ur8V57IXY9VNUveYa0PbG1gJa6N+ZLiQTGTbIN481MtpKsf258cX7yx3Z3agoXSMie8h7YnHpH4jcGQXBPDMeSny9vrN8wskx16L+f4g3U1X/j+4/mqzU71SQvdA+rha6NxFnhl7cL2fiHPNvFegGRnrN8wqXV7h0lZPPUPfLd01j0cpa3KNg0HFcjv1d5R6NjtrKuGWaGSB+OUNc8OIAwMbYABp9Y6q77u7ONPTRwuILgCXkaF7iXOI7Lkri3N2NFSRSU8OLCJieu4vdd0cZN3FT624qREcoZct5mdCIiuVCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAqzvLtgU8zb6Pj/4uP7ysy8/+E2KV0kPR0stRZkl+icGlt3NtiBa4m9vcVVnj+JW4dc42i9u7fp5Xtx00s7mtNjGJThbfQ9H28+1R3x6l/wAhU+VV+a5tm7TqKZ7/AJmWmxtblIbl2EnMdVumL3qQO91R65WHcw3cY+nN8Zpf0fU+VV+am9i7zwRRmOOJ0ID3XY/GHBxsSTj62YI8LKMO90/rlQcrqmeWSVtJPU4nDrxvDRcMaMObDoAE6yaiO71zc+u6dk0vAz2HhFGFPqofBjHI2lkEsD6d3xh9mPcHOt0cfWJaB28OCt69DFGqQ8/J5SIiKaAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgKpb77JfO+LA4tIbJe3EXYraq/vdVuhbHK18TDic0mUlrSCL2BHG7R71VmjdJWYp1eFEqd2qthBZAyruCD0krosOlrENde+fkFpdset/RkH+qf/DUhtLelrXMfN0M4s8AQvJIJwm5BFvo6rjdvnTf5d3mFiis+m3l+tXyLW/o2H/Vv/hL7T7q1RBcWCAl18DXmQAWAviwi+h4LE720h1pne2f2FdezN679IIeghZjBAmkdi9BgyFtOrzSaz6It+rh8H9E+GCWN+bhUOPgYolaFXNyat0scr3PjeTNrESWC0bBa545DzVjW7F4Qw5PORERWICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAo/bmyWVMfRPyAcHA2vmLjTuJUgi5MbInSnO3Biys8ZHizLT9ZfDuDH67fu//AKVyRR+OvpP5Le1M/oBH/iN+7H7yzi3BhF7vBvyYB+1XBE+Ovo+S3tHbD2SymjMbDcFxdpbMgD9ikURSiNITOxERdBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQf//Z"
            alt="Charger"
            className="rounded-xl mx-auto w-48"
          />

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

          <div className="text-center font-semibold truncate">
            Yuzu Fast Charger 27W...
          </div>

          <div className="text-center mt-1">
            <span className="line-through text-gray-400 mr-2">$118</span>
            <span className="text-lg font-bold text-white">$115</span>
          </div>
        </div>
        {/* Second */}
        <div className="max-w-xs bg-[#0F172A] text-white rounded-xl relative group p-4">
          <span className="absolute top-2 left-2 bg-red-600 text-white text-sm px-2 py-1 rounded-full">
            -$233
          </span>

          <img
            src="data:image/jpeg;base64,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"
            alt="Charger"
            className="rounded-xl mx-auto w-48"
          />

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

          <div className="text-center font-semibold truncate">
            Yuzu Fast Charger 27W...
          </div>

          <div className="text-center mt-1">
            <span className="line-through text-gray-400 mr-2">$118</span>
            <span className="text-lg font-bold text-white">$115</span>
          </div>
        </div>
        {/* Third */}
        <div className="max-w-xs bg-[#0F172A] text-white rounded-xl relative group p-4">
          <span className="absolute top-2 left-2 bg-red-600 text-white text-sm px-2 py-1 rounded-full">
            -$233
          </span>

          <img
            src="data:image/jpeg;base64,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"
            alt="Charger"
            className="rounded-xl mx-auto w-56"
          />

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

          <div className="text-center font-semibold truncate">
            Yuzu Fast Charger 27W...
          </div>

          <div className="text-center mt-1">
            <span className="line-through text-gray-400 mr-2">$118</span>
            <span className="text-lg font-bold text-white">$115</span>
          </div>
        </div>
        {/* Fouth */}
        <div className="max-w-xs bg-[#0F172A] text-white rounded-xl relative group p-4">
          <span className="absolute top-2 left-2 bg-red-600 text-white text-sm px-2 py-1 rounded-full">
            -$233
          </span>

          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhAPEBEQEBUQDxAVEBAVDxYQFRAQFREWFxUVFRUYHSggGBolGxUVITEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OFxAQGi0gHyUtKy0uLy0tLS0tKzAtLS0tLS0tLS0tLS0rLS0tLSstLS0tListKy0rKy0tLS0tLS0tK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUCAwYBB//EAEUQAAIBAgIGBgYGBwgDAQAAAAABAgMRBCEFEjFBUWEGcYGRobETIjJCwdEHFFJykvAjQ2KissLhM1RzgoOTs9I0U+IW/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAECAwQF/8QAJBEBAAICAgICAQUAAAAAAAAAAAECAxEhMRJRE0EEIiNCYXH/2gAMAwEAAhEDEQA/APuIAAAAAAAAAAAAAAAAAAAAAAAAAAAGMpgZAjVMQkISk9z7cgJINcW95sQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANGNquEJSja6tt60gM61S3W9hDrVXlGObezrNLxjeco7tzsbtFyjLXkrtp2zXsrb+ewgSMPhtXN+tLjw5IkAEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQtL14xh68tVSlFXayve9vAmlRpfFJTUNZRlq3WtGThm9rt1PeBDVaTStGE72WtTqa2b4ppF7hKChFRXbzk9rKbB3nUj6lJp568ZKzS3W2+ZfkQAAJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA56vjU5zcZqFpSTVSnKzayylkrZPiXOPralOc7OVov1Vm3yS3vkUH1lv1Yzs5bKNWi47Fullfe95Eiy0PBtylJQVslZ3zed+RakPRUX6NOWreTbds7brXaVyYSAAAAAAAAAAAAAAAAAAAAAAAAABjKSW0DI8bNM6r6vFmu/b1gSHVXWYur1I0sxlNIgbXUfHwPNd8WRpV+Boq4xR9qUY9ckgJlSCe1vvPJRjv3cyqqaYpLbUv1Jswhp/D75PuXzL/Hb0r519r7D1N1sksiQQMFjKdRfo5qXLY+5k2DK8xxK3bIAAAAAAAAAAAAAAAAAAAAADZjOaXyNau9vcB6532d54oGxRMZ1LEDFwS2mipWsRcdpCMFeTXz6lvOV0n0hk7qHq89/fu7C9MdrdK2vFXSYzSMYe1JLlv7iixnSZLKEb838l8zl6+Kcr3dzLCYCtW/sqU581H1fxPI6K4ax2xnJaek3Facqy95pcE7eRXVMZJ+8/Im6U6O16FF162pFJxWpra0m2+St4nOxxSvmvE1rNfpSYn7TZVjKk7kJVLsnYZF9IWGDrSg1KLcWnudjvdAaZVaOrLKcVn+0uK5/nq+fwZKweJdOSnF2aZTJji8Jreay+nwmZlVo7HKrBTjt95cJFlTndHBrU6l1xO2YAAAAAAAAAAAAAAABqq1bZLN+Rjja2pBtbdketkWjW4xd+u5AkwhfNm9KxHni4xyd+40VMdf2V3/ICTWrJfnaUOl9MKGWTl9m+S5yfwNWmNJ6mSd5tfgXH+hyFSc6s1CClOUnklm5M3xYt/qt0yvfXEPcfpCU2223z+C4Ik6J6OV8TaSXo6b/WSW1fsx2y8uZ02gOiUKdqmItUntUNsIf9n4eZ1Je+bXFUVx/cqHRnRPD0bOUfTS+1PNX5R2LxL1K2SytuPQc82me2sREdOL+lCvahSp/bqt9kYv8A7I+XbztfpO0gpV40U7+hhnynLN+GqcTBnVijVYY3nlMoIsqGRAw6LCkjeGUpUDYjXE2IlVaaD0j6KefsyykuXHs+Z29CtZp3yf5TPmyOn6PY/Wj6KTzivV5x4dnk+RzfkY/5Q3xX+nXg0YSrrK29eRvOVuAAAAAPQAAAAAAjY6tqqy9qWS5LewI2Iqa8uUMlzlvZIoUbZs04Wls5EqrOyIELEQuyv0ljFShfbJ5RXF8epE2vVUU5SdkldvkcXpTHOcnN9UI8FuRrix+U89KZL+MIuInOpPUjec5y7W3uO76OaCjho3dpVZL158P2Y8vMr+iei40YfWqzUZTXquTtqQe/Pe/LtLDE9JaEdkpT+7H4uxfLk3xCuOmuZXIOXqdMY+7RlLm5pGC6WTezDr/c/wDkw01dWUnSfpDDCU3slVkn6On/ADS4RXj5QanSWs4yUKCjJr1ZOesovi42V+84fSOjq1SbnUqJzm7t1NaGt1O1vE0pWJnlS0z9KTF1ZVJynJuUpSblJ723mzyjh2WlXRFWmk5waX2tsfxLI2UcKdkc9OeeEehhydRpG6nRJMKRpEKS0woNm54dk7C0yZOmrESlQOJsw1ZwlGcdsXf+nwJNajmR507CY2O10fi09Wa9mS8H8i6OE0BivapP70f5l8e87LA1taCe9ZPsPOvXxtMOuttxtJAuCqwAAPQAAAAHjds2Vetryc+OUVwiSNI1dlNe9nL7v9fmeYanvIG+mrIjVpmytUK7HYlQhKb3LJcXuQiN8Co6Q429qMd1nPr3L49xWaCwH1jEKL9il61Tg88o9r8EyNiaz9abd27u/Fs6/olhY0MMqs2our+knKTtaPupt8s+1nbb9umoc8frttz3TLSL+tOi21GnCGqt15Ru3bt28iHhcI55p3Krpx0leIxMfqyi4UU467hnVd823t1Vu7XvNWjOkThb0lCfXTkpeErWMfjnTTzjbscLorl4Frh9FrLLwKDB9MsOktadaH3qM3/CmWMOmuF/vD/2ai/kKTS3pPlC6jgoLbl2O/cR8bgnVi6cKeTcbzlJRsk7+qld360tpWz6a4b/AN831UKv/Qh4nptS92GIq/5VFfvSv4Dxt6T5R7dDg8JCjT9HJqaWtdO0nK+62xLkcdVopTmoqyU5JLgr5I11ukeIrerTpxw8X719eduTsku434enZI6sFLRuZYZbRPRGkbIwNkYm+nSOliUIWJFhGJrq1LFEtFdFfiZ2y3s24rE7lt8iFTpynLVitZv83fBETOkxDLCVXGcJRTbUlks2+KXZc7vQ9XOUeSfw+JRYHAxpK/tTazlw5Lgiz0Pf0knuUX4tHDlvFp4dWOs1jlfXPUzCJmjNdkAAPQAAMZySTb2JXZkQNI1L2prrl1bl3+QGileUnJ+879S3ImSlZGulGyNVWZAxqTOa0/itaSprZDbzk/kvNlxpDFejg579kVxk9n55HJSle7ebbu3xZ0fj03Pkyy240i4uV2o95Cq0KlR/palSolsUpN2W5JbET4UtaVyYsPY7Nbc+1XS0bHgb4YBcCeqZmok6RtCp4KN80bquDjbJLuJSiZRiNG1X9TXAzhhVwLRLkjJLkiNG0XD4PfaxLVMzRsQHkKZnsMZVCNXxKW0JbqtUrMTir5Lv+Rrr13Lkjbo/R0qvrO8Ycd8uUfmVtaKxuUxEy0YTCSqu0di9qT2R/ryOgw2GjTjqx7ZPbJ8zbGEYR1YpRS/N38yO8Wr5d5xZMk3/AMdNKRVMo4dy25LxLXC04xVorre99ZUUMUWFCtczXWUWbYkalIkRAyAAHoAAxqTSTb2JXZWUbybk97v8kZ6UxUU1ScorZKV5JZXy8U+4iT0pRgv7SL+763kNTPUI3CbVmRK1VJNtpJbW9xVYrpBH9XFvnL1V3FNi8bOp7by3RWSXYa1wWnvhS2SI6bdKY70ssvZj7PPi2QjwHZWIiNQ55nfKXg9Xt4EtoqDZCtJbG/MshZah7qkGOMe9J+BsWLXNBCXYEb6wuJ48QuIEu545EN4k1yrsCf6Q1zxKW8gSk3tZ4luWfIJb6mKb2ZEaTJ+H0TUltWouMsn+HaXOB0ZCn63tS+093Ut3mY3zVqvXHMqzR2h27TqppbobG/vcFyLWvVjCLbajGKzexJI31JWPnnSXTbrz9FSf6OD2r9ZNb/urd38Lcl7zeeXRWsV6XFfTSqOyyju4vmzbRqa2w5zAYaTsdRo3BvIqsm4bDtlzhaDPcDQsW1OCA1UaZISPbHoHgPQAMKtRRjKUnZRTbfBJXZmc90xxurTjRTzqv1uUI7e928S1a+U6RadRty2LxLq1J1ZbZyulwjsiuxWNLYPDviNOQPACQPdV8H3EuriY3lldNStuvdppZWdlYxnik75PPW4LKUV8UZ+VvS2o9tCoy4fm1/I8nTayZIjKclaEJPKOai5bFbhwNn1GtJJejatsv6v8THlMTzo1H0iKmz1Uyxp6Gqva4R65fJMk09Afaqdij8W/gROWsfafCfSl1eZidNS0LSW1Sl1yt/DYl0sJTj7MILnqq/ftKT+RWP7T8UuUo4Wc/ZhKXNRdu/YTaOg6j9rVh1vWfcsvE6U8M5/ItPS8YY+1VR0HTXtOU/3V3LPxJ9GhGGUIxj1LPte1m0pdLdKcHhrqtiaakvci/Sz/AAQu12mVr2t3LSKxHS3SuY4itGEZTlKMYxV5Sk1GMVxbeSR8/wAZ9I9Sq3T0dg5zedqtbYufooPNc3JdRXrQGLxs1LH151c7xw8LKMeHqR9Vfez6yukrTTHSpYlyw+DvKGaq4izUWvs0+N/tcNl9o0ToB5No6TQvRSNNRTiopbIrYut73+c9p0tDR6W4kc/gdDpWyLnD4K24soYdI2qCA0UqNiQkegAAAAAAHKaS0Y8RVlV9JqqyUVqa1ortXN9p0WkamrTm8kres27KMd7bfI5uXSTBwVnjMKuvEU18SYtNZ3CJiJ7RpaAS21b/AOnb+YLQcd85vsS+Zrq9L8AtuMw76qmv/Dchz6f6OTt9Zcvu0Kz8dSxb5b+1fjr6W1PQlPfrvrkvgjdHRFFe5frnL5lBV+kXBLZ6eXVSS/ikiHV+k7Dr2MPWl1yjHyuR8l/afCvp2MMBSWynDtin5m+nSS2RiupJeR88n9KD9zB99ZvygYr6QMZP+ywUX/lqT8miszM9p1D6PNniR85//UaWl7OBa5rC1X5sxlpXTctlNUuulTp/8hGkvpSPUj5hKjpqft4j0a4qrTX/AB5kaXRzE1cq+kVO+2KrVKj/AAysND6hitIUaWdWtSp/fqxh5spsZ04wFPbiYzfCEJ1PFK3icjhPo8g9rxNXkqLo/vSui9wP0e01ZrCp86tbP9y6fcNCJi/pRoK6oYevVe5ycaSfdrMgz6W6Ur/+PhYUIvZNwcn+Ob1fA7rA9EVDY6VL/DoqMvxb+4s6PR+ks5a9R79aTSfXGNk+4kfJ62gcdiXbGY2We2jGblfqpxtF9hc6I+jqnGzVGdT9qq/Rx7Ir1l1NM+n4fCQgrQhGK4KKXkbwObwHRaMElJpJe5Tj6OPhnfqsXWGwEIK0YqPUiUAPFE9AAAAAAAAAAAADm+mGBqV1CneqqVm5+jjrNyvldb0cXPoDRk7uONl/pKHmj6wAPlEPo7of3fGy66tGPwJlH6PqK2YJv/ExD/kZ9LAHB0OhMFswmEjzc6lXwkidR6KOOyODh1YOF++6OuAHP09ATX6+cfuRjBd1mbVoFv2q9eXXKK8ol2AKVdG6W91X/rTXkzbDQFBbYuX3qk5ebLUAQKehsOs1RpX4+jjfvsS4UYrZFLqVjYAPLHoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//2Q=="
            alt="Charger"
            className="rounded-xl mx-auto w-48"
          />

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

          <div className="text-center font-semibold truncate">
            super fortable iron
          </div>

          <div className="text-center mt-1">
            <span className="line-through text-gray-400 mr-2">$118</span>
            <span className="text-lg font-bold text-white">$115</span>
          </div>
        </div>
        {/* Fifth */}
        <div className="max-w-xs bg-[#0F172A] text-white rounded-xl relative group p-4">
          <span className="absolute top-2 left-2 bg-red-600 text-white text-sm px-2 py-1 rounded-full">
            -$233
          </span>

          <img
            src="data:image/jpeg;base64,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"
            alt="Charger"
            className="rounded-xl mx-auto w-48"
          />

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

          <div className="text-center font-semibold truncate">Women Shoes</div>

          <div className="text-center mt-1">
            <span className="line-through text-gray-400 mr-2">$118</span>
            <span className="text-lg font-bold text-white">$115</span>
          </div>
        </div>
        {/* Sixth */}
        <div className="max-w-xs bg-[#0F172A] text-white rounded-xl relative group p-4">
          <span className="absolute top-2 left-2 bg-red-600 text-white text-sm px-2 py-1 rounded-full">
            -$233
          </span>

          <img
            src="data:image/jpeg;base64,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"
            alt="Charger"
            className="rounded-xl mx-auto w-48"
          />

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

          <div className="text-center font-semibold truncate">Techno Spark</div>

          <div className="text-center mt-1">
            <span className="line-through text-gray-400 mr-2">$118</span>
            <span className="text-lg font-bold text-white">$115</span>
          </div>
        </div>
        {/* Seven */}
        <div className="max-w-xs bg-[#0F172A] text-white rounded-xl relative group p-4">
          <span className="absolute top-2 left-2 bg-red-600 text-white text-sm px-2 py-1 rounded-full">
            -$233
          </span>

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu7fV8Ml6tYSH9FunDphfAIM018f0oXKeHSA&s"
            alt="Charger"
            className="rounded-xl mx-auto w-48"
          />

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
            Cycle Shop
          </div>

          <div className="text-center font-semibold truncate">Buy Cycle</div>

          <div className="text-center mt-1">
            <span className="line-through text-gray-400 mr-2">$118</span>
            <span className="text-lg font-bold text-white">$115</span>
          </div>
        </div>
        {/* Nine */}
        <div className="max-w-xs bg-[#0F172A] text-white rounded-xl relative group p-4">
          <span className="absolute top-2 left-2 bg-red-600 text-white text-sm px-2 py-1 rounded-full">
            -$233
          </span>

          <img
            src="data:image/jpeg;base64,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"
            alt="Charger"
            className="rounded-xl mx-auto w-48"
          />

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

          <div className="text-center font-semibold truncate">I Phone 14</div>

          <div className="text-center mt-1">
            <span className="line-through text-gray-400 mr-2">$118</span>
            <span className="text-lg font-bold text-white">$115</span>
          </div>
        </div>
        {/* Ten */}
        <div className="max-w-xs bg-[#0F172A] text-white rounded-xl relative group p-4">
          <span className="absolute top-2 left-2 bg-red-600 text-white text-sm px-2 py-1 rounded-full">
            -$233
          </span>

          <img
            src="data:image/jpeg;base64,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"
            alt="Charger"
            className="rounded-xl mx-auto w-48"
          />

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

          <div className="text-center font-semibold truncate">Nokia-110</div>

          <div className="text-center mt-1">
            <span className="line-through text-gray-400 mr-2">$118</span>
            <span className="text-lg font-bold text-white">$105</span>
          </div>
        </div>
        {/* Eleven */}
        <div className="max-w-xs bg-[#0F172A] text-white rounded-xl relative group p-4">
          <span className="absolute top-2 left-2 bg-red-600 text-white text-sm px-2 py-1 rounded-full">
            -$38
          </span>

          <img
            src="data:image/jpeg;base64,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"
            alt="Charger"
            className="rounded-xl mx-auto w-48"
          />

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

          <div className="text-center font-semibold truncate">
            Symphony Z-60
          </div>

          <div className="text-center mt-1">
            <span className="line-through text-gray-400 mr-2">$118</span>
            <span className="text-lg font-bold text-white">$80</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllIteams;
