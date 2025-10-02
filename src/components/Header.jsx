import React from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../utils/constants";

const Header = (props) => {
  const navigate = useNavigate()
  const {from} = props;
  return (
    <div className={`absolute z-20 ${from == 'register' ? 'bg-white border-b py-5' : 'bg-gradient-to-b from-black'} w-full`}>
      {from == 'login' ? <img className="ml-96 w-28 mt-4" src="./AflixLogo.png" alt="" /> :
      <div className="inline-flex w-full gap-24 justify-around items-center">
          <img className="w-28 mt-4" src={Logo} alt="" />
          <div className="mt-2">
            <select
              className={` ${from == 'register' ? 'bg-white mr-4 text-[#000000e3]' : 'text-white mr-4 bg-[#0d0d0d78]'} border border-[#303030] rounded-sm py-1 px-4`}
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
        </div>}
    </div>
  );
};

export default Header;
