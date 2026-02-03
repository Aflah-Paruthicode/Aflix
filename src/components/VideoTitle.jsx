import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[20%] pl-18 max-md:pl-6 absolute text-white bg-gradient-to-r from-black ">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4 max-md:hidden">{overview}</p>
      <div className="flex gap-2 max-md:mt-2">
        <button className="bg-white py-3 max-md:py-[6px] max-md:px-5 hover:bg-[#c2c2c2] px-11 text-black font-bold rounded-sm flex gap-1 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#00000">
            <path d="M286-139v-682l537 341-537 341Zm126-341Zm0 111 175-111-175-111v222Z" />
          </svg>{" "}
          Play
        </button>
        <button className="bg-[#6e6e6e6f] py-3 max-md:py-[6px] max-md:px-5 px-11 font-semibold rounded-sm flex gap-1 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF">
            <path d="M478-240q21 0 35.5-14.5T528-290q0-21-14.5-35.5T478-340q-21 0-35.5 14.5T428-290q0 21 14.5 35.5T478-240Zm-36-154h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342-618l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506-526q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
          </svg>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
