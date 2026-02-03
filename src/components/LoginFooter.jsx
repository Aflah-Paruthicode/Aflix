import React from "react";

const LoginFooter = (props) => {
  const { from } = props;
  return (
    <div
      className={` ${
        from == "register" ? "bg-[#eaeaeafa] text-[#1a1a1a]" : "bg-[#1a1a1a] text-[#c6c5c5fa]"
      } w-full h-60 flex justify-center items-center max-md:flex-wrap`}
    >
      <div className="w-1/2 max-md:flex max-md:flex-wrap max-md:justify-between max-md:items-center max-md:w-[90%]">
        <h1 className="mb-5">Questions? Call +91-9567-XXXX-37 (Toll-Free)</h1>
        <div className="flex gap-44 max-md:gap-4 max-md:flex-col mb-5 underline text-[13px]">
          <p>FAQ</p>
          <p>Help Centre</p>
          <p>Terms of Use</p>
          <p>Privacy</p>
        </div>
        <div className="flex gap-[70px] max-md:flex-col max-md:gap-5 underline">
          <p>Cookie Preferences</p>
          <p>Corporate Information</p>
        </div>
      </div>
    </div>
  );
};

export default LoginFooter;
