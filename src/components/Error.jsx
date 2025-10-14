import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
    const navigate = useNavigate();
  return (
    <div className="bg-black w-full h-screen flex justify-center items-center">
      <div>
        <h1 className="text-white text-2xl my-2">Something Went Wrong</h1>
        <button className="bg-white text-red-600 font-semibold py-2 px-4 rounded-lg" onClick={() => navigate('/browse')}>Back to Home</button>
      </div>
    </div>
  );
};

export default Error;
