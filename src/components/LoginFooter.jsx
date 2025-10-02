import React from "react";

const LoginFooter = (props) => {
  const { from } = props;
  return (
    <div
      className={` ${
        from == "register"
          ? "bg-[#eaeaeafa] text-[#1a1a1a]"
          : "bg-[#1a1a1a] text-[#c6c5c5fa]"
      } w-full h-60 flex justify-center items-center`}
    >
      <div className="w-1/2 ">
        <h1 className="mb-5">Questions? Call +91-9567-XXXX-37 (Toll-Free)</h1>
        <div className="flex gap-44 mb-5 underline text-[13px]">
          <p>FAQ</p>
          <p>Help Centre</p>
          <p>Terms of Use</p>
          <p>Privacy</p>
        </div>
        <div className="flex gap-[70px] underline">
          <p>Cookie Preferences</p>
          <p>Corporate Information</p>
        </div>
      </div>
    </div>
  );
};

export default LoginFooter;
