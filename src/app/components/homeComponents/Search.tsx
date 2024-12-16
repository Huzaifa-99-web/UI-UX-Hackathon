import swap from "../../assets/Swap.png";
import Image from "next/image";

export function Search() {
  return (
    <div className="flex sm:flex-col w-full mx-auto gap-10 sm:gap-0 items-center pb-10 sm:relative sm:top-40">
      <div className="sm:absolute sm:top-0 bg-white w-[40.42vw] sm:w-[87vw] h-[132px] flex flex-col justify-between py-6 sm:py-5 px-8 sm:px-6 rounded-lg">
        {/* pickup */}
        <div className="flex gap-3 items-center">
          <input type="radio" />
          <span>Pick - Up</span>
        </div>

        <div className="flex gap-5">
          {/* selct options x 3 */}
          <div className="w-[126px]">
            {/* select field 1 */}
            <span className="font-semibold">Locations</span>
            <select className="w-full rounded border h-[20px] text-xs text-gray-500 border-none">
              <option>Select your city</option>
              <option value="ny">New York</option>
              <option value="la">Los Angeles</option>
              <option value="ch">Chicago</option>
            </select>
          </div>

          <div className="w-1 h-[48px] border-r-2 border-[#C3D4E966]"></div>

          <div className="w-[126px]">
            {/* select field 2 */}
            <span className="font-semibold">Date</span>
            <select className="w-full rounded border h-[20px] text-xs text-gray-500  border-none">
              <option>Select your city</option>
              <option value="ny">New York</option>
              <option value="la">Los Angeles</option>
              <option value="ch">Chicago</option>
            </select>
          </div>

          <div className="w-1 h-[48px] border-r-2 border-[#C3D4E966]"></div>

          <div className="w-[126px]">
            {/* select field 3 */}
            <span className="font-semibold">Time</span>
            <select className="w-full rounded border h-[20px] text-xs text-gray-500 border-none">
              <option>Select your city</option>
              <option value="ny">New York</option>
              <option value="la">Los Angeles</option>
              <option value="ch">Chicago</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        {/* button */}
        <button className="sm:absolute sm:top-28 sm:left-[42vw] bg-[#3563E9] rounded-xl w-[60px] h-[60px] flex justify-center items-center z-20 swapbtn">
          <Image src={swap} alt="swap" className="w-[20px] h-auto " />
        </button>
      </div>

      <div className="sm:absolute sm:top-40 bg-white w-[40.42vw] sm:w-[87vw] h-[132px] flex flex-col justify-between py-6 px-8 rounded-lg">
        {/* drop off */}
        <div className="flex gap-3 items-center">
          <input type="radio" />
          <span>Drop - Off</span>
        </div>

        <div className="flex gap-5">
          {/* selct options x 3 */}
          <div className="w-[126px]">
            {/* select field 1 */}
            <span className="font-semibold">Locations</span>
            <select className="w-full rounded border h-[20px] text-xs text-gray-500  border-none">
              <option>Select your city</option>
              <option value="ny">New York</option>
              <option value="la">Los Angeles</option>
              <option value="ch">Chicago</option>
            </select>
          </div>

          <div className="w-1 h-[48px] border-r-2 border-[#C3D4E966]"></div>

          <div className="w-[126px]">
            {/* select field 2 */}
            <span className="font-semibold">Date</span>
            <select className="w-full rounded border h-[20px] text-xs text-gray-500 border-none">
              <option>Select your city</option>
              <option value="ny">New York</option>
              <option value="la">Los Angeles</option>
              <option value="ch">Chicago</option>
            </select>
          </div>

          <div className="w-1 h-[48px] border-r-2 border-[#C3D4E966]"></div>

          <div className="w-[126px]">
            {/* select field 3 */}
            <span className="font-semibold">Time</span>
            <select className="w-full rounded border h-[20px] text-xs text-gray-500 border-none">
              <option>Select your city</option>
              <option value="ny">New York</option>
              <option value="la">Los Angeles</option>
              <option value="ch">Chicago</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
