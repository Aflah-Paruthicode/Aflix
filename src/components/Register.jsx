import React from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";

const Register = () => {
  const { email } = useParams();
  return (
    <div>
      <section className="w-full">
        <Header from={"register"} />
      </section>
      <section className="w-full h-screen flex justify-center items-center">
        <div className="w-1/3 h-1/3 m-auto">
          <h1 className="text-3xl font-bold mb-7">Registration</h1>
          <input type="email" className="border w-full p-3 my-2 rounded-sm" placeholder="name..." />
          <input type="email" className="border w-full p-3 my-2 rounded-sm" value={email} placeholder="email..." />
          <input type="password" className="border w-full p-3 my-2 rounded-sm" placeholder="password" />
          <input type="submit" className="bg-red-600 py-4 my-3 px-8 font-semibold text-white rounded-sm w-full" />
        </div>
      </section>
      <section>
        <Footer
      </section>
    </div>
  );
};

export default Register;
