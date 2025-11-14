import { Link } from "react-router-dom";
import iteam from '../../assets/shop/banner2.jpg'
import img1 from '../../assets/home/slide1.jpg'
import img2 from '../../assets/home/slide2.jpg'
import img3 from '../../assets/home/slide3.jpg'
import img4 from '../../assets/home/slide4.jpg'
import img5 from '../../assets/home/slide5.jpg'

const SectionThree = () => {
  return (
      <div className="container mx-auto px-4 mb-10">
  {/* Main Wrapper */}
  <div className="flex flex-col lg:flex-row gap-10">
    
    {/* Left Side - Deal of the Day */}
    <div className="bg-[#eff7ff] border rounded-xl px-4 py-16 border-[#1455ac4a] w-full lg:w-[40%]">
      {/* Mobile Title */}
      <p className="text-blue-600 text-2xl text-center lg:hidden mb-4 uppercase font-mulish">
        Deal Of The Day
      </p>

      <figure className="flex justify-center relative group">
        {/* Desktop Title */}
        <p className="text-blue-600 absolute top-2 text-2xl sm:text-3xl hidden lg:block">
          Deal Of The Day
        </p>
        <img
          src={iteam}
          alt="Shoes"
          className="rounded-xl mt-10 md:mt-16 w-48 sm:w-72 transform scale-110 group-hover:scale-100 transition-transform duration-500"
        />
      </figure>

      <div className="card-body items-center text-center mt-4">
        <p className="text-base md:text-lg text-[#121828] font-bold">
          Best Resturents In Your Town <br /> Himalaya's Sepecial Exquisite Wild...
        </p>
        <p className="text-base font-semibold">
          $60 <span className="text-xl font-bold text-blue-500">$50</span>
        </p>
        <button className="btn btn-primary w-full sm:w-auto mt-2">Buy Now</button>
      </div>
    </div>

    {/* Right Side - Featured Deal List */}
    <div className="w-full lg:w-[60%]">
      <div className="flex items-center justify-between">
        <div className="text-center lg:text-left mb-6">
        <h2 className="text-2xl font-bold">
          <span className="text-blue-700">FEATURED</span> DEAL
        </h2>
        <p className="text-[#65748b] text-sm">
          See the latest deals and exciting new offers !
        </p>
        </div>
        <div>
          <Link><p className="text-blue-500">View All ›</p></Link>
        </div>
      </div>

      {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Example Card */}
        <div className="flex gap-4 items-center hover:shadow-lg rounded-xl border p-3">
          <div className="relative">
            <span className="absolute -top-2 -left-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
              -$233
            </span>
            <img
              src={img1}
              alt="Charger"
              className="rounded-xl w-20 h-20 object-contain"
            />
          </div>

          <div>
            <div className="font-medium text-sm text-[#121828]">
              Vegetables long-sleeve lightweight french terry fleece quarter-zip top
            </div>
            <div className="mt-1 text-gray-400 text-xs flex items-center gap-1">
              ⭐⭐⭐⭐⭐ (0)
            </div>
            <div className="mt-1">
              <span className="line-through text-gray-600 mr-2">$118</span>
              <span className="text-lg font-bold text-[#121828]">$115</span>
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center hover:shadow-lg rounded-xl border p-3">
          <div className="relative">
            <span className="absolute -top-2 -left-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
              -$233
            </span>
            <img
              src={img2}
              alt="Charger"
              className="rounded-xl w-20 h-20 object-contain"
            />
          </div>

          <div>
            <div className="font-medium text-sm text-[#121828]">
              Best's Food Shop in town french  fleece quarter-zip top
            </div>
            <div className="mt-1 text-gray-400 text-xs flex items-center gap-1">
              ⭐⭐⭐⭐⭐ (0)
            </div>
            <div className="mt-1">
              <span className="line-through text-gray-600 mr-2">$118</span>
              <span className="text-lg font-bold text-[#121828]">$115</span>
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center hover:shadow-lg rounded-xl border p-3">
          <div className="relative">
            <span className="absolute -top-2 -left-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
              -$233
            </span>
            <img
              src={img3}
              alt="Charger"
              className="rounded-xl w-20 h-20 object-contain"
            />
          </div>

          <div>
            <div className="font-medium text-sm text-[#121828]">
              Handi's Biriyani Best Quality terry fleece quarter-zip top
            </div>
            <div className="mt-1 text-gray-400 text-xs flex items-center gap-1">
              ⭐⭐⭐⭐⭐ (0)
            </div>
            <div className="mt-1">
              <span className="line-through text-gray-600 mr-2">$118</span>
              <span className="text-lg font-bold text-[#121828]">$115</span>
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center hover:shadow-lg rounded-xl border p-3">
          <div className="relative">
            <span className="absolute -top-2 -left-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
              -$233
            </span>
            <img
              src={img4}
              alt="Charger"
              className="rounded-xl w-20 h-20 object-contain"
            />
          </div>

          <div>
            <div className="font-medium text-sm text-[#121828]">
              Chikken's Biriyani lightweight price terry fleece you can buy this
            </div>
            <div className="mt-1 text-gray-400 text-xs flex items-center gap-1">
              ⭐⭐⭐⭐⭐ (0)
            </div>
            <div className="mt-1">
              <span className="line-through text-gray-600 mr-2">$118</span>
              <span className="text-lg font-bold text-[#121828]">$115</span>
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center hover:shadow-lg rounded-xl border p-3">
          <div className="relative">
            <span className="absolute -top-2 -left-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
              -$233
            </span>
            <img
              src={img5}
              alt="Charger"
              className="rounded-xl w-20 h-20 object-contain"
            />
          </div>

          <div>
            <div className="font-medium text-sm text-[#121828]">
              Muttan's Curry lightweight Price Buy possiable for all
            </div>
            <div className="mt-1 text-gray-400 text-xs flex items-center gap-1">
              ⭐⭐⭐⭐⭐ (0)
            </div>
            <div className="mt-1">
              <span className="line-through text-gray-600 mr-2">$118</span>
              <span className="text-lg font-bold text-[#121828]">$115</span>
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center hover:shadow-lg rounded-xl border p-3">
          <div className="relative">
            <span className="absolute -top-2 -left-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
              -$233
            </span>
            <img
              src={img3}
              alt="Charger"
              className="rounded-xl w-20 h-20 object-contain"
            />
          </div>

          <div>
            <div className="font-medium text-sm text-[#121828]">
              Love Cake's with stowverry flavoure lightweight size best plannig for aniversy
            </div>
            <div className="mt-1 text-gray-400 text-xs flex items-center gap-1">
              ⭐⭐⭐⭐⭐ (0)
            </div>
            <div className="mt-1">
              <span className="line-through text-gray-600 mr-2">$118</span>
              <span className="text-lg font-bold text-[#121828]">$115</span>
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center hover:shadow-lg rounded-xl border p-3">
          <div className="relative">
            <span className="absolute -top-2 -left-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
              -$233
            </span>
            <img
              src={img4}
              alt="Charger"
              className="rounded-xl w-20 h-20 object-contain"
            />
          </div>

          <div>
            <div className="font-medium text-sm text-[#121828]">
              Mixed Salad Cucumber papaya mixed french quality all are best
            </div>
            <div className="mt-1 text-gray-400 text-xs flex items-center gap-1">
              ⭐⭐⭐⭐⭐ (0)
            </div>
            <div className="mt-1">
              <span className="line-through text-gray-600 mr-2">$118</span>
              <span className="text-lg font-bold text-[#121828]">$115</span>
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center hover:shadow-lg rounded-xl border p-3">
          <div className="relative">
            <span className="absolute -top-2 -left-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
              -$233
            </span>
            <img
              src={img2}
              alt="Charger"
              className="rounded-xl w-20 h-20 object-contain"
            />
          </div>

          <div>
            <div className="font-medium text-sm text-[#121828]">
              Nolli big size with nul ruti best combination, Best choise for you
            </div>
            <div className="mt-1 text-gray-400 text-xs flex items-center gap-1">
              ⭐⭐⭐⭐⭐ (0)
            </div>
            <div className="mt-1">
              <span className="line-through text-gray-600 mr-2">$118</span>
              <span className="text-lg font-bold text-[#121828]">$115</span>
            </div>
          </div>
        </div>

        {/* Copy this div for other products */}
      </div>
    </div>
  </div>
</div>




  );
};

export default SectionThree;
