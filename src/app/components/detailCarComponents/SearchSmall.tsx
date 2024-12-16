import swap from "../../assets/Swap.png";
import Image from "next/image";

export function SearchSmall() {
  return (
    <div className="relative top-3 left-0 max-w-[1015px] mx-auto w-[70vw] sm:w-[87vw] flex items-center pb-10 sm:flex-col sm:gap-0 sm:relative sm:top-1 ">
      <div className=" absolute top-[30px] left-[0.985%] sm:absolute sm:left-0 sm:top-0 bg-white w-[33vw] max-w-[486px] sm:w-[87vw] sm:max-w-[700px] rounded-xl  h-[132px] sm:h-[120px] flex flex-col justify-between py-5 px-5 ">
        {/* pickup */}
        <div className="flex gap-3 items-center">
          <input type="radio" checked/>
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

      <div >
        {/* <div className="z-10 absolute top-48 right-[34.8vw]"> */}
        {/* button */}
        <button className="absolute left-[46.5%] top-16 z-10  sm:absolute sm:top-[110px] bg-[#3563E9] rounded-xl w-[60px] h-[60px] flex justify-center  items-center swapbtn">
          <Image src={swap} alt="swap" className="w-[20px] h-auto " />
        </button>
      </div>

      <div className="absolute top-[30px] left-[51.7%] sm:absolute sm:left-0 sm:top-40 bg-white w-[33vw] max-w-[486px] sm:w-[87vw] sm:max-w-[700px] rounded-xl  h-[132px] sm:h-[120px] flex flex-col justify-between py-5 px-5 ">
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
