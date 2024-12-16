import React from "react";
import filledHeart from "../../assets/car-card/heart-filled.png";
import car from "../../assets/cars/car.png";
import CarCard from "./CarCard";
import CarHorizontal from "../homeComponents/CarHorizontal";

export default function CarGrid() {
  return (
    <section className="relative top-32 sm:absolute sm:top-[650px] sm:left-[7vw] sm:flex sm:flex-col mx-auto w-[70vw] sm:w-[87vw] max-w-[1015px] ">
      {/* hidden in small screen bcz card styling changed */}
      <div className="grid grid-cols-3 gap-x-5 gap-y-5 sm:hidden">
        <CarCard
          name="Koenigsegg"
          category="Sport"
          heart={filledHeart}
          carImage={car}
          gas="90L"
          type="Manual"
          users={2}
          price="99.00"
        />
        <CarCard
          name=""
          category=""
          heart={filledHeart}
          carImage={car}
          gas=""
          type=""
          users={2}
          price=""
        />
        <CarCard
          name=""
          category=""
          heart={filledHeart}
          carImage={car}
          gas=""
          type=""
          users={2}
          price=""
        />
        <CarCard
          name=""
          category=""
          heart={filledHeart}
          carImage={car}
          gas=""
          type=""
          users={2}
          price=""
        />
        <CarCard
          name=""
          category=""
          heart={filledHeart}
          carImage={car}
          gas=""
          type=""
          users={2}
          price=""
        />
        <CarCard
          name=""
          category=""
          heart={filledHeart}
          carImage={car}
          gas=""
          type=""
          users={2}
          price=""
        />
        <CarCard
          name=""
          category=""
          heart={filledHeart}
          carImage={car}
          gas=""
          type=""
          users={2}
          price=""
        />
        <CarCard
          name=""
          category=""
          heart={filledHeart}
          carImage={car}
          gas=""
          type=""
          users={2}
          price=""
        />
        <CarCard
          name=""
          category=""
          heart={filledHeart}
          carImage={car}
          gas=""
          type=""
          users={2}
          price=""
        />
      </div>
      {/* replacement of upper div in small screen */}
      <div className="hidden sm:flex flex-col  mt-6 sm:mt-0 mx-auto gap-5 w-[87vw]">
        <CarHorizontal
          name="Koenigsegg"
          category="Sports"
          heart={filledHeart}
          carImage={car}
          gas="70L"
          type="auto"
          users={2}
          price="88.00"
        />
        <CarHorizontal
          name="Koenigsegg"
          category="Sports"
          heart={filledHeart}
          carImage={car}
          gas="90L"
          type="Manual"
          users={2}
          price="99.0"
        />
        <CarHorizontal
          name="Koenigsegg"
          category="Sports"
          heart={filledHeart}
          carImage={car}
          gas="80L"
          type="Manual"
          users={2}
          price="95.0"
        />
        <CarHorizontal
          name="Koenigsegg"
          category="Sports"
          heart={filledHeart}
          carImage={car}
          gas="90L"
          type="Manual"
          users={2}
          price="99.0"
        />
        <CarHorizontal
          name="Koenigsegg"
          category="Sports"
          heart={filledHeart}
          carImage={car}
          gas="60L"
          type="auto"
          users={2}
          price="52.00"
        />
      </div>

      <div className="flex justify-center items-center mt-14 ">
        <button className="bg-[#3563E9] text-white w-fit rounded-md px-5 py-3">
          Show more car
        </button>
        {/* <span className="text-gray-400 text-right text-sm font-semibold absolute right-5 mr-5 sm:mr-0 sm:right-2">
          120 Car
        </span> */}
      </div>
    </section>
  );
}
