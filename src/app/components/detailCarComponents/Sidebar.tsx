"use client";
import { useState } from "react";
import Checkbox from "./Checkbox";


export function Sidebar() {

  return (
    <div className="h-full w-[25vw] max-w-[360px] sm:w-full bg-white px-8 py-10 flex flex-col gap-8  relative left-0 sm:absolute sm:top-32 sm:z-20 sm:h-fit sm:hidden">
      {/* Type */}
      <div className="flex flex-col gap-5">
        <h2 className="text-sm text-gray-400">Type</h2>
        <div className="flex flex-col gap-5">
          <Checkbox name="Sport" count={10} checked={true} />
          <Checkbox name="SUV" count={12} checked={true} />
          <Checkbox name="MPV" count={16} checked={false} /> 
          <Checkbox name="Sedan" count={12} checked={false} />
          <Checkbox name="Coupe" count={14} checked={false} />
          <Checkbox name="Hatchback" count={14} checked={false} />
        </div>
      </div>

      {/* Capacity */}
      <div className="flex flex-col gap-5">
        <h2 className="text-sm text-gray-400">Capacity</h2>
        <div className="flex flex-col gap-5">
          <Checkbox name="2 Person" count={10} checked={true} />
          <Checkbox name="4 Person" count={14} checked={false} />
          <Checkbox name="6 Person" count={12} checked={false} />
          <Checkbox name="8 or More" count={16} checked={true} />
        </div>
      </div>

      {/* Price Range */}
      <div className="flex flex-col gap-5">
        <h2 className="text-sm text-gray-400">Price</h2>
        <div>
          <input
            type="range"
            min="0"
            max="100"
            //   step="1"
            defaultValue="75"
            className="w-[20vw] max-w-[296px] bg-gray-500 rounded-lg cursor-pointer"
          />
          <p className="text-lg">Max. $100.00</p>
        </div>

      </div>
    </div>
  );
}
