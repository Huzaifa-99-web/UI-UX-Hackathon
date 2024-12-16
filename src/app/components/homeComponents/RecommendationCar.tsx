import React from "react";
import filledHeart from "../../assets/car-card/heart-filled.png";
import heart from "../../assets/car-card/heart.png";
import car from "../../assets/cars/car.png";
import Car from "./Car";
import CarHorizontal from "./CarHorizontal";

export default function RecommendationCar() {
  return (
    <section className="w-full pb-10 sm:relative sm:top-[450px]">
      <div className="flex items-center justify-between px-2">
        <h2 className="text-gray-400 font-bold">Recommendation Car</h2>
        <a href="#" className="text-blue-500 hover:underline hidden">
          View All
        </a>
      </div>

      {/* Must be hidden when it has only 1 col */}
      <div className="mt-6 grid grid-cols-4 gap-7  sm:hidden">
        <Car
          name="Koenigsegg"
          category="Sports"
          heart={filledHeart}
          carImage={car}
          gas="90L"
          type="Manual"
          users={2}
          price="99.0"
        />
        <Car
          name="Koenigsegg"
          category="Sports"
          heart={filledHeart}
          carImage={car}
          gas="90L"
          type="Manual"
          users={2}
          price="99.0"
        />
        <Car
          name="Koenigsegg"
          category="Sports"
          heart={filledHeart}
          carImage={car}
          gas="90L"
          type="Manual"
          users={2}
          price="99.0"
        />
        <Car
          name="Koenigsegg"
          category="Sports"
          heart={filledHeart}
          carImage={car}
          gas="90L"
          type="Manual"
          users={2}
          price="99.0"
        />
        <Car
          name="Koenigsegg"
          category="Sports"
          heart={filledHeart}
          carImage={car}
          gas="90L"
          type="Manual"
          users={2}
          price="99.0"
        />
        <Car
          name="Koenigsegg"
          category="Sports"
          heart={filledHeart}
          carImage={car}
          gas="90L"
          type="Manual"
          users={2}
          price="99.0"
        />
        <Car
          name="Koenigsegg"
          category="Sports"
          heart={filledHeart}
          carImage={car}
          gas="90L"
          type="Manual"
          users={2}
          price="99.0"
        />
        <Car
          name="Koenigsegg"
          category="Sports"
          heart={filledHeart}
          carImage={car}
          gas="90L"
          type="Manual"
          users={2}
          price="99.0"
        />
        {/* {cars.map((car, index) => (
          <Car key={index} {...car} />
        ))} */}
      </div>
      {/* replacement of upper div in small screen */}
      <div className="hidden sm:flex flex-col mt-6 gap-5">
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
          gas="90L"
          type="Manual"
          users={2}
          price="99.0"
        />
      </div>

      <div className="flex justify-center items-center mt-14 mb-6">
        <button className="bg-[#3563E9] text-sm text-white w-fit rounded-md px-5 py-3">
          Show more car
        </button>
        {/* <span className=" text-gray-400 text-right text-sm font-semibold absolute right-5 mr-5 sm:mr-0 sm:right-2">
          120 Car
        </span> */}
      </div>
    </section>
  );
}
