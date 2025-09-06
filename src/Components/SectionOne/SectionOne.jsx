import { Link } from "react-router-dom";
import Swipers from "../Swiper/Swipers";
import Swipers2 from "../Swiper/Swipers2";

const SectionOne = () => {
  return (
    <div className="flex max-w-7xl mx-auto gap-4  p-2 rounded-lg w-full">
      <div className="hidden lg:block shadow-custom">
        <ul className=" p-5 shadow-xl ">
          <li className="border-b-[1px] border-[#e5e7eb] pb-2 text-sm mb-4">
            <Link className="whitespace-nowrap font-semibold">
              Bags and shoes
            </Link>
          </li>
          <li className="border-b-[1px] border-[#e5e7eb] pb-2 text-sm mb-4">
            <Link className="whitespace-nowrap font-semibold">
              Home Pet and applience
            </Link>
          </li>
          <li className="border-b-[1px] border-[#e5e7eb] pb-2 text-sm mb-4">
            <Link className="whitespace-nowrap font-semibold">
              Phones & telecom
            </Link>
          </li>
          <li className="border-b-[1px] border-[#e5e7eb] pb-2 text-sm mb-4">
            <Link className="whitespace-nowrap font-semibold">
              Computer office and security
            </Link>
          </li>
          <li className="border-b-[1px] border-[#e5e7eb] pb-2 text-sm mb-4">
            <Link className="whitespace-nowrap font-semibold">
              Mobile Accories
            </Link>
          </li>
          <li className="border-b-[1px] border-[#e5e7eb] pb-2 text-sm mb-4">
            <Link className="whitespace-nowrap font-semibold">
              Toys kids and babies
            </Link>
          </li>
          <li className="border-b-[1px] border-[#e5e7eb] pb-2 text-sm mb-4">
            <Link className="whitespace-nowrap font-semibold">
              Beauty Healt hair
            </Link>
          </li>
          <li className="border-b-[1px] border-[#e5e7eb] pb-2 text-sm mb-4">
            <Link className="whitespace-nowrap font-semibold">
              Toys kids and babies
            </Link>
          </li>
          <li className="border-b-[1px] border-[#e5e7eb] pb-2 text-sm mb-4">
            <Link className="whitespace-nowrap font-semibold">
              Juwelary And Watch
            </Link>
          </li>
          <li className="border-b-[1px] border-[#e5e7eb] pb-2 text-sm mb-4">
            <Link className="whitespace-nowrap font-semibold">Ebook</Link>
          </li>
          <li className=" text-center">
            <Link className="whitespace-nowrap text-base text-blue-500">
              View All
            </Link>
          </li>
        </ul>
      </div>

      {/* Side Bar */}
      <div class="grid grid-cols-1 md:grid-cols-3 gap-2 w-full">
        <div class="md:col-span-2 flex flex-col gap-2">
          {/* Top */}
          <div className="w-full">
            <Swipers></Swipers>
          </div>
          {/* Bottom */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <img
              className="w-full h-auto object-cover rounded-lg"
              src="https://martcms-dev-react.6amdev.xyz/_next/image?url=https%3A%2F%2Fmartcms-dev.6amdev.xyz%2Fstorage%2Fapp%2Fpublic%2Fbanner%2F2024-01-14-65a36dd06beed.webp&w=640&q=75"
              alt=""
              srcset=""
            />

            <img
              className="w-full h-auto object-cover rounded-lg"
              src="https://martcms-dev-react.6amdev.xyz/_next/image?url=https%3A%2F%2Fmartcms-dev.6amdev.xyz%2Fstorage%2Fapp%2Fpublic%2Fbanner%2F2024-01-14-65a36d8914714.webp&w=640&q=75"
              alt=""
              srcset=""
            />
          </div>
        </div>


        {/* Side */}
        <div class="hidden lg:block w-full h-full">
          <div className="carousel  w-full h-full max-h-[511px] rounded-lg overflow-hidden">
            <div id="slide00" className="carousel-item relative w-full trans">
              <img
                src="https://martcms-dev-react.6amdev.xyz/_next/image?url=https%3A%2F%2Fmartcms-dev.6amdev.xyz%2Fstorage%2Fapp%2Fpublic%2Fbanner%2F2024-01-14-65a37896e5a78.webp&w=256&q=75"
                className="w-full"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide00" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide11" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide11" className="carousel-item relative w-full">
              <img
                src="https://martcms-dev-react.6amdev.xyz/_next/image?url=https%3A%2F%2Fmartcms-dev.6amdev.xyz%2Fstorage%2Fapp%2Fpublic%2Fbanner%2F2024-01-14-65a36e08a3302.webp&w=256&q=75"
                className="w-full"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide00" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide11" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
          {/* <div className=" w-full h-full max-h-[500px] rounded-lg overflow-hidden">
            <Swipers2></Swipers2>
          </div> */}
        </div>
      
      </div>
    </div>
  );
};

export default SectionOne;
