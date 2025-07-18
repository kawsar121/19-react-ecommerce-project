import { Link } from "react-router-dom";

const SectionOne = () => {
  return (
    <div className="flex max-w-[1238px] mx-auto  p-4 rounded-lg w-full  gap-20">
      <div className="hidden lg:block ">
        <ul className=" p-5 shadow-xl ">
          <li className="border-b-2 border-indigo-500 text-base mb-4">
            <Link className="whitespace-nowrap font-semibold">Bags and shoes</Link>
          </li>
          <li className="border-b-2 border-indigo-500 font-medium mb-4">
            <Link className="whitespace-nowrap font-semibold">Home Pet and applience</Link>
          </li>
          <li className="border-b-2 border-indigo-500 text-base mb-4">
            <Link className="whitespace-nowrap font-semibold">Phones & telecom</Link>
          </li>
          <li className="border-b-2 border-indigo-500 text-base mb-4">
            <Link className="whitespace-nowrap font-semibold">
              Computer office and security
            </Link>
          </li>
          <li className="border-b-2 border-indigo-500 text-base mb-4">
            <Link className="whitespace-nowrap font-semibold">Mobile Accories</Link>
          </li>
          <li className="border-b-2 border-indigo-500 text-base mb-4">
            <Link className="whitespace-nowrap font-semibold">Toys kids and babies</Link>
          </li>
          <li className="border-b-2 border-indigo-500 text-base mb-4">
            <Link className="whitespace-nowrap font-semibold">Beauty Healt hair</Link>
          </li>
          <li className="border-b-2 border-indigo-500 text-base mb-4">
            <Link className="whitespace-nowrap font-semibold">Toys kids and babies</Link>
          </li>
          <li className="border-b-2 border-indigo-500 text-base mb-4">
            <Link className="whitespace-nowrap font-semibold">Juwelary And Watch</Link>
          </li>
          <li className="border-b-2 border-indigo-500 text-base mb-4">
            <Link className="whitespace-nowrap font-semibold">Ebook</Link>
          </li>
          <li className=" text-center">
            <Link className="whitespace-nowrap text-base text-blue-500">View All</Link>
          </li>
        </ul>
      </div>

      {/* Curosol start */}
      <div className="flex gap-5">
        <div >
            <div className="carousel lg:w-[600px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://martcms-dev-react.6amdev.xyz/_next/image?url=https%3A%2F%2Fmartcms-dev.6amdev.xyz%2Fstorage%2Fapp%2Fpublic%2Fbanner%2F2024-01-14-65a36ce9b0038.webp&w=1920&q=75"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://martcms-dev-react.6amdev.xyz/_next/image?url=https%3A%2F%2Fmartcms-dev.6amdev.xyz%2Fstorage%2Fapp%2Fpublic%2Fbanner%2F2024-01-14-65a378a8c9602.webp&w=1920&q=75"
            className="w-[1000px] h-[350px] "
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://martcms-dev-react.6amdev.xyz/_next/image?url=https%3A%2F%2Fmartcms-dev.6amdev.xyz%2Fstorage%2Fapp%2Fpublic%2Fbanner%2F2024-01-14-65a36cd05ee7b.webp&w=1920&q=75"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
            </div>
            <div className="hidden lg:block">
                <div className="flex gap-3">
                    <img className="h-36" src="https://martcms-dev-react.6amdev.xyz/_next/image?url=https%3A%2F%2Fmartcms-dev.6amdev.xyz%2Fstorage%2Fapp%2Fpublic%2Fbanner%2F2024-01-14-65a36d8914714.webp&w=640&q=75" alt="" srcset="" />
                    <img className="h-[150px]" src="https://martcms-dev-react.6amdev.xyz/_next/image?url=https%3A%2F%2Fmartcms-dev.6amdev.xyz%2Fstorage%2Fapp%2Fpublic%2Fbanner%2F2024-01-14-65a36dd06beed.webp&w=640&q=75" alt="" srcset="" />
                </div>
            </div>
        </div>
        

        {/* Curosol 2 */}
      <div className="carousel w-[300px] h-[500px] hidden lg:block">
  <div id="slide00" className="carousel-item relative w-full">
    <img
      src="https://martcms-dev-react.6amdev.xyz/_next/image?url=https%3A%2F%2Fmartcms-dev.6amdev.xyz%2Fstorage%2Fapp%2Fpublic%2Fbanner%2F2024-01-14-65a37896e5a78.webp&w=256&q=75"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide00" className="btn btn-circle">❮</a>
      <a href="#slide11" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide11" className="carousel-item relative w-full">
    <img
      src="https://martcms-dev-react.6amdev.xyz/_next/image?url=https%3A%2F%2Fmartcms-dev.6amdev.xyz%2Fstorage%2Fapp%2Fpublic%2Fbanner%2F2024-01-14-65a36e08a3302.webp&w=256&q=75"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide00" className="btn btn-circle">❮</a>
      <a href="#slide11" className="btn btn-circle">❯</a>
    </div>
  </div>
      </div>
        
      </div>
    </div>
  );
};

export default SectionOne;
