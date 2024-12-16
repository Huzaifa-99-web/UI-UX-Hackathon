// import { CarCard } from "@/components/car-card"
import Car from "./Car"
import heart from "../../assets/car-card/heart.png"
import filledHeart from "../../assets/car-card/heart-filled.png"
import car from "../../assets/cars/car.png";

export function PopularCars() {
//   const cars = [
//     {
//       name: "Koenigsegg",
//       category: "Sport",
//       image: "/placeholder.svg?height=200&width=300",
//       specs: {
//         capacity: "90L",
//         transmission: "Manual",
//         people: 2
//       },
//       price: {
//         amount: 99.00,
//         currency: "USD"
//       },
//       isFavorite: true
//     },
//     {
//       name: "Nissan GT-R",
//       category: "Sport",
//       image: "/placeholder.svg?height=200&width=300",
//       specs: {
//         capacity: "80L",
//         transmission: "Manual",
//         people: 2
//       },
//       price: {
//         amount: 80.00,
//         currency: "USD"
//       }
//     },
//     // Add more cars as needed
//   ]

  return (
    <section className="pb-10 w-full sm:relative sm:top-[450px]">
      <div className="flex items-center justify-between px-2">
        <h2 className="text-gray-400 font-bold">Popular Car</h2>
        <a href="/detail-car" className="text-blue-500 hover:underline">
          View All
        </a>
      </div>
      <div className="mt-6 grid grid-cols-4 gap-[2%] sm:gap-[69vw] sm:overflow-x-scroll sm:pr-0 sm:mr-0 sm:inset-x-0 sm:no-scrollbar overflow-x-hidden">
        <Car name="Koenigsegg" category="Sports" heart={filledHeart} carImage={car} gas="90L" type="Manual" users={2} price="99.0"/>
        <Car name="Koenigsegg" category="Sports" heart={filledHeart} carImage={car} gas="90L" type="Manual" users={2} price="99.0"/>
        <Car name="Koenigsegg" category="Sports" heart={filledHeart} carImage={car} gas="90L" type="Manual" users={2} price="99.0"/>
        <Car name="Koenigsegg" category="Sports" heart={filledHeart} carImage={car} gas="90L" type="Manual" users={2} price="99.0"/>
        {/* {cars.map((car, index) => (
          <Car key={index} {...car} />
        ))} */}
      </div>
    </section>
  )
}

