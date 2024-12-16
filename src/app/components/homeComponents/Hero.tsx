import Link from "next/link";
import Image from "next/image";
import image1 from "../../assets/heroimages/image 7.png";
import image2 from "../../assets/heroimages/image 8.png";

export default function Hero() {
  return (
    <div className="flex gap-6 mx-auto py-10 sm:py-0 sm:mx-0">
      {/* hero1 */}
      <div className="relative w-[640px] sm:w-[87vw] rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 p-8 sm:p-5 h-[360px] sm:h-[232px] sm:absolute sm:top-44 sm:left-[7vw]">
        <div className="mb-4">
          <div className="flex flex-col sm:flex-row sm:gap-2">
            <h2 className="text-3xl sm:text-base sm:font-normal font-bold text-white mb-2">
              The Best Platform
            </h2>
            <h3 className="text-2xl sm:text-base sm:font-normal font-bold text-white">
              for Car Rental
            </h3>
          </div>
          <p className="mt-4 sm:mt-0 text-white sm:text-xs sm:w-[70%] max-w-[284px]">
          Ease of doing a car rental safely and reliably. Of course at a low price.
          </p>
        </div>
        <button
          className="inline-flex items-center justify-center rounded-md bg-[#3563E9] px-8 py-3 text-sm font-medium text-white shadow hover:bg-[#3563E9]/90"
        >
          Rental Car
        </button>
        <div className="mt-4 sm:mt-6 sm:pb-3 flex justify-center">
          <Image
            // src="/placeholder.svg?height=200&width=400"
            src={image1}
            alt="White Sports Car"
            width={400}
            height={200}
            className="object-contain sm:mx-auto sm:w-[196px] max-w-[406px]"
          />
        </div>
      </div>

      {/* hero2 */}
      <div className="sm:hidden relative w-[640px] rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 p-8  h-[360px]">
        <div className="mb-4">
          <h2 className="text-3xl font-bold text-white mb-2">
            Easy way to rent a
          </h2>
          <h3 className="text-2xl font-bold text-white">car at a low price</h3>
          <p className="mt-4 text-white/90 max-w-[284px]">
          Providing cheap car rental services and safe and comfortable facilities.
          </p>
        </div>
        <Link
          href="#"
          className="inline-flex items-center justify-center rounded-md bg-[#54A6FF] px-6 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#54A6FF]/90"
        >
          Rental Car
        </Link>
        <div className="mt-4 flex justify-center">
          <Image
            src={image2}
            alt="Silver Sports Car"
            width={400}
            height={200}
            className="object-contain max-w-[340px]"
          />
        </div>
      </div>
    </div>
  );
}
