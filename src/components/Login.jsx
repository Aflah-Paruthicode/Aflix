import React, { useRef, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { checkInputs } from "../utils/validations";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase-config";
import LoginFooter from "./LoginFooter";
import { LoginPageBgImg } from "../utils/constants";

const Login = () => {
  const email = useRef(null);
  const password = useRef(null);
  const [err, setErr] = useState();

  function isValidCredentials() {
    let message = checkInputs(email.current.value, password.current.value,null);
    setErr(message);

    if (message) return;

    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userData) => {
        const user = userData.user;
      })
      .catch((err) => {
        setErr(err.code + "-" + err.message);
      });
  }

  return (
    <div className="w-full"> 
      <Header from={"login"} /> 
      <div className=" brightness-50 h-[90vh] max-md:h-[100vh] w-full"> 
        <img
          className="w-full h-[90vh] max-md:h-screen object-cover object-top"
          src={LoginPageBgImg}
          alt=""
        /> 
      </div> 
      <div className="absolute left-0 right-0 mx-auto top-24 bg-[#000000a6] w-[29rem] max-md:w-[90%] p-16 max-md:py-4 max-md:px-6 rounded-sm">
        <h1 className="text-white font-bold text-4xl mb-8 max-md:text-2xl">Sign In</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            ref={email}
            className="bg-[#1a1a1ab6] w-full h-14 mb-4 rounded-sm border text-[#888888] p-2 font-semibold"
            placeholder="Enter your email"
            type="text"
          /> 
          <input
            ref={password}
            className="bg-[#1a1a1ab6] w-full h-14 mb-4 rounded-sm border text-[#888888] p-5 font-semibold"
            placeholder="Password"
            type="password"
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
        <p className="text-[#888888] font-bold text-center mb-4 max-md:hidden">OR</p>
        <input
          className="bg-[#474747c4] w-full h-10 mb-4 font-semibold text-white rounded-sm max-md:hidden"
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
      <section>
        <LoginFooter />
      </section>
    </div>
  );
};

export default Login;
