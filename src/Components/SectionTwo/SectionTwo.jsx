import React, { useEffect, useState } from "react";
import Carousel from "./Carousel2";
import Carousel2 from "./Carousel2";

const SectionTwo = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set the future date: current time + 899 days + 17 hours + 20 mins + 19 sec
    const targetDate = new Date(
      Date.now() + 899 * 24 * 60 * 60 * 1000 + // days
        17 * 60 * 60 * 1000 + // hours
        20 * 60 * 1000 + // minutes
        19 * 1000 // seconds
    );

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown(); // run once immediately
    const intervalId = setInterval(updateCountdown, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="my-8 lg:my-20 max-w-[1238px] mx-auto grid lg:flex gap-12 items-center justify-center text-white px-4">
      <div>
        <div className="text-xl font-extrabold text-center justify-center flex items-center gap-2 text-yellow-400 mb-2">
         <img src="https://martcms-dev-react.6amdev.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fflash-deal.70e1fa77.png&w=96&q=75" alt="" srcset="" />
      </div>
      <h2 className="text-xl font-semibold mb-1 text-black mt-5 text-center">FLASH DEAL</h2>
      <p className="text-xs text-[#121828] mb-6 text-center">
        Remains until the end of the offer
      </p>

      <div className="flex gap-8 justify-center">
        <TimeBox  label="Days" value={timeLeft.days} />
        <TimeBox label="Hours" value={timeLeft.hours} />
        <TimeBox label="Minu" value={timeLeft.minutes} />
        <TimeBox label="Sec" value={timeLeft.seconds} />
      </div>
      </div>

      <div className="justify-center">
        <Carousel2></Carousel2>
      </div>
    </div>
  );
};

const TimeBox = ({ label, value }) => (
  <div className="bg-blue-600 rounded-md px-2  text-center w-10">
    <div className="text-sm font-bold">{String(value).padStart(2, "0")}</div>
    <div className="text-xs mt-1">{label}</div>
  </div>
);

export default SectionTwo;
