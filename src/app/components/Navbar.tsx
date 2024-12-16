import Image from "next/image";
import React from "react";
import search from "../assets/search-normal.png";
import navIcon from "../assets/filter.png";
import heart from "../assets/heart.png";
import bell from "../assets/notification.png";
import notification from "../assets/Notif.png";
import setting from "../assets/setting-2.png";
import image from "../assets/Image.png";

export default function Navbar() {
  return (
    <nav className="flex items-center sm:items-start sm:pt-[32px] justify-between w-full h-[124px] sm:h-[288px] border border-gray-300/40 px-5 bg-white mx-0">
      <div className="flex sm:flex-col items-center sm:items-start gap-16 sm:gap-0">
        <h1 className="text-blue-600 font-bold text-2xl">MORENT</h1>

        {/* search section */}
        <div className="flex items-center gap-4 border border-gray-200 sm:border-none rounded-full sm:rounded-none px-5 py-2 w-[492px] sm:w-fit sm:absolute sm:top-[92px] sm:left-[25px] sm:p-0 ">
          <div className="flex gap-5 items-center sm:border sm:rounded-xl sm:border-gray-300/40 sm:p-2 sm:w-[70vw]">
            <Image src={search} alt="" />
            <input
              type="text"
              placeholder="Search something here"
              className="focus:outline-none flex-grow sm:flex-grow-0 sm:w-[150px]"
            />
          </div>
          <Image
            src={navIcon}
            alt=""
            className="sm:border-gray-300/40 sm:w-[48px] sm:h-[48px] sm:p-2 sm:border sm:rounded-xl "
          />
        </div>
      </div>

      <div className="flex items-center gap-5 sm:gap-0">
        <div className="flex items-center gap-5 sm:gap-0">
          <Image
            src={heart}
            alt=""
            className="w-11 h-11 border border-gray-300/40 rounded-full p-2 sm:hidden"
          />
          <div className="relative flex items-center sm:hidden">
            <Image
              src={bell}
              alt=""
              className="w-11 h-11 border border-gray-300/40 rounded-full p-2"
            />
            <Image
              src={notification}
              alt=""
              className="absolute top-0 right-0 w-3 h-3"
            />
          </div>
          <Image
            src={setting}
            alt=""
            className="w-11 sm:w-[28px] sm:h-[28px] h-11 border border-gray-300/40 rounded-full p-2 sm:hidden"
          />
        </div>
        <Image
          src={image}
          alt=""
          className="w-[64px] h-[64px] sm:w-11 sm:h-11"
        />
      </div>
    </nav>
  );
}
