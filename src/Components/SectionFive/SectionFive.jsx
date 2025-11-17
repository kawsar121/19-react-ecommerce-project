import { Link } from "react-router-dom";

const SectionFive = () => {
  return (
    <div className="my-11 max-w-3xl lg:max-w-6xl  mx-auto items-center">
      <div className="flex items-center gap-28 lg:gap-0 lg:justify-between border-slate-500 border-b-2 mb-10">
        <div>
          <h2 className="text-base lg:text-xl font-bold">
            <span className="text-blue-500 ml-5 lg:ml-0">POPULAR</span>{" "}
            CATEGORIES
          </h2>
        </div>
        <div>
          <Link className="text-blue-500 text-base lg:text-base">View All</Link>
        </div>
      </div>

      <div className="flex justify-center gap-0 lg:gap-6">
        {/* Card */}
        <div className="card hover:shadow-lg w-40 lg:w-60 ">
          <figure className="px-10 pt-20">
            <img
              src="https://i.ibb.co.com/qMYBvjLP/dessert-bg.jpg"
              alt="Shoes"
              className="rounded-xl w-32 lg:w-40"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-xs lg:text-xl whitespace-nowrap font-bold text-black">
              Outdoor Fun & Sports
            </h2>
            <p className="text-slate-400 text-xs">7 Product</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 p-0 items-center lg:p-20 hover:shadow-lg lg:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <div>
              <img
                src="https://i.ibb.co.com/qMYBvjLP/dessert-bg.jpg"
                alt=""
                srcset=""
                className="w-20"
              />
            </div>
            <div>
              <h2 className="text-[#121828] text-sm font-bold whitespace-nowrap">Women fashion</h2>
              <p className="text-slate-500 text-xs mt-1">5 product</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div>
              <img
                src="https://i.ibb.co.com/qMYBvjLP/dessert-bg.jpg"
                alt=""
                srcset=""
                className="w-20"
              />
            </div>
            <div>
              <h2 className="text-[#121828] text-sm font-bold whitespace-nowrap">Women fashion</h2>
              <p className="text-slate-500 text-xs mt-1">5 product</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div>
              <img
                src="https://i.ibb.co.com/qMYBvjLP/dessert-bg.jpg"
                alt=""
                srcset=""
                className="w-20"
              />
            </div>
            <div>
              <h2 className="text-[#121828] text-sm font-bold whitespace-nowrap">Women fashion</h2>
              <p className="text-slate-500 text-xs mt-1">5 product</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div>
              <img
                src="https://i.ibb.co.com/qMYBvjLP/dessert-bg.jpg"
                alt=""
                srcset=""
                className="w-20"
              />
            </div>
            <div>
              <h2 className="text-[#121828] text-sm font-bold whitespace-nowrap">Women fashion</h2>
              <p className="text-slate-500 text-xs mt-1">5 product</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div>
              <img
                src="https://i.ibb.co.com/qMYBvjLP/dessert-bg.jpg"
                alt=""
                srcset=""
                className="w-20"
              />
            </div>
            <div>
              <h2 className="text-[#121828] text-sm font-bold whitespace-nowrap">Women fashion</h2>
              <p className="text-slate-500 text-xs mt-1">5 product</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div>
              <img
                src="https://i.ibb.co.com/qMYBvjLP/dessert-bg.jpg"
                alt=""
                srcset=""
                className="w-20"
              />
            </div>
            <div>
              <h2 className="text-[#121828] text-sm font-bold whitespace-nowrap">Women fashion</h2>
              <p className="text-slate-500 text-xs mt-1">5 product</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div>
              <img
                src="https://i.ibb.co.com/qMYBvjLP/dessert-bg.jpg"
                alt=""
                srcset=""
                className="w-20"
              />
            </div>
            <div>
              <h2 className="text-[#121828] text-sm font-bold whitespace-nowrap">Women fashion</h2>
              <p className="text-slate-500 text-xs mt-1">5 product</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div>
              <img
                src="https://i.ibb.co.com/qMYBvjLP/dessert-bg.jpg"
                alt=""
                srcset=""
                className="w-20"
              />
            </div>
            <div>
              <h2 className="text-[#121828] text-sm font-bold whitespace-nowrap">Women fashion</h2>
              <p className="text-slate-500 text-xs mt-1">5 product</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
