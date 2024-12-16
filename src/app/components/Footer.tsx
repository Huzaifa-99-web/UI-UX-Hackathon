// import React from "react";

// export default function Footer() {
//   return (
//     <footer>
//       <div>{/* footer top */}
//         <div>
//             {/* company details */}
//             <h1>MORENT</h1>
//             <p>Our vision is to provide convenience and help increase your sales business.</p>

//         </div>
//         <div>
//             {/* links */}
//         </div>
//       </div>
//       <div>{/* footer bottom part */}</div>
//     </footer>
//   );
// }

// Footer Component

// sm:bg-[#F6F7F9]
import React from "react";

export default function Footer() {
  return (
    <footer className=" w-full h-[480px] sm:h-fit flex flex-col gap-0 bg-white sm:bg-[#F6F7F9]">
      <div className="flex sm:flex-col justify-between py-24 px-12 sm:gap-10 sm:px-5 sm:py-5">
        <div>
          <h1 className="text-blue-600 font-bold text-2xl">MORENT</h1>
          <p className="text-[#90A3BF] font-medium text-sm leading-6 w-72">
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-2 gap-10">
          {/* Add links here */}
          <div className="flex flex-col gap-5">
            {/* About */}
            <h2 className="font-semibold">About</h2>
            <ul className="flex flex-col gap-5 sm:gap-3 text-sm text-[#90A3BF]">
              <li>How it works</li>
              <li>Featured</li>
              <li>Partnership</li>
              <li>Business Relation</li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            {/* Community */}
            <h2 className="font-semibold">Community</h2>
            <ul className="flex flex-col gap-5 sm:gap-3 text-sm text-[#90A3BF]">
              <li>Event</li>
              <li>Blog</li>
              <li>Podcast</li>
              <li>Invite a friend</li>
            </ul>
          </div>
          <div className="flex flex-col gap-5 ">
            {/* Socials */}
            <h2 className="font-semibold">Socials</h2>
            <ul className="flex flex-col gap-5 sm:gap-3 text-sm text-[#90A3BF]">
              <li>Discord</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer bottom part content */}
      <div className="flex flex-col gap-0 w-full">
        <div className="h-1 w-[90vw] max-w-[1320px] sm:hidden border-t-2 mx-auto my-0  "></div>
        <div className="flex sm:flex-col-reverse justify-between px-12 sm:px-5 py-8 sm:py-5 pb-10 sm:pb-5 w-full my-0 sm:gap-5 text-xs">
          <p>©2022 MORENT. All rights reserved</p>
          <div className="flex gap-10 sm:justify-between">
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
