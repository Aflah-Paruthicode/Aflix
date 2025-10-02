import React, { useEffect } from "react";
import useNowPlayingMovies from "../utils/useNowPlayingMovies";
import { Logo, usersInTheAc } from "../utils/constants";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <section className="inline-flex w-full gap-24 justify-between items-center bg-gradient-to-b from-black absolute px-16">
        <div className="flex items-center text-white font-semibold">
          <img className="w-28 mt-4" src={Logo} alt="" />
          <ul className="mt-4 flex ml-10 gap-5">
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse By Languages</li>
          </ul>
        </div>
        <div className="mt-2 flex gap-5 items-center text-white font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#FFFFFF"
          >
            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
          </svg>
          <p>Children</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#FFFFFF"
          >
            <path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z" />
          </svg>
          <select
            className={`text-white mr-4 bg-[#0d0d0d78] border border-[#303030] rounded-sm py-1 px-4`}
            name=""
            id=""
          >
            {usersInTheAc.map((ele,ind) => {
              return (
                <option className="text-black bg-white" value={ele.name}> 
                <div className="flex gap-3">
                <img className="w-20 h-20" src='https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg' alt="" />
                  <p>{ele.name}</p>
                </div>
              </option>)
            })}
          </select>
        </div>
      </section>
      <section className="absolute top-0 z-[-1] w-full">
        <img className="w-full h-screen brightness-[60%] object-cover" src="https://4kwallpapers.com/images/wallpapers/demon-slayer-3840x2160-23247.jpg" alt="" />
      </section>
    </div>
  );
};

export default Browse;
