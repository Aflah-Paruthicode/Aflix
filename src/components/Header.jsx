import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Logo, usersInTheAc } from "../utils/constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase-config";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { changeGeminiSearchState } from "../utils/geminiSlice";

const Header = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userName = useSelector((store) => store.user?.displayName)
  const toggleSearch = useSelector(store => store.gemini.isGeminiSearchEnable)
  const [currentUser, setCurrentUser] = useState({
    icon: usersInTheAc[0].icon,
  });
  const [isDropDownEnable, setIsDropDownEnable] = useState(false);
  const { from } = props;

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        navigate("/error");
      });
  };

    useEffect(() => {
     const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate('/browse')
      } else {
        dispatch(removeUser());
        if (window.location.pathname !== "/" && window.location.pathname !== "/SignUp" && !window.location.pathname.startsWith("/register")) {
          navigate('/')
        }
      }
    });

    return () => unsubscribe();
  }, []);

  return from == "browse" ? (
    <div className="inline-flex w-full md:gap-24 justify-between items-center bg-gradient-to-b from-black z-[999999999]  px-16 max-md:px-5 absolute">
      <div className="md:flex items-center text-white font-semibold">
        <img className="w-28 mt-4 max-md:w-20 max-md:mr-8" src={Logo} alt="" />
        <ul className="mt-4 flex ml-10 gap-5 max-md:hidden"> 
          <li className="hover:underline hover:decoration-red-600 hover:decoration-2 underline-offset-4 cursor-pointer">Home</li>
          <li className="hover:underline hover:decoration-red-600 hover:decoration-2 underline-offset-4 cursor-pointer">TV Shows</li>
          <li className="hover:underline hover:decoration-red-600 hover:decoration-2 underline-offset-4 cursor-pointer">Movies</li>
          <li className="hover:underline hover:decoration-red-600 hover:decoration-2 underline-offset-4 cursor-pointer">New & Popular</li>
          <li className="hover:underline hover:decoration-red-600 hover:decoration-2 underline-offset-4 cursor-pointer">My List</li>
          <li className="hover:underline hover:decoration-red-600 hover:decoration-2 underline-offset-4 cursor-pointer">Browse By Languages</li>
        </ul>
      </div>
      <div className="mt-2 flex gap-5 items-center text-white font-semibold max-md:z-[9999999]">
        <button className="bg-transparent flex items-center py-2 px-3 gap-1 cursor-pointer border rounded-md hover:text-white hover:bg-red-600 hover:border-none transition-all duration-200" onClick={() => dispatch(changeGeminiSearchState())} >
        {!toggleSearch && <img className="w-6 rounded-full" src="/ai.png" alt="" />}
        <p className="font-medium text-sm max-md:hidden">{toggleSearch ? 'Home' : 'Gemini Search'}</p>
        <p className="text-sm md:hidden">{toggleSearch ? 'Home' : 'Gemini'}</p>
        </button>
        <p className="hover:underline hover:decoration-red-600 hover:decoration-2 underline-offset-4 cursor-pointer max-md:hidden">Kids</p>
        <svg className="max-md:hidden"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#FFFFFF"
        >
          <path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z" />
        </svg>
        <div
          className="flex gap-3 items-center cursor-pointer"
          onClick={() => setIsDropDownEnable(!isDropDownEnable)}
        >
          <img className="w-10 rounded-sm" src={currentUser.icon} alt="" />
          <p className="hover:underline hover:decoration-red-600 hover:decoration-2 underline-offset-4 cursor-pointer">{userName}</p>
        </div>
        {isDropDownEnable && (
          <div className="absolute top-20 right-10 p-3 bg-[#000000c6] border w-[270px] border-[#ffffff39] rounded-sm max-md:z-[499999]">
            {usersInTheAc.map((ele, ind) => {
              return (
                <div className="flex gap-3 m-2 text-white hover:underline hover:decoration-red-600 hover:decoration-2 underline-offset-4 cursor-pointer">
                  {ele.icon && (
                    <img
                      className="w-10 rounded-sm h-10 object-cover"
                      src={ele.icon}
                      alt=""
                    /> 
                  )}
                  {ele.svg && (
                    <svg
                      className="mx-2 my-[2px]"
                      xmlns={ele.svg.xmlns}
                      height={ele.svg.height}
                      viewBox={ele.svg.viewBox}
                      width={ele.svg.width}
                      fill={ele.svg.fill}
                    >
                      <path d={ele.svg.d}></path>
                    </svg>
                  )}
                  <p className="my-auto">{ele.name ? ele.name : userName}</p>
                </div>
              );
            })}
            <hr className="my-3 text-[#ffffff39]" />
            <p
              className="text-center hover:underline hover:decoration-red-600 hover:decoration-2 underline-offset-4 cursor-pointer"
              onClick={handleSignOut}
            >
              Sign Out Of Netflix
            </p>
          </div>
        )}
      </div>
    </div>
  ) : (
    <div
      className={`absolute z-20 ${
        from == "register"
          ? "bg-white border-b py-5"
          : "bg-gradient-to-b from-black"
      } w-full`}
    >
      {from == "login" ? (
        <img className="ml-96 max-md:ml-2 max-md:w-20 w-28 mt-4" src="./AflixLogo.png" alt="" />
      ) : (
        <div className="inline-flex w-full gap-24 max-md:gap-3 max-md:mt-2 justify-around items-center">
          <img className="w-28 mt-4 max-md:w-20" src={Logo} alt="" />
          <div className="mt-2">
            <select
              className={` ${
                from == "register"
                  ? "bg-white mr-4 text-[#000000e3]"
                  : "text-white mr-4 bg-[#0d0d0d78]"
              } border border-[#303030] rounded-sm py-1 px-4`}
              name=""
              id=""
            >
              <option className="text-black bg-white" value="English">
                English
              </option>
              <option className="text-black bg-white" value="Hindi">
                Hindi
              </option>
            </select>
            <button
              onClick={() => navigate("/")}
              className="py-1 px-4 bg-red-600 text-white font-semibold rounded-sm"
            >
              Sign in
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
