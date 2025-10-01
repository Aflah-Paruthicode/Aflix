import React, { useRef, useState } from "react";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import { checkInputs } from "../utils/validations";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase-config";

const Login = () => {
  const email = useRef(null);
  const password = useRef(null);
  const [err, setErr] = useState();
  const navigate = useNavigate();

  function isValidCredentials() {
    let message = checkInputs(email.current.value, password.current.value);
    setErr(message);

    if (message) return;

    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userData) => {
        const user = userData.user;
        navigate('/browse')
        console.log(user);
      })
      .catch((err) => {
        setErr(err.code + "-" + err.message);
      });
  }

  return (
    <div className="w-full">
      <Header from={'login'} />
      <div className=" brightness-50 h-[90vh] w-full">
        <img
          className="w-full h-[90vh] object-cover object-top"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"
          alt=""
        />
      </div>
      <div className="absolute left-0 right-0 mx-auto top-20 bg-[#000000a6] w-[29rem] p-16 rounded-sm">
        <h1 className="text-white font-bold text-4xl mb-8">Sign In</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            ref={email}
            className="bg-[#1a1a1ab6] w-full h-14 mb-4 rounded-sm border text-[#888888] p-2 font-semibold"
            placeholder="Email or mobile number"
            type="text"
          />
          <input
            ref={password}
            className="bg-[#1a1a1ab6] w-full h-14 mb-4 rounded-sm border text-[#888888] p-2 font-semibold"
            placeholder="Password"
            type="text"
          />
          {err && (
            <p className="text-red-700 text-base py-3 font-semibold">{err}</p>
          )}
          <input
            onClick={isValidCredentials}
            className="bg-red-700 w-full h-10 mb-4 font-semibold text-white rounded-sm"
            value="Sign In"
            type="submit"
          />
        </form>
        <p className="text-[#888888] font-bold text-center mb-4">OR</p>
        <input
          className="bg-[#474747c4] w-full h-10 mb-4 font-semibold text-white rounded-sm"
          value="Use a sign-in code"
          type="submit"
        />
        <p className="text-center font-normal mb-4 text-white underline">
          Forgot password?
        </p>
        <div className="flex gap-2 mb-4">
          <input className="accent-white" type="checkbox" name="" id="" />
          <p className="text-white">Remember me</p>
        </div>
        <p className="text-[#a2a2a2de] font-medium mb-4">
          New to Netflix?
          <Link to={"/SignUp"}>
            <span className="text-white">Sign up now.</span>
          </Link>
        </p>
        <p className="text-[12px] text-[#a2a2a2de] mb-4">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </p>
        <p className="text-[12px] text-[#396ccbde] underline">Learn more.</p>
      </div>
      <div className="bg-[#1a1a1a] w-full h-60 flex justify-center items-center text-[#c6c5c5fa]">
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
    </div>
  );
};

export default Login;
