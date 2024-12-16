import Image from "next/image";
import React from "react";
import heart_filled from "../../assets/car-card/heart-filled.png";
import gasStation from "../../assets/car-card/gas-station.png";
import profileUsers from "../../assets/car-card/profile-2user.png";
// import Import circle icon also in svg"

export default function CarHorizontal({
  name,
  category,
  heart,
  carImage,
  gas,
  type,
  users,
  price,
}: {
  name: string;
  category: string;
  heart: any;
  carImage: any;
  gas: string;
  type: string;
  users: number;
  price: string;
}) {
  return (
    <div className="w-[87vw]  h-[240px] bg-white p-5 rounded-xl flex flex-col justify-between mx-auto   ">
      {/* header */}
      <div className="flex justify-between">
        <div>
          <h1 className="text-2xl sm:text-lg font-semibold">{name}</h1>
          <h2 className="text-gray-400 sm:text-sm sm:font-normal font-semibold">
            {category}
          </h2>
        </div>
        <Image src={heart} alt="" className="w-[20px] h-[17.8px] m-[4px]" />
      </div>

      {/* image and details */}
      <div className="flex items-center justify-center gap-10">
        <Image
          src={carImage}
          alt=""
          className="w-[44vw] h-auto"
          layout="intrinsic"
        />
        <div className="flex flex-col justify-between gap-3">
          {/* icons wit labels */}
          <div className="flex gap-1  items-center">
            <Image
              src={gasStation}
              alt=""
              className="w-[24px] h-[24px] sm:w-[3.7vw] sm:h-[3.7vw]"
            />
            <span className="text-gray-400 text-sm">{gas}</span>
          </div>
          <div className="flex gap-1 items-center">
            <Image
              src={gasStation}
              alt=""
              className="w-[24px] h-[24px] sm:w-[3.7vw] sm:h-[3.7vw]"
            />
            <span className="text-gray-400 text-sm">{type}</span>
          </div>
          <div className="flex gap-1 items-center">
            <Image
              src={profileUsers}
              alt=""
              className="w-[24px] h-[24px] sm:w-[3.7vw] sm:h-[3.7vw]"
            />
            <span className="text-gray-400 text-sm">{users} People</span>
          </div>
        </div>
      </div>

      {/* other details */}
      <div className="flex flex-col gap-7 sm:gap-2">
        <div className="flex justify-between">
          <div className="flex items-center gap-1">
            <span className="text-xl sm:text-lg font-bold">${price}/</span>
            <span className="text-sm text-gray-400">day</span>
          </div>
          <button className="bg-[#3563E9] px-5 py-2 text-sm rounded-md text-white">
            Rental Now
          </button>
        </div>
      </div>
    </div>
  );
}
