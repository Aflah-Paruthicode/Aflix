import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import LoginFooter from "./LoginFooter";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase-config";
import { checkInputs } from "../utils/validations";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Register = () => {
  const { email } = useParams();
  const emailRef = useRef(email);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);
  const [err, setErr] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    if (email) emailRef.current.value = email;
  }, []);

  function isValidCredentials() {
    let message = checkInputs(
      emailRef.current.value,
      passwordRef.current.value,
      nameRef.current.value
    );
    setErr(message);

    if (message) return;

    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userData) => {
        const user = userData.user;
        updateProfile(user, {
          displayName: nameRef.current.value,
        })
          .then(() => {
            const { uid, email, displayName } = auth.currentUser;
            dispatch(
              addUser({ uid: uid, email: email, displayName: displayName })
            );
          })
          .catch((error) => {
            setErr(error.message);
          });
      })
      .catch((err) => {
        setErr(err.code + "-" + err.message);
      });
  }

  return (
    <div>
      <section className="w-full">
        <Header from={"register"} />
      </section>
      <section className="w-full h-[75vh] max-md:h-[85vh] flex justify-center items-center max-md:px-4 pt-28">
        <div className="w-1/3 h-1/3 m-auto max-md:w-full max-md:h-auto">
          <h1 className="text-3xl font-bold mb-7 max-md:text-xl">Registration</h1>
          <input
            type="text"
            className="border w-full p-3 my-2 rounded-sm"
            ref={nameRef}
            placeholder="name..."
          />
          <input
            type="email"
            className="border w-full p-3 my-2 rounded-sm"
            ref={emailRef}
            placeholder="email..."
          />
          <input
            type="password"
            ref={passwordRef}
            className="border w-full p-3 my-2 rounded-sm"
            placeholder="password"
          />
          {err && (
            <p className="text-red-700 text-base py-3 font-semibold">{err}</p>
          )}
          <input
            type="submit"
            onClick={isValidCredentials}
            className="bg-red-600 py-4 my-3 px-8 font-semibold text-white rounded-sm w-full"
          />
        </div>
      </section>
      <section>
        <LoginFooter from={"register"} />
      </section>
    </div>
  );
};

export default Register;
